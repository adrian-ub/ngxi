import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneCandleIcon],svg[emojione-candle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:ellipse cx="32" cy="55.1" fill="#a29b95" rx="17.9" ry="6.9"></svg:ellipse><svg:ellipse cx="32" cy="53.6" fill="#dddad5" rx="16.5" ry="5.3"></svg:ellipse><svg:ellipse cx="32" cy="51.2" fill="#a29b95" rx="10.5" ry="4.2"></svg:ellipse><svg:ellipse cx="32" cy="50.6" fill="#dddad5" rx="9.8" ry="3"></svg:ellipse><svg:ellipse cx="32" cy="42.5" fill="#a29b95" rx="10.5" ry="8.6"></svg:ellipse><svg:ellipse cx="32" cy="40.8" fill="#dddad5" rx="8.9" ry="6.9"></svg:ellipse><svg:ellipse cx="32" cy="36.3" fill="#a29b95" rx="11.5" ry="4.4"></svg:ellipse><svg:ellipse cx="32" cy="35.4" fill="#dddad5" rx="10.2" ry="3.5"></svg:ellipse><svg:ellipse cx="32" cy="29.4" fill="#a29b95" rx="21" ry="6.9"></svg:ellipse><svg:ellipse cx="32" cy="27.9" fill="#dddad5" rx="19.4" ry="5.3"></svg:ellipse><svg:g fill="#dfcea3"><svg:ellipse cx="32" cy="26.7" rx="12.4" ry="3.5"></svg:ellipse><svg:path d="M19.6 12.1h24.8v14.5H19.6z"></svg:path></svg:g><svg:ellipse cx="32" cy="12.1" fill="#fff6d7" rx="12.4" ry="3.5"></svg:ellipse><svg:ellipse cx="32" cy="12.9" fill="#efd8b1" rx="9.4" ry="2.6"></svg:ellipse><svg:path fill="#ed4c5c" d="M31.5 12.5c-2 0-3.9-1-1.7-4.8c2.1-3.8 2.8-4.6 2.8-5.7c0 0 6.4 10.5-1.1 10.5"></svg:path><svg:path fill="#8f9496" d="M32.1 10.8c.2.6.2 1.3.4 1.9q.15.45 0 .9c-.1.1-.2.6-.4.5c-.2 0-.3-.5-.4-.6c-.1-.4 0-.7 0-1c0-.2.1-1.7.4-1.7"></svg:path><svg:path fill="#ffce31" d="M31.7 12.5c-1.3 0-2.5-.6-1.1-3.1c1.4-2.4 1.8-3 1.8-3.7c0 .1 4.1 6.8-.7 6.8"></svg:path><svg:path fill="#3e4347" d="M31.6 12.5s.1-1.7.4-1.7s.4 1.6.4 1.6s-.4.1-.8.1"></svg:path>`,
})
export class EmojioneCandleIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
