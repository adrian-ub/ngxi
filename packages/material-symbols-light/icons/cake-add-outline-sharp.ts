import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightCakeAddOutlineSharpIcon],svg[material-symbols-light-cake-add-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 21v-7.154h2V8.077h5.5V6.588q-.43-.28-.715-.638T9.5 5.11q0-.3.112-.568t.334-.488L11 3l1.052 1.052q.225.225.337.491t.111.568q0 .481-.285.839q-.284.358-.715.638v1.489H17v5.77h2V21zm3-7.154h10V9.077H6zM4 20h14v-5.154H4zm2-6.154h10zM4 20h14zm13-6.154H5zM19 8V6h-2V5h2V3h1v2h2v1h-2v2z"></svg:path>`,
})
export class MaterialSymbolsLightCakeAddOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
