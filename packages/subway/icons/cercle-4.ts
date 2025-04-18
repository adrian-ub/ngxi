import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[subwayCercle4Icon],svg[subway-cercle-4-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0m21.3 446.7v-84.1h-42.7v84c-89-9.9-159.5-80.4-169.4-169.4h84.1v-42.7h-84c9.9-89 80.4-159.5 169.4-169.4v84.1h42.7V65.3c89 9.9 159.5 80.5 169.4 169.4h-84v42.7h84c-9.9 88.9-80.5 159.5-169.5 169.3"></svg:path>`,
})
export class SubwayCercle4Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
