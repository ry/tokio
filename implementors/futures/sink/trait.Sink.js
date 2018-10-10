(function() {var implementors = {};
implementors["tokio_channel"] = [{text:"impl&lt;T&gt; <a class=\"trait\" href=\"https://docs.rs/futures/0.1/futures/sink/trait.Sink.html\" title=\"trait futures::sink::Sink\">Sink</a> for <a class=\"struct\" href=\"tokio_channel/mpsc/struct.Sender.html\" title=\"struct tokio_channel::mpsc::Sender\">Sender</a>&lt;T&gt;",synthetic:false,types:["tokio_channel::mpsc::Sender"]},{text:"impl&lt;T&gt; <a class=\"trait\" href=\"https://docs.rs/futures/0.1/futures/sink/trait.Sink.html\" title=\"trait futures::sink::Sink\">Sink</a> for <a class=\"struct\" href=\"tokio_channel/mpsc/struct.UnboundedSender.html\" title=\"struct tokio_channel::mpsc::UnboundedSender\">UnboundedSender</a>&lt;T&gt;",synthetic:false,types:["tokio_channel::mpsc::UnboundedSender"]},{text:"impl&lt;'a, T&gt; <a class=\"trait\" href=\"https://docs.rs/futures/0.1/futures/sink/trait.Sink.html\" title=\"trait futures::sink::Sink\">Sink</a> for &amp;'a <a class=\"struct\" href=\"tokio_channel/mpsc/struct.UnboundedSender.html\" title=\"struct tokio_channel::mpsc::UnboundedSender\">UnboundedSender</a>&lt;T&gt;",synthetic:false,types:["tokio_channel::mpsc::UnboundedSender"]},];
implementors["tokio_udp"] = [{text:"impl&lt;C:&nbsp;<a class=\"trait\" href=\"tokio_io/codec/encoder/trait.Encoder.html\" title=\"trait tokio_io::codec::encoder::Encoder\">Encoder</a>&gt; <a class=\"trait\" href=\"https://docs.rs/futures/0.1/futures/sink/trait.Sink.html\" title=\"trait futures::sink::Sink\">Sink</a> for <a class=\"struct\" href=\"tokio_udp/struct.UdpFramed.html\" title=\"struct tokio_udp::UdpFramed\">UdpFramed</a>&lt;C&gt;",synthetic:false,types:["tokio_udp::frame::UdpFramed"]},];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
