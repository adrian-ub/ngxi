import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flatUiMagicIcon],svg[flat-ui-magic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="50" cy="50" r="50" fill="#2C3E50"></svg:circle><svg:path fill="none" d="M16.488 73.027L70.906 18.61c1.172-1.172 4.021-.222 6.364 2.121s3.293 5.193 2.121 6.364L24.973 81.513z" clip-rule="evenodd"></svg:path><svg:path fill="#ECF0F1" fill-rule="evenodd" d="M64.906 29.609L12.018 82.497a50.3 50.3 0 0 0 8.847 8.124l52.527-52.527c1.172-1.171.222-4.021-2.121-6.364s-5.194-3.292-6.365-2.121" clip-rule="evenodd"></svg:path><svg:path fill="#F0C419" d="M88.5 23.002Q89.65 12.65 100 11.501q-10.35-1.15-11.5-11.5q-1.15 10.35-11.5 11.5q10.349 1.15 11.5 11.501M31.5 0q-.75 6.75-7.501 7.501q6.75.75 7.501 7.5q.75-6.75 7.501-7.5Q32.25 6.75 31.5 0m60 46.001q-.75 6.75-7.501 7.501q6.75.75 7.501 7.5q.75-6.75 7.501-7.5q-6.751-.752-7.501-7.501"></svg:path><svg:path fill="#fff" d="M71.5 53q-.55 4.949-5.5 5.5q4.95.55 5.5 5.499q.55-4.95 5.5-5.499q-4.95-.552-5.5-5.5m-25-31.001q-.55 4.95-5.5 5.501q4.95.55 5.5 5.5q.55-4.95 5.5-5.5q-4.95-.55-5.5-5.501M58.5 3q-.55 4.948-5.5 5.5q4.95.55 5.5 5.499q.55-4.95 5.5-5.499q-4.95-.552-5.5-5.5"></svg:path>`,
})
export class FlatUiMagicIcon {
  readonly viewBox = input("0 0 100 100")
  readonly width = input("1em")
  readonly height = input("1em")
}
