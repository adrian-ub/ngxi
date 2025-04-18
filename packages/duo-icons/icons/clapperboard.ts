import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[duoIconsClapperboardIcon],svg[duo-icons-clapperboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2z" class="duoicon-secondary-layer" opacity=".3"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M13 8h3l1-3h-3zM8 8h3l1-3H9zM4 8h2l1-3H4zm16-3h-1l-1 3h2z" class="duoicon-primary-layer"></svg:path>`,
})
export class DuoIconsClapperboardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
