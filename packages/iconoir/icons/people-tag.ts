import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirPeopleTagIcon],svg[iconoir-people-tag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M3 16V8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M16.5 14.5s-1.5 2-4.5 2s-4.5-2-4.5-2"></svg:path><svg:path fill="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.5 10a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1m7 0a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1"></svg:path></svg:g>`,
})
export class IconoirPeopleTagIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
