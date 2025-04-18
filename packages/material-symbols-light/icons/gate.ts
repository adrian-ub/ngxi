import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightGateIcon],svg[material-symbols-light-gate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.423 17.577V9.461q0-1.265.893-2.152q.892-.886 2.146-.886H11.5V11.5H9.808v1H11.5v5.077zm6.077 0V12.5h1.692v-1H12.5V6.423h2.039q1.265 0 2.152.887q.886.886.886 2.152v8.115zm-8.615-1.693V8.117h1v7.769zm15.23 0V8.117h1v7.769z"></svg:path>`,
})
export class MaterialSymbolsLightGateIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
