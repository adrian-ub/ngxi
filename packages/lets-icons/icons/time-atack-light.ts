import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsTimeAtackLightIcon],svg[lets-icons-time-atack-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="M12 6.72c0-.248 0-.373.057-.475a.5.5 0 0 1 .223-.198c.108-.044.218-.03.438-.004A6 6 0 1 1 7.2 15.601c-.133-.178-.2-.267-.215-.382a.5.5 0 0 1 .06-.293c.06-.1.167-.162.382-.286l4.213-2.432c.131-.076.197-.114.244-.167a.5.5 0 0 0 .094-.162c.022-.067.022-.143.022-.295z"></svg:path><svg:circle cx="12" cy="12" r="8.5" stroke="currentColor"></svg:circle></svg:g>`,
})
export class LetsIconsTimeAtackLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
