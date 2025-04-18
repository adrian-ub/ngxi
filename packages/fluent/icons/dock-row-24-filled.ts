import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDockRow24FilledIcon],svg[fluent-dock-row-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.25 12.03c.966 0 1.75.783 1.75 1.75v2.5a1.75 1.75 0 0 1-1.75 1.75h-2.5A1.75 1.75 0 0 1 16 16.28v-2.5c0-.967.784-1.75 1.75-1.75zm-14 0c.966 0 1.75.783 1.75 1.75v2.5a1.75 1.75 0 0 1-1.75 1.75h-2.5A1.75 1.75 0 0 1 2 16.28v-2.5c0-.967.784-1.75 1.75-1.75zm7 0c.966 0 1.75.783 1.75 1.75v2.5a1.75 1.75 0 0 1-1.75 1.75h-2.5A1.75 1.75 0 0 1 9 16.28v-2.5c0-.967.784-1.75 1.75-1.75zm0-7c.966 0 1.75.783 1.75 1.75v2.5a1.75 1.75 0 0 1-1.75 1.75h-2.5A1.75 1.75 0 0 1 9 9.28v-2.5c0-.967.784-1.75 1.75-1.75zm7 0c.966 0 1.75.783 1.75 1.75v2.5a1.75 1.75 0 0 1-1.75 1.75h-2.5A1.75 1.75 0 0 1 16 9.28v-2.5c0-.967.784-1.75 1.75-1.75zm-14 0c.966 0 1.75.783 1.75 1.75v2.5a1.75 1.75 0 0 1-1.75 1.75h-2.5A1.75 1.75 0 0 1 2 9.28v-2.5a1.75 1.75 0 0 1 1.606-1.745l.144-.006z"></svg:path>`,
})
export class FluentDockRow24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
