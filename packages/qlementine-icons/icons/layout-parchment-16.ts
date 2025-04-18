import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[qlementineIconsLayoutParchment16Icon],svg[qlementine-icons-layout-parchment-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.9.218C12.472 0 11.912 0 10.79 0h-5.6C4.07 0 3.51 0 3.08.218a2 2 0 0 0-.874.874c-.218.428-.218.988-.218 2.11v12.8h1v-12.8c0-.577 0-.949.024-1.23c.022-.272.06-.372.085-.422c.096-.188.249-.341.437-.437c.05-.025.15-.063.422-.085c.283-.023.656-.024 1.23-.024h5.6c.577 0 .949 0 1.23.024c.272.022.372.06.422.085c.188.096.341.249.437.437c.025.05.063.15.085.422c.023.283.024.656.024 1.23v12.8h1v-12.8c0-1.12 0-1.68-.218-2.11a2 2 0 0 0-.874-.874z"></svg:path><svg:path fill="currentColor" d="M5.5 3a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m.5 2.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1zM5 15.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5v.5H5z"></svg:path>`,
})
export class QlementineIconsLayoutParchment16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
