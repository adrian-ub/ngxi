import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneClothesBriefsIcon],svg[icon-park-twotone-clothes-briefs-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTClothesBriefs0"><svg:path fill="#555" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M22.158 37s-.9-8.074-4.158-12c-3.044-3.669-12-6-12-6v-5h36v5s-8.956 2.331-12 6c-3.257 3.925-4.158 12-4.158 12z"></svg:path></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTClothesBriefs0)"></svg:path>`,
})
export class IconParkTwotoneClothesBriefsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
