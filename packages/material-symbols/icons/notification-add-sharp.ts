import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsNotificationAddSharpIcon],svg[material-symbols-notification-add-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22q-.825 0-1.412-.587T10 20h4q0 .825-.587 1.413T12 22m6-9v-3h-3V8h3V5h2v3h3v2h-3v3zM4 19v-2h2v-7q0-2.075 1.25-3.687T10.5 4.2V2h3v2.2q.35.1.688.213t.637.287q-.85.825-1.337 1.925T13 9q0 2.25 1.425 3.913T18 14.925V17h2v2z"></svg:path>`,
})
export class MaterialSymbolsNotificationAddSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
