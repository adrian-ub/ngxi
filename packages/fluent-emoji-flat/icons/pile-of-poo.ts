import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiFlatPileOfPooIcon],svg[fluent-emoji-flat-pile-of-poo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#B35F47" d="M22.072 6.66c.126 1.058-.063 1.734-.309 2.133c2.029.56 3.879 1.974 4.743 3.82c.625 1.532.66 3.359.192 5.027C29.18 18.847 31 21.547 31 24.429c0 3.722-2.723 6.399-6.574 6.624v.016H9.03v-.004C4.26 30.95 2 27.75 2 24.023c0-2.494 2.149-5.47 4.549-6.49c-.002-.22.02-.387.056-.512c-.929-1.88.021-3.78.618-4.5l.227-.294l.01-.013c.83-1.083 1.331-1.736 4.895-3.279c3.887-1.683 5.269-3.336 5.8-4.006c.146-.184.281-.425.42-.672c.366-.652.763-1.358 1.478-1.245c.987.156 1.761 1.465 2.02 3.647"></svg:path><svg:path fill="#F92F60" d="M12.625 25.159h7.906c0 2.379-1.77 3.918-3.953 3.918s-3.953-1.476-3.953-3.918"></svg:path><svg:path fill="#fff" fill-rule="evenodd" d="M15.585 19.619a4.485 4.485 0 1 1-8.97 0a4.485 4.485 0 0 1 8.97 0m10.9 0a4.485 4.485 0 1 1-8.97 0a4.485 4.485 0 0 1 8.97 0" clip-rule="evenodd"></svg:path><svg:path fill="#402A32" fill-rule="evenodd" d="M12.015 22.131a2.483 2.483 0 1 0 0-4.967a2.483 2.483 0 0 0 0 4.967m9.011 0a2.483 2.483 0 1 0 0-4.967a2.483 2.483 0 0 0 0 4.967" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class FluentEmojiFlatPileOfPooIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
