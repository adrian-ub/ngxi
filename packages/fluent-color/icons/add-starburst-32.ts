import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorAddStarburst32Icon],svg[fluent-color-add-starburst-32-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorAddStarburst320)" d="M16.01 30.98c-.39 0-.75-.18-.99-.48l-2.162-2.78l-3.262 1.33c-.36.15-.76.12-1.101-.08c-.33-.19-.56-.53-.61-.91l-.48-3.49l-3.483-.48c-.39-.05-.72-.28-.91-.61c-.19-.34-.22-.74-.07-1.1l1.32-3.261l-2.782-2.16c-.31-.24-.48-.6-.48-.99s.18-.75.48-.99l2.782-2.16l-1.32-3.26c-.15-.36-.12-.76.07-1.09s.53-.56.91-.61l3.482-.481l.48-3.48c.05-.39.28-.72.611-.91c.34-.19.74-.22 1.1-.07l3.263 1.32l2.161-2.78c.48-.61 1.501-.61 1.972 0l2.161 2.78l3.262-1.32c.36-.15.76-.12 1.091.07c.34.19.56.53.61.91l.48 3.49l3.483.48c.39.05.72.28.91.61c.19.34.22.74.07 1.1l-1.32 3.26l2.782 2.16c.31.24.48.6.48.99s-.18.75-.48.99l-2.782 2.161l1.33 3.26c.15.36.12.76-.08 1.09c-.19.34-.53.56-.91.62l-3.492.48l-.48 3.49c-.05.38-.28.72-.611.91c-.34.19-.74.22-1.09.08l-3.263-1.33l-2.161 2.781c-.24.31-.6.48-.991.48z"></svg:path><svg:path fill="url(#fluentColorAddStarburst321)" fill-opacity=".95" d="M15 10a1 1 0 1 1 2 0v5h5a1 1 0 1 1 0 2h-5v5a1 1 0 1 1-2 0v-5h-5a1 1 0 1 1 0-2h5z"></svg:path><svg:defs><svg:radialgradient id="fluentColorAddStarburst320" cx="0" cy="0" r="1" gradientTransform="matrix(-32.64534 -57.72395 55.28958 -31.2686 35.414 35.373)" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#FFC470"></svg:stop><svg:stop offset=".251" stop-color="#FF835C"></svg:stop><svg:stop offset=".55" stop-color="#F24A9D"></svg:stop><svg:stop offset=".814" stop-color="#B339F0"></svg:stop></svg:radialgradient><svg:lineargradient id="fluentColorAddStarburst321" x1="22.028" x2="7.338" y1="26.952" y2="17.437" gradientUnits="userSpaceOnUse"><svg:stop offset=".024" stop-color="#FFC8D7"></svg:stop><svg:stop offset=".807" stop-color="#fff"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentColorAddStarburst32Icon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
