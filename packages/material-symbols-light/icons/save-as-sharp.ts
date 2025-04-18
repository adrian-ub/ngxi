import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightSaveAsSharpIcon],svg[material-symbols-light-save-as-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.23 22v-2.21l5.96-5.934l2.19 2.204L15.44 22zM6.77 9.77h7.422v-3H6.77zm12.42 7.246l.925-.956l-.924-.944l-.95.95zM10.463 20H4V4h12.577L20 7.423v1.746l-6.134 6.09q.096-.165.134-.321t.039-.361q0-.846-.577-1.423t-1.423-.577t-1.423.577t-.577 1.423t.577 1.423t1.423.577q.178 0 .348-.039t.329-.134l-2.254 2.234z"></svg:path>`,
})
export class MaterialSymbolsLightSaveAsSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
