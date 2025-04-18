import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsWallpaperexportIcon],svg[arcticons-wallpaperexport-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.5 22.887V9.457c0-.656.528-1.185 1.185-1.185h9.223m3.26 0H29.19c.656 0 1.184.529 1.184 1.185v30.806c0 .656-.528 1.184-1.184 1.184h-9.843m-3.439 0H6.685A1.18 1.18 0 0 1 5.5 40.263V27.314"></svg:path><svg:circle cx="22.835" cy="19.193" r="2.961" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="39.302" cy="9.515" r="2.961" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="39.539" cy="29.064" r="2.961" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m36.746 11.01l-11.467 6.51m.031 3.301l11.82 6.52m-27.942 7.81h17.484l-3.48-6.35l-3.17 4.815l-5.283-8.272z"></svg:path>`,
})
export class ArcticonsWallpaperexportIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
