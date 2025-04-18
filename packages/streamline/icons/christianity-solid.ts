import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineChristianitySolidIcon],svg[streamline-christianity-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.574 4.968A20 20 0 0 1 12.07 7a20 20 0 0 1 1.504 2.032q.087.134.17.272a1 1 0 0 1-.353 1.37c-.511.302-1.106.081-1.399-.401a15 15 0 0 0-.506-.762a18 18 0 0 0-.804-1.053c-1.308 1.206-3.056 2.353-5.036 2.355a5.94 5.94 0 0 1-3.175-.9A6.2 6.2 0 0 1 .225 7.452a1 1 0 0 1 0-.902a6.2 6.2 0 0 1 2.246-2.463a5.94 5.94 0 0 1 3.175-.899c1.98.002 3.728 1.149 5.036 2.355A18 18 0 0 0 11.89 3.89q.068-.105.132-.212a1 1 0 0 1 1.369-.352c.471.278.63.902.351 1.372a8 8 0 0 1-.168.27"></svg:path>`,
})
export class StreamlineChristianitySolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
