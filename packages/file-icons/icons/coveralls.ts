import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fileIconsCoverallsIcon],svg[file-icons-coveralls-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 0v512h512V0zm252.625 40.75l51.797 150.594h159.234l-128.64 94.875l52.515 157.453l-136.25-98.766l-135.047 98.39l55.782-157.562l-134.641-94.39h160.062z"></svg:path>`,
})
export class FileIconsCoverallsIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
