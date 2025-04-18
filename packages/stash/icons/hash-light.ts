import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[stashHashLightIcon],svg[stash-hash-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.416 6.507a.5.5 0 0 1 .41.575L10.506 9h3.987l.347-2.082a.5.5 0 0 1 .986.164L15.506 9H17a.5.5 0 0 1 0 1h-1.66l-.666 4h1.493a.5.5 0 0 1 0 1h-1.66l-.347 2.082a.5.5 0 1 1-.986-.164l.32-1.918H9.506l-.347 2.082a.5.5 0 1 1-.987-.164L8.493 15H7a.5.5 0 0 1 0-1h1.66l.666-4H7.833a.5.5 0 1 1 0-1h1.66l.347-2.082a.5.5 0 0 1 .575-.411M10.34 10l-.666 4h3.986l.666-4z"></svg:path>`,
})
export class StashHashLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
