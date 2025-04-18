import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsRetroStackIcon],svg[arcticons-retro-stack-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 17.8h6.2V24H24zm6.2 0h6.2V24h-6.2zm6.1-12.3h6.2v6.2h-6.2z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M30.2 11.7h6.2v6.2h-6.2zM17.8 24H24v6.2h-6.2zM24 36.3h6.2v6.2H24zm12.3 0h6.2v6.2h-6.2z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M36.3 30.2h6.2v6.2h-6.2zM24 24h6.2v6.2H24zm-6.2 12.3H24v6.2h-6.2z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.7 36.3h6.2v6.2h-6.2zm-6.2 0h6.2v6.2H5.5z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.7 30.2h6.2v6.2h-6.2zM24 11.7h6.2v6.2H24zM5.5 30.2h6.2v6.2H5.5zm18.5 0h6.2v6.2H24z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M17.8 30.2H24v6.2h-6.2zm12.4 6.1h6.2v6.2h-6.2z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M30.2 30.2h6.2v6.2h-6.2zm6.1-6.2h6.2v6.2h-6.2z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M30.2 24h6.2v6.2h-6.2z"></svg:path>`,
})
export class ArcticonsRetroStackIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
