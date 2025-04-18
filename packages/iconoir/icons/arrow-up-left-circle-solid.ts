import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirArrowUpLeftCircleSolidIcon],svg[iconoir-arrow-up-left-circle-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75S22.75 17.937 22.75 12S17.937 1.25 12 1.25m2.121 7.171h-4.95a.75.75 0 0 0-.75.75v4.95a.75.75 0 0 0 1.5 0v-3.139l4.377 4.377a.75.75 0 1 0 1.06-1.061L10.983 9.92h3.14a.75.75 0 0 0 0-1.5" clip-rule="evenodd"></svg:path>`,
})
export class IconoirArrowUpLeftCircleSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
