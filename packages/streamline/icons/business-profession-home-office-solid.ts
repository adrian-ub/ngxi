import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineBusinessProfessionHomeOfficeSolidIcon],svg[streamline-business-profession-home-office-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.322.445a1 1 0 0 1 1.356 0l5.842 5.388c.308.286.48.692.48 1.107v5.56a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 0 12.5V6.94c0-.454.178-.827.48-1.107h.001L6.322.444Zm.243 4.985a.5.5 0 0 0-.5.5v.405h1.87V5.93a.5.5 0 0 0-.5-.5zm-1.5.5v.405H4.88a1 1 0 0 0-1 1v3.095a1 1 0 0 0 1 1h4.238a1 1 0 0 0 1-1V7.335a1 1 0 0 0-1-1h-.182V5.93a1.5 1.5 0 0 0-1.5-1.5h-.87a1.5 1.5 0 0 0-1.5 1.5Z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineBusinessProfessionHomeOfficeSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
