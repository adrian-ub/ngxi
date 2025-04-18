import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cibTinderIcon],svg[cib-tinder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.421 12.599a.335.335 0 0 0 .496.089l.02-.016c.521-.437.984-.88 1.427-1.36C18.64 6.672 16.145.969 16.125.917a.66.66 0 0 1 .197-.792a.66.66 0 0 1 .823.041c14.5 13.484 10.657 23.755 10.381 24.448c-1.163 4.188-5.781 7.219-11.261 7.375c-.183.011-.323.011-.484.011c-6.469 0-11.969-3.984-11.969-9.079v-.077c0-7.063 6.391-14.032 6.677-14.323a.584.584 0 0 1 .704-.141a.63.63 0 0 1 .385.599c-.057 1.381.224 2.584.843 3.6z"></svg:path>`,
})
export class CibTinderIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
