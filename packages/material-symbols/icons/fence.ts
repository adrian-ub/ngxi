import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFenceIcon],svg[material-symbols-fence-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 20v-4H3v-2h2v-2H3v-2h2V7l3-3l2 2l2.025-2l2 2l2-2l3 3v3H21v2h-1.975v2H21v2h-1.975v4zm2-10h2V7.825l-1-1l-1 1zm4 0h2V7.825l-1-1l-1 1zm4.025 0H17V7.825l-1-1l-.975.975zM7 14h2v-2H7zm4 0h2v-2h-2zm4.025 0H17v-2h-1.975zM7 18h2v-2H7zm4 0h2v-2h-2zm4.025 0H17v-2h-1.975z"></svg:path>`,
})
export class MaterialSymbolsFenceIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
