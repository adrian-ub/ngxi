import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconSoupOutlineIcon],svg[lsicon-soup-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.004 1.5s-.304.427-.304.75s.304.75.304.75s.293.422.296.74c.003.325-.296.76-.296.76m2.586-2s-.304.427-.304.75s.304.75.304.75s.293.422.296.74c.003.325-.296.76-.296.76m-5.18-3s.304.427.304.75S5.41 4 5.41 4s-.293.422-.296.74c-.003.325.296.76.296.76m-3.91 1c0 2.4 1.905 4.966 3.938 5.931V13.5h5.157v-1.069C12.627 11.466 14.5 8.9 14.5 6.5z"></svg:path>`,
})
export class LsiconSoupOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
