import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[akarIconsMediumFillIcon],svg[akar-icons-medium-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.372 7.264a.78.78 0 0 0-.252-.658L2.252 4.339V4H8.05l4.482 9.905L16.472 4H22v.339L20.403 5.88a.47.47 0 0 0-.177.452v11.334a.47.47 0 0 0 .177.452l1.56 1.542V20h-7.844v-.339l1.616-1.58c.159-.16.159-.207.159-.451V8.468l-4.492 11.494h-.606L5.566 8.468v7.704c-.043.323.064.65.29.884l2.101 2.568v.338H2v-.338l2.1-2.568a1.03 1.03 0 0 0 .272-.884z"></svg:path>`,
})
export class AkarIconsMediumFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
