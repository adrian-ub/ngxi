import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[subwayCercle7Icon],svg[subway-cercle-7-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0m0 64c35.4 0 64 28.6 64 64s-28.6 64-64 64s-64-28.6-64-64s28.6-64 64-64m85.3 384H170.7v-21.3H192V256h-21.3v-21.3H320v192h21.3z"></svg:path>`,
})
export class SubwayCercle7Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
