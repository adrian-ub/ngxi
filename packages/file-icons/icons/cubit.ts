import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fileIconsCubitIcon],svg[file-icons-cubit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m212.815 340.95l-65.444-39.464v-78.309l65.444 37.885zM84.17 171.375l135.46-81.681l135.234 81.546l75.891-43.932L219.628 0L8.278 127.444zm202.092 39.577l-66.633-40.18l-66.858 40.315l66.629 38.57zm76.184-28.886v157.95l-136.462 82.287V512L440 383.395V137.603zm-149.63 239.96l-136.004-82.01V182.332L0 137.868v245.527l212.815 128.328zm79.07-199.115l-65.902 38.15v80.164l65.902-39.74z"></svg:path>`,
})
export class FileIconsCubitIcon {
  readonly viewBox = input("0 0 440 512")
  readonly width = input("0.86em")
  readonly height = input("1em")
}
