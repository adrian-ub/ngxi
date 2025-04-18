import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightCommitIcon],svg[material-symbols-light-commit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 16.5q-1.748 0-2.985-1.137T7.504 12.5H3v-1h4.504q.273-1.725 1.51-2.863T12 7.5t2.995 1.138t1.501 2.862H21v1h-4.504q-.254 1.725-1.5 2.863Q13.747 16.5 12 16.5m0-1q1.442 0 2.471-1.029T15.5 12t-1.029-2.471T12 8.5T9.529 9.529T8.5 12t1.029 2.471T12 15.5"></svg:path>`,
})
export class MaterialSymbolsLightCommitIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
