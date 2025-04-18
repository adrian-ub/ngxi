import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cbiStremioIcon],svg[cbi-stremio-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22a1.5 1.5 0 0 1-1.061-.439l-8.5-8.5a1.5 1.5 0 0 1 0-2.121l8.5-8.5a1.5 1.5 0 0 1 2.121 0l8.5 8.5a1.5 1.5 0 0 1 0 2.121l-8.5 8.5A1.5 1.5 0 0 1 12 22m0-18.5L3.5 12l8.5 8.5l8.5-8.5Zm-1.624 12.646a1.126 1.126 0 0 1-1.126-1.125V8.979a1.126 1.126 0 0 1 1.779-.916l4.229 3.021a1.125 1.125 0 0 1 0 1.831l-4.229 3.021a1.13 1.13 0 0 1-.653.21m.374-6.439v4.585L13.959 12Z"></svg:path>`,
})
export class CbiStremioIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
