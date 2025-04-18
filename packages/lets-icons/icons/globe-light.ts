import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsGlobeLightIcon],svg[lets-icons-globe-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:circle cx="12" cy="12" r="7.5"></svg:circle><svg:path d="M14.5 12c0 2.165-.33 4.103-.847 5.481c-.259.691-.556 1.216-.86 1.559s-.573.46-.793.46s-.49-.117-.794-.46c-.303-.343-.6-.868-.86-1.559C9.83 16.103 9.5 14.165 9.5 12s.33-4.103.847-5.481c.259-.691.556-1.216.86-1.559s.573-.46.793-.46s.49.117.794.46c.303.343.6.868.86 1.559c.516 1.378.846 3.316.846 5.481Z"></svg:path><svg:path stroke-linecap="round" d="M4.5 12h15"></svg:path></svg:g>`,
})
export class LetsIconsGlobeLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
