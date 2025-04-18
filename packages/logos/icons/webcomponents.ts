import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[logosWebcomponentsIcon],svg[logos-webcomponents-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:lineargradient id="logosWebcomponents0" x1="0%" x2="100%" y1="50%" y2="50%"><svg:stop offset="0%" stop-color="#2A3B8F"></svg:stop><svg:stop offset="100%" stop-color="#29ABE2"></svg:stop></svg:lineargradient><svg:lineargradient id="logosWebcomponents1" x1="0%" x2="100%" y1="50%" y2="50%"><svg:stop offset="0%" stop-color="#2A3B8F"></svg:stop><svg:stop offset="100%" stop-color="#29ABE2"></svg:stop></svg:lineargradient><svg:lineargradient id="logosWebcomponents2" x1="100%" x2="0%" y1="50%" y2="50%"><svg:stop offset="0%" stop-color="#B4D44E"></svg:stop><svg:stop offset="100%" stop-color="#E7F716"></svg:stop></svg:lineargradient><svg:lineargradient id="logosWebcomponents3" x1="100%" x2="0%" y1="50%" y2="50%"><svg:stop offset="0%" stop-color="#B4D44E"></svg:stop><svg:stop offset="100%" stop-color="#E7F716"></svg:stop></svg:lineargradient></svg:defs><svg:path fill="#166DA5" d="m255.997 104.029l-27.805 46.82l-38.991-47.46l38.991-46.181z"></svg:path><svg:path fill="#8FDB69" d="m225.156 158.839l-42.347-50.656l-25.408 42.507l39.47 57.687z"></svg:path><svg:path fill="#166DA5" d="m224.676 48.898l-41.867 50.816l-25.408-42.506L196.871.16z"></svg:path><svg:path fill="url(#logosWebcomponents0)" d="M96.997 48.898h127.679L196.552.16h-71.43z" opacity=".95"></svg:path><svg:path fill="url(#logosWebcomponents1)" d="M182.809 99.874h70.631l-25.408-42.826h-70.791" opacity=".95"></svg:path><svg:path fill="url(#logosWebcomponents2)" d="M225.156 158.999H96.838l28.124 48.739h71.909z" opacity=".95"></svg:path><svg:path fill="#010101" d="M124.962 207.738L64.878 103.869L125.761 0H59.924L0 103.869l59.924 103.869z"></svg:path><svg:path fill="url(#logosWebcomponents3)" d="M182.809 108.024h70.631l-25.408 42.825h-70.791" opacity=".95"></svg:path>`,
})
export class LogosWebcomponentsIcon {
  readonly viewBox = input("0 0 256 209")
  readonly width = input("1.23em")
  readonly height = input("1em")
}
