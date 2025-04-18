import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidCruiseIcon],svg[icon-park-solid-cruise-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="4"><svg:path stroke-linejoin="round" d="m38 42l3.39-9.325a2 2 0 0 0-.984-2.472l-15.512-7.756a2 2 0 0 0-1.788 0L7.594 30.203a2 2 0 0 0-.985 2.472L10 42"></svg:path><svg:path fill="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M35 14H13a2 2 0 0 0-2 2v12l12.162-5.613a2 2 0 0 1 1.676 0L37 28V16a2 2 0 0 0-2-2"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M29 14V6a2 2 0 0 0-2-2h-6a2 2 0 0 0-2 2v8"></svg:path><svg:path stroke-linecap="round" d="M24 32v8"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M4 44c4 0 4-2 7-2s3 2 6 2s3.5-2 7-2s4 2 7 2s3-2 6-2s3 2 7 2"></svg:path></svg:g>`,
})
export class IconParkSolidCruiseIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
