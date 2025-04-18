import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightNestFoundSavingsSharpIcon],svg[material-symbols-light-nest-found-savings-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 21.577L9.423 19H4V3h16v16h-5.423zm0-6.077q1.939 0 3.22-1.356T16.5 11V6.5H12q-1.814 0-3.157 1.28T7.5 11q0 .673.241 1.367q.242.694.694 1.385l-1.043 1.023l.697.677l.967-.961q.675.482 1.448.746q.773.263 1.496.263m-2.846-2.486l3.396-3.397l.733.708l-3.439 3.402z"></svg:path>`,
})
export class MaterialSymbolsLightNestFoundSavingsSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
