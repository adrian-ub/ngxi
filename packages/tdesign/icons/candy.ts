import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignCandyIcon],svg[tdesign-candy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.31 3.536c.154-1.69 2.208-2.433 3.407-1.234l3.98 3.981c1.2 1.199.456 3.253-1.233 3.406l-1.314.12a3 3 0 0 1-.357 3.812l-5.172 5.172a3 3 0 0 1-3.812.357l-.12 1.314c-.153 1.689-2.207 2.432-3.406 1.233l-3.98-3.98c-1.2-1.2-.456-3.253 1.233-3.406l1.314-.12a3 3 0 0 1 .357-3.812l5.172-5.172a3 3 0 0 1 3.812-.357zm2.058 3.418l.001.001l.676.675l.001.002a1 1 0 0 0 .796.287l2.441-.222l-3.98-3.98l-.223 2.44a1 1 0 0 0 .288.797m-1.415 1.413l-1.746-1.746a1 1 0 0 0-1.414 0L9.914 8.5l5.586 5.586l1.878-1.88a1 1 0 0 0 0-1.413l-1.745-1.746l-.003-.002l-.675-.676zm-.867 7.133L8.5 9.914l-1.88 1.879a1 1 0 0 0 0 1.414l4.172 4.171a1 1 0 0 0 1.414 0zm-7.462.538l-2.907.264l3.98 3.981l.265-2.907z"></svg:path>`,
})
export class TdesignCandyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
