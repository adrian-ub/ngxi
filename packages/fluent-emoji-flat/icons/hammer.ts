import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiFlatHammerIcon],svg[fluent-emoji-flat-hammer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#7D4533" d="m14.122 9.879l15 15a3 3 0 1 1-4.243 4.242l-15-15z"></svg:path><svg:path fill="#B4ACBC" d="M12.427 3.23a.5.5 0 0 1 .407-.144l3.196.339a.5.5 0 0 1 .3.85L13.608 7s-.427.52.05 1l1.95 1.95a.5.5 0 0 1 0 .707l-4.95 4.95a.5.5 0 0 1-.707 0l-.29-.29L6.5 14.5l-.97-3.312l-.177-.178a.5.5 0 0 1 0-.707z"></svg:path><svg:path fill="#CDC4D6" d="M2.177 12.298a.25.25 0 0 1 0-.353l.643-.644a2 2 0 0 1 2.829 0l3.889 3.89a2 2 0 0 1 0 2.828l-.644.643a.25.25 0 0 1-.353 0z"></svg:path></svg:g>`,
})
export class FluentEmojiFlatHammerIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
