import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ouiAppLogsIcon],svg[oui-app-logs-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 8c3.983 0 7.732 1.013 11.001 2.797v2.312A20.9 20.9 0 0 0 2 10.023v11.025c4.85.462 9.27 4.183 9.955 8.691l.035.261H12v2h-1.938l-.018-1.236c-.116-4.015-4.336-7.631-8.793-7.76L0 22.986V8zm13-8h1c9.28 0 16.825 7.437 16.997 16.677L32 17v15h-2V17c0-7.84-6.014-14.274-13.68-14.943L16 2.033v7.681l-2-1.143zh1z"></svg:path><svg:path fill="currentColor" d="M26.997 30.636L27.009 32H14V11.305l1.483.82c6.994 3.861 11.382 10.735 11.514 18.51zm-2.048-1.04C24.505 23.556 21.205 18.2 16 14.771V30h8.974z" class="ouiIcon__fillSecondary"></svg:path>`,
})
export class OuiAppLogsIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
