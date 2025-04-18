import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPrintPersonPlusIcon],svg[pepicons-print-person-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:g opacity=".2"><svg:path fill-rule="evenodd" d="M12.95 7.75a1 1 0 0 1 1-1h5.25a1 1 0 1 1 0 2h-5.25a1 1 0 0 1-1-1" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M16.5 11.5a1 1 0 0 1-1-1V5.25a1 1 0 1 1 2 0v5.25a1 1 0 0 1-1 1" clip-rule="evenodd"></svg:path><svg:path d="M11 6.6c0 1.436-1.12 2.6-2.5 2.6S6 8.036 6 6.6S7.12 4 8.5 4S11 5.164 11 6.6"></svg:path><svg:path fill-rule="evenodd" d="M8.5 5C7.708 5 7 5.679 7 6.6s.708 1.6 1.5 1.6S10 7.521 10 6.6S9.292 5 8.5 5M5 6.6C5 4.65 6.53 3 8.5 3S12 4.65 12 6.6s-1.53 3.6-3.5 3.6S5 8.55 5 6.6" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M13.5 17v-2.167c0-2.684-2.254-4.766-4.987-4.766S3.5 12.149 3.5 14.833L3.502 17" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M2.5 14.833c0-3.295 2.79-5.766 6.013-5.766c3.232 0 5.987 2.478 5.987 5.766V17a1 1 0 1 1-2 0v-2.167c0-2.08-1.753-3.766-3.987-3.766c-2.24 0-4.013 1.692-4.013 3.766l.002 2.166a1 1 0 0 1-2 .002z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M13.5 18h-10v-1h10z" clip-rule="evenodd"></svg:path></svg:g><svg:path fill-rule="evenodd" d="M11.95 6.75a.5.5 0 0 1 .5-.5h5.25a.5.5 0 1 1 0 1h-5.25a.5.5 0 0 1-.5-.5" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M15 10a.5.5 0 0 1-.5-.5V4.25a.5.5 0 0 1 1 0V9.5a.5.5 0 0 1-.5.5M6.8 3a2.5 2.5 0 1 0 0 5a2.5 2.5 0 0 0 0-5M3.3 5.5a3.5 3.5 0 1 1 7 0a3.5 3.5 0 0 1-7 0" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M.8 14.5c0-3.322 2.67-6.5 6-6.5s6 3.178 6 6.5v2a.5.5 0 0 1-1 0v-2c0-2.873-2.32-5.5-5-5.5s-5 2.627-5 5.5v2a.5.5 0 0 1-1 0z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPrintPersonPlusIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
