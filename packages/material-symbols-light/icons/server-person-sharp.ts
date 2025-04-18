import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightServerPersonSharpIcon],svg[material-symbols-light-server-person-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 21V3h14.02v18h-3.962l-.924-1.884h-4.25L8.962 21zm3.692-6.634h6.616V14.2q0-1.05-1.049-1.442T12 12.366t-2.26.392T8.693 14.2zM12 10.75q.633 0 1.066-.434q.434-.433.434-1.066t-.434-1.066Q12.633 7.75 12 7.75t-1.066.434T10.5 9.25t.434 1.066q.433.434 1.066.434"></svg:path>`,
})
export class MaterialSymbolsLightServerPersonSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
