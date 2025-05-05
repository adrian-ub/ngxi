import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsViberIcon],svg[hugeicons-viber-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M21 10.5c0 6.5-3 8-9 8q-.515 0-1-.015l-2.896 2.91a.353.353 0 0 1-.604-.248v-3.121c-3-.834-4.5-2.93-4.5-7.526c0-6.5 3-8 9-8s9 1.5 9 8"></svg:path><svg:path d="M12.774 13.862c.771.42 1.466.69 1.915.843c.324.11.675.013.917-.229l.644-.644l-1.735-1.157a.49.49 0 0 0-.615.061zm0 0a10.4 10.4 0 0 1-2.383-1.753a10.4 10.4 0 0 1-1.753-2.383m0 0c-.42-.771-.69-1.466-.843-1.915a.89.89 0 0 1 .229-.917l.644-.644l1.157 1.735a.49.49 0 0 1-.061.615zm-.315-2.442l.69 1.379m6.203 5.514l-1.378-.69M14 9.5a1 1 0 0 0-1-1m2.5 1A2.5 2.5 0 0 0 13 7m4 2.5a4 4 0 0 0-4-4"></svg:path></svg:g>`,
})
export class HugeiconsViberIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
