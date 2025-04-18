import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsBeatstarsIcon],svg[simple-icons-beatstars-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m17.217 11.996l-3.308 1.079v3.478l-2.052-2.818l-3.309 1.079l2.043-2.818l-2.043-2.819l3.31 1.08l2.05-2.819v3.487zm0 0v7.277H6.854V4.584h10.363zl4.585-1.49v-7.67L19.135 0H2.198v24h16.92l2.684-2.685v-7.83z"></svg:path>`,
})
export class SimpleIconsBeatstarsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
