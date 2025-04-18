import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[primeAsteriksIcon],svg[prime-asteriks-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12.75 5a.75.75 0 0 0-1.5 0v5.701l-4.937-2.85a.75.75 0 1 0-.75 1.299L10.5 12l-4.937 2.85a.75.75 0 1 0 .75 1.3l4.937-2.851V19a.75.75 0 0 0 1.5 0v-5.701l4.937 2.85a.75.75 0 0 0 .75-1.299L13.5 12l4.937-2.85a.75.75 0 0 0-.75-1.3l-4.937 2.851z" clip-rule="evenodd"></svg:path>`,
})
export class PrimeAsteriksIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
