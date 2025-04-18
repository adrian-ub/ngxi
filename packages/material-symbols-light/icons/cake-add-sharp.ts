import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightCakeAddSharpIcon],svg[material-symbols-light-cake-add-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 21v-6.538h16V21zm2-7.539V8.077h5.5V6.588q-.43-.28-.715-.638T9.5 5.11q0-.3.112-.568t.334-.488L11 3l1.052 1.052q.225.225.337.491t.111.568q0 .481-.285.839q-.284.358-.715.638v1.489H17v5.385zM19 8V6h-2V5h2V3h1v2h2v1h-2v2z"></svg:path>`,
})
export class MaterialSymbolsLightCakeAddSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
