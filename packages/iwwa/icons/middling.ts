import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iwwaMiddlingIcon],svg[iwwa-middling-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 38.5C9.799 38.5 1.5 30.201 1.5 20S9.799 1.5 20 1.5S38.5 9.799 38.5 20S30.201 38.5 20 38.5m0-36C10.351 2.5 2.5 10.351 2.5 20S10.351 37.5 20 37.5S37.5 29.649 37.5 20S29.649 2.5 20 2.5"></svg:path><svg:circle cx="14.667" cy="15.309" r="1" fill="currentColor"></svg:circle><svg:circle cx="25.334" cy="15.309" r="1" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M12.792 25.309h14.416v1H12.792z"></svg:path>`,
})
export class IwwaMiddlingIcon {
  readonly viewBox = input("0 0 40 40")
  readonly width = input("1em")
  readonly height = input("1em")
}
