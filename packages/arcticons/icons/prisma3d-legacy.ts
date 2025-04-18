import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsPrisma3dLegacyIcon],svg[arcticons-prisma3d-legacy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m4.5 36.739l16.69-9.637m1.23-2.154V5.7m1.228 21.401l7.387 4.265m1.28-1.326L22.42 12.9L10.735 33.138h19.374"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M43.5 35.436a6.863 6.863 0 1 1-13.727 0a6.863 6.863 0 0 1 13.727 0"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M34.676 31.515v7.843h3.922"></svg:path>`,
})
export class ArcticonsPrisma3dLegacyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
