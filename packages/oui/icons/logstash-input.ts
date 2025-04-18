import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ouiLogstashInputIcon],svg[oui-logstash-input-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1.747 10.992h13.1a.123.123 0 0 0 .122-.123V8.51a.12.12 0 0 0-.122-.122H1.122A.12.12 0 0 0 1 8.51v2.36c0 .066.055.122.122.122zm12.011 1H2.21V16h-1v-4.008h-.088A1.124 1.124 0 0 1 0 10.87V8.51c0-.62.503-1.122 1.122-1.122h13.725c.62 0 1.122.502 1.122 1.122v2.36c0 .618-.503 1.122-1.122 1.122h-.089V16h-1zm-6.27-7.487V0h1v4.529l2.407-2.262l.685.73L8 6.356L4.42 2.995l.685-.729z"></svg:path>`,
})
export class OuiLogstashInputIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
