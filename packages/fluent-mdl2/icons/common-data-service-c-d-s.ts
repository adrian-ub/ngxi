import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2CommonDataServiceCDSIcon],svg[fluent-mdl2-common-data-service-c-d-s-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1523 0l525 525v998l-525 525H525L0 1523V525L525 0zM512 1854l13-331l-397-384v331zm0-512v-331L128 627v331zm0-512V194L194 512zm128-702v768h830l384-384l-384-384zm0 1011v269h269zm0 397v268l268-268zm1280-66v-331l-397 397h-434l-384 384h765zm0-512V627l-397 397H706l384 384h380z"></svg:path>`,
})
export class FluentMdl2CommonDataServiceCDSIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
