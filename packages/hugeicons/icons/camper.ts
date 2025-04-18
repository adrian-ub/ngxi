import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCamperIcon],svg[hugeicons-camper-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:circle cx="17" cy="19" r="2"></svg:circle><svg:circle cx="7" cy="19" r="2"></svg:circle><svg:path d="M16 7h4.938c.494 0 .741 0 .882-.115a.5.5 0 0 0 .171-.272c.042-.176-.069-.393-.29-.828c-.554-1.091-.831-1.637-1.263-2.018a3 3 0 0 0-.916-.557C18.982 3 18.363 3 17.124 3H8.095c-2.874 0-4.31 0-5.203.879C2 4.757 2 6.172 2 9v5"></svg:path><svg:path d="M9 19h6m4 0a3 3 0 0 0 3-3v-3H4c-.943 0-1.414 0-1.707.293S2 14.057 2 15v1c0 1.414 0 2.121.44 2.56C2.878 19 3.585 19 5 19M6 7h2m6 6V8.966c0-.716 0-1.073.123-1.343c.092-.2.23-.365.397-.475C14.744 7 15.042 7 15.638 7c.901 0 1.352 0 1.766.146c.312.11.607.28.873.504c.354.297.636.719 1.198 1.563L22 13"></svg:path></svg:g>`,
})
export class HugeiconsCamperIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
