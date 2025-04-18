import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[stashPinLocationLightIcon],svg[stash-pin-location-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.5 12.473a4.5 4.5 0 1 0-1 0V19a.5.5 0 0 0 1 0zM8.5 8a3.5 3.5 0 0 1 4-3.465a2 2 0 0 0 2.616 1.869A3.5 3.5 0 1 1 8.5 8m5.948-2.501a3.5 3.5 0 0 0-.877-.627a1 1 0 0 0 .877.627"></svg:path><svg:path fill="currentColor" d="M9.995 15.931a.5.5 0 0 1-.426.564a17.4 17.4 0 0 0-7.29 2.78a.5.5 0 0 1-.557-.832a18.4 18.4 0 0 1 7.71-2.938a.5.5 0 0 1 .563.426m4.01 0a.5.5 0 0 1 .564-.426a18.4 18.4 0 0 1 7.71 2.938a.5.5 0 1 1-.557.831a17.4 17.4 0 0 0-7.29-2.779a.5.5 0 0 1-.427-.564"></svg:path>`,
})
export class StashPinLocationLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
