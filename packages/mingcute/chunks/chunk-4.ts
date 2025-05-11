import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mingcutePaletteLineIcon],svg[mingcute-palette-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M12 2c5.523 0 10 4.477 10 10q-.002.975-.18 1.9c-.386 2.004-2.397 2.85-4.082 2.57l-1.74-.29a1.29 1.29 0 0 0-1.124.36c-.37.37-.547.879-.298 1.376c.423.846.429 1.812.055 2.603C14.131 21.58 13.11 22 12 22C6.477 22 2 17.523 2 12S6.477 2 12 2m0 2a8 8 0 1 0 0 16l.195-.002c.258-.01.5-.06.628-.332a1 1 0 0 0-.036-.855c-.63-1.262-.302-2.71.673-3.685a3.29 3.29 0 0 1 2.867-.919l1.74.29c.957.16 1.668-.348 1.789-.975A8 8 0 0 0 12 4m-4.5 7a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3m7-4a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3m-5 0a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3"></svg:path></svg:g>`,
})
export class MingcutePaletteLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcutePanoramasFillIcon],svg[mingcute-panoramas-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M2 6.81c0-1.12 1.15-1.806 2.119-1.408C5.437 5.945 8.465 7 12 7s6.563-1.055 7.881-1.598C20.85 5.004 22 5.69 22 6.81v10.382c0 1.12-1.15 1.805-2.119 1.407C18.563 18.056 15.535 17 12 17s-6.563 1.056-7.881 1.598C3.15 18.996 2 18.31 2 17.19z"></svg:path></svg:g>`,
})
export class MingcutePanoramasFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcutePanoramasLineIcon],svg[mingcute-panoramas-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M4 7.504v8.993C5.653 15.879 8.599 15 12 15s6.347.88 8 1.497V7.504C18.347 8.12 15.401 9 12 9s-6.347-.879-8-1.496m-2-.695c0-1.12 1.15-1.805 2.119-1.407C5.437 5.945 8.465 7 12 7s6.563-1.055 7.881-1.598C20.85 5.004 22 5.69 22 6.81v10.382c0 1.12-1.15 1.805-2.119 1.407C18.563 18.056 15.535 17 12 17s-6.563 1.056-7.881 1.598C3.15 18.996 2 18.31 2 17.19z"></svg:path></svg:g>`,
})
export class MingcutePanoramasLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcutePaper2FillIcon],svg[mingcute-paper-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M18.35 2c.781 0 1.557.47 1.825 1.305l.076.246l.079.28l.08.316l.077.346l.073.376l.034.198l.061.417c.23 1.79.157 4.23-1.122 6.705l-.159.297c-1.342 2.415-1.245 4.846-.942 6.425l.074.349l.038.162l.077.3l.077.262c.274.89-.318 1.922-1.327 2.01l-.14.006H5.65c-.78 0-1.557-.47-1.825-1.305l-.075-.246l-.08-.28l-.08-.316l-.077-.346l-.073-.376q-.036-.195-.066-.403l-.055-.43l-.042-.454c-.127-1.704.065-3.855 1.19-6.033l.159-.297C5.968 9.1 5.87 6.668 5.568 5.09l-.073-.349l-.039-.162l-.077-.3l-.077-.262c-.274-.89.318-1.922 1.327-2.01L6.77 2zM12 12H9a1 1 0 1 0 0 2h3a1 1 0 1 0 0-2m4-4h-6a1 1 0 0 0-.117 1.993L10 10h6a1 1 0 0 0 .117-1.993z"></svg:path></svg:g>`,
})
export class MingcutePaper2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcutePaper2LineIcon],svg[mingcute-paper-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M5.703 20c-.41-1.327-1.04-4.433.671-7.514c1.867-3.36 1.45-6.702 1-8.486h10.923c.41 1.327 1.04 4.433-.671 7.514c-1.867 3.36-1.45 6.702-1 8.486zm-1.077-8.486c-2.147 3.864-1.275 7.701-.8 9.181C4.092 21.531 4.868 22 5.65 22h11.58c1.095 0 1.754-1.085 1.468-2.016c-.412-1.342-1.027-4.432.676-7.498c2.147-3.864 1.275-7.701.8-9.181C19.908 2.469 19.132 2 18.35 2H6.77C5.675 2 5.015 3.085 5.301 4.016c.412 1.342 1.027 4.432-.676 7.498M9 9a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2h-6a1 1 0 0 1-1-1m0 3a1 1 0 1 0 0 2h3a1 1 0 1 0 0-2z"></svg:path></svg:g>`,
})
export class MingcutePaper2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcutePaperFillIcon],svg[mingcute-paper-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M16 3a3 3 0 0 1 2.995 2.824L19 6v10h.75c.647 0 1.18.492 1.244 1.122l.006.128V19a3 3 0 0 1-2.824 2.995L18 22H8a3 3 0 0 1-2.995-2.824L5 19V9H3.25a1.25 1.25 0 0 1-1.244-1.122L2 7.75V6a3 3 0 0 1 2.824-2.995L5 3zm3 15h-9v1c0 .35-.06.687-.17 1H18a1 1 0 0 0 1-1zm-7-6h-2a1 1 0 0 0-.117 1.993L10 14h2a1 1 0 0 0 .117-1.993zm2-4h-4a1 1 0 0 0 0 2h4a1 1 0 1 0 0-2M5 5a1 1 0 0 0-1 1v1h1z"></svg:path></svg:g>`,
})
export class MingcutePaperFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcutePaperLineIcon],svg[mingcute-paper-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M16 3a3 3 0 0 1 2.995 2.824L19 6v10h.75c.647 0 1.18.492 1.244 1.122l.006.128V19a3 3 0 0 1-2.824 2.995L18 22H8a3 3 0 0 1-2.995-2.824L5 19V9H3.25a1.25 1.25 0 0 1-1.244-1.122L2 7.75V6a3 3 0 0 1 2.824-2.995L5 3zm0 2H7v14a1 1 0 1 0 2 0v-1.75c0-.69.56-1.25 1.25-1.25H17V6a1 1 0 0 0-1-1m3 13h-8v1c0 .35-.06.687-.17 1H18a1 1 0 0 0 1-1zm-7-6a1 1 0 1 1 0 2h-2a1 1 0 1 1 0-2zm2-4a1 1 0 1 1 0 2h-4a1 1 0 0 1 0-2zM5 5a1 1 0 0 0-.993.883L4 6v1h1z"></svg:path></svg:g>`,
})
export class MingcutePaperLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteParachuteFillIcon],svg[mingcute-parachute-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M10.17 19.442a16.5 16.5 0 0 1-2.7-1.344C5.353 16.775 3 14.511 3 11a9 9 0 0 1 18 0c0 3.51-2.353 5.775-4.47 7.098a16.5 16.5 0 0 1-2.7 1.344c.107.16.17.352.17.558v1a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-1c0-.206.063-.398.17-.558m8.28-6.085c.144-.292.11-.65-.135-.864a2 2 0 0 0-3.253 1.012c-.068.268-.286.495-.562.495s-.494-.227-.562-.495a2 2 0 0 0-3.876 0c-.068.268-.286.495-.562.495s-.494-.227-.562-.495a2 2 0 0 0-3.253-1.012c-.245.214-.28.572-.134.864c.638 1.285 1.759 2.282 2.979 3.045a14.6 14.6 0 0 0 3.186 1.47a.92.92 0 0 0 .568 0a14.6 14.6 0 0 0 3.186-1.47c1.22-.763 2.342-1.76 2.98-3.045"></svg:path></svg:g>`,
})
export class MingcuteParachuteFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteParachuteLineIcon],svg[mingcute-parachute-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M3.656 14.036a1 1 0 0 1-.125-.287A7.2 7.2 0 0 1 3 11a9 9 0 0 1 18 0a7.2 7.2 0 0 1-.531 2.749a1 1 0 0 1-.125.287c-.848 1.846-2.385 3.169-3.814 4.062a16.5 16.5 0 0 1-2.7 1.344c.107.16.17.352.17.558v1a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-1c0-.206.063-.398.17-.558a16.5 16.5 0 0 1-2.7-1.344c-1.43-.893-2.967-2.216-3.814-4.062M12 4a7 7 0 0 0-6.99 6.62A3.5 3.5 0 0 1 7 10c.98 0 1.865.402 2.5 1.05A3.5 3.5 0 0 1 12 10c.98 0 1.865.402 2.5 1.05A3.5 3.5 0 0 1 17 10c.74 0 1.425.23 1.99.62A7 7 0 0 0 12 4m3.47 12.402c1.243-.777 2.383-1.797 3.015-3.117a1.5 1.5 0 0 0-2.985.215a1 1 0 1 1-2 0a1.5 1.5 0 0 0-3 0a1 1 0 1 1-2 0a1.5 1.5 0 0 0-2.985-.215c.632 1.32 1.772 2.34 3.015 3.117c.927.58 1.863.99 2.571 1.255c.353.133.645.227.846.288l.053.017l.053-.017c.201-.06.493-.155.846-.288a14.6 14.6 0 0 0 2.571-1.255"></svg:path></svg:g>`,
})
export class MingcuteParachuteLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteParagraphFillIcon],svg[mingcute-paragraph-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M18 2.5a1.5 1.5 0 0 1 .144 2.993L18 5.5h-.5v13h.5a1.5 1.5 0 0 1 .144 2.993L18 21.5h-8a1.5 1.5 0 0 1-.144-2.993L10 18.5h.5v-4h-1a6 6 0 0 1-.225-11.996L9.5 2.5zm-3.5 3h-1v13h1zm-4 0h-1a3 3 0 0 0-.176 5.995l.176.005h1z"></svg:path></svg:g>`,
})
export class MingcuteParagraphFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteParagraphLineIcon],svg[mingcute-paragraph-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M18 3a1 1 0 0 1 .117 1.993L18 5h-1v14h1a1 1 0 0 1 .117 1.993L18 21h-8a1 1 0 0 1-.117-1.993L10 19h1v-5H9.5a5.5 5.5 0 0 1-.221-10.996L9.5 3zm-3 2h-2v14h2zm-4 0H9.5a3.5 3.5 0 0 0-.192 6.995L9.5 12H11z"></svg:path></svg:g>`,
})
export class MingcuteParagraphLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteParenthesesFillIcon],svg[mingcute-parentheses-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M5.673 3.293A1.5 1.5 0 1 1 8.32 4.707A15.4 15.4 0 0 0 6.5 12c0 2.64.659 5.121 1.82 7.293a1.5 1.5 0 1 1-2.647 1.414A18.4 18.4 0 0 1 3.5 12c0-3.145.786-6.11 2.173-8.707m12.65 0A18.4 18.4 0 0 1 20.496 12c0 3.145-.786 6.11-2.173 8.707a1.5 1.5 0 0 1-2.646-1.414A15.4 15.4 0 0 0 17.497 12c0-2.64-.66-5.12-1.82-7.293a1.5 1.5 0 0 1 2.646-1.414"></svg:path></svg:g>`,
})
export class MingcuteParenthesesFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteParenthesesLineIcon],svg[mingcute-parentheses-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M6.114 3.529a1 1 0 0 1 1.764.942A15.9 15.9 0 0 0 6 12c0 2.724.68 5.286 1.878 7.529a1 1 0 1 1-1.764.942A17.9 17.9 0 0 1 4 12c0-3.06.765-5.946 2.114-8.471m11.768 0A17.9 17.9 0 0 1 19.996 12c0 3.06-.764 5.945-2.114 8.471a1 1 0 1 1-1.764-.942A15.9 15.9 0 0 0 17.996 12c0-2.724-.68-5.286-1.878-7.529a1 1 0 1 1 1.764-.942"></svg:path></svg:g>`,
})
export class MingcuteParenthesesLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteParfumFillIcon],svg[mingcute-parfum-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M8 4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1v1h4a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3v-8a3 3 0 0 1 3-3h4V7h-1a2 2 0 0 1-2-2zm6 0h-4v1h4zm-2 8a3 3 0 1 0 0 6a3 3 0 0 0 0-6m-1 3a1 1 0 1 1 2 0a1 1 0 0 1-2 0"></svg:path></svg:g>`,
})
export class MingcuteParfumFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteParfumLineIcon],svg[mingcute-parfum-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M8 4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1v1h4a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3v-8a3 3 0 0 1 3-3h4V7h-1a2 2 0 0 1-2-2zm6 1V4h-4v1zm-7 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1zm2 5a3 3 0 1 1 6 0a3 3 0 0 1-6 0m3-1a1 1 0 1 0 0 2a1 1 0 0 0 0-2"></svg:path></svg:g>`,
})
export class MingcuteParfumLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteParkFillIcon],svg[mingcute-park-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M12 4a8 8 0 1 1 0 16a8 8 0 0 1 0-16M3.2 5.4a1 1 0 1 1 1.599 1.2A8.96 8.96 0 0 0 3 12c0 2.027.67 3.895 1.799 5.4a1 1 0 0 1-1.6 1.2A10.96 10.96 0 0 1 1 12c0-2.475.819-4.762 2.2-6.6m16.2-.2a1 1 0 0 1 1.4.2A10.96 10.96 0 0 1 23 12c0 2.475-.819 4.762-2.2 6.6a1 1 0 1 1-1.599-1.2A8.96 8.96 0 0 0 21 12c0-2.027-.67-3.895-1.799-5.4a1 1 0 0 1 .2-1.4ZM13 8h-2.5a1.5 1.5 0 0 0-1.493 1.356L9 9.5V15a1 1 0 0 0 1.993.117L11 15v-1h2a3 3 0 1 0 0-6m0 2a1 1 0 0 1 .117 1.993L13 12h-2v-2z"></svg:path></svg:g>`,
})
export class MingcuteParkFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteParkLineIcon],svg[mingcute-park-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M12 4a8 8 0 1 1 0 16a8 8 0 0 1 0-16M3.2 5.4a1 1 0 1 1 1.599 1.2A8.96 8.96 0 0 0 3 12c0 2.027.67 3.895 1.799 5.4a1 1 0 0 1-1.6 1.2A10.96 10.96 0 0 1 1 12c0-2.475.819-4.762 2.2-6.6m16.2-.2a1 1 0 0 1 1.4.2A10.96 10.96 0 0 1 23 12c0 2.475-.819 4.762-2.2 6.6a1 1 0 1 1-1.599-1.2A8.96 8.96 0 0 0 21 12c0-2.027-.67-3.895-1.799-5.4a1 1 0 0 1 .2-1.4ZM12 6a6 6 0 1 0 0 12a6 6 0 0 0 0-12m1 2a3 3 0 1 1 0 6h-2v1a1 1 0 1 1-2 0V9.5A1.5 1.5 0 0 1 10.5 8zm0 2h-2v2h2a1 1 0 1 0 0-2"></svg:path></svg:g>`,
})
export class MingcuteParkLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteParkingFillIcon],svg[mingcute-parking-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2m1.5 5H11a2 2 0 0 0-2 2v7a1 1 0 1 0 2 0v-2h2.5a3.5 3.5 0 1 0 0-7m0 2a1.5 1.5 0 0 1 0 3H11V9z"></svg:path></svg:g>`,
})
export class MingcuteParkingFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteParkingLightsFillIcon],svg[mingcute-parking-lights-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M4.707 16.293a1 1 0 0 1 0 1.414l-1 1a1 1 0 0 1-1.414-1.414l1-1a1 1 0 0 1 1.414 0m4.069-9.157a5.25 5.25 0 0 1 2.724 4.602v.524a5.25 5.25 0 0 1-2.724 4.603c-1.487.815-3.445-.006-3.63-1.846l-.057-.65a31 31 0 0 1 0-4.737l.058-.651C5.33 7.14 7.289 6.32 8.776 7.136M3 11a1 1 0 0 1 .117 1.993L3 13H2a1 1 0 0 1-.117-1.993L2 11zm.707-5.707l1 1a1 1 0 0 1-1.414 1.414l-1-1a1 1 0 0 1 1.414-1.414m18 0a1 1 0 0 0-1.414 0l-1 1a1 1 0 0 0 1.414 1.414l1-1a1 1 0 0 0 0-1.414m-2.414 11a1 1 0 0 0 0 1.414l1 1a1 1 0 0 0 1.414-1.414l-1-1a1 1 0 0 0-1.414 0M22 11a1 1 0 1 1 0 2h-1a1 1 0 1 1 0-2zm-3.147-2.02c-.184-1.839-2.143-2.66-3.629-1.844a5.25 5.25 0 0 0-2.724 4.602v.524a5.25 5.25 0 0 0 2.724 4.603c1.486.815 3.445-.006 3.63-1.846l.057-.65a31 31 0 0 0 0-4.737l-.058-.651Z"></svg:path></svg:g>`,
})
export class MingcuteParkingLightsFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteParkingLightsLineIcon],svg[mingcute-parking-lights-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M3.293 16.293a1 1 0 0 1 1.497 1.32l-.083.094l-1 1a1 1 0 0 1-1.497-1.32l.083-.094zm5.483-9.158a5.25 5.25 0 0 1 2.724 4.603v.524a5.25 5.25 0 0 1-2.724 4.602c-1.487.816-3.445-.005-3.63-1.845l-.057-.65a31 31 0 0 1 0-4.737l.058-.651C5.33 7.14 7.289 6.32 8.776 7.135M7.136 9.18l-.053.605a29 29 0 0 0 0 4.43l.054.605c.034.342.404.44.677.291A3.25 3.25 0 0 0 9.5 12.262v-.524a3.25 3.25 0 0 0-1.686-2.85c-.273-.149-.643-.05-.677.292ZM3 11a1 1 0 1 1 0 2H2a1 1 0 1 1 0-2zm.707-5.707l1 1a1 1 0 0 1-1.414 1.414l-1-1a1 1 0 0 1 1.414-1.414m18 0a1 1 0 0 0-1.414 0l-1 1a1 1 0 0 0 1.414 1.414l1-1a1 1 0 0 0 0-1.414M18.853 8.98c-.184-1.84-2.143-2.661-3.629-1.846a5.25 5.25 0 0 0-2.724 4.603v.524a5.25 5.25 0 0 0 2.724 4.602c1.486.816 3.445-.005 3.63-1.845l.057-.65a31 31 0 0 0 0-4.737zm-1.99.199l.054.605a29 29 0 0 1 0 4.43l-.054.605c-.034.342-.404.44-.677.291a3.25 3.25 0 0 1-1.686-2.849v-.524a3.25 3.25 0 0 1 1.686-2.85c.273-.149.643-.05.677.292m2.43 8.527a1 1 0 0 1 1.414-1.414l1 1a1 1 0 0 1-1.414 1.414zM23 12a1 1 0 0 0-1-1h-1a1 1 0 1 0 0 2h1a1 1 0 0 0 1-1"></svg:path></svg:g>`,
})
export class MingcuteParkingLightsLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteParkingLineIcon],svg[mingcute-parking-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2m0 2a8 8 0 1 0 0 16a8 8 0 0 0 0-16m1.5 3a3.5 3.5 0 0 1 .192 6.995L13.5 14H11v2a1 1 0 0 1-1.993.117L9 16V9a2 2 0 0 1 1.85-1.995L11 7zm0 2H11v3h2.5a1.5 1.5 0 0 0 .144-2.993z"></svg:path></svg:g>`,
})
export class MingcuteParkingLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcutePartlyCloudDaytimeFillIcon],svg[mingcute-partly-cloud-daytime-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M7.25 13c1.27 0 2.34.862 2.656 2.033a2.5 2.5 0 0 1-.242 4.962L9.5 20H5a2 2 0 0 1-.483-3.941A2.75 2.75 0 0 1 7.25 13M12 4c1.569 0 3.032.452 4.267 1.232a2.526 2.526 0 0 1 4.313.204a2.388 2.388 0 0 1-.83 4.569a8 8 0 0 1-6.437 9.888a4.5 4.5 0 0 0-1.926-6.48A4.75 4.75 0 0 0 7.249 11a4.73 4.73 0 0 0-3.245 1.281L4 12a8 8 0 0 1 8-8m6.361 2.12a.53.53 0 0 0-.516.418q.5.535.899 1.156l.19.315h.677a.389.389 0 0 0 .064-.773a1 1 0 0 1-.762-.604l-.042-.123a.53.53 0 0 0-.51-.389"></svg:path></svg:g>`,
})
export class MingcutePartlyCloudDaytimeFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcutePartlyCloudDaytimeLineIcon],svg[mingcute-partly-cloud-daytime-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M12 6a6 6 0 0 0-5.996 6.212a3.75 3.75 0 0 1 4.661 1.986a3.5 3.5 0 0 1 2.31 3.723A6.002 6.002 0 0 0 12 6m-.05 14a3.5 3.5 0 0 1-2.45 1H5a3 3 0 0 1-1.483-5.608a3.74 3.74 0 0 1 .647-1.773a8 8 0 0 1 12.103-8.387a2.526 2.526 0 0 1 4.313.204a2.388 2.388 0 0 1-.831 4.57A8 8 0 0 1 12 20l-.05-.001Zm6.985-11.991h.676a.389.389 0 0 0 .064-.773a1 1 0 0 1-.804-.726a.528.528 0 0 0-1.026.028c.416.445.783.939 1.09 1.471M7.25 14c-.501 0-.952.21-1.273.549a1.74 1.74 0 0 0-.466 1.399a1 1 0 0 1-.753 1.081A1 1 0 0 0 5 19h4.5a1.497 1.497 0 0 0 1.5-1.5a1.5 1.5 0 0 0-1.255-1.48a1 1 0 0 1-.805-.727A1.75 1.75 0 0 0 7.25 14"></svg:path></svg:g>`,
})
export class MingcutePartlyCloudDaytimeLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcutePartlyCloudNightFillIcon],svg[mingcute-partly-cloud-night-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M13.406 4.015a8.1 8.1 0 0 1 2.925 1.127a2.526 2.526 0 0 1 4.249.294a2.388 2.388 0 0 1-.712 4.56a8.114 8.114 0 0 1-6.644 10.033a4.5 4.5 0 0 0-1.837-6.615a4.8 4.8 0 0 0-1.156-1.362a5.22 5.22 0 0 0 2.554-4.49a5.2 5.2 0 0 0-.461-2.15a1 1 0 0 1 1.082-1.397M7.25 13c1.27 0 2.34.862 2.656 2.033a2.5 2.5 0 0 1-.242 4.962L9.5 20H5a2 2 0 0 1-.483-3.941A2.75 2.75 0 0 1 7.25 13m11.111-6.88a.53.53 0 0 0-.475.297a8 8 0 0 1 1.181 1.592h.544a.389.389 0 0 0 .064-.773a1 1 0 0 1-.762-.604l-.042-.122a.53.53 0 0 0-.51-.39"></svg:path></svg:g>`,
})
export class MingcutePartlyCloudNightFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcutePartlyCloudNightLineIcon],svg[mingcute-partly-cloud-night-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M13.406 4.015c1.06.184 2.05.574 2.925 1.127a2.526 2.526 0 0 1 4.249.294a2.388 2.388 0 0 1-.713 4.56a8.112 8.112 0 0 1-7.86 10.123l-.183-.002A3.5 3.5 0 0 1 9.5 21H5a3 3 0 0 1-1.483-5.608a3.75 3.75 0 0 1 5.658-2.86a5.226 5.226 0 0 0 3.148-7.12a1 1 0 0 1 1.083-1.397M7.25 14a1.75 1.75 0 0 0-1.75 1.75l.003.1l.008.098a1 1 0 0 1-.644 1.048l-.11.033A1 1 0 0 0 5 19h4.5c.464 0 .879-.21 1.155-.543a1.5 1.5 0 0 0-.78-2.41l-.13-.027a1 1 0 0 1-.805-.727A1.75 1.75 0 0 0 7.25 14m7.46-7.477a7.22 7.22 0 0 1-4.09 7.583l.045.093a3.5 3.5 0 0 1 2.293 3.846A6.114 6.114 0 0 0 14.71 6.523m3.651-.403a.53.53 0 0 0-.475.297a8 8 0 0 1 1.181 1.592h.544a.389.389 0 0 0 .064-.772a1 1 0 0 1-.762-.605l-.042-.122a.53.53 0 0 0-.51-.39"></svg:path></svg:g>`,
})
export class MingcutePartlyCloudNightLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcutePassportFillIcon],svg[mingcute-passport-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M18 2a2 2 0 0 1 2 2v17a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm-4 14h-4a1 1 0 0 0-.117 1.993L10 18h4a1 1 0 0 0 .117-1.993zM12 6a4 4 0 1 0 0 8a4 4 0 0 0 0-8m0 2a2 2 0 1 1 0 4a2 2 0 0 1 0-4"></svg:path></svg:g>`,
})
export class MingcutePassportFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcutePassportLineIcon],svg[mingcute-passport-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M18 2a2 2 0 0 1 2 2v17a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm0 2H6v17h12zm-4 12a1 1 0 1 1 0 2h-4a1 1 0 1 1 0-2zM12 6a4 4 0 1 1 0 8a4 4 0 0 1 0-8m0 2a2 2 0 1 0 0 4a2 2 0 0 0 0-4"></svg:path></svg:g>`,
})
export class MingcutePassportLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcutePasteFillIcon],svg[mingcute-paste-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M6.268 3H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h3v-7a4 4 0 0 1 4-4h6V5a2 2 0 0 0-2-2h-1.268A2 2 0 0 0 13 2H8a2 2 0 0 0-1.732 1M12.5 6a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5zm-.5 4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2z"></svg:path></svg:g>`,
})
export class MingcutePasteFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcutePasteLineIcon],svg[mingcute-paste-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M6.268 3A2 2 0 0 1 8 2h5a2 2 0 0 1 1.732 1H16a2 2 0 0 1 2 2v4h1a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2v-1H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zM6 5H5v12h4v-6a2 2 0 0 1 2-2h5V5h-1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2m5 6v9h8v-9zm2-7H8v1h5z"></svg:path></svg:g>`,
})
export class MingcutePasteLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcutePasterFillIcon],svg[mingcute-paster-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="m12.117 2l.117.003C11.495 3.237 11 4.536 11 6a7 7 0 0 0 7 7c1.461 0 2.764-.496 3.997-1.234L22 12c0 5.523-4.477 10-10 10S2 17.523 2 12c0-5.43 4.327-9.848 9.72-9.996zm1.998.755l7.13 7.13C20.225 10.495 19.228 11 18 11a5 5 0 0 1-5-5c0-1.134.43-2.07.976-3.01z"></svg:path></svg:g>`,
})
export class MingcutePasterFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcutePasterLineIcon],svg[mingcute-paster-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M12 2q.363 0 .722.026a1.94 1.94 0 0 1 1.233.57l7.449 7.449c.316.316.536.747.57 1.233Q22 11.637 22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2m-.72 2.032a8 8 0 1 0 8.688 8.687a7 7 0 0 1-8.687-8.687Zm1.903.62a5 5 0 0 0 5.904 6.229l.26-.064l-6.164-6.164Z"></svg:path></svg:g>`,
})
export class MingcutePasterLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcutePauseCircleFillIcon],svg[mingcute-pause-circle-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2m-2 6a1 1 0 0 0-.993.883L9 9v6a1 1 0 0 0 1.993.117L11 15V9a1 1 0 0 0-1-1m4 0a1 1 0 0 0-1 1v6a1 1 0 1 0 2 0V9a1 1 0 0 0-1-1"></svg:path></svg:g>`,
})
export class MingcutePauseCircleFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcutePauseCircleLineIcon],svg[mingcute-pause-circle-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2m0 2a8 8 0 1 0 0 16a8 8 0 0 0 0-16m-2 4a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0V9a1 1 0 0 1 1-1m4 0a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0V9a1 1 0 0 1 1-1"></svg:path></svg:g>`,
})
export class MingcutePauseCircleLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcutePauseFillIcon],svg[mingcute-pause-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M9 3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Zm8 0a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z"></svg:path></svg:g>`,
})
export class MingcutePauseFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcutePauseLineIcon],svg[mingcute-pause-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M8 4a1 1 0 0 1 .993.883L9 5v14a1 1 0 0 1-1.993.117L7 19V5a1 1 0 0 1 1-1m8 0a1 1 0 0 1 .993.883L17 5v14a1 1 0 0 1-1.993.117L15 19V5a1 1 0 0 1 1-1"></svg:path></svg:g>`,
})
export class MingcutePauseLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcutePavilionFillIcon],svg[mingcute-pavilion-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M12.903 2.57a1.01 1.01 0 0 0-1.806 0c-.945 1.884-1.964 3.096-3.209 3.907c-1.253.816-2.827 1.287-4.988 1.528a1.01 1.01 0 0 0-.884 1.173c.33 1.95 1.664 2.922 2.804 3.377l.18.069V20H4a1 1 0 1 0 0 2h16a1 1 0 1 0 0-2h-1v-7.376q.09-.033.18-.07c1.14-.454 2.474-1.427 2.804-3.376a1.01 1.01 0 0 0-.884-1.173c-2.161-.241-3.735-.712-4.989-1.528c-1.244-.811-2.264-2.023-3.208-3.907M17 13h-1v7h1zm-3 0h-4v7h4zm-6 0H7v7h1z"></svg:path></svg:g>`,
})
export class MingcutePavilionFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcutePavilionLineIcon],svg[mingcute-pavilion-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M11.097 2.57a1.01 1.01 0 0 1 1.806 0c.944 1.884 1.964 3.096 3.208 3.907c1.254.817 2.828 1.287 4.989 1.528c.59.066.979.614.884 1.173c-.33 1.95-1.665 2.922-2.804 3.377l-.18.069V20h1a1 1 0 1 1 0 2H4a1 1 0 1 1 0-2h1v-7.376l-.18-.069c-1.14-.455-2.474-1.428-2.804-3.377A1.01 1.01 0 0 1 2.9 8.005c2.16-.241 3.735-.711 4.988-1.528c1.245-.811 2.264-2.023 3.209-3.907M8 13H7v7h1zm6 0h-4v7h4zm3 0h-1v7h1zm-5-7.972c-.852 1.32-1.83 2.349-3.02 3.124C7.665 9.01 6.15 9.52 4.376 9.82c.302.427.73.697 1.185.879c.453.18.953.291 1.442.302h10.008a4.2 4.2 0 0 0 1.427-.302c.455-.182.884-.452 1.186-.88c-1.773-.299-3.289-.808-4.604-1.666c-1.191-.775-2.169-1.804-3.02-3.124Z"></svg:path></svg:g>`,
})
export class MingcutePavilionLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcutePawFillIcon],svg[mingcute-paw-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M12 3a1 1 0 0 1 1 1v.19c1.257.504 2 1.93 2 3.31c0 1.713-1.146 3.5-3 3.5S9 9.213 9 7.5c0-1.38.743-2.806 2-3.31V4a1 1 0 0 1 1-1m6.6 3.543a2.56 2.56 0 0 0-1.093.307c-.608.325-1.115.878-1.431 1.556c-.316.677-.414 1.421-.272 2.095s.545 1.342 1.27 1.68c.724.338 1.495.218 2.103-.107c.607-.325 1.114-.878 1.43-1.555c.316-.678.414-1.422.272-2.096a2.6 2.6 0 0 0-.467-1.035a1 1 0 0 0-1.812-.845m-15.012.849c-.238.31-.39.67-.467 1.035c-.142.674-.044 1.418.272 2.095s.823 1.23 1.43 1.556c.608.325 1.379.445 2.103.107s1.128-1.006 1.27-1.68s.044-1.418-.272-2.096c-.316-.677-.823-1.23-1.43-1.555A2.6 2.6 0 0 0 5.4 6.547a1 1 0 0 0-1.813.845Zm3.563 6.227A8.07 8.07 0 0 1 12 12c1.89 0 3.6.666 4.849 1.619c1.213.925 2.151 2.255 2.151 3.659c0 1.407-1.184 2.335-2.349 2.857C15.406 20.692 13.76 21 12 21s-3.406-.308-4.651-.865C6.184 19.613 5 18.685 5 17.278c0-1.404.938-2.734 2.151-3.66Z"></svg:path></svg:g>`,
})
export class MingcutePawFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcutePawLineIcon],svg[mingcute-paw-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M5.403 6.55a1 1 0 1 0-1.813.846l1.813-.845Zm15.007.842a1 1 0 1 0-1.812-.845zM13 4a1 1 0 0 0-2 0zm4 13.278c0 .148-.16.58-1.166 1.032c-.926.414-2.28.69-3.834.69v2c1.76 0 3.406-.308 4.651-.865c1.165-.522 2.349-1.45 2.349-2.857zM12 19c-1.554 0-2.908-.276-3.834-.69C7.159 17.859 7 17.426 7 17.278H5c0 1.407 1.184 2.335 2.349 2.857C8.594 20.692 10.24 21 12 21zm-5-1.722c0-.529.405-1.338 1.364-2.069A6.07 6.07 0 0 1 12 14v-2c-1.89 0-3.6.666-4.849 1.619C5.938 14.544 5 15.874 5 17.278zM12 14c1.425 0 2.714.506 3.636 1.21c.959.73 1.364 1.54 1.364 2.068h2c0-1.404-.938-2.734-2.151-3.66A8.07 8.07 0 0 0 12 12zM6.112 9.255c.15.323.171.627.127.839c-.045.21-.132.266-.158.278l.845 1.813c.725-.338 1.128-1.006 1.27-1.68s.044-1.418-.272-2.096zm-.031 1.117c-.026.012-.125.044-.315-.058s-.41-.313-.56-.637l-1.813.845c.316.678.823 1.23 1.43 1.556c.608.325 1.379.445 2.103.107zm-.876-.695c-.15-.323-.171-.628-.127-.839s.132-.266.158-.278L4.39 6.747c-.725.338-1.128 1.005-1.27 1.68c-.142.674-.044 1.418.272 2.095l1.812-.845Zm.03-1.117c.027-.013.125-.044.316.058c.19.102.41.313.56.637l1.813-.846c-.316-.677-.823-1.23-1.43-1.555c-.608-.325-1.379-.445-2.103-.107zm.484-1.33l-.317-.68l-1.812.846l.317.68zm13.076 2.443c-.151.324-.37.535-.561.637c-.19.102-.289.07-.315.058l-.845 1.813c.724.338 1.495.218 2.103-.107c.607-.325 1.114-.878 1.43-1.555zm-.876.695c-.026-.012-.113-.067-.158-.278c-.044-.212-.023-.516.127-.84l-1.812-.844c-.316.677-.414 1.421-.272 2.095s.545 1.342 1.27 1.68zm-.03-1.117c.15-.324.37-.535.56-.637s.289-.07.315-.058l.845-1.813c-.724-.338-1.495-.218-2.103.107c-.607.325-1.114.878-1.43 1.556l1.812.845Zm.875-.695c.026.012.114.067.158.278s.023.516-.127.84l1.812.845c.316-.678.414-1.422.272-2.096s-.545-1.342-1.27-1.68zm1.33-.484l.316-.68l-1.812-.845l-.317.68l1.812.845ZM13 7.5c0 1.048-.644 1.5-1 1.5v2c1.854 0 3-1.787 3-3.5zM12 9c-.356 0-1-.452-1-1.5H9c0 1.713 1.146 3.5 3 3.5zm-1-1.5c0-1.048.644-1.5 1-1.5V4c-1.854 0-3 1.787-3 3.5zM12 6c.356 0 1 .452 1 1.5h2C15 5.787 13.854 4 12 4zm1-1V4h-2v1z"></svg:path></svg:g>`,
})
export class MingcutePawLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcutePaypalFillIcon],svg[mingcute-paypal-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M8.212 2a3 3 0 0 0-2.964 2.537L3.192 17.69A2 2 0 0 0 5.168 20h1.69a2 2 0 0 0 2 2h1.976a2 2 0 0 0 1.976-1.691L13.327 17h1.453a6 6 0 0 0 5.857-4.697l.048-.218a5 5 0 0 0-2.6-5.538C17.578 4.011 15.344 2 12.54 2H8.21Zm1.584 12h1.843a6.58 6.58 0 0 0 6.38-4.977l.01-.036a2.99 2.99 0 0 1 .704 2.664l-.049.217A4 4 0 0 1 14.78 15h-1.453a2 2 0 0 0-1.976 1.691L10.834 20H8.858z"></svg:path></svg:g>`,
})
export class MingcutePaypalFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcutePaypalLineIcon],svg[mingcute-paypal-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M12.54 2c2.805 0 5.039 2.01 5.544 4.547c1.879.964 3.037 3.077 2.647 5.307l-.046.231l-.048.217a6 6 0 0 1-5.61 4.693L14.78 17h-1.453l-.517 3.309a2 2 0 0 1-1.813 1.684l-.163.007H8.858a2 2 0 0 1-1.995-1.853L6.858 20h-1.69a2 2 0 0 1-1.993-2.164l.017-.145L5.248 4.537a3 3 0 0 1 2.788-2.532L8.212 2h4.329Zm5.488 6.987l-.009.036A6.58 6.58 0 0 1 11.64 14H9.793l-.78 5h.002l-.157 1h1.976l.517-3.309A2 2 0 0 1 13.327 15h1.453a4 4 0 0 0 3.904-3.132l.049-.217a2.99 2.99 0 0 0-.705-2.664M12.541 4H8.21a1 1 0 0 0-.964.736l-.023.11L5.168 18h1.976l.673-4.309a2 2 0 0 1 1.814-1.684L9.793 12h1.846c2.1 0 3.93-1.428 4.44-3.463a3.648 3.648 0 0 0-3.352-4.532L12.54 4Z"></svg:path></svg:g>`,
})
export class MingcutePaypalLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcutePdfFillIcon],svg[mingcute-pdf-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M12 2v6.5a1.5 1.5 0 0 0 1.5 1.5H20v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm-.989 9.848a6.22 6.22 0 0 1-2.235 3.872c-.887.716-.076 2.121.988 1.712a6.22 6.22 0 0 1 4.471 0c1.064.41 1.875-.995.988-1.712a6.22 6.22 0 0 1-2.235-3.872c-.177-1.126-1.8-1.127-1.977 0M12 14.303l.806 1.394h-1.61zm2-12.26a2 2 0 0 1 1 .543L19.414 7a2 2 0 0 1 .543 1H14z"></svg:path></svg:g>`,
})
export class MingcutePdfFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcutePdfLineIcon],svg[mingcute-pdf-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M13.586 2a2 2 0 0 1 1.284.467l.13.119L19.414 7a2 2 0 0 1 .578 1.238l.008.176V20a2 2 0 0 1-1.85 1.995L18 22H6a2 2 0 0 1-1.995-1.85L4 20V4a2 2 0 0 1 1.85-1.995L6 2zM12 4H6v16h12V10h-4.5a1.5 1.5 0 0 1-1.493-1.356L12 8.5zm.988 7.848a6.22 6.22 0 0 0 2.235 3.872c.887.717.076 2.121-.988 1.712a6.22 6.22 0 0 0-4.47 0c-1.065.41-1.876-.995-.989-1.712a6.22 6.22 0 0 0 2.235-3.872c.178-1.127 1.8-1.126 1.977 0m-.99 2.304l-.688 1.196h1.38zM14 4.414V8h3.586z"></svg:path></svg:g>`,
})
export class MingcutePdfLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcutePen2FillIcon],svg[mingcute-pen-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M16.242 3.515a3 3 0 0 1 4.378 4.098l-.135.144l-.707.707l.707.707a2 2 0 0 1 .117 2.702l-.117.127l-4.243 4.243a1 1 0 0 1-1.497-1.32l.083-.095l4.243-4.242l-.707-.707l-9.878 9.878a1.1 1.1 0 0 1-.437.267l-.126.033l-3.49.699a1.01 1.01 0 0 1-1.206-1.072l.017-.117l.698-3.491a1.1 1.1 0 0 1 .215-.465l.086-.097zm1.415 1.414l-.708.707l1.415 1.414l.707-.707a1 1 0 0 0-1.415-1.414Z"></svg:path></svg:g>`,
})
export class MingcutePen2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcutePen2LineIcon],svg[mingcute-pen-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M16.243 3.515a3 3 0 0 1 4.377 4.098l-.135.144l-.707.707l.707.708a2 2 0 0 1 .117 2.7l-.117.128l-4.242 4.243a1 1 0 0 1-1.498-1.32l.083-.095l4.243-4.242l-.707-.707l-9.878 9.878a1.1 1.1 0 0 1-.437.268l-.125.033l-3.491.698a1.01 1.01 0 0 1-1.206-1.072l.017-.117l.698-3.49a1.1 1.1 0 0 1 .215-.466l.086-.097zm-9.9 12.728l-.493.493l-.354 1.767l1.768-.353l.493-.493l-1.414-1.415Zm9.193-9.193l-7.779 7.778l1.415 1.415l7.778-7.779zm3.534-2.12a1 1 0 0 0-1.32-.083l-.094.083l-.707.707l1.414 1.414l.707-.707l.083-.094a1 1 0 0 0-.083-1.32"></svg:path></svg:g>`,
})
export class MingcutePen2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcutePenFillIcon],svg[mingcute-pen-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="m14.295 4.98l4.724 4.725a2 2 0 0 1 .443 2.157l-2.365 5.913a2 2 0 0 1-1.605 1.24l-5.079.635q-.196.023-.41.056l-.444.072l-.232.042l-.723.14l-.495.105l-.745.168l-.955.228l-1.552.396l-.646.174a1.01 1.01 0 0 1-1.265-1.134l.034-.146l.295-1.112l.264-1.048l.228-.955l.167-.745l.105-.496l.141-.722l.08-.457l.064-.428l.66-5.28a2 2 0 0 1 1.241-1.605l5.913-2.365a2 2 0 0 1 2.157.443Zm-3.71 5.605a2 2 0 0 0-.507 1.968a1 1 0 0 0-.2.154L5.82 16.765a.2.2 0 0 0-.053.098l-.089.385l-.178.743l-.086.351a.2.2 0 0 0 .244.244l.717-.175l.763-.178a.2.2 0 0 0 .097-.054l4.058-4.058a1 1 0 0 0 .154-.199a2 2 0 1 0-.861-3.337Zm4.658-7.484a1 1 0 0 1 1.32-.084l.094.084L20.9 7.343a1 1 0 0 1-1.32 1.498l-.095-.084l-4.242-4.242a1 1 0 0 1 0-1.414"></svg:path></svg:g>`,
})
export class MingcutePenFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcutePenLineIcon],svg[mingcute-pen-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M12.138 4.538a2 2 0 0 1 2.031.328l.126.115l4.724 4.724a2 2 0 0 1 .5 1.997l-.057.16l-2.365 5.913a2 2 0 0 1-1.605 1.24l-5.079.635q-.196.023-.41.056l-.444.072l-.232.042l-.723.14l-.495.106l-.745.167l-.955.228l-1.552.396l-.646.174a1.01 1.01 0 0 1-1.265-1.134l.034-.146l.295-1.112l.264-1.048l.228-.955l.167-.745l.105-.496l.141-.722l.08-.457l.064-.428l.66-5.28a2 2 0 0 1 1.09-1.536l.151-.069zm.742 1.857L6.968 8.76l-.584 4.672l-.048.396a27 27 0 0 1-.385 2.192l-.171.786l3.288-3.288a2 2 0 1 1 1.414 1.414L7.194 18.22l.392-.087l.784-.165a28 28 0 0 1 1.473-.26l5.397-.676l2.365-5.912zm2.363-3.294a1 1 0 0 1 1.32-.084l.094.084l4.242 4.242a1 1 0 0 1-1.32 1.498l-.094-.084l-4.242-4.242a1 1 0 0 1 0-1.414"></svg:path></svg:g>`,
})
export class MingcutePenLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcutePencil2AiFillIcon],svg[mingcute-pencil-2-ai-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M19 19a1 1 0 0 1 .117 1.993L19 21h-7a1 1 0 0 1-.117-1.993L12 19zm.631-14.632a2.5 2.5 0 0 1 0 3.536L8.735 18.8a1.5 1.5 0 0 1-.44.305l-3.804 1.729c-.842.383-1.708-.484-1.325-1.326l1.73-3.804a1.5 1.5 0 0 1 .304-.44L16.096 4.368a2.5 2.5 0 0 1 3.535 0M6 1a1 1 0 0 1 .946.677l.13.378a3 3 0 0 0 1.869 1.87l.378.129a1 1 0 0 1 0 1.892l-.378.13a3 3 0 0 0-1.87 1.869l-.129.378a1 1 0 0 1-1.892 0l-.13-.378a3 3 0 0 0-1.869-1.87l-.378-.129a1 1 0 0 1 0-1.892l.378-.13a3 3 0 0 0 1.87-1.869l.129-.378A1 1 0 0 1 6 1"></svg:path></svg:g>`,
})
export class MingcutePencil2AiFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcutePencil2AiLineIcon],svg[mingcute-pencil-2-ai-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M19 19a1 1 0 0 1 .117 1.993L19 21h-7a1 1 0 0 1-.117-1.993L12 19zm.631-14.632a2.5 2.5 0 0 1 0 3.536L8.735 18.8a1.5 1.5 0 0 1-.44.305l-3.804 1.729c-.842.383-1.708-.484-1.325-1.326l1.73-3.804a1.5 1.5 0 0 1 .304-.44L16.096 4.368a2.5 2.5 0 0 1 3.535 0m-2.12 1.414L6.677 16.614l-.589 1.297l1.296-.59L18.217 6.49a.5.5 0 1 0-.707-.707M6 1a1 1 0 0 1 .946.677l.13.378a3 3 0 0 0 1.869 1.87l.378.129a1 1 0 0 1 0 1.892l-.378.13a3 3 0 0 0-1.87 1.869l-.129.378a1 1 0 0 1-1.892 0l-.13-.378a3 3 0 0 0-1.869-1.87l-.378-.129a1 1 0 0 1 0-1.892l.378-.13a3 3 0 0 0 1.87-1.869l.129-.378A1 1 0 0 1 6 1m0 3.196A5 5 0 0 1 5.196 5q.448.355.804.804q.355-.448.804-.804A5 5 0 0 1 6 4.196"></svg:path></svg:g>`,
})
export class MingcutePencil2AiLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcutePencil2FillIcon],svg[mingcute-pencil-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M19 19a1 1 0 0 1 .117 1.993L19 21h-7a1 1 0 0 1-.117-1.993L12 19zM16.096 4.368a2.5 2.5 0 0 1 3.657 3.405l-.122.13L8.735 18.8a1.5 1.5 0 0 1-.32.244l-.12.06l-3.804 1.73c-.808.367-1.638-.417-1.365-1.225l.04-.1l1.73-3.805a1.5 1.5 0 0 1 .213-.34l.09-.1L16.097 4.368Z"></svg:path></svg:g>`,
})
export class MingcutePencil2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcutePencil2LineIcon],svg[mingcute-pencil-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M19 19a1 1 0 0 1 .117 1.993L19 21h-7a1 1 0 0 1-.117-1.993L12 19zM16.096 4.368a2.5 2.5 0 0 1 3.657 3.405l-.122.13L8.735 18.8a1.5 1.5 0 0 1-.32.244l-.12.06l-3.804 1.73c-.808.367-1.638-.417-1.365-1.225l.04-.1l1.73-3.805a1.5 1.5 0 0 1 .213-.34l.09-.1L16.097 4.368Zm2.121 1.414a.5.5 0 0 0-.638-.057l-.069.057L6.678 16.614l-.589 1.297l1.296-.59L18.217 6.49a.5.5 0 0 0 0-.708"></svg:path></svg:g>`,
})
export class MingcutePencil2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcutePencil3FillIcon],svg[mingcute-pencil-3-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M18.293 17.293a1 1 0 0 1 1.497 1.32l-.083.094l-1.5 1.5a3.12 3.12 0 0 1-4.414 0a1.12 1.12 0 0 0-1.488-.087l-.098.087l-.5.5a1 1 0 0 1-1.497-1.32l.083-.094l.5-.5a3.12 3.12 0 0 1 4.414 0a1.12 1.12 0 0 0 1.488.087l.098-.087zm-1.81-13.31A2.5 2.5 0 0 1 20.14 7.39l-.122.13L8.442 19.095a1.5 1.5 0 0 1-.505.333l-.145.049l-2.837.807a1 1 0 0 1-1.262-1.13l.025-.107l.807-2.838a1.5 1.5 0 0 1 .28-.536l.102-.114z"></svg:path></svg:g>`,
})
export class MingcutePencil3FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcutePencil3LineIcon],svg[mingcute-pencil-3-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M18.293 17.293a1 1 0 0 1 1.498 1.32l-.084.094l-1.5 1.5a3.12 3.12 0 0 1-4.414 0a1.12 1.12 0 0 0-1.488-.087l-.098.087l-.5.5a1 1 0 0 1-1.497-1.32l.083-.094l.5-.5a3.12 3.12 0 0 1 4.414 0a1.12 1.12 0 0 0 1.488.087l.098-.087zm-1.81-13.31a2.5 2.5 0 0 1 3.657 3.405l-.122.131L8.443 19.094a1.5 1.5 0 0 1-.506.333l-.145.05l-2.837.807a1 1 0 0 1-1.261-1.13l.024-.107l.807-2.838a1.5 1.5 0 0 1 .28-.537l.102-.113zm2.12 1.415a.5.5 0 0 0-.637-.058l-.07.058L6.414 16.88l-.28.988l.987-.28L18.604 6.104a.5.5 0 0 0 0-.707"></svg:path></svg:g>`,
})
export class MingcutePencil3LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcutePencilFillIcon],svg[mingcute-pencil-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M20.131 3.16a3 3 0 0 0-4.242 0l-.707.708l4.95 4.95l.706-.707a3 3 0 0 0 0-4.243l-.707-.707Zm-1.414 7.072l-4.95-4.95l-9.09 9.091a1.5 1.5 0 0 0-.401.724l-1.029 4.455a1 1 0 0 0 1.2 1.2l4.456-1.028a1.5 1.5 0 0 0 .723-.401z"></svg:path></svg:g>`,
})
export class MingcutePencilFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcutePencilLineIcon],svg[mingcute-pencil-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M16.035 3.015a3 3 0 0 1 4.099-.135l.144.135l.707.707a3 3 0 0 1 .135 4.098l-.135.144L9.773 19.177a1.5 1.5 0 0 1-.562.354l-.162.047l-4.454 1.028a1 1 0 0 1-1.22-1.088l.02-.113l1.027-4.455a1.5 1.5 0 0 1 .29-.598l.111-.125zm-.707 3.535l-8.99 8.99l-.636 2.758l2.758-.637l8.99-8.99l-2.122-2.12Zm3.536-2.121a1 1 0 0 0-1.32-.083l-.094.083l-.708.707l2.122 2.121l.707-.707a1 1 0 0 0 .083-1.32l-.083-.094z"></svg:path></svg:g>`,
})
export class MingcutePencilLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcutePencilRulerFillIcon],svg[mingcute-pencil-ruler-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M15.328 3.722a3 3 0 0 1 4.099-.135l.144.135l.707.707a3 3 0 0 1 .135 4.098l-.135.144l-2.975 2.975l3.182 3.182a2 2 0 0 1 .117 2.702l-.117.127l-2.828 2.828a2 2 0 0 1-2.701.117l-.128-.117l-3.182-3.182l-2.363 2.364a1.5 1.5 0 0 1-.7.395l-.16.03l-3.92.53a1 1 0 0 1-1.135-1.011l.01-.115l.53-3.919a1.5 1.5 0 0 1 .316-.738l.109-.122l2.364-2.363l-3.182-3.182a2 2 0 0 1-.117-2.702l.117-.127l2.828-2.828a2 2 0 0 1 2.701-.117l.128.117l3.182 3.182zm.561 9.339l-2.828 2.828l.353.354l.707-.707a1 1 0 0 1 1.498 1.32l-.083.094l-.707.707l1.414 1.414l2.828-2.828zM7.757 4.929L4.93 7.757l1.414 1.415l.707-.707a1 1 0 0 1 1.414 1.414l-.707.707l.354.353l2.828-2.828z"></svg:path></svg:g>`,
})
export class MingcutePencilRulerFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcutePencilRulerLineIcon],svg[mingcute-pencil-ruler-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="m19.571 3.722l.707.707a3 3 0 0 1 0 4.242l-2.975 2.975l3.182 3.182a2 2 0 0 1 0 2.829l-2.828 2.828a2 2 0 0 1-2.829 0l-3.182-3.182l-2.363 2.364a1.5 1.5 0 0 1-.86.426l-3.92.53a1 1 0 0 1-1.126-1.127l.53-3.919a1.5 1.5 0 0 1 .426-.86l2.364-2.363l-3.182-3.182a2 2 0 0 1 0-2.829l2.828-2.828a2 2 0 0 1 2.829 0l3.182 3.182l2.974-2.975a3 3 0 0 1 4.243 0m-3.682 9.339l-2.828 2.828l.353.354l.707-.707a1 1 0 0 1 1.498 1.32l-.083.094l-.707.707l1.414 1.414l2.828-2.828zm-1.268-5.804l-8.755 8.755l-.331 2.453l2.453-.332l8.755-8.754zM7.757 4.93L4.93 7.757l1.414 1.415l.707-.707a1 1 0 0 1 1.498 1.32l-.084.094l-.707.707l.354.353l2.828-2.828zm8.986.207l-.707.707l2.12 2.121l.708-.707a1 1 0 0 0 0-1.414l-.707-.707a1 1 0 0 0-1.414 0"></svg:path></svg:g>`,
})
export class MingcutePencilRulerLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcutePentagonFillIcon],svg[mingcute-pentagon-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M10.824 2.618a2 2 0 0 1 2.352 0l7.859 5.71a2 2 0 0 1 .727 2.236l-3.003 9.24a2 2 0 0 1-1.902 1.382H7.143a2 2 0 0 1-1.903-1.382l-3.002-9.24a2 2 0 0 1 .727-2.236l7.86-5.71Z"></svg:path></svg:g>`,
})
export class MingcutePentagonFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcutePentagonLineIcon],svg[mingcute-pentagon-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M10.824 2.618a2 2 0 0 1 2.352 0l7.859 5.71a2 2 0 0 1 .727 2.236l-3.003 9.24a2 2 0 0 1-1.902 1.382H7.143a2 2 0 0 1-1.903-1.382l-3.002-9.24a2 2 0 0 1 .727-2.236l7.86-5.71Zm9.036 7.328L12 4.236l-7.86 5.71l3.003 9.24h9.714z"></svg:path></svg:g>`,
})
export class MingcutePentagonLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcutePerformanceFillIcon],svg[mingcute-performance-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zm10.939 2.655c-.353-.883-1.618-.833-1.902.074l-1.752 5.606l-.388-.777A1.01 1.01 0 0 0 8.994 12H7a1 1 0 1 0 0 2h1.382l1.212 2.425c.407.813 1.597.717 1.868-.15l1.654-5.293l.953 2.383c.153.384.525.635.938.635H17a1 1 0 1 0 0-2h-1.323z"></svg:path></svg:g>`,
})
export class MingcutePerformanceFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcutePerformanceLineIcon],svg[mingcute-performance-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm0 2H5v14h14zm-6.963 2.729c.271-.868 1.44-.95 1.85-.184l.052.11L15.677 12H17a1 1 0 0 1 .117 1.993L17 14h-1.993a1.01 1.01 0 0 1-.886-.524l-.052-.11l-.953-2.384l-1.654 5.293c-.259.828-1.355.953-1.807.255l-.06-.105L8.381 14H7a1 1 0 0 1-.117-1.993L7 12h1.994c.34 0 .654.17.84.449l.063.11l.388.776z"></svg:path></svg:g>`,
})
export class MingcutePerformanceLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcutePhoneAddFillIcon],svg[mingcute-phone-add-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M6.857 2.445C8 3.278 8.89 4.415 9.65 5.503l.442.644l.417.615a1.504 1.504 0 0 1-.256 1.986l-1.951 1.449a.48.48 0 0 0-.142.616c.442.803 1.228 1.999 2.128 2.899s2.153 1.738 3.012 2.23a.483.483 0 0 0 .644-.162l1.27-1.933a1.503 1.503 0 0 1 2.056-.332l.663.459c1.239.86 2.57 1.837 3.588 3.14a1.47 1.47 0 0 1 .189 1.484c-.837 1.953-2.955 3.616-5.158 3.535l-.3-.017l-.233-.02l-.258-.03l-.281-.038l-.305-.05l-.16-.03l-.336-.072l-.176-.04l-.366-.094l-.385-.11l-.402-.13c-1.846-.626-4.189-1.856-6.593-4.26s-3.633-4.746-4.259-6.592l-.13-.402l-.11-.385l-.094-.366l-.078-.346a12 12 0 0 1-.063-.326l-.05-.305l-.04-.281l-.029-.258l-.02-.233l-.016-.3c-.081-2.196 1.6-4.329 3.544-5.162a1.47 1.47 0 0 1 1.445.159M17 3a1 1 0 0 1 .993.883L18 4v2h2a1 1 0 0 1 .117 1.993L20 8h-2v2a1 1 0 0 1-1.993.117L16 10V8h-2a1 1 0 0 1-.117-1.993L14 6h2V4a1 1 0 0 1 1-1"></svg:path></svg:g>`,
})
export class MingcutePhoneAddFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcutePhoneAddLineIcon],svg[mingcute-phone-add-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M6.857 2.445C8.12 3.366 9.076 4.66 9.89 5.849l.638.938A1.504 1.504 0 0 1 10.35 8.7l-1.356 1.356l.143.304c.35.709.954 1.73 1.863 2.64a10 10 0 0 0 2.104 1.58l.367.197l.327.162l.146.067l1.355-1.356a1.5 1.5 0 0 1 1.918-.171l1.014.703c1.152.81 2.355 1.733 3.29 2.931a1.47 1.47 0 0 1 .189 1.485c-.837 1.953-2.955 3.616-5.158 3.534l-.3-.016l-.233-.02l-.258-.03l-.281-.038l-.305-.051l-.326-.064l-.346-.077l-.366-.094l-.385-.11l-.402-.13c-1.846-.626-4.189-1.856-6.593-4.26s-3.633-4.746-4.259-6.592l-.13-.402l-.11-.385l-.094-.366l-.078-.346a12 12 0 0 1-.063-.326l-.05-.305l-.04-.281l-.029-.258l-.02-.233l-.016-.3c-.081-2.196 1.6-4.329 3.544-5.162a1.47 1.47 0 0 1 1.445.159M5.93 4.253c-1.072.56-2.11 1.84-2.063 3.121l.02.328l.022.205l.029.23l.04.253l.051.277l.065.298l.08.32l.096.339l.114.358q.063.183.134.375l.154.392l.176.407c.628 1.382 1.652 3 3.325 4.672c1.672 1.672 3.29 2.697 4.672 3.325l.407.176l.392.154q.192.072.375.134l.358.114l.34.096l.319.08l.298.065l.277.051l.254.04l.23.03l.204.02l.328.02c1.264.047 2.554-.985 3.112-2.043c-.712-.835-1.596-1.52-2.571-2.21l-.748-.521l-.19.199l-.406.443l-.215.226c-.586.597-1.27 1.104-2.09.773l-.226-.095l-.276-.124l-.154-.073l-.338-.169l-.371-.2a12 12 0 0 1-2.567-1.925a12 12 0 0 1-1.925-2.567l-.2-.37l-.17-.339l-.196-.43L7 10.48c-.311-.769.117-1.418.664-1.98l.224-.22l.557-.513l.2-.19l-.473-.693c-.703-1.02-1.39-1.94-2.243-2.632ZM17 3a1 1 0 0 1 .993.883L18 4v2h2a1 1 0 0 1 .117 1.993L20 8h-2v2a1 1 0 0 1-1.993.117L16 10V8h-2a1 1 0 0 1-.117-1.993L14 6h2V4a1 1 0 0 1 1-1"></svg:path></svg:g>`,
})
export class MingcutePhoneAddLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcutePhoneBlockFillIcon],svg[mingcute-phone-block-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M6.857 2.445C8 3.278 8.89 4.415 9.65 5.503l.442.644l.417.615a1.504 1.504 0 0 1-.256 1.986l-1.951 1.449a.48.48 0 0 0-.142.616c.442.803 1.228 1.999 2.128 2.899s2.153 1.738 3.012 2.23a.483.483 0 0 0 .644-.162l1.27-1.933a1.503 1.503 0 0 1 2.056-.332l.663.459c1.239.86 2.57 1.837 3.588 3.14a1.47 1.47 0 0 1 .189 1.484c-.837 1.953-2.955 3.616-5.158 3.535l-.3-.017l-.233-.02l-.258-.03l-.281-.038l-.305-.05l-.16-.03l-.336-.072l-.176-.04l-.366-.094l-.385-.11l-.402-.13c-1.846-.626-4.189-1.856-6.593-4.26s-3.633-4.746-4.259-6.592l-.13-.402l-.11-.385l-.094-.366l-.078-.346a12 12 0 0 1-.063-.326l-.05-.305l-.04-.281l-.029-.258l-.02-.233l-.016-.3c-.081-2.196 1.6-4.329 3.544-5.162a1.47 1.47 0 0 1 1.445.159m6.961 1.373a1 1 0 0 1 1.32-.083l.094.083L17 5.586l1.768-1.768a1 1 0 0 1 1.497 1.32l-.083.094L18.414 7l1.768 1.768a1 1 0 0 1-1.32 1.497l-.094-.083L17 8.414l-1.768 1.768a1 1 0 0 1-1.497-1.32l.083-.094L15.586 7l-1.768-1.768a1 1 0 0 1 0-1.414"></svg:path></svg:g>`,
})
export class MingcutePhoneBlockFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcutePhoneBlockLineIcon],svg[mingcute-phone-block-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M6.857 2.445C8.12 3.366 9.076 4.66 9.89 5.849l.638.938A1.504 1.504 0 0 1 10.35 8.7l-1.356 1.356l.143.304c.35.709.954 1.73 1.863 2.64a10 10 0 0 0 2.104 1.58l.367.197l.327.162l.146.067l1.355-1.356a1.5 1.5 0 0 1 1.918-.171l1.014.703c1.152.81 2.355 1.733 3.29 2.931a1.47 1.47 0 0 1 .189 1.485c-.837 1.953-2.955 3.616-5.158 3.534l-.3-.016l-.233-.02l-.258-.03l-.281-.038l-.305-.051l-.326-.064l-.346-.077l-.366-.094l-.385-.11l-.402-.13c-1.846-.626-4.189-1.856-6.593-4.26s-3.633-4.746-4.259-6.592l-.13-.402l-.11-.385l-.094-.366l-.078-.346a12 12 0 0 1-.063-.326l-.05-.305l-.04-.281l-.029-.258l-.02-.233l-.016-.3c-.081-2.196 1.6-4.329 3.544-5.162a1.47 1.47 0 0 1 1.445.159M5.93 4.253c-1.072.56-2.11 1.84-2.063 3.121l.02.328l.022.205l.029.23l.04.253l.051.277l.065.298l.08.32l.096.339l.114.358q.063.183.134.375l.154.392l.176.407c.628 1.382 1.652 3 3.325 4.672c1.672 1.672 3.29 2.697 4.672 3.325l.407.176l.392.154q.192.072.375.134l.358.114l.34.096l.319.08l.298.065l.277.051l.254.04l.23.03l.204.02l.328.02c1.264.047 2.554-.985 3.112-2.043c-.712-.835-1.596-1.52-2.571-2.21l-.748-.521l-.19.199l-.406.443l-.215.226c-.586.597-1.27 1.104-2.09.773l-.226-.095l-.276-.124l-.154-.073l-.338-.169l-.371-.2a12 12 0 0 1-2.567-1.925a12 12 0 0 1-1.925-2.567l-.2-.37l-.17-.339l-.196-.43L7 10.48c-.311-.769.117-1.418.664-1.98l.224-.22l.557-.513l.2-.19l-.473-.693c-.703-1.02-1.39-1.94-2.243-2.632Zm7.889-.435a1 1 0 0 1 1.32-.083l.094.083L17 5.586l1.768-1.768a1 1 0 0 1 1.497 1.32l-.083.094L18.414 7l1.768 1.768a1 1 0 0 1-1.32 1.497l-.094-.083L17 8.414l-1.768 1.768a1 1 0 0 1-1.497-1.32l.083-.094L15.586 7l-1.768-1.768a1 1 0 0 1 0-1.414Z"></svg:path></svg:g>`,
})
export class MingcutePhoneBlockLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcutePhoneCallFillIcon],svg[mingcute-phone-call-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M6.857 2.445C8 3.278 8.89 4.415 9.65 5.503l.442.644l.417.615a1.504 1.504 0 0 1-.256 1.986l-1.951 1.449a.48.48 0 0 0-.142.616c.442.803 1.228 1.999 2.128 2.899s2.153 1.738 3.012 2.23a.483.483 0 0 0 .644-.162l1.27-1.933a1.503 1.503 0 0 1 2.056-.332l.663.459c1.239.86 2.57 1.837 3.588 3.14a1.47 1.47 0 0 1 .189 1.484c-.837 1.953-2.955 3.616-5.158 3.535l-.3-.017l-.233-.02l-.258-.03l-.281-.038l-.305-.05l-.16-.03l-.336-.072l-.176-.04l-.366-.094l-.385-.11l-.402-.13c-1.846-.626-4.189-1.856-6.593-4.26s-3.633-4.746-4.259-6.592l-.13-.402l-.11-.385l-.094-.366l-.078-.346a12 12 0 0 1-.063-.326l-.05-.305l-.04-.281l-.029-.258l-.02-.233l-.016-.3c-.081-2.196 1.6-4.329 3.544-5.162a1.47 1.47 0 0 1 1.445.159m8.135 3.595l.116.013a3.5 3.5 0 0 1 2.858 2.96a1 1 0 0 1-1.958.393l-.023-.115a1.5 1.5 0 0 0-1.07-1.233l-.155-.035a1 1 0 0 1 .232-1.983M15 3a6 6 0 0 1 6 6a1 1 0 0 1-1.993.117L19 9a4 4 0 0 0-3.738-3.991L15 5a1 1 0 1 1 0-2"></svg:path></svg:g>`,
})
export class MingcutePhoneCallFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcutePhoneCallLineIcon],svg[mingcute-phone-call-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M6.857 2.445C8.12 3.366 9.076 4.66 9.89 5.849l.638.938A1.504 1.504 0 0 1 10.35 8.7l-1.356 1.356l.143.304c.35.709.954 1.73 1.863 2.64a10 10 0 0 0 2.104 1.58l.367.197l.327.162l.146.067l1.355-1.356a1.5 1.5 0 0 1 1.918-.171l1.014.703c1.152.81 2.355 1.733 3.29 2.931a1.47 1.47 0 0 1 .189 1.485c-.837 1.953-2.955 3.616-5.158 3.534l-.3-.016l-.233-.02l-.258-.03l-.281-.038l-.305-.051l-.326-.064l-.346-.077l-.366-.094l-.385-.11l-.402-.13c-1.846-.626-4.189-1.856-6.593-4.26s-3.633-4.746-4.259-6.592l-.13-.402l-.11-.385l-.094-.366l-.078-.346a12 12 0 0 1-.063-.326l-.05-.305l-.04-.281l-.029-.258l-.02-.233l-.016-.3c-.081-2.196 1.6-4.329 3.544-5.162a1.47 1.47 0 0 1 1.445.159M5.93 4.253c-1.072.56-2.11 1.84-2.063 3.121l.02.328l.022.205l.029.23l.04.253l.051.277l.065.298l.08.32l.096.339l.114.358q.063.183.134.375l.154.392l.176.407c.628 1.382 1.652 3 3.325 4.672c1.672 1.672 3.29 2.697 4.672 3.325l.407.176l.392.154q.192.072.375.134l.358.114l.34.096l.319.08l.298.065l.277.051l.254.04l.23.03l.204.02l.328.02c1.264.047 2.554-.985 3.112-2.043c-.712-.835-1.596-1.52-2.571-2.21l-.748-.521l-.19.199l-.406.443l-.215.226c-.586.597-1.27 1.104-2.09.773l-.226-.095l-.276-.124l-.154-.073l-.338-.169l-.371-.2a12 12 0 0 1-2.567-1.925a12 12 0 0 1-1.925-2.567l-.2-.37l-.17-.339l-.196-.43L7 10.48c-.311-.769.117-1.418.664-1.98l.224-.22l.557-.513l.2-.19l-.473-.693c-.703-1.02-1.39-1.94-2.243-2.632Zm9.063 1.787l.116.013a3.5 3.5 0 0 1 2.858 2.96a1 1 0 0 1-1.958.393l-.023-.115a1.5 1.5 0 0 0-1.07-1.233l-.155-.035a1 1 0 0 1 .232-1.983M15 3a6 6 0 0 1 6 6a1 1 0 0 1-1.993.117L19 9a4 4 0 0 0-3.738-3.991L15 5a1 1 0 1 1 0-2"></svg:path></svg:g>`,
})
export class MingcutePhoneCallLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcutePhoneFillIcon],svg[mingcute-phone-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M16.552 22.133c-1.44-.053-5.521-.617-9.795-4.89c-4.273-4.274-4.836-8.354-4.89-9.795c-.08-2.196 1.602-4.329 3.545-5.162a1.47 1.47 0 0 1 1.445.159c1.6 1.166 2.704 2.93 3.652 4.317a1.504 1.504 0 0 1-.256 1.986l-1.951 1.449a.48.48 0 0 0-.142.616c.442.803 1.228 1.999 2.128 2.899s2.153 1.738 3.012 2.23a.483.483 0 0 0 .644-.162l1.27-1.933a1.503 1.503 0 0 1 2.056-.332c1.407.974 3.049 2.059 4.251 3.598a1.47 1.47 0 0 1 .189 1.485c-.837 1.953-2.955 3.616-5.158 3.535"></svg:path></svg:g>`,
})
export class MingcutePhoneFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcutePhoneIncomingFillIcon],svg[mingcute-phone-incoming-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M6.857 2.445C8 3.278 8.89 4.415 9.65 5.503l.442.644l.417.615a1.504 1.504 0 0 1-.256 1.986l-1.951 1.449a.48.48 0 0 0-.142.616c.442.803 1.228 1.999 2.128 2.899s2.153 1.738 3.012 2.23a.483.483 0 0 0 .644-.162l1.27-1.933a1.503 1.503 0 0 1 2.056-.332l.663.459c1.239.86 2.57 1.837 3.588 3.14a1.47 1.47 0 0 1 .189 1.484c-.837 1.953-2.955 3.616-5.158 3.535l-.3-.017l-.233-.02l-.258-.03l-.281-.038l-.305-.05l-.16-.03l-.336-.072l-.176-.04l-.366-.094l-.385-.11l-.402-.13c-1.846-.626-4.189-1.856-6.593-4.26s-3.633-4.746-4.259-6.592l-.13-.402l-.11-.385l-.094-.366l-.078-.346a12 12 0 0 1-.063-.326l-.05-.305l-.04-.281l-.029-.258l-.02-.233l-.016-.3c-.081-2.196 1.6-4.329 3.544-5.162a1.47 1.47 0 0 1 1.445.159m12.436.848a1 1 0 0 1 1.497 1.32l-.083.094L17.414 8H19a1 1 0 0 1 .117 1.993L19 10h-4a1 1 0 0 1-.993-.883L14 9V5a1 1 0 0 1 1.993-.117L16 5v1.586z"></svg:path></svg:g>`,
})
export class MingcutePhoneIncomingFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcutePhoneIncomingLineIcon],svg[mingcute-phone-incoming-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M5.412 2.286a1.47 1.47 0 0 1 1.445.159C8.12 3.366 9.076 4.66 9.89 5.849l.638.938a1.505 1.505 0 0 1-.08 1.806l-.097.107l-1.356 1.356l.143.304c.35.709.954 1.73 1.863 2.64a10 10 0 0 0 2.104 1.58l.367.197l.327.162l.146.067L15.3 13.65a1.5 1.5 0 0 1 1.918-.171l1.014.703c1.152.81 2.355 1.733 3.29 2.931a1.47 1.47 0 0 1 .189 1.485c-.837 1.953-2.955 3.616-5.158 3.534l-.3-.016l-.233-.02l-.258-.03l-.281-.038l-.305-.051l-.326-.064l-.346-.077l-.366-.094l-.385-.11l-.402-.13c-1.846-.626-4.189-1.856-6.593-4.26s-3.633-4.746-4.259-6.592l-.13-.402l-.11-.385l-.094-.366l-.078-.346a12 12 0 0 1-.063-.326l-.05-.305l-.04-.281l-.029-.258l-.02-.233l-.016-.3c-.081-2.196 1.6-4.329 3.544-5.162Zm.517 1.967c-1.072.56-2.11 1.84-2.063 3.121l.02.328l.022.205l.029.23l.04.253l.051.277l.065.298l.08.32l.096.339l.114.358q.063.183.134.375l.154.392l.176.407c.628 1.382 1.652 3 3.325 4.672c1.672 1.672 3.29 2.697 4.672 3.325l.407.176l.392.154q.192.072.375.134l.358.114l.34.096l.319.08l.298.065l.277.051l.254.04l.23.03l.204.02l.328.02c1.264.047 2.554-.985 3.112-2.043c-.712-.835-1.596-1.52-2.571-2.21l-.748-.521l-.19.199l-.406.443l-.215.226c-.586.597-1.27 1.104-2.09.773l-.226-.095l-.276-.124l-.154-.073l-.338-.169l-.371-.2a12 12 0 0 1-2.567-1.925a12 12 0 0 1-1.925-2.567l-.2-.37l-.17-.339l-.196-.43L7 10.48c-.311-.769.117-1.418.664-1.98l.224-.22l.557-.513l.2-.19l-.473-.693c-.703-1.02-1.39-1.94-2.243-2.632Zm14.778-.96a1 1 0 0 1 0 1.414L17.414 8H19a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1V5a1 1 0 1 1 2 0v1.586l3.293-3.293a1 1 0 0 1 1.414 0"></svg:path></svg:g>`,
})
export class MingcutePhoneIncomingLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcutePhoneLineIcon],svg[mingcute-phone-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M8.172 15.829c3.845 3.845 7.408 4.266 8.454 4.305c1.264.046 2.554-.986 3.112-2.043c-.89-1.044-2.049-1.854-3.318-2.732c-.749.748-1.672 2.138-2.901 1.64c-.699-.281-2.425-1.076-3.933-2.585S7.283 11.18 7 10.482c-.498-1.231.896-2.156 1.645-2.905c-.878-1.29-1.674-2.479-2.716-3.324c-1.072.56-2.11 1.84-2.063 3.121c.039 1.046.46 4.609 4.306 8.455m8.38 6.304c-1.44-.053-5.521-.617-9.795-4.89c-4.273-4.274-4.836-8.354-4.89-9.795c-.08-2.196 1.602-4.329 3.545-5.162a1.47 1.47 0 0 1 1.445.159c1.608 1.173 2.717 2.95 3.67 4.342A1.504 1.504 0 0 1 10.35 8.7l-1.356 1.357C9.309 10.752 9.95 11.95 11 13s2.248 1.691 2.944 2.006l1.355-1.356a1.5 1.5 0 0 1 1.918-.171c1.42.984 3.088 2.077 4.304 3.634a1.47 1.47 0 0 1 .189 1.485c-.837 1.953-2.955 3.616-5.158 3.535"></svg:path></svg:g>`,
})
export class MingcutePhoneLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcutePhoneOffFillIcon],svg[mingcute-phone-off-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="m17.27 13.515l.952.66c1.154.811 2.36 1.736 3.3 2.938a1.47 1.47 0 0 1 .188 1.485a5.87 5.87 0 0 1-3.72 3.314l-.326.087c-.32.08-.7.149-1.112.133l-.217-.01l-.386-.034l-.144-.016l-.31-.042l-.338-.056l-.366-.073l-.192-.043l-.402-.1c-1.588-.423-3.683-1.306-5.917-3.134l3.597-3.596c.34.242.676.462.985.652l.438.261a.483.483 0 0 0 .644-.16l1.27-1.934a1.503 1.503 0 0 1 2.056-.332M5.412 2.285a1.47 1.47 0 0 1 1.445.16c1.11.809 1.98 1.905 2.727 2.963l.433.628l.492.726c.4.584.337 1.369-.146 1.88l-.11.106l-1.951 1.449a.48.48 0 0 0-.142.615a15 15 0 0 0 1.047 1.627l.19.25l6.614-6.614a1 1 0 0 1 1.497 1.32l-.083.095L3.99 20.925a1 1 0 0 1-1.498-1.32l.084-.095l3.255-3.255c-1.96-2.23-2.959-4.353-3.463-6.011l-.116-.405l-.051-.195l-.089-.373l-.071-.351l-.057-.327l-.044-.302l-.032-.276l-.022-.249l-.014-.22a3.7 3.7 0 0 1 .083-1.011l.062-.262a5.9 5.9 0 0 1 3.395-3.987Z"></svg:path></svg:g>`,
})
export class MingcutePhoneOffFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcutePhoneOffLineIcon],svg[mingcute-phone-off-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="m17.217 13.479l1 .693c1.156.812 2.365 1.738 3.304 2.941a1.47 1.47 0 0 1 .188 1.485a5.87 5.87 0 0 1-3.72 3.314l-.325.087c-.32.08-.7.149-1.112.133l-.217-.01l-.386-.034l-.144-.016l-.31-.042l-.166-.026l-.352-.064a12 12 0 0 1-.378-.082l-.402-.1c-1.588-.423-3.683-1.306-5.917-3.134l1.422-1.422c2.03 1.62 3.885 2.35 5.21 2.675l.347.08l.32.06q.075.015.148.025l.274.04l.243.026l.3.022l.082.004c.113.004.24-.008.392-.039l.235-.055a3.87 3.87 0 0 0 2.485-1.95c-.712-.835-1.596-1.52-2.571-2.21l-.748-.521l-1.312 1.312a1.47 1.47 0 0 1-1.589.329l-.24-.101l-.297-.134l-.343-.167a13 13 0 0 1-1.463-.868l1.442-1.443c.513.326.982.563 1.326.72L15.3 13.65a1.5 1.5 0 0 1 1.918-.171ZM5.412 2.286a1.47 1.47 0 0 1 1.445.159c1.11.809 1.981 1.906 2.728 2.966l.434.629l.507.747a1.505 1.505 0 0 1-.079 1.806l-.097.107l-1.356 1.356c.19.42.5 1.026.948 1.67l.174.244l5.894-5.895a1 1 0 0 1 1.498 1.32l-.083.095L3.99 20.925a1 1 0 0 1-1.498-1.32l.083-.095l3.255-3.255c-2.042-2.322-3.04-4.53-3.523-6.216L2.2 9.644l-.088-.373l-.072-.351l-.057-.327l-.023-.154l-.038-.29l-.027-.262l-.017-.234l-.01-.205c-.013-.33.029-.639.087-.913l.061-.262a5.9 5.9 0 0 1 3.396-3.987m.516 1.967a3.9 3.9 0 0 0-1.911 2.29l-.076.278a2 2 0 0 0-.075.553l.015.257l.032.327l.035.254l.047.282l.029.151l.07.321l.04.17l.097.357l.116.378c.443 1.363 1.29 3.107 2.901 4.967l1.44-1.441a12.4 12.4 0 0 1-1.004-1.51l-.209-.382l-.091-.18l-.16-.328l-.18-.407L7 10.481a1.47 1.47 0 0 1 .33-1.589l1.314-1.315l-.061-.09c-.854-1.257-1.637-2.41-2.655-3.235Z"></svg:path></svg:g>`,
})
export class MingcutePhoneOffLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcutePhoneOutgoingFillIcon],svg[mingcute-phone-outgoing-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M5.412 2.286a1.47 1.47 0 0 1 1.445.159C8 3.278 8.89 4.415 9.65 5.503l.442.644l.417.615c.4.584.337 1.369-.146 1.88l-.11.106l-1.951 1.449a.48.48 0 0 0-.142.615c.442.804 1.228 2 2.128 2.9s2.153 1.738 3.012 2.23a.48.48 0 0 0 .585-.088l.059-.074l1.27-1.933a1.503 1.503 0 0 1 2.056-.332l.706.49c1.294.903 2.567 1.856 3.545 3.108a1.47 1.47 0 0 1 .189 1.485c-.832 1.941-2.966 3.615-5.158 3.534l-.3-.016l-.233-.02l-.258-.03l-.281-.038l-.305-.051l-.326-.064l-.346-.078l-.366-.093l-.385-.111l-.402-.13c-1.846-.625-4.189-1.855-6.593-4.258s-3.633-4.747-4.259-6.593l-.13-.402l-.11-.385l-.094-.366l-.078-.346l-.063-.326l-.05-.305l-.04-.281l-.029-.258l-.02-.233l-.016-.3c-.081-2.196 1.6-4.33 3.544-5.162M20 3a1 1 0 0 1 1 1v4a1 1 0 0 1-2 0V6.414l-3.293 3.293a1 1 0 0 1-1.414-1.414L17.586 5H16a1 1 0 1 1 0-2z"></svg:path></svg:g>`,
})
export class MingcutePhoneOutgoingFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcutePhoneOutgoingLineIcon],svg[mingcute-phone-outgoing-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M5.412 2.286a1.47 1.47 0 0 1 1.445.159C8.12 3.366 9.076 4.66 9.89 5.849l.638.938a1.505 1.505 0 0 1-.08 1.806l-.097.107l-1.356 1.356l.143.304c.35.709.954 1.73 1.863 2.64a10 10 0 0 0 2.104 1.58l.367.197l.327.162l.146.067L15.3 13.65a1.5 1.5 0 0 1 1.918-.171l1.014.703c1.152.81 2.355 1.733 3.29 2.931a1.47 1.47 0 0 1 .189 1.485c-.837 1.953-2.955 3.616-5.158 3.534l-.3-.016l-.233-.02l-.258-.03l-.281-.038l-.305-.051l-.326-.064l-.346-.077l-.366-.094l-.385-.11l-.402-.13c-1.846-.626-4.189-1.856-6.593-4.26s-3.633-4.746-4.259-6.592l-.13-.402l-.11-.385l-.094-.366l-.078-.346a12 12 0 0 1-.063-.326l-.05-.305l-.04-.281l-.029-.258l-.02-.233l-.016-.3c-.081-2.196 1.6-4.329 3.544-5.162Zm.517 1.967c-1.072.56-2.11 1.84-2.063 3.121l.02.328l.022.205l.029.23l.04.253l.051.277l.065.298l.08.32l.096.339l.114.358q.063.183.134.375l.154.392l.176.407c.628 1.382 1.652 3 3.325 4.672c1.672 1.672 3.29 2.697 4.672 3.325l.407.176l.392.154q.192.072.375.134l.358.114l.34.096l.319.08l.298.065l.277.051l.254.04l.23.03l.204.02l.328.02c1.264.047 2.554-.985 3.112-2.043c-.712-.835-1.596-1.52-2.571-2.21l-.748-.521l-.19.199l-.406.443l-.215.226c-.586.597-1.27 1.104-2.09.773l-.226-.095l-.276-.124l-.154-.073l-.338-.169l-.371-.2a12 12 0 0 1-2.567-1.925a12 12 0 0 1-1.925-2.567l-.2-.37l-.17-.339l-.196-.43L7 10.48c-.311-.769.117-1.418.664-1.98l.224-.22l.557-.513l.2-.19l-.473-.693c-.703-1.02-1.39-1.94-2.243-2.632ZM20 3a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0V6.414l-3.293 3.293a1 1 0 0 1-1.414-1.414L17.586 5H16a1 1 0 1 1 0-2z"></svg:path></svg:g>`,
})
export class MingcutePhoneOutgoingLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcutePhoneSuccessFillIcon],svg[mingcute-phone-success-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M6.857 2.445C8 3.278 8.89 4.415 9.65 5.503l.442.644l.417.615a1.504 1.504 0 0 1-.256 1.986l-1.951 1.449a.48.48 0 0 0-.142.616c.442.803 1.228 1.999 2.128 2.899s2.153 1.738 3.012 2.23a.483.483 0 0 0 .644-.162l1.27-1.933a1.503 1.503 0 0 1 2.056-.332l.663.459c1.239.86 2.57 1.837 3.588 3.14a1.47 1.47 0 0 1 .189 1.484c-.837 1.953-2.955 3.616-5.158 3.535l-.3-.017l-.233-.02l-.258-.03l-.281-.038l-.305-.05l-.16-.03l-.336-.072l-.176-.04l-.366-.094l-.385-.11l-.402-.13c-1.846-.626-4.189-1.856-6.593-4.26s-3.633-4.746-4.259-6.592l-.13-.402l-.11-.385l-.094-.366l-.078-.346a12 12 0 0 1-.063-.326l-.05-.305l-.04-.281l-.029-.258l-.02-.233l-.016-.3c-.081-2.196 1.6-4.329 3.544-5.162a1.47 1.47 0 0 1 1.445.159m14.032 1.29a1 1 0 0 1 0 1.413l-4.066 4.066a1.25 1.25 0 0 1-1.768 0L13.11 7.27a1 1 0 0 1 1.415-1.414l1.414 1.414l3.535-3.536a1 1 0 0 1 1.415 0Z"></svg:path></svg:g>`,
})
export class MingcutePhoneSuccessFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcutePhoneSuccessLineIcon],svg[mingcute-phone-success-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M6.857 2.445C8.12 3.366 9.076 4.66 9.89 5.849l.638.938A1.504 1.504 0 0 1 10.35 8.7l-1.356 1.356l.143.304c.35.709.954 1.73 1.863 2.64a10 10 0 0 0 2.104 1.58l.367.197l.327.162l.146.067l1.355-1.356a1.5 1.5 0 0 1 1.918-.171l1.014.703c1.152.81 2.355 1.733 3.29 2.931a1.47 1.47 0 0 1 .189 1.485c-.837 1.953-2.955 3.616-5.158 3.534l-.3-.016l-.233-.02l-.258-.03l-.281-.038l-.305-.051l-.326-.064l-.346-.077l-.366-.094l-.385-.11l-.402-.13c-1.846-.626-4.189-1.856-6.593-4.26s-3.633-4.746-4.259-6.592l-.13-.402l-.11-.385l-.094-.366l-.078-.346a12 12 0 0 1-.063-.326l-.05-.305l-.04-.281l-.029-.258l-.02-.233l-.016-.3c-.081-2.196 1.6-4.329 3.544-5.162a1.47 1.47 0 0 1 1.445.159M5.93 4.253c-1.072.56-2.11 1.84-2.063 3.121l.02.328l.022.205l.029.23l.04.253l.051.277l.065.298l.08.32l.096.339l.114.358q.063.183.134.375l.154.392l.176.407c.628 1.382 1.652 3 3.325 4.672c1.672 1.672 3.29 2.697 4.672 3.325l.407.176l.392.154q.192.072.375.134l.358.114l.34.096l.319.08l.298.065l.277.051l.254.04l.23.03l.204.02l.328.02c1.264.047 2.554-.985 3.112-2.043c-.712-.835-1.596-1.52-2.571-2.21l-.748-.521l-.19.199l-.406.443l-.215.226c-.586.597-1.27 1.104-2.09.773l-.226-.095l-.276-.124l-.154-.073l-.338-.169l-.371-.2a12 12 0 0 1-2.567-1.925a12 12 0 0 1-1.925-2.567l-.2-.37l-.17-.339l-.196-.43L7 10.48c-.311-.769.117-1.418.664-1.98l.224-.22l.557-.513l.2-.19l-.473-.693c-.703-1.02-1.39-1.94-2.243-2.632Zm14.96-.519a1 1 0 0 1 0 1.414l-4.066 4.066a1.25 1.25 0 0 1-1.768 0L13.11 7.27a1 1 0 0 1 1.415-1.414l1.414 1.414l3.535-3.536a1 1 0 0 1 1.415 0Z"></svg:path></svg:g>`,
})
export class MingcutePhoneSuccessLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcutePhotoAlbum2FillIcon],svg[mingcute-photo-album-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M5 3a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1m0 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2zm14 8.686V7H5v12h.929l8.308-8.308a1.25 1.25 0 0 1 1.768 0zM8.5 12a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3"></svg:path></svg:g>`,
})
export class MingcutePhotoAlbum2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcutePhotoAlbum2LineIcon],svg[mingcute-photo-album-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M19 5a2 2 0 0 1 1.995 1.85L21 7v12a2 2 0 0 1-1.85 1.995L19 21H5a2 2 0 0 1-1.995-1.85L3 19V7a2 2 0 0 1 1.85-1.995L5 5zm0 2H5v12h.93l8.308-8.308a1.25 1.25 0 0 1 1.767 0L19 13.686zm-3.879 5.636L8.757 19H19v-2.485zM8.5 9a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3M18 2a1 1 0 1 1 0 2H6a1 1 0 0 1 0-2z"></svg:path></svg:g>`,
})
export class MingcutePhotoAlbum2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcutePhotoAlbumFillIcon],svg[mingcute-photo-album-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M5 3a3 3 0 0 0-3 3v10a2 2 0 0 0 2 2V6a1 1 0 0 1 1-1h14a2 2 0 0 0-2-2zm0 5a2 2 0 0 1 2-2h13a2 2 0 0 1 2 2v11.333a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2zm15 0H7v7.848L10.848 12a1.25 1.25 0 0 1 1.768 0l3.241 3.24l.884-.883a1.25 1.25 0 0 1 1.768 0L20 15.848zm-2 3a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0"></svg:path></svg:g>`,
})
export class MingcutePhotoAlbumFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcutePhotoAlbumLineIcon],svg[mingcute-photo-album-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M20 6a2 2 0 0 1 2 2v11.333a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2zm-8.268 7.944L7.136 18.54l-.066.06l-.07.054v.68h13v-.68l-.07-.053l-.066-.06l-2.24-2.24l-.353.354l.055.055a1 1 0 0 1-1.32 1.497l-.094-.083zM17 3a2 2 0 0 1 1.995 1.85L19 5H5a1 1 0 0 0-.993.883L4 6v12a2 2 0 0 1-1.995-1.85L2 16V6a3 3 0 0 1 2.824-2.995L5 3zm3 5H7v7.848L10.848 12a1.25 1.25 0 0 1 1.768 0l3.241 3.24l.884-.883a1.25 1.25 0 0 1 1.768 0L20 15.848zm-3.5 1.5a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3"></svg:path></svg:g>`,
})
export class MingcutePhotoAlbumLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcutePic2FillIcon],svg[mingcute-pic-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M20 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm0 2H4v14h.929l9.308-9.308a1.25 1.25 0 0 1 1.768 0L20 13.686zM7.5 7a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3"></svg:path></svg:g>`,
})
export class MingcutePic2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcutePic2LineIcon],svg[mingcute-pic-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M20 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm0 2H4v14h.929l9.308-9.308a1.25 1.25 0 0 1 1.768 0L20 13.686zm-4.879 6.636L7.757 19H20v-2.485zM7.5 7a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3"></svg:path></svg:g>`,
})
export class MingcutePic2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcutePicAiFillIcon],svg[mingcute-pic-ai-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M20 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-6a1 1 0 1 1 2 0v2.1l4.995-4.994a1.25 1.25 0 0 1 1.768 0l4.065 4.066l1.238-1.238a1.25 1.25 0 0 1 1.768 0L20 15.101V5h-8a1 1 0 1 1 0-2zM5 2a1 1 0 0 1 .898.56l.048.117l.13.378a3 3 0 0 0 1.684 1.8l.185.07l.378.129a1 1 0 0 1 .117 1.844l-.117.048l-.378.13a3 3 0 0 0-1.8 1.684l-.07.185l-.129.378a1 1 0 0 1-1.844.117l-.048-.117l-.13-.378a3 3 0 0 0-1.684-1.8l-.185-.07l-.378-.129a1 1 0 0 1-.117-1.844l.117-.048l.378-.13a3 3 0 0 0 1.8-1.684l.07-.185l.129-.378A1 1 0 0 1 5 2m10.5 5a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3"></svg:path></svg:g>`,
})
export class MingcutePicAiFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcutePicAiLineIcon],svg[mingcute-pic-ai-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M20 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-6a1 1 0 1 1 2 0v2.1l4.995-4.994a1.25 1.25 0 0 1 1.768 0l4.065 4.066l1.238-1.238a1.25 1.25 0 0 1 1.768 0L20 15.101V5h-8a1 1 0 1 1 0-2zM9.879 12.05L4 17.93V19h16v-1.071l-3.05-3.05l-.707.707l.207.207a1 1 0 0 1-1.414 1.414zM5 2a1 1 0 0 1 .898.56l.048.117l.13.378a3 3 0 0 0 1.684 1.8l.185.07l.378.129a1 1 0 0 1 .117 1.844l-.117.048l-.378.13a3 3 0 0 0-1.8 1.684l-.07.185l-.129.378a1 1 0 0 1-1.844.117l-.048-.117l-.13-.378a3 3 0 0 0-1.684-1.8l-.185-.07l-.378-.129a1 1 0 0 1-.117-1.844l.117-.048l.378-.13a3 3 0 0 0 1.8-1.684l.07-.185l.129-.378A1 1 0 0 1 5 2m10.5 5a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3M5 5.196A5 5 0 0 1 4.196 6q.448.355.804.804q.355-.448.804-.804A5 5 0 0 1 5 5.196"></svg:path></svg:g>`,
})
export class MingcutePicAiLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcutePicFillIcon],svg[mingcute-pic-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M20 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm0 2H4v10.1l4.995-4.994a1.25 1.25 0 0 1 1.768 0l4.065 4.066l1.238-1.238a1.25 1.25 0 0 1 1.768 0L20 15.101zm-4.5 2a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3"></svg:path></svg:g>`,
})
export class MingcutePicFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcutePicLineIcon],svg[mingcute-pic-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M20 3a2 2 0 0 1 1.995 1.85L22 5v14a2 2 0 0 1-1.85 1.995L20 21H4a2 2 0 0 1-1.995-1.85L2 19V5a2 2 0 0 1 1.85-1.995L4 3zM9.879 12.05l-5.657 5.657a1 1 0 0 1-.222.168V19h16v-1.125a1 1 0 0 1-.222-.168L16.95 14.88l-.707.707l.207.207a1 1 0 0 1-1.415 1.414L9.88 12.05ZM20 5H4v10.1l4.995-4.994a1.25 1.25 0 0 1 1.666-.091l.101.09l4.066 4.067l1.238-1.238a1.25 1.25 0 0 1 1.666-.091l.102.091L20 15.101zm-4.5 2a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3"></svg:path></svg:g>`,
})
export class MingcutePicLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcutePickaxFillIcon],svg[mingcute-pickax-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="m7.079 5.662l-.051-.048a1 1 0 0 0-1.414 1.414l.048.05c-1.716 2.007-2.807 4.559-2.42 7.24a1 1 0 0 0 1.682.517c.797-.949 1.6-1.89 2.465-2.778a21 21 0 0 1 1.568-1.47l7.618 8.108a1 1 0 0 0 1.436.023l.707-.707a1 1 0 0 0-.023-1.436l-8.108-7.618a22 22 0 0 1 1.47-1.568c.86-.838 1.768-1.617 2.69-2.386a1 1 0 0 0-.43-1.762c-2.68-.386-5.232.705-7.238 2.421"></svg:path></svg:g>`,
})
export class MingcutePickaxFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcutePickaxLineIcon],svg[mingcute-pickax-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M3.241 14.318c-.386-2.681.705-5.233 2.421-7.239l-.048-.051a1 1 0 0 1 1.414-1.414l.05.048c2.007-1.716 4.559-2.807 7.24-2.42a1 1 0 0 1 .428 1.76c-.92.77-1.83 1.55-2.689 2.387a21 21 0 0 0-1.47 1.568l8.108 7.618a1 1 0 0 1 .022 1.436l-.707.707a1 1 0 0 1-1.436-.023l-7.617-8.108a22 22 0 0 0-1.568 1.47c-.865.888-1.668 1.83-2.465 2.778a1 1 0 0 1-1.683-.518Zm7.803-8.728l-.383.367q-.645.628-1.175 1.216c-.363.411-.723.826-1.033 1.28c-.448.298-.766.57-1.28 1.033a31 31 0 0 0-1.216 1.175l-.367.383c.482-1.248 1.222-2.341 2.167-3.287a9.5 9.5 0 0 1 3.287-2.167"></svg:path></svg:g>`,
})
export class MingcutePickaxLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcutePigFillIcon],svg[mingcute-pig-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" fill-rule="nonzero" d="M18.615 4.212A1 1 0 0 1 19 5v2.101A7 7 0 0 1 20.71 10H21a1 1 0 0 1 1 1v3a1 1 0 0 1-.553.894l-1.456.729A7 7 0 0 1 18 17.745V19a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1h-1a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-1.255a7 7 0 0 1-2.736-3.836A3 3 0 0 1 2 11v-.5a1 1 0 0 1 2 0v.5a1 1 0 0 0 .037.272A7 7 0 0 1 11 5h2.877l3.88-.97a1 1 0 0 1 .858.182M16.5 9a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3"></svg:path></svg:g>`,
})
export class MingcutePigFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcutePigLineIcon],svg[mingcute-pig-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M18.615 4.212A1 1 0 0 1 19 5v2.101A7 7 0 0 1 20.71 10H21a1 1 0 0 1 1 1v3a1 1 0 0 1-.553.894l-1.456.729A7 7 0 0 1 18 17.745V19a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1h-1a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-1.255a7 7 0 0 1-2.736-3.836A3 3 0 0 1 2 11v-.5a1 1 0 0 1 2 0v.5a1 1 0 0 0 .037.272A7 7 0 0 1 11 5h2.877l3.88-.97a1 1 0 0 1 .858.182M10 18a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1h1v-.803a1 1 0 0 1 .5-.865a5.03 5.03 0 0 0 1.896-1.947a1 1 0 0 1 .431-.416L20 13.382V12h-.083a1 1 0 0 1-.986-.835a5 5 0 0 0-1.598-2.892A1 1 0 0 1 17 7.528V6.28l-2.758.69A1 1 0 0 1 14 7h-3a5 5 0 0 0-2.5 9.332a1 1 0 0 1 .5.865V18zm6-6a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></svg:path></svg:g>`,
})
export class MingcutePigLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcutePigMoneyFillIcon],svg[mingcute-pig-money-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M11.5 3a4.5 4.5 0 0 1 4.336 3.292l.052.205l1.87-.467a1 1 0 0 1 1.233.84L19 7v1.81a6.5 6.5 0 0 1 1.364 1.882l.138.308H21a1 1 0 0 1 .993.883L22 12v3a1 1 0 0 1-.445.832l-.108.062l-1.168.585a6.5 6.5 0 0 1-2.02 2.325l-.259.174V20a1 1 0 0 1-.883.993L17 21h-3a1 1 0 0 1-.993-.883L13 20h-1a1 1 0 0 1-.883.993L11 21H8a1 1 0 0 1-.993-.883L7 20v-1.022a6.5 6.5 0 0 1-2.854-4.101a3 3 0 0 1-2.14-2.693L2 12v-.5a1 1 0 0 1 1.993-.117L4 11.5v.5q.002.224.09.415a6.5 6.5 0 0 1 2.938-4.411A4.5 4.5 0 0 1 11.5 3m4.5 8a1 1 0 1 0 0 2a1 1 0 0 0 0-2m-4.5-6a2.5 2.5 0 0 0-2.478 2.169A6.5 6.5 0 0 1 10.5 7h3.377l.07-.017A2.5 2.5 0 0 0 11.5 5"></svg:path></svg:g>`,
})
export class MingcutePigMoneyFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcutePigMoneyLineIcon],svg[mingcute-pig-money-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M11.5 3a4.5 4.5 0 0 1 4.336 3.292l.052.205l1.87-.467a1 1 0 0 1 1.233.84L19 7v1.81a6.5 6.5 0 0 1 1.364 1.882l.138.308H21a1 1 0 0 1 .993.883L22 12v3a1 1 0 0 1-.445.832l-.108.062l-1.168.585a6.5 6.5 0 0 1-2.02 2.325l-.259.174V20a1 1 0 0 1-.883.993L17 21h-3a1 1 0 0 1-.993-.883L13 20h-1a1 1 0 0 1-.883.993L11 21H8a1 1 0 0 1-.993-.883L7 20v-1.022a6.5 6.5 0 0 1-2.854-4.101a3 3 0 0 1-2.14-2.693L2 12v-.5a1 1 0 0 1 1.993-.117L4 11.5v.5q.002.224.09.415a6.5 6.5 0 0 1 2.938-4.411A4.5 4.5 0 0 1 11.5 3M17 8.28l-2.758.69l-.12.023L14 9h-3.5a4.5 4.5 0 0 0-2.045 8.51a1 1 0 0 1 .537.766L9 18.4v.6h1a1 1 0 0 1 .883-.993L11 18h3a1 1 0 0 1 .993.883L15 19h1v-.6a1 1 0 0 1 .545-.89a4.52 4.52 0 0 0 2.068-2.18a1 1 0 0 1 .347-.417l.119-.07l.921-.461V13h-.207a1 1 0 0 1-.962-.728a4.5 4.5 0 0 0-1.468-2.244a1 1 0 0 1-.355-.644L17 9.257zM16 11a1 1 0 1 1 0 2a1 1 0 0 1 0-2m-4.5-6a2.5 2.5 0 0 0-2.478 2.169A6.5 6.5 0 0 1 10.5 7h3.377l.07-.017A2.5 2.5 0 0 0 11.5 5"></svg:path></svg:g>`,
})
export class MingcutePigMoneyLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcutePin2FillIcon],svg[mingcute-pin-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M8.867 2a2 2 0 0 0-1.98 1.717l-.515 3.605a9 9 0 0 1-1.71 4.128l-1.318 1.758c-.443.59-.265 1.525.528 1.82c.746.278 2.839.88 7.128.963V22a1 1 0 0 0 2 0v-6.01c4.29-.082 6.382-.684 7.128-.962c.793-.295.97-1.23.528-1.82l-1.319-1.758a9 9 0 0 1-1.71-4.128l-.514-3.605A2 2 0 0 0 15.133 2z"></svg:path></svg:g>`,
})
export class MingcutePin2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcutePin2LineIcon],svg[mingcute-pin-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M8.867 2a2 2 0 0 0-1.98 1.717l-.515 3.605a9 9 0 0 1-1.71 4.128l-1.318 1.758c-.443.59-.265 1.525.528 1.82c.746.278 2.839.88 7.128.963V22a1 1 0 1 0 2 0v-6.01c4.29-.082 6.382-.684 7.128-.962c.793-.295.97-1.23.528-1.82l-1.319-1.758a9 9 0 0 1-1.71-4.128l-.514-3.605A2 2 0 0 0 15.133 2zm0 2h6.266l.515 3.605c.261 1.83.98 3.565 2.09 5.045l.606.808C17.209 13.71 15.204 14 12 14s-5.21-.29-6.344-.542l.607-.808a11 11 0 0 0 2.09-5.045L8.866 4Z"></svg:path></svg:g>`,
})
export class MingcutePin2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcutePinFillIcon],svg[mingcute-pin-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M16.735 2.835a2 2 0 0 0-2.615-.186l-2.913 2.185a9 9 0 0 1-4.127 1.71l-2.177.31c-.73.105-1.265.891-.913 1.662c.331.723 1.385 2.629 4.36 5.72l-4.178 4.178a1 1 0 1 0 1.414 1.414l4.178-4.178c3.091 2.975 4.997 4.029 5.72 4.36c.77.352 1.557-.183 1.661-.913l.311-2.177a9 9 0 0 1 1.71-4.127L21.35 9.88a2 2 0 0 0-.186-2.615z"></svg:path></svg:g>`,
})
export class MingcutePinFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcutePinLineIcon],svg[mingcute-pin-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M16.735 2.835a2 2 0 0 0-2.615-.186l-2.913 2.185a9 9 0 0 1-4.127 1.71l-2.177.31c-.73.105-1.265.891-.913 1.662c.331.723 1.385 2.629 4.36 5.72l-4.178 4.178a1 1 0 1 0 1.414 1.414l4.178-4.178c3.091 2.975 4.997 4.029 5.72 4.36c.77.352 1.557-.183 1.661-.913l.311-2.177a9 9 0 0 1 1.71-4.127L21.35 9.88a2 2 0 0 0-.186-2.615zM15.32 4.25l4.43 4.43l-2.184 2.914a11 11 0 0 0-2.09 5.044l-.143 1.001c-.98-.624-2.603-1.837-4.869-4.103C8.2 11.27 6.986 9.648 6.362 8.668l1-.143a11 11 0 0 0 5.045-2.09z"></svg:path></svg:g>`,
})
export class MingcutePinLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcutePingpongFillIcon],svg[mingcute-pingpong-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M16 3.34a8 8 0 0 1 2.37 11.769a3.502 3.502 0 0 1-.87 6.89a3.5 3.5 0 0 1-3.465-3.994a8 8 0 0 1-4.177-.027l-1.626 2.816a1 1 0 0 1-1.366.366l-1.732-1a1 1 0 0 1-.366-1.366l1.626-2.816A8 8 0 0 1 16 3.34M17.5 17a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3"></svg:path></svg:g>`,
})
export class MingcutePingpongFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcutePingpongLineIcon],svg[mingcute-pingpong-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M16 3.34a8 8 0 0 1 2.37 11.769a3.501 3.501 0 0 1-.87 6.89a3.5 3.5 0 0 1-3.465-3.994a8 8 0 0 1-4.177-.027l-1.626 2.816a1 1 0 0 1-1.366.366l-1.732-1a1 1 0 0 1-.366-1.366l1.626-2.816A8 8 0 0 1 16 3.34M17.5 17a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3m-8.83-1.727l-.01.146a3 3 0 0 1-.396 1.32a3 3 0 0 1 .756-.868l.189-.136l.122-.08l-.662-.382ZM15 5.072a6 6 0 0 0-8.184 8.22a1 1 0 0 1 1.336-.617l.116.057l3.464 2a1 1 0 0 1 .241 1.537A6 6 0 0 0 15 5.072"></svg:path></svg:g>`,
})
export class MingcutePingpongLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcutePinterestFillIcon],svg[mingcute-pinterest-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12c0 4.006 2.356 7.462 5.758 9.058l2.29-10.766a1 1 0 0 1 1.956.416C11.73 12 11.49 12.5 11.501 13.1c.017.94.273 1.442.521 1.702c.253.265.618.408 1.095.4c.487-.01 1.038-.181 1.526-.489C15.592 14.117 16 13.095 16 12a4 4 0 1 0-7.668 1.6a1 1 0 0 1-1.832.8a6 6 0 1 1 11 0c-.368.848-1.04 1.534-1.792 2.007c-.755.475-1.657.779-2.555.795c-.819.015-1.672-.212-2.359-.808L9.66 21.726c.75.18 1.534.275 2.339.275Z"></svg:path></svg:g>`,
})
export class MingcutePinterestFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcutePinterestLineIcon],svg[mingcute-pinterest-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10S17.523 2 12 2M4 12a8 8 0 1 1 6.077 7.767l.718-3.374c.687.596 1.54.823 2.359.808c.898-.017 1.8-.32 2.555-.795c.752-.473 1.424-1.16 1.792-2.007A6 6 0 1 0 6.5 14.4a1 1 0 1 0 1.832-.8A4 4 0 1 1 16 12c0 1.095-.41 2.117-1.357 2.713c-.488.308-1.039.48-1.526.488c-.477.01-.842-.134-1.095-.399c-.248-.26-.521-.762-.521-1.702c0-.6.229-1.1.503-2.392a1 1 0 1 0-1.956-.416l-1.86 8.743A8 8 0 0 1 4 12"></svg:path></svg:g>`,
})
export class MingcutePinterestLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcutePinwheel2FillIcon],svg[mingcute-pinwheel-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M12 2a1 1 0 0 1 .993.883L13 3v4.257a5.5 5.5 0 0 1 8.996 4.022L22 11.5v.5a1 1 0 0 1-.883.993L21 13h-4.257a5.5 5.5 0 0 1-4.022 8.996L12.5 22H12a1 1 0 0 1-.993-.883L11 21v-4.257a5.5 5.5 0 0 1-8.996-4.022L2 12.5V12a1 1 0 0 1 .883-.993L3 11h4.257a5.5 5.5 0 0 1 4.022-8.996L11.5 2zm0 9a1 1 0 1 0 0 2a1 1 0 0 0 0-2"></svg:path></svg:g>`,
})
export class MingcutePinwheel2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcutePinwheel2LineIcon],svg[mingcute-pinwheel-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M12 2a1 1 0 0 1 .993.883L13 3v4.257a5.5 5.5 0 0 1 8.996 4.022L22 11.5v.5a1 1 0 0 1-.883.993L21 13h-4.257a5.5 5.5 0 0 1-4.022 8.996L12.5 22H12a1 1 0 0 1-.993-.883L11 21v-4.257a5.5 5.5 0 0 1-8.996-4.022L2 12.5V12a1 1 0 0 1 .883-.993L3 11h4.257a5.5 5.5 0 0 1 4.022-8.996L11.5 2zm1 11.035v6.93a3.501 3.501 0 0 0 0-6.93M10.965 13h-6.93a3.5 3.5 0 0 0 6.93 0M16.5 8a3.5 3.5 0 0 0-3.465 3h6.93A3.5 3.5 0 0 0 16.5 8M11 4.035a3.5 3.5 0 0 0-.18 6.899l.18.03z"></svg:path></svg:g>`,
})
export class MingcutePinwheel2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcutePinwheelFillIcon],svg[mingcute-pinwheel-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M12.555 2.168A1 1 0 0 1 13 3v2.807q.366-.048.732-.08c1.045-.095 2.505-.12 3.647.347c1.473.604 2.615 2.103 3.335 3.25c.46.73.876 1.493 1.209 2.29A1.002 1.002 0 0 1 21 13h-2.807q.048.365.08.732c.095 1.045.12 2.505-.348 3.647c-.603 1.473-2.102 2.615-3.249 3.335c-.731.46-1.493.876-2.29 1.209A1 1 0 0 1 11 21v-2.807a18 18 0 0 1-.732.08c-1.045.095-2.505.12-3.647-.348c-1.473-.603-2.615-2.103-3.335-3.249a15.7 15.7 0 0 1-1.209-2.291A1.002 1.002 0 0 1 3 11h2.807a18 18 0 0 1-.08-.733c-.095-1.044-.12-2.504.348-3.646c.603-1.473 2.102-2.616 3.249-3.336c.731-.46 1.493-.875 2.29-1.208a1 1 0 0 1 .94.09ZM12 11a1 1 0 1 0 0 2a1 1 0 0 0 0-2"></svg:path></svg:g>`,
})
export class MingcutePinwheelFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcutePinwheelLineIcon],svg[mingcute-pinwheel-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M12.555 2.168A1 1 0 0 1 13 3v2.807q.366-.048.732-.08c1.045-.095 2.505-.12 3.647.347c1.473.604 2.615 2.103 3.335 3.25c.46.73.876 1.493 1.209 2.29A1.002 1.002 0 0 1 21 13h-2.807q.048.365.08.732c.095 1.045.12 2.505-.348 3.647c-.603 1.473-2.102 2.615-3.249 3.335c-.731.46-1.493.876-2.29 1.209A1 1 0 0 1 11 21v-2.807a18 18 0 0 1-.732.08c-1.045.095-2.505.12-3.647-.348c-1.473-.603-2.615-2.103-3.335-3.249a15.7 15.7 0 0 1-1.209-2.291A1.002 1.002 0 0 1 3 11h2.807a18 18 0 0 1-.08-.733c-.095-1.044-.12-2.504.348-3.646c.603-1.473 2.102-2.616 3.249-3.336c.731-.46 1.493-.875 2.29-1.208a1 1 0 0 1 .94.09ZM16.169 13H13v6.385q.295-.165.613-.364c1.116-.702 2.117-1.56 2.462-2.4c.272-.665.297-1.705.207-2.709a14 14 0 0 0-.053-.484L16.17 13ZM11 13H4.615q.165.295.364.612c.702 1.117 1.56 2.118 2.4 2.463c.665.272 1.705.297 2.709.207c.337-.031.65-.072.912-.113zm0-8.385l-.2.114l-.413.25c-1.116.701-2.117 1.559-2.462 2.4c-.272.664-.297 1.704-.207 2.708c.03.338.072.65.113.913H11zm2.912 3.103a14 14 0 0 0-.484.052L13 7.83V11h6.385q-.165-.295-.364-.613c-.701-1.116-1.56-2.117-2.4-2.462c-.665-.272-1.705-.298-2.708-.207Z"></svg:path></svg:g>`,
})
export class MingcutePinwheelLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcutePisaTowerFillIcon],svg[mingcute-pisa-tower-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="m11.99 1.824l3.94.695a2 2 0 0 1 1.621 2.317l-.173.984a1 1 0 0 1 .81 1.159l-.694 3.94a1 1 0 1 1-.347 1.969l-.52 2.954a1 1 0 1 1-.35 1.97l-.773 4.363a1 1 0 0 1-.984.825H6.396a1 1 0 0 1-.985-1.174l1.019-5.75a1 1 0 0 1 .348-1.97l.52-2.955a1 1 0 0 1 .348-1.97l.695-3.939a1 1 0 0 1 1.158-.81l.174-.986a2 2 0 0 1 2.317-1.622m-2.028 16.9L9.56 21h2.03l.341-1.93a1 1 0 0 0-1.97-.347Zm2.087-5.72a1 1 0 0 0-1.131.698l-.027.114l-.174.984l1.97.348l.174-.985a1 1 0 0 0-.812-1.159m.869-4.924a1 1 0 0 0-1.132.698l-.027.114l-.174.984l1.97.348l.174-.985a1 1 0 0 0-.811-1.159m-1.275-4.286l-.174.985l3.94.694l.173-.985l-3.94-.694Z"></svg:path></svg:g>`,
})
export class MingcutePisaTowerFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcutePisaTowerLineIcon],svg[mingcute-pisa-tower-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M9.673 3.447a2 2 0 0 1 2.169-1.643l.148.02l3.94.695a2 2 0 0 1 1.642 2.169l-.02.148l-.174.984a1 1 0 0 1 .825 1.043l-.014.116l-.695 3.94a1 1 0 0 1-.231 1.982l-.116-.013l-.52 2.954a1 1 0 0 1-.233 1.983l-.116-.013l-.774 4.363a1 1 0 0 1-.865.818l-.12.007H6.397a1 1 0 0 1-.999-1.05l.014-.124l1.019-5.75a1 1 0 0 1 .232-1.984l.116.014l.52-2.955a1 1 0 0 1 .232-1.983l.116.014l.695-3.94a1 1 0 0 1 1.027-.825l.131.014l.174-.985ZM8.4 16.422L7.589 21H9.56l.402-2.277a1 1 0 1 1 1.97.347L11.59 21h2.09l.627-3.536zm.869-4.923l-.521 2.954l1.97.347l.173-.985a1 1 0 0 1 1.983.232l-.014.116l-.173.985l1.97.347l.52-2.954zm.868-4.924l-.521 2.954l1.97.347l.173-.985a1 1 0 0 1 1.97.348l-.174.985l1.97.347l.52-2.955zm1.505-2.781l-.173.985l3.94.694l.173-.985z"></svg:path></svg:g>`,
})
export class MingcutePisaTowerLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcutePiscesFillIcon],svg[mingcute-pisces-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M6 2a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4V6a4 4 0 0 0-4-4zm1.79 14.853a1 1 0 0 0 1.754.961a12 12 0 0 0 1.418-4.828h2.076a12 12 0 0 0 1.418 4.828a1 1 0 1 0 1.754-.961a10 10 0 0 1-1.165-3.868h.97a1 1 0 0 0 0-2h-.967a10 10 0 0 1 1.162-3.838a1 1 0 1 0-1.754-.961a12 12 0 0 0-1.415 4.8H10.96a12 12 0 0 0-1.416-4.8a1 1 0 1 0-1.754.961a10 10 0 0 1 1.162 3.839h-.937a1 1 0 1 0 0 2h.94a10 10 0 0 1-1.165 3.867"></svg:path></svg:g>`,
})
export class MingcutePiscesFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcutePiscesLineIcon],svg[mingcute-pisces-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M6.52 3.123a1 1 0 0 1 1.357.396c1.2 2.188 1.945 4.733 2.095 7.46h4.056c.15-2.727.896-5.272 2.095-7.46a1 1 0 1 1 1.754.962c-1.038 1.893-1.698 4.108-1.845 6.497h1.99a1 1 0 0 1 0 2h-1.993c.142 2.406.804 4.637 1.848 6.542a1 1 0 0 1-1.754.96c-1.205-2.198-1.953-4.76-2.097-7.502H9.974c-.144 2.743-.891 5.304-2.097 7.503a1 1 0 1 1-1.754-.962c1.044-1.904 1.706-4.134 1.848-6.54H6.022a1 1 0 1 1 0-2h1.947C7.82 8.588 7.16 6.373 6.123 4.48a1 1 0 0 1 .396-1.358"></svg:path></svg:g>`,
})
export class MingcutePiscesLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcutePizzaFillIcon],svg[mingcute-pizza-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M11.5 3a1 1 0 0 1 .993.883L12.5 4v7.19l6.94-1.892a1 1 0 0 1 1.227.702A9.5 9.5 0 1 1 11.5 3m1 11a2.5 2.5 0 1 0 0 5a2.5 2.5 0 0 0 0-5m0 2a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1m4.5-3a1 1 0 0 0-.993.883L16 14.01a1 1 0 0 0 1.993.117L18 14a1 1 0 0 0-1-1m-9.5-1a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3m7.794-9.956a9.52 9.52 0 0 1 5.149 3.869a1 1 0 0 1-.258 1.365l-.101.063l-5.608 3.038A1 1 0 0 1 13 9.473l.012-.125l1-6.5a1 1 0 0 1 1.282-.804M8 8a1 1 0 0 0-.993.883L7 9.01a1 1 0 0 0 1.993.117L9 9a1 1 0 0 0-1-1m7.798-3.612l-.503 3.273l2.807-1.521a7.5 7.5 0 0 0-2.304-1.752"></svg:path></svg:g>`,
})
export class MingcutePizzaFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcutePizzaLineIcon],svg[mingcute-pizza-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M11.5 3a1 1 0 0 1 .993.883L12.5 4v7.19l6.94-1.892a1 1 0 0 1 1.227.702A9.5 9.5 0 1 1 11.5 3m-1 2.066A7.501 7.501 0 0 0 11.5 20a7.5 7.5 0 0 0 7.471-8.165l-.036-.326l-7.172 1.956a1 1 0 0 1-1.256-.85L10.5 12.5zm2 8.934a2.5 2.5 0 1 1 0 5a2.5 2.5 0 0 1 0-5m0 2a.5.5 0 1 0 0 1a.5.5 0 0 0 0-1m4.5-3a1 1 0 0 1 .993.883l.007.127a1 1 0 0 1-1.993.117L16 14a1 1 0 0 1 1-1m-9.5-1a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3m7.794-9.956a9.52 9.52 0 0 1 5.149 3.869a1 1 0 0 1-.258 1.365l-.101.063l-5.608 3.038A1 1 0 0 1 13 9.473l.012-.125l1-6.5a1 1 0 0 1 1.282-.804M8 8a1 1 0 0 1 .993.883L9 9.01a1 1 0 0 1-1.993.117L7 9a1 1 0 0 1 1-1m7.798-3.612l-.503 3.273l2.807-1.521a7.5 7.5 0 0 0-2.304-1.752"></svg:path></svg:g>`,
})
export class MingcutePizzaLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcutePlanetFillIcon],svg[mingcute-planet-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M20.989 12.446a9 9 0 0 1-13.1 7.563a28 28 0 0 0 2.813-1.129a50 50 0 0 0 4.048-2.117a50 50 0 0 0 3.858-2.448a28 28 0 0 0 2.381-1.869M11.999 3c2.226 0 4.263.808 5.834 2.146l.317-.072l.167-.034l.346-.064l.359-.054c1.275-.167 2.706-.072 3.37 1.078c.762 1.32-.058 2.784-.957 3.862l-.225.262l-.223.243c-1.394 1.478-3.703 3.201-6.987 5.097s-5.93 3.034-7.908 3.503l-.159.036l-.331.069l-.346.06c-1.347.205-2.918.133-3.649-1.132c-.663-1.15-.03-2.436.751-3.457l.226-.284l.115-.136l.227-.258l.22-.24A9 9 0 0 1 12 3ZM3.872 15.869l-.154.213c-.165.235-.347.525-.374.788v.128c.14.25.637.252 1.002.225l.304-.03a9 9 0 0 1-.778-1.325Zm16.785-8.867c-.202-.15-.533-.164-.834-.145l-.285.025q-.066.008-.124.013q.436.631.761 1.334l.161-.225c.189-.273.42-.662.357-.922L20.66 7l-.004.002Z"></svg:path></svg:g>`,
})
export class MingcutePlanetFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcutePlanetLineIcon],svg[mingcute-planet-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M12 3c2.225 0 4.263.808 5.833 2.146c.931-.22 1.785-.322 2.507-.26c.76.064 1.603.337 2.052 1.114c.407.704.352 1.49.076 2.204c-.272.702-.787 1.427-1.481 2.163l-.114.12a9 9 0 0 1-14.62 8.44l-.16.04c-.985.233-1.87.317-2.615.2c-.757-.118-1.465-.465-1.87-1.167c-.45-.777-.264-1.644.06-2.334c.308-.655.823-1.344 1.479-2.04A9 9 0 0 1 12 3M3.345 17.009c-.143-.709 1-1.75 1.406-2.167a1.53 1.53 0 0 0 .4-1.386a7 7 0 0 1 11.531-6.66a1.53 1.53 0 0 0 1.402.348c.563-.144 2.039-.613 2.581-.135c.336.704-.971 1.832-1.38 2.239l-.01.01c-1.236 1.23-3.281 2.746-6.275 4.474c-2.992 1.728-5.326 2.74-7.01 3.197l-.015.004c-.527.143-2.209.689-2.63.076m5.288 1.13c1.538-.614 3.33-1.499 5.367-2.675s3.698-2.284 4.998-3.31A7 7 0 0 1 8.633 18.14Z"></svg:path></svg:g>`,
})
export class MingcutePlanetLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcutePlayCircleFillIcon],svg[mingcute-play-circle-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2M8.964 8.65l-.053.5l-.03.333l-.042.6l-.024.46l-.018.505l-.01.549v.578l.01.549l.018.506l.024.46l.042.6l.071.73l.013.102a1.192 1.192 0 0 0 1.651.954l.456-.202l.651-.309l.39-.196l.43-.224l.466-.253l.498-.282l.493-.29l.231-.14l.43-.27l.388-.25l.342-.229l.653-.46l.177-.131a1.192 1.192 0 0 0-.001-1.908l-.406-.297l-.275-.193l-.32-.218l-.565-.368l-.428-.268l-.47-.282l-.499-.288l-.478-.265l-.447-.238l-.41-.21l-.54-.263l-.439-.202l-.23-.102l-.095-.04a1.192 1.192 0 0 0-1.654.952"></svg:path></svg:g>`,
})
export class MingcutePlayCircleFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcutePlayCircleLineIcon],svg[mingcute-play-circle-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2m0 2a8 8 0 1 0 0 16a8 8 0 0 0 0-16M8.964 8.65a1.192 1.192 0 0 1 1.654-.953l.325.143l.44.202l.349.169l.39.196l.43.223l.462.251l.494.28l.249.145l.469.282l.428.268l.564.368l.464.318l.455.328l.083.061c.635.477.64 1.429.001 1.909l-.283.209l-.393.276l-.496.335l-.387.25l-.43.27l-.473.283q-.123.073-.252.147l-.498.282l-.466.253l-.43.224l-.39.196l-.505.242l-.4.181l-.202.088a1.192 1.192 0 0 1-1.651-.954l-.054-.499l-.03-.334l-.042-.599l-.024-.46l-.018-.506l-.01-.549v-.579l.01-.548l.018-.506l.024-.46l.042-.599l.071-.73zm1.884 1.355l-.027.467l-.021.525l-.012.58v.618l.012.58l.02.525l.028.467l.416-.21l.226-.118l.488-.262l.53-.299l.522-.309l.242-.148l.444-.28l.39-.255l-.392-.257l-.444-.281l-.496-.3a30 30 0 0 0-.793-.453l-.488-.262l-.442-.227z"></svg:path></svg:g>`,
})
export class MingcutePlayCircleLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcutePlayFillIcon],svg[mingcute-play-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M5.669 4.76a1.47 1.47 0 0 1 2.04-1.177c1.062.454 3.442 1.533 6.462 3.276c3.021 1.744 5.146 3.267 6.069 3.958c.788.591.79 1.763.001 2.356c-.914.687-3.013 2.19-6.07 3.956c-3.06 1.766-5.412 2.832-6.464 3.28c-.906.387-1.92-.2-2.038-1.177c-.138-1.142-.396-3.735-.396-7.237c0-3.5.257-6.092.396-7.235"></svg:path></svg:g>`,
})
export class MingcutePlayFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcutePlayLineIcon],svg[mingcute-play-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M7.575 5.708a62 62 0 0 0-.302 6.287c0 2.801.17 4.997.302 6.289a63 63 0 0 0 5.595-2.887a63 63 0 0 0 5.296-3.401a63 63 0 0 0-5.295-3.405a63 63 0 0 0-5.596-2.883M5.67 4.76a1.47 1.47 0 0 1 2.04-1.177c1.062.454 3.442 1.533 6.462 3.276c3.021 1.744 5.146 3.267 6.069 3.958c.788.591.79 1.763.001 2.356c-.914.687-3.013 2.19-6.07 3.956c-3.06 1.766-5.412 2.832-6.464 3.28c-.906.387-1.92-.2-2.038-1.177c-.138-1.142-.396-3.735-.396-7.237c0-3.5.257-6.092.396-7.235"></svg:path></svg:g>`,
})
export class MingcutePlayLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcutePlaygroundFillIcon],svg[mingcute-playground-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M11 5v4.17a3.001 3.001 0 0 0-.172 5.592l.172.067V19H4a2 2 0 0 1-1.995-1.85L2 17v-1h3a2 2 0 0 0 1.995-1.85L7 14v-4a2 2 0 0 0-1.85-1.995L5 8H2V7a2 2 0 0 1 1.85-1.995L4 5zm9 0a2 2 0 0 1 2 2v1h-3a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h3v1a2 2 0 0 1-2 2h-7v-4.17a3.001 3.001 0 0 0 0-5.66V5zM5 10v4H2v-4zm17 0v4h-3v-4zm-10 1a1 1 0 1 1 0 2a1 1 0 0 1 0-2"></svg:path></svg:g>`,
})
export class MingcutePlaygroundFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcutePlaygroundLineIcon],svg[mingcute-playground-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M20 5a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2zm0 2h-7v2.17a3.001 3.001 0 0 1 .172 5.592L13 14.83V17h7v-1h-2a2 2 0 0 1-1.995-1.85L16 14v-4a2 2 0 0 1 1.85-1.995L18 8h2zm-9 0H4v1h2a2 2 0 0 1 1.995 1.85L8 10v4a2 2 0 0 1-1.85 1.995L6 16H4v1h7v-2.17a3.001 3.001 0 0 1-.172-5.592L11 9.17zm9 3h-2v4h2zM6 10H4v4h2zm6 1a1 1 0 1 0 0 2a1 1 0 0 0 0-2"></svg:path></svg:g>`,
})
export class MingcutePlaygroundLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcutePlaylist2FillIcon],svg[mingcute-playlist-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M17.758 5.591L19 5.281v2.938l-2 .5V6.562a1 1 0 0 1 .758-.97Zm1.727 4.568L17 10.782V17.5a3.5 3.5 0 1 1-2-3.163V6.562a3 3 0 0 1 2.272-2.91l1.864-.467A1.5 1.5 0 0 1 21 4.64v3.58a2 2 0 0 1-1.515 1.94ZM4 5a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2zm-1 7a1 1 0 0 1 1-1h5a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1m0 6a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1"></svg:path></svg:g>`,
})
export class MingcutePlaylist2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcutePlaylist2LineIcon],svg[mingcute-playlist-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M21 4.64v3.58a2 2 0 0 1-1.515 1.94L17 10.78v6.72a3.5 3.5 0 1 1-2-3.163V6.562a3 3 0 0 1 2.272-2.91l1.864-.467A1.5 1.5 0 0 1 21 4.64M13.5 16a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3M7 17a1 1 0 1 1 0 2H4a1 1 0 1 1 0-2zm2-6a1 1 0 1 1 0 2H4a1 1 0 1 1 0-2zm10-5.72l-1.242.311a1 1 0 0 0-.752.857L17 6.562v2.157l2-.5zM12 5a1 1 0 0 1 .117 1.993L12 7H4a1 1 0 0 1-.117-1.993L4 5z"></svg:path></svg:g>`,
})
export class MingcutePlaylist2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcutePlaylistFillIcon],svg[mingcute-playlist-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="m17.33 4.055l2.986.996a1 1 0 0 1-.632 1.898L18 6.387V17.5a3.5 3.5 0 1 1-2-3.163V5.014c0-.69.675-1.177 1.33-.959M8 17a1 1 0 1 1 0 2H4a1 1 0 0 1 0-2zm2-6a1 1 0 1 1 0 2H4a1 1 0 0 1 0-2zm3-6a1 1 0 0 1 .117 1.993L13 7H4a1 1 0 0 1-.117-1.993L4 5z"></svg:path></svg:g>`,
})
export class MingcutePlaylistFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcutePlaylistLineIcon],svg[mingcute-playlist-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="m17.33 4.056l2.986.995a1 1 0 0 1-.632 1.898L18 6.387V17.5a3.5 3.5 0 1 1-2-3.163V5.014c0-.69.675-1.177 1.33-.958M14.5 16a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3M8 17a1 1 0 1 1 0 2H4a1 1 0 1 1 0-2zm2-6a1 1 0 1 1 0 2H4a1 1 0 1 1 0-2zm3-6a1 1 0 0 1 .117 1.993L13 7H4a1 1 0 0 1-.117-1.993L4 5z"></svg:path></svg:g>`,
})
export class MingcutePlaylistLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcutePlugin2FillIcon],svg[mingcute-plugin-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M2 9a3 3 0 0 1 3-3h2.853c.297 0 .48-.309.366-.583A2.5 2.5 0 0 1 8.083 5c-.331-1.487.792-3 2.417-3c1.626 0 2.748 1.513 2.417 3a2.5 2.5 0 0 1-.136.417c-.115.274.069.583.366.583H15a3 3 0 0 1 3 3v1.853c0 .297.308.48.583.366c.135-.056.273-.104.417-.136c1.487-.331 3 .791 3 2.417s-1.513 2.748-3 2.417a2.5 2.5 0 0 1-.417-.136c-.274-.115-.583.069-.583.366V19a3 3 0 0 1-3 3h-1.893c-.288 0-.473-.291-.39-.566q.063-.21.085-.434a2.31 2.31 0 1 0-4.604 0q.021.224.086.434c.082.275-.103.566-.39.566H5a3 3 0 0 1-3-3v-2.893c0-.288.291-.473.566-.39q.21.063.434.085a2.31 2.31 0 1 0 0-4.604q-.224.021-.434.086c-.275.082-.566-.103-.566-.39z"></svg:path></svg:g>`,
})
export class MingcutePlugin2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcutePlugin2LineIcon],svg[mingcute-plugin-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M10.5 4a1.472 1.472 0 0 0-1.317 2.13l.163.325A1.067 1.067 0 0 1 8.39 8H5a1 1 0 0 0-1 1v1.194c1.82-.109 3.5 1.331 3.5 3.306S5.82 16.915 4 16.806V19a1 1 0 0 0 1 1h2.194c-.109-1.82 1.331-3.5 3.306-3.5s3.415 1.68 3.306 3.5H15a1 1 0 0 0 1-1v-3.39c0-.794.835-1.31 1.545-.956l.324.163a1.472 1.472 0 1 0 0-2.634l-.324.163A1.067 1.067 0 0 1 16 11.39V9a1 1 0 0 0-1-1h-2.39c-.794 0-1.31-.835-.956-1.545l.163-.325A1.472 1.472 0 0 0 10.5 4M7.064 6c-.316-2.017 1.23-4 3.436-4s3.752 1.983 3.436 4H15a3 3 0 0 1 3 3v1.064c2.017-.316 4 1.23 4 3.436s-1.983 3.752-4 3.436V19a3 3 0 0 1-3 3h-2.407a1.06 1.06 0 0 1-.976-1.48l.085-.197a1.308 1.308 0 1 0-2.404 0l.085.198c.3.7-.214 1.479-.976 1.479H5a3 3 0 0 1-3-3v-3.407c0-.762.779-1.276 1.48-.976l.197.085a1.308 1.308 0 1 0 0-2.404l-.198.085c-.7.3-1.479-.214-1.479-.976V9a3 3 0 0 1 3-3z"></svg:path></svg:g>`,
})
export class MingcutePlugin2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcutePluginFillIcon],svg[mingcute-plugin-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M15 20a1 1 0 1 1 0 2H9a1 1 0 1 1 0-2zm0-18a1 1 0 0 1 .993.883L16 3v3h2a2 2 0 0 1 1.995 1.85L20 8v5a6 6 0 0 1-5.775 5.996L14 19h-4a6 6 0 0 1-5.996-5.775L4 13V8a2 2 0 0 1 1.85-1.995L6 6h2V3a1 1 0 0 1 1.993-.117L10 3v3h4V3a1 1 0 0 1 1-1"></svg:path></svg:g>`,
})
export class MingcutePluginFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcutePluginLineIcon],svg[mingcute-plugin-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M15 20a1 1 0 0 1 .117 1.993L15 22H9a1 1 0 0 1-.117-1.993L9 20zm0-18a1 1 0 0 1 .993.883L16 3v3h2a2 2 0 0 1 1.995 1.85L20 8v5a6 6 0 0 1-5.775 5.996L14 19h-4a6 6 0 0 1-5.996-5.775L4 13V8a2 2 0 0 1 1.85-1.995L6 6h2V3a1 1 0 0 1 1.993-.117L10 3v3h4V3a1 1 0 0 1 1-1m3 6H6v5a4 4 0 0 0 3.8 3.995L10 17h4a4 4 0 0 0 3.995-3.8L18 13z"></svg:path></svg:g>`,
})
export class MingcutePluginLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcutePlusFillIcon],svg[mingcute-plus-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v4h4a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-4v4a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-4H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h4z"></svg:path></svg:g>`,
})
export class MingcutePlusFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcutePlusLineIcon],svg[mingcute-plus-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v4h4a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-4v4a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-4H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h4zm4 0h-2v5a1 1 0 0 1-1 1H5v2h5a1 1 0 0 1 1 1v5h2v-5a1 1 0 0 1 1-1h5v-2h-5a1 1 0 0 1-1-1z"></svg:path></svg:g>`,
})
export class MingcutePlusLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcutePolkadotDotFillIcon],svg[mingcute-polkadot-dot-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M12 2c-.84 0-1.65.202-2.282.582C9.105 2.949 8.5 3.597 8.5 4.5s.605 1.55 1.218 1.918C10.35 6.798 11.159 7 12 7c.84 0 1.65-.202 2.282-.582c.613-.367 1.218-1.015 1.218-1.918s-.605-1.55-1.218-1.918C13.65 2.202 12.84 2 12 2m0 15c-.84 0-1.65.202-2.282.582c-.613.367-1.218 1.014-1.218 1.918s.605 1.55 1.218 1.918c.632.38 1.441.582 2.282.582c.84 0 1.65-.202 2.282-.582c.613-.367 1.218-1.014 1.218-1.918s-.605-1.55-1.218-1.918C13.65 17.202 12.84 17 12 17M3.34 7c-.42.728-.65 1.53-.638 2.267c.012.715.27 1.562 1.053 2.014s1.645.251 2.27-.095c.645-.358 1.225-.958 1.645-1.686s.65-1.53.637-2.267c-.012-.715-.27-1.562-1.052-2.014c-.783-.452-1.646-.251-2.27.095C4.34 5.673 3.76 6.272 3.34 7m12.99 7.5c-.42.728-.65 1.53-.637 2.267c.012.715.27 1.562 1.052 2.014s1.645.251 2.27-.095c.645-.358 1.225-.958 1.645-1.686s.65-1.53.637-2.267c-.012-.715-.27-1.562-1.052-2.014s-1.645-.251-2.27.096c-.645.357-1.225.957-1.645 1.685M4.985 18.686C4.34 18.328 3.76 17.728 3.34 17s-.65-1.53-.638-2.267c.012-.715.27-1.562 1.053-2.014s1.645-.251 2.27.096c.645.357 1.225.957 1.645 1.685s.65 1.53.637 2.267c-.012.715-.27 1.562-1.052 2.014c-.783.452-1.646.251-2.27-.095m12.99-7.5c-.645-.358-1.225-.958-1.645-1.686s-.65-1.53-.637-2.267c.012-.715.27-1.562 1.052-2.014s1.645-.251 2.27.095c.645.359 1.225.958 1.645 1.686s.65 1.53.637 2.267c-.012.715-.27 1.562-1.052 2.014s-1.645.251-2.27-.095"></svg:path></svg:g>`,
})
export class MingcutePolkadotDotFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcutePolkadotDotLineIcon],svg[mingcute-polkadot-dot-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M12 2c-.84 0-1.65.202-2.282.582C9.105 2.949 8.5 3.597 8.5 4.5s.605 1.55 1.218 1.918C10.35 6.798 11.16 7 12 7s1.65-.202 2.282-.582C14.895 6.051 15.5 5.403 15.5 4.5s-.605-1.55-1.218-1.918C13.65 2.202 12.841 2 12 2m-1.253 2.297c-.157.094-.216.167-.238.203c.022.036.081.11.238.203c.272.164.713.297 1.253.297s.981-.133 1.253-.297c.157-.094.216-.167.238-.203c-.022-.036-.081-.11-.238-.203C12.981 4.133 12.54 4 12 4s-.981.133-1.253.297M12 17c-.84 0-1.65.202-2.282.582c-.613.367-1.218 1.014-1.218 1.918s.605 1.55 1.218 1.918c.632.38 1.442.582 2.282.582s1.65-.202 2.282-.582c.613-.367 1.218-1.014 1.218-1.918s-.605-1.55-1.218-1.918C13.65 17.202 12.841 17 12 17m-1.253 2.297c-.157.094-.216.167-.238.203c.022.036.081.11.238.203c.272.163.713.297 1.253.297s.981-.134 1.253-.297c.157-.094.216-.167.238-.203c-.022-.036-.081-.11-.238-.203C12.981 19.134 12.54 19 12 19s-.981.134-1.253.297M3.34 7c-.42.728-.65 1.53-.637 2.267c.012.715.27 1.562 1.052 2.014s1.645.251 2.27-.096c.645-.357 1.225-.957 1.645-1.685s.65-1.53.637-2.267c-.012-.715-.27-1.562-1.052-2.014s-1.645-.251-2.27.095C4.34 5.672 3.76 6.272 3.34 7m1.362 2.234c.003.182.037.27.057.307c.043 0 .136-.016.295-.104c.278-.154.614-.47.884-.937s.375-.916.37-1.234c-.004-.182-.037-.27-.058-.307c-.042 0-.135.015-.294.104c-.278.154-.614.469-.884.937s-.375.916-.37 1.234M16.33 14.5c-.42.728-.65 1.53-.637 2.267c.012.715.27 1.562 1.052 2.014c.783.452 1.646.251 2.27-.095c.645-.358 1.225-.958 1.645-1.686s.65-1.53.638-2.267c-.012-.715-.27-1.562-1.053-2.014s-1.645-.251-2.27.095c-.645.358-1.225.958-1.645 1.686m1.363 2.234c.003.182.036.27.057.307c.042 0 .135-.015.295-.104c.277-.154.613-.47.883-.937s.375-.916.37-1.234c-.003-.182-.037-.27-.057-.307c-.042 0-.135.015-.295.104c-.278.154-.614.469-.884.937s-.375.916-.37 1.234ZM4.985 18.686C4.34 18.328 3.76 17.728 3.34 17s-.65-1.53-.637-2.267c.012-.715.27-1.562 1.052-2.014s1.645-.251 2.27.096c.645.358 1.225.957 1.645 1.685s.65 1.53.637 2.268c-.012.714-.27 1.561-1.052 2.013s-1.645.252-2.27-.095M6.25 17.04c-.042 0-.135-.015-.294-.104c-.278-.154-.614-.469-.884-.937s-.375-.916-.37-1.234c.003-.182.037-.27.057-.307c.043 0 .136.016.295.104c.278.154.614.47.884.937s.375.916.37 1.234c-.004.182-.037.27-.058.307m11.725-5.855c-.645-.358-1.225-.958-1.645-1.686s-.65-1.53-.637-2.267c.012-.715.27-1.562 1.052-2.014c.783-.452 1.646-.251 2.27.096c.645.358 1.225.957 1.645 1.685s.65 1.53.638 2.268c-.012.714-.27 1.561-1.053 2.013s-1.645.252-2.27-.095m1.266-1.645c-.042 0-.135-.015-.295-.104c-.278-.154-.614-.469-.884-.937s-.375-.916-.37-1.234c.004-.182.037-.27.058-.307c.042 0 .135.016.295.104c.277.154.613.47.883.937s.375.916.37 1.234c-.003.182-.037.27-.057.307"></svg:path></svg:g>`,
})
export class MingcutePolkadotDotLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcutePolygonFillIcon],svg[mingcute-polygon-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M6.907 3.908a1.25 1.25 0 0 1 2.186 0L11 7.34V6a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2.207a5.5 5.5 0 1 1-10.586 0H3.425a1.25 1.25 0 0 1-1.093-1.857z"></svg:path></svg:g>`,
})
export class MingcutePolygonFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcutePolygonLineIcon],svg[mingcute-polygon-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M6.907 3.908A1.25 1.25 0 0 1 9.02 3.79l.073.117L11 7.34V6a2 2 0 0 1 1.85-1.995L13 4h6a2 2 0 0 1 1.995 1.85L21 6v6a2 2 0 0 1-1.85 1.995L19 14h-2.207a5.5 5.5 0 1 1-10.66.29l.074-.29H3.425a1.25 1.25 0 0 1-1.147-1.747l.054-.11zM11.5 12a3.5 3.5 0 1 0 0 7a3.5 3.5 0 0 0 0-7M19 6h-6v4.207A5.5 5.5 0 0 1 15.743 12H19zM8 6.06L4.7 12h2.557a5.5 5.5 0 0 1 2.735-1.79l.274-.071z"></svg:path></svg:g>`,
})
export class MingcutePolygonLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcutePotFillIcon],svg[mingcute-pot-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M5.902 7.438a1 1 0 0 0-.498.926L5.47 9.48a1 1 0 0 0 .28.635l.867.898l-2.788-.4a1 1 0 0 0-1.108.731l-.183.683a1 1 0 0 0 .415 1.093l6.912 4.564l.804 1.782a2 2 0 0 0 2.823.91l5.902-3.408a2 2 0 0 0 .65-2.862l-1.702-2.486a4.502 4.502 0 0 0-4.994-7.294l-.06-.087a1 1 0 0 0-1.325-.301l-6.062 3.5Zm8.615-1.407l2.658 3.883a2.5 2.5 0 0 0-2.658-3.883M8.325 14.27l-.479-1.06l-1.44-.207z"></svg:path></svg:g>`,
})
export class MingcutePotFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcutePotLineIcon],svg[mingcute-pot-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M5.902 7.438a1 1 0 0 0-.498.926l.067 1.116a1 1 0 0 0 .28.635l.868.898l-2.79-.4a1 1 0 0 0-1.107.731l-.183.683a1 1 0 0 0 .415 1.094l6.912 4.563l.804 1.782a2 2 0 0 0 2.823.91l5.902-3.408a2 2 0 0 0 .65-2.862l-1.702-2.486a4.502 4.502 0 0 0-4.994-7.294l-.06-.087a1 1 0 0 0-1.325-.301zm6.26-1.305l6.233 9.103l-5.902 3.408l-1.002-2.22l.029-.044l-.07-.046l-2.636-5.843a1 1 0 0 0-.193-.284L7.445 8.99l-.008-.13l4.725-2.728Zm2.355-.102a2.501 2.501 0 0 1 2.757 3.735l-.099.148zm-6.192 8.24l-1.92-1.268l1.441.206z"></svg:path></svg:g>`,
})
export class MingcutePotLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcutePowerFillIcon],svg[mingcute-power-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M13.5 3a1.5 1.5 0 0 0-3 0v10a1.5 1.5 0 0 0 3 0zM7.854 5.75a1.5 1.5 0 1 0-1.661-2.5A10.49 10.49 0 0 0 1.5 12c0 5.799 4.701 10.5 10.5 10.5S22.5 17.799 22.5 12c0-3.654-1.867-6.87-4.693-8.75a1.5 1.5 0 0 0-1.66 2.5a7.5 7.5 0 1 1-8.292 0Z"></svg:path></svg:g>`,
})
export class MingcutePowerFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcutePowerLineIcon],svg[mingcute-power-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M16.144 3.946a1 1 0 0 1 1.386-.279A9.99 9.99 0 0 1 22 12c0 5.523-4.477 10-10 10S2 17.523 2 12a9.99 9.99 0 0 1 4.47-8.333a1 1 0 1 1 1.107 1.666a8 8 0 1 0 8.846 0a1 1 0 0 1-.28-1.387ZM12 2a1 1 0 0 1 .993.883L13 3v10a1 1 0 0 1-1.993.117L11 13V3a1 1 0 0 1 1-1"></svg:path></svg:g>`,
})
export class MingcutePowerLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcutePptFillIcon],svg[mingcute-ppt-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M12 2v6.5a1.5 1.5 0 0 0 1.5 1.5H20v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm.5 9h-2.4a1.1 1.1 0 0 0-1.094.98L9 12.1V17a1 1 0 0 0 1.993.117L11 17v-1h1.5a2.5 2.5 0 0 0 .164-4.995zm0 2a.5.5 0 0 1 0 1H11v-1zM14 2.043a2 2 0 0 1 1 .543L19.414 7a2 2 0 0 1 .543 1H14z"></svg:path></svg:g>`,
})
export class MingcutePptFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcutePptLineIcon],svg[mingcute-ppt-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M13.586 2a2 2 0 0 1 1.284.467l.13.119L19.414 7a2 2 0 0 1 .578 1.238l.008.176V20a2 2 0 0 1-1.85 1.995L18 22H6a2 2 0 0 1-1.995-1.85L4 20V4a2 2 0 0 1 1.85-1.995L6 2zM12 4H6v16h12V10h-4.5a1.5 1.5 0 0 1-1.493-1.356L12 8.5zm.5 7a2.5 2.5 0 0 1 0 5H11v1a1 1 0 1 1-2 0v-4.9a1.1 1.1 0 0 1 1.1-1.1zm0 2H11v1h1.5a.5.5 0 0 0 .09-.992zM14 4.414V8h3.586z"></svg:path></svg:g>`,
})
export class MingcutePptLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcutePrayFillIcon],svg[mingcute-pray-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M8.843 4.687A2.1 2.1 0 0 1 12 3.31a2.1 2.1 0 0 1 3.157 1.377l1.451 7.255a2 2 0 0 0 1.476 1.548l1.696.424a1.5 1.5 0 0 1 1.107 1.75l-.694 3.469a2 2 0 0 1-2.51 1.53l-3.057-.873A5 5 0 0 1 12 17.983a5 5 0 0 1-2.626 1.807l-3.057.874a2 2 0 0 1-2.51-1.531l-.694-3.47a1.5 1.5 0 0 1 1.107-1.749l1.696-.424a2 2 0 0 0 1.476-1.548zm-2.65 10.795l-1.025.257l.6 3.002l1.081-.31zm11.613 0l-.655 2.95l1.081.309l.6-3.002z"></svg:path></svg:g>`,
})
export class MingcutePrayFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcutePrayLineIcon],svg[mingcute-pray-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M13.099 3a2.1 2.1 0 0 1 2.02 1.526l.038.161l1.451 7.255a2 2 0 0 0 1.318 1.502l.158.046l1.696.424a1.5 1.5 0 0 1 1.128 1.611l-.021.139l-.694 3.469A2 2 0 0 1 17.83 20.7l-.146-.036l-3.057-.874A5 5 0 0 1 12 17.983a5 5 0 0 1-2.38 1.73l-.246.077l-3.057.874a2 2 0 0 1-2.475-1.384l-.035-.147l-.694-3.47a1.5 1.5 0 0 1 .973-1.709l.134-.04l1.696-.424a2 2 0 0 0 1.437-1.388l.039-.16l1.45-7.255A2.1 2.1 0 0 1 12 3.31c.32-.196.696-.31 1.099-.31m4.707 12.482l-.655 2.95l1.081.309l.6-3.002zm-11.612 0l-1.026.257l.6 3.002l1.081-.31zM13.099 5a.1.1 0 0 0-.099.099v9.884a3 3 0 0 0 2.003 2.83l.221.068l.734-3.301a4 4 0 0 1-1.311-2.245l-1.45-7.255a.1.1 0 0 0-.098-.08m-2.198 0a.1.1 0 0 0-.097.08l-1.451 7.255a4 4 0 0 1-1.31 2.245l.733 3.301l.048-.014A3 3 0 0 0 11 14.983V5.099A.1.1 0 0 0 10.9 5Z"></svg:path></svg:g>`,
})
export class MingcutePrayLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcutePrescriptionFillIcon],svg[mingcute-prescription-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M8.379 12.5H7.5V17a1.5 1.5 0 0 1-3 0V5A2.5 2.5 0 0 1 7 2.5h4.5a5 5 0 0 1 1.018 9.896L15 14.88l1.94-1.94a1.5 1.5 0 0 1 2.12 2.122L17.122 17l1.94 1.94a1.5 1.5 0 0 1-2.122 2.12L15 19.122l-1.94 1.94a1.5 1.5 0 0 1-2.12-2.122L12.878 17zm-.879-3v-4h4a2 2 0 1 1 0 4z"></svg:path></svg:g>`,
})
export class MingcutePrescriptionFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcutePrescriptionLineIcon],svg[mingcute-prescription-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M5 5a2 2 0 0 1 2-2h4.5a4.5 4.5 0 1 1 0 9h-.086L15 15.586l2.293-2.293a1 1 0 0 1 1.414 1.414L16.414 17l2.293 2.293a1 1 0 0 1-1.414 1.414L15 18.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L13.586 17l-5-5H7v5a1 1 0 1 1-2 0zm2 5h4.5a2.5 2.5 0 0 0 0-5H7z"></svg:path></svg:g>`,
})
export class MingcutePrescriptionLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcutePresentation1FillIcon],svg[mingcute-presentation-1-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M21 3a1 1 0 1 1 0 2v11a2 2 0 0 1-2 2h-5.055l2.293 2.293a1 1 0 0 1-1.414 1.414l-2.828-2.828l-2.829 2.828a1 1 0 0 1-1.414-1.414L10.046 18H5a2 2 0 0 1-2-2V5a1 1 0 0 1 0-2zm-5 4a1 1 0 0 0-.993.883L15 8v5a1 1 0 0 0 1.993.117L17 13V8a1 1 0 0 0-1-1m-4 2a1 1 0 0 0-1 1v3a1 1 0 1 0 2 0v-3a1 1 0 0 0-1-1m-4 2a1 1 0 0 0-1 1v1a1 1 0 1 0 2 0v-1a1 1 0 0 0-1-1"></svg:path></svg:g>`,
})
export class MingcutePresentation1FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcutePresentation1LineIcon],svg[mingcute-presentation-1-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M21 3a1 1 0 1 1 0 2v11a2 2 0 0 1-2 2h-5.055l2.293 2.293a1 1 0 0 1-1.414 1.414l-2.828-2.828l-2.829 2.828a1 1 0 0 1-1.414-1.414L10.046 18H5a2 2 0 0 1-2-2V5a1 1 0 0 1 0-2zm-2 2H5v11h14zM8 11a1 1 0 0 1 .993.883L9 12v1a1 1 0 0 1-1.993.117L7 13v-1a1 1 0 0 1 1-1m4-2a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0v-3a1 1 0 0 1 1-1m4-2a1 1 0 0 1 .993.883L17 8v5a1 1 0 0 1-1.993.117L15 13V8a1 1 0 0 1 1-1"></svg:path></svg:g>`,
})
export class MingcutePresentation1LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcutePresentation2FillIcon],svg[mingcute-presentation-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M2 4a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2v11a2 2 0 0 1-2 2h-5.055l2.293 2.293a1 1 0 0 1-1.414 1.414l-2.828-2.828l-2.829 2.828a1 1 0 0 1-1.414-1.414L10.046 18H5a2 2 0 0 1-2-2V5a1 1 0 0 1-1-1m14.243 3.172a1 1 0 0 1 1.414 1.414l-4.236 4.236a1.01 1.01 0 0 1-1.428 0L9.88 10.709l-2.121 2.12a1 1 0 0 1-1.415-1.413l2.822-2.822a1.01 1.01 0 0 1 1.428 0l2.113 2.113z"></svg:path></svg:g>`,
})
export class MingcutePresentation2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcutePresentation2LineIcon],svg[mingcute-presentation-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M21 3a1 1 0 1 1 0 2v11a2 2 0 0 1-2 2h-5.055l2.293 2.293a1 1 0 0 1-1.414 1.414l-2.828-2.828l-2.829 2.828a1 1 0 0 1-1.414-1.414L10.046 18H5a2 2 0 0 1-2-2V5a1 1 0 0 1 0-2Zm-2 2H5v11h14zm-1.343 2.172a1 1 0 0 1 0 1.414l-4.236 4.236a1.01 1.01 0 0 1-1.428 0L9.88 10.708L7.759 12.83a1 1 0 0 1-1.415-1.415l2.822-2.82a1.01 1.01 0 0 1 1.428 0l2.113 2.112l3.536-3.535a1 1 0 0 1 1.414 0"></svg:path></svg:g>`,
})
export class MingcutePresentation2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcutePresentation3FillIcon],svg[mingcute-presentation-3-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M7 2a3 3 0 0 0-3 3v7a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3zm2.5 16h5l2.7 3.6a1 1 0 0 0 1.6-1.2L17 18h3a1 1 0 0 0 0-2H4a1 1 0 1 0 0 2h3l-1.8 2.4a1 1 0 0 0 1.6 1.2z"></svg:path></svg:g>`,
})
export class MingcutePresentation3FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcutePresentation3LineIcon],svg[mingcute-presentation-3-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M4 5a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v7a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3zm3-1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1zm0 14l-1.8 2.4a1 1 0 0 0 1.6 1.2L9.5 18h5l2.7 3.6a1 1 0 0 0 1.6-1.2L17 18h3a1 1 0 1 0 0-2H4a1 1 0 1 0 0 2z"></svg:path></svg:g>`,
})
export class MingcutePresentation3LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcutePrintFillIcon],svg[mingcute-print-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M16 16a1 1 0 0 1 .993.883L17 17v4a1 1 0 0 1-.883.993L16 22H8a1 1 0 0 1-.993-.883L7 21v-4a1 1 0 0 1 .883-.993L8 16zm3-9a3 3 0 0 1 3 3v7a2 2 0 0 1-2 2h-1v-3a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v3H4a2 2 0 0 1-2-2v-7a3 3 0 0 1 3-3zm-2 2h-2a1 1 0 0 0-.117 1.993L15 11h2a1 1 0 0 0 .117-1.993zm0-7a1 1 0 0 1 1 1v2H6V3a1 1 0 0 1 1-1z"></svg:path></svg:g>`,
})
export class MingcutePrintFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcutePrintLineIcon],svg[mingcute-print-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M16.9 3a1.1 1.1 0 0 1 1.094.98L18 4.1V7h1a3 3 0 0 1 2.995 2.824L22 10v7a2 2 0 0 1-1.85 1.995L20 19h-2v1.9a1.1 1.1 0 0 1-.98 1.094L16.9 22H7.1a1.1 1.1 0 0 1-1.094-.98L6 20.9V19H4a2 2 0 0 1-1.995-1.85L2 17v-7a3 3 0 0 1 2.824-2.995L5 7h1V4.1a1.1 1.1 0 0 1 .98-1.094L7.1 3zM16 16H8v4h8zm3-7H5a1 1 0 0 0-.993.883L4 10v7h2v-1.9a1.1 1.1 0 0 1 .98-1.094L7.1 14h9.8a1.1 1.1 0 0 1 1.094.98l.006.12V17h2v-7a1 1 0 0 0-1-1m-2 1a1 1 0 0 1 .117 1.993L17 12h-2a1 1 0 0 1-.117-1.993L15 10zm-1-5H8v2h8z"></svg:path></svg:g>`,
})
export class MingcutePrintLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteProcessFillIcon],svg[mingcute-process-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M5 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-6h6a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm7 9V5H5v7z"></svg:path></svg:g>`,
})
export class MingcuteProcessFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteProcessLineIcon],svg[mingcute-process-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M5 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-6h6a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm8 8h6V5h-6zm-8 2v6h6v-6zm0-2h6V5H5z"></svg:path></svg:g>`,
})
export class MingcuteProcessLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteProfileFillIcon],svg[mingcute-profile-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M20 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-3 12H7a1 1 0 1 0 0 2h10a1 1 0 1 0 0-2m-7-8H8a2 2 0 0 0-1.995 1.85L6 9v2a2 2 0 0 0 1.85 1.995L8 13h2a2 2 0 0 0 1.995-1.85L12 11V9a2 2 0 0 0-1.85-1.995zm7 4h-3a1 1 0 0 0-.117 1.993L14 13h3a1 1 0 0 0 .117-1.993zm-7-2v2H8V9zm7-2h-3a1 1 0 1 0 0 2h3a1 1 0 1 0 0-2"></svg:path></svg:g>`,
})
export class MingcuteProfileFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteProfileLineIcon],svg[mingcute-profile-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M20 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm0 2H4v14h16zm-3 10a1 1 0 0 1 .117 1.993L17 17H7a1 1 0 0 1-.117-1.993L7 15zm-7-8a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2zm7 4a1 1 0 1 1 0 2h-3a1 1 0 1 1 0-2zm-7-2H8v2h2zm7-2a1 1 0 0 1 .117 1.993L17 9h-3a1 1 0 0 1-.117-1.993L14 7z"></svg:path></svg:g>`,
})
export class MingcuteProfileLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteProjectorFillIcon],svg[mingcute-projector-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M15 4a1 1 0 1 1 0 2h-2v2h6a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-6a3 3 0 0 1 3-3h6V6H9a1 1 0 0 1 0-2zm1 7a3 3 0 1 0 0 6a3 3 0 0 0 0-6m0 2a1 1 0 1 1 0 2a1 1 0 0 1 0-2m-8-1H5a1 1 0 0 0-.117 1.993L5 14h3a1 1 0 0 0 .117-1.993z"></svg:path></svg:g>`,
})
export class MingcuteProjectorFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteProjectorLineIcon],svg[mingcute-projector-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M15 4a1 1 0 1 1 0 2h-2v2h6a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-6a3 3 0 0 1 3-3h6V6H9a1 1 0 0 1 0-2zm4 6H5a1 1 0 0 0-1 1v1h3a1 1 0 1 1 0 2H4v3a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1m-3 1a3 3 0 1 1 0 6a3 3 0 0 1 0-6m0 2a1 1 0 1 0 0 2a1 1 0 0 0 0-2"></svg:path></svg:g>`,
})
export class MingcuteProjectorLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteProjectorScreenFillIcon],svg[mingcute-projector-screen-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M20 2a1 1 0 0 1 .993.883L21 3v3a1 1 0 0 1-.883.993L20 7h-1v7h1a1 1 0 0 1 .117 1.993L20 16h-7v1.208a2.5 2.5 0 1 1-2.153.073l.153-.073V16H4a1 1 0 0 1-.117-1.993L4 14h1V7H4a1 1 0 0 1-.993-.883L3 6V3a1 1 0 0 1 .883-.993L4 2zm-8 17a.5.5 0 1 0 0 1a.5.5 0 0 0 0-1m7-15H5v1h14z"></svg:path></svg:g>`,
})
export class MingcuteProjectorScreenFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteProjectorScreenLineIcon],svg[mingcute-projector-screen-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M20 2a1 1 0 0 1 .993.883L21 3v3a1 1 0 0 1-.883.993L20 7h-1v7h1a1 1 0 0 1 .117 1.993L20 16h-7v1.208a2.5 2.5 0 1 1-2.153.073l.153-.073V16H4a1 1 0 0 1-.117-1.993L4 14h1V7H4a1 1 0 0 1-.993-.883L3 6V3a1 1 0 0 1 .883-.993L4 2zm-8 17a.5.5 0 1 0 0 1a.5.5 0 0 0 0-1m5-12H7v7h10zm2-3H5v1h14z"></svg:path></svg:g>`,
})
export class MingcuteProjectorScreenLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcutePumpkinFillIcon],svg[mingcute-pumpkin-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M13.196 5.22c.074-.187.17-.386.287-.58c.152-.254.307-.443.438-.556a.6.6 0 0 1 .118-.085A1 1 0 0 0 14 2c-.586 0-1.061.288-1.39.572c-.337.294-.62.667-.842 1.039c-.27.449-.504.984-.64 1.504c-.599.16-1.137.48-1.606.898c-.998-.723-2.176-1.11-3.411-.891c-1.673.294-2.865 1.59-3.526 3.17c-.667 1.59-.865 3.6-.501 5.663c.363 2.064 1.237 3.884 2.407 5.15c1.162 1.258 2.726 2.068 4.398 1.773a4 4 0 0 0 1.235-.437A3.5 3.5 0 0 0 12 21c.688 0 1.32-.21 1.877-.559c.379.21.792.36 1.234.437c1.672.295 3.236-.515 4.398-1.772c1.17-1.267 2.043-3.087 2.407-5.151s.166-4.073-.5-5.664c-.662-1.579-1.854-2.875-3.527-3.17c-1.235-.217-2.413.169-3.411.892a4.1 4.1 0 0 0-1.282-.794ZM9.704 7.135a1 1 0 0 1 .36 1.368C9.428 9.594 9 11.184 9 13c0 2.056.548 3.81 1.314 4.884a1 1 0 1 1-1.628 1.161C7.623 17.554 7 15.365 7 13c0-2.102.491-4.054 1.337-5.504a1 1 0 0 1 1.367-.36Zm4.592 0a1 1 0 0 1 1.367.36C16.51 8.946 17 10.898 17 13c0 2.365-.623 4.554-1.686 6.045a1 1 0 1 1-1.628-1.16C14.452 16.81 15 15.055 15 13c0-1.816-.428-3.405-1.064-4.496a1 1 0 0 1 .36-1.368Z"></svg:path></svg:g>`,
})
export class MingcutePumpkinFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcutePumpkinLanternFillIcon],svg[mingcute-pumpkin-lantern-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M13.483 4.64a4 4 0 0 0-.264.523c.532.144 1.033.38 1.493.688c.945-.616 2.038-.93 3.177-.73c1.673.295 2.865 1.591 3.527 3.17c.666 1.591.864 3.6.5 5.664s-1.237 3.884-2.407 5.15c-1.162 1.258-2.726 2.068-4.398 1.773a4 4 0 0 1-1.065-.349A4.7 4.7 0 0 1 12 21c-.726 0-1.415-.17-2.045-.47a4 4 0 0 1-1.066.348c-1.672.295-3.236-.515-4.398-1.772c-1.17-1.267-2.044-3.087-2.407-5.15c-.364-2.065-.166-4.074.5-5.664c.662-1.58 1.854-2.876 3.527-3.17c1.139-.201 2.232.113 3.177.73a5 5 0 0 1 1.848-.77c.138-.51.368-1.032.632-1.471c.222-.372.505-.745.843-1.039C12.939 2.288 13.414 2 14 2a1 1 0 0 1 .039 2c-.245.12-.423.417-.556.64M8.5 12.598a1 1 0 0 1-1.366-.366l-1-1.732a1 1 0 0 1 1.125-1.466l2.732.732a1 1 0 0 1 .241 1.832zm8.366-.366a1 1 0 0 1-1.366.366l-1.732-1a1 1 0 0 1 .241-1.832l2.732-.732a1 1 0 0 1 1.125 1.466zm-7.317 3.68a.515.515 0 0 0 .673-.048a2.515 2.515 0 0 1 3.556 0a.515.515 0 0 0 .673.048l.95-.712a1 1 0 0 1 1.2 1.6l-.95.712a2.515 2.515 0 0 1-3.287-.234a.515.515 0 0 0-.728 0a2.515 2.515 0 0 1-3.287.234L7.4 16.8a1 1 0 1 1 1.2-1.6z"></svg:path></svg:g>`,
})
export class MingcutePumpkinLanternFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcutePumpkinLanternLineIcon],svg[mingcute-pumpkin-lantern-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M14 2a1 1 0 0 1 .039 2c-.163.08-.297.239-.407.401l-.15.239a4 4 0 0 0-.263.523c.532.144 1.033.38 1.493.688c.945-.616 2.038-.93 3.177-.73c1.673.295 2.865 1.591 3.527 3.17c.666 1.591.864 3.6.5 5.664s-1.237 3.884-2.407 5.15c-1.162 1.258-2.726 2.068-4.398 1.773a4 4 0 0 1-1.065-.349A4.7 4.7 0 0 1 12 21c-.726 0-1.415-.17-2.045-.47a4 4 0 0 1-1.066.348c-1.672.295-3.236-.515-4.398-1.772c-1.17-1.267-2.044-3.087-2.407-5.15c-.364-2.065-.166-4.074.5-5.664c.662-1.58 1.854-2.876 3.527-3.17c1.139-.201 2.232.113 3.177.73a5 5 0 0 1 1.848-.77c.138-.51.368-1.032.632-1.471c.222-.372.504-.745.843-1.039C12.939 2.288 13.414 2 14 2m-2 5c-.708 0-1.405.287-2.033.852a1 1 0 0 1-1.325.013c-.763-.662-1.523-.89-2.184-.774c-.775.137-1.527.775-2.029 1.973c-.497 1.188-.683 2.8-.376 4.544s1.034 3.195 1.907 4.14c.882.955 1.807 1.297 2.582 1.16q.435-.075.823-.348a1 1 0 0 1 1.11-.025c.484.308.999.465 1.525.465c.527 0 1.04-.157 1.525-.465a1 1 0 0 1 1.11.025q.389.273.823.349c.775.137 1.7-.206 2.582-1.16c.873-.946 1.6-2.398 1.907-4.141c.307-1.744.121-3.357-.376-4.544c-.503-1.198-1.254-1.836-2.03-1.973c-.66-.117-1.42.112-2.183.774a1 1 0 0 1-1.325-.013C13.405 7.287 12.708 7 12 7m4.8 7.4a1 1 0 0 1-.2 1.4l-.95.712a2.515 2.515 0 0 1-3.286-.234a.515.515 0 0 0-.728 0a2.515 2.515 0 0 1-3.287.234L7.4 15.8a1 1 0 1 1 1.2-1.6l.949.712a.515.515 0 0 0 .673-.048a2.515 2.515 0 0 1 3.556 0a.515.515 0 0 0 .673.048l.949-.712a1 1 0 0 1 1.4.2M7.259 9.034l2.732.732a1 1 0 0 1 .241 1.832l-1.732 1a1 1 0 0 1-1.366-.366l-1-1.732a1 1 0 0 1 1.125-1.466m10.534.357a1 1 0 0 1 .073 1.11l-1 1.731a1 1 0 0 1-1.366.366l-1.732-1a1 1 0 0 1 .241-1.832l2.732-.732a1 1 0 0 1 1.052.357"></svg:path></svg:g>`,
})
export class MingcutePumpkinLanternLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcutePumpkinLineIcon],svg[mingcute-pumpkin-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M14 2a1 1 0 0 1 .039 2l-.043.025l-.075.059a2.4 2.4 0 0 0-.439.556a4 4 0 0 0-.286.58c.313.117.607.278.882.473q.207.146.4.32c.998-.723 2.176-1.11 3.411-.891c1.673.294 2.865 1.59 3.527 3.17c.666 1.59.864 3.6.5 5.663s-1.237 3.884-2.407 5.15c-1.162 1.258-2.726 2.068-4.398 1.773a4 4 0 0 1-1.235-.437A3.5 3.5 0 0 1 12 21c-.688 0-1.32-.21-1.876-.559c-.38.21-.793.36-1.235.437c-1.672.295-3.236-.515-4.398-1.772c-1.17-1.267-2.044-3.087-2.407-5.15c-.364-2.065-.166-4.074.5-5.664c.662-1.58 1.854-2.876 3.527-3.17c1.235-.218 2.413.168 3.41.89q.195-.172.4-.32c.369-.26.772-.46 1.206-.577c.137-.52.371-1.055.64-1.505a4.4 4.4 0 0 1 .844-1.038C12.939 2.288 13.414 2 14 2m-2 5c-.285 0-.599.097-.922.325c-.524.371-1.05 1.071-1.447 2.082C9.24 10.407 9 11.644 9 13s.24 2.594.631 3.593c.397 1.01.923 1.71 1.447 2.082c.322.229.633.325.922.325s.6-.096.922-.325c.524-.371 1.05-1.071 1.447-2.082c.392-1 .631-2.237.631-3.593s-.24-2.594-.631-3.593c-.397-1.01-.923-1.711-1.447-2.082C12.6 7.096 12.285 7 12 7m-5.542.091c-.775.137-1.527.775-2.029 1.973c-.497 1.188-.683 2.8-.376 4.544s1.034 3.195 1.907 4.14c.827.896 1.691 1.252 2.435 1.18l.19-.027a8 8 0 0 1-.816-1.578C7.278 16.07 7 14.582 7 13s.278-3.07.77-4.323a9 9 0 0 1 .515-1.091c-.64-.445-1.27-.593-1.827-.495m9.256.495c.195.343.367.71.517 1.09C16.722 9.93 17 11.419 17 13c0 1.582-.278 3.07-.77 4.323a8.2 8.2 0 0 1-.816 1.578l.044.008c.775.137 1.7-.206 2.582-1.16c.873-.946 1.6-2.398 1.907-4.141c.307-1.744.121-3.357-.376-4.544c-.503-1.198-1.254-1.836-2.03-1.973c-.556-.098-1.187.05-1.827.495"></svg:path></svg:g>`,
})
export class MingcutePumpkinLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcutePuzzledFillIcon],svg[mingcute-puzzled-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M12 2c1.89 0 3.657.524 5.165 1.435A3.5 3.5 0 0 0 17 4.5a2 2 0 0 0 1.644 1.968l-.003.11c0 .346.1.751.356 1.103a2 2 0 0 0 2.884 2.766q.118.76.119 1.553c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2m2.684 10.551c-.508.17-1.036.396-1.576.666q-.415.208-.801.428l-.377.22c-.223.134-.389.24-.485.303a1 1 0 1 0 1.11 1.664l.294-.186l.11-.066c.327-.196.68-.392 1.044-.574c.46-.23.904-.42 1.313-.557a1 1 0 1 0-.632-1.898M9.5 9a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3m5-2a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3m6 1a1 1 0 1 1 0 2a1 1 0 0 1 0-2m0-6a2.5 2.5 0 0 1 1.546 4.464l-.568.47c-.327.262-.666.488-.978.488c-.625 0-.86-.49-.86-.844s.211-.734.385-.948c.254-.313.565-.564.784-.737A.5.5 0 1 0 20 4.5a1 1 0 1 1-2 0A2.5 2.5 0 0 1 20.5 2"></svg:path></svg:g>`,
})
export class MingcutePuzzledFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcutePuzzledLineIcon],svg[mingcute-puzzled-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M12 2c.762 0 1.506.085 2.221.248a1 1 0 1 1-.442 1.95a8 8 0 1 0 6.023 9.58a1 1 0 1 1 1.95.443C20.742 18.675 16.76 22 12 22C6.477 22 2 17.523 2 12S6.477 2 12 2m3.949 11.184a1 1 0 0 1-.633 1.265c-.409.136-.853.326-1.313.557q-.365.183-.71.378l-.334.196c-.194.116-.333.205-.404.252a1 1 0 0 1-1.11-1.664l.358-.226l.127-.077c.368-.22.765-.441 1.178-.648c.54-.27 1.068-.496 1.576-.666a1 1 0 0 1 1.265.633M9.5 9a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3m5-2a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3m5 1a1 1 0 1 1 0 2a1 1 0 0 1 0-2m0-6a2.5 2.5 0 0 1 1.546 4.464l-.568.47c-.327.262-.666.488-.978.488c-.625 0-.86-.49-.86-.844s.211-.734.385-.948c.254-.313.565-.564.784-.737A.5.5 0 1 0 19 4.5a1 1 0 1 1-2 0A2.5 2.5 0 0 1 19.5 2"></svg:path></svg:g>`,
})
export class MingcutePuzzledLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteQqFillIcon],svg[mingcute-qq-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M12 2a6.285 6.285 0 0 0-6.276 5.937l-.146 2.63a28 28 0 0 0-.615 1.41c-1.24 3.073-1.728 5.773-1.088 6.032c.335.135.913-.426 1.566-1.432a6.67 6.67 0 0 0 1.968 3.593c-1.027.35-1.91.828-1.91 1.33c0 .509 2.48.503 4.239.5h.001c.549-.002 1.01-.008 1.38-.057a6.7 6.7 0 0 0 1.76 0c.37.05.833.055 1.382.056c1.76.004 4.239.01 4.239-.499c0-.502-.883-.979-1.909-1.33a6.67 6.67 0 0 0 1.967-3.586c.65 1.002 1.227 1.56 1.56 1.425c.64-.259.154-2.96-1.088-6.032a28 28 0 0 0-.607-1.395l-.147-2.645A6.285 6.285 0 0 0 12 2"></svg:path></svg:g>`,
})
export class MingcuteQqFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteQqLineIcon],svg[mingcute-qq-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M5.567 10.592c.075-.883.108-1.77.157-2.655a6.286 6.286 0 0 1 12.552 0c.05.91.09 1.818.184 2.724q.292.627.57 1.316c1.242 3.073 1.73 5.773 1.09 6.032c-.336.135-.914-.425-1.566-1.431a5 5 0 0 1-.067.322a6.7 6.7 0 0 1-1.899 3.27c1.028.35 1.912.827 1.912 1.33c0 .509-2.48.503-4.238.5c-.549-.002-1.012-.008-1.382-.058a6.7 6.7 0 0 1-1.76 0c-.37.05-.832.056-1.382.057c-1.758.004-4.238.01-4.238-.499c0-.503.884-.98 1.912-1.33a6.7 6.7 0 0 1-1.899-3.27a7 7 0 0 1-.077-.316c-.65 1.002-1.227 1.56-1.561 1.425c-.64-.259-.153-2.96 1.089-6.032c.195-.483.398-.948.603-1.385M7.72 8.048a4.286 4.286 0 0 1 8.558 0L16.443 11h.002c0 1.079.526 1.973.992 2.906a1.146 1.146 0 0 0-.769 1.15A4.68 4.68 0 0 1 12 20c-2.682 0-4.817-2.262-4.668-4.944c.033-.602-.375-1-.745-1.142c-.047-.018.969-1.903.969-2.914h.001l.164-2.952Z"></svg:path></svg:g>`,
})
export class MingcuteQqLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteQrcode2FillIcon],svg[mingcute-qrcode-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M11 3a2 2 0 0 1 1.995 1.85L13 5v6a2 2 0 0 1-1.85 1.995L11 13H5a2 2 0 0 1-1.995-1.85L3 11V5a2 2 0 0 1 1.85-1.995L5 3zm0 2H5v6h6zM9.5 6a.5.5 0 0 1 .492.41L10 6.5v3a.5.5 0 0 1-.41.492L9.5 10h-3a.5.5 0 0 1-.492-.41L6 9.5v-3a.5.5 0 0 1 .41-.492L6.5 6zM21 5a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2zM3 17a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zm16-2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2zm-4-3a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1m-2 4a1 1 0 1 0-2 0v4a1 1 0 1 0 2 0z"></svg:path></svg:g>`,
})
export class MingcuteQrcode2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteQrcode2LineIcon],svg[mingcute-qrcode-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M11 3a2 2 0 0 1 1.995 1.85L13 5v6a2 2 0 0 1-1.85 1.995L11 13H5a2 2 0 0 1-1.995-1.85L3 11V5a2 2 0 0 1 1.85-1.995L5 3zm0 2H5v6h6zM8.5 7a.5.5 0 0 1 .492.41L9 7.5v1a.5.5 0 0 1-.41.492L8.5 9h-1a.5.5 0 0 1-.492-.41L7 8.5v-1a.5.5 0 0 1 .41-.492L7.5 7zM21 5a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2zm-4 0h2v2h-2zM7 15a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2zm0 2H5v2h2zm14 0a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2zm-4 0h2v2h-2zm-2-5a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1m-2 4a1 1 0 1 0-2 0v4a1 1 0 1 0 2 0z"></svg:path></svg:g>`,
})
export class MingcuteQrcode2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteQrcodeFillIcon],svg[mingcute-qrcode-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M14 13a1 1 0 0 1 .993.883L15 14v6a1 1 0 0 1-1.993.117L13 20v-6a1 1 0 0 1 1-1m3 4.5a1 1 0 0 1 1 1V20a1 1 0 1 1-2 0v-1.5a1 1 0 0 1 1-1m3-4.5a1 1 0 0 1 .993.883L21 14v6a1 1 0 0 1-1.993.117L19 20v-6a1 1 0 0 1 1-1M9 13a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2zm8 0a1 1 0 0 1 .993.883L18 14v1.5a1 1 0 0 1-1.993.117L16 15.5V14a1 1 0 0 1 1-1M9 3a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm10 0a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"></svg:path></svg:g>`,
})
export class MingcuteQrcodeFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteQrcodeLineIcon],svg[mingcute-qrcode-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M14 13a1 1 0 0 1 .993.883L15 14v6a1 1 0 0 1-1.993.117L13 20v-6a1 1 0 0 1 1-1m3 4.5a1 1 0 0 1 1 1V20a1 1 0 1 1-2 0v-1.5a1 1 0 0 1 1-1m3-4.5a1 1 0 0 1 .993.883L21 14v6a1 1 0 0 1-1.993.117L19 20v-6a1 1 0 0 1 1-1M9 13a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2zm0 2H5v4h4zm8-2a1 1 0 0 1 .993.883L18 14v1.5a1 1 0 0 1-1.993.117L16 15.5V14a1 1 0 0 1 1-1M9 3a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm10 0a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zM9 5H5v4h4zm10 0h-4v4h4z"></svg:path></svg:g>`,
})
export class MingcuteQrcodeLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteQuestionFillIcon],svg[mingcute-question-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2m0 14a1 1 0 1 0 0 2a1 1 0 0 0 0-2m0-9.5a3.625 3.625 0 0 0-3.625 3.625a1 1 0 1 0 2 0a1.625 1.625 0 1 1 2.23 1.51c-.676.27-1.605.962-1.605 2.115V14a1 1 0 1 0 2 0c0-.244.05-.366.261-.47l.087-.04A3.626 3.626 0 0 0 12 6.5"></svg:path></svg:g>`,
})
export class MingcuteQuestionFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteQuestionLineIcon],svg[mingcute-question-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2m0 2a8 8 0 1 0 0 16a8 8 0 0 0 0-16m0 12a1 1 0 1 1 0 2a1 1 0 0 1 0-2m0-9.5a3.625 3.625 0 0 1 1.348 6.99a.8.8 0 0 0-.305.201c-.044.05-.051.114-.05.18L13 14a1 1 0 0 1-1.993.117L11 14v-.25c0-1.153.93-1.845 1.604-2.116a1.626 1.626 0 1 0-2.229-1.509a1 1 0 1 1-2 0A3.625 3.625 0 0 1 12 6.5"></svg:path></svg:g>`,
})
export class MingcuteQuestionLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteQuillPenAiFillIcon],svg[mingcute-quill-pen-ai-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M20.262 2.434a1 1 0 0 1 .944.454c.991 1.49.747 3.71-.467 5.007a1 1 0 0 1-.03.37a16 16 0 0 1-.75 2.135c-.551 1.263-1.328 2.54-2.423 3.636c-2.05 2.05-4.742 2.991-6.844 3.43a19 19 0 0 1-1.491.25l-.52.06l-.466.041q-.219.016-.406.027l-.101.83l-.064.593l-.027.29L7.5 21c-.047.54-.448 1-1 1a1 1 0 0 1-1-1c0-.156.009-.35.023-.57l.037-.467l.048-.505l.085-.77l.028-.248c.205-1.732.446-3.427.987-5.09c.625-1.92 1.75-4.379 3.756-6.386c1.574-1.573 3.433-2.61 5.107-3.29l.452-.176l.44-.16q.108-.038.215-.073l.42-.136l.402-.12l.568-.155l.519-.126l.315-.069l.546-.105l.577-.091zM5 1a1 1 0 0 1 .898.56l.048.117l.13.378a3 3 0 0 0 1.684 1.8l.185.07l.378.129a1 1 0 0 1 .117 1.844l-.117.048l-.378.13a3 3 0 0 0-1.8 1.684l-.07.185l-.129.378a1 1 0 0 1-1.844.117l-.048-.117l-.13-.378a3 3 0 0 0-1.684-1.8l-.185-.07l-.378-.129a1 1 0 0 1-.117-1.844l.117-.048l.378-.13a3 3 0 0 0 1.8-1.684l.07-.185l.129-.378A1 1 0 0 1 5 1"></svg:path></svg:g>`,
})
export class MingcuteQuillPenAiFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteQuillPenAiLineIcon],svg[mingcute-quill-pen-ai-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M20.262 2.434a1 1 0 0 1 .944.454l.078.126l.109.202l.081.174l.083.205c.315.838.552 2.297-.542 3.956a2.6 2.6 0 0 1-.276.345a1 1 0 0 1-.03.368a16 16 0 0 1-.75 2.136c-.551 1.263-1.328 2.54-2.423 3.636c-2.05 2.05-4.742 2.991-6.844 3.43c-.825.173-1.576.271-2.186.327l-.487.038l-.21.013l-.128 1.063l-.098.906l-.038.412l-.037.518A5 5 0 0 0 7.5 21a1 1 0 1 1-2 0q0-.157.01-.36l.03-.437l.043-.489l.08-.772l.058-.502c.205-1.732.446-3.426.987-5.09c.625-1.92 1.75-4.379 3.757-6.385c1.573-1.574 3.432-2.611 5.106-3.29l.452-.177l.44-.16q.108-.038.215-.073l.42-.136l.402-.12l.384-.107l.363-.093l.34-.08l.315-.07l.546-.105l.577-.091zM19.76 4.53l-.322.062l-.37.079l-.415.098l-.222.058l-.47.13q-.244.072-.501.156l-.527.18c-1.615.584-3.508 1.54-5.054 3.086c-1.704 1.703-2.7 3.84-3.269 5.59c-.165.507-.293.977-.39 1.388l-.104.462l.465-.043a17 17 0 0 0 1.702-.267c1.92-.401 4.179-1.228 5.838-2.888c.85-.849 1.484-1.857 1.954-2.905c-.976.52-2.018.986-2.759 1.233a1 1 0 0 1-.632-1.898c.674-.224 1.758-.713 2.754-1.265c.494-.274.946-.552 1.301-.808l.226-.17l.17-.141l.065-.06l.095-.095l.05-.063c.527-.798.52-1.48.415-1.919M5 1a1 1 0 0 1 .898.56l.048.117l.13.378a3 3 0 0 0 1.684 1.8l.185.07l.378.129a1 1 0 0 1 .117 1.844l-.117.048l-.378.13a3 3 0 0 0-1.8 1.684l-.07.185l-.129.378a1 1 0 0 1-1.844.117l-.048-.117l-.13-.378a3 3 0 0 0-1.684-1.8l-.185-.07l-.378-.129a1 1 0 0 1-.117-1.844l.117-.048l.378-.13a3 3 0 0 0 1.8-1.684l.07-.185l.129-.378A1 1 0 0 1 5 1m0 3.196A5 5 0 0 1 4.196 5q.448.355.804.804q.355-.448.804-.804A5 5 0 0 1 5 4.196"></svg:path></svg:g>`,
})
export class MingcuteQuillPenAiLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteQuillPenFillIcon],svg[mingcute-quill-pen-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M6.81 17.844c-.032.247-.273 2.729-.31 3.156c-.047.54-.448 1-1 1a1 1 0 0 1-1-1c0-.571.116-1.67.221-2.56c.205-1.732.446-3.427.987-5.09c.625-1.92 1.75-4.379 3.757-6.386c3.934-3.934 9.652-4.515 9.797-4.53a1 1 0 0 1 .944.454c.991 1.49.747 3.71-.467 5.007a1 1 0 0 1-.03.37a16 16 0 0 1-.75 2.135c-.551 1.263-1.328 2.54-2.423 3.636c-2.05 2.05-4.742 2.991-6.844 3.43a19.4 19.4 0 0 1-2.883.378Z"></svg:path></svg:g>`,
})
export class MingcuteQuillPenFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteQuillPenLineIcon],svg[mingcute-quill-pen-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M5.708 13.35c.625-1.92 1.75-4.379 3.757-6.386c3.934-3.934 9.652-4.515 9.797-4.53a1 1 0 0 1 .944.454c.208.313 1.38 2.283-.191 4.663a2.6 2.6 0 0 1-.276.344a1 1 0 0 1-.03.37c-.19.689-.434 1.412-.75 2.135c-.551 1.263-1.328 2.54-2.423 3.636c-2.05 2.05-4.742 2.991-6.844 3.43a19.4 19.4 0 0 1-2.883.378C6.778 18.09 6.5 20.57 6.5 21a1 1 0 1 1-2 0c0-.571.116-1.67.221-2.56c.205-1.732.446-3.427.987-5.09m12.637-6.9c.527-.8.52-1.48.415-1.92c-1.527.275-5.219 1.186-7.881 3.849c-1.704 1.703-2.7 3.84-3.269 5.59a18 18 0 0 0-.494 1.85a17 17 0 0 0 2.167-.31c1.92-.402 4.179-1.228 5.838-2.888c.85-.85 1.484-1.857 1.954-2.905c-.976.52-2.018.986-2.759 1.233a1 1 0 1 1-.632-1.898c.674-.225 1.758-.713 2.754-1.265c.494-.274.946-.553 1.301-.808c.384-.276.56-.46.606-.529Z"></svg:path></svg:g>`,
})
export class MingcuteQuillPenLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteQuoteLeftFillIcon],svg[mingcute-quote-left-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M8.4 6.2a1 1 0 0 1 1.2 1.6c-1.564 1.173-2.46 2.314-2.973 3.31A3.5 3.5 0 1 1 4 14.558a7.6 7.6 0 0 1 .508-3.614C5.105 9.438 6.272 7.796 8.4 6.2m9 0a1 1 0 0 1 1.2 1.6c-1.564 1.173-2.46 2.314-2.973 3.31A3.5 3.5 0 1 1 13 14.558a7.6 7.6 0 0 1 .508-3.614c.598-1.506 1.764-3.148 3.892-4.744"></svg:path></svg:g>`,
})
export class MingcuteQuoteLeftFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteQuoteLeftLineIcon],svg[mingcute-quote-left-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M9.8 6.4a1 1 0 0 1-.2 1.4c-1.564 1.173-2.461 2.314-2.973 3.31A3.5 3.5 0 1 1 4 14.558a7.6 7.6 0 0 1 .508-3.614C5.105 9.438 6.272 7.796 8.4 6.2a1 1 0 0 1 1.4.2m7.6-.2a1 1 0 0 1 1.2 1.6c-1.564 1.173-2.461 2.314-2.973 3.31A3.5 3.5 0 1 1 13 14.558a7.6 7.6 0 0 1 .508-3.614c.598-1.506 1.764-3.148 3.892-4.744M7.5 13a1.5 1.5 0 0 0-1.492 1.348L6 14.51A1.5 1.5 0 1 0 7.5 13m9 0a1.5 1.5 0 0 0-1.492 1.348L15 14.51A1.5 1.5 0 1 0 16.5 13"></svg:path></svg:g>`,
})
export class MingcuteQuoteLeftLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteQuoteRightFillIcon],svg[mingcute-quote-right-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M16.5 6A3.5 3.5 0 0 1 20 9.442c.09.865.077 2.141-.508 3.614c-.598 1.506-1.764 3.148-3.892 4.744a1 1 0 1 1-1.2-1.6c1.564-1.173 2.46-2.313 2.973-3.31A3.5 3.5 0 1 1 16.5 6m-9 0A3.5 3.5 0 0 1 11 9.442c.09.865.077 2.141-.508 3.614c-.597 1.506-1.764 3.148-3.892 4.744a1 1 0 1 1-1.2-1.6c1.564-1.173 2.46-2.313 2.973-3.31A3.5 3.5 0 1 1 7.5 6"></svg:path></svg:g>`,
})
export class MingcuteQuoteRightFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteQuoteRightLineIcon],svg[mingcute-quote-right-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M16.5 6A3.5 3.5 0 0 1 20 9.442c.09.865.077 2.14-.508 3.614c-.597 1.506-1.764 3.148-3.892 4.744a1 1 0 0 1-1.2-1.6c1.564-1.173 2.461-2.314 2.973-3.31A3.503 3.503 0 0 1 13 9.5A3.5 3.5 0 0 1 16.5 6m-9 0A3.5 3.5 0 0 1 11 9.442c.09.865.077 2.14-.508 3.614c-.597 1.506-1.764 3.148-3.892 4.744a1 1 0 0 1-1.2-1.6c1.564-1.173 2.461-2.314 2.973-3.31A3.504 3.504 0 0 1 4 9.5A3.5 3.5 0 0 1 7.5 6m9 2a1.5 1.5 0 1 0 1.492 1.652L18 9.49A1.5 1.5 0 0 0 16.5 8m-9 0a1.5 1.5 0 1 0 1.492 1.652L9 9.49A1.5 1.5 0 0 0 7.5 8"></svg:path></svg:g>`,
})
export class MingcuteQuoteRightLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteRabbitFillIcon],svg[mingcute-rabbit-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M12 11.054C12 7.5 11 5 10.074 3.734c-.728-.907-1.765-1.599-2.94-1.284c-1.174.314-1.726 1.432-1.903 2.582c-.182 1.188-.038 2.73.447 4.537a22 22 0 0 0 1.143 3.22C5.728 13.731 5 15.02 5 16.5c0 1.628.882 3.026 2.157 3.982S10.147 22 12 22s3.568-.562 4.843-1.518S19 18.128 19 16.5c0-1.482-.728-2.769-1.82-3.71a22 22 0 0 0 1.142-3.22c.485-1.807.629-3.35.447-4.538c-.177-1.15-.729-2.268-1.903-2.582c-1.175-.315-2.212.377-2.94 1.284C13 5 12 7.5 12 11.054m-1.417 5.94a1.5 1.5 0 1 1 2.834 0L13.5 17a1 1 0 1 1 0 2a2.5 2.5 0 0 1-1.5-.5a2.5 2.5 0 0 1-1.5.5a1 1 0 1 1 0-2l.083-.007Z"></svg:path></svg:g>`,
})
export class MingcuteRabbitFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteRabbitLineIcon],svg[mingcute-rabbit-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M7.652 4.382c.026-.007.323-.068.861.603c.514.641 1.066 1.759 1.511 3.42c.327 1.22.538 2.515.616 3.67a1 1 0 0 0 1.043.932a7 7 0 0 1 .634 0a1 1 0 0 0 1.043-.931c.078-1.156.289-2.452.616-3.671c.445-1.661.997-2.779 1.51-3.42c.54-.671.836-.61.862-.603c.026.006.313.102.444.953c.124.812.044 2.056-.401 3.717a19.7 19.7 0 0 1-1.358 3.599a1 1 0 0 0 .35 1.286C16.448 14.629 17 15.565 17 16.5c0 .857-.461 1.71-1.357 2.382C14.746 19.554 13.46 20 12 20c-1.461 0-2.746-.445-3.643-1.118C7.461 18.21 7 17.357 7 16.5c0-.935.552-1.871 1.617-2.563a1 1 0 0 0 .35-1.286a19.6 19.6 0 0 1-1.358-3.6c-.445-1.66-.525-2.904-.4-3.716c.13-.85.417-.947.443-.953m4.304 3.505c-.484-1.807-1.13-3.215-1.882-4.153c-.728-.907-1.765-1.599-2.94-1.284c-1.174.314-1.726 1.432-1.903 2.582c-.182 1.188-.038 2.73.447 4.537a22 22 0 0 0 1.143 3.22C5.728 13.731 5 15.02 5 16.5c0 1.628.882 3.026 2.157 3.982S10.147 22 12 22s3.568-.562 4.843-1.518S19 18.128 19 16.5c0-1.482-.728-2.769-1.82-3.71a22 22 0 0 0 1.142-3.22c.485-1.807.629-3.35.447-4.538c-.177-1.15-.729-2.268-1.903-2.582c-1.175-.315-2.212.377-2.94 1.284c-.752.938-1.398 2.346-1.882 4.153L12 8.054zm-1.373 9.106a1.5 1.5 0 1 1 2.834 0L13.5 17a1 1 0 1 1 0 2a2.5 2.5 0 0 1-1.5-.5a2.5 2.5 0 0 1-1.5.5a1 1 0 1 1 0-2z"></svg:path></svg:g>`,
})
export class MingcuteRabbitLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteRadar2FillIcon],svg[mingcute-radar-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="m7.418 3.973l4.848 4.847l.087-.087a1 1 0 0 1 1.414 1.414l-.087.087l4.347 4.348c.572.572.614 1.557-.053 2.15a8.97 8.97 0 0 1-4.807 2.193l.98 1.318A1.1 1.1 0 0 1 13.266 22h-6.58a1.1 1.1 0 0 1-1.017-1.518l1.253-3.051A8.99 8.99 0 0 1 3 10a8.97 8.97 0 0 1 2.269-5.974c.592-.667 1.577-.625 2.15-.053Zm1.277 14.4L8.028 20h3.446l-.819-1.1a9 9 0 0 1-1.96-.526Zm5.413-13.32a3.5 3.5 0 0 1 2.858 2.96a1 1 0 0 1-1.958.393l-.023-.115a1.5 1.5 0 0 0-1.07-1.233l-.155-.035a1 1 0 0 1 .348-1.97M14 2a6 6 0 0 1 6 6a1 1 0 0 1-1.993.117L18 8a4 4 0 0 0-4-4a1 1 0 1 1 0-2"></svg:path></svg:g>`,
})
export class MingcuteRadar2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteRadar2LineIcon],svg[mingcute-radar-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M5.269 4.026c.557-.628 1.463-.628 2.044-.148l.105.095l4.848 4.847l.087-.087a1 1 0 0 1 1.497 1.32l-.083.094l-.087.087l4.347 4.348c.572.572.614 1.557-.053 2.15a8.97 8.97 0 0 1-4.466 2.142l-.341.051l.98 1.318a1.1 1.1 0 0 1-.766 1.751l-.116.006h-6.58a1.1 1.1 0 0 1-1.058-1.403l.04-.115l1.254-3.051A8.99 8.99 0 0 1 3 10a8.97 8.97 0 0 1 2.269-5.974m3.426 14.348L8.028 20h3.446l-.819-1.1a9 9 0 0 1-1.582-.387l-.378-.14ZM6.407 5.79a7 7 0 0 0 9.803 9.803l-3.944-3.944l-1.559 1.558a1 1 0 0 1-1.414-1.414l1.558-1.559zm7.7-.737a3.5 3.5 0 0 1 2.859 2.96a1 1 0 0 1-1.958.393l-.023-.115a1.5 1.5 0 0 0-1.07-1.233l-.155-.035a1 1 0 0 1 .348-1.97ZM14 2a6 6 0 0 1 6 6a1 1 0 0 1-1.993.117L18 8a4 4 0 0 0-4-4a1 1 0 1 1 0-2"></svg:path></svg:g>`,
})
export class MingcuteRadar2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteRadarFillIcon],svg[mingcute-radar-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M4.575 4.575a1.5 1.5 0 1 1 2.122 2.122A7.47 7.47 0 0 0 4.5 12a7.47 7.47 0 0 0 2.197 5.303a1.5 1.5 0 1 1-2.122 2.122A10.47 10.47 0 0 1 1.5 12c0-2.9 1.177-5.526 3.075-7.425m12.728 0a1.5 1.5 0 0 1 2.122 0A10.47 10.47 0 0 1 22.5 12c0 2.9-1.177 5.526-3.075 7.425a1.5 1.5 0 1 1-2.122-2.122A7.47 7.47 0 0 0 19.5 12a7.47 7.47 0 0 0-2.197-5.303a1.5 1.5 0 0 1 0-2.122M9.525 7.404a1.5 1.5 0 0 1 0 2.121A3.48 3.48 0 0 0 8.5 12c0 .912.347 1.741.92 2.365l.148.152a1.5 1.5 0 1 1-2.085 2.157A6.5 6.5 0 0 1 5.5 12c0-1.794.73-3.422 1.904-4.596a1.5 1.5 0 0 1 2.121 0m7.114.043A6.48 6.48 0 0 1 18.5 12c0 1.794-.73 3.422-1.904 4.596a1.5 1.5 0 1 1-2.121-2.121A3.48 3.48 0 0 0 15.5 12c0-.955-.38-1.819-1.002-2.452a1.5 1.5 0 1 1 2.14-2.101ZM12 10a2 2 0 1 1 0 4a2 2 0 0 1 0-4"></svg:path></svg:g>`,
})
export class MingcuteRadarFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteRadarLineIcon],svg[mingcute-radar-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M4.929 4.929a1 1 0 0 1 1.414 1.414A7.97 7.97 0 0 0 4 12a7.97 7.97 0 0 0 2.343 5.657A1 1 0 1 1 4.93 19.07A9.97 9.97 0 0 1 2 12a9.97 9.97 0 0 1 2.929-7.071m12.728 0a1 1 0 0 1 1.414 0A9.97 9.97 0 0 1 22 12a9.97 9.97 0 0 1-2.929 7.071a1 1 0 0 1-1.414-1.414A7.97 7.97 0 0 0 20 12a7.97 7.97 0 0 0-2.343-5.657a1 1 0 0 1 0-1.414M9.172 7.757a1 1 0 0 1 0 1.415A3.98 3.98 0 0 0 8 12c0 1.13.467 2.148 1.22 2.877a1 1 0 1 1-1.39 1.437A6 6 0 0 1 6 12c0-1.657.673-3.158 1.757-4.243a1 1 0 0 1 1.415 0m7.11.04A5.98 5.98 0 0 1 18 12a5.98 5.98 0 0 1-1.757 4.243a1 1 0 0 1-1.415-1.415A3.98 3.98 0 0 0 16 12c0-1.091-.436-2.08-1.145-2.802a1 1 0 0 1 1.427-1.401M12 10.5a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3"></svg:path></svg:g>`,
})
export class MingcuteRadarLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteRadioFillIcon],svg[mingcute-radio-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M8.704 3.012L19.66 7H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h9.813L8.02 4.89a1 1 0 1 1 .684-1.879ZM15 11a3 3 0 1 0 0 6a3 3 0 0 0 0-6m-5 4H7a1 1 0 0 0 0 2h3a1 1 0 1 0 0-2m5-2a1 1 0 1 1 0 2a1 1 0 0 1 0-2m-7-1H7a1 1 0 0 0 0 2h1a1 1 0 1 0 0-2"></svg:path></svg:g>`,
})
export class MingcuteRadioFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteRadioLineIcon],svg[mingcute-radio-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M7.422 3.61a1 1 0 0 1 1.17-.632l.112.034L19.66 7H20a2 2 0 0 1 1.995 1.85L22 9v10a2 2 0 0 1-1.85 1.995L20 21H4a2 2 0 0 1-1.995-1.85L2 19V9a2 2 0 0 1 1.85-1.994L4 7h9.813L8.02 4.891a1 1 0 0 1-.598-1.281M19.31 9H4v10h16V9h-.032a1 1 0 0 1-.526.037L19.308 9ZM10 15a1 1 0 0 1 .117 1.993L10 17H7a1 1 0 0 1-.117-1.993L7 15zm5-4a3 3 0 1 1 0 6a3 3 0 0 1 0-6m0 2a1 1 0 1 0 0 2a1 1 0 0 0 0-2m-7-1a1 1 0 1 1 0 2H7a1 1 0 0 1 0-2z"></svg:path></svg:g>`,
})
export class MingcuteRadioLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteRadioboxFillIcon],svg[mingcute-radiobox-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2m0 5a5 5 0 1 0 0 10a5 5 0 0 0 0-10m0 2a3 3 0 1 1 0 6a3 3 0 0 1 0-6"></svg:path></svg:g>`,
})
export class MingcuteRadioboxFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteRadioboxLineIcon],svg[mingcute-radiobox-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2m0 2a8 8 0 1 0 0 16a8 8 0 0 0 0-16m0 4a4 4 0 1 1 0 8a4 4 0 0 1 0-8m0 2a2 2 0 1 0 0 4a2 2 0 0 0 0-4"></svg:path></svg:g>`,
})
export class MingcuteRadioboxLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteRainFillIcon],svg[mingcute-rain-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M12 19a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1m3-2a1 1 0 0 1 .993.883L16 18v1a1 1 0 0 1-1.993.117L14 19v-1a1 1 0 0 1 1-1m-6 0a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1m3-2a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1m-.5-13a6.5 6.5 0 0 1 6.086 4.212a6.002 6.002 0 0 1 .637 11.363l-.223.084V14.5a3.5 3.5 0 0 0-5.19-3.065a1.71 1.71 0 0 1-1.62 0a3.5 3.5 0 0 0-5.186 2.873L6 14.5v3.4a5.002 5.002 0 0 1-1-9.484A6.5 6.5 0 0 1 11.5 2M9 13a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1m6 0a1 1 0 0 1 .993.883L16 14v1a1 1 0 0 1-1.993.117L14 15v-1a1 1 0 0 1 1-1"></svg:path></svg:g>`,
})
export class MingcuteRainFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteRainLineIcon],svg[mingcute-rain-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M12 19a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1m3-2a1 1 0 0 1 .993.883L16 18v1a1 1 0 0 1-1.993.117L14 19v-1a1 1 0 0 1 1-1m-6 0a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1m3-2a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1m-.5-13a6.5 6.5 0 0 1 6.086 4.212A6.002 6.002 0 0 1 19.6 16.799a1 1 0 1 1-1.202-1.598a4.001 4.001 0 0 0-1.744-7.147a1.01 1.01 0 0 1-.81-.733A4.5 4.5 0 0 0 7.027 9a1.01 1.01 0 0 1-.76 1.09A3.002 3.002 0 0 0 5.5 15.6a1 1 0 1 1-1.002 1.73A5 5 0 0 1 5 8.417A6.5 6.5 0 0 1 11.5 2M9 13a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1m6 0a1 1 0 0 1 .993.883L16 14v1a1 1 0 0 1-1.993.117L14 15v-1a1 1 0 0 1 1-1"></svg:path></svg:g>`,
})
export class MingcuteRainLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteRainbowFillIcon],svg[mingcute-rainbow-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M12 7.5A8.5 8.5 0 0 0 3.5 16v1a1.5 1.5 0 0 1-3 0v-1C.5 9.649 5.649 4.5 12 4.5S23.5 9.649 23.5 16v1a1.5 1.5 0 0 1-3 0v-1A8.5 8.5 0 0 0 12 7.5m0 4A4.5 4.5 0 0 0 7.5 16v1a1.5 1.5 0 0 1-3 0v-1a7.5 7.5 0 0 1 15 0v1a1.5 1.5 0 0 1-3 0v-1a4.5 4.5 0 0 0-4.5-4.5m-.5 4.5a.5.5 0 0 1 1 0v1a1.5 1.5 0 0 0 3 0v-1a3.5 3.5 0 1 0-7 0v1a1.5 1.5 0 0 0 3 0z"></svg:path></svg:g>`,
})
export class MingcuteRainbowFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteRainbowLineIcon],svg[mingcute-rainbow-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M12 5c6.075 0 11 4.925 11 11v1a1 1 0 1 1-2 0v-1a9 9 0 1 0-18 0v1a1 1 0 1 1-2 0v-1C1 9.925 5.925 5 12 5m0 4a7 7 0 0 1 7 7v1a1 1 0 1 1-2 0v-1a5 5 0 0 0-10 0v1a1 1 0 1 1-2 0v-1a7 7 0 0 1 7-7m0 4a3 3 0 0 1 3 3v1a1 1 0 1 1-2 0v-1a1 1 0 1 0-2 0v1a1 1 0 1 1-2 0v-1a3 3 0 0 1 3-3"></svg:path></svg:g>`,
})
export class MingcuteRainbowLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteRainstormFillIcon],svg[mingcute-rainstorm-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M16.868 18.983a1 1 0 0 1 .707 1.225l-.259.966a1 1 0 0 1-1.932-.518l.26-.966a1 1 0 0 1 1.224-.707m-7 0a1 1 0 0 1 .707 1.225l-.259.966a1 1 0 0 1-1.932-.518l.26-.966a1 1 0 0 1 1.224-.707m4.15-2.415a1 1 0 0 1 .73 1.11l-.023.115l-.518 1.932a1 1 0 0 1-1.955-.404l.023-.114l.518-1.932a1 1 0 0 1 1.225-.707m-7 0a1 1 0 0 1 .707 1.225l-.518 1.932a1 1 0 1 1-1.932-.518l.518-1.932a1 1 0 0 1 1.225-.707m3.885-1.449a1 1 0 0 1 .707 1.225l-.259.966a1 1 0 1 1-1.931-.518l.258-.966a1 1 0 0 1 1.225-.707m7 0a1 1 0 0 1 .707 1.225l-.258.966a1 1 0 0 1-1.932-.518l.258-.966a1 1 0 0 1 1.225-.707M11.5 2a6.5 6.5 0 0 1 6.086 4.212a6.002 6.002 0 0 1 3.047 9.601a3.001 3.001 0 0 0-5.69-1.035a3 3 0 0 0-1.704-.2a3 3 0 0 0-5.295.199a3 3 0 0 0-4.083 1.98v.135a5 5 0 0 1 1.14-8.476A6.5 6.5 0 0 1 11.5 2"></svg:path></svg:g>`,
})
export class MingcuteRainstormFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteRainstormLineIcon],svg[mingcute-rainstorm-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M16.868 18.983a1 1 0 0 1 .707 1.225l-.259.966a1 1 0 0 1-1.932-.518l.26-.966a1 1 0 0 1 1.224-.707m-7 0a1 1 0 0 1 .707 1.225l-.259.966a1 1 0 0 1-1.932-.518l.26-.966a1 1 0 0 1 1.224-.707m4.15-2.415a1 1 0 0 1 .73 1.11l-.023.115l-.518 1.932a1 1 0 0 1-1.955-.404l.023-.114l.518-1.932a1 1 0 0 1 1.225-.707m-7 0a1 1 0 0 1 .707 1.225l-.518 1.932a1 1 0 1 1-1.932-.518l.518-1.932a1 1 0 0 1 1.225-.707m3.885-1.449a1 1 0 0 1 .707 1.225l-.258.966a1 1 0 0 1-1.932-.518l.258-.966a1 1 0 0 1 1.225-.707m7 0a1 1 0 0 1 .707 1.225l-.258.966a1 1 0 0 1-1.932-.518l.258-.966a1 1 0 0 1 1.225-.707M11.5 2a6.5 6.5 0 0 1 6.086 4.212a6.002 6.002 0 0 1 3.214 9.389a1 1 0 0 1-1.6-1.202a4 4 0 0 0-2.545-6.346a1.01 1.01 0 0 1-.81-.732A4.5 4.5 0 0 0 7.027 9a1.01 1.01 0 0 1-.76 1.09a3.002 3.002 0 0 0-1.97 4.216l.103.193a1 1 0 1 1-1.731 1.002A5 5 0 0 1 5 8.416A6.5 6.5 0 0 1 11.5 2"></svg:path></svg:g>`,
})
export class MingcuteRainstormLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteRakeFillIcon],svg[mingcute-rake-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M4.575 10.94a1.5 1.5 0 1 0-2.121 2.12l1.414 1.415a3.5 3.5 0 0 0 4.95 0l1.406-1.406l.008-.008l.008-.009l.346-.345l7.424 7.425a1.5 1.5 0 0 0 2.122-2.122l-7.425-7.424l.354-.354l1.414-1.414a3.5 3.5 0 0 0 0-4.95L13.06 2.454a1.5 1.5 0 1 0-2.122 2.121l1.415 1.415a.5.5 0 0 1 0 .707L12 7.05l-1.768-1.768a1.5 1.5 0 0 0-2.121 2.122l1.768 1.768l-.708.707L7.404 8.11a1.5 1.5 0 0 0-2.122 2.121L7.05 12l-.353.354a.5.5 0 0 1-.707 0z"></svg:path></svg:g>`,
})
export class MingcuteRakeFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteRakeLineIcon],svg[mingcute-rake-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M4.222 11.293a1 1 0 0 0-1.414 1.414l1.414 1.414a3 3 0 0 0 4.242 0L10.586 12l7.778 7.778a1 1 0 0 0 1.414-1.414L12 10.586l.706-.707h.002l1.413-1.415a3 3 0 0 0 0-4.242l-1.414-1.414a1 1 0 1 0-1.414 1.414l1.414 1.414a1 1 0 0 1 0 1.414L12 7.757l-2.122-2.12A1 1 0 1 0 8.464 7.05l2.122 2.122l-1.414 1.413l-2.122-2.12a1 1 0 0 0-1.414 1.413L7.757 12l-.707.707a1 1 0 0 1-1.414 0z"></svg:path></svg:g>`,
})
export class MingcuteRakeLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteRandomFillIcon],svg[mingcute-random-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M18 3a3 3 0 0 1 2.995 2.824L21 6v12a3 3 0 0 1-2.824 2.995L18 21H6a3 3 0 0 1-2.995-2.824L3 18V6a3 3 0 0 1 2.824-2.995L6 3zM8.5 14a1.5 1.5 0 0 0-1.493 1.356L7 15.5l.007.154a1.5 1.5 0 0 0 2.986 0L10 15.51l-.007-.154A1.5 1.5 0 0 0 8.5 14m7 0a1.5 1.5 0 0 0-1.493 1.356L14 15.51a1.5 1.5 0 0 0 2.993.144L17 15.5a1.5 1.5 0 0 0-1.5-1.5M12 10.5a1.5 1.5 0 0 0-1.493 1.356l-.007.154a1.5 1.5 0 0 0 2.993.144L13.5 12a1.5 1.5 0 0 0-1.5-1.5M8.5 7a1.5 1.5 0 0 0-1.493 1.356L7 8.5l.007.154a1.5 1.5 0 0 0 2.986 0L10 8.51l-.007-.154A1.5 1.5 0 0 0 8.5 7m7 0a1.5 1.5 0 0 0-1.493 1.356L14 8.51a1.5 1.5 0 0 0 2.993.144L17 8.5A1.5 1.5 0 0 0 15.5 7"></svg:path></svg:g>`,
})
export class MingcuteRandomFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteRandomLineIcon],svg[mingcute-random-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M18 3a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3zm0 2H6a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1m-9.5 9a1.5 1.5 0 0 1 1.493 1.356l.007.154a1.5 1.5 0 0 1-2.993.144L7 15.5A1.5 1.5 0 0 1 8.5 14m7 0a1.5 1.5 0 0 1 1.493 1.356l.007.154a1.5 1.5 0 0 1-2.993.144L14 15.5a1.5 1.5 0 0 1 1.5-1.5M12 10.5a1.5 1.5 0 0 1 1.493 1.356l.007.154a1.5 1.5 0 0 1-2.993.144L10.5 12a1.5 1.5 0 0 1 1.5-1.5M8.5 7a1.5 1.5 0 0 1 1.493 1.356L10 8.51a1.5 1.5 0 0 1-2.993.144L7 8.5A1.5 1.5 0 0 1 8.5 7m7 0a1.5 1.5 0 0 1 1.493 1.356L17 8.51a1.5 1.5 0 0 1-2.993.144L14 8.5A1.5 1.5 0 0 1 15.5 7"></svg:path></svg:g>`,
})
export class MingcuteRandomLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteRareFogLightsFillIcon],svg[mingcute-rare-fog-lights-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M17.22 4.625a1 1 0 1 1 1.56-1.25l.538.672c.592.74.87 1.644.836 2.538l1.217.487a1 1 0 1 1-.742 1.857l-1.074-.43a4 4 0 0 1-.32.43a1.83 1.83 0 0 0-.102 2.247l2.238.896a1 1 0 1 1-.742 1.857l-.426-.17a3.82 3.82 0 0 1-.835 2.511l2.003.802a1 1 0 1 1-.742 1.857l-1.643-.657q.096.23.258.432l.537.671a1 1 0 1 1-1.562 1.25l-.537-.672a3.82 3.82 0 0 1-.836-2.537l-1.217-.488a1 1 0 1 1 .742-1.856l1.074.43q.144-.225.32-.43a1.83 1.83 0 0 0 .102-2.248l-2.238-.896a1 1 0 1 1 .742-1.856l.426.17a3.82 3.82 0 0 1 .835-2.512l-2.003-.801a1 1 0 1 1 .742-1.857l1.643.657a1.8 1.8 0 0 0-.258-.433l-.537-.671Zm-3.451 2.804c-.33-3.195-3.634-4.694-6.381-3.473l-.225.1a8.694 8.694 0 0 0 0 15.889l.225.1c2.747 1.22 6.05-.28 6.38-3.474c.135-1.302.232-2.84.232-4.571s-.097-3.269-.231-4.57Z"></svg:path></svg:g>`,
})
export class MingcuteRareFogLightsFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteRareFogLightsLineIcon],svg[mingcute-rare-fog-lights-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M17.22 4.625a1 1 0 1 1 1.56-1.25l.538.672c.592.74.87 1.644.836 2.538l1.217.487a1 1 0 1 1-.742 1.857l-1.074-.43a4 4 0 0 1-.32.43a1.83 1.83 0 0 0-.102 2.247l2.238.896a1 1 0 1 1-.742 1.857l-.426-.17a3.82 3.82 0 0 1-.835 2.511l2.003.802a1 1 0 1 1-.742 1.857l-1.643-.657q.096.23.258.432l.537.671a1 1 0 1 1-1.562 1.25l-.537-.672a3.82 3.82 0 0 1-.836-2.537l-1.217-.488a1 1 0 1 1 .742-1.856l1.074.43q.144-.225.32-.43a1.83 1.83 0 0 0 .102-2.248l-2.238-.896a1 1 0 1 1 .742-1.856l.426.17a3.82 3.82 0 0 1 .835-2.512l-2.003-.801a1 1 0 1 1 .742-1.857l1.643.657a1.8 1.8 0 0 0-.258-.433l-.537-.671Zm-3.451 2.804c-.33-3.195-3.634-4.694-6.381-3.473l-.225.1a8.694 8.694 0 0 0 0 15.889l.225.1c2.747 1.22 6.05-.28 6.38-3.474c.135-1.302.232-2.84.232-4.571s-.097-3.269-.231-4.57ZM8.2 5.783c1.696-.753 3.41.21 3.58 1.852c.127 1.24.22 2.709.22 4.365s-.093 3.126-.22 4.365c-.17 1.642-1.884 2.606-3.58 1.852l-.225-.1a6.694 6.694 0 0 1 0-12.234z"></svg:path></svg:g>`,
})
export class MingcuteRareFogLightsLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteReactFillIcon],svg[mingcute-react-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M17.5 2.474c1.522.878 1.834 2.82 1.58 4.766q-.046.362-.121.742q.367.126.703.266C21.474 9.002 23 10.243 23 12s-1.526 2.998-3.338 3.752q-.337.14-.703.266q.075.38.121.742c.254 1.946-.058 3.888-1.58 4.766c-1.521.879-3.36.178-4.918-1.014a12 12 0 0 1-.582-.477q-.293.255-.582.477C9.86 21.704 8.022 22.405 6.5 21.526c-1.521-.878-1.833-2.82-1.58-4.766a12 12 0 0 1 .122-.742q-.368-.126-.704-.266C2.526 14.998 1 13.757 1 12s1.526-2.998 3.338-3.752q.337-.14.704-.266q-.075-.38-.122-.742c-.253-1.946.059-3.888 1.58-4.766s3.36-.178 4.918 1.015q.29.22.582.476q.293-.255.582-.476c1.559-1.193 3.396-1.894 4.918-1.015M6.98 16.537q-.045.248-.076.481c-.233 1.793.206 2.55.597 2.776c.392.226 1.267.228 2.703-.87a10 10 0 0 0 .379-.307a22 22 0 0 1-1.391-1.75a22 22 0 0 1-2.212-.33m10.043 0q-1.036.211-2.212.33q-.691.96-1.391 1.75q.191.163.378.306c1.436 1.099 2.312 1.097 2.703.871c.392-.226.83-.983.597-2.776a10 10 0 0 0-.075-.481M5.56 9.92a10 10 0 0 0-.454.175C3.436 10.789 3 11.548 3 12s.437 1.211 2.106 1.905q.218.09.454.175A22 22 0 0 1 6.381 12a22 22 0 0 1-.82-2.08Zm12.88 0a22 22 0 0 1-.82 2.08c.324.717.598 1.413.82 2.08a10 10 0 0 0 .454-.175C20.564 13.211 21 12.452 21 12s-.436-1.21-2.106-1.905a10 10 0 0 0-.454-.175M12 10.5a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3m-1.797-5.423C8.767 3.978 7.892 3.98 7.5 4.206s-.83.983-.597 2.776q.03.234.076.481q1.035-.211 2.212-.33a22 22 0 0 1 1.391-1.75a10 10 0 0 0-.379-.306m3.595 0a10 10 0 0 0-.38.306q.702.79 1.392 1.75c.783.078 1.523.19 2.212.33a10 10 0 0 0 .075-.48c.234-1.793-.205-2.551-.597-2.777c-.391-.226-1.267-.227-2.703.871Z"></svg:path></svg:g>`,
})
export class MingcuteReactFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteReactLineIcon],svg[mingcute-react-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M12.582 3.489c1.559-1.193 3.396-1.894 4.918-1.015c1.522.878 1.834 2.82 1.58 4.766q-.046.362-.121.742q.367.126.703.266C21.474 9.002 23 10.243 23 12s-1.526 2.998-3.338 3.752q-.337.14-.703.266q.075.38.121.742c.254 1.946-.058 3.888-1.58 4.766c-1.521.879-3.36.178-4.918-1.014a12 12 0 0 1-.582-.477q-.293.255-.582.477C9.86 21.704 8.022 22.405 6.5 21.526c-1.521-.878-1.833-2.82-1.58-4.766a12 12 0 0 1 .122-.742q-.368-.126-.704-.266C2.526 14.998 1 13.757 1 12s1.526-2.998 3.338-3.752q.337-.14.704-.266q-.075-.38-.122-.742c-.253-1.946.059-3.888 1.58-4.766s3.36-.178 4.918 1.015q.29.22.582.476q.293-.255.582-.476M6.98 16.537q-.045.248-.076.481c-.233 1.793.206 2.55.597 2.776c.392.226 1.267.228 2.703-.87a10 10 0 0 0 .379-.307a22 22 0 0 1-1.391-1.75a22 22 0 0 1-2.212-.33m10.043 0q-1.036.211-2.212.33q-.691.96-1.391 1.75q.191.163.378.306c1.436 1.099 2.312 1.097 2.703.871c.392-.226.83-.983.597-2.776a10 10 0 0 0-.075-.481M12 9q-.889 0-1.702.051q-.451.68-.896 1.45a28 28 0 0 0-.807 1.5q.363.73.807 1.499t.896 1.45a29 29 0 0 0 3.405 0q.451-.68.895-1.45a28 28 0 0 0 .808-1.5a28 28 0 0 0-.808-1.5a28 28 0 0 0-.895-1.449A28 28 0 0 0 12 9m-6.44.92a10 10 0 0 0-.454.175C3.436 10.789 3 11.548 3 12s.437 1.211 2.106 1.905q.218.09.454.175A22 22 0 0 1 6.381 12a22 22 0 0 1-.82-2.08Zm12.88 0a22 22 0 0 1-.82 2.08c.324.717.598 1.413.82 2.08a10 10 0 0 0 .454-.175C20.564 13.211 21 12.452 21 12s-.436-1.21-2.106-1.905a10 10 0 0 0-.454-.175M12 10.5a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3M7.5 4.206c-.391.226-.83.983-.597 2.776q.03.234.076.481q1.035-.211 2.212-.33a22 22 0 0 1 1.391-1.75a10 10 0 0 0-.379-.306C8.767 3.978 7.892 3.98 7.5 4.206m9 0c-.391-.226-1.267-.227-2.703.871a10 10 0 0 0-.378.306c.466.526.932 1.111 1.39 1.75q1.178.119 2.213.33a10 10 0 0 0 .075-.48c.234-1.793-.205-2.551-.597-2.777"></svg:path></svg:g>`,
})
export class MingcuteReactLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteRearWindshieldDefrosterFillIcon],svg[mingcute-rear-windshield-defroster-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M2 7a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v7a3 3 0 0 1-3 3h-3.14a4.16 4.16 0 0 1-.846 3.333l-.233.292a1 1 0 1 1-1.562-1.25l.233-.291A2.16 2.16 0 0 0 13.797 17h2.063a4.15 4.15 0 0 0-1.153-2.207a2.16 2.16 0 0 1-.16-2.877l.234-.291a1 1 0 1 0-1.562-1.25l-.233.292a4.16 4.16 0 0 0 .307 5.54c.23.231.4.503.504.793H11.86a4.16 4.16 0 0 1-.846 3.333l-.233.292a1 1 0 1 1-1.562-1.25l.233-.291A2.16 2.16 0 0 0 9.797 17h2.063a4.15 4.15 0 0 0-1.153-2.207a2.16 2.16 0 0 1-.16-2.877l.234-.291a1 1 0 1 0-1.562-1.25l-.233.292a4.16 4.16 0 0 0 .307 5.54c.23.231.4.503.504.793H5a3 3 0 0 1-3-3z"></svg:path></svg:g>`,
})
export class MingcuteRearWindshieldDefrosterFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteRearWindshieldDefrosterLineIcon],svg[mingcute-rear-windshield-defroster-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M10.625 10.22a1 1 0 0 1 .156 1.405l-.233.291a2.16 2.16 0 0 0 .036 2.743l.123.134a4.16 4.16 0 0 1 .307 5.54l-.233.292a1 1 0 1 1-1.562-1.25l.233-.291a2.16 2.16 0 0 0-.036-2.743l-.123-.134a4.16 4.16 0 0 1-.307-5.54l.233-.292a1 1 0 0 1 1.406-.156Zm4 0a1 1 0 0 1 .156 1.405l-.233.291a2.16 2.16 0 0 0 .036 2.743l.123.134a4.16 4.16 0 0 1 .307 5.54l-.233.292a1 1 0 1 1-1.562-1.25l.233-.291a2.16 2.16 0 0 0-.036-2.743l-.123-.134a4.16 4.16 0 0 1-.307-5.54l.233-.292a1 1 0 0 1 1.406-.156ZM19 4a3 3 0 0 1 2.995 2.824L22 7v7a3 3 0 0 1-2.824 2.995L19 17h-1a1 1 0 0 1-.117-1.993L18 15h1a1 1 0 0 0 .993-.883L20 14V7a1 1 0 0 0-.883-.993L19 6H5a1 1 0 0 0-.993.883L4 7v7a1 1 0 0 0 .883.993L5 15h1a1 1 0 0 1 .117 1.993L6 17H5a3 3 0 0 1-2.995-2.824L2 14V7a3 3 0 0 1 2.824-2.995L5 4z"></svg:path></svg:g>`,
})
export class MingcuteRearWindshieldDefrosterLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteReceiveMoneyFillIcon],svg[mingcute-receive-money-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M4 17V5a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v12a1 1 0 0 1 .351 1.936l-8 3a1 1 0 0 1-.702 0l-8-3A1 1 0 0 1 4 17m9-11a1 1 0 1 0-2 0v1h-1a2.5 2.5 0 0 0 0 5h4a.5.5 0 0 1 0 1H9a1 1 0 1 0 0 2h2v1a1 1 0 1 0 2 0v-1h1a2.5 2.5 0 0 0 0-5h-4a.5.5 0 0 1 0-1h5a1 1 0 1 0 0-2h-2z"></svg:path></svg:g>`,
})
export class MingcuteReceiveMoneyFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteReceiveMoneyLineIcon],svg[mingcute-receive-money-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M17 2a3 3 0 0 1 3 3v12a1 1 0 0 1 .351 1.936l-8 3a1 1 0 0 1-.702 0l-8-3A1 1 0 0 1 4 17V5a3 3 0 0 1 3-3zm0 2H7a1 1 0 0 0-.993.883L6 5v12.682l6 2.25l6-2.25V5a1 1 0 0 0-.883-.993zm-5 1a1 1 0 0 1 .993.883L13 6v1h2a1 1 0 0 1 .117 1.993L15 9h-5a.5.5 0 0 0-.09.992L10 10h4a2.5 2.5 0 0 1 .164 4.995L14 15h-1v1a1 1 0 0 1-1.993.117L11 16v-1H9a1 1 0 0 1-.117-1.993L9 13h5a.5.5 0 0 0 .09-.992L14 12h-4a2.5 2.5 0 0 1-.164-4.995L10 7h1V6a1 1 0 0 1 1-1"></svg:path></svg:g>`,
})
export class MingcuteReceiveMoneyLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteRecordMailFillIcon],svg[mingcute-record-mail-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M11.084 13.5a5 5 0 1 0-4.584 3h11a5 5 0 1 0-4.584-3zM6.5 9.5a2 2 0 1 0 0 4a2 2 0 0 0 0-4m11 4a2 2 0 1 0 0-4a2 2 0 0 0 0 4"></svg:path></svg:g>`,
})
export class MingcuteRecordMailFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteRecordMailLineIcon],svg[mingcute-record-mail-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M10.242 14A4.5 4.5 0 1 0 6.5 16h11a4.5 4.5 0 1 0-3.742-2zM6.5 9a2.5 2.5 0 1 0 0 5a2.5 2.5 0 0 0 0-5m11 5a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5"></svg:path></svg:g>`,
})
export class MingcuteRecordMailLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteRectangleFillIcon],svg[mingcute-rectangle-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M2 6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2z"></svg:path></svg:g>`,
})
export class MingcuteRectangleFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteRectangleLineIcon],svg[mingcute-rectangle-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M2 6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zm18 0H4v12h16z"></svg:path></svg:g>`,
})
export class MingcuteRectangleLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteRectangleVerticalFillIcon],svg[mingcute-rectangle-vertical-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2z"></svg:path></svg:g>`,
})
export class MingcuteRectangleVerticalFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteRectangleVerticalLineIcon],svg[mingcute-rectangle-vertical-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2zM6 4v16h12V4z"></svg:path></svg:g>`,
})
export class MingcuteRectangleVerticalLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteRecycleFillIcon],svg[mingcute-recycle-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M14.165 3.25c-.962-1.667-3.368-1.667-4.33 0L8.438 5.67a1.5 1.5 0 0 0 2.598 1.5L12 5.5l2.22 3.846a1.5 1.5 0 0 0-.243 2.943l2.898.776a1.48 1.48 0 0 0 1.278-.241c.274-.202.468-.48.56-.82l.776-2.897a1.5 1.5 0 0 0-2.67-1.26zM2.041 16.75l2.653-4.596a1.5 1.5 0 0 1-.243-2.943l2.898-.776a1.503 1.503 0 0 1 1.837 1.06l.777 2.899a1.5 1.5 0 0 1-2.67 1.26L5.072 17.5H7a1.5 1.5 0 0 1 0 3H4.206c-1.925 0-3.127-2.083-2.165-3.75m18.521-2.42a1.5 1.5 0 0 0-2.598 1.5l.964 1.67h-4.44a1.5 1.5 0 0 0-2.427-1.682l-2.114 2.114c-.276.272-.447.65-.447 1.068c0 .412.16.786.447 1.069l2.114 2.113a1.5 1.5 0 0 0 2.426-1.682h5.307c1.925 0 3.128-2.083 2.165-3.75z"></svg:path></svg:g>`,
})
export class MingcuteRecycleFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteRecycleLineIcon],svg[mingcute-recycle-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M18.763 14.214a1 1 0 0 1 1.302.268l.064.098L21.526 17c.745 1.29-.132 2.893-1.585 2.995l-.147.005h-6.38l.415.414a1 1 0 0 1-1.32 1.498l-.095-.084l-2.115-2.115a1 1 0 0 1-.194-.267a1 1 0 0 1 .121-1.08l.036-.04l2.152-2.154a1 1 0 0 1 1.498 1.32l-.083.094l-.415.414h6.38l-1.397-2.42a1 1 0 0 1 .366-1.366M8.703 9.625l.777 2.898a1 1 0 1 1-1.932.518l-.152-.566L4.206 18H7a1 1 0 1 1 0 2H4.206c-1.54 0-2.502-1.667-1.732-3l3.19-5.525l-.566.151a1 1 0 0 1-.517-1.932l2.897-.776a1 1 0 0 1 1.225.707m4.942-6.263l.087.138l3.19 5.525l.152-.566a1 1 0 0 1 1.955.404l-.023.114l-.777 2.898a.996.996 0 0 1-1.099.732l-.125-.025l-2.898-.776a1 1 0 0 1 .403-1.956l.114.024l.566.151L12 4.5l-1.397 2.42a1 1 0 0 1-1.785-.896l.053-.104l1.397-2.42c.715-1.238 2.425-1.327 3.282-.265z"></svg:path></svg:g>`,
})
export class MingcuteRecycleLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteRedPacketFillIcon],svg[mingcute-red-packet-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M20 6.762V19a3 3 0 0 1-2.824 2.995L17 22H7a3 3 0 0 1-2.995-2.824L4 19V6.762l.671.805a9.54 9.54 0 0 0 5.834 3.315L10.5 11a1.5 1.5 0 0 0 3 0l-.005-.118a9.54 9.54 0 0 0 5.617-3.064l.217-.25zM17 2a3 3 0 0 1 2.714 1.72l.075.172l-1.997 2.395a7.54 7.54 0 0 1-11.394.22l-.19-.22L4.21 3.892A3 3 0 0 1 6.8 2.006L7 2z"></svg:path></svg:g>`,
})
export class MingcuteRedPacketFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteRedPacketLineIcon],svg[mingcute-red-packet-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M4 5a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3zm3-1a1 1 0 0 0-.973.768L6.8 6.056a6.065 6.065 0 0 0 10.4 0l.773-1.288A1 1 0 0 0 17 4zM6 19V8.324a8.07 8.07 0 0 0 4.506 2.537a1.5 1.5 0 1 0 2.987 0A8.07 8.07 0 0 0 18 8.324V19a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1"></svg:path></svg:g>`,
})
export class MingcuteRedPacketLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteRedPacketOpenFillIcon],svg[mingcute-red-packet-open-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M12 0a8 8 0 0 0-8 8v11a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8a8 8 0 0 0-8-8M6.313 6.083a6.003 6.003 0 0 1 11.374 0L17.6 6.2a7 7 0 0 1-11.2 0z"></svg:path></svg:g>`,
})
export class MingcuteRedPacketOpenFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteRedPacketOpenLineIcon],svg[mingcute-red-packet-open-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M12 0a8 8 0 0 0-8 8v11a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8a8 8 0 0 0-8-8M6.313 6.083a6.003 6.003 0 0 1 11.374 0L17.6 6.2a7 7 0 0 1-11.2 0zM6 8.708V19a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V8.708a9 9 0 0 1-12 0"></svg:path></svg:g>`,
})
export class MingcuteRedPacketOpenLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteRedditFillIcon],svg[mingcute-reddit-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2m3 4c-.3 0-.568.131-.751.34l-1.65-.33a.5.5 0 0 0-.594.42l-.368 2.578c-1.423.063-2.739.493-3.746 1.198a5 5 0 0 0-.547.439a1.5 1.5 0 0 0-1.34 2.684L6 13.5c0 1.382.802 2.532 1.891 3.294C8.983 17.56 10.439 18 12 18s3.017-.441 4.109-1.206C17.199 16.032 18 14.882 18 13.5l-.004-.17a1.5 1.5 0 0 0-1.34-2.685a5 5 0 0 0-.547-.44c-.94-.657-2.15-1.076-3.465-1.18l.276-1.931l1.132.226A1 1 0 1 0 15 6m-5.5 6a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3m5 0a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3"></svg:path></svg:g>`,
})
export class MingcuteRedditFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteRedditLineIcon],svg[mingcute-reddit-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2m0 2a8 8 0 1 0 0 16a8 8 0 0 0 0-16m3 2a1 1 0 1 1-.948 1.32l-1.132-.226l-.276 1.931c1.315.104 2.524.523 3.465 1.18q.288.204.547.44a1.5 1.5 0 0 1 1.34 2.684L18 13.5c0 1.382-.802 2.532-1.891 3.294C15.017 17.56 13.561 18 12 18s-3.017-.441-4.109-1.206C6.801 16.032 6 14.882 6 13.5l.004-.17a1.5 1.5 0 0 1 1.34-2.685q.258-.236.547-.44c1.007-.704 2.323-1.134 3.746-1.197l.368-2.579a.5.5 0 0 1 .593-.42l1.65.33A1 1 0 0 1 15 6m-3 5c-1.2 0-2.245.342-2.962.844C8.318 12.35 8 12.95 8 13.5s.318 1.151 1.038 1.656c.717.502 1.761.844 2.962.844c1.2 0 2.245-.342 2.962-.844C15.682 14.65 16 14.05 16 13.5s-.318-1.151-1.038-1.656C14.245 11.342 13.201 11 12 11m-2 1a1 1 0 1 1 0 2a1 1 0 0 1 0-2m4 0a1 1 0 1 1 0 2a1 1 0 0 1 0-2"></svg:path></svg:g>`,
})
export class MingcuteRedditLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteRefresh1FillIcon],svg[mingcute-refresh-1-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M10.7 19.374a7.5 7.5 0 0 0 7.881-3.778a1.5 1.5 0 0 1 2.63 1.442c-2.102 3.835-6.48 6.093-11.032 5.29c-5.71-1.006-9.524-6.452-8.517-12.163C2.67 4.455 8.115.641 13.826 1.648a10.5 10.5 0 0 1 8.631 9.343c.125 1.309-1.265 2.158-2.366 1.549l-2.82-1.561c-1.547-.857-.767-3.22.986-2.986l.102.013A7.5 7.5 0 1 0 10.7 19.374"></svg:path></svg:g>`,
})
export class MingcuteRefresh1FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteRefresh1LineIcon],svg[mingcute-refresh-1-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M9.93 19.728a8.004 8.004 0 0 0 9.146-3.99a1 1 0 1 1 1.77.932c-2.13 4.04-6.836 6.221-11.434 4.99c-5.335-1.43-8.5-6.913-7.071-12.248s6.913-8.5 12.247-7.071a10 10 0 0 1 7.414 9.58c.007.903-.995 1.402-1.713.92l-2.673-1.802c-1.008-.68-.332-2.251.854-1.986l1.058.236A8 8 0 1 0 9.93 19.728"></svg:path></svg:g>`,
})
export class MingcuteRefresh1LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteRefresh2FillIcon],svg[mingcute-refresh-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M1.498 12.082c-.01-1.267 1.347-1.987 2.379-1.406l.113.07l2.678 1.804c1.424.96.538 3.146-1.1 2.915l-.137-.025l-.109-.024a7.504 7.504 0 0 0 13.175.335a1.5 1.5 0 1 1 2.6 1.498c-2.317 4.02-7.119 6.152-11.815 4.893a10.5 10.5 0 0 1-7.784-10.06m1.406-5.33C5.22 2.731 10.022.6 14.718 1.857a10.5 10.5 0 0 1 7.784 10.06c.01 1.267-1.347 1.987-2.379 1.407l-.113-.07l-2.678-1.805c-1.424-.959-.538-3.145 1.099-2.914l.138.025l.108.023A7.504 7.504 0 0 0 5.502 8.25a1.5 1.5 0 1 1-2.598-1.498"></svg:path></svg:g>`,
})
export class MingcuteRefresh2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteRefresh2LineIcon],svg[mingcute-refresh-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M2 12.08c-.006-.862.91-1.356 1.618-.975l.095.058l2.678 1.804c.972.655.377 2.143-.734 2.007l-.117-.02l-1.063-.234a8.002 8.002 0 0 0 14.804.605a1 1 0 0 1 1.82.828c-1.987 4.37-6.896 6.793-11.687 5.509A10 10 0 0 1 2 12.08m.903-4.228C4.89 3.482 9.799 1.06 14.59 2.343a10 10 0 0 1 7.414 9.581c.007.863-.91 1.358-1.617.976l-.096-.058l-2.678-1.804c-.972-.655-.377-2.143.734-2.007l.117.02l1.063.234A8.002 8.002 0 0 0 4.723 8.68a1 1 0 1 1-1.82-.828"></svg:path></svg:g>`,
})
export class MingcuteRefresh2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteRefresh3FillIcon],svg[mingcute-refresh-3-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M20 9.5a1.5 1.5 0 0 1 1.5 1.5a8.5 8.5 0 0 1-8.5 8.5h-2.382a1.5 1.5 0 0 1-2.179 2.06l-2.494-2.494a1.5 1.5 0 0 1-.445-1.052v-.028c.003-.371.142-.71.368-.97l.071-.077l2.5-2.5a1.5 1.5 0 0 1 2.18 2.061H13a5.5 5.5 0 0 0 5.5-5.5A1.5 1.5 0 0 1 20 9.5m-4.44-7.06l2.5 2.5a1.5 1.5 0 0 1 0 2.12l-2.5 2.5a1.5 1.5 0 0 1-2.178-2.06H11A5.5 5.5 0 0 0 5.5 13a1.5 1.5 0 1 1-3 0A8.5 8.5 0 0 1 11 4.5h2.382a1.5 1.5 0 0 1 2.179-2.06Z"></svg:path></svg:g>`,
})
export class MingcuteRefresh3FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteRefresh3LineIcon],svg[mingcute-refresh-3-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M20 9a1 1 0 0 1 1 1v1a8 8 0 0 1-8 8H9.414l.793.793a1 1 0 0 1-1.414 1.414l-2.496-2.496a1 1 0 0 1-.287-.567L6 17.991a1 1 0 0 1 .237-.638l.056-.06l2.5-2.5a1 1 0 0 1 1.414 1.414L9.414 17H13a6 6 0 0 0 6-6v-1a1 1 0 0 1 1-1m-4.793-6.207l2.5 2.5a1 1 0 0 1 0 1.414l-2.5 2.5a1 1 0 1 1-1.414-1.414L14.586 7H11a6 6 0 0 0-6 6v1a1 1 0 1 1-2 0v-1a8 8 0 0 1 8-8h3.586l-.793-.793a1 1 0 0 1 1.414-1.414"></svg:path></svg:g>`,
})
export class MingcuteRefresh3LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteRefresh4AiFillIcon],svg[mingcute-refresh-4-ai-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M3 9.5A1.5 1.5 0 0 1 4.5 11a5.5 5.5 0 0 0 5.279 5.496L10 16.5h2.382a1.5 1.5 0 0 1 2.065-2.164l.114.103l2.525 2.526a1.495 1.495 0 0 1 .07 1.99l-.097.108l-2.498 2.498a1.5 1.5 0 0 1-2.272-1.947l.093-.114H10A8.5 8.5 0 0 1 1.5 11A1.5 1.5 0 0 1 3 9.5M19 7a1 1 0 0 1 .898.56l.048.117l.13.378a3 3 0 0 0 1.684 1.8l.185.07l.378.129a1 1 0 0 1 .118 1.844l-.118.048l-.378.13a3 3 0 0 0-1.8 1.684l-.07.185l-.129.378a1 1 0 0 1-1.844.118l-.048-.118l-.13-.378a3 3 0 0 0-1.684-1.8l-.185-.07l-.378-.129a1 1 0 0 1-.118-1.844l.118-.048l.378-.13a3 3 0 0 0 1.8-1.684l.07-.185l.129-.378A1 1 0 0 1 19 7M7.44 2.44a1.5 1.5 0 0 1 2.27 1.946l-.092.114H12a8.46 8.46 0 0 1 4.787 1.475a3 3 0 0 0-.551.86l-.075.196l-.13.378a1 1 0 0 1-.516.58l-.106.043l-.379.129a3 3 0 0 0-.244.096a5.5 5.5 0 0 0-2.483-.749L12 7.5H9.618a1.5 1.5 0 0 1-2.065 2.164L7.44 9.56l-2.5-2.5a1.5 1.5 0 0 1-.103-2.008l.103-.114z"></svg:path></svg:g>`,
})
export class MingcuteRefresh4AiFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteRefresh4AiLineIcon],svg[mingcute-refresh-4-ai-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M4 9a1 1 0 0 1 1 1v1a6 6 0 0 0 6 6h3.586l-.793-.793a1 1 0 0 1 1.414-1.414l2.5 2.5a1 1 0 0 1 .281.555l.012.162a1 1 0 0 1-.297.701l-2.496 2.496a1 1 0 0 1-1.414-1.414l.793-.793H11a8 8 0 0 1-8-8v-1a1 1 0 0 1 1-1m15-2a1 1 0 0 1 .898.56l.048.117l.13.378a3 3 0 0 0 1.684 1.8l.185.07l.378.129a1 1 0 0 1 .118 1.844l-.118.048l-.378.13a3 3 0 0 0-1.8 1.684l-.07.185l-.129.378a1 1 0 0 1-1.844.118l-.048-.118l-.13-.378a3 3 0 0 0-1.684-1.8l-.185-.07l-.378-.129a1 1 0 0 1-.118-1.844l.118-.048l.378-.13a3 3 0 0 0 1.8-1.684l.07-.185l.129-.378A1 1 0 0 1 19 7m0 3.196a5 5 0 0 1-.804.804q.448.355.804.804q.355-.449.804-.804a5 5 0 0 1-.804-.804m-8.793-7.403a1 1 0 0 1 0 1.414L9.414 5H13c1.225 0 2.389.276 3.43.77a1 1 0 0 1-.86 1.807A6 6 0 0 0 13 7H9.414l.793.793a1 1 0 0 1-1.414 1.414l-2.5-2.5a1 1 0 0 1 0-1.414l2.5-2.5a1 1 0 0 1 1.414 0"></svg:path></svg:g>`,
})
export class MingcuteRefresh4AiLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteRefresh4FillIcon],svg[mingcute-refresh-4-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M4 9.5A1.5 1.5 0 0 1 5.5 11a5.5 5.5 0 0 0 5.279 5.496L11 16.5h2.382a1.5 1.5 0 0 1 2.065-2.164l.114.103l2.5 2.5a1.5 1.5 0 0 1 .43.89l.009.157v.028a1.5 1.5 0 0 1-.348.947l-.097.105l-2.494 2.495a1.5 1.5 0 0 1-2.272-1.947l.093-.114H11A8.5 8.5 0 0 1 2.5 11A1.5 1.5 0 0 1 4 9.5m4.44-7.06a1.5 1.5 0 0 1 2.27 1.946l-.092.114H13a8.5 8.5 0 0 1 8.5 8.5a1.5 1.5 0 1 1-3 0a5.5 5.5 0 0 0-5.279-5.496L13 7.5h-2.382a1.5 1.5 0 0 1-2.065 2.164L8.44 9.56l-2.5-2.5a1.5 1.5 0 0 1-.103-2.008l.103-.114l2.5-2.5Z"></svg:path></svg:g>`,
})
export class MingcuteRefresh4FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteRefresh4LineIcon],svg[mingcute-refresh-4-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M4 9a1 1 0 0 1 .993.883L5 10v1a6 6 0 0 0 5.775 5.996L11 17h3.586l-.793-.793a1 1 0 0 1 1.32-1.497l.094.083l2.5 2.5a1 1 0 0 1 .281.555l.012.162a1 1 0 0 1-.212.606l-.085.095l-2.496 2.496a1 1 0 0 1-1.497-1.32l.083-.094l.793-.793H11a8 8 0 0 1-7.996-7.75L3 11v-1a1 1 0 0 1 1-1m4.793-6.207a1 1 0 0 1 1.497 1.32l-.083.094L9.414 5H13a8 8 0 0 1 7.996 7.75L21 13v1a1 1 0 0 1-1.993.117L19 14v-1a6 6 0 0 0-5.775-5.996L13 7H9.414l.793.793a1 1 0 0 1-1.32 1.497l-.094-.083l-2.5-2.5a1 1 0 0 1-.083-1.32l.083-.094z"></svg:path></svg:g>`,
})
export class MingcuteRefresh4LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteRefreshAnticlockwise1FillIcon],svg[mingcute-refresh-anticlockwise-1-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M13.3 19.374a7.5 7.5 0 0 1-7.881-3.779a1.5 1.5 0 0 0-2.63 1.443c2.102 3.835 6.48 6.093 11.032 5.29c5.71-1.006 9.524-6.452 8.517-12.163C21.33 4.454 15.885.64 10.174 1.648a10.5 10.5 0 0 0-8.632 9.343C1.418 12.3 2.808 13.15 3.91 12.54l2.82-1.562c1.547-.856.767-3.219-.986-2.986l-.102.014A7.5 7.5 0 1 1 13.3 19.374"></svg:path></svg:g>`,
})
export class MingcuteRefreshAnticlockwise1FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteRefreshAnticlockwise1LineIcon],svg[mingcute-refresh-anticlockwise-1-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M14.07 19.727a8 8 0 0 1-9.146-3.99a1 1 0 0 0-1.77.933c2.13 4.04 6.836 6.221 11.434 4.99c5.335-1.43 8.5-6.914 7.071-12.248c-1.43-5.335-6.913-8.5-12.247-7.071a10 10 0 0 0-7.414 9.58c-.007.903.995 1.402 1.713.919l2.673-1.801c1.008-.68.332-2.251-.854-1.986l-1.058.236a8 8 0 1 1 9.598 10.439Z"></svg:path></svg:g>`,
})
export class MingcuteRefreshAnticlockwise1LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteRefundCnyFillIcon],svg[mingcute-refund-cny-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M5.367 15.504a7.5 7.5 0 1 0-.046-6.917l.1-.023c1.726-.385 2.709 1.901 1.242 2.889L3.99 13.254c-1.043.703-2.502-.022-2.492-1.336a10.5 10.5 0 0 1 7.784-10.06c5.602-1.501 11.36 1.823 12.86 7.424s-1.823 11.36-7.425 12.86c-4.828 1.294-9.77-.997-12.005-5.24a1.5 1.5 0 1 1 2.655-1.398M8.4 7.2a1 1 0 0 1 1.4.2l2.2 2.933L14.2 7.4a1 1 0 1 1 1.6 1.2L14 11h1a1 1 0 0 1 0 2h-2v1h2a1 1 0 0 1 0 2h-2v1a1 1 0 0 1-2 0v-1H9a1 1 0 1 1 0-2h2v-1H9a1 1 0 1 1 0-2h1L8.2 8.6a1 1 0 0 1 .2-1.4"></svg:path></svg:g>`,
})
export class MingcuteRefundCnyFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteRefundCnyLineIcon],svg[mingcute-refund-cny-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M21.66 9.412c1.428 5.334-1.737 10.818-7.072 12.247c-4.598 1.232-9.304-.95-11.433-4.99a1 1 0 0 1 1.77-.932a8 8 0 1 0-.452-6.449l1.057-.235c1.186-.265 1.862 1.306.854 1.985L3.711 12.84c-.718.483-1.72-.016-1.713-.918a10 10 0 0 1 7.414-9.58C14.746.91 20.23 4.076 21.659 9.41M15.6 7.2a1 1 0 0 1 .2 1.4L14 11h1a1 1 0 0 1 0 2h-2v1h2a1 1 0 0 1 0 2h-2v1a1 1 0 0 1-2 0v-1H9a1 1 0 0 1 0-2h2v-1H9a1 1 0 0 1 0-2h1L8.2 8.6a1 1 0 1 1 1.6-1.2l2.2 2.933L14.2 7.4a1 1 0 0 1 1.4-.2"></svg:path></svg:g>`,
})
export class MingcuteRefundCnyLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteRefundDollarFillIcon],svg[mingcute-refund-dollar-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M22.142 9.282c1.5 5.602-1.823 11.36-7.425 12.86c-4.828 1.294-9.77-.997-12.005-5.24a1.5 1.5 0 1 1 2.655-1.398a7.5 7.5 0 1 0-.046-6.917l.1-.023c1.726-.385 2.709 1.901 1.242 2.889L3.99 13.254c-1.043.703-2.502-.022-2.492-1.336a10.5 10.5 0 0 1 7.784-10.06c5.602-1.501 11.36 1.823 12.86 7.424M12 6a1 1 0 0 1 1 1v1h2a1 1 0 1 1 0 2h-5a.5.5 0 1 0 0 1h4a2.5 2.5 0 0 1 0 5h-1v1a1 1 0 1 1-2 0v-1H9a1 1 0 1 1 0-2h5a.5.5 0 0 0 0-1h-4a2.5 2.5 0 0 1 0-5h1V7a1 1 0 0 1 1-1"></svg:path></svg:g>`,
})
export class MingcuteRefundDollarFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteRefundDollarLineIcon],svg[mingcute-refund-dollar-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M21.66 9.412c1.428 5.334-1.737 10.818-7.072 12.247c-4.598 1.232-9.304-.95-11.433-4.99a1 1 0 0 1 1.77-.932a8 8 0 1 0-.452-6.449l1.057-.235c1.186-.265 1.862 1.306.854 1.985L3.711 12.84c-.718.483-1.72-.016-1.713-.918a10 10 0 0 1 7.414-9.58C14.746.91 20.23 4.076 21.659 9.41M12 6a1 1 0 0 1 1 1v1h2a1 1 0 1 1 0 2h-5a.5.5 0 0 0 0 1h4a2.5 2.5 0 0 1 0 5h-1v1a1 1 0 1 1-2 0v-1H9a1 1 0 1 1 0-2h5a.5.5 0 0 0 0-1h-4a2.5 2.5 0 0 1 0-5h1V7a1 1 0 0 1 1-1"></svg:path></svg:g>`,
})
export class MingcuteRefundDollarLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteRegisteredFillIcon],svg[mingcute-registered-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" fill-rule="nonzero" d="M11 12h1.5a1.5 1.5 0 0 0 0-3H11z"></svg:path><svg:path fill="currentColor" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12m7-4a1 1 0 0 1 1-1h2.5a3.5 3.5 0 0 1 1.966 6.396l1.366 2.05a1 1 0 0 1-1.664 1.109L12.465 14H11v2a1 1 0 1 1-2 0z"></svg:path></svg:g>`,
})
export class MingcuteRegisteredFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteRegisteredLineIcon],svg[mingcute-registered-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2m0 2a8 8 0 1 0 0 16a8 8 0 0 0 0-16m.5 3a3.5 3.5 0 0 1 1.966 6.396l1.366 2.05a1 1 0 0 1-1.664 1.109L12.465 14H11v2a1 1 0 1 1-2 0V8a1 1 0 0 1 1-1zm0 2H11v3h1.5a1.5 1.5 0 0 0 0-3"></svg:path></svg:g>`,
})
export class MingcuteRegisteredLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteRemoteControlFillIcon],svg[mingcute-remote-control-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M16 2a3 3 0 0 1 2.995 2.824L19 5v14a3 3 0 0 1-2.824 2.995L16 22H8a3 3 0 0 1-2.995-2.824L5 19V5a3 3 0 0 1 2.824-2.995L8 2zm-2 15h-.5a1 1 0 1 0 0 2h.5a1 1 0 1 0 0-2m-3.5 0H10a1 1 0 0 0-.117 1.993L10 19h.5a1 1 0 0 0 .117-1.993zm3.5-3h-.5a1 1 0 1 0 0 2h.5a1 1 0 1 0 0-2m-3.5 0H10a1 1 0 0 0-.117 1.993L10 16h.5a1 1 0 0 0 .117-1.993zM12 5a3.5 3.5 0 1 0 0 7a3.5 3.5 0 0 0 0-7m0 2a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3"></svg:path></svg:g>`,
})
export class MingcuteRemoteControlFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteRemoteControlLineIcon],svg[mingcute-remote-control-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M16 2a3 3 0 0 1 2.995 2.824L19 5v14a3 3 0 0 1-2.824 2.995L16 22H8a3 3 0 0 1-2.995-2.824L5 19V5a3 3 0 0 1 2.824-2.995L8 2zm0 2H8a1 1 0 0 0-.993.883L7 5v14a1 1 0 0 0 .883.993L8 20h8a1 1 0 0 0 .993-.883L17 19V5a1 1 0 0 0-1-1m-2 12a1 1 0 0 1 .117 1.993L14 18h-.5a1 1 0 0 1-.117-1.993L13.5 16zm-3.5 0a1 1 0 1 1 0 2H10a1 1 0 1 1 0-2zm3.5-3a1 1 0 0 1 .117 1.993L14 15h-.5a1 1 0 0 1-.117-1.993L13.5 13zm-3.5 0a1 1 0 1 1 0 2H10a1 1 0 1 1 0-2zM12 5a3.5 3.5 0 1 1 0 7a3.5 3.5 0 0 1 0-7m0 2a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3"></svg:path></svg:g>`,
})
export class MingcuteRemoteControlLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteRemoteFillIcon],svg[mingcute-remote-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M16 12a3 3 0 0 1 3 3v6c0 .552-.45 1-1.003 1H6a1 1 0 0 1-1-1v-6a3 3 0 0 1 3-3zm-2 4h-4a1 1 0 0 0-.117 1.993L10 18h4a1 1 0 0 0 .117-1.993zm-2-8c1.06 0 2.047.331 2.857.896a1 1 0 0 1-1.144 1.641A3 3 0 0 0 12 10c-.639 0-1.228.198-1.713.537a1 1 0 1 1-1.144-1.64A5 5 0 0 1 12 8m0-3c1.918 0 3.681.676 5.06 1.803a1 1 0 0 1-1.266 1.548A5.97 5.97 0 0 0 12 7c-1.44 0-2.758.506-3.792 1.35a1 1 0 1 1-1.265-1.549A7.97 7.97 0 0 1 12 5m0-3a10.96 10.96 0 0 1 7.209 2.691a1 1 0 0 1-1.311 1.51A8.96 8.96 0 0 0 12 4a8.95 8.95 0 0 0-5.9 2.205a1 1 0 0 1-1.312-1.51A10.96 10.96 0 0 1 12 2"></svg:path></svg:g>`,
})
export class MingcuteRemoteFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteRemoteLineIcon],svg[mingcute-remote-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M16 12a3 3 0 0 1 3 3v6a1 1 0 1 1-2 0v-6a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v6a1 1 0 1 1-2 0v-6a3 3 0 0 1 3-3zm-2 4a1 1 0 0 1 .117 1.993L14 18h-4a1 1 0 0 1-.117-1.993L10 16zm-2-8c1.06 0 2.047.331 2.857.896a1 1 0 0 1-1.144 1.641A3 3 0 0 0 12 10c-.639 0-1.228.198-1.713.537a1 1 0 1 1-1.144-1.64A5 5 0 0 1 12 8m0-3c1.918 0 3.681.676 5.06 1.803a1 1 0 1 1-1.266 1.548A5.97 5.97 0 0 0 12 7c-1.44 0-2.758.506-3.792 1.35a1 1 0 1 1-1.265-1.549A7.97 7.97 0 0 1 12 5m0-3a10.96 10.96 0 0 1 7.209 2.691a1 1 0 0 1-1.311 1.51A8.96 8.96 0 0 0 12 4a8.95 8.95 0 0 0-5.9 2.205a1 1 0 0 1-1.312-1.51A10.96 10.96 0 0 1 12 2"></svg:path></svg:g>`,
})
export class MingcuteRemoteLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteRepeatFillIcon],svg[mingcute-repeat-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="M0 0v24h24V0zm11.407 23.258l.011.002l.071.035l.02.004l.014-.004l.071-.036q.016-.004.024.006l.004.01l.017.428l-.005.02l-.01.013l-.104.074l-.015.004l-.012-.004l-.104-.074l-.012-.016l-.004-.017l.017-.427q.004-.016.016-.018Zm-.265-.113l.014.002l.184.093l.01.01l.003.011l-.018.43l-.005.012l-.008.008l-.201.092a.03.03 0 0 1-.029-.008l-.004-.014l.034-.614q.005-.018.02-.022m.715.002a.02.02 0 0 1 .027.006l.006.014l.034.614q-.001.018-.017.024l-.015-.002l-.201-.093l-.01-.008l-.003-.011l-.018-.43l.003-.012l.01-.01z"></svg:path><svg:path fill="currentColor" d="M20 9.5a1.5 1.5 0 0 1 1.493 1.356L21.5 11v4a4.5 4.5 0 0 1-4.288 4.495L17 19.5H8.56l-.02.312l-.011.14c-.056.719-.749 1.17-1.331.865l-.314-.168l-.368-.209l-.203-.119l-.439-.269a21 21 0 0 1-.922-.617l-.385-.28l-.323-.245l-.137-.107c-.489-.39-.47-1.195.05-1.606l.136-.107l.32-.242l.38-.275l.438-.301a22 22 0 0 1 .714-.457l.426-.255l.375-.211l.316-.17c.577-.3 1.207.085 1.262.756l.038.565H17a1.5 1.5 0 0 0 1.493-1.356L18.5 15v-4A1.5 1.5 0 0 1 20 9.5m-3.198-6.317l.314.168l.368.209q.1.056.203.119l.439.269a21 21 0 0 1 .922.617l.385.28l.323.245l.137.107c.489.39.47 1.195-.05 1.606l-.136.107l-.32.242l-.38.275a22 22 0 0 1-1.152.758l-.426.255l-.375.211l-.316.17c-.577.3-1.207-.085-1.261-.756l-.04-.565H7A1.5 1.5 0 0 0 5.5 9v4a1.5 1.5 0 0 1-3 0V9A4.5 4.5 0 0 1 7 4.5h8.44l.031-.452c.056-.719.749-1.17 1.331-.865"></svg:path></svg:g>`,
})
export class MingcuteRepeatFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteRepeatLineIcon],svg[mingcute-repeat-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="M0 0v24h24V0zm11.407 23.258l.011.002l.071.035l.02.004l.014-.004l.071-.036q.016-.004.024.006l.004.01l.017.428l-.005.02l-.01.013l-.104.074l-.015.004l-.012-.004l-.104-.074l-.012-.016l-.004-.017l.017-.427q.004-.016.016-.018Zm-.265-.113l.014.002l.184.093l.01.01l.003.011l-.018.43l-.005.012l-.008.008l-.201.092a.03.03 0 0 1-.029-.008l-.004-.014l.034-.614q.005-.018.02-.022m.715.002a.02.02 0 0 1 .027.006l.006.014l.034.614q-.001.018-.017.024l-.015-.002l-.201-.093l-.01-.008l-.003-.011l-.018-.43l.003-.012l.01-.01z"></svg:path><svg:path fill="currentColor" d="M20 9a1 1 0 0 1 .993.883L21 10v5a4 4 0 0 1-3.8 3.995L17 19H8.107l-.02.415l-.034.519c-.027.346-.352.557-.631.41l-.306-.164l-.36-.203l-.198-.117l-.43-.263l-.229-.147l-.463-.31l-.21-.147l-.377-.273l-.315-.24l-.133-.104c-.236-.188-.225-.566.023-.762l.28-.217l.34-.252l.4-.282l.456-.305l.462-.291l.416-.249l.365-.205l.307-.165c.275-.143.571.036.598.36l.025.347l.024.415l.01.23H17a2 2 0 0 0 1.995-1.85L19 15v-5a1 1 0 0 1 1-1m-3.422-5.345l.306.165l.36.203l.198.117l.43.263l.229.147l.463.31l.21.147l.377.273l.315.24l.133.104c.236.188.225.566-.023.762l-.28.217l-.34.252l-.4.282l-.456.305l-.462.291l-.416.249l-.365.205l-.307.165c-.275.143-.572-.036-.598-.36l-.025-.347l-.024-.415l-.01-.23H7a2 2 0 0 0-2 2v5a1 1 0 1 1-2 0V9a4 4 0 0 1 4-4h8.893l.02-.415l.022-.36l.012-.159c.027-.346.352-.557.631-.41Z"></svg:path></svg:g>`,
})
export class MingcuteRepeatLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteRepeatOneFillIcon],svg[mingcute-repeat-one-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="M0 0v24h24V0zm11.407 23.258l.011.002l.071.035l.02.004l.014-.004l.071-.036q.016-.004.024.006l.004.01l.017.428l-.005.02l-.01.013l-.104.074l-.015.004l-.012-.004l-.104-.074l-.012-.016l-.004-.017l.017-.427q.004-.016.016-.018Zm-.265-.113l.014.002l.184.093l.01.01l.003.011l-.018.43l-.005.012l-.008.008l-.201.092a.03.03 0 0 1-.029-.008l-.004-.014l.034-.614q.005-.018.02-.022m.715.002a.02.02 0 0 1 .027.006l.006.014l.034.614q-.001.018-.017.024l-.015-.002l-.201-.093l-.01-.008l-.003-.011l-.018-.43l.003-.012l.01-.01z"></svg:path><svg:path fill="currentColor" d="M15.471 3.048c.056-.719.749-1.17 1.331-.865l.314.168l.368.209q.1.056.203.119l.439.269a21 21 0 0 1 .922.617l.385.28l.323.245l.137.107c.489.39.47 1.195-.05 1.606l-.136.107l-.32.242l-.38.275a22 22 0 0 1-1.152.758l-.426.255l-.375.211l-.316.17c-.577.3-1.207-.085-1.261-.756l-.04-.565H7a1.5 1.5 0 0 0-1.493 1.356L5.5 8v8a1.5 1.5 0 0 0 1.356 1.493L7 17.5h10a1.5 1.5 0 0 0 1.493-1.356L18.5 16v-5a1.5 1.5 0 0 1 2.993-.144L21.5 11v5a4.5 4.5 0 0 1-4.288 4.495L17 20.5H7a4.5 4.5 0 0 1-4.495-4.288L2.5 16V8a4.5 4.5 0 0 1 4.288-4.495L7 3.5h8.44zm-1.971 6.97V15a1.5 1.5 0 0 1-3 0v-2.5a1.5 1.5 0 0 1-.832-2.748l1.484-.99c1.004-.669 2.348.05 2.348 1.257Z"></svg:path></svg:g>`,
})
export class MingcuteRepeatOneFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteRepeatOneLineIcon],svg[mingcute-repeat-one-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="M0 0v24h24V0zm11.407 23.258l.011.002l.071.035l.02.004l.014-.004l.071-.036q.016-.004.024.006l.004.01l.017.428l-.005.02l-.01.013l-.104.074l-.015.004l-.012-.004l-.104-.074l-.012-.016l-.004-.017l.017-.427q.004-.016.016-.018Zm-.265-.113l.014.002l.184.093l.01.01l.003.011l-.018.43l-.005.012l-.008.008l-.201.092a.03.03 0 0 1-.029-.008l-.004-.014l.034-.614q.005-.018.02-.022m.715.002a.02.02 0 0 1 .027.006l.006.014l.034.614q-.001.018-.017.024l-.015-.002l-.201-.093l-.01-.008l-.003-.011l-.018-.43l.003-.012l.01-.01z"></svg:path><svg:path fill="currentColor" d="M15.947 3.066c.027-.346.352-.557.631-.41l.306.164l.36.203l.198.117l.43.263l.229.147l.463.31l.21.147l.377.273l.315.24l.133.104c.236.188.225.566-.023.762l-.28.217l-.34.252l-.4.282l-.456.305l-.462.291l-.416.249l-.365.205l-.307.165c-.275.143-.572-.036-.598-.36l-.025-.347l-.024-.415l-.01-.23H7a2 2 0 0 0-1.995 1.85L5 8v8a2 2 0 0 0 1.85 1.995L7 18h10a2 2 0 0 0 1.995-1.85L19 16v-5a1 1 0 0 1 1.993-.117L21 11v5a4 4 0 0 1-3.8 3.995L17 20H7a4 4 0 0 1-3.995-3.8L3 16V8a4 4 0 0 1 3.8-3.995L7 4h8.893l.02-.415l.022-.36zM13 10.019V15a1 1 0 1 1-2 0v-3.134a1 1 0 0 1-1.055-1.698l1.485-.99a1.01 1.01 0 0 1 1.57.84Z"></svg:path></svg:g>`,
})
export class MingcuteRepeatOneLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteReportFillIcon],svg[mingcute-report-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M12 7a6 6 0 0 1 5.996 5.775L18 13v7h1a1 1 0 0 1 .117 1.993L19 22H5a1 1 0 0 1-.117-1.993L5 20h1v-7a6 6 0 0 1 6-6m-.857 4.986L9.652 14.47a1.01 1.01 0 0 0 .866 1.53h1.216l-.591.985a1 1 0 0 0 1.714 1.03l1.491-2.485a1.01 1.01 0 0 0-.866-1.53h-1.216l.591-.985a1 1 0 0 0-1.714-1.03ZM5.542 5.139l.094.083l.707.707a1 1 0 0 1-1.32 1.497l-.094-.083l-.707-.707a1 1 0 0 1 1.32-1.497m14.236.083a1 1 0 0 1 0 1.414l-.707.707a1 1 0 1 1-1.414-1.414l.707-.707a1 1 0 0 1 1.414 0M12 2a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1"></svg:path></svg:g>`,
})
export class MingcuteReportFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteReportFormsFillIcon],svg[mingcute-report-forms-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M10 21h9a2 2 0 0 0 2-2v-2H10zm0-6h11v-5H10zm-2-5v5H3v-5zm2-2h11V6a2 2 0 0 0-2-2h-9zM8 4v4H3V6a2 2 0 0 1 2-2zm0 13v4H5a2 2 0 0 1-2-2v-2z"></svg:path></svg:g>`,
})
export class MingcuteReportFormsFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteReportFormsLineIcon],svg[mingcute-report-forms-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M19 4a2 2 0 0 1 1.995 1.85L21 6v13a2 2 0 0 1-1.85 1.995L19 21H5a2 2 0 0 1-1.995-1.85L3 19V6a2 2 0 0 1 1.85-1.995L5 4zM8 16H5v3h3zm11 0h-9v3h9zM8 11H5v3h3zm11 0h-9v3h9zM8 6H5v3h3zm11 0h-9v3h9z"></svg:path></svg:g>`,
})
export class MingcuteReportFormsLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteReportLineIcon],svg[mingcute-report-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M12 7a6 6 0 0 1 5.996 5.775L18 13v7h1a1 1 0 0 1 .117 1.993L19 22H5a1 1 0 0 1-.117-1.993L5 20h1v-7a6 6 0 0 1 6-6m0 2a4 4 0 0 0-4 4v7h8v-7a4 4 0 0 0-4-4m.515 2.643a1 1 0 0 1 .342 1.371l-.59.986h1.215c.785 0 1.27.857.866 1.53l-1.49 2.485a1 1 0 0 1-1.716-1.03l.592-.985h-1.216a1.01 1.01 0 0 1-.866-1.53l1.49-2.485a1 1 0 0 1 1.373-.342M5.636 5.222l.707.707A1 1 0 0 1 4.93 7.343l-.707-.707a1 1 0 1 1 1.414-1.414Zm14.142 0a1 1 0 0 1 .083 1.32l-.083.094l-.707.707a1 1 0 0 1-1.497-1.32l.083-.094l.707-.707a1 1 0 0 1 1.414 0M12 2a1 1 0 0 1 .993.883L13 3v1a1 1 0 0 1-1.993.117L11 4V3a1 1 0 0 1 1-1"></svg:path></svg:g>`,
})
export class MingcuteReportLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteRestAreaFillIcon],svg[mingcute-rest-area-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M8 2a3 3 0 1 0 0 6a3 3 0 0 0 0-6m8 0a3 3 0 1 0 0 6a3 3 0 0 0 0-6M4.103 11.181A2 2 0 0 1 6.095 9h3.81a2 2 0 0 1 1.992 2.181l-.901 9.91A1 1 0 0 1 10 22H6a1 1 0 0 1-.996-.91zM14.82 9a2 2 0 0 0-1.961 1.608l-.84 4.196A1 1 0 0 0 13 16v5a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-5a1 1 0 0 0 .98-1.196l-.838-4.196A2 2 0 0 0 17.18 9z"></svg:path></svg:g>`,
})
export class MingcuteRestAreaFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteRestAreaLineIcon],svg[mingcute-rest-area-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M8 2a3 3 0 1 0 0 6a3 3 0 0 0 0-6M7 5a1 1 0 1 1 2 0a1 1 0 0 1-2 0m9-3a3 3 0 1 0 0 6a3 3 0 0 0 0-6m-1 3a1 1 0 1 1 2 0a1 1 0 0 1-2 0M4.103 11.181A2 2 0 0 1 6.095 9h3.81a2 2 0 0 1 1.992 2.181l-.901 9.91A1 1 0 0 1 10 22H6a1 1 0 0 1-.996-.91zM6.095 11l.818 9h2.174l.818-9zm8.725-2a2 2 0 0 0-1.961 1.608l-.84 4.196A1 1 0 0 0 13 16v5a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-5a1 1 0 0 0 .98-1.196l-.838-4.196A2 2 0 0 0 17.18 9zm.18 6a1 1 0 0 0-.785-.977L14.82 11h2.36l.605 3.023A1 1 0 0 0 17 15v5h-2z"></svg:path></svg:g>`,
})
export class MingcuteRestAreaLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteRestoreFillIcon],svg[mingcute-restore-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M19 2.5a2.5 2.5 0 0 1 2.495 2.336L21.5 5v10a2.5 2.5 0 0 1-2.336 2.495L19 17.5h-1.5V19a2.5 2.5 0 0 1-2.336 2.495L15 21.5H5a2.5 2.5 0 0 1-2.495-2.336L2.5 19V9a2.5 2.5 0 0 1 2.336-2.495L5 6.5h1.5V5a2.5 2.5 0 0 1 2.336-2.495L9 2.5zm-4.5 7h-9v9h9zm4-4h-9v1H15l.164.005a2.5 2.5 0 0 1 2.33 2.33L17.5 9v5.5h1z"></svg:path></svg:g>`,
})
export class MingcuteRestoreFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteRestoreLineIcon],svg[mingcute-restore-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M19 3a2 2 0 0 1 1.995 1.85L21 5v10a2 2 0 0 1-1.85 1.995L19 17h-2v2a2 2 0 0 1-1.85 1.995L15 21H5a2 2 0 0 1-1.995-1.85L3 19V9a2 2 0 0 1 1.85-1.995L5 7h2V5a2 2 0 0 1 1.85-1.995L9 3zm-4 6H5v10h10zm4-4H9v2h6l.15.005a2 2 0 0 1 1.844 1.838L17 9v6h2z"></svg:path></svg:g>`,
})
export class MingcuteRestoreLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteRewindBackward10FillIcon],svg[mingcute-rewind-backward-10-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M5.439.501a1.5 1.5 0 0 1 1.499 1.07l.033.134l.191.953a10.46 10.46 0 0 1 7.15-.926c5.656 1.275 9.209 6.895 7.934 12.552s-6.895 9.21-12.552 7.934C4.818 21.12 1.508 16.795 1.501 12a1.5 1.5 0 0 1 3-.004a7.5 7.5 0 1 0 1.66-4.727a1.5 1.5 0 0 1-2.666-.975l.01-.142l.505-4.325A1.5 1.5 0 0 1 5.44.5m3.769 6.677A1.5 1.5 0 0 1 10 8.5v7a1.5 1.5 0 0 1-3 0V11a1.5 1.5 0 0 1-.832-2.748l1.5-1a1.5 1.5 0 0 1 1.54-.074M14.5 7a3.5 3.5 0 0 1 3.495 3.308L18 10.5v3a3.5 3.5 0 0 1-6.995.192L11 13.5v-3A3.5 3.5 0 0 1 14.5 7m0 3a.5.5 0 0 0-.492.41L14 10.5v3a.5.5 0 0 0 .992.09L15 13.5v-3a.5.5 0 0 0-.5-.5"></svg:path></svg:g>`,
})
export class MingcuteRewindBackward10FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteRewindBackward10LineIcon],svg[mingcute-rewind-backward-10-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M5.46 1a1 1 0 0 1 .992.694l.028.11l.327 1.627a9.97 9.97 0 0 1 7.394-1.211c5.388 1.214 8.771 6.566 7.557 11.954c-1.214 5.387-6.566 8.77-11.954 7.557c-4.644-1.047-7.797-5.166-7.803-9.733a1 1 0 1 1 2-.003a8 8 0 1 0 1.772-5.042a1 1 0 0 1-1.779-.624l.007-.12l.506-4.325A1 1 0 0 1 5.459 1m4.012 6.618A1 1 0 0 1 10 8.5v7a1 1 0 0 1-2 0v-5.134a1 1 0 0 1-1.054-1.698l1.5-1a1 1 0 0 1 1.026-.05M14 7.5a3 3 0 0 1 2.995 2.824L17 10.5v3a3 3 0 0 1-5.995.176L11 13.5v-3a3 3 0 0 1 3-3m0 2a1 1 0 0 0-.993.884L13 10.5v3a1 1 0 0 0 1.993.117L15 13.5v-3a1 1 0 0 0-1-1"></svg:path></svg:g>`,
})
export class MingcuteRewindBackward10LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteRewindBackward15FillIcon],svg[mingcute-rewind-backward-15-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M5.439.501a1.5 1.5 0 0 1 1.499 1.07l.033.134l.191.953a10.46 10.46 0 0 1 7.15-.926c5.656 1.275 9.209 6.895 7.934 12.552s-6.895 9.21-12.552 7.934C4.818 21.12 1.508 16.795 1.501 12a1.5 1.5 0 0 1 3-.004a7.5 7.5 0 1 0 1.66-4.727a1.5 1.5 0 0 1-2.666-.975l.01-.142l.505-4.325A1.5 1.5 0 0 1 5.44.5m10.134 6.497a1.5 1.5 0 0 1 .144 2.993l-.144.007h-1.565v.178h.032c2.025 0 3.416 1.577 3.416 3.416a3.416 3.416 0 0 1-3.416 3.416c-.44 0-.905-.103-1.282-.225c-.361-.117-.836-.315-1.213-.626a1.5 1.5 0 0 1 1.888-2.331l.064.031l.117.048l.142.046l.137.032l.147.025l.084-.009a.416.416 0 0 0 .332-.407a.44.44 0 0 0-.105-.312c-.042-.042-.126-.104-.31-.104l-1.533.004a1.5 1.5 0 0 1-1.493-1.355l-.007-.145V8.898a1.9 1.9 0 0 1 1.751-1.895l.149-.005zm-6.365.18A1.5 1.5 0 0 1 10 8.5v7a1.5 1.5 0 0 1-3 0V11a1.5 1.5 0 0 1-.832-2.748l1.5-1a1.5 1.5 0 0 1 1.54-.074"></svg:path></svg:g>`,
})
export class MingcuteRewindBackward15FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteRewindBackward15LineIcon],svg[mingcute-rewind-backward-15-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M5.46 1a1 1 0 0 1 .992.694l.028.11l.327 1.627a9.97 9.97 0 0 1 7.394-1.211c5.388 1.214 8.771 6.566 7.557 11.954c-1.214 5.387-6.566 8.77-11.954 7.557c-4.644-1.047-7.797-5.166-7.803-9.733a1 1 0 1 1 2-.003a8 8 0 1 0 1.772-5.042a1 1 0 0 1-1.779-.624l.007-.12l.506-4.325A1 1 0 0 1 5.459 1m4.012 6.618A1 1 0 0 1 10 8.5v7a1 1 0 0 1-2 0v-5.134a1 1 0 0 1-1.054-1.698l1.5-1a1 1 0 0 1 1.026-.05m6.291-.118a1 1 0 0 1 .117 1.993l-.117.007h-2.5v.696a4 4 0 0 1 .75-.07c1.896 0 3.188 1.458 3.188 3.187a3.188 3.188 0 0 1-6.11 1.275a1 1 0 0 1 1.78-.905l.053.104a1.188 1.188 0 0 0 2.277-.474c0-.688-.459-1.188-1.188-1.188a3 3 0 0 0-.887.168l-.212.077l-.207.089a1 1 0 0 1-1.436-.768l-.008-.128V9a1.5 1.5 0 0 1 1.356-1.493l.144-.007z"></svg:path></svg:g>`,
})
export class MingcuteRewindBackward15LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteRewindBackward30FillIcon],svg[mingcute-rewind-backward-30-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M5.439.501a1.5 1.5 0 0 1 1.499 1.07l.033.134l.191.953a10.46 10.46 0 0 1 7.15-.926c5.656 1.275 9.209 6.895 7.934 12.552s-6.895 9.21-12.552 7.934C4.818 21.12 1.508 16.795 1.501 12a1.5 1.5 0 0 1 3-.004a7.5 7.5 0 1 0 1.66-4.727a1.5 1.5 0 0 1-2.666-.975l.01-.142l.505-4.325A1.5 1.5 0 0 1 5.44.5M15.449 7a3.25 3.25 0 0 1 3.246 3.066l.005.184v3.5a3.25 3.25 0 0 1-6.495.185l-.005-.185v-3.5A3.25 3.25 0 0 1 15.45 7M8.48 7a3.22 3.22 0 0 1 2.696 4.983a3.199 3.199 0 0 1-2.674 4.955H8.2c-1.327 0-2.426-.877-2.87-1.924a1.5 1.5 0 0 1 2.76-1.172a.2.2 0 0 0 .115.096h.296a.2.2 0 0 0 .136-.345l-.11-.103a1.5 1.5 0 0 1-.03-2.976l.138-.137A.22.22 0 0 0 8.48 10h-.275a.2.2 0 0 0-.114.096a1.5 1.5 0 1 1-2.762-1.172C5.774 7.876 6.874 7 8.2 7zm6.97 3a.25.25 0 0 0-.242.193l-.007.057v3.5a.25.25 0 0 0 .493.057l.007-.057v-3.5a.25.25 0 0 0-.25-.25"></svg:path></svg:g>`,
})
export class MingcuteRewindBackward30FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteRewindBackward30LineIcon],svg[mingcute-rewind-backward-30-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M5.46 1a1 1 0 0 1 .992.694l.028.11l.327 1.627a9.97 9.97 0 0 1 7.394-1.211c5.388 1.214 8.771 6.566 7.557 11.954c-1.214 5.387-6.566 8.77-11.954 7.557c-4.644-1.047-7.797-5.166-7.803-9.733a1 1 0 1 1 2-.003a8 8 0 1 0 1.772-5.042a1 1 0 0 1-1.779-.624l.007-.12l.506-4.325A1 1 0 0 1 5.459 1M15 7.5a2.5 2.5 0 0 1 2.495 2.336L17.5 10v4a2.5 2.5 0 0 1-4.995.165L12.5 14v-4A2.5 2.5 0 0 1 15 7.5m-6.22 0a2.72 2.72 0 0 1 2.072 4.484A2.7 2.7 0 0 1 8.8 16.438h-.3c-.921 0-1.753-.55-2.113-1.399l-.093-.22a1 1 0 0 1 1.84-.782l.095.221c.046.109.153.18.27.18h.302a.7.7 0 0 0 .477-1.21l-.062-.058a.64.64 0 0 0-.336-.163L8.786 13a1 1 0 0 1-.117-1.993L8.786 11c.148 0 .29-.058.395-.163l.106-.105A.72.72 0 0 0 8.779 9.5H8.5a.3.3 0 0 0-.271.18l-.094.22a1 1 0 0 1-1.841-.78l.094-.221A2.3 2.3 0 0 1 8.5 7.5zm6.22 2a.5.5 0 0 0-.492.41L14.5 10v4a.5.5 0 0 0 .992.09L15.5 14v-4a.5.5 0 0 0-.5-.5"></svg:path></svg:g>`,
})
export class MingcuteRewindBackward30LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteRewindBackward5FillIcon],svg[mingcute-rewind-backward-5-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="m6.97 1.705l.192.953a10.46 10.46 0 0 1 7.15-.926c5.656 1.275 9.209 6.895 7.934 12.552s-6.895 9.21-12.552 7.934C4.818 21.12 1.508 16.795 1.501 12a1.5 1.5 0 0 1 3-.004a7.5 7.5 0 1 0 1.66-4.727A1.5 1.5 0 0 1 3.506 6.15l.505-4.325a1.5 1.5 0 0 1 2.96-.121m6.603 5.293a1.5 1.5 0 0 1 .144 2.993l-.144.007h-1.565v.178h.032c2.025 0 3.416 1.577 3.416 3.416a3.416 3.416 0 0 1-3.416 3.416c-.44 0-.905-.103-1.282-.225c-.361-.117-.836-.315-1.213-.626a1.5 1.5 0 0 1 1.888-2.331l.064.031l.117.048l.142.046l.137.032l.147.025c.23 0 .416-.186.416-.416a.44.44 0 0 0-.105-.312c-.042-.042-.126-.104-.31-.104l-1.533.004a1.5 1.5 0 0 1-1.493-1.355l-.007-.145V8.898a1.9 1.9 0 0 1 1.751-1.895l.149-.005z"></svg:path></svg:g>`,
})
export class MingcuteRewindBackward5FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteRewindBackward5LineIcon],svg[mingcute-rewind-backward-5-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M5.46 1a1 1 0 0 1 .992.694l.028.11l.327 1.627a9.97 9.97 0 0 1 7.394-1.211c5.388 1.214 8.771 6.566 7.557 11.954c-1.214 5.387-6.566 8.77-11.954 7.557c-4.644-1.047-7.797-5.166-7.803-9.733a1 1 0 1 1 2-.003a8 8 0 1 0 1.772-5.042a1 1 0 0 1-1.779-.624l.007-.12l.506-4.325A1 1 0 0 1 5.459 1m8.303 6.5a1 1 0 1 1 0 2h-2.5v.696c.235-.043.489-.07.75-.07c1.896 0 3.188 1.458 3.188 3.187a3.188 3.188 0 0 1-6.11 1.275a1 1 0 0 1 1.78-.905l.053.104a1.188 1.188 0 0 0 2.277-.474c0-.688-.459-1.188-1.188-1.188c-.379 0-.77.104-1.124.252l-.174.078a1 1 0 0 1-1.452-.892V8.938c0-.794.644-1.438 1.438-1.438z"></svg:path></svg:g>`,
})
export class MingcuteRewindBackward5LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteRewindBackwardSquare10FillIcon],svg[mingcute-rewind-backward-square-10-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M8.377 1.283a1.5 1.5 0 0 1 .465 1.888l-.165.329H18A4.5 4.5 0 0 1 22.5 8v8a4.5 4.5 0 0 1-4.5 4.5H6A4.5 4.5 0 0 1 1.5 16v-5a1.5 1.5 0 0 1 3 0v5A1.5 1.5 0 0 0 6 17.5h12a1.5 1.5 0 0 0 1.5-1.5V8A1.5 1.5 0 0 0 18 6.5H5.024c-1.345 0-2.019-1.626-1.068-2.578L6.44 1.44a1.5 1.5 0 0 1 1.938-.156m.83 5.895A1.5 1.5 0 0 1 10 8.5v7a1.5 1.5 0 0 1-3 0V11a1.499 1.499 0 0 1-.832-2.748l1.5-1a1.5 1.5 0 0 1 1.54-.074M11 10.5a3.5 3.5 0 0 1 7 0v3a3.5 3.5 0 1 1-7 0zm3.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 1 0 1 0v-3a.5.5 0 0 0-.5-.5"></svg:path></svg:g>`,
})
export class MingcuteRewindBackwardSquare10FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteRewindBackwardSquare10LineIcon],svg[mingcute-rewind-backward-square-10-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M8.085 1.689a1 1 0 0 1 .31 1.258L7.867 4H18a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4v-5a1 1 0 1 1 2 0v5a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2H5.024c-.9 0-1.35-1.088-.714-1.724l2.483-2.483a1 1 0 0 1 1.292-.104m1.387 5.93A1 1 0 0 1 10 8.5v7a1 1 0 1 1-2 0v-5.134a1 1 0 0 1-1.055-1.698l1.5-1a1 1 0 0 1 1.027-.05M11 10.5a3 3 0 1 1 6 0v3a3 3 0 1 1-6 0zm3-1a1 1 0 0 0-1 1v3a1 1 0 1 0 2 0v-3a1 1 0 0 0-1-1"></svg:path></svg:g>`,
})
export class MingcuteRewindBackwardSquare10LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteRewindBackwardSquare15FillIcon],svg[mingcute-rewind-backward-square-15-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M8.377 1.283a1.5 1.5 0 0 1 .465 1.888l-.165.329H18A4.5 4.5 0 0 1 22.5 8v8a4.5 4.5 0 0 1-4.5 4.5H6A4.5 4.5 0 0 1 1.5 16v-5a1.5 1.5 0 0 1 3 0v5A1.5 1.5 0 0 0 6 17.5h12a1.5 1.5 0 0 0 1.5-1.5V8A1.5 1.5 0 0 0 18 6.5H5.024c-1.345 0-2.019-1.626-1.068-2.578L6.44 1.44a1.5 1.5 0 0 1 1.938-.156m7.196 5.715a1.5 1.5 0 0 1 .144 2.993l-.144.007h-1.565v.178h.032c2.025 0 3.416 1.577 3.416 3.416a3.416 3.416 0 0 1-3.416 3.416c-.44 0-.905-.103-1.282-.225c-.361-.117-.836-.315-1.213-.626a1.5 1.5 0 0 1 1.889-2.331l.063.031l.117.048l.142.046l.137.032l.147.025c.23 0 .416-.186.416-.416a.44.44 0 0 0-.105-.312c-.042-.043-.126-.104-.31-.104l-1.533.004a1.5 1.5 0 0 1-1.493-1.355l-.007-.145V8.898a1.9 1.9 0 0 1 1.751-1.895l.149-.005zm-6.365.18A1.5 1.5 0 0 1 10 8.5v7a1.5 1.5 0 0 1-3 0V11a1.499 1.499 0 0 1-.832-2.748l1.5-1a1.5 1.5 0 0 1 1.54-.074"></svg:path></svg:g>`,
})
export class MingcuteRewindBackwardSquare15FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteRewindBackwardSquare15LineIcon],svg[mingcute-rewind-backward-square-15-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M8.085 1.689a1 1 0 0 1 .31 1.258L7.867 4H18a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4v-5a1 1 0 1 1 2 0v5a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2H5.024c-.9 0-1.35-1.088-.714-1.724l2.483-2.483a1 1 0 0 1 1.292-.104M15.763 7.5a1 1 0 0 1 .117 1.993l-.117.007h-2.5v.696a4 4 0 0 1 .75-.071c1.896 0 3.188 1.459 3.188 3.188a3.188 3.188 0 0 1-6.11 1.275a1 1 0 0 1 1.78-.905l.053.104a1.188 1.188 0 0 0 2.277-.475c0-.687-.46-1.187-1.188-1.187a3 3 0 0 0-.887.167l-.18.065l-.237.1a1 1 0 0 1-1.438-.766l-.008-.129V9a1.5 1.5 0 0 1 1.356-1.493l.144-.007zm-6.291.118A1 1 0 0 1 10 8.5v7a1 1 0 1 1-2 0v-5.134a1 1 0 0 1-1.055-1.698l1.5-1a1 1 0 0 1 1.027-.05"></svg:path></svg:g>`,
})
export class MingcuteRewindBackwardSquare15LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteRewindBackwardSquare30FillIcon],svg[mingcute-rewind-backward-square-30-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M6.44 1.44A1.5 1.5 0 0 1 8.9 3.037l-.058.133l-.165.329H18a4.5 4.5 0 0 1 4.495 4.288L22.5 8v8a4.5 4.5 0 0 1-4.288 4.495L18 20.5H6a4.5 4.5 0 0 1-4.495-4.288L1.5 16v-5a1.5 1.5 0 0 1 2.993-.144L4.5 11v5a1.5 1.5 0 0 0 1.356 1.493L6 17.5h12a1.5 1.5 0 0 0 1.493-1.356L19.5 16V8a1.5 1.5 0 0 0-1.356-1.493L18 6.5H5.024c-1.299 0-1.972-1.516-1.16-2.477l.092-.1zM15.45 7a3.25 3.25 0 0 1 3.25 3.25v3.5a3.25 3.25 0 0 1-6.5 0v-3.5A3.25 3.25 0 0 1 15.45 7M8.48 7a3.22 3.22 0 0 1 2.695 4.983a3.2 3.2 0 0 1-2.492 4.95l-.182.005H8.2c-1.327 0-2.426-.877-2.87-1.925a1.5 1.5 0 1 1 2.76-1.171c.014.026.04.055.07.075l.045.02h.296a.2.2 0 0 0 .17-.302l-.034-.042l-.11-.103a1.5 1.5 0 0 1-.165-2.952l.135-.024l.138-.137a.22.22 0 0 0-.097-.37L8.48 10h-.275a.2.2 0 0 0-.114.096a1.5 1.5 0 0 1-2.762-1.172c.423-.995 1.436-1.836 2.674-1.917L8.2 7zm6.97 3a.25.25 0 0 0-.25.25v3.5a.25.25 0 1 0 .5 0v-3.5a.25.25 0 0 0-.25-.25"></svg:path></svg:g>`,
})
export class MingcuteRewindBackwardSquare30FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteRewindBackwardSquare30LineIcon],svg[mingcute-rewind-backward-square-30-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M6.793 1.793a1 1 0 0 1 1.649 1.043l-.048.111L7.868 4H18a4 4 0 0 1 3.995 3.8L22 8v8a4 4 0 0 1-3.8 3.995L18 20H6a4 4 0 0 1-3.995-3.8L2 16v-5a1 1 0 0 1 1.993-.117L4 11v5a2 2 0 0 0 1.85 1.995L6 18h12a2 2 0 0 0 1.995-1.85L20 16V8a2 2 0 0 0-1.85-1.995L18 6H5.024c-.86 0-1.31-.995-.79-1.639l.076-.085zM15 7.5a2.5 2.5 0 0 1 2.5 2.5v4a2.5 2.5 0 0 1-5 0v-4A2.5 2.5 0 0 1 15 7.5m-6.22 0a2.72 2.72 0 0 1 2.072 4.483a2.7 2.7 0 0 1-1.88 4.45l-.171.005H8.5a2.3 2.3 0 0 1-2.04-1.243l-.073-.156l-.093-.22a1 1 0 0 1 1.789-.887l.052.105l.093.22c.037.088.113.15.203.172l.069.008h.3a.7.7 0 0 0 .555-1.124l-.077-.086l-.062-.057a.64.64 0 0 0-.336-.163L8.786 13a1 1 0 0 1-.117-1.993L8.786 11a.56.56 0 0 0 .328-.106l.067-.057l.106-.105a.72.72 0 0 0-.41-1.225L8.78 9.5H8.5a.3.3 0 0 0-.237.12l-.034.06l-.094.22a1 1 0 0 1-1.88-.67l.039-.11l.093-.222a2.3 2.3 0 0 1 1.941-1.392L8.5 7.5zm6.22 2a.5.5 0 0 0-.5.5v4a.5.5 0 1 0 1 0v-4a.5.5 0 0 0-.5-.5"></svg:path></svg:g>`,
})
export class MingcuteRewindBackwardSquare30LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteRewindBackwardSquare5FillIcon],svg[mingcute-rewind-backward-square-5-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M8.377 1.283a1.5 1.5 0 0 1 .465 1.888l-.165.329H18A4.5 4.5 0 0 1 22.5 8v8a4.5 4.5 0 0 1-4.5 4.5H6A4.5 4.5 0 0 1 1.5 16v-5a1.5 1.5 0 0 1 3 0v5A1.5 1.5 0 0 0 6 17.5h12a1.5 1.5 0 0 0 1.5-1.5V8A1.5 1.5 0 0 0 18 6.5H5.024c-1.345 0-2.019-1.626-1.068-2.578L6.44 1.44a1.5 1.5 0 0 1 1.938-.156m.63 7.615a1.9 1.9 0 0 1 1.9-1.9h2.666a1.5 1.5 0 0 1 0 3h-1.565v.178h.032c2.025 0 3.416 1.577 3.416 3.416a3.416 3.416 0 0 1-3.416 3.415c-.44 0-.905-.102-1.282-.224c-.361-.117-.836-.315-1.213-.626a1.5 1.5 0 0 1 1.888-2.331c.025.014.13.065.25.104c.17.055.35.077.357.078c.23 0 .416-.187.416-.416a.44.44 0 0 0-.105-.312c-.042-.043-.126-.104-.31-.104l-1.533.004a1.5 1.5 0 0 1-1.5-1.5z"></svg:path></svg:g>`,
})
export class MingcuteRewindBackwardSquare5FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteRewindBackwardSquare5LineIcon],svg[mingcute-rewind-backward-square-5-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M8.085 1.689a1 1 0 0 1 .31 1.258L7.867 4H18a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4v-5a1 1 0 1 1 2 0v5a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2H5.024c-.9 0-1.35-1.088-.714-1.724l2.483-2.483a1 1 0 0 1 1.292-.104M9.263 9a1.5 1.5 0 0 1 1.5-1.5h3a1 1 0 1 1 0 2h-2.5v.696a4 4 0 0 1 .75-.071c1.896 0 3.188 1.459 3.188 3.188a3.188 3.188 0 0 1-6.11 1.275a1 1 0 0 1 1.833-.8a1.188 1.188 0 0 0 2.277-.476c0-.687-.46-1.187-1.188-1.187a3 3 0 0 0-.887.167a4 4 0 0 0-.417.166a1 1 0 0 1-1.446-.896z"></svg:path></svg:g>`,
})
export class MingcuteRewindBackwardSquare5LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteRewindForward10FillIcon],svg[mingcute-rewind-forward-10-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M18.561.501a1.5 1.5 0 0 1 1.429 1.325l.505 4.325a1.5 1.5 0 0 1-2.657 1.117a7.5 7.5 0 1 0 1.66 4.727a1.5 1.5 0 0 1 3.001.004c-.007 4.795-3.317 9.12-8.193 10.22c-5.657 1.274-11.277-2.278-12.552-7.935C.48 8.627 4.032 3.007 9.69 1.732a10.46 10.46 0 0 1 7.149.926l.191-.953A1.5 1.5 0 0 1 18.561.5M9.208 7.178A1.5 1.5 0 0 1 10 8.5v7a1.5 1.5 0 1 1-3 0V11a1.5 1.5 0 0 1-.832-2.748l1.5-1a1.5 1.5 0 0 1 1.54-.074M14.5 7a3.5 3.5 0 0 1 3.495 3.308L18 10.5v3a3.5 3.5 0 0 1-6.995.192L11 13.5v-3A3.5 3.5 0 0 1 14.5 7m0 3a.5.5 0 0 0-.492.41L14 10.5v3a.5.5 0 0 0 .992.09L15 13.5v-3a.5.5 0 0 0-.5-.5"></svg:path></svg:g>`,
})
export class MingcuteRewindForward10FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteRewindForward10LineIcon],svg[mingcute-rewind-forward-10-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M18.541 1a1 1 0 0 1 .952.884L20 6.209a1 1 0 0 1-1.771.745A8 8 0 1 0 20 11.996a1 1 0 1 1 2 .002c-.007 4.567-3.16 8.686-7.804 9.733c-5.388 1.214-10.74-2.17-11.954-7.557S4.412 3.434 9.8 2.22a9.97 9.97 0 0 1 7.394 1.211l.327-1.628a1 1 0 0 1 1.021-.802m-9.07 6.618A1 1 0 0 1 10 8.5v7a1 1 0 0 1-2 0v-5.134a1 1 0 0 1-1.054-1.698l1.5-1a1 1 0 0 1 1.026-.05M14 7.5a3 3 0 0 1 2.995 2.824L17 10.5v3a3 3 0 0 1-5.995.176L11 13.5v-3a3 3 0 0 1 3-3m0 2a1 1 0 0 0-.993.884L13 10.5v3a1 1 0 0 0 1.993.117L15 13.5v-3a1 1 0 0 0-1-1"></svg:path></svg:g>`,
})
export class MingcuteRewindForward10LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteRewindForward15FillIcon],svg[mingcute-rewind-forward-15-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M18.561.501a1.5 1.5 0 0 1 1.429 1.325l.505 4.325a1.5 1.5 0 0 1-2.657 1.117a7.5 7.5 0 1 0 1.66 4.727a1.5 1.5 0 0 1 3.001.004c-.007 4.795-3.317 9.12-8.193 10.22c-5.657 1.274-11.277-2.278-12.552-7.935C.48 8.627 4.032 3.007 9.69 1.732a10.46 10.46 0 0 1 7.149.926l.191-.953A1.5 1.5 0 0 1 18.561.5m-2.988 6.497a1.5 1.5 0 0 1 .144 2.993l-.144.007h-1.565v.178h.032c2.025 0 3.416 1.577 3.416 3.416a3.416 3.416 0 0 1-3.416 3.416c-.44 0-.905-.103-1.282-.225c-.361-.117-.836-.315-1.213-.626a1.5 1.5 0 0 1 1.889-2.331l.064.031l.116.048l.143.046l.136.032l.147.025l.084-.009a.416.416 0 0 0 .332-.407c0-.164-.056-.261-.105-.312c-.042-.042-.126-.104-.31-.104l-1.533.004a1.5 1.5 0 0 1-1.493-1.355l-.007-.145V8.898a1.9 1.9 0 0 1 1.751-1.895l.149-.005zm-6.365.18A1.5 1.5 0 0 1 10 8.5v7a1.5 1.5 0 1 1-3 0V11a1.5 1.5 0 0 1-.832-2.748l1.5-1a1.5 1.5 0 0 1 1.54-.074"></svg:path></svg:g>`,
})
export class MingcuteRewindForward15FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteRewindForward15LineIcon],svg[mingcute-rewind-forward-15-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M18.541 1a1 1 0 0 1 .952.884L20 6.209a1 1 0 0 1-1.771.745A8 8 0 1 0 20 11.996a1 1 0 1 1 2 .002c-.007 4.567-3.16 8.686-7.804 9.733c-5.388 1.214-10.74-2.17-11.954-7.557S4.412 3.434 9.8 2.22a9.97 9.97 0 0 1 7.394 1.211l.327-1.628a1 1 0 0 1 1.021-.802m-9.07 6.618A1 1 0 0 1 10 8.5v7a1 1 0 0 1-2 0v-5.134a1 1 0 0 1-1.054-1.698l1.5-1a1 1 0 0 1 1.026-.05m6.291-.118a1 1 0 0 1 .117 1.993l-.117.007h-2.5v.696a4 4 0 0 1 .75-.07c1.896 0 3.188 1.458 3.188 3.187a3.188 3.188 0 0 1-6.11 1.275a1 1 0 0 1 1.78-.905l.053.104a1.188 1.188 0 0 0 2.277-.474c0-.688-.459-1.188-1.188-1.188c-.381 0-.773.105-1.13.255l-.174.078a1 1 0 0 1-1.437-.767l-.009-.128V9a1.5 1.5 0 0 1 1.356-1.493l.144-.007z"></svg:path></svg:g>`,
})
export class MingcuteRewindForward15LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteRewindForward30FillIcon],svg[mingcute-rewind-forward-30-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M18.561.501a1.5 1.5 0 0 1 1.407 1.19l.022.135l.505 4.325a1.5 1.5 0 0 1-2.657 1.117a7.5 7.5 0 1 0 1.66 4.727a1.5 1.5 0 0 1 3.001.004c-.007 4.795-3.317 9.12-8.193 10.22c-5.657 1.274-11.277-2.278-12.552-7.935C.48 8.627 4.032 3.007 9.69 1.732a10.46 10.46 0 0 1 6.843.773l.306.153l.191-.953A1.5 1.5 0 0 1 18.561.5M15.451 7a3.25 3.25 0 0 1 3.25 3.25v3.5a3.25 3.25 0 0 1-6.5 0v-3.5A3.25 3.25 0 0 1 15.45 7M8.48 7a3.22 3.22 0 0 1 2.695 4.983a3.2 3.2 0 0 1-2.492 4.95l-.182.005h-.3c-1.328 0-2.427-.877-2.872-1.924a1.5 1.5 0 0 1 2.762-1.172c.013.026.04.055.07.075l.044.02h.296a.2.2 0 0 0 .17-.302l-.034-.042l-.11-.103a1.5 1.5 0 0 1-.165-2.952l.136-.024l.137-.137a.22.22 0 0 0-.097-.369L8.48 10h-.275a.2.2 0 0 0-.114.096A1.5 1.5 0 1 1 5.33 8.924c.423-.995 1.436-1.836 2.674-1.917L8.2 7zm6.97 3a.25.25 0 0 0-.25.25v3.5a.25.25 0 0 0 .5 0v-3.5a.25.25 0 0 0-.25-.25"></svg:path></svg:g>`,
})
export class MingcuteRewindForward30FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteRewindForward30LineIcon],svg[mingcute-rewind-forward-30-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M18.541 1a1 1 0 0 1 .933.773l.02.11l.505 4.326a1 1 0 0 1-1.771.745A8 8 0 1 0 20 11.996a1 1 0 1 1 2 .002c-.007 4.567-3.16 8.686-7.804 9.733c-5.388 1.214-10.74-2.17-11.954-7.557S4.412 3.434 9.8 2.22a9.96 9.96 0 0 1 7.112 1.046l.282.165l.327-1.628a1 1 0 0 1 1.021-.802m-3.54 6.5a2.5 2.5 0 0 1 2.5 2.5v4a2.5 2.5 0 0 1-5 0v-4A2.5 2.5 0 0 1 15 7.5m-6.222 0a2.72 2.72 0 0 1 2.073 4.484a2.7 2.7 0 0 1-1.88 4.448l-.171.006h-.3a2.3 2.3 0 0 1-2.04-1.243l-.073-.156l-.093-.22a1 1 0 0 1 1.789-.887l.052.105l.094.221c.037.087.112.15.202.171l.069.009h.3a.7.7 0 0 0 .555-1.125l-.077-.086l-.062-.057a.64.64 0 0 0-.336-.163L8.786 13a1 1 0 0 1-.117-1.993L8.786 11a.56.56 0 0 0 .328-.106l.067-.057l.106-.105a.72.72 0 0 0-.41-1.225L8.78 9.5H8.5a.3.3 0 0 0-.237.12l-.034.06l-.094.22a1 1 0 0 1-1.88-.67l.039-.11l.094-.221a2.3 2.3 0 0 1 1.94-1.392L8.5 7.5zM15 9.5a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 1 0v-4a.5.5 0 0 0-.5-.5"></svg:path></svg:g>`,
})
export class MingcuteRewindForward30LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteRewindForward5FillIcon],svg[mingcute-rewind-forward-5-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M18.561.501a1.5 1.5 0 0 1 1.407 1.19l.022.135l.505 4.325a1.5 1.5 0 0 1-2.657 1.117a7.5 7.5 0 1 0 1.66 4.727a1.5 1.5 0 0 1 3.001.004c-.007 4.795-3.317 9.12-8.193 10.22c-5.657 1.274-11.277-2.278-12.552-7.935C.48 8.627 4.032 3.007 9.69 1.732a10.46 10.46 0 0 1 6.843.773l.306.153l.191-.953A1.5 1.5 0 0 1 18.561.5m-4.988 6.497a1.5 1.5 0 0 1 .144 2.993l-.144.007h-1.565v.178h.032c2.025 0 3.416 1.577 3.416 3.416a3.416 3.416 0 0 1-3.416 3.416c-.44 0-.905-.103-1.282-.225c-.361-.117-.836-.315-1.213-.626a1.5 1.5 0 0 1 1.889-2.331l.064.031l.116.048l.143.046l.136.032l.147.025l.084-.009a.416.416 0 0 0 .332-.407c0-.164-.056-.261-.105-.312c-.042-.042-.126-.104-.31-.104l-1.533.004a1.5 1.5 0 0 1-1.493-1.355l-.007-.145V8.898a1.9 1.9 0 0 1 1.751-1.895l.149-.005z"></svg:path></svg:g>`,
})
export class MingcuteRewindForward5FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteRewindForward5LineIcon],svg[mingcute-rewind-forward-5-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M18.541 1a1 1 0 0 1 .952.884L20 6.209a1 1 0 0 1-1.771.745A8 8 0 1 0 20 11.996a1 1 0 1 1 2 .002c-.007 4.567-3.16 8.686-7.804 9.733c-5.388 1.214-10.74-2.17-11.954-7.557S4.412 3.434 9.8 2.22a9.97 9.97 0 0 1 7.394 1.211l.327-1.628a1 1 0 0 1 1.021-.802m-4.778 6.5a1 1 0 1 1 0 2h-2.5v.696c.235-.043.489-.07.75-.07c1.896 0 3.188 1.458 3.188 3.187a3.188 3.188 0 0 1-6.11 1.275a1 1 0 0 1 1.78-.905l.053.104a1.188 1.188 0 0 0 2.277-.474c0-.688-.459-1.188-1.188-1.188a3 3 0 0 0-.887.168l-.208.075l-.203.087a1 1 0 0 1-1.452-.892V8.938c0-.794.644-1.438 1.438-1.438z"></svg:path></svg:g>`,
})
export class MingcuteRewindForward5LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteRewindForwardSquare10FillIcon],svg[mingcute-rewind-forward-square-10-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M15.623 1.283a1.5 1.5 0 0 1 1.938.156l2.483 2.483c.95.952.277 2.578-1.068 2.578H6A1.5 1.5 0 0 0 4.5 8v8A1.5 1.5 0 0 0 6 17.5h12a1.5 1.5 0 0 0 1.5-1.5v-5a1.5 1.5 0 0 1 3 0v5a4.5 4.5 0 0 1-4.5 4.5H6A4.5 4.5 0 0 1 1.5 16V8A4.5 4.5 0 0 1 6 3.5h9.323l-.165-.33a1.5 1.5 0 0 1 .465-1.887M9.208 7.178A1.5 1.5 0 0 1 10 8.5v7a1.5 1.5 0 0 1-3 0V11a1.499 1.499 0 0 1-.832-2.748l1.5-1a1.5 1.5 0 0 1 1.54-.074M11 10.5a3.5 3.5 0 0 1 7 0v3a3.5 3.5 0 1 1-7 0zm3.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 1 0 1 0v-3a.5.5 0 0 0-.5-.5"></svg:path></svg:g>`,
})
export class MingcuteRewindForwardSquare10FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteRewindForwardSquare10LineIcon],svg[mingcute-rewind-forward-square-10-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M15.915 1.689a1 1 0 0 1 1.292.104l2.483 2.483c.636.636.186 1.724-.714 1.724H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5a1 1 0 1 1 2 0v5a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4h10.132l-.526-1.053a1 1 0 0 1 .31-1.258m-6.443 5.93A1 1 0 0 1 10 8.5v7a1 1 0 1 1-2 0v-5.134a1 1 0 0 1-1.055-1.698l1.5-1a1 1 0 0 1 1.027-.05M11 10.5a3 3 0 1 1 6 0v3a3 3 0 1 1-6 0zm3-1a1 1 0 0 0-1 1v3a1 1 0 1 0 2 0v-3a1 1 0 0 0-1-1"></svg:path></svg:g>`,
})
export class MingcuteRewindForwardSquare10LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteRewindForwardSquare15FillIcon],svg[mingcute-rewind-forward-square-15-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="m17.56 1.44l2.484 2.482c.95.952.277 2.578-1.068 2.578H6A1.5 1.5 0 0 0 4.5 8v8A1.5 1.5 0 0 0 6 17.5h12a1.5 1.5 0 0 0 1.5-1.5v-5a1.5 1.5 0 0 1 3 0v5a4.5 4.5 0 0 1-4.5 4.5H6A4.5 4.5 0 0 1 1.5 16V8A4.5 4.5 0 0 1 6 3.5h9.323l-.165-.33a1.5 1.5 0 0 1 2.403-1.73m-1.987 5.558a1.5 1.5 0 0 1 0 3h-1.565v.178h.032c2.025 0 3.416 1.577 3.416 3.416a3.416 3.416 0 0 1-3.416 3.416c-.44 0-.905-.103-1.282-.225c-.361-.117-.836-.315-1.213-.626a1.5 1.5 0 0 1 1.889-2.331l.063.031l.117.048l.142.046l.137.032l.147.025c.23 0 .416-.186.416-.416a.44.44 0 0 0-.105-.312c-.042-.043-.126-.104-.31-.104l-1.533.004a1.5 1.5 0 0 1-1.5-1.5V8.898c0-1.05.85-1.9 1.9-1.9zm-7.905.254A1.5 1.5 0 0 1 9.992 8.35L10 8.5v7a1.5 1.5 0 0 1-2.993.144L7 15.5V11a1.499 1.499 0 0 1-.949-2.662l.117-.086z"></svg:path></svg:g>`,
})
export class MingcuteRewindForwardSquare15FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteRewindForwardSquare15LineIcon],svg[mingcute-rewind-forward-square-15-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="m17.207 1.793l2.483 2.483c.636.636.186 1.724-.714 1.724H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5a1 1 0 1 1 2 0v5a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4h10.132l-.526-1.053a1 1 0 0 1 1.601-1.154M15.763 7.5a1 1 0 1 1 0 2h-2.5v.696a4 4 0 0 1 .75-.071c1.896 0 3.188 1.459 3.188 3.188a3.188 3.188 0 0 1-6.11 1.275a1 1 0 0 1 1.78-.905l.053.104a1.188 1.188 0 0 0 2.277-.475c0-.687-.46-1.187-1.188-1.187a3 3 0 0 0-.887.167l-.18.065l-.239.101a1 1 0 0 1-1.444-.896V9a1.5 1.5 0 0 1 1.5-1.5zm-7.318.168a1 1 0 0 1 1.548.71L10 8.5v7a1 1 0 0 1-1.993.117L8 15.5v-5.134a1 1 0 0 1-1.148-1.628l.093-.07z"></svg:path></svg:g>`,
})
export class MingcuteRewindForwardSquare15LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteRewindForwardSquare30FillIcon],svg[mingcute-rewind-forward-square-30-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="m17.56 1.44l2.484 2.482c.95.952.277 2.578-1.068 2.578H6A1.5 1.5 0 0 0 4.5 8v8A1.5 1.5 0 0 0 6 17.5h12a1.5 1.5 0 0 0 1.5-1.5v-5a1.5 1.5 0 0 1 3 0v5a4.5 4.5 0 0 1-4.5 4.5H6A4.5 4.5 0 0 1 1.5 16V8A4.5 4.5 0 0 1 6 3.5h9.323l-.165-.33a1.5 1.5 0 0 1 2.403-1.73M15.45 7a3.25 3.25 0 0 1 3.25 3.25v3.5a3.25 3.25 0 0 1-6.5 0v-3.5A3.25 3.25 0 0 1 15.45 7M8.48 7a3.22 3.22 0 0 1 2.695 4.983a3.2 3.2 0 0 1-2.492 4.95l-.182.005H8.2c-1.327 0-2.426-.877-2.87-1.925a1.5 1.5 0 1 1 2.76-1.171c.014.026.04.055.07.075l.045.02h.296a.2.2 0 0 0 .17-.302l-.034-.042l-.11-.103a1.5 1.5 0 0 1-.165-2.952l.135-.024l.138-.137a.22.22 0 0 0-.097-.37L8.48 10h-.275a.2.2 0 0 0-.114.096a1.5 1.5 0 0 1-2.762-1.172c.423-.995 1.436-1.836 2.674-1.917L8.2 7zm6.97 3a.25.25 0 0 0-.25.25v3.5a.25.25 0 1 0 .5 0v-3.5a.25.25 0 0 0-.25-.25"></svg:path></svg:g>`,
})
export class MingcuteRewindForwardSquare30FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteRewindForwardSquare30LineIcon],svg[mingcute-rewind-forward-square-30-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="m17.207 1.793l2.483 2.483c.636.636.186 1.724-.714 1.724H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5a1 1 0 1 1 2 0v5a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4h10.132l-.526-1.053a1 1 0 0 1 1.601-1.154M15 7.5a2.5 2.5 0 0 1 2.5 2.5v4a2.5 2.5 0 0 1-5 0v-4A2.5 2.5 0 0 1 15 7.5m-6.22 0a2.72 2.72 0 0 1 2.072 4.483a2.7 2.7 0 0 1-1.88 4.45l-.171.005H8.5a2.3 2.3 0 0 1-2.04-1.243l-.073-.156l-.093-.22a1 1 0 0 1 1.789-.887l.052.105l.093.22c.037.088.113.15.203.172l.069.008h.3a.7.7 0 0 0 .555-1.124l-.077-.086l-.062-.057a.64.64 0 0 0-.336-.163L8.786 13a1 1 0 0 1-.117-1.993L8.786 11a.56.56 0 0 0 .328-.106l.067-.057l.106-.105a.72.72 0 0 0-.41-1.225L8.78 9.5H8.5a.3.3 0 0 0-.237.12l-.034.06l-.094.22a1 1 0 0 1-1.88-.67l.039-.11l.093-.222a2.3 2.3 0 0 1 1.941-1.392L8.5 7.5zm6.22 2a.5.5 0 0 0-.5.5v4a.5.5 0 1 0 1 0v-4a.5.5 0 0 0-.5-.5"></svg:path></svg:g>`,
})
export class MingcuteRewindForwardSquare30LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteRewindForwardSquare5FillIcon],svg[mingcute-rewind-forward-square-5-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M15.623 1.283a1.5 1.5 0 0 1 1.938.156l2.483 2.483c.95.952.277 2.578-1.068 2.578H6A1.5 1.5 0 0 0 4.5 8v8A1.5 1.5 0 0 0 6 17.5h12a1.5 1.5 0 0 0 1.5-1.5v-5a1.5 1.5 0 0 1 3 0v5a4.5 4.5 0 0 1-4.5 4.5H6A4.5 4.5 0 0 1 1.5 16V8A4.5 4.5 0 0 1 6 3.5h9.323l-.165-.33a1.5 1.5 0 0 1 .465-1.887M9.008 8.898c0-1.05.85-1.9 1.9-1.9h2.665a1.5 1.5 0 0 1 0 3h-1.565v.178h.032c2.025 0 3.416 1.577 3.416 3.416a3.416 3.416 0 0 1-3.416 3.415c-.44 0-.905-.102-1.282-.224c-.361-.117-.836-.315-1.213-.626a1.5 1.5 0 0 1 1.888-2.331c.025.014.13.065.25.104c.17.055.317.078.357.078c.23 0 .416-.187.416-.416a.44.44 0 0 0-.105-.312c-.042-.043-.126-.104-.31-.104c-.512 0-1.023.004-1.533.004a1.5 1.5 0 0 1-1.5-1.5z"></svg:path></svg:g>`,
})
export class MingcuteRewindForwardSquare5FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteRewindForwardSquare5LineIcon],svg[mingcute-rewind-forward-square-5-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M15.915 1.689a1 1 0 0 1 1.292.104l2.483 2.483c.636.636.186 1.724-.714 1.724H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5a1 1 0 1 1 2 0v5a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4h10.132l-.526-1.053a1 1 0 0 1 .31-1.258M9.263 9a1.5 1.5 0 0 1 1.5-1.5h3a1 1 0 1 1 0 2h-2.5v.696a4 4 0 0 1 .75-.071c1.896 0 3.188 1.459 3.188 3.188a3.188 3.188 0 0 1-6.11 1.275a1 1 0 0 1 1.833-.8a1.188 1.188 0 0 0 2.277-.476c0-.687-.46-1.187-1.188-1.187a3 3 0 0 0-.887.167a4 4 0 0 0-.417.166a1 1 0 0 1-1.446-.896z"></svg:path></svg:g>`,
})
export class MingcuteRewindForwardSquare5LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteRidingFillIcon],svg[mingcute-riding-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M6 13a4 4 0 1 1 0 8a4 4 0 0 1 0-8m12 0a4 4 0 1 1 0 8a4 4 0 0 1 0-8m-3.962-5.376L16.414 10H18a1 1 0 1 1 0 2h-1.793a1.5 1.5 0 0 1-1.06-.44l-1.193-1.191l-2.632 2.303l1.317 1.537a1.5 1.5 0 0 1 .361.976V19a1 1 0 1 1-2 0v-3.63l-2.437-2.843a1.5 1.5 0 0 1 .151-2.105l3.275-2.867a1.5 1.5 0 0 1 2.049.069M16 3a2 2 0 1 1 0 4a2 2 0 0 1 0-4"></svg:path></svg:g>`,
})
export class MingcuteRidingFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteRidingLineIcon],svg[mingcute-riding-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M6 13a4 4 0 1 1 0 8a4 4 0 0 1 0-8m12 0a4 4 0 1 1 0 8a4 4 0 0 1 0-8m-3.962-5.376L16.414 10H18a1 1 0 1 1 0 2h-1.793a1.5 1.5 0 0 1-1.06-.44l-1.193-1.191l-2.632 2.303l1.317 1.537a1.5 1.5 0 0 1 .361.976V19a1 1 0 1 1-2 0v-3.63l-2.437-2.843a1.5 1.5 0 0 1 .151-2.105l3.275-2.867a1.5 1.5 0 0 1 2.049.069M6 15a2 2 0 1 0 0 4a2 2 0 0 0 0-4m12 0a2 2 0 1 0 0 4a2 2 0 0 0 0-4M16 3a2 2 0 1 1 0 4a2 2 0 0 1 0-4"></svg:path></svg:g>`,
})
export class MingcuteRidingLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteRightFillIcon],svg[mingcute-right-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M16.06 10.94a1.5 1.5 0 0 1 0 2.12l-5.656 5.658a1.5 1.5 0 1 1-2.121-2.122L12.879 12L8.283 7.404a1.5 1.5 0 0 1 2.12-2.122l5.658 5.657Z"></svg:path></svg:g>`,
})
export class MingcuteRightFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteRightLineIcon],svg[mingcute-right-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M15.707 11.293a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 1 1-1.414-1.414l4.95-4.95l-4.95-4.95a1 1 0 0 1 1.414-1.414z"></svg:path></svg:g>`,
})
export class MingcuteRightLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteRightSmallFillIcon],svg[mingcute-right-small-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="M24 0v24H0V0zM12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M14.536 12.707a1 1 0 0 0 0-1.414l-2.829-2.829A1 1 0 0 0 10 9.172v5.656a1 1 0 0 0 1.707.708z"></svg:path></svg:g>`,
})
export class MingcuteRightSmallFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteRightSmallLineIcon],svg[mingcute-right-small-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="M24 0v24H0V0zM12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M10.293 8.465a1 1 0 0 0 0 1.414L12.414 12l-2.121 2.121a1 1 0 0 0 1.414 1.415l2.829-2.829a1 1 0 0 0 0-1.414l-2.829-2.828a1 1 0 0 0-1.414 0"></svg:path></svg:g>`,
})
export class MingcuteRightSmallLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteRoadFillIcon],svg[mingcute-road-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M12 16.5a1.5 1.5 0 0 1 1.493 1.356L13.5 18v2a1.5 1.5 0 0 1-2.993.145L10.5 20v-2a1.5 1.5 0 0 1 1.5-1.5M8.364 2.545a1.5 1.5 0 0 1 1.091 1.819l-4 16a1.5 1.5 0 0 1-2.91-.728l4-16a1.5 1.5 0 0 1 1.819-1.091m9.091 1.091l4 16a1.5 1.5 0 1 1-2.91.728l-4-16a1.5 1.5 0 0 1 2.91-.728M12 9.5a1.5 1.5 0 0 1 1.5 1.5v2a1.5 1.5 0 0 1-3 0v-2A1.5 1.5 0 0 1 12 9.5m0-7a1.5 1.5 0 0 1 1.493 1.356L13.5 4v2a1.5 1.5 0 0 1-2.993.145L10.5 6V4A1.5 1.5 0 0 1 12 2.5"></svg:path></svg:g>`,
})
export class MingcuteRoadFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteRoadLineIcon],svg[mingcute-road-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M8.243 3.03a1 1 0 0 1 .727 1.213l-4 16a1 1 0 1 1-1.94-.485l4-16a1 1 0 0 1 1.213-.728m8.727.727l4 16a1 1 0 1 1-1.94.485l-4-16a1 1 0 1 1 1.94-.485M12 17a1 1 0 0 1 .993.883L13 18v2a1 1 0 0 1-1.993.117L11 20v-2a1 1 0 0 1 1-1m0-7a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1m0-7a1 1 0 0 1 .993.883L13 4v2a1 1 0 0 1-1.993.117L11 6V4a1 1 0 0 1 1-1"></svg:path></svg:g>`,
})
export class MingcuteRoadLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteRocket2FillIcon],svg[mingcute-rocket-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M19.374 3.292a1.1 1.1 0 0 1 1.334 1.334l-1.105 4.42a5 5 0 0 1-1.315 2.323l-4.581 4.58v2.208a1.5 1.5 0 0 1-.44 1.06l-1.729 1.73a1.254 1.254 0 0 1-1.995-.3a25 25 0 0 0-1.342-2.25a2 2 0 0 1-.444.674c-.78.781-4.066 1.591-4.242 1.414c-.177-.176.633-3.461 1.414-4.242c.198-.199.428-.347.673-.444a25 25 0 0 0-2.249-1.342a1.254 1.254 0 0 1-.3-1.995l1.73-1.73a1.5 1.5 0 0 1 1.06-.44H8.05l4.58-4.58a5 5 0 0 1 2.324-1.315zm-1.997 5.994a6.3 6.3 0 0 0-1.134-1.528a6.3 6.3 0 0 0-1.529-1.135a3 3 0 0 0-.67.504l-.985.986c.398.1 1.07.36 1.77 1.059c.699.699.958 1.37 1.058 1.769l.986-.986q.3-.301.504-.67Z"></svg:path></svg:g>`,
})
export class MingcuteRocket2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteRocket2LineIcon],svg[mingcute-rocket-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="m17.668 11.989l.62-.62a5 5 0 0 0 1.315-2.323l1.105-4.42a1.1 1.1 0 0 0-1.334-1.334l-4.42 1.105a5 5 0 0 0-2.323 1.315l-4.58 4.58H5.842a1.5 1.5 0 0 0-1.06.44l-1.73 1.73a1.254 1.254 0 0 0 .3 1.995c.482.255 1.388.758 2.25 1.342a2 2 0 0 0-.674.444c-.781.78-1.591 4.066-1.414 4.242c.176.177 3.461-.633 4.242-1.414c.199-.198.347-.428.444-.673c.584.86 1.087 1.767 1.342 2.249a1.254 1.254 0 0 0 1.995.3l1.73-1.73a1.5 1.5 0 0 0 .439-1.06V15.95l3.938-3.938zm.736-6.393l-2.965.742q-.383.096-.725.285a6.3 6.3 0 0 1 1.529 1.135a6.3 6.3 0 0 1 1.134 1.528a3 3 0 0 0 .285-.725zm-2.517 5.345c-.1-.398-.36-1.07-1.059-1.77c-.699-.699-1.371-.958-1.77-1.058l-3.74 3.74a1.5 1.5 0 0 1-1.06.44H6.05l-.882.882c.984.566 2.383 1.448 3.296 2.36c.913.913 1.795 2.313 2.361 3.297l.882-.882v-2.207c0-.398.158-.78.44-1.061z"></svg:path></svg:g>`,
})
export class MingcuteRocket2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteRocketFillIcon],svg[mingcute-rocket-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="m18.165 2.765l.255.032c.674.093 1.566.218 2.071.724c.414.413.573 1.085.668 1.685l.056.386c.126.91.159 2.102-.056 3.426c-.424 2.613-1.815 5.731-5.308 8.145c-.019.188-.02.378-.016.568l.01.284c.016.437.032.874-.09 1.298c-.19.66-.867 1.095-1.5 1.407l-.31.147l-.4.176c-.748.318-1.758.644-2.391.01c-.38-.379-.536-.935-.663-1.488l-.047-.207a8 8 0 0 0-.2-.774q-.075-.22-.162-.445a3 3 0 0 1-.203.225c-.345.345-.86.586-1.284.755c-.463.183-.987.343-1.472.475l-.249.066l-.477.119l-.432.1l-.517.11l-.323.063a1.01 1.01 0 0 1-1.177-1.177l.086-.431l.154-.698l.124-.51l.094-.36c.132-.484.292-1.008.476-1.47c.168-.425.409-.94.754-1.285l.08-.077l-.064-.026a8 8 0 0 0-.519-.177l-.277-.085c-.694-.21-1.436-.436-1.897-.898c-.56-.559-.371-1.41-.101-2.118l.11-.274l.177-.4l.147-.31c.312-.632.747-1.309 1.407-1.499c.35-.1.714-.106 1.08-.096l.22.007c.286.01.571.021.85-.006c2.414-3.494 5.532-4.885 8.145-5.309a11.8 11.8 0 0 1 3.171-.088M8.353 15.44a1 1 0 0 0-1.1-.06l-.11.074l-.093.083l-.125.158c-.26.376-.408.896-.523 1.382l-.108.468l-.051.213l.191-.046l.418-.096c.578-.135 1.219-.31 1.613-.665a1 1 0 0 0 .088-1.314l-.082-.094l-.024-.023zm7.183-6.974a2 2 0 1 0-2.829 2.828a2 2 0 0 0 2.829-2.828"></svg:path></svg:g>`,
})
export class MingcuteRocketFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteRocketLineIcon],svg[mingcute-rocket-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="m18.42 2.797l.386.056c.6.095 1.272.254 1.685.667s.573 1.086.668 1.686l.056.385c.126.91.159 2.103-.056 3.427c-.424 2.613-1.815 5.73-5.308 8.145a5 5 0 0 0-.017.537l.017.543c.01.362.004.723-.096 1.07c-.19.66-.867 1.095-1.5 1.407l-.31.147l-.4.176l-.273.11c-.707.27-1.56.459-2.118-.1c-.253-.253-.37-.597-.464-.941l-.046-.172c-.16-.607-.341-1.21-.567-1.794a3 3 0 0 1-.198.218c-.545.544-1.284.818-2.023 1.03l-.491.135l-.49.13l-.478.12l-.432.1l-.517.11l-.323.063a1.01 1.01 0 0 1-1.177-1.177l.111-.551l.129-.578l.124-.51l.225-.845c.223-.82.494-1.665 1.1-2.27l.099-.095l-.763-.274l-.767-.264c-.449-.148-.921-.304-1.247-.63c-.596-.596-.343-1.526-.046-2.257l.166-.387l.137-.301c.317-.674.767-1.45 1.483-1.656c.347-.1.707-.106 1.07-.097l.543.018q.27.007.537-.017c2.414-3.493 5.532-4.884 8.145-5.308a11.7 11.7 0 0 1 3.426-.056m-3.106 2.03c-2.198.357-4.869 1.534-6.953 4.669c-.253.38-.68.561-1.115.63c-.246.04-.494.05-.743.05l-.747-.011q-.186-.001-.373.006c-.304.404-.516.884-.675 1.361l1.5.545l.617.233c1.128.442 2.22.977 3.06 1.817c1.415 1.415 2.134 3.266 2.654 5.157c.456-.16.914-.364 1.302-.655l.006-.373l-.011-.746c0-.248.01-.496.05-.744c.068-.435.25-.862.63-1.115c3.135-2.084 4.312-4.755 4.669-6.953c.18-1.11.15-2.102.049-2.833a5.4 5.4 0 0 0-.193-.895a5.4 5.4 0 0 0-.895-.192a9.7 9.7 0 0 0-2.832.05ZM7.05 15.535c-.35.423-.513.978-.644 1.528l-.108.468l-.055.226l.694-.163c.55-.13 1.106-.295 1.528-.645a1 1 0 1 0-1.415-1.414m5.657-7.07a2 2 0 1 1 2.829 2.828a2 2 0 0 1-2.829-2.829Z"></svg:path></svg:g>`,
})
export class MingcuteRocketLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteRotateToHorizontalFillIcon],svg[mingcute-rotate-to-horizontal-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M3 5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v4a1 1 0 1 1-2 0V5H5v4a1 1 0 0 1-2 0zm15.717-.238a1 1 0 0 1 1.158.811l.414 2.348c.117.665-.35 1.092-.704 1.226c-.353.134-.98.123-1.335-.442l-.215-.333c-.602-.905-1.674-2.312-3.02-3.254a1 1 0 0 1 1.147-1.639c.717.502 1.358 1.1 1.908 1.697a1 1 0 0 1 .647-.414M3 19a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2z"></svg:path></svg:g>`,
})
export class MingcuteRotateToHorizontalFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteRotateToHorizontalLineIcon],svg[mingcute-rotate-to-horizontal-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M3 5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v4a1 1 0 1 1-2 0V5H5v4a1 1 0 0 1-2 0zm15.717-.238a1 1 0 0 1 1.158.811l.414 2.348c.117.665-.35 1.092-.704 1.226c-.353.134-.98.123-1.335-.442l-.215-.333c-.602-.905-1.674-2.312-3.02-3.254a1 1 0 1 1 1.147-1.639c.717.502 1.358 1.1 1.908 1.697a1 1 0 0 1 .647-.414M3 19a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2zm2 0v-6h14v6z"></svg:path></svg:g>`,
})
export class MingcuteRotateToHorizontalLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteRotateToVerticalFillIcon],svg[mingcute-rotate-to-vertical-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M3 5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zm11 15a1 1 0 0 1 1-1h4v-6h-4a1 1 0 1 1 0-2h4a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-4a1 1 0 0 1-1-1m4-16a1 1 0 0 1 .705 1.709c.684.438 1.383.965 2.002 1.584a1 1 0 0 1-1.414 1.414c-1.084-1.084-2.526-1.863-3.523-2.317l-.398-.174l-.174-.072c-.618-.251-.737-.867-.667-1.237c.07-.372.41-.907 1.085-.907z"></svg:path></svg:g>`,
})
export class MingcuteRotateToVerticalFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteRotateToVerticalLineIcon],svg[mingcute-rotate-to-vertical-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M3 5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zm8 0H5v14h6zm3 15a1 1 0 0 1 1-1h4v-6h-4a1 1 0 1 1 0-2h4a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-4a1 1 0 0 1-1-1m4-16a1 1 0 0 1 .705 1.709c.684.438 1.383.965 2.002 1.584a1 1 0 0 1-1.414 1.414c-1.084-1.084-2.526-1.863-3.523-2.317l-.398-.174l-.174-.072c-.618-.251-.737-.867-.667-1.237c.07-.372.41-.907 1.085-.907z"></svg:path></svg:g>`,
})
export class MingcuteRotateToVerticalLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteRotateXFillIcon],svg[mingcute-rotate-x-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M5.631 7.23a1.5 1.5 0 0 1 1.967-.446l.122.077l1.566 1.097a1.497 1.497 0 0 1 .5 2.048l-.078.118l-1.128 1.612a1.5 1.5 0 0 1-2.648-.373a7 7 0 0 0-.73.305a3.3 3.3 0 0 0-.553.332c.27.209.746.46 1.461.698c1.439.48 3.521.802 5.89.802s4.451-.322 5.89-.802c.716-.239 1.193-.49 1.462-.7l-.135-.095a4 4 0 0 0-.305-.178c-.686-.36-1.764-.702-3.157-.933a1.5 1.5 0 0 1 .49-2.96c1.57.26 2.992.674 4.066 1.24c.946.498 2.189 1.427 2.189 2.928c0 1.07-.652 1.852-1.279 2.346c-.643.507-1.481.898-2.383 1.198c-1.819.607-4.236.956-6.838.956s-5.02-.35-6.838-.956c-.902-.3-1.74-.691-2.383-1.198C2.152 13.852 1.5 13.07 1.5 12c0-.8.371-1.448.808-1.916c.43-.46.986-.82 1.567-1.107c.451-.223.96-.421 1.514-.595A1.5 1.5 0 0 1 5.63 7.23ZM12 3.5a1.5 1.5 0 0 1 1.493 1.356L13.5 5v7h-3V5A1.5 1.5 0 0 1 12 3.5M10.5 18v1a1.5 1.5 0 0 0 3 0v-1z"></svg:path></svg:g>`,
})
export class MingcuteRotateXFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteRotateXLineIcon],svg[mingcute-rotate-x-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="m7.433 7.271l1.58 1.106a1 1 0 0 1 .29 1.455L8.17 11.45a1 1 0 0 1-1.803-.75a8.6 8.6 0 0 0-1.387.52c-.422.208-.692.408-.844.571c-.188.201-.09.352.074.497l.116.095c.33.26.87.539 1.626.79C7.454 13.674 9.592 14 12 14s4.546-.327 6.048-.827c.756-.252 1.296-.53 1.626-.79l.124-.101c.157-.135.258-.275.088-.468c-.13-.148-.365-.333-.74-.53c-.751-.396-1.887-.75-3.31-.985a1 1 0 1 1 .327-1.974c1.541.256 2.906.657 3.914 1.189C21.002 10 22 10.803 22 12c0 .852-.519 1.505-1.088 1.953c-.581.458-1.36.826-2.232 1.117c-1.755.585-4.117.93-6.68.93s-4.925-.345-6.68-.93c-.873-.29-1.651-.66-2.232-1.117C2.518 13.505 2 12.853 2 12c0-.636.295-1.168.674-1.575c.374-.4.873-.729 1.422-1c.565-.278 1.232-.52 1.974-.72A1 1 0 0 1 7.433 7.27ZM12 4a1 1 0 0 1 1 1v8h-2V5a1 1 0 0 1 1-1m-1 15v-2h2v2a1 1 0 1 1-2 0"></svg:path></svg:g>`,
})
export class MingcuteRotateXLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteRotateYFillIcon],svg[mingcute-rotate-y-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M12 1.5c1.07 0 1.852.652 2.346 1.279c.507.643.898 1.481 1.198 2.383c.607 1.819.956 4.236.956 6.838s-.35 5.02-.956 6.838c-.3.902-.691 1.74-1.198 2.383c-.494.627-1.275 1.279-2.346 1.279c-1.501 0-2.43-1.243-2.929-2.19c-.565-1.073-.979-2.495-1.239-4.065a1.5 1.5 0 1 1 2.96-.49c.23 1.393.572 2.471.933 3.157q.099.186.178.305l.096.136c.209-.27.46-.747.7-1.463c.479-1.439.801-3.521.801-5.89s-.322-4.451-.802-5.89c-.238-.715-.49-1.191-.698-1.461c-.093.12-.207.3-.332.553a7 7 0 0 0-.305.73a1.5 1.5 0 0 1 .373 2.647l-1.611 1.13a1.5 1.5 0 0 1-1.099.276a1.5 1.5 0 0 1-.987-.58L6.86 7.72a1.5 1.5 0 0 1 1.522-2.33c.174-.554.372-1.063.595-1.514c.286-.58.647-1.137 1.107-1.567C10.552 1.871 11.2 1.5 12 1.5m0 9v3H5a1.5 1.5 0 0 1 0-3zm6 0h1a1.5 1.5 0 0 1 0 3h-1z"></svg:path></svg:g>`,
})
export class MingcuteRotateYFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteRotateYLineIcon],svg[mingcute-rotate-y-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M12 2c.852 0 1.505.519 1.953 1.088c.458.581.826 1.36 1.117 2.232c.585 1.755.93 4.117.93 6.68s-.345 4.925-.93 6.68c-.29.873-.66 1.651-1.117 2.232c-.448.57-1.1 1.088-1.953 1.088c-1.197 0-2-.998-2.486-1.923c-.532-1.008-.933-2.373-1.189-3.914a1 1 0 0 1 1.974-.326c.235 1.422.589 2.558.984 3.308c.198.376.383.61.53.74c.194.17.334.07.469-.087l.1-.124c.26-.33.539-.87.79-1.626c.501-1.502.828-3.64.828-6.048s-.327-4.546-.827-6.048c-.252-.756-.53-1.296-.79-1.626l-.096-.116c-.145-.164-.296-.262-.497-.074c-.163.152-.363.422-.57.844a8.6 8.6 0 0 0-.522 1.387a1 1 0 0 1 .85 1.725l-.099.078l-1.617 1.132a.997.997 0 0 1-1.385-.186L7.271 7.433A1 1 0 0 1 8.704 6.07c.201-.742.443-1.41.721-1.974c.271-.55.6-1.048 1-1.422C10.831 2.294 11.363 2 12 2m1 9v2H5a1 1 0 0 1-.117-1.993L5 11zm6 0h-2v2h2a1 1 0 1 0 0-2"></svg:path></svg:g>`,
})
export class MingcuteRotateYLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteRoundFillIcon],svg[mingcute-round-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12"></svg:path></svg:g>`,
})
export class MingcuteRoundFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteRoundLineIcon],svg[mingcute-round-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M12 4a8 8 0 1 0 0 16a8 8 0 0 0 0-16M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12"></svg:path></svg:g>`,
})
export class MingcuteRoundLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteRouteFillIcon],svg[mingcute-route-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M18 16a3 3 0 1 1 0 6a3 3 0 0 1 0-6M15.5 4a4.5 4.5 0 1 1 0 9h-7a2.5 2.5 0 0 0 0 5H13a1 1 0 1 1 0 2H8.5a4.5 4.5 0 1 1 0-9h7a2.5 2.5 0 0 0 0-5H11a1 1 0 1 1 0-2zM6 2a3 3 0 1 1 0 6a3 3 0 0 1 0-6"></svg:path></svg:g>`,
})
export class MingcuteRouteFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteRouteLineIcon],svg[mingcute-route-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M18 16a3 3 0 1 1 0 6a3 3 0 0 1 0-6M15.5 4a4.5 4.5 0 1 1 0 9h-7a2.5 2.5 0 0 0 0 5H13a1 1 0 1 1 0 2H8.5a4.5 4.5 0 1 1 0-9h7a2.5 2.5 0 0 0 0-5H11a1 1 0 1 1 0-2zM18 18a1 1 0 1 0 0 2a1 1 0 0 0 0-2M6 2a3 3 0 1 1 0 6a3 3 0 0 1 0-6m0 2a1 1 0 1 0 0 2a1 1 0 0 0 0-2"></svg:path></svg:g>`,
})
export class MingcuteRouteLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteRouterModemFillIcon],svg[mingcute-router-modem-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M12 9a1 1 0 0 1 1 1v4h6a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h6v-4a1 1 0 0 1 1-1M6.662 3.959A1 1 0 0 1 6.75 5.37A6.97 6.97 0 0 0 5 10q0 .446.054.876a1 1 0 0 1-1.984.248A9 9 0 0 1 3 10a8.97 8.97 0 0 1 2.25-5.953a1 1 0 0 1 1.412-.088m12.088.088A8.97 8.97 0 0 1 21 10q0 .57-.07 1.124a1 1 0 1 1-1.984-.248q.053-.43.054-.876a6.97 6.97 0 0 0-1.75-4.63a1 1 0 1 1 1.5-1.323M9.662 6.604a1 1 0 0 1 .088 1.412a3 3 0 0 0-.727 2.36a1 1 0 0 1-1.984.248A5 5 0 0 1 8.25 6.693a1 1 0 0 1 1.41-.089Zm6.088.088a4.98 4.98 0 0 1 1.211 3.932a1 1 0 0 1-1.984-.248a3 3 0 0 0-.726-2.36a1 1 0 1 1 1.499-1.324"></svg:path></svg:g>`,
})
export class MingcuteRouterModemFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteRouterModemLineIcon],svg[mingcute-router-modem-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M12 9a1 1 0 0 1 1 1v4h6a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h6v-4a1 1 0 0 1 1-1m7 7H5v3h14zM6.662 3.959A1 1 0 0 1 6.75 5.37A6.97 6.97 0 0 0 5 10q0 .446.054.876a1 1 0 0 1-1.984.248A9 9 0 0 1 3 10a8.97 8.97 0 0 1 2.25-5.953a1 1 0 0 1 1.412-.088m12.088.088A8.97 8.97 0 0 1 21 10q0 .57-.07 1.124a1 1 0 1 1-1.984-.248q.053-.43.054-.876a6.97 6.97 0 0 0-1.75-4.63a1 1 0 1 1 1.5-1.323M9.662 6.604a1 1 0 0 1 .088 1.412a3 3 0 0 0-.727 2.36a1 1 0 0 1-1.984.248A5 5 0 0 1 8.25 6.693a1 1 0 0 1 1.41-.089Zm6.088.088a4.98 4.98 0 0 1 1.211 3.932a1 1 0 0 1-1.984-.248a3 3 0 0 0-.726-2.36a1 1 0 1 1 1.499-1.324"></svg:path></svg:g>`,
})
export class MingcuteRouterModemLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteRows2FillIcon],svg[mingcute-rows-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M5 3a2 2 0 0 0-2 2v6h18V5a2 2 0 0 0-2-2zm16 10H3v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2z"></svg:path></svg:g>`,
})
export class MingcuteRows2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteRows2LineIcon],svg[mingcute-rows-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M5 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm0 2h14v6H5zm0 8v6h14v-6z"></svg:path></svg:g>`,
})
export class MingcuteRows2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteRows3FillIcon],svg[mingcute-rows-3-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M5 3a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm0 10a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2z"></svg:path></svg:g>`,
})
export class MingcuteRows3FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteRows3LineIcon],svg[mingcute-rows-3-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M5 3a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm0 2h14v4H5zm0 8a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2zm0 2h14v4H5z"></svg:path></svg:g>`,
})
export class MingcuteRows3LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteRows4FillIcon],svg[mingcute-rows-4-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M21 16v3a2 2 0 0 1-1.85 1.995L19 21H5a2 2 0 0 1-1.995-1.85L3 19v-3zm0-6v4H3v-4zm-2-7a2 2 0 0 1 2 2v3H3V5a2 2 0 0 1 2-2z"></svg:path></svg:g>`,
})
export class MingcuteRows4FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteRows4LineIcon],svg[mingcute-rows-4-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zm16 0H5v3h14zM5 14v-4h14v4zm0 2v3h14v-3z"></svg:path></svg:g>`,
})
export class MingcuteRows4LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteRss2FillIcon],svg[mingcute-rss-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M5 17a2 2 0 1 1 0 4a2 2 0 0 1 0-4M5 3c8.837 0 16 7.163 16 16q0 .277-.01.55a1.5 1.5 0 1 1-2.997-.1A13 13 0 0 0 18 19c0-7.18-5.82-13-13-13q-.225 0-.45.008a1.5 1.5 0 0 1-.1-2.999Q4.722 3 5 3m0 7a9 9 0 0 1 8.98 9.599a1.5 1.5 0 1 1-2.993-.198a6 6 0 0 0-6.388-6.388a1.5 1.5 0 0 1-.197-2.993Q4.699 10 5 10"></svg:path></svg:g>`,
})
export class MingcuteRss2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteRss2LineIcon],svg[mingcute-rss-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M5.5 17a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3m0-14C14.06 3 21 9.94 21 18.5q0 .268-.009.534a1 1 0 0 1-1.999-.068Q19 18.734 19 18.5C19 11.044 12.956 5 5.5 5q-.234 0-.466.008a1 1 0 0 1-.068-1.999Q5.231 3 5.5 3m0 7a8.5 8.5 0 0 1 8.482 9.066a1 1 0 0 1-1.996-.132a6.5 6.5 0 0 0-6.92-6.92a1 1 0 1 1-.132-1.995q.28-.02.566-.019"></svg:path></svg:g>`,
})
export class MingcuteRss2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteRssFillIcon],svg[mingcute-rss-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M18 3a3 3 0 0 1 2.995 2.824L21 6v12a3 3 0 0 1-2.824 2.995L18 21H6a3 3 0 0 1-2.995-2.824L3 18V6a3 3 0 0 1 2.824-2.995L6 3zM8.5 14a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3M8 10.5a1 1 0 1 0 0 2a3.5 3.5 0 0 1 3.5 3.5a1 1 0 1 0 2 0A5.5 5.5 0 0 0 8 10.5M8.5 7q-.285 0-.566.019a1 1 0 0 0 .132 1.995a6.5 6.5 0 0 1 6.92 6.92a1 1 0 1 0 1.995.132A8.5 8.5 0 0 0 8.5 7"></svg:path></svg:g>`,
})
export class MingcuteRssFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteRssLineIcon],svg[mingcute-rss-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M18 3a3 3 0 0 1 2.995 2.824L21 6v12a3 3 0 0 1-2.824 2.995L18 21H6a3 3 0 0 1-2.995-2.824L3 18V6a3 3 0 0 1 2.824-2.995L6 3zm0 2H6a1 1 0 0 0-.993.883L5 6v12a1 1 0 0 0 .883.993L6 19h12a1 1 0 0 0 .993-.883L19 18V6a1 1 0 0 0-.883-.993zm-9.5 9a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3M8 10.5a5.5 5.5 0 0 1 5.5 5.5a1 1 0 1 1-2 0A3.5 3.5 0 0 0 8 12.5a1 1 0 1 1 0-2M8.5 7a8.5 8.5 0 0 1 8.481 9.066a1 1 0 1 1-1.995-.132a6.5 6.5 0 0 0-6.92-6.92a1 1 0 1 1-.132-1.995q.28-.02.566-.019"></svg:path></svg:g>`,
})
export class MingcuteRssLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteRudderFillIcon],svg[mingcute-rudder-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M12 2a1 1 0 0 1 .993.883L13 3v1.062a7.96 7.96 0 0 1 3.646 1.425l.26.193l.75-.751a1 1 0 0 1 1.498 1.32l-.083.094l-.751.751a7.96 7.96 0 0 1 1.57 3.571l.048.335H21a1 1 0 0 1 .117 1.993L21 13h-1.062a7.96 7.96 0 0 1-1.425 3.646l-.193.26l.751.75a1 1 0 0 1-1.32 1.498l-.094-.083l-.751-.751a7.96 7.96 0 0 1-3.571 1.57l-.335.048V21a1 1 0 0 1-1.993.117L11 21v-1.062a7.96 7.96 0 0 1-3.646-1.425l-.26-.193l-.75.751a1 1 0 0 1-1.498-1.32l.083-.094l.751-.751a7.96 7.96 0 0 1-1.57-3.571L4.063 13H3a1 1 0 0 1-.117-1.993L3 11h1.062a7.96 7.96 0 0 1 1.425-3.646l.193-.26l-.751-.75a1 1 0 0 1 1.32-1.498l.094.083l.751.751a7.96 7.96 0 0 1 3.571-1.57L11 4.063V3a1 1 0 0 1 1-1m-1.293 12.708L8.523 16.89A6 6 0 0 0 11 17.917v-3.088a3 3 0 0 1-.293-.121m2.586 0l-.144.064l-.149.057v3.088a6 6 0 0 0 2.231-.86l.246-.166zM9.171 13H6.083a6 6 0 0 0 1.026 2.477l2.183-2.184A3 3 0 0 1 9.171 13m8.746 0h-3.088q-.053.15-.121.293l2.183 2.184A6 6 0 0 0 17.917 13m-1.026-4.477l-2.183 2.184l.064.144l.057.149h3.088a6 6 0 0 0-.86-2.231zm-9.782 0A6 6 0 0 0 6.083 11h3.088q.053-.15.121-.293L7.11 8.523ZM13 6.083v3.088q.15.053.293.121l2.184-2.183A6 6 0 0 0 13 6.083m-2 0a6 6 0 0 0-2.477 1.026l2.184 2.183q.143-.068.293-.121z"></svg:path></svg:g>`,
})
export class MingcuteRudderFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteRudderLineIcon],svg[mingcute-rudder-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M13 3a1 1 0 1 0-2 0v1.062A7.96 7.96 0 0 0 7.094 5.68l-.75-.75a1 1 0 0 0-1.415 1.413l.751.751A7.96 7.96 0 0 0 4.062 11H3a1 1 0 1 0 0 2h1.062a7.96 7.96 0 0 0 1.618 3.906l-.751.751a1 1 0 1 0 1.414 1.414l.751-.751A7.96 7.96 0 0 0 11 19.938V21a1 1 0 1 0 2 0v-1.062a7.96 7.96 0 0 0 3.906-1.618l.751.751a1 1 0 0 0 1.414-1.414l-.751-.751A7.96 7.96 0 0 0 19.938 13H21a1 1 0 1 0 0-2h-1.062a7.96 7.96 0 0 0-1.618-3.906l.751-.75a1 1 0 0 0-1.414-1.415l-.751.751A7.96 7.96 0 0 0 13 4.062zm2.477 4.11A6 6 0 0 0 13 6.082v2.043c.367.094.714.24 1.032.428l1.445-1.445Zm-2.073 3.466l.01.01l.01.01a2 2 0 1 1-2.85.002l.012-.012l.012-.012c.36-.355.856-.574 1.402-.574c.547 0 1.043.22 1.404.576m2.042-.608l1.445-1.444A6 6 0 0 1 17.917 11h-2.043a4 4 0 0 0-.428-1.032m-6.922 6.923A6 6 0 0 0 11 17.917v-2.043a4 4 0 0 1-1.032-.428zm.03-2.859A4 4 0 0 1 8.126 13H6.083a6 6 0 0 0 1.026 2.477zM6.083 11h2.043a4 4 0 0 1 .428-1.032L7.109 8.524A6 6 0 0 0 6.083 11m11.834 2h-2.043c-.095.367-.24.714-.428 1.032l1.445 1.445A6 6 0 0 0 17.917 13m-3.885 2.446a4 4 0 0 1-1.032.428v2.043a6 6 0 0 0 2.476-1.026zM9.968 8.554L8.523 7.109A6 6 0 0 1 11 6.083v2.043a4 4 0 0 0-1.032.428"></svg:path></svg:g>`,
})
export class MingcuteRudderLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteRulerFillIcon],svg[mingcute-ruler-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M19 3a2 2 0 0 1 1.995 1.85L21 5v5a2 2 0 0 1-1.85 1.995L19 12h-7v7a2 2 0 0 1-1.85 1.995L10 21H5a2 2 0 0 1-1.995-1.85L3 19V5a2 2 0 0 1 1.85-1.995L5 3zM6 15H5l-.117.007a1 1 0 0 0 0 1.986L5 17h1l.117-.007a1 1 0 0 0 0-1.986zm0-4H5a1 1 0 0 0-.117 1.993L5 13h1a1 1 0 0 0 .117-1.993zm0-4H5a1 1 0 0 0-.117 1.993L5 9h1a1 1 0 0 0 .117-1.993zm2-3a1 1 0 0 0-.993.883L7 5v1a1 1 0 0 0 1.993.117L9 6V5a1 1 0 0 0-1-1m4 0a1 1 0 0 0-.993.883L11 5v1l.007.117a1 1 0 0 0 1.986 0L13 6V5l-.007-.117A1 1 0 0 0 12 4m4 0a1 1 0 0 0-.993.883L15 5v1a1 1 0 0 0 1.993.117L17 6V5a1 1 0 0 0-1-1"></svg:path></svg:g>`,
})
export class MingcuteRulerFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteRulerLineIcon],svg[mingcute-ruler-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M5 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h5a2 2 0 0 0 2-2v-7h7a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm2 2v1a1 1 0 0 0 2 0V5h2v1a1 1 0 1 0 2 0V5h2v1a1 1 0 0 0 2 0V5h2v5h-7.5a1.5 1.5 0 0 0-1.5 1.5V19H5v-2h1a1 1 0 1 0 0-2H5v-2h1a1 1 0 1 0 0-2H5V9h1a1 1 0 0 0 0-2H5V5z"></svg:path></svg:g>`,
})
export class MingcuteRulerLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteRunFillIcon],svg[mingcute-run-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M13 2a3 3 0 0 1 .64 5.932l-.171.032l1.436 2.297l1.724-.69a1 1 0 0 1 .848 1.808l-.106.05l-1.723.689a2 2 0 0 1-2.343-.657l-.096-.14l-.163-.26l-.606 2.424a2 2 0 0 1-.256.595l-.09.13l1.653 1.228a2 2 0 0 1 .766 1.202l.029.182l.353 3.178H15a1 1 0 0 1 .117 1.993L15 22h-.91a1.1 1.1 0 0 1-1.074-.861l-.02-.117l-.442-3.979l-3.15-2.34a1 1 0 0 1-.154-.14a2 2 0 0 1-.723-1.891l.033-.157l.794-3.177l-1.57.47l-.835 2.508a1 1 0 0 1-1.928-.52l.03-.112l.836-2.508a2 2 0 0 1 1.17-1.23l.153-.053l3.437-1.031A3 3 0 0 1 13 2M9.6 15.2a1 1 0 0 1 .2 1.4l-1.216 1.622a1.5 1.5 0 0 1-2.032.348l-1.93-1.287a1 1 0 0 1-1.33-1.49l.495-.494a1.01 1.01 0 0 1 1.275-.127l2.206 1.471L8.2 15.4a1 1 0 0 1 1.4-.2"></svg:path></svg:g>`,
})
export class MingcuteRunFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteRunLineIcon],svg[mingcute-run-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M13 2a3 3 0 0 1 .64 5.932l-.171.032l1.436 2.297l1.724-.69a1 1 0 0 1 .848 1.808l-.106.05l-1.723.689a2 2 0 0 1-2.343-.657l-.096-.14l-.163-.26l-.606 2.424a2 2 0 0 1-.256.595l-.09.13l1.653 1.228a2 2 0 0 1 .766 1.202l.029.182l.353 3.178H15a1 1 0 0 1 .117 1.993L15 22h-.91a1.1 1.1 0 0 1-1.074-.861l-.02-.117l-.442-3.979l-3.15-2.34a1 1 0 0 1-.154-.14a2 2 0 0 1-.723-1.891l.033-.157l.794-3.177l-1.57.47l-.835 2.508a1 1 0 0 1-1.928-.52l.03-.112l.836-2.508a2 2 0 0 1 1.17-1.23l.153-.053l3.437-1.031A3 3 0 0 1 13 2M8.2 15.4a1 1 0 0 1 1.669 1.095L9.8 16.6l-1.216 1.622a1.5 1.5 0 0 1-1.906.424l-.126-.076l-1.93-1.287a1 1 0 0 1-1.412-1.396l.083-.094l.494-.494a1.01 1.01 0 0 1 1.162-.191l.113.064l2.206 1.471zM13 4a1 1 0 1 0 0 2a1 1 0 0 0 0-2"></svg:path></svg:g>`,
})
export class MingcuteRunLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteSadFillIcon],svg[mingcute-sad-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2m0 11a5 5 0 0 0-3.307 1.25a1 1 0 0 0 1.323 1.5A3 3 0 0 1 12 15a2.98 2.98 0 0 1 1.984.75a1 1 0 1 0 1.324-1.5A5 5 0 0 0 12 13M8.5 8a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3m7 0a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3"></svg:path></svg:g>`,
})
export class MingcuteSadFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteSadLineIcon],svg[mingcute-sad-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2m0 2a8 8 0 1 0 0 16a8 8 0 0 0 0-16m0 9c1.267 0 2.427.473 3.308 1.25a1 1 0 1 1-1.324 1.5A3 3 0 0 0 12 15c-.761 0-1.455.282-1.984.75a1 1 0 1 1-1.323-1.5A5 5 0 0 1 12 13M8.5 8a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3m7 0a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3"></svg:path></svg:g>`,
})
export class MingcuteSadLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteSafariFillIcon],svg[mingcute-safari-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M11 2.05a9.95 9.95 0 0 0-5.33 2.206l.319.318A1 1 0 0 1 4.575 5.99l-.318-.319A9.95 9.95 0 0 0 2.049 11h.45a1 1 0 0 1 0 2h-.45A10 10 0 0 0 11 21.95v-.45a1 1 0 0 1 2 0v.45a9.95 9.95 0 0 0 5.33-2.207l-.319-.318a1 1 0 1 1 1.415-1.415l.318.319a9.95 9.95 0 0 0 2.208-5.33H21.5a1 1 0 1 1 0-2h.45A10 10 0 0 0 13 2.05v.45a1 1 0 1 1-2 0zm5.466 4.794l-5.693 3.622a1 1 0 0 0-.307.307l-3.622 5.693c-.287.45.239.977.69.69l5.693-3.623a1 1 0 0 0 .306-.306l3.623-5.693c.287-.451-.24-.977-.69-.69"></svg:path></svg:g>`,
})
export class MingcuteSafariFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteSafariLineIcon],svg[mingcute-safari-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M13 4.062V4.5a1 1 0 1 1-2 0v-.438A7.96 7.96 0 0 0 7.094 5.68l.31.31A1 1 0 1 1 5.99 7.404l-.31-.31A7.96 7.96 0 0 0 4.062 11H4.5a1 1 0 1 1 0 2h-.438A8.004 8.004 0 0 0 11 19.938V19.5a1 1 0 1 1 2 0v.438a7.96 7.96 0 0 0 3.906-1.618l-.31-.31a1 1 0 0 1 1.414-1.414l.31.31A7.96 7.96 0 0 0 19.938 13H19.5a1 1 0 1 1 0-2h.438A8.004 8.004 0 0 0 13 4.062M2 12c0 5.523 4.477 10 10 10s10-4.477 10-10S17.523 2 12 2S2 6.477 2 12m14.466-5.156l-5.693 3.622a1 1 0 0 0-.307.307l-3.622 5.693c-.287.45.24.977.69.69l5.693-3.623a1 1 0 0 0 .306-.306l3.623-5.693c.287-.451-.24-.977-.69-.69"></svg:path></svg:g>`,
})
export class MingcuteSafariLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteSafeAlertFillIcon],svg[mingcute-safe-alert-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="m12.702 2.195l7 2.625A2 2 0 0 1 21 6.693v5.363a9 9 0 0 1-4.975 8.05l-3.354 1.676a1.5 1.5 0 0 1-1.342 0l-3.354-1.677A9 9 0 0 1 3 12.055V6.694A2 2 0 0 1 4.298 4.82l7-2.625a2 2 0 0 1 1.404 0M12 14a1 1 0 1 0 0 2a1 1 0 0 0 0-2m0-7a1 1 0 0 0-.993.883L11 8v4a1 1 0 0 0 1.993.117L13 12V8a1 1 0 0 0-1-1"></svg:path></svg:g>`,
})
export class MingcuteSafeAlertFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteSafeAlertLineIcon],svg[mingcute-safe-alert-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="m12.702 2.195l7 2.625A2 2 0 0 1 21 6.693v5.363a9 9 0 0 1-4.975 8.05l-3.354 1.677a1.5 1.5 0 0 1-1.342 0l-3.354-1.677A9 9 0 0 1 3 12.056V6.693A2 2 0 0 1 4.298 4.82l7-2.625a2 2 0 0 1 1.404 0M12 4.068L5 6.693v5.363a7 7 0 0 0 3.87 6.26L12 19.883l3.13-1.565A7 7 0 0 0 19 12.056V6.693zM12 14a1 1 0 1 1 0 2a1 1 0 0 1 0-2m0-7a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0V8a1 1 0 0 1 1-1"></svg:path></svg:g>`,
})
export class MingcuteSafeAlertLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteSafeBoxFillIcon],svg[mingcute-safe-box-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M20 3a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2h-1a1 1 0 1 1-2 0H7a1 1 0 1 1-2 0H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-8 4a1 1 0 0 0-.993.883L11 8v.126a4 4 0 0 0-2.918 4.686l.063.26l-.11.062a1 1 0 0 0 .896 1.785l.105-.053l.11-.063A4 4 0 0 0 12 16a4 4 0 0 0 2.694-1.043l.16-.155l.11.064a1 1 0 0 0 1.098-1.668l-.098-.064l-.109-.063A4.003 4.003 0 0 0 13.19 8.18L13 8.126V8a1 1 0 0 0-1-1m0 3a2 2 0 0 1 1.82 2.83l-.1.19a2 2 0 0 1-3.359.127l-.102-.162A2 2 0 0 1 12 10"></svg:path></svg:g>`,
})
export class MingcuteSafeBoxFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteSafeBoxLineIcon],svg[mingcute-safe-box-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M20 3a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2h-1a1 1 0 1 1-2 0H7a1 1 0 1 1-2 0H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm0 2H4v13h16zm-8 2a1 1 0 0 1 1 1v.126a4 4 0 0 1 2.855 4.945l.109.063a1 1 0 1 1-1 1.732l-.11-.063A4 4 0 0 1 12 16a4 4 0 0 1-2.854-1.197l-.11.063a1 1 0 1 1-1-1.732l.109-.063A4.004 4.004 0 0 1 11 8.126V8a1 1 0 0 1 1-1m0 3a2 2 0 0 0-1.818 2.836l.094.178a2 2 0 0 0 3.359.138l.11-.174A2 2 0 0 0 12 10"></svg:path></svg:g>`,
})
export class MingcuteSafeBoxLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteSafeFlashFillIcon],svg[mingcute-safe-flash-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M11.298 2.195a2 2 0 0 1 1.232-.056l.172.056l7 2.625a2 2 0 0 1 1.291 1.707l.007.166v5.363a9 9 0 0 1-4.709 7.91l-.266.14l-3.354 1.676a1.5 1.5 0 0 1-1.198.063l-.144-.062l-3.354-1.678a9 9 0 0 1-4.97-7.75l-.005-.3V6.694a2 2 0 0 1 1.145-1.808l.153-.065zm-.155 5.957L9.152 11.47a1.01 1.01 0 0 0 .866 1.53h2.216l-1.091 1.819a1 1 0 0 0 1.714 1.029l1.991-3.318a1.01 1.01 0 0 0-.866-1.53h-2.216l1.092-1.819a1 1 0 0 0-1.716-1.029Z"></svg:path></svg:g>`,
})
export class MingcuteSafeFlashFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteSafeFlashLineIcon],svg[mingcute-safe-flash-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M11.298 2.195a2 2 0 0 1 1.232-.055l.172.055l7 2.625a2 2 0 0 1 1.291 1.708l.007.165v5.363a9 9 0 0 1-4.709 7.911l-.266.139l-3.354 1.677a1.5 1.5 0 0 1-1.198.062l-.144-.062l-3.354-1.677a9 9 0 0 1-4.97-7.75l-.005-.3V6.693a2 2 0 0 1 1.145-1.808l.153-.065zM12 4.068L5 6.693v5.363a7 7 0 0 0 3.635 6.138l.235.123L12 19.882l3.13-1.565a7 7 0 0 0 3.865-5.997l.005-.264V6.693zm-.857 4.084a1 1 0 0 1 1.769.926l-.055.103l-1.09 1.82h2.215c.746 0 1.221.772.92 1.427l-.054.102l-1.99 3.318a1 1 0 0 1-1.77-.926l.055-.103L12.233 13h-2.215a1.01 1.01 0 0 1-.92-1.427l.054-.103z"></svg:path></svg:g>`,
})
export class MingcuteSafeFlashLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteSafeLockFillIcon],svg[mingcute-safe-lock-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M11.298 2.195a2 2 0 0 1 1.404 0l7 2.625A2 2 0 0 1 21 6.693v5.363a9 9 0 0 1-4.975 8.05l-3.354 1.676a1.5 1.5 0 0 1-1.342 0l-3.354-1.677A9 9 0 0 1 3 12.055V6.694A2 2 0 0 1 4.298 4.82zM13 11.732A2 2 0 0 0 12 8a2 2 0 0 0-1 3.732V15a1 1 0 1 0 2 0z"></svg:path></svg:g>`,
})
export class MingcuteSafeLockFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteSafeLockLineIcon],svg[mingcute-safe-lock-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="m12.702 2.195l7 2.625A2 2 0 0 1 21 6.693v5.363a9 9 0 0 1-4.975 8.05l-3.354 1.677a1.5 1.5 0 0 1-1.342 0l-3.354-1.677A9 9 0 0 1 3 12.056V6.693A2 2 0 0 1 4.298 4.82l7-2.625a2 2 0 0 1 1.404 0M12 4.068L5 6.693v5.363a7 7 0 0 0 3.87 6.26L12 19.883l3.13-1.565A7 7 0 0 0 19 12.056V6.693zM12 8a2 2 0 0 1 1.134 3.648l-.134.085V15a1 1 0 0 1-1.993.117L11 15v-3.267A2 2 0 0 1 12 8"></svg:path></svg:g>`,
})
export class MingcuteSafeLockLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteSafeShield2FillIcon],svg[mingcute-safe-shield-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M11.298 2.195a2 2 0 0 1 1.404 0l7 2.625A2 2 0 0 1 21 6.693v5.363a9 9 0 0 1-4.975 8.05l-3.354 1.677a1.5 1.5 0 0 1-1.342 0l-3.354-1.677A9 9 0 0 1 3 12.056V6.693A2 2 0 0 1 4.298 4.82zM12 4.068L5 6.693v5.363a7 7 0 0 0 3.87 6.26L12 19.883z"></svg:path></svg:g>`,
})
export class MingcuteSafeShield2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteSafeShield2LineIcon],svg[mingcute-safe-shield-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M12.702 2.195a2 2 0 0 0-1.404 0l-7 2.625A2 2 0 0 0 3 6.693v5.363a9 9 0 0 0 4.975 8.05l3.354 1.677a1.5 1.5 0 0 0 1.342 0l3.354-1.677A9 9 0 0 0 21 12.056V6.693a2 2 0 0 0-1.298-1.873zM11 4.443l-6 2.25v5.363a7 7 0 0 0 3.87 6.26L11 19.383zm2 14.94l2.13-1.066A7 7 0 0 0 19 12.056V6.693l-6-2.25z"></svg:path></svg:g>`,
})
export class MingcuteSafeShield2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteSafeShieldFillIcon],svg[mingcute-safe-shield-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" fill-rule="nonzero" d="m9 9.693l3-1.125l3 1.125v2.335a3 3 0 0 1-1.658 2.683L12 15.382l-1.342-.67A3 3 0 0 1 9 12.027z"></svg:path><svg:path fill="currentColor" d="M12.702 2.195a2 2 0 0 0-1.404 0l-7 2.625A2 2 0 0 0 3 6.693v5.363a9 9 0 0 0 4.975 8.05l3.354 1.676a1.5 1.5 0 0 0 1.342 0l3.354-1.677A9 9 0 0 0 21 12.055V6.694a2 2 0 0 0-1.298-1.873zm-.175 4.435a1.5 1.5 0 0 0-1.054 0l-3.5 1.312A1.5 1.5 0 0 0 7 9.347v2.68A5 5 0 0 0 9.764 16.5l1.677.838a1.25 1.25 0 0 0 1.118 0l1.677-.838A5 5 0 0 0 17 12.028V9.347a1.5 1.5 0 0 0-.973-1.405z"></svg:path></svg:g>`,
})
export class MingcuteSafeShieldFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteSafeShieldLineIcon],svg[mingcute-safe-shield-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M11.298 2.195a2 2 0 0 1 1.232-.055l.172.055l7 2.625a2 2 0 0 1 1.291 1.708l.007.165v5.363a9 9 0 0 1-4.709 7.911l-.266.139l-3.354 1.677a1.5 1.5 0 0 1-1.198.062l-.144-.062l-3.354-1.677a9 9 0 0 1-4.97-7.75l-.005-.3V6.693a2 2 0 0 1 1.145-1.808l.153-.065zM12 4.068L5 6.693v5.363a7 7 0 0 0 3.635 6.138l.235.123L12 19.882l3.13-1.565a7 7 0 0 0 3.865-5.997l.005-.264V6.693zm-.492 3.448a1.4 1.4 0 0 1 .846-.043l.138.043l2.8 1.05a1.4 1.4 0 0 1 .902 1.178l.006.133v2.145a4.2 4.2 0 0 1-2.131 3.655l-.19.102l-1.342.67a1.2 1.2 0 0 1-.944.056l-.13-.055l-1.341-.671a4.2 4.2 0 0 1-2.316-3.54l-.006-.217V9.877a1.4 1.4 0 0 1 .786-1.258l.122-.053zM12 9.468l-2.2.825v1.73a2.2 2.2 0 0 0 1.07 1.887l.146.08l.984.492l.984-.492a2.2 2.2 0 0 0 1.21-1.802l.006-.166v-1.729z"></svg:path></svg:g>`,
})
export class MingcuteSafeShieldLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteSafetyCertificateFillIcon],svg[mingcute-safety-certificate-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M11.298 2.195a2 2 0 0 1 1.232-.055l.172.055l7 2.625a2 2 0 0 1 1.291 1.708l.007.165v5.363a9 9 0 0 1-4.709 7.911l-.266.139l-3.354 1.677a1.5 1.5 0 0 1-1.198.062l-.144-.062l-3.354-1.677a9 9 0 0 1-4.97-7.75l-.005-.3V6.693a2 2 0 0 1 1.145-1.808l.153-.065zm4.135 6.434l-4.598 4.598l-1.768-1.768a1 1 0 0 0-1.414 1.415l2.404 2.404a1.1 1.1 0 0 0 1.556 0l5.234-5.235a1 1 0 1 0-1.414-1.414"></svg:path></svg:g>`,
})
export class MingcuteSafetyCertificateFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteSafetyCertificateLineIcon],svg[mingcute-safety-certificate-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M11.298 2.195a2 2 0 0 1 1.232-.055l.172.055l7 2.625a2 2 0 0 1 1.291 1.708l.007.165v5.363a9 9 0 0 1-4.709 7.911l-.266.139l-3.354 1.677a1.5 1.5 0 0 1-1.198.062l-.144-.062l-3.354-1.677a9 9 0 0 1-4.97-7.75l-.005-.3V6.693a2 2 0 0 1 1.145-1.808l.153-.065zM12 4.068L5 6.693v5.363a7 7 0 0 0 3.635 6.138l.235.123L12 19.882l3.13-1.565a7 7 0 0 0 3.865-5.997l.005-.264V6.693zm3.433 4.561a1 1 0 0 1 1.497 1.32l-.083.094l-5.234 5.235a1.1 1.1 0 0 1-1.46.085l-.096-.085l-2.404-2.404a1 1 0 0 1 1.32-1.498l.094.083l1.768 1.768z"></svg:path></svg:g>`,
})
export class MingcuteSafetyCertificateLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteSagittariusFillIcon],svg[mingcute-sagittarius-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M6 2a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4V6a4 4 0 0 0-4-4zm11.714 5.286a1 1 0 0 0-1-1H12a1 1 0 1 0 0 2h2.3l-4.186 4.185l-.707-.707a1 1 0 0 0-1.414 1.415l.707.707l-2.121 2.12a1 1 0 1 0 1.414 1.415l2.121-2.121l.707.707a1 1 0 0 0 1.415-1.414l-.707-.707L15.714 9.7V12a1 1 0 0 0 2 0z"></svg:path></svg:g>`,
})
export class MingcuteSagittariusFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteSagittariusLineIcon],svg[mingcute-sagittarius-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M11 4.929a1 1 0 0 1 1-1h7.071a1 1 0 0 1 1 1v7.07a1 1 0 1 1-2 0V7.344l-7.485 7.485L12 16.242a1 1 0 0 1-1.414 1.415l-1.414-1.415l-3.536 3.536a1 1 0 0 1-1.414-1.414l3.535-3.536l-1.414-1.414A1 1 0 1 1 7.757 12l1.415 1.414l7.485-7.485H12a1 1 0 0 1-1-1"></svg:path></svg:g>`,
})
export class MingcuteSagittariusLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteSailboatFillIcon],svg[mingcute-sailboat-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M12.72 2.04a1 1 0 0 1 1.124.423l7 11A1 1 0 0 1 20 15h-7a1 1 0 0 1-1-1V3a1 1 0 0 1 .72-.96M3.19 16.415A1 1 0 0 1 4 16h16a1 1 0 0 1 .948 1.32c-.207.61-.51 1.2-.866 1.735C19.542 19.865 18.531 21 17 21H7c-1.53 0-2.542-1.135-3.082-1.945a7.5 7.5 0 0 1-.866-1.736a1.01 1.01 0 0 1 .137-.904ZM9.152 5.47A1 1 0 0 1 11 6v8a1 1 0 0 1-1 1H5a1 1 0 0 1-.848-1.53z"></svg:path></svg:g>`,
})
export class MingcuteSailboatFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteSailboatLineIcon],svg[mingcute-sailboat-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M12.72 2.04a1 1 0 0 1 1.124.423l7 11A1 1 0 0 1 20 15h-7a1 1 0 0 1-1-1V3a1 1 0 0 1 .72-.96M14 6.434V13h4.178zM3.19 16.415A1 1 0 0 1 4 16h16a1 1 0 0 1 .949 1.316a7.4 7.4 0 0 1-.867 1.739C19.542 19.865 18.531 21 17 21H7c-1.53 0-2.542-1.135-3.082-1.945a7.4 7.4 0 0 1-.866-1.737a1.01 1.01 0 0 1 .137-.903ZM5.619 18c.45.654.925 1 1.381 1h10c.457 0 .932-.346 1.381-1H5.62ZM9.152 5.47A1 1 0 0 1 11 6v8a1 1 0 0 1-1 1H5a1 1 0 0 1-.848-1.53zM9 13V9.487L6.804 13z"></svg:path></svg:g>`,
})
export class MingcuteSailboatLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteSaleFillIcon],svg[mingcute-sale-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M9.405 2.897a4 4 0 0 1 5.02-.136l.17.136l.376.32a2 2 0 0 0 .96.45l.178.022l.493.04a4 4 0 0 1 3.648 3.468l.021.2l.04.494a2 2 0 0 0 .36.996l.11.142l.322.376a4 4 0 0 1 .136 5.02l-.136.17l-.321.376a2 2 0 0 0-.45.96l-.022.178l-.039.493a4 4 0 0 1-3.468 3.648l-.201.021l-.493.04a2 2 0 0 0-.996.36l-.142.111l-.377.32a4 4 0 0 1-5.02.137l-.169-.136l-.376-.321a2 2 0 0 0-.96-.45l-.178-.021l-.493-.04a4 4 0 0 1-3.648-3.468l-.021-.2l-.04-.494a2 2 0 0 0-.36-.996l-.111-.142l-.321-.377a4 4 0 0 1-.136-5.02l.136-.169l.32-.376a2 2 0 0 0 .45-.96l.022-.178l.04-.493A4 4 0 0 1 7.197 3.75l.2-.021l.494-.04a2 2 0 0 0 .996-.36l.142-.111zM14.5 13a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3m-.207-4.707l-6 6a1 1 0 1 0 1.414 1.414l6-6a1 1 0 0 0-1.414-1.414M9.5 8a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3"></svg:path></svg:g>`,
})
export class MingcuteSaleFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteSaleLineIcon],svg[mingcute-sale-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M14.594 2.897a4 4 0 0 0-5.189 0l-.376.32a2 2 0 0 1-1.138.472l-.493.04a4 4 0 0 0-3.67 3.669l-.039.493a2 2 0 0 1-.471 1.138l-.321.376a4 4 0 0 0 0 5.19l.32.376a2 2 0 0 1 .472 1.138l.04.493a4 4 0 0 0 3.669 3.67l.493.039a2 2 0 0 1 1.138.471l.376.32a4 4 0 0 0 5.19 0l.376-.32a2 2 0 0 1 1.138-.471l.493-.04a4 4 0 0 0 3.67-3.669l.038-.493a2 2 0 0 1 .472-1.138l.32-.377a4 4 0 0 0 0-5.189l-.32-.376a2 2 0 0 1-.472-1.138l-.039-.493a4 4 0 0 0-3.669-3.67l-.493-.039a2 2 0 0 1-1.138-.471zM10.703 4.42a2 2 0 0 1 2.594 0l.377.321a4 4 0 0 0 2.276.943l.493.04a2 2 0 0 1 1.834 1.834l.04.493a4 4 0 0 0 .943 2.276l.32.377a2 2 0 0 1 0 2.594l-.32.377a4 4 0 0 0-.943 2.276l-.04.493a2 2 0 0 1-1.834 1.834l-.493.04a4 4 0 0 0-2.276.943l-.377.32a2 2 0 0 1-2.594 0l-.377-.32a4 4 0 0 0-2.276-.943l-.493-.04a2 2 0 0 1-1.835-1.834l-.04-.493a4 4 0 0 0-.942-2.276l-.32-.377a2 2 0 0 1 0-2.594l.32-.377a4 4 0 0 0 .943-2.276l.04-.493a2 2 0 0 1 1.834-1.835l.493-.039a4 4 0 0 0 2.276-.943zm5.004 5.288a1 1 0 1 0-1.414-1.414l-6 6a1 1 0 1 0 1.414 1.414zM11 9.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0m3.5 6.5a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3"></svg:path></svg:g>`,
})
export class MingcuteSaleLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteSandglass2FillIcon],svg[mingcute-sandglass-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M5 4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v1c0 1.441-.609 2.984-1.4 4.316A14.3 14.3 0 0 1 15.533 12a14.3 14.3 0 0 1 2.065 2.684C18.391 16.016 19 17.56 19 19v1a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-1c0-1.441.609-2.984 1.4-4.316A14.3 14.3 0 0 1 8.467 12c-.756-.767-1.48-1.7-2.065-2.684C5.609 7.984 5 6.44 5 5z"></svg:path></svg:g>`,
})
export class MingcuteSandglass2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteSandglass2LineIcon],svg[mingcute-sandglass-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M5 4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v1c0 1.441-.609 2.984-1.4 4.316A14.3 14.3 0 0 1 15.533 12a14.3 14.3 0 0 1 2.065 2.684C18.391 16.016 19 17.56 19 19v1a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-1c0-1.441.609-2.984 1.4-4.316A14.3 14.3 0 0 1 8.467 12c-.756-.767-1.48-1.7-2.065-2.684C5.609 7.984 5 6.44 5 5zm12 0H7v1c0 .929.414 2.107 1.12 3.294c.696 1.17 1.609 2.236 2.458 2.933a1 1 0 0 1 0 1.546c-.85.697-1.762 1.763-2.458 2.933C7.414 16.893 7 18.071 7 19v1h10v-1c0-.929-.414-2.107-1.12-3.294c-.696-1.17-1.609-2.236-2.458-2.933a1 1 0 0 1 0-1.546c.85-.697 1.762-1.763 2.458-2.933C16.586 7.107 17 5.929 17 5z"></svg:path></svg:g>`,
})
export class MingcuteSandglass2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteSandglassFillIcon],svg[mingcute-sandglass-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M5 4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v1.86a5 5 0 0 1-2.227 4.16L13.803 12l2.97 1.98A5 5 0 0 1 19 18.14V20a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-1.86a5 5 0 0 1 2.226-4.16L10.198 12l-2.97-1.98A5 5 0 0 1 5 5.86z"></svg:path></svg:g>`,
})
export class MingcuteSandglassFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteSandglassLineIcon],svg[mingcute-sandglass-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M5 4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v1.86a5 5 0 0 1-2.227 4.16L13.803 12l2.97 1.98A5 5 0 0 1 19 18.14V20a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-1.86a5 5 0 0 1 2.226-4.16L10.198 12l-2.97-1.98A5 5 0 0 1 5 5.86zm7 6.798l3.664-2.443A3 3 0 0 0 17 5.86V4H7v1.86a3 3 0 0 0 1.336 2.495zm0 2.404l-3.664 2.443A3 3 0 0 0 7 18.14V20h10v-1.86a3 3 0 0 0-1.336-2.495z"></svg:path></svg:g>`,
})
export class MingcuteSandglassLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteSandstormFillIcon],svg[mingcute-sandstorm-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M18.5 5.5a4 4 0 0 1 0 8H3a1.5 1.5 0 0 1 0-3h15.5a1 1 0 1 0-.727-1.687L17.7 8.9a1.5 1.5 0 1 1-2.398-1.802A4 4 0 0 1 18.5 5.5m-7.5-3a3.5 3.5 0 1 1 0 7H5a1.5 1.5 0 1 1 0-3h6a.5.5 0 1 0-.249-.934A1.5 1.5 0 1 1 9.25 2.969A3.5 3.5 0 0 1 11 2.5M5 3a1 1 0 1 1 0 2a1 1 0 0 1 0-2m12 0a1 1 0 1 1 0 2a1 1 0 0 1 0-2M9 19a1 1 0 1 1 0 2a1 1 0 0 1 0-2m5.5-4.5a3 3 0 1 1-1 5.829a1.5 1.5 0 0 1 .001-2.829H7a1.5 1.5 0 0 1 0-3zM21 17a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path></svg:g>`,
})
export class MingcuteSandstormFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteSandstormLineIcon],svg[mingcute-sandstorm-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M18.5 6a3.5 3.5 0 1 1 0 7H3a1 1 0 1 1 0-2h15.5a1.5 1.5 0 1 0-1.436-1.936l-.034.135a1 1 0 1 1-1.96-.398A3.5 3.5 0 0 1 18.5 6M11 3a3 3 0 1 1 0 6H5a1 1 0 0 1 0-2h6a1 1 0 1 0-.803-1.596l-.064.097a1 1 0 0 1-1.731-1.002A3 3 0 0 1 11 3M5 3a1 1 0 1 1 0 2a1 1 0 0 1 0-2m12 0a1 1 0 1 1 0 2a1 1 0 0 1 0-2M9 19a1 1 0 1 1 0 2a1 1 0 0 1 0-2m5.5-4a2.5 2.5 0 1 1-1.667 4.363a1 1 0 0 1 1.235-1.568l.099.078A.5.5 0 1 0 14.5 17H7a1 1 0 1 1 0-2zm6.5 2a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path></svg:g>`,
})
export class MingcuteSandstormLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteSave2FillIcon],svg[mingcute-save-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M8 3v3.5A1.5 1.5 0 0 0 9.5 8h4A1.5 1.5 0 0 0 15 6.5V3h.586A2 2 0 0 1 17 3.586L19.414 6A2 2 0 0 1 20 7.414V19a2 2 0 0 1-2 2h-2v-7a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v7H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm6 11v7H9v-7zM13 3v3h-3V3z"></svg:path></svg:g>`,
})
export class MingcuteSave2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteSave2LineIcon],svg[mingcute-save-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M15.586 3A2 2 0 0 1 17 3.586L19.414 6A2 2 0 0 1 20 7.414V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zM8 5H5v14h2v-5a2 2 0 0 1 2-2h5a2 2 0 0 1 2 2v5h2V7.414L15.586 5H15v2.5A1.5 1.5 0 0 1 13.5 9h-4A1.5 1.5 0 0 1 8 7.5zm6 9H9v5h5zm-1-9h-3v2h3z"></svg:path></svg:g>`,
})
export class MingcuteSave2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteSaveFillIcon],svg[mingcute-save-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M6 2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6.414A2 2 0 0 0 19.414 5L17 2.586A2 2 0 0 0 15.586 2zm10.238 8.793a1 1 0 1 0-1.414-1.414l-4.242 4.243l-1.415-1.415a1 1 0 0 0-1.414 1.414l2.05 2.051a1.1 1.1 0 0 0 1.556 0l4.88-4.879Z"></svg:path></svg:g>`,
})
export class MingcuteSaveFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteSaveLineIcon],svg[mingcute-save-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M6 2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6.414A2 2 0 0 0 19.414 5L17 2.586A2 2 0 0 0 15.586 2zm0 2h9.586L18 6.414V20H6zm10.238 6.793a1 1 0 1 0-1.414-1.414l-4.242 4.243l-1.415-1.415a1 1 0 0 0-1.414 1.414l2.05 2.051a1.1 1.1 0 0 0 1.556 0l4.88-4.879Z"></svg:path></svg:g>`,
})
export class MingcuteSaveLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteScaleFillIcon],svg[mingcute-scale-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M13.17 3a3.01 3.01 0 0 0 .59 2.997L11.997 7.76A3 3 0 0 0 7 10v3.749A3.25 3.25 0 0 0 10.25 17H14a3 3 0 0 0 2.24-4.996l1.764-1.765a3 3 0 0 0 2.997.59L20.999 19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm6.58 0c.69 0 1.25.56 1.25 1.25V8a1 1 0 1 1-2 0V6.414L12.414 13H14a1 1 0 1 1 0 2h-3.75C9.56 15 9 14.44 9 13.75V10a1 1 0 0 1 2 0v1.586L17.586 5H16a1 1 0 1 1 0-2z"></svg:path></svg:g>`,
})
export class MingcuteScaleFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteScaleLineIcon],svg[mingcute-scale-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M11 3a1 1 0 0 1 .117 1.993L11 5H5v14h14v-6a1 1 0 0 1 1.993-.117L21 13v6a2 2 0 0 1-1.85 1.995L19 21H5a2 2 0 0 1-1.995-1.85L3 19V5a2 2 0 0 1 1.85-1.995L5 3zm8.75 0c.69 0 1.25.56 1.25 1.25V8a1 1 0 1 1-2 0V6.414L12.414 13H14a1 1 0 1 1 0 2h-3.75C9.56 15 9 14.44 9 13.75V10a1 1 0 0 1 2 0v1.586L17.586 5H16a1 1 0 1 1 0-2z"></svg:path></svg:g>`,
})
export class MingcuteScaleLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteScan2FillIcon],svg[mingcute-scan-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M12 4.5a7.5 7.5 0 1 0 6.258 3.364L13.06 13.06a1.5 1.5 0 0 1-2.122-2.122l6.357-6.357a1.51 1.51 0 0 1 2.137.002A10.47 10.47 0 0 1 22.5 12c0 5.799-4.701 10.5-10.5 10.5S1.5 17.799 1.5 12S6.201 1.5 12 1.5c1.01 0 1.988.143 2.916.41a1.5 1.5 0 0 1-.832 2.883A7.5 7.5 0 0 0 12 4.5"></svg:path></svg:g>`,
})
export class MingcuteScan2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteScan2LineIcon],svg[mingcute-scan-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M12 4a8 8 0 1 0 6.32 3.094l-5.613 5.613a1 1 0 0 1-1.414-1.414l6.357-6.357a1.01 1.01 0 0 1 1.429 0A9.97 9.97 0 0 1 22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2c.962 0 1.894.136 2.777.391a1 1 0 0 1-.554 1.922A8 8 0 0 0 12 4"></svg:path></svg:g>`,
})
export class MingcuteScan2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteScanFillIcon],svg[mingcute-scan-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M4 14.5A1.5 1.5 0 0 1 5.5 16v2.5H9a1.5 1.5 0 0 1 0 3H5A2.5 2.5 0 0 1 2.5 19v-3A1.5 1.5 0 0 1 4 14.5m16 0a1.5 1.5 0 0 1 1.493 1.356L21.5 16v3a2.5 2.5 0 0 1-2.336 2.495L19 21.5h-4a1.5 1.5 0 0 1-.144-2.993L15 18.5h3.5V16a1.5 1.5 0 0 1 1.5-1.5m0-4a1.5 1.5 0 0 1 .144 2.993L20 13.5H4a1.5 1.5 0 0 1-.144-2.993L4 10.5zm-11-8a1.5 1.5 0 0 1 .144 2.993L9 5.5H5.5V8a1.5 1.5 0 0 1-2.993.144L2.5 8V5a2.5 2.5 0 0 1 2.336-2.495L5 2.5zm10 0a2.5 2.5 0 0 1 2.495 2.336L21.5 5v3a1.5 1.5 0 0 1-2.993.144L18.5 8V5.5H15a1.5 1.5 0 0 1-.144-2.993L15 2.5z"></svg:path></svg:g>`,
})
export class MingcuteScanFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteScanLineIcon],svg[mingcute-scan-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M4 15a1 1 0 0 1 .993.883L5 16v3h4a1 1 0 0 1 .117 1.993L9 21H5a2 2 0 0 1-1.995-1.85L3 19v-3a1 1 0 0 1 1-1m16 0a1 1 0 0 1 1 1v3a2 2 0 0 1-2 2h-4a1 1 0 1 1 0-2h4v-3a1 1 0 0 1 1-1m0-4a1 1 0 0 1 .117 1.993L20 13H4a1 1 0 0 1-.117-1.993L4 11zM9 3a1 1 0 0 1 0 2H5v3a1 1 0 0 1-2 0V5a2 2 0 0 1 2-2zm10 0a2 2 0 0 1 2 2v3a1 1 0 1 1-2 0V5h-4a1 1 0 1 1 0-2z"></svg:path></svg:g>`,
})
export class MingcuteScanLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteScarfFillIcon],svg[mingcute-scarf-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M8.828 3a3 3 0 0 0-2.12.879l-3.001 3a3 3 0 0 0 0 4.242l1.465 1.465a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0 0-1.414L8.478 5.064A1 1 0 0 1 8.828 5h6.344a1 1 0 0 1 .35.064l-7.23 7.229a3.82 3.82 0 0 0-1.12 2.73a3.8 3.8 0 0 0 1.121 2.685a3.82 3.82 0 0 0 3.101 1.1l1.399 1.4a1 1 0 0 0 1.414-1.415l-.809-.809q.16-.129.31-.277l.292-.293l1.293 1.293a1 1 0 0 0 1.414-1.414L15.414 16l.586-.586l1.793 1.793a1 1 0 0 0 1.414-1.414L17.414 14l2.879-2.879a3 3 0 0 0 0-4.242l-3-3A3 3 0 0 0 15.172 3z"></svg:path></svg:g>`,
})
export class MingcuteScarfFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteScarfLineIcon],svg[mingcute-scarf-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M8.828 3a3 3 0 0 0-2.12.879l-3.001 3a3 3 0 0 0 0 4.242l3.485 3.485a3.82 3.82 0 0 0 1.1 3.101a3.82 3.82 0 0 0 3.102 1.101l1.399 1.4a1 1 0 0 0 1.414-1.415l-.809-.809q.16-.129.31-.277l.292-.293l1.293 1.293a1 1 0 0 0 1.414-1.414L15.414 16l.586-.586l1.793 1.793a1 1 0 0 0 1.414-1.414L17.414 14l2.879-2.879a3 3 0 0 0 0-4.242l-3-3A3 3 0 0 0 15.172 3zm10.05 6.707a1 1 0 0 0 0-1.414l-3-3A1 1 0 0 0 15.172 5H8.829a1 1 0 0 0-.707.293l-3 3a1 1 0 0 0 0 1.414l2.895 2.894q.128-.16.277-.308L10.586 10L9.293 8.707a1 1 0 0 1 1.414-1.414L12 8.586l2.293-2.293a1 1 0 1 1 1.414 1.414l-6 6a1.828 1.828 0 0 0 2.586 2.586z"></svg:path></svg:g>`,
})
export class MingcuteScarfLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteScheduleFillIcon],svg[mingcute-schedule-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M16 3a1 1 0 0 1 1 1v1h2a2 2 0 0 1 1.995 1.85L21 7v12a2 2 0 0 1-1.85 1.995L19 21H5a2 2 0 0 1-1.995-1.85L3 19V7a2 2 0 0 1 1.85-1.995L5 5h2V4a1 1 0 0 1 2 0v1h6V4a1 1 0 0 1 1-1m-1.176 6.379l-4.242 4.242l-1.415-1.414a1 1 0 0 0-1.414 1.414l2.114 2.115a1.01 1.01 0 0 0 1.429 0l4.942-4.943a1 1 0 1 0-1.414-1.414"></svg:path></svg:g>`,
})
export class MingcuteScheduleFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteScheduleLineIcon],svg[mingcute-schedule-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M16 3a1 1 0 0 1 1 1v1h2a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2V4a1 1 0 1 1 2 0v1h6V4a1 1 0 0 1 1-1m3 4H5v12h14zm-4.176 2.379a1 1 0 0 1 1.414 1.414l-4.942 4.943a1.01 1.01 0 0 1-1.429 0L7.753 13.62a1 1 0 0 1 1.414-1.414l1.415 1.414Z"></svg:path></svg:g>`,
})
export class MingcuteScheduleLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteSchoolFillIcon],svg[mingcute-school-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M11.063 2.469a1.5 1.5 0 0 1 1.753-.087l.121.087l4.312 3.45a2 2 0 0 1 .743 1.38L18 7.48V19h1v-8.5a.5.5 0 0 1 .41-.492L19.5 10h.5a2 2 0 0 1 1.995 1.85L22 12v7.9a1.1 1.1 0 0 1-.98 1.093L20.9 21H3.1a1.1 1.1 0 0 1-1.094-.98L2 19.9V12a2 2 0 0 1 1.85-1.995L4 10h.5a.5.5 0 0 1 .492.41L5 10.5V19h1V7.48a2 2 0 0 1 .614-1.442l.137-.12zM12 8.999a2 2 0 1 0 0 4a2 2 0 0 0 0-4"></svg:path></svg:g>`,
})
export class MingcuteSchoolFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteSchoolLineIcon],svg[mingcute-school-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M11.063 2.469a1.5 1.5 0 0 1 1.753-.087l.121.087l4.312 3.45a2 2 0 0 1 .743 1.38L18 7.48V10h2a2 2 0 0 1 1.995 1.85L22 12v7.9a1.1 1.1 0 0 1-.98 1.094L20.9 21H3.1a1.1 1.1 0 0 1-1.094-.98L2 19.9V12a2 2 0 0 1 1.85-1.995L4 10h2V7.48a2 2 0 0 1 .614-1.442l.137-.12zM12 4.28l-4 3.2V19h8V7.48zM20 12h-2v7h2zM6 12H4v7h2zm6-4a3 3 0 1 1 0 6a3 3 0 0 1 0-6m0 2a1 1 0 1 0 0 2a1 1 0 0 0 0-2"></svg:path></svg:g>`,
})
export class MingcuteSchoolLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteScienceFillIcon],svg[mingcute-science-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" fill-rule="nonzero" d="M4.222 4.222c1.353-1.353 3.39-1.467 5.433-.822A12.3 12.3 0 0 1 12 4.444c.803-.456 1.59-.805 2.345-1.044c2.044-.646 4.08-.531 5.433.822s1.468 3.39.822 5.433A12.3 12.3 0 0 1 19.556 12c.456.803.805 1.59 1.044 2.345c.646 2.043.531 4.08-.822 5.433s-3.39 1.468-5.433.822A12.3 12.3 0 0 1 12 19.556c-.803.456-1.59.805-2.345 1.044c-2.043.645-4.08.53-5.433-.822c-1.353-1.353-1.467-3.39-.822-5.433c.239-.756.588-1.542 1.044-2.345A12.3 12.3 0 0 1 3.4 9.655c-.645-2.043-.53-4.08.822-5.433m1.489 9.687a9 9 0 0 0-.404 1.039c-.536 1.697-.27 2.816.33 3.416c.599.6 1.718.865 3.415.329q.5-.158 1.04-.404a23 23 0 0 1-2.334-2.046a23 23 0 0 1-2.047-2.334m12.579 0a23 23 0 0 1-2.047 2.334a23 23 0 0 1-2.334 2.047q.539.245 1.039.403c1.698.536 2.816.27 3.416-.329c.6-.6.866-1.718.33-3.416a9 9 0 0 0-.404-1.04ZM12 10.5a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3m2.948-5.193a9 9 0 0 0-1.04.404a23 23 0 0 1 2.335 2.046a23 23 0 0 1 2.047 2.334q.246-.539.403-1.039c.537-1.698.271-2.816-.329-3.416s-1.718-.865-3.416-.329m-9.312.33c-.6.599-.865 1.717-.329 3.415q.158.5.404 1.04c.59-.78 1.273-1.561 2.047-2.335a23 23 0 0 1 2.333-2.046a9 9 0 0 0-1.039-.404c-1.697-.536-2.816-.27-3.416.33"></svg:path></svg:g>`,
})
export class MingcuteScienceFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteScienceLineIcon],svg[mingcute-science-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M9.655 3.4A12.3 12.3 0 0 1 12 4.444A12.3 12.3 0 0 1 14.345 3.4c2.044-.646 4.08-.531 5.433.822s1.468 3.39.822 5.433A12.3 12.3 0 0 1 19.556 12c.456.803.805 1.59 1.044 2.345c.646 2.043.531 4.08-.822 5.433s-3.39 1.468-5.433.822A12.3 12.3 0 0 1 12 19.556A12.3 12.3 0 0 1 9.655 20.6c-2.043.645-4.08.531-5.433-.822s-1.467-3.39-.822-5.433c.239-.756.588-1.542 1.044-2.345A12.3 12.3 0 0 1 3.4 9.655c-.645-2.044-.53-4.08.822-5.433c1.353-1.353 3.39-1.468 5.433-.822m8.635 10.509c-.59.778-1.274 1.56-2.047 2.334a23 23 0 0 1-2.334 2.046q.539.246 1.039.404c1.698.536 2.816.27 3.416-.33c.6-.599.866-1.718.33-3.415a9 9 0 0 0-.404-1.04Zm-12.58 0a9 9 0 0 0-.403 1.039c-.536 1.698-.27 2.816.33 3.416c.599.6 1.718.865 3.415.329q.5-.158 1.04-.404a23 23 0 0 1-2.334-2.046a23 23 0 0 1-2.047-2.334ZM12 6.8a20 20 0 0 0-2.828 2.372A20 20 0 0 0 6.8 12a20 20 0 0 0 2.37 2.828c.963.963 1.916 1.75 2.83 2.372a20 20 0 0 0 2.828-2.372A20 20 0 0 0 17.199 12a19.7 19.7 0 0 0-2.37-2.828A20 20 0 0 0 12 6.8m0 3.7a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3M5.636 5.636c-.6.6-.865 1.718-.329 3.416q.158.5.404 1.04c.59-.78 1.273-1.561 2.047-2.335a23 23 0 0 1 2.333-2.046a9 9 0 0 0-1.039-.404c-1.697-.536-2.816-.27-3.416.329m9.312-.329q-.5.158-1.039.404c.778.59 1.56 1.273 2.334 2.046a23 23 0 0 1 2.047 2.334q.246-.539.403-1.039c.537-1.698.271-2.816-.329-3.416s-1.718-.865-3.416-.329"></svg:path></svg:g>`,
})
export class MingcuteScienceLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteScissors2FillIcon],svg[mingcute-scissors-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="m7.383 1.337l6 10.394a6 6 0 0 1 8.196 2.196l.107.186a5.786 5.786 0 0 1-2.118 7.903a3.214 3.214 0 0 1-4.39-1.176L12 15.336L8.822 20.84a3.214 3.214 0 0 1-4.39 1.176a5.786 5.786 0 0 1-2.118-7.903l.107-.186a6 6 0 0 1 7.242-2.641L6.035 5.002a2.5 2.5 0 0 1 .915-3.415zm-2.364 14.09l-.107.186a2.786 2.786 0 0 0 1.02 3.805c.102.06.233.024.292-.078l2.893-5.01a3 3 0 0 0-4.098 1.097m9.864-1.098l2.893 5.01c.059.103.19.138.292.08a2.786 2.786 0 0 0 1.02-3.806l-.107-.186a3 3 0 0 0-4.098-1.098m1.734-12.992l.433.25a2.5 2.5 0 0 1 .996 3.264l-.08.151l-3.084 5.34l-1.732-3z"></svg:path></svg:g>`,
})
export class MingcuteScissors2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteScissors2LineIcon],svg[mingcute-scissors-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="m7.2 2.02l6 10.394l.433-.25a5.5 5.5 0 0 1 7.513 2.013l.107.186a5.286 5.286 0 0 1-1.935 7.22a2.714 2.714 0 0 1-3.707-.993L12 14.336L8.39 20.59a2.714 2.714 0 0 1-3.708.993a5.286 5.286 0 0 1-1.935-7.22l.107-.186a5.5 5.5 0 0 1 7.513-2.013l.432.25l.046-.08l-4.377-7.582A2 2 0 0 1 7.2 2.02M4.586 15.177l-.107.186a3.286 3.286 0 0 0 1.203 4.488c.341.197.778.08.975-.261L9.8 14.146l-.433-.25a3.5 3.5 0 0 0-4.78 1.281Zm10.047-1.281l-.433.25l3.143 5.444a.714.714 0 0 0 .975.261a3.286 3.286 0 0 0 1.203-4.488l-.107-.186a3.5 3.5 0 0 0-4.781-1.281M16.8 2.02a2 2 0 0 1 .805 2.594l-.073.138l-3.227 5.59l-1.155-2z"></svg:path></svg:g>`,
})
export class MingcuteScissors2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteScissors3FillIcon],svg[mingcute-scissors-3-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M6 2.5a4.5 4.5 0 0 1 4.287 5.87l2.57 1.8l6.198-4.338a2.5 2.5 0 0 1 3.481.613l.287.41l-5.927 4.15A1 1 0 1 1 17 13l-.11-.006l5.933 4.154l-.287.41a2.5 2.5 0 0 1-3.482.614l-6.196-4.34l-2.57 1.8a4.5 4.5 0 1 1-4.5-3.127L6 12.5l.135.002a1 1 0 0 1 0-1.004L6 11.5a4.5 4.5 0 0 1 0-9m0 13a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3m2.471-4.739a4.5 4.5 0 0 1-.865.444a.998.998 0 0 1 0 1.59q.462.177.868.445l1.769-1.238l-1.772-1.24ZM3 11a1 1 0 1 1 0 2a1 1 0 0 1 0-2m18 0a1 1 0 1 1 0 2a1 1 0 0 1 0-2m-4.9.562l-.627.44l.63.441a1 1 0 0 1-.002-.88ZM6 5.5a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3"></svg:path></svg:g>`,
})
export class MingcuteScissors3FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteScissors3LineIcon],svg[mingcute-scissors-3-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M6 3a4 4 0 0 1 3.685 5.56l3.17 2.22l6.486-4.542a2 2 0 0 1 2.786.49L14.599 12l7.528 5.271a2 2 0 0 1-2.786.491l-6.486-4.541l-3.17 2.22a4 4 0 1 1-1.217-1.59L11.112 12l-2.644-1.852A4 4 0 1 1 6 3m0 12a2 2 0 1 0 0 4a2 2 0 0 0 0-4m-3-4a1 1 0 1 1 0 2a1 1 0 0 1 0-2m4 0a1 1 0 1 1 0 2a1 1 0 0 1 0-2m10 0a1 1 0 1 1 0 2a1 1 0 0 1 0-2m4 0a1 1 0 1 1 0 2a1 1 0 0 1 0-2M6 5a2 2 0 1 0 0 4a2 2 0 0 0 0-4"></svg:path></svg:g>`,
})
export class MingcuteScissors3LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteScissorsFillIcon],svg[mingcute-scissors-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M18.172 4.945a2.5 2.5 0 0 0-.614-3.481l-.41-.287l-5.146 7.35l-5.147-7.35l-.41.287a2.5 2.5 0 0 0-.613 3.481l4.339 6.197l-1.8 2.57a4.5 4.5 0 1 0 2.39 1.816l1.24-1.77l1.24 1.768a4.5 4.5 0 1 0 2.392-1.815l-1.8-2.569zM5.5 18a1.5 1.5 0 1 1 3 0a1.5 1.5 0 0 1-3 0m10 0a1.5 1.5 0 1 1 3 0a1.5 1.5 0 0 1-3 0"></svg:path></svg:g>`,
})
export class MingcuteScissorsFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteScissorsLineIcon],svg[mingcute-scissors-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M6.238 4.659a2 2 0 0 1 .491-2.786L12 9.401l5.271-7.528a2 2 0 0 1 .491 2.786l-4.541 6.486l2.22 3.17a4 4 0 1 1-1.59 1.217l-1.85-2.644l-1.852 2.645a4 4 0 1 1-1.59-1.217l2.22-3.171zM7 16a2 2 0 1 0 0 4a2 2 0 0 0 0-4m10 0a2 2 0 1 0 0 4a2 2 0 0 0 0-4"></svg:path></svg:g>`,
})
export class MingcuteScissorsLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteScooterFillIcon],svg[mingcute-scooter-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M6 16a3 3 0 1 1 0 6a3 3 0 0 1 0-6m13 0a3 3 0 1 1 0 6a3 3 0 0 1 0-6M18 2a1 1 0 1 1 0 2h-.69l2.651 9.724A1.01 1.01 0 0 1 18.987 15h-.756a2.61 2.61 0 0 0-2.334 1.442c-.171.342-.52.558-.903.558h-4.166c-1.143 0-1.902-.66-2.656-1.414A2 2 0 0 0 6.757 15H5a1 1 0 1 1 0-2h1.757a4 4 0 0 1 2.829 1.172l.29.303c.264.273.554.525.952.525h3.603a4.6 4.6 0 0 1 3.268-1.97L15.236 4H14a1 1 0 1 1 0-2z"></svg:path></svg:g>`,
})
export class MingcuteScooterFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteScooterLineIcon],svg[mingcute-scooter-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M6 16a3 3 0 1 1 0 6a3 3 0 0 1 0-6m13 0a3 3 0 1 1 0 6a3 3 0 0 1 0-6M6 18a1 1 0 1 0 0 2a1 1 0 0 0 0-2m13 0a1 1 0 1 0 0 2a1 1 0 0 0 0-2M18 2a1 1 0 1 1 0 2h-.69l2.651 9.724A1.01 1.01 0 0 1 18.987 15h-.756a2.61 2.61 0 0 0-2.334 1.442c-.171.342-.52.558-.903.558h-4.166c-1.143 0-1.902-.66-2.656-1.414A2 2 0 0 0 6.757 15H5a1 1 0 1 1 0-2h1.757a4 4 0 0 1 2.829 1.172l.29.303c.264.273.554.525.952.525h3.603a4.6 4.6 0 0 1 3.268-1.97L15.236 4H14a1 1 0 1 1 0-2z"></svg:path></svg:g>`,
})
export class MingcuteScooterLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteScorpioFillIcon],svg[mingcute-scorpio-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M2 6a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4zm3.667.667a1 1 0 0 1 1-1h.666c.496 0 .956.155 1.334.418A2.3 2.3 0 0 1 10 5.667c.496 0 .956.155 1.333.418A2.333 2.333 0 0 1 15 8v6.667a1 1 0 0 0 .48.854a1 1 0 0 1 1.56-1.228l1.667 1.667a1 1 0 0 1 0 1.414l-1.666 1.667a1 1 0 0 1-1.43-1.399a3 3 0 0 1-2.61-2.975V8a.333.333 0 0 0-.668 0v6a1 1 0 1 1-2 0V8a.333.333 0 1 0-.666 0v6a1 1 0 1 1-2 0V8a.333.333 0 0 0-.334-.333h-.666a1 1 0 0 1-1-1"></svg:path></svg:g>`,
})
export class MingcuteScorpioFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteScorpioLineIcon],svg[mingcute-scorpio-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M3 4a1 1 0 0 1 1-1h1c.768 0 1.47.289 2 .764A3 3 0 0 1 9 3c.768 0 1.47.289 2 .764A3 3 0 0 1 16 6v10a2 2 0 0 0 2 2h.586l-.793-.793a1 1 0 0 1 1.414-1.414l2.5 2.5a1 1 0 0 1 0 1.414l-2.5 2.5a1 1 0 0 1-1.414-1.414l.793-.793H18a4 4 0 0 1-4-4V6a1 1 0 1 0-2 0v9a1 1 0 1 1-2 0V6a1 1 0 0 0-2 0v9a1 1 0 1 1-2 0V6a1 1 0 0 0-1-1H4a1 1 0 0 1-1-1"></svg:path></svg:g>`,
})
export class MingcuteScorpioLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteScreenshotFillIcon],svg[mingcute-screenshot-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M17 4.5a2.5 2.5 0 0 1 2.495 2.336L19.5 7v9.5H21a1.5 1.5 0 0 1 .144 2.993L21 19.5h-1.5V21a1.5 1.5 0 0 1-2.993.144L16.5 21V7.5h-7v-3zm-11-3A1.5 1.5 0 0 1 7.5 3v13.5h7v3H7A2.5 2.5 0 0 1 4.5 17V7.5H3a1.5 1.5 0 1 1 0-3h1.5V3A1.5 1.5 0 0 1 6 1.5"></svg:path></svg:g>`,
})
export class MingcuteScreenshotFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteScreenshotLineIcon],svg[mingcute-screenshot-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M17 5a2 2 0 0 1 1.995 1.85L19 7v10h2a1 1 0 0 1 .117 1.993L21 19h-2v2a1 1 0 0 1-1.993.117L17 21V7H9V5zM6 2a1 1 0 0 1 .993.883L7 3v14h8v2H7a2 2 0 0 1-1.995-1.85L5 17V7H3a1 1 0 0 1-.117-1.993L3 5h2V3a1 1 0 0 1 1-1"></svg:path></svg:g>`,
})
export class MingcuteScreenshotLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteScrewdriverFillIcon],svg[mingcute-screwdriver-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M19.264 3.364a1 1 0 0 1 1.221.15l.008.008a1 1 0 0 1 .148 1.225l-1.068 1.761a1 1 0 0 1-1.114.447l-3.63 3.63l.414.415c.951.951.925 2.489-.01 3.423a2.38 2.38 0 0 1-1.679.698a.37.37 0 0 0-.33.205l-.891 1.78a3 3 0 0 1-.562.78l-3.306 3.306a3 3 0 0 1-4.243 0l-1.414-1.414a3 3 0 0 1 0-4.243l3.306-3.306a3 3 0 0 1 .78-.562l1.78-.89a.37.37 0 0 0 .205-.331c0-.633.256-1.238.698-1.68c.934-.934 2.472-.96 3.423-.009l.414.414l3.63-3.63a1 1 0 0 1 .452-1.116zM9.172 14.828a1 1 0 0 1 0 1.414L7.05 18.364a1 1 0 0 1-1.415-1.415l2.122-2.12a1 1 0 0 1 1.414 0"></svg:path></svg:g>`,
})
export class MingcuteScrewdriverFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteScrewdriverLineIcon],svg[mingcute-screwdriver-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M19.264 3.364a1 1 0 0 1 1.221.15l.007.008a1 1 0 0 1 .148 1.225l-1.068 1.761a1 1 0 0 1-1.113.447l-3.63 3.63l.413.415c.952.951.925 2.489-.009 3.423a2.38 2.38 0 0 1-1.68.698a.37.37 0 0 0-.33.205l-.89 1.78a3 3 0 0 1-.563.78l-3.306 3.306a3 3 0 0 1-4.242 0l-1.415-1.414a3 3 0 0 1 0-4.243l3.306-3.306a3 3 0 0 1 .78-.562l1.78-.89a.37.37 0 0 0 .205-.331c0-.633.257-1.238.698-1.68c.935-.934 2.473-.96 3.424-.009l.414.414l3.63-3.63a1 1 0 0 1 .452-1.116zm-6.558 7.928l-1.12-1.12a.426.426 0 0 0-.595.009a.38.38 0 0 0-.112.265a2.37 2.37 0 0 1-1.31 2.12l-1.781.89a1 1 0 0 0-.26.188L4.222 16.95a1 1 0 0 0 0 1.414l1.414 1.414a1 1 0 0 0 1.414 0l3.306-3.306a1 1 0 0 0 .187-.26l.89-1.78a2.37 2.37 0 0 1 2.12-1.31a.38.38 0 0 0 .266-.113a.426.426 0 0 0 .01-.595l-1.12-1.12zm-4.949 3.536a1 1 0 0 1 1.414 1.415l-2.121 2.12a1 1 0 1 1-1.414-1.413z"></svg:path></svg:g>`,
})
export class MingcuteScrewdriverLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteSealFillIcon],svg[mingcute-seal-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M6 8a6 6 0 1 1 8.4 5.5a.3.3 0 0 0-.139.123L14.36 15H18a3 3 0 0 1 3 3v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a3 3 0 0 1 3-3h3.64l.099-1.376a.3.3 0 0 0-.14-.124A6 6 0 0 1 6 8"></svg:path></svg:g>`,
})
export class MingcuteSealFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteSealLineIcon],svg[mingcute-seal-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M6 8a6 6 0 1 1 8.861 5.275a.3.3 0 0 0-.105.093l-.011.024L14.86 15H18a3 3 0 0 1 3 3v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a3 3 0 0 1 3-3h3.14l.115-1.608l-.01-.024a.3.3 0 0 0-.106-.093A6 6 0 0 1 6 8m6-4a4 4 0 0 0-1.906 7.518c.66.358 1.222 1.095 1.156 2.015l-.115 1.61A2 2 0 0 1 9.14 17H6a1 1 0 0 0-1 1v2h14v-2a1 1 0 0 0-1-1h-3.14a2 2 0 0 1-1.995-1.857l-.115-1.61c-.066-.92.497-1.657 1.156-2.015A4 4 0 0 0 12 4"></svg:path></svg:g>`,
})
export class MingcuteSealLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteSearch2FillIcon],svg[mingcute-search-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M5.5 10a4.5 4.5 0 1 1 9 0a4.5 4.5 0 0 1-9 0M10 2.5a7.5 7.5 0 1 0 4.136 13.757l4.803 4.804a1.5 1.5 0 0 0 2.122-2.122l-4.804-4.803A7.5 7.5 0 0 0 10 2.5"></svg:path></svg:g>`,
})
export class MingcuteSearch2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteSearch2LineIcon],svg[mingcute-search-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M5 10a5 5 0 1 1 10 0a5 5 0 0 1-10 0m5-7a7 7 0 1 0 4.192 12.606l5.1 5.101a1 1 0 0 0 1.415-1.414l-5.1-5.1A7 7 0 0 0 10 3"></svg:path></svg:g>`,
})
export class MingcuteSearch2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteSearch3FillIcon],svg[mingcute-search-3-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M2 10.5a8.5 8.5 0 1 1 15.176 5.262l3.652 3.652a1 1 0 0 1-1.414 1.414l-3.652-3.652A8.5 8.5 0 0 1 2 10.5M10.5 6a1 1 0 0 0 0 2a2.5 2.5 0 0 1 2.5 2.5a1 1 0 1 0 2 0A4.5 4.5 0 0 0 10.5 6"></svg:path></svg:g>`,
})
export class MingcuteSearch3FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteSearch3LineIcon],svg[mingcute-search-3-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M10.5 4a6.5 6.5 0 1 0 0 13a6.5 6.5 0 0 0 0-13M2 10.5a8.5 8.5 0 1 1 15.176 5.262l3.652 3.652a1 1 0 0 1-1.414 1.414l-3.652-3.652A8.5 8.5 0 0 1 2 10.5M9.5 7a1 1 0 0 1 1-1a4.5 4.5 0 0 1 4.5 4.5a1 1 0 1 1-2 0A2.5 2.5 0 0 0 10.5 8a1 1 0 0 1-1-1"></svg:path></svg:g>`,
})
export class MingcuteSearch3LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteSearchAiFillIcon],svg[mingcute-search-ai-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M10.5 2c1.251 0 2.44.27 3.509.756a3 3 0 0 0-.97 1.759A6.5 6.5 0 1 0 17 10.5l-.005-.269c.536.48 1.239.765 1.991.769a8.46 8.46 0 0 1-1.809 4.762l3.652 3.652a1 1 0 0 1-1.414 1.414l-3.652-3.652A8.5 8.5 0 1 1 10.5 2m0 3c.927 0 1.801.23 2.568.635a3 3 0 0 0 1.963 2.204l.348.119A5.5 5.5 0 1 1 10.5 5M19 1a1 1 0 0 1 .898.56l.048.117l.13.378a3 3 0 0 0 1.684 1.8l.185.07l.378.129a1 1 0 0 1 .118 1.844l-.118.048l-.378.13a3 3 0 0 0-1.8 1.684l-.07.185l-.129.378a1 1 0 0 1-1.844.117l-.048-.117l-.13-.378a3 3 0 0 0-1.684-1.8l-.185-.07l-.378-.129a1 1 0 0 1-.118-1.844l.118-.048l.378-.13a3 3 0 0 0 1.8-1.684l.07-.185l.129-.378A1 1 0 0 1 19 1"></svg:path></svg:g>`,
})
export class MingcuteSearchAiFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteSearchAiLineIcon],svg[mingcute-search-ai-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M10.5 2c.58 0 1.15.058 1.699.17a1 1 0 1 1-.398 1.96a6.5 6.5 0 1 0 5.069 7.671a1 1 0 1 1 1.96.398a8.5 8.5 0 0 1-1.457 3.303l-.197.26l3.652 3.652a1 1 0 0 1-1.32 1.498l-.094-.084l-3.652-3.652A8.5 8.5 0 1 1 10.5 2M19 1a1 1 0 0 1 .898.56l.048.117l.13.378a3 3 0 0 0 1.684 1.8l.185.07l.378.129a1 1 0 0 1 .118 1.844l-.118.048l-.378.13a3 3 0 0 0-1.8 1.684l-.07.185l-.129.378a1 1 0 0 1-1.844.117l-.048-.117l-.13-.378a3 3 0 0 0-1.684-1.8l-.185-.07l-.378-.129a1 1 0 0 1-.118-1.844l.118-.048l.378-.13a3 3 0 0 0 1.8-1.684l.07-.185l.129-.378A1 1 0 0 1 19 1m0 3.196a5 5 0 0 1-.804.804q.448.355.804.804q.355-.448.804-.804A5 5 0 0 1 19 4.196"></svg:path></svg:g>`,
})
export class MingcuteSearchAiLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteSearchFillIcon],svg[mingcute-search-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="M0 0h24v24H0z"></svg:path><svg:path fill="currentColor" d="M10.5 2a8.5 8.5 0 0 1 6.676 13.762l3.652 3.652a1 1 0 0 1-1.414 1.414l-3.652-3.652A8.5 8.5 0 1 1 10.5 2m0 2a6.5 6.5 0 1 0 0 13a6.5 6.5 0 0 0 0-13m0 1a5.5 5.5 0 1 1 0 11a5.5 5.5 0 0 1 0-11"></svg:path></svg:g>`,
})
export class MingcuteSearchFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteSearchLineIcon],svg[mingcute-search-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M10.5 2a8.5 8.5 0 1 0 5.262 15.176l3.652 3.652a1 1 0 0 0 1.414-1.414l-3.652-3.652A8.5 8.5 0 0 0 10.5 2M4 10.5a6.5 6.5 0 1 1 13 0a6.5 6.5 0 0 1-13 0"></svg:path></svg:g>`,
})
export class MingcuteSearchLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteSeatFillIcon],svg[mingcute-seat-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M3.468 16.745c.495-.958 1.54-1.6 2.804-1.441a34 34 0 0 1 3.97.726c2.01.502 3.771 1.467 5.073 2.348l.44.306l.4.295l.358.276l.314.254l.267.226l.22.192c.843.751.27 1.978-.685 2.068l-.112.005H7.923c-1.682 0-3.08-.845-4.104-2.126c-.774-.967-.84-2.183-.35-3.129ZM19 2c.893 0 1.278.84 1.467 1.61l.06.268l.024.128c.144.797.221 1.842.252 2.916c.06 2.125-.062 4.602-.327 5.795c-.462 2.082-1.14 3.529-1.952 4.401c-.826.89-1.942 1.291-2.971.776c-.789-.394-1.26-1.331-1.518-2.13a5.73 5.73 0 0 1 .017-3.58c.21-.632.588-1.142 1.004-1.627l.363-.411c.442-.495.885-.99 1.187-1.593c.44-.88.56-1.843.597-2.81l.014-.58l.009-.56l.006-.138l.02-.28C17.347 3.107 17.716 2 19 2"></svg:path></svg:g>`,
})
export class MingcuteSeatFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteSeatHeatedFillIcon],svg[mingcute-seat-heated-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M6.272 15.304a34 34 0 0 1 3.97.726c2.01.502 3.771 1.467 5.073 2.348l.44.306l.4.295l.358.276l.314.254l.267.226l.22.192c.843.751.27 1.978-.685 2.068l-.112.005H7.923c-1.682 0-3.08-.845-4.104-2.126c-.774-.967-.84-2.183-.35-3.129c.494-.958 1.538-1.6 2.803-1.441M19 2c.893 0 1.278.84 1.467 1.61l.06.268l.024.128c.144.797.221 1.842.252 2.916c.06 2.125-.062 4.602-.327 5.795c-.462 2.082-1.14 3.529-1.952 4.401c-.826.89-1.942 1.291-2.971.776c-.789-.394-1.26-1.331-1.518-2.13a5.73 5.73 0 0 1 .017-3.58c.21-.632.588-1.142 1.004-1.627l.363-.411c.442-.495.885-.99 1.187-1.593c.44-.88.56-1.843.597-2.81l.014-.58l.009-.56l.006-.138l.02-.28C17.347 3.107 17.716 2 19 2M6.625 3.22a1 1 0 0 1 .156 1.405l-.233.291a2.16 2.16 0 0 0 .036 2.743l.123.134a4.16 4.16 0 0 1 .307 5.54l-.233.292a1 1 0 1 1-1.562-1.25l.233-.291a2.16 2.16 0 0 0-.036-2.743l-.123-.134a4.16 4.16 0 0 1-.307-5.54l.233-.292a1 1 0 0 1 1.406-.156Zm2.594.155a1 1 0 0 1 1.634 1.147l-.072.103l-.233.291a2.16 2.16 0 0 0 .036 2.743l.123.134a4.16 4.16 0 0 1 .439 5.367l-.132.173l-.233.292a1 1 0 0 1-1.634-1.147l.072-.103l.233-.291a2.16 2.16 0 0 0-.036-2.743l-.123-.134a4.16 4.16 0 0 1-.439-5.367l.132-.173z"></svg:path></svg:g>`,
})
export class MingcuteSeatHeatedFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteSeatHeatedLineIcon],svg[mingcute-seat-heated-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M6.272 15.304c1.214.152 2.588.38 3.97.726c2.129.532 3.977 1.582 5.298 2.502l.42.301l.38.286l.335.266l.291.24l.348.302c.875.78.223 2.073-.797 2.073H7.922a5 5 0 0 1-3.904-1.876c-.782-.978-1.161-2.195-.55-3.379c.495-.958 1.539-1.6 2.804-1.441m-1.027 2.358c-.179.348-.059.658.13.94l.135.183l.07.09A3 3 0 0 0 7.922 20h6.221c-1.15-.773-2.677-1.603-4.386-2.03a32 32 0 0 0-3.733-.681c-.4-.05-.653.13-.779.373M19 2c.62 0 1.074.338 1.36.704c.273.347.45.78.573 1.196c.25.843.367 1.927.412 3.009a30 30 0 0 1-.007 2.436l-.035.674c-.028.44-.064.862-.106 1.247l-.067.551c-.047.347-.099.652-.154.9c-.533 2.398-1.466 3.847-2.508 4.637c-.999.756-2.157.92-2.915.54c-.331-.165-.653-.462-.918-.77a5.7 5.7 0 0 1-.802-1.237c-.465-.975-.752-2.293-.282-3.703c.291-.873.852-1.417 1.346-1.824l.26-.21c.576-.458 1.114-.928 1.448-1.597c.213-.425.218-.98.199-1.503l-.02-.436l-.017-.765c-.018-.85-.012-1.727.304-2.511C17.396 2.528 18.117 2 19 2m-.23 3.405c-.007.667.027 1.334.01 2.001c-.015.642-.075 1.42-.386 2.041c-.455.91-1.147 1.596-1.933 2.221l-.169.136l-.285.24c-.293.26-.458.47-.559.772c-.24.724-.14 1.434.117 2.044l.142.308l.102.199c.172.322.425.723.637.722l.075-.003c.133-.011.393-.064.74-.326a3 3 0 0 0 .233-.202l.165-.173c.475-.535 1.004-1.478 1.365-3.102c.042-.191.084-.436.123-.721l.056-.457q.027-.24.05-.508l.043-.55l.035-.583l.023-.606c.018-.615.018-1.252-.008-1.867c-.042-1.027-.151-1.917-.33-2.523c-.087-.293-.143-.27-.18-.113l-.02.122l-.023.232l-.02.486zM5.22 3.375a1 1 0 0 1 1.633 1.147l-.072.103l-.233.291a2.16 2.16 0 0 0 .036 2.743l.123.134a4.16 4.16 0 0 1 .439 5.367l-.132.173l-.233.292a1 1 0 0 1-1.634-1.147l.072-.103l.233-.291a2.16 2.16 0 0 0-.036-2.743l-.123-.134a4.16 4.16 0 0 1-.439-5.367l.132-.173l.233-.292Zm4 0a1 1 0 0 1 1.633 1.147l-.072.103l-.233.291a2.16 2.16 0 0 0 .036 2.743l.123.134a4.16 4.16 0 0 1 .439 5.367l-.132.173l-.233.292a1 1 0 0 1-1.634-1.147l.072-.103l.233-.291a2.16 2.16 0 0 0-.036-2.743l-.123-.134a4.16 4.16 0 0 1-.439-5.367l.132-.173l.233-.292Z"></svg:path></svg:g>`,
})
export class MingcuteSeatHeatedLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteSeatLineIcon],svg[mingcute-seat-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M3.468 16.745c.494-.958 1.539-1.6 2.804-1.441c1.214.152 2.588.38 3.97.726c2.247.562 4.181 1.7 5.513 2.654l.4.295l.184.14l.336.266l.291.24l.347.302c.844.751.27 1.978-.684 2.068l-.112.005H7.922a5 5 0 0 1-3.741-1.683l-.163-.194l-.2-.249c-.773-.967-.838-2.183-.35-3.129m2.556.543c-.4-.05-.653.131-.779.374a.85.85 0 0 0 .054.848l.081.115l.2.25a3 3 0 0 0 2.148 1.119l.194.006h6.221c-1.15-.773-2.677-1.603-4.386-2.03a32 32 0 0 0-3.733-.681ZM19 2c.62 0 1.074.338 1.36.704c.273.347.45.78.573 1.196c.25.843.367 1.927.412 3.009c.037.911.024 1.876-.023 2.776l-.042.66c-.07.968-.18 1.815-.304 2.372c-.533 2.398-1.465 3.847-2.508 4.637c-.999.756-2.157.92-2.915.54c-.331-.165-.652-.462-.918-.77a5.7 5.7 0 0 1-.801-1.237c-.466-.975-.753-2.293-.283-3.703c.291-.873.852-1.417 1.346-1.824l.318-.256c.563-.448 1.031-.832 1.39-1.551c.093-.186.161-.56.177-1.195l.003-.303l-.008-.746c-.005-.3-.01-.617-.007-.924c.007-.65.048-1.42.3-2.047c.134-.333.348-.681.697-.945A2 2 0 0 1 19 2m-.097 2.15c-.083.252-.127.66-.133 1.255v.282l.009.689c.005.335.01.688.002 1.03c-.016.642-.076 1.42-.387 2.041c-.435.872-.993 1.437-1.49 1.86l-.29.24l-.153.121c-.595.474-.869.717-1.012 1.148c-.264.79-.12 1.563.19 2.208c.153.323.34.595.513.796c.08.094.149.161.199.206l.075.064l.095-.004c.133-.011.394-.064.74-.326c.547-.415 1.296-1.375 1.763-3.477c.042-.191.084-.436.123-.721l.056-.457q.015-.12.026-.248l.047-.53l.039-.568l.016-.295l.023-.606a27 27 0 0 0-.007-1.867c-.043-1.027-.152-1.917-.332-2.523a3 3 0 0 0-.112-.319Z"></svg:path></svg:g>`,
})
export class MingcuteSeatLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteSectionFillIcon],svg[mingcute-section-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zm10 0v6a1 1 0 0 1-1 1H5V5z"></svg:path></svg:g>`,
})
export class MingcuteSectionFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteSectionLineIcon],svg[mingcute-section-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M5 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm6 2H5v5h6zm-6 7h6a2 2 0 0 0 2-2V5h6v14H5z"></svg:path></svg:g>`,
})
export class MingcuteSectionLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteSectorFillIcon],svg[mingcute-sector-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M3 5c0-1.087.893-2.04 2.062-1.967a17 17 0 0 1 15.905 15.905C21.04 20.107 20.087 21 19 21H5a2 2 0 0 1-2-2z"></svg:path></svg:g>`,
})
export class MingcuteSectorFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteSectorLineIcon],svg[mingcute-sector-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M3 5c0-1.087.893-2.04 2.062-1.967a17 17 0 0 1 15.905 15.905C21.04 20.107 20.087 21 19 21H5a2 2 0 0 1-2-2zm2 .033V19h13.967A15 15 0 0 0 5 5.033"></svg:path></svg:g>`,
})
export class MingcuteSectorLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteSelectorHorizontalFillIcon],svg[mingcute-selector-horizontal-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="M24 0v24H0V0zM12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M7.293 13.707a1 1 0 0 1 0-1.414l2-2A1 1 0 0 1 11 11v4a1 1 0 0 1-1.707.707zm6.324 2.217A1 1 0 0 1 13 15v-4a1 1 0 0 1 1.707-.707l2 2a1 1 0 0 1 0 1.414l-2 2a1 1 0 0 1-1.09.217"></svg:path></svg:g>`,
})
export class MingcuteSelectorHorizontalFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteSelectorHorizontalLineIcon],svg[mingcute-selector-horizontal-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="M24 0v24H0V0zM12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M10.707 13.293L9.414 12l1.293-1.293a1 1 0 0 0-1.414-1.414l-2 2a1 1 0 0 0 0 1.414l2 2a1 1 0 0 0 1.414-1.414m2.586 0L14.586 12l-1.293-1.293a1 1 0 0 1 1.414-1.414l2 2a1 1 0 0 1 0 1.414l-2 2a1 1 0 0 1-1.414-1.414"></svg:path></svg:g>`,
})
export class MingcuteSelectorHorizontalLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteSelectorVerticalFillIcon],svg[mingcute-selector-vertical-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="M24 0v24H0V0zM12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M11.293 7.293a1 1 0 0 1 1.414 0l2 2A1 1 0 0 1 14 11h-4a1 1 0 0 1-.707-1.707zm-2.217 6.324A1 1 0 0 1 10 13h4a1 1 0 0 1 .707 1.707l-2 2a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1-.217-1.09"></svg:path></svg:g>`,
})
export class MingcuteSelectorVerticalFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteSelectorVerticalLineIcon],svg[mingcute-selector-vertical-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="M24 0v24H0V0zM12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M10.707 13.293L12 14.586l1.293-1.293a1 1 0 0 1 1.414 1.414l-2 2a1 1 0 0 1-1.414 0l-2-2a1 1 0 1 1 1.414-1.414m0-2.586L12 9.414l1.293 1.293a1 1 0 0 0 1.414-1.414l-2-2a1 1 0 0 0-1.414 0l-2 2a1 1 0 0 0 1.414 1.414"></svg:path></svg:g>`,
})
export class MingcuteSelectorVerticalLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteSendFillIcon],svg[mingcute-send-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M20.235 5.686c.432-1.195-.726-2.353-1.921-1.92L3.709 9.048c-1.199.434-1.344 2.07-.241 2.709l4.662 2.699l4.163-4.163a1 1 0 0 1 1.414 1.414L9.544 15.87l2.7 4.662c.638 1.103 2.274.957 2.708-.241z"></svg:path></svg:g>`,
})
export class MingcuteSendFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteSendLineIcon],svg[mingcute-send-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M17.991 6.01L5.399 10.563l4.195 2.428l3.699-3.7a1 1 0 0 1 1.414 1.415l-3.7 3.7l2.43 4.194L17.99 6.01Zm.323-2.244c1.195-.433 2.353.725 1.92 1.92l-5.282 14.605c-.434 1.198-2.07 1.344-2.709.241l-3.217-5.558l-5.558-3.217c-1.103-.639-.957-2.275.241-2.709z"></svg:path></svg:g>`,
})
export class MingcuteSendLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteSendPlaneFillIcon],svg[mingcute-send-plane-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="m21.433 4.861l-6 15.5a1 1 0 0 1-1.624.362l-3.382-3.235l-2.074 2.073a.5.5 0 0 1-.853-.354v-4.519L2.309 9.723a1 1 0 0 1 .442-1.691l17.5-4.5a1 1 0 0 1 1.181 1.329ZM19 6.001L8.032 13.152l1.735 1.66L19 6Z"></svg:path></svg:g>`,
})
export class MingcuteSendPlaneFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteSendPlaneLineIcon],svg[mingcute-send-plane-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M20.25 3.532a1 1 0 0 1 1.183 1.329l-6 15.5a1 1 0 0 1-1.624.362l-3.382-3.235l-1.203 1.202c-.636.636-1.724.186-1.724-.714v-3.288L2.309 9.723a1 1 0 0 1 .442-1.691l17.5-4.5Zm-2.114 4.305l-7.998 6.607l3.97 3.798zm-1.578-1.29L4.991 9.52l3.692 3.53l7.875-6.505Z"></svg:path></svg:g>`,
})
export class MingcuteSendPlaneLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteServer2FillIcon],svg[mingcute-server-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M16.28 3a3 3 0 0 1 2.935 2.376l.031.175l1.707 11.3a4.5 4.5 0 0 1-4.242 5.144L16.5 22h-9a4.5 4.5 0 0 1-4.48-4.936l.026-.213l1.708-11.3a3 3 0 0 1 2.789-2.546L7.72 3zm.22 12h-9a2.5 2.5 0 0 0-.164 4.995L7.5 20h9a2.5 2.5 0 0 0 .164-4.995zm-.5 1.5a1 1 0 1 1 0 2h-4a1 1 0 1 1 0-2zm-8 0a1 1 0 1 1 0 2a1 1 0 0 1 0-2"></svg:path></svg:g>`,
})
export class MingcuteServer2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteServer2LineIcon],svg[mingcute-server-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M16.28 3a3 3 0 0 1 2.935 2.376l.031.175l1.707 11.3a4.5 4.5 0 0 1-4.242 5.144L16.5 22h-9a4.5 4.5 0 0 1-4.48-4.936l.026-.213l1.708-11.3a3 3 0 0 1 2.789-2.546L7.72 3zm.22 12h-9a2.5 2.5 0 0 0-.164 4.995L7.5 20h9a2.5 2.5 0 0 0 .164-4.995zm-.5 1.5a1 1 0 1 1 0 2h-4a1 1 0 1 1 0-2zm-8 0a1 1 0 1 1 0 2a1 1 0 0 1 0-2M16.28 5H7.72a1 1 0 0 0-.989.85l-1.148 7.578A4.5 4.5 0 0 1 7.5 13h9c.686 0 1.336.153 1.917.428L17.27 5.85a1 1 0 0 0-.99-.85"></svg:path></svg:g>`,
})
export class MingcuteServer2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteServerFillIcon],svg[mingcute-server-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M20 15v4a2 2 0 0 1-1.85 1.995L18 21H6a2 2 0 0 1-1.995-1.85L4 19v-4zm-6 2a1 1 0 1 0 0 2a1 1 0 0 0 0-2m3 0a1 1 0 1 0 0 2a1 1 0 0 0 0-2m3-8v4H4V9zm-2-6a2 2 0 0 1 2 2v2H4V5a2 2 0 0 1 2-2z"></svg:path></svg:g>`,
})
export class MingcuteServerFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteServerLineIcon],svg[mingcute-server-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M18 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm0 12H6v4h12zm-5 1a1 1 0 1 1 0 2a1 1 0 0 1 0-2m3 0a1 1 0 1 1 0 2a1 1 0 0 1 0-2m2-6H6v3h12zm0-5H6v3h12z"></svg:path></svg:g>`,
})
export class MingcuteServerLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteServiceFillIcon],svg[mingcute-service-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M5 9a7 7 0 0 1 14 0v1.035c1.696.243 3 1.702 3 3.465v.25c0 1.775-1.531 3.331-3.332 3.248c-.74 2.12-2.622 3.549-4.653 3.911c-.47.172-1.026.091-1.515.091a1.5 1.5 0 0 1 0-3c.793 0 1.671-.115 2.207.609C16.003 17.992 17 16.689 17 15V9A5 5 0 0 0 7 9v6.25A1.75 1.75 0 0 1 5.25 17A3.25 3.25 0 0 1 2 13.75v-.25a3.5 3.5 0 0 1 3-3.465z"></svg:path></svg:g>`,
})
export class MingcuteServiceFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteServiceLineIcon],svg[mingcute-service-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M5 9a7 7 0 0 1 14 0v1.035c1.696.243 3 1.702 3 3.465v.25a3.25 3.25 0 0 1-3.332 3.248c-.74 2.12-2.622 3.549-4.653 3.911c-.47.172-1.026.091-1.515.091a1.5 1.5 0 0 1 0-3h1a1.5 1.5 0 0 1 1.207.609C16.003 17.992 17 16.689 17 15V9A5 5 0 0 0 7 9v6.25A1.75 1.75 0 0 1 5.25 17A3.25 3.25 0 0 1 2 13.75v-.25a3.5 3.5 0 0 1 3-3.465zm0 3.085A1.5 1.5 0 0 0 4 13.5v.25c0 .605.43 1.11 1 1.225zm14 0v2.89c.57-.116 1-.62 1-1.225v-.25a1.5 1.5 0 0 0-1-1.415"></svg:path></svg:g>`,
})
export class MingcuteServiceLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteSettings1FillIcon],svg[mingcute-settings-1-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M10.75 2.567a2.5 2.5 0 0 1 2.5 0L19.544 6.2a2.5 2.5 0 0 1 1.25 2.165v7.268a2.5 2.5 0 0 1-1.25 2.165l-6.294 3.634a2.5 2.5 0 0 1-2.5 0l-6.294-3.634a2.5 2.5 0 0 1-1.25-2.165V8.366A2.5 2.5 0 0 1 4.456 6.2zM12 9a3 3 0 1 0 0 6a3 3 0 0 0 0-6"></svg:path></svg:g>`,
})
export class MingcuteSettings1FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteSettings1LineIcon],svg[mingcute-settings-1-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M10.75 2.567a2.5 2.5 0 0 1 2.332-.089l.168.089L19.544 6.2a2.5 2.5 0 0 1 1.244 1.987l.006.178v7.268a2.5 2.5 0 0 1-1.099 2.07l-.15.095l-6.295 3.634a2.5 2.5 0 0 1-2.332.089l-.168-.09L4.456 17.8a2.5 2.5 0 0 1-1.244-1.987l-.006-.178V8.366a2.5 2.5 0 0 1 1.1-2.07l.15-.095zm1.5 1.732a.5.5 0 0 0-.42-.037l-.08.037l-6.294 3.634a.5.5 0 0 0-.242.345l-.008.088v7.268a.5.5 0 0 0 .178.382l.072.05l6.294 3.635a.5.5 0 0 0 .42.037l.08-.037l6.294-3.634a.5.5 0 0 0 .243-.345l.007-.088V8.366a.5.5 0 0 0-.177-.382l-.073-.051zM12 8a4 4 0 1 1 0 8a4 4 0 0 1 0-8m0 2a2 2 0 1 0 0 4a2 2 0 0 0 0-4"></svg:path></svg:g>`,
})
export class MingcuteSettings1LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteSettings2FillIcon],svg[mingcute-settings-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M18.5 4a1.5 1.5 0 0 0-3 0v.5H4a1.5 1.5 0 1 0 0 3h11.5V8a1.5 1.5 0 0 0 3 0v-.5H20a1.5 1.5 0 0 0 0-3h-1.5zM4 10.5a1.5 1.5 0 0 0 0 3h1.5v.5a1.5 1.5 0 0 0 3 0v-.5H20a1.5 1.5 0 0 0 0-3H8.5V10a1.5 1.5 0 1 0-3 0v.5zM2.5 18A1.5 1.5 0 0 1 4 16.5h11.5V16a1.5 1.5 0 0 1 3 0v.5H20a1.5 1.5 0 0 1 0 3h-1.5v.5a1.5 1.5 0 0 1-3 0v-.5H4A1.5 1.5 0 0 1 2.5 18"></svg:path></svg:g>`,
})
export class MingcuteSettings2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteSettings2LineIcon],svg[mingcute-settings-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M18 4a1 1 0 1 0-2 0v1H4a1 1 0 0 0 0 2h12v1a1 1 0 1 0 2 0V7h2a1 1 0 1 0 0-2h-2zM4 11a1 1 0 1 0 0 2h2v1a1 1 0 1 0 2 0v-1h12a1 1 0 1 0 0-2H8v-1a1 1 0 0 0-2 0v1zm-1 7a1 1 0 0 1 1-1h12v-1a1 1 0 1 1 2 0v1h2a1 1 0 1 1 0 2h-2v1a1 1 0 1 1-2 0v-1H4a1 1 0 0 1-1-1"></svg:path></svg:g>`,
})
export class MingcuteSettings2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteSettings3FillIcon],svg[mingcute-settings-3-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M9.965 2.809a1.51 1.51 0 0 0-1.401-.203a10 10 0 0 0-2.982 1.725a1.51 1.51 0 0 0-.524 1.313c.075.753-.058 1.48-.42 2.106c-.361.627-.925 1.106-1.615 1.417a1.51 1.51 0 0 0-.875 1.113a10 10 0 0 0 0 3.44c.093.537.46.926.875 1.114c.69.31 1.254.79 1.616 1.416c.361.627.494 1.353.419 2.106c-.045.452.107.964.524 1.313a10 10 0 0 0 2.982 1.725a1.51 1.51 0 0 0 1.4-.203c.615-.442 1.312-.691 2.036-.691s1.42.249 2.035.691c.37.266.89.39 1.401.203a10 10 0 0 0 2.982-1.725c.417-.349.57-.86.524-1.313c-.075-.753.057-1.48.42-2.106c.361-.627.925-1.105 1.615-1.416c.414-.187.782-.577.875-1.114a10 10 0 0 0 0-3.44a1.51 1.51 0 0 0-.875-1.113c-.69-.311-1.254-.79-1.616-1.417c-.362-.626-.494-1.353-.419-2.106a1.51 1.51 0 0 0-.524-1.313a10 10 0 0 0-2.982-1.725a1.51 1.51 0 0 0-1.4.203C13.42 3.25 12.723 3.5 12 3.5s-1.42-.249-2.035-.691M9 12a3 3 0 1 1 6 0a3 3 0 0 1-6 0"></svg:path></svg:g>`,
})
export class MingcuteSettings3FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteSettings3LineIcon],svg[mingcute-settings-3-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M14.035 2.809c.37-.266.89-.39 1.401-.203a10 10 0 0 1 2.982 1.725c.417.35.57.861.524 1.313c-.075.753.057 1.48.42 2.106c.32.557.802.997 1.39 1.307l.225.11c.414.187.782.576.875 1.113a10 10 0 0 1 0 3.44c-.083.484-.39.847-.753 1.051l-.122.063c-.69.31-1.254.79-1.616 1.416c-.362.627-.494 1.353-.419 2.106c.045.452-.107.964-.524 1.313a10 10 0 0 1-2.982 1.725a1.51 1.51 0 0 1-1.4-.203C13.42 20.75 12.723 20.5 12 20.5s-1.42.249-2.035.691a1.51 1.51 0 0 1-1.401.203a10 10 0 0 1-2.982-1.725a1.51 1.51 0 0 1-.524-1.313c.075-.753-.058-1.48-.42-2.106a3.4 3.4 0 0 0-1.39-1.307l-.225-.11a1.51 1.51 0 0 1-.875-1.113a10 10 0 0 1 0-3.44c.083-.484.39-.847.753-1.051l.122-.062c.69-.311 1.254-.79 1.616-1.417c.361-.626.494-1.353.419-2.106a1.51 1.51 0 0 1 .524-1.313a10 10 0 0 1 2.982-1.725a1.51 1.51 0 0 1 1.4.203c.615.442 1.312.691 2.036.691s1.42-.249 2.035-.691m.957 1.769c-.866.57-1.887.922-2.992.922s-2.126-.353-2.992-.922A8 8 0 0 0 7.068 5.7c.06 1.033-.145 2.093-.697 3.05c-.553.956-1.368 1.663-2.293 2.128a8 8 0 0 0 0 2.242c.925.465 1.74 1.172 2.293 2.13c.552.955.757 2.015.697 3.048a8 8 0 0 0 1.94 1.123c.866-.57 1.887-.922 2.992-.922s2.126.353 2.992.922a8 8 0 0 0 1.94-1.122c-.06-1.034.145-2.094.697-3.05c.552-.957 1.368-1.664 2.293-2.13a8 8 0 0 0 0-2.24c-.925-.466-1.74-1.173-2.293-2.13c-.552-.956-.757-2.016-.697-3.05a8 8 0 0 0-1.94-1.122ZM12 8a4 4 0 1 1 0 8a4 4 0 0 1 0-8m0 2a2 2 0 1 0 0 4a2 2 0 0 0 0-4"></svg:path></svg:g>`,
})
export class MingcuteSettings3LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteSettings4FillIcon],svg[mingcute-settings-4-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M10.586 2.1a2 2 0 0 1 2.7-.116l.128.117L15.314 4H18a2 2 0 0 1 1.994 1.85L20 6v2.686l1.9 1.9a2 2 0 0 1 .116 2.701l-.117.127l-1.9 1.9V18a2 2 0 0 1-1.85 1.995L18 20h-2.685l-1.9 1.9a2 2 0 0 1-2.701.116l-.127-.116l-1.9-1.9H6a2 2 0 0 1-1.995-1.85L4 18v-2.686l-1.9-1.9a2 2 0 0 1-.116-2.701l.116-.127l1.9-1.9V6a2 2 0 0 1 1.85-1.994L6 4h2.686zM12 9a3 3 0 1 0 0 6a3 3 0 0 0 0-6"></svg:path></svg:g>`,
})
export class MingcuteSettings4FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteSettings4LineIcon],svg[mingcute-settings-4-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M13.414 2.1a2 2 0 0 0-2.828 0L8.686 4H6a2 2 0 0 0-2 2v2.686l-1.9 1.9a2 2 0 0 0 0 2.828l1.9 1.9V18a2 2 0 0 0 2 2h2.686l1.9 1.9a2 2 0 0 0 2.828 0l1.9-1.9H18a2 2 0 0 0 2-2v-2.686l1.9-1.9a2 2 0 0 0 0-2.828l-1.9-1.9V6a2 2 0 0 0-2-2h-2.686zM12 3.516l1.9 1.9A2 2 0 0 0 15.313 6H18v2.686a2 2 0 0 0 .586 1.415l1.9 1.9l-1.9 1.899A2 2 0 0 0 18 15.314V18h-2.686a2 2 0 0 0-1.415.586l-1.9 1.9l-1.899-1.9A2 2 0 0 0 8.686 18H6v-2.686a2 2 0 0 0-.586-1.415L3.514 12l1.9-1.9A2 2 0 0 0 6 8.687V6h2.686a2 2 0 0 0 1.414-.586l1.9-1.9ZM10 12a2 2 0 1 1 4 0a2 2 0 0 1-4 0m2-4a4 4 0 1 0 0 8a4 4 0 0 0 0-8"></svg:path></svg:g>`,
})
export class MingcuteSettings4LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteSettings5FillIcon],svg[mingcute-settings-5-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M14.41 2.293a10 10 0 0 1 2.75 1.14a1 1 0 0 1 .47 1.019c-.113.689.058 1.216.38 1.538s.85.493 1.538.38a1 1 0 0 1 1.019.47a10 10 0 0 1 1.14 2.75a1 1 0 0 1-.388 1.054c-.567.407-.82.9-.82 1.356s.253.95.82 1.357a1 1 0 0 1 .388 1.053a10 10 0 0 1-1.14 2.75a1 1 0 0 1-1.019.47c-.689-.113-1.216.059-1.538.38c-.322.322-.493.85-.38 1.538a1 1 0 0 1-.47 1.02a10 10 0 0 1-2.75 1.14a1 1 0 0 1-1.054-.388c-.407-.568-.9-.82-1.356-.82s-.95.252-1.357.82a1 1 0 0 1-1.053.388a10 10 0 0 1-2.75-1.14a1 1 0 0 1-.47-1.02c.113-.688-.059-1.215-.38-1.537c-.323-.322-.85-.494-1.538-.38a1 1 0 0 1-1.02-.47a10 10 0 0 1-1.14-2.752a1 1 0 0 1 .388-1.053c.568-.406.82-.9.82-1.356c0-.455-.252-.95-.82-1.356a1 1 0 0 1-.388-1.053a10 10 0 0 1 1.14-2.751a1 1 0 0 1 1.02-.47c.688.113 1.215-.058 1.537-.38s.494-.85.38-1.538a1 1 0 0 1 .47-1.019a10 10 0 0 1 2.751-1.14a1 1 0 0 1 1.053.388c.407.567.901.82 1.357.82s.95-.253 1.356-.82a1 1 0 0 1 1.053-.388ZM12 7a5 5 0 1 0 0 10a5 5 0 0 0 0-10m0 2a3 3 0 1 1 0 6a3 3 0 0 1 0-6"></svg:path></svg:g>`,
})
export class MingcuteSettings5FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteSettings5LineIcon],svg[mingcute-settings-5-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M14.41 2.293a10 10 0 0 1 2.75 1.14a1 1 0 0 1 .47 1.019c-.113.689.059 1.216.38 1.538c.322.322.85.493 1.538.38a1 1 0 0 1 1.02.47a10 10 0 0 1 1.14 2.75a1 1 0 0 1-.388 1.054c-.568.407-.82.9-.82 1.356s.252.95.82 1.357a1 1 0 0 1 .388 1.053a10 10 0 0 1-1.14 2.75a1 1 0 0 1-1.02.47c-.689-.113-1.215.059-1.537.38c-.322.322-.494.85-.38 1.538a1 1 0 0 1-.47 1.02a10 10 0 0 1-2.752 1.14a1 1 0 0 1-1.053-.388c-.406-.568-.9-.82-1.356-.82c-.455 0-.95.252-1.356.82a1 1 0 0 1-1.053.388a10 10 0 0 1-2.752-1.14a1 1 0 0 1-.47-1.02c.114-.688-.057-1.215-.38-1.537c-.321-.322-.848-.494-1.537-.38a1 1 0 0 1-1.019-.47a10 10 0 0 1-1.14-2.752a1 1 0 0 1 .388-1.053c.567-.406.82-.9.82-1.356c0-.455-.253-.95-.82-1.356a1 1 0 0 1-.388-1.053a10 10 0 0 1 1.14-2.751a1 1 0 0 1 1.019-.47c.689.113 1.216-.058 1.538-.38s.493-.85.38-1.538a1 1 0 0 1 .47-1.019a10 10 0 0 1 2.75-1.14a1 1 0 0 1 1.054.388c.407.567.9.82 1.356.82s.95-.253 1.357-.82a1 1 0 0 1 1.053-.388m.102 2.11C13.855 5.06 12.992 5.5 12 5.5s-1.855-.439-2.512-1.098a8 8 0 0 0-1.084.45c.001.93-.299 1.85-1 2.552c-.701.701-1.622 1.001-2.552 1q-.264.523-.45 1.084C5.061 10.145 5.5 11.008 5.5 12s-.439 1.855-1.098 2.512q.187.562.45 1.085c.93-.002 1.85.298 2.552 1c.701.7 1.001 1.621 1 2.551q.522.264 1.084.45c.657-.659 1.52-1.098 2.512-1.098s1.855.44 2.512 1.098a8 8 0 0 0 1.085-.45c-.002-.93.298-1.85 1-2.552c.7-.701 1.621-1 2.551-1q.264-.522.45-1.084c-.659-.657-1.098-1.52-1.098-2.512s.44-1.855 1.098-2.512a8 8 0 0 0-.45-1.084c-.93.001-1.85-.299-2.552-1c-.701-.701-1-1.622-1-2.552a8 8 0 0 0-1.084-.45ZM12 8a4 4 0 1 1 0 8a4 4 0 0 1 0-8m0 2a2 2 0 1 0 0 4a2 2 0 0 0 0-4"></svg:path></svg:g>`,
})
export class MingcuteSettings5LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteSettings6FillIcon],svg[mingcute-settings-6-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M16 15c1.306 0 2.418.835 2.83 2H20a1 1 0 1 1 0 2h-1.17a3.001 3.001 0 0 1-5.66 0H4a1 1 0 1 1 0-2h9.17A3 3 0 0 1 16 15M8 9a3 3 0 0 1 2.762 1.828l.067.172H20a1 1 0 0 1 .117 1.993L20 13h-9.17a3.001 3.001 0 0 1-5.592.172L5.17 13H4a1 1 0 0 1-.117-1.993L4 11h1.17A3 3 0 0 1 8 9m8-6c1.306 0 2.418.835 2.83 2H20a1 1 0 1 1 0 2h-1.17a3.001 3.001 0 0 1-5.66 0H4a1 1 0 0 1 0-2h9.17A3 3 0 0 1 16 3"></svg:path></svg:g>`,
})
export class MingcuteSettings6FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteSettings6LineIcon],svg[mingcute-settings-6-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M16 15c1.306 0 2.418.835 2.83 2H20a1 1 0 1 1 0 2h-1.17a3.001 3.001 0 0 1-5.66 0H4a1 1 0 1 1 0-2h9.17A3 3 0 0 1 16 15m0 2a1 1 0 1 0 0 2a1 1 0 0 0 0-2M8 9a3 3 0 0 1 2.762 1.828l.067.172H20a1 1 0 0 1 .117 1.993L20 13h-9.17a3.001 3.001 0 0 1-5.592.172L5.17 13H4a1 1 0 0 1-.117-1.993L4 11h1.17A3 3 0 0 1 8 9m0 2a1 1 0 1 0 0 2a1 1 0 0 0 0-2m8-8c1.306 0 2.418.835 2.83 2H20a1 1 0 1 1 0 2h-1.17a3.001 3.001 0 0 1-5.66 0H4a1 1 0 0 1 0-2h9.17A3 3 0 0 1 16 3m0 2a1 1 0 1 0 0 2a1 1 0 0 0 0-2"></svg:path></svg:g>`,
})
export class MingcuteSettings6LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteSettings7FillIcon],svg[mingcute-settings-7-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M13 3a1 1 0 1 0-2 0v1.062a8 8 0 0 0-2.104.562l-.53-.918a1 1 0 0 0-1.732 1l.531.92c-.58.44-1.098.959-1.54 1.54l-.92-.532a1 1 0 0 0-1 1.732l.92.53A8 8 0 0 0 4.061 11H3a1 1 0 1 0 0 2h1.062c.092.737.284 1.443.562 2.104l-.918.53a1 1 0 1 0 1 1.732l.92-.531c.44.58.959 1.098 1.54 1.54l-.532.92a1 1 0 1 0 1.732 1l.53-.92a8 8 0 0 0 2.104.563V21a1 1 0 1 0 2 0v-1.062a8 8 0 0 0 2.104-.562l.53.918a1 1 0 1 0 1.732-1l-.531-.92a8 8 0 0 0 1.54-1.54l.92.532a1 1 0 1 0 1-1.732l-.92-.53A8 8 0 0 0 19.938 13H21a1 1 0 1 0 0-2h-1.062a8 8 0 0 0-.562-2.104l.918-.53a1 1 0 1 0-1-1.732l-.92.531a8 8 0 0 0-1.54-1.54l.532-.92a1 1 0 1 0-1.732-1l-.53.92A8 8 0 0 0 13 4.061zm-2 8.423l-4.625 2.67a6 6 0 0 0 1.001 1.731L12 13.154l4.624 2.67a6 6 0 0 0 1-1.731L13 11.423v-5.34a6 6 0 0 0-2 0z"></svg:path></svg:g>`,
})
export class MingcuteSettings7FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteSettings7LineIcon],svg[mingcute-settings-7-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M12 2a1 1 0 0 1 1 1v1.062a8 8 0 0 1 2.104.562l.53-.918a1 1 0 1 1 1.732 1l-.531.92c.58.44 1.098.959 1.54 1.54l.92-.532a1 1 0 1 1 1 1.732l-.92.53c.279.661.471 1.367.563 2.104H21a1 1 0 1 1 0 2h-1.062a8 8 0 0 1-.562 2.104l.918.53a1 1 0 1 1-1 1.732l-.92-.531a8 8 0 0 1-1.54 1.54l.532.92a1 1 0 1 1-1.732 1l-.53-.92a8 8 0 0 1-2.104.563V21a1 1 0 1 1-2 0v-1.062a8 8 0 0 1-2.104-.562l-.53.918a1 1 0 1 1-1.732-1l.531-.92a8 8 0 0 1-1.54-1.54l-.92.532a1 1 0 1 1-1-1.732l.92-.53A8 8 0 0 1 4.061 13H3a1 1 0 1 1 0-2h1.062a8 8 0 0 1 .562-2.104l-.918-.53a1 1 0 0 1 1-1.732l.92.531c.44-.58.959-1.098 1.54-1.54l-.532-.92a1 1 0 0 1 1.732-1l.53.92A8 8 0 0 1 11 4.061V3a1 1 0 0 1 1-1m0 11.155l-4.624 2.67a6 6 0 0 0 1.588 1.351l.073.043A6 6 0 0 0 12 18c.97 0 1.886-.23 2.697-.639l.34-.185a6 6 0 0 0 1.587-1.352zm-1-7.072a6 6 0 0 0-1.703.559l-.26.14l-.073.042a6 6 0 0 0-1.978 1.88l-.162.26l-.042.073A6 6 0 0 0 6 12c0 .63.097 1.24.278 1.81l.097.283L11 11.423zm2 0v5.34l4.625 2.67A6 6 0 0 0 18 12c0-.97-.23-1.886-.639-2.697l-.143-.266l-.032-.055l-.01-.018a6 6 0 0 0-1.88-1.978l-.333-.205a6 6 0 0 0-1.664-.64z"></svg:path></svg:g>`,
})
export class MingcuteSettings7LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteShadowFillIcon],svg[mingcute-shadow-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2m5 15h-5a1 1 0 1 0 0 2h5a1 1 0 1 0 0-2m2-3h-7a1 1 0 0 0-.117 1.993L12 16h7a1 1 0 0 0 .117-1.993zm1-3h-8a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2m-1-3h-7a1 1 0 0 0-.117 1.993L12 10h7a1 1 0 0 0 .117-1.993zm-2-3h-5a1 1 0 1 0 0 2h5a1 1 0 1 0 0-2"></svg:path></svg:g>`,
})
export class MingcuteShadowFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteShadowLineIcon],svg[mingcute-shadow-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M4 12a8 8 0 0 1 11.876-7H12a1 1 0 1 0 0 2h6q.116 0 .225-.025q.39.483.705 1.025H12a1 1 0 1 0 0 2h7.748q.127.49.19 1H12a1 1 0 1 0 0 2h7.938a8 8 0 0 1-.19 1H12a1 1 0 1 0 0 2h6.93a8 8 0 0 1-.705 1.025A1 1 0 0 0 18 17h-6a1 1 0 1 0 0 2h3.876A8 8 0 0 1 4 12m18 0c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10s10-4.477 10-10"></svg:path></svg:g>`,
})
export class MingcuteShadowLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteShare2FillIcon],svg[mingcute-share-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M15 5.5a3.5 3.5 0 1 1 .994 2.443L11.67 10.21c.213.555.33 1.16.33 1.79a5 5 0 0 1-.33 1.79l4.324 2.267a3.5 3.5 0 1 1-.93 1.771l-4.475-2.346a5 5 0 1 1 0-6.963l4.475-2.347A3.5 3.5 0 0 1 15 5.5"></svg:path></svg:g>`,
})
export class MingcuteShare2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteShare2LineIcon],svg[mingcute-share-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M18.5 2a3.5 3.5 0 1 1-2.506 5.943L11.67 10.21c.213.555.33 1.16.33 1.79a5 5 0 0 1-.33 1.79l4.324 2.267a3.5 3.5 0 1 1-.93 1.771l-4.475-2.346a5 5 0 1 1 0-6.963l4.475-2.347A3.5 3.5 0 0 1 18.5 2m0 15a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3M7 9a3 3 0 1 0 0 6a3 3 0 0 0 0-6m11.5-5a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3"></svg:path></svg:g>`,
})
export class MingcuteShare2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteShare3FillIcon],svg[mingcute-share-3-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M11.17 3a3.01 3.01 0 0 0 .7 3.113c-1.486 1.537-2.906 3.51-3.716 5.938a3 3 0 0 0 5.632 2.063l.06-.165c.611-1.835 1.925-3.41 3.422-4.677a18 18 0 0 1 2.328-1.664l.391-.23l.35-.196l.302-.16L21 6.84V19a2 2 0 0 1-1.85 1.995L19 21H5a2 2 0 0 1-1.995-1.85L3 19V5a2 2 0 0 1 1.85-1.995L5 3zm8.343 0c.622 0 .984.468 1.075.856c.091.389-.025.971-.585 1.247l-.414.211l-.164.088l-.363.201l-.405.236l-.439.27c-.682.43-1.46.976-2.242 1.637c-1.654 1.399-3.258 3.261-4.027 5.57a1 1 0 0 1-1.898-.632c.928-2.784 2.823-4.933 4.634-6.465c.431-.365.862-.698 1.278-1l.31-.219H14a1 1 0 0 1-.117-1.993L14 3z"></svg:path></svg:g>`,
})
export class MingcuteShare3FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteShare3LineIcon],svg[mingcute-share-3-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M9 3a1 1 0 0 1 .117 1.993L9 5H5v14h14v-9a1 1 0 0 1 1.993-.117L21 10v9a2 2 0 0 1-1.85 1.995L19 21H5a2 2 0 0 1-1.995-1.85L3 19V5a2 2 0 0 1 1.85-1.995L5 3zm10.513 0c.622 0 .984.468 1.075.856c.091.389-.025.971-.585 1.247l-.414.211l-.164.088l-.363.201l-.405.236l-.439.27c-.682.43-1.46.976-2.242 1.637c-1.654 1.399-3.258 3.261-4.027 5.57a1 1 0 0 1-1.898-.632c.928-2.784 2.823-4.933 4.634-6.465c.431-.365.862-.698 1.278-1l.31-.219H14a1 1 0 0 1-.117-1.993L14 3z"></svg:path></svg:g>`,
})
export class MingcuteShare3LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteShareForwardFillIcon],svg[mingcute-share-forward-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="m10.114 4.491l-.203 3.144l-.02.417l-.09.01C5.363 8.582 2 12.366 2 17q0 .686.102 1.357c.279 1.845.489 2.024 1.772.498a9 9 0 0 1 1.04-1.03a7.96 7.96 0 0 1 4.754-1.818l.226-.005l.061 1.229l.166 2.345c.08.804.926 1.353 1.704.914c.352-.198.695-.41 1.04-.62c1.787-1.118 3.46-2.403 5.09-3.738c.96-.8 1.8-1.558 2.516-2.248c.33-.323.66-.646.979-.98c.462-.484.508-1.285.024-1.792c-1.114-1.165-2.688-2.624-4.647-4.172c-1.588-1.242-3.23-2.402-4.97-3.421c-.837-.477-1.667.177-1.743.972"></svg:path></svg:g>`,
})
export class MingcuteShareForwardFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteShareForwardLineIcon],svg[mingcute-share-forward-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M10.114 4.491c.076-.795.906-1.45 1.743-.972c1.74 1.019 3.382 2.18 4.97 3.421c1.96 1.548 3.533 3.007 4.647 4.172c.483.507.438 1.308-.024 1.792a42 42 0 0 1-3.495 3.228c-1.938 1.587-3.945 3.125-6.13 4.358c-.741.418-1.544-.06-1.687-.801l-.017-.113l-.227-3.574c-1.816.038-3.574.662-4.98 1.823l-.265.222l-.128.104l-.247.192l-.12.088l-.23.16a5 5 0 0 1-.218.135l-.206.111C2.534 19.314 2 18.892 2 17c0-4.404 3.245-8.323 7.632-8.917l.259-.031zm1.909 1.474l-.192 3.472a.5.5 0 0 1-.447.47l-1.361.142c-3.065.366-5.497 2.762-5.948 5.894a9.95 9.95 0 0 1 5.135-1.912l.397-.023l1.704-.036a.5.5 0 0 1 .51.472l.197 3.596c1.603-1.021 3.131-2.196 4.664-3.45a44 44 0 0 0 2.857-2.595l-.258-.256l-.556-.533a48 48 0 0 0-3.134-2.693a46 46 0 0 0-3.568-2.548"></svg:path></svg:g>`,
})
export class MingcuteShareForwardLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteShieldFillIcon],svg[mingcute-shield-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="m12.702 2.195l7 2.625A2 2 0 0 1 21 6.693v5.363a9 9 0 0 1-4.975 8.05l-3.354 1.676a1.5 1.5 0 0 1-1.342 0l-3.354-1.677A9 9 0 0 1 3 12.055V6.694A2 2 0 0 1 4.298 4.82l7-2.625a2 2 0 0 1 1.404 0M12 8a1 1 0 0 0-.993.883L11 9v2H9a1 1 0 0 0-.117 1.993L9 13h2v2a1 1 0 0 0 1.993.117L13 15v-2h2a1 1 0 0 0 .117-1.993L15 11h-2V9a1 1 0 0 0-1-1"></svg:path></svg:g>`,
})
export class MingcuteShieldFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteShieldLineIcon],svg[mingcute-shield-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="m12.702 2.195l7 2.625A2 2 0 0 1 21 6.693v5.363a9 9 0 0 1-4.975 8.05l-3.354 1.677a1.5 1.5 0 0 1-1.342 0l-3.354-1.677A9 9 0 0 1 3 12.056V6.693A2 2 0 0 1 4.298 4.82l7-2.625a2 2 0 0 1 1.404 0M12 4.068L5 6.693v5.363a7 7 0 0 0 3.87 6.26L12 19.883l3.13-1.565A7 7 0 0 0 19 12.056V6.693zM12 8a1 1 0 0 1 1 1v2h2a1 1 0 1 1 0 2h-2v2a1 1 0 1 1-2 0v-2H9a1 1 0 1 1 0-2h2V9a1 1 0 0 1 1-1"></svg:path></svg:g>`,
})
export class MingcuteShieldLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteShieldShapeFillIcon],svg[mingcute-shield-shape-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M11.298 2.195a2 2 0 0 1 1.404 0l7 2.625A2 2 0 0 1 21 6.693v5.363a9 9 0 0 1-4.975 8.05l-3.354 1.677a1.5 1.5 0 0 1-1.342 0l-3.354-1.677A9 9 0 0 1 3 12.056V6.693A2 2 0 0 1 4.298 4.82z"></svg:path></svg:g>`,
})
export class MingcuteShieldShapeFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteShieldShapeLineIcon],svg[mingcute-shield-shape-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M11.298 2.195a2 2 0 0 1 1.404 0l7 2.625A2 2 0 0 1 21 6.693v5.363a9 9 0 0 1-4.975 8.05l-3.354 1.677a1.5 1.5 0 0 1-1.342 0l-3.354-1.677A9 9 0 0 1 3 12.056V6.693A2 2 0 0 1 4.298 4.82zM12 4.068L5 6.693v5.363a7 7 0 0 0 3.87 6.26L12 19.883l3.13-1.565A7 7 0 0 0 19 12.056V6.693z"></svg:path></svg:g>`,
})
export class MingcuteShieldShapeLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteShipFillIcon],svg[mingcute-ship-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M14.211 17.776a4 4 0 0 1 3.364-.099l.214.1l2.658 1.328a1 1 0 0 1-.787 1.835l-.107-.046l-2.659-1.329a2 2 0 0 0-1.617-.076l-.172.076l-1.316.659a4 4 0 0 1-3.365.098l-.213-.098l-1.317-.659a2 2 0 0 0-1.617-.076l-.172.076l-2.658 1.33a1 1 0 0 1-.996-1.731l.102-.059l2.658-1.329a4 4 0 0 1 3.364-.099l.214.1l1.316.658a2 2 0 0 0 1.618.076l.171-.076zM13 2a1 1 0 0 1 1 1v1.32l3.329.554a2 2 0 0 1 1.67 1.973v3.432l2.06.686a1.25 1.25 0 0 1 .753 1.679l-2.169 5.06l-1.854-.928a4 4 0 0 0-3.578 0l-1.317.659a2 2 0 0 1-1.789 0l-1.316-.659a4 4 0 0 0-3.578 0l-1.27.636l-2.658-4.651a1.25 1.25 0 0 1 .69-1.806L5 10.279V6.847a2 2 0 0 1 1.67-1.973L10 4.32V3a1 1 0 0 1 1-1zm-1 4.014l-5 .833v2.766l4.367-1.456a2 2 0 0 1 1.265 0L17 9.613V6.847z"></svg:path></svg:g>`,
})
export class MingcuteShipFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteShipLineIcon],svg[mingcute-ship-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M10 3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v1.32l3.329.554a2 2 0 0 1 1.67 1.973v3.432l2.06.686a1.25 1.25 0 0 1 .753 1.679l-2.521 5.883l1.156.579a1 1 0 1 1-.894 1.788l-2.659-1.329a2 2 0 0 0-1.788 0l-1.317.659a4 4 0 0 1-3.578 0l-1.317-.659a2 2 0 0 0-1.789 0l-2.658 1.33a1 1 0 1 1-.894-1.79l1.832-.916l-3.102-5.428a1.25 1.25 0 0 1 .69-1.806L5 10.279V6.847a2 2 0 0 1 1.67-1.973L10 4.32zM7.25 17.425a4 4 0 0 1 2.538.351l1.316.659a2 2 0 0 0 1.79 0l1.316-.659a4 4 0 0 1 3.282-.133l2.16-5.038L12 10.055l-7.527 2.508zM17 9.613V6.847l-5-.833l-5 .833v2.766l4.367-1.456a2 2 0 0 1 1.265 0z"></svg:path></svg:g>`,
})
export class MingcuteShipLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteShirtFillIcon],svg[mingcute-shirt-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M15.847 3c.172 0 .344.003.508.065a2 2 0 0 1 1.472 2.218l-.158 1.104l1.059.264A3 3 0 0 1 21 9.561V18a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V9.562a3 3 0 0 1 2.272-2.91l1.059-.265l-.158-1.104a2 2 0 0 1 1.472-2.218C7.81 3.003 7.981 3 8.153 3zM12 7.4L13.92 5h-3.84zm3.71-1.436L13.553 8.66l1.652 1.826l.503-4.52Zm-7.42 0l.504 4.521l1.652-1.826l-2.155-2.695ZM16 14a1 1 0 1 0 0 2h1a1 1 0 1 0 0-2z"></svg:path></svg:g>`,
})
export class MingcuteShirtFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteShirtLineIcon],svg[mingcute-shirt-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M8.024 3.001L15.847 3c.13 0 .258.002.384.029l.124.036a2 2 0 0 1 1.488 2.056l-.016.162l-.158 1.104l1.059.264a3 3 0 0 1 2.267 2.732l.005.179V18a3 3 0 0 1-2.824 2.995L18 21H6a3 3 0 0 1-2.995-2.824L3 18V9.562A3 3 0 0 1 5.1 6.7l.172-.049l1.059-.264l-.158-1.104A2 2 0 0 1 7.497 3.11l.148-.045c.123-.047.25-.06.379-.064m9.36 5.376l-.296 2.078a1.5 1.5 0 0 1-2.156 1.13L13 10.617V19h5a1 1 0 0 0 1-1V9.562a1 1 0 0 0-.758-.97l-.857-.215Zm-10.769 0l-.858.214a1 1 0 0 0-.75.857L5 9.562V18a1 1 0 0 0 .883.993L6 19h5v-8.382l-1.932.966a1.5 1.5 0 0 1-2.132-1l-.024-.13zM17 14a1 1 0 0 1 0 2h-1a1 1 0 1 1 0-2zm-1.29-8.036L13.553 8.66l1.652.826l.503-3.52Zm-7.42 0l.504 3.521l1.652-.826l-2.155-2.695ZM13.92 5h-3.84L12 7.4z"></svg:path></svg:g>`,
})
export class MingcuteShirtLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteShoe2FillIcon],svg[mingcute-shoe-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M7.93 19.09A6 6 0 0 1 6.82 19c-2.07-.37-5.06-2.32-4.88-4.39C2.18 12 6.56 12 8 12c1.92 0 3.89-2.07 6.62-4.94c.81-.86 1.7-1.79 2.67-2.77a1 1 0 0 1 1.16-.18a6.1 6.1 0 0 1 3.4 4a5.39 5.39 0 0 1-1.05 4.49A10.14 10.14 0 0 0 19 18a1.005 1.005 0 0 1-2 .2a18.3 18.3 0 0 0-1.22-4a21.6 21.6 0 0 0-3.59 3.06a6 6 0 0 1-4.26 1.83"></svg:path></svg:g>`,
})
export class MingcuteShoe2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteShoe2LineIcon],svg[mingcute-shoe-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M7.93 19.09A6 6 0 0 1 6.82 19c-2.07-.37-5.06-2.32-4.88-4.39C2.18 12 6.56 12 8 12c1.92 0 3.89-2.07 6.62-4.94c.81-.86 1.7-1.79 2.67-2.77a1 1 0 0 1 1.16-.18a6.1 6.1 0 0 1 3.4 4a5.39 5.39 0 0 1-1.05 4.49A10.14 10.14 0 0 0 19 18a1.005 1.005 0 0 1-2 .2a18.3 18.3 0 0 0-1.22-4a21.6 21.6 0 0 0-3.59 3.06a6 6 0 0 1-4.26 1.83M18.17 6.25l-2.1 2.18C13 11.67 10.78 14 8 14c-3.58 0-4.06.76-4.07.77c.02.14.08.271.17.38A5.6 5.6 0 0 0 7.18 17a3.91 3.91 0 0 0 3.61-1.23C12.52 14.06 14.83 12 16 12c.37 0 1.08 0 1.86 1.83a10.5 10.5 0 0 1 1.34-2.43a3.36 3.36 0 0 0 .7-2.86a3.86 3.86 0 0 0-1.73-2.29"></svg:path></svg:g>`,
})
export class MingcuteShoe2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteShoeFillIcon],svg[mingcute-shoe-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M18.026 3.902a1 1 0 0 0-.717-.489c-.41 0-.853.324-1.327.673q-.176.13-.357.258c-.542.377-1.164.72-1.696.828c-.83.17-1.783-.069-2.547-.41c-.87-.401-1.373.522-1.762 1.236c-.073.133-.142.26-.208.369c-.29.473-.655 1.037-1.07 1.606a1 1 0 0 0-1.04 1.313q-.462.567-.877 1.087A1 1 0 0 0 5.29 11.84c-1.072 1.433-1.81 2.598-2.236 3.635c-.36.88-.514 1.703-.447 2.542c.067.827.342 1.597.727 2.376c.522 1.055 1.802 1.344 2.739.803l14.722-8.5a2 2 0 0 0 .732-2.732l-.5-.866l-6.062 3.5a1 1 0 0 1-1-1.732l6.062-3.5z"></svg:path></svg:g>`,
})
export class MingcuteShoeFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteShoeLineIcon],svg[mingcute-shoe-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M18.026 3.902c-.152-.263-.448-.492-.716-.492c-.48 0-1.097.48-1.47.771c-.559.435-1.211.848-1.911.992c-.518.105-1.136.026-1.682-.117c-.09-.023-.864-.294-.864-.294c-1.072-.495-1.548.912-1.971 1.605c-.29.473-.655 1.037-1.07 1.606a1 1 0 0 0-1.04 1.314q-.462.565-.877 1.086A1 1 0 0 0 5.29 11.84c-1.072 1.433-1.81 2.598-2.236 3.635c-.36.88-.514 1.703-.447 2.542c.067.827.342 1.598.727 2.376c.522 1.055 1.802 1.344 2.739.803l14.722-8.5a2 2 0 0 0 .732-2.732zm.268 4.464l-1.419-2.457c-.764.546-1.617 1.033-2.545 1.223c-.954.195-1.919.034-2.587-.14c-.411-.107-.404.057-.625.418c-.252.413-.564.899-.92 1.406l.111.055a1 1 0 1 1-.886 1.793l-.473-.234q-.357.436-.68.84a1 1 0 0 1-.945 1.76l-.312-.154c-1.086 1.437-1.752 2.487-2.11 3.358c-.265.647-.34 1.154-.303 1.623c.037.466.192.964.498 1.592l14.696-8.485l-.5-.866l-4.33 2.5a1 1 0 0 1-1-1.732z"></svg:path></svg:g>`,
})
export class MingcuteShoeLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteShopFillIcon],svg[mingcute-shop-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" fill-rule="nonzero" d="M11 13v2H9v-2z"></svg:path><svg:path fill="currentColor" d="M6.48 4a2 2 0 0 0-1.561.75l-3.05 3.813C1.083 9.545 1.783 11 3.04 11H4v7a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-7h2v8a1 1 0 1 0 2 0v-8h.96c1.258 0 1.957-1.455 1.171-2.437l-3.05-3.812A2 2 0 0 0 17.52 4zM8 11a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1z"></svg:path></svg:g>`,
})
export class MingcuteShopFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteShopLineIcon],svg[mingcute-shop-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M17.52 4a2 2 0 0 1 1.442.614l.12.137l3.05 3.812c.757.947.134 2.334-1.04 2.432L20.96 11H20v8a1 1 0 0 1-1.993.117L18 19v-8h-2v7a2 2 0 0 1-1.85 1.995L14 20H6a2 2 0 0 1-1.994-1.85L4 18v-7h-.96c-1.212 0-1.906-1.353-1.25-2.33l.08-.107l3.049-3.812a2 2 0 0 1 1.38-.743L6.482 4zM7 11H6v7h8v-7h-1v4a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1zm4 0H9v3h2zm6.52-5H6.48l-2.4 3h15.84z"></svg:path></svg:g>`,
})
export class MingcuteShopLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteShoppingBag1FillIcon],svg[mingcute-shopping-bag-1-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M12 2a4 4 0 0 1 4 4h2.035a2 2 0 0 1 1.999 1.929l.428 12A2 2 0 0 1 18.464 22H5.536a2 2 0 0 1-1.998-2.071l.428-12A2 2 0 0 1 5.965 6H8a4 4 0 0 1 4-4m-2 6H8v1a1 1 0 0 0 1.993.117L10 9zm6 0h-2v1a1 1 0 1 0 2 0zm-4-4a2 2 0 0 0-1.995 1.85L10 6h4a2 2 0 0 0-2-2"></svg:path></svg:g>`,
})
export class MingcuteShoppingBag1FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteShoppingBag1LineIcon],svg[mingcute-shopping-bag-1-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M12 2a4 4 0 0 1 4 4h2.035a2 2 0 0 1 1.999 1.929l.428 12A2 2 0 0 1 18.464 22H5.536a2 2 0 0 1-1.998-2.071l.428-12A2 2 0 0 1 5.965 6H8a4 4 0 0 1 4-4M8 8H5.965l-.429 12h12.928l-.429-12H16v1a1 1 0 0 1-1.993.117L14 9V8h-4v1a1 1 0 0 1-1.993.117L8 9zm4-4a2 2 0 0 0-1.995 1.85L10 6h4a2 2 0 0 0-2-2"></svg:path></svg:g>`,
})
export class MingcuteShoppingBag1LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteShoppingBag2FillIcon],svg[mingcute-shopping-bag-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M18.06 3a2 2 0 0 1 1.98 1.719l.017.156l.875 14a2 2 0 0 1-1.847 2.12l-.15.005H5.066a2 2 0 0 1-2-1.976l.003-.149l.875-14a2 2 0 0 1 1.84-1.869L5.94 3zM15 7a1 1 0 0 0-.993.883L14 8a2 2 0 1 1-4 0a1 1 0 0 0-2 0a4 4 0 0 0 8 0a1 1 0 0 0-1-1"></svg:path></svg:g>`,
})
export class MingcuteShoppingBag2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteShoppingBag2LineIcon],svg[mingcute-shopping-bag-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M18.06 3a2 2 0 0 1 1.98 1.719l.017.156l.875 14a2 2 0 0 1-1.847 2.12l-.15.005H5.066a2 2 0 0 1-2-1.976l.003-.149l.875-14a2 2 0 0 1 1.84-1.869L5.94 3zm0 2H5.94l-.875 14h13.87zM15 7a1 1 0 0 1 1 1a4 4 0 0 1-8 0a1 1 0 0 1 2 0a2 2 0 0 0 3.995.15L14 8a1 1 0 0 1 1-1"></svg:path></svg:g>`,
})
export class MingcuteShoppingBag2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteShoppingBag3FillIcon],svg[mingcute-shopping-bag-3-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M6 3.586A2 2 0 0 1 7.414 3h9.172A2 2 0 0 1 18 3.586L20.414 6A2 2 0 0 1 21 7.414V19a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V7.414A2 2 0 0 1 3.586 6zM16.586 5H7.414l-2 2h13.172zM10 12a1 1 0 1 0-2 0a4 4 0 0 0 8 0a1 1 0 1 0-2 0a2 2 0 1 1-4 0"></svg:path></svg:g>`,
})
export class MingcuteShoppingBag3FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteShoppingBag3LineIcon],svg[mingcute-shopping-bag-3-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M16.586 3A2 2 0 0 1 18 3.586L20.414 6A2 2 0 0 1 21 7.414V19a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V7.414A2 2 0 0 1 3.586 6L6 3.586A2 2 0 0 1 7.414 3zM19 9H5v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1zm-4 2a1 1 0 0 1 1 1a4 4 0 0 1-8 0a1 1 0 1 1 2 0a2 2 0 0 0 3.995.15L14 12a1 1 0 0 1 1-1m1.586-6H7.414l-2 2h13.172z"></svg:path></svg:g>`,
})
export class MingcuteShoppingBag3LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteShoppingCart1FillIcon],svg[mingcute-shopping-cart-1-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M7.5 19a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3m10 0a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3M3 2c1.726 0 3.023 1.283 3.145 3h13.657a2 2 0 0 1 1.968 2.358l-1.637 9A2 2 0 0 1 18.165 18H6.931a2 2 0 0 1-1.995-1.858l-.8-11.213C4.09 4.31 3.564 4 3 4a1 1 0 0 1 0-2"></svg:path></svg:g>`,
})
export class MingcuteShoppingCart1FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteShoppingCart1LineIcon],svg[mingcute-shopping-cart-1-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M7.5 19a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3m10 0a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3M3.138 2A3 3 0 0 1 6.13 4.786L6.145 5h13.657a2 2 0 0 1 1.968 2.358l-1.637 9A2 2 0 0 1 18.165 18H6.931a2 2 0 0 1-1.995-1.858l-.8-11.213A1 1 0 0 0 3.137 4H3a1 1 0 0 1 0-2zm16.664 5H6.288l.643 9h11.234z"></svg:path></svg:g>`,
})
export class MingcuteShoppingCart1LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteShoppingCart2FillIcon],svg[mingcute-shopping-cart-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M9 20a1 1 0 1 1 0 2a1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2a1 1 0 0 1 0-2M2.2 2.9a1 1 0 0 1 1.295-.269l.105.07l1.708 1.28a2 2 0 0 1 .653.848l.06.171h12.846a2 2 0 0 1 1.998 2.1l-.013.148l-.457 3.655a5 5 0 0 1-4.32 4.34l-.226.023l-7.313.61l.26 1.124H17.5a1 1 0 0 1 .117 1.993L17.5 19H8.796a2 2 0 0 1-1.906-1.393l-.043-.157l-2.74-11.87L2.4 4.3a1 1 0 0 1-.2-1.4"></svg:path></svg:g>`,
})
export class MingcuteShoppingCart2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteShoppingCart2LineIcon],svg[mingcute-shopping-cart-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M9 20a1 1 0 1 1 0 2a1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2a1 1 0 0 1 0-2M3.495 2.631l.105.07l1.708 1.28a2 2 0 0 1 .653.848l.06.171h12.846a2 2 0 0 1 1.998 2.1l-.013.148l-.457 3.655a5 5 0 0 1-4.32 4.34l-.226.023l-7.313.61l.26 1.124H17.5a1 1 0 0 1 .117 1.993L17.5 19H8.796a2 2 0 0 1-1.906-1.393l-.043-.157l-2.74-11.87L2.4 4.3a1 1 0 0 1 .985-1.723zM18.867 7H6.487l1.595 6.906l7.6-.633a3 3 0 0 0 2.728-2.617z"></svg:path></svg:g>`,
})
export class MingcuteShoppingCart2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteShortsFillIcon],svg[mingcute-shorts-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M5.847 5a2 2 0 0 0-1.973 1.671l-.057.346Q3.907 7 4 7h16q.094 0 .183.017l-.057-.346A2 2 0 0 0 18.153 5zm14.645 3.87A1 1 0 0 1 20 9H4a1 1 0 0 1-.492-.13l-1.3 7.801A2 2 0 0 0 4.18 19h5.285a2 2 0 0 0 1.664-.89L12 15.802l.871 2.306a2 2 0 0 0 1.664.891h5.285a2 2 0 0 0 1.972-2.329z"></svg:path></svg:g>`,
})
export class MingcuteShortsFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteShortsLineIcon],svg[mingcute-shorts-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M18.153 5a2 2 0 0 1 1.94 1.513l.033.158l1.666 10a2 2 0 0 1-1.826 2.324L19.82 19h-5.285a2 2 0 0 1-1.566-.756l-.098-.135L12 16.803l-.871 1.306a2 2 0 0 1-1.498.884L9.465 19H4.18a2 2 0 0 1-1.991-2.183l.019-.146l1.666-10a2 2 0 0 1 1.812-1.665L5.847 5zm.5 5H5.347L4.18 17h5.285l1.703-2.555a1 1 0 0 1 1.664 0L14.535 17h5.285zm-.5-3H5.847L5.68 8h12.64z"></svg:path></svg:g>`,
})
export class MingcuteShortsLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteShovelFillIcon],svg[mingcute-shovel-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M16.243 3.515a1 1 0 0 1 1.414 0l1.41 1.41l.004.004l.005.004l1.41 1.41a1 1 0 0 1-1.415 1.414l-.707-.707l-4.95 4.95l1.414 1.414a2 2 0 0 1 0 2.829l-2.494 2.494a5 5 0 0 1-5.117 1.208l-.949-.316a3 3 0 0 1-1.897-1.898l-.316-.948a5 5 0 0 1 1.208-5.117l2.494-2.495a2 2 0 0 1 2.829 0L12 10.586l4.95-4.95l-.707-.707a1 1 0 0 1 0-1.414"></svg:path></svg:g>`,
})
export class MingcuteShovelFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteShovelLineIcon],svg[mingcute-shovel-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M16.243 3.515a1 1 0 0 1 1.414 0l2.828 2.828a1 1 0 1 1-1.414 1.414l-.707-.707l-4.95 4.95l1.415 1.414a2 2 0 0 1 0 2.829l-2.495 2.494a5 5 0 0 1-5.117 1.208l-.948-.316A3 3 0 0 1 4.37 17.73l-.316-.948a5 5 0 0 1 1.208-5.117L7.757 9.17a2 2 0 0 1 2.828 0L12 10.586l4.95-4.95l-.707-.707a1 1 0 0 1 0-1.414M10.586 12l-1.414-1.414l-2.495 2.494a3 3 0 0 0-.725 3.07l.317.949a1 1 0 0 0 .632.632l.949.316a3 3 0 0 0 3.07-.724l2.494-2.495L12 13.414l-.707.707a1 1 0 0 1-1.414-1.414z"></svg:path></svg:g>`,
})
export class MingcuteShovelLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteShowerFillIcon],svg[mingcute-shower-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M12.41 3.654a4.304 4.304 0 0 1 5.571-.661l.18.128l.323.242a3.79 3.79 0 0 1 1.51 2.81l.006.222V21a1 1 0 0 1-1.993.117L18 21V6.395a1.8 1.8 0 0 0-.586-1.325l-.13-.107l-.323-.242a2.3 2.3 0 0 0-2.584-.122l-.153.102l.758.438a4 4 0 0 1 1.566 5.277l-.102.187l-.5.866a1 1 0 0 1-1.261.419l-.105-.053l-8.66-5a1 1 0 0 1-.419-1.262l.053-.104l.5-.866a4 4 0 0 1 5.277-1.565l.187.1zM6.75 15.397a1 1 0 0 1 .366 1.366l-.5.866a1 1 0 0 1-1.732-1l.5-.866a1 1 0 0 1 1.366-.366m2.232.134a1 1 0 0 1 1.785.896l-.053.104l-.5.866a1 1 0 0 1-1.784-.895l.052-.105zm-3.83-3.366a1 1 0 0 1 .366 1.366l-.5.866a1 1 0 1 1-1.732-1l.5-.866a1 1 0 0 1 1.366-.366m3.598-.232a1 1 0 0 1 .366 1.366l-.5.866a1 1 0 0 1-1.732-1l.5-.866a1 1 0 0 1 1.366-.366m2.232.134a1 1 0 0 1 1.785.896l-.053.104l-.5.866a1 1 0 0 1-1.784-.896l.052-.104zm-3.83-3.366a1 1 0 0 1 .366 1.366l-.5.866a1 1 0 1 1-1.732-1l.5-.866a1 1 0 0 1 1.366-.366"></svg:path></svg:g>`,
})
export class MingcuteShowerFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteShowerGelFillIcon],svg[mingcute-shower-gel-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M9 2a1 1 0 0 0 0 2h2v2H9.442a3 3 0 0 0-2.847 2.051l-1.236 3.71A7 7 0 0 0 5 13.973V19a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3v-5.026a7 7 0 0 0-.36-2.214l-1.236-3.709A3 3 0 0 0 14.56 6H13V4a1 1 0 1 0 0-2zm1 11H7.096c.135-.683.405-1.342.625-2H10a1 1 0 1 1 0 2"></svg:path></svg:g>`,
})
export class MingcuteShowerGelFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteShowerGelLineIcon],svg[mingcute-shower-gel-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M8 3a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2v2h1.559a3 3 0 0 1 2.845 2.051l1.237 3.71A7 7 0 0 1 19 13.973V19a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3v-5.026a7 7 0 0 1 .36-2.214l1.235-3.709A3 3 0 0 1 9.442 6H11V4H9a1 1 0 0 1-1-1m1.442 5a1 1 0 0 0-.95.684L7.722 11H10a1 1 0 1 1 0 2H7.096a5 5 0 0 0-.096.974V19a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-5.026a5 5 0 0 0-.257-1.582l-1.236-3.708A1 1 0 0 0 14.56 8z"></svg:path></svg:g>`,
})
export class MingcuteShowerGelLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteShowerLineIcon],svg[mingcute-shower-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M12.41 3.653a4.304 4.304 0 0 1 5.571-.66l.18.128l.323.242a3.79 3.79 0 0 1 1.51 2.809l.006.223V21a1 1 0 0 1-1.993.117L18 21V6.395a1.8 1.8 0 0 0-.586-1.325l-.13-.107l-.323-.242a2.3 2.3 0 0 0-2.584-.123l-.153.103l.758.438a4 4 0 0 1 1.566 5.277l-.102.187l-.5.866a1 1 0 0 1-1.261.418l-.105-.052l-8.66-5a1 1 0 0 1-.418-1.262l.052-.104l.5-.866a4 4 0 0 1 5.277-1.566l.187.102zM6.75 15.397a1 1 0 0 1 .366 1.366l-.5.866a1 1 0 1 1-1.732-1l.5-.866a1 1 0 0 1 1.366-.366m2.232.134a1 1 0 0 1 1.785.896l-.053.104l-.5.866a1 1 0 0 1-1.784-.896l.052-.104zm-3.83-3.366a1 1 0 0 1 .366 1.366l-.5.866a1 1 0 0 1-1.732-1l.5-.866a1 1 0 0 1 1.366-.366m3.598-.232a1 1 0 0 1 .366 1.366l-.5.866a1 1 0 1 1-1.732-1l.5-.866a1 1 0 0 1 1.366-.366m2.232.134a1 1 0 0 1 1.785.895l-.053.105l-.5.866a1 1 0 0 1-1.784-.896l.052-.104zM7.152 8.7a1 1 0 0 1 .366 1.366l-.5.866a1 1 0 0 1-1.732-1l.5-.866A1 1 0 0 1 7.152 8.7m.634-3.098l6.928 4a2 2 0 0 0-.732-2.732l-3.464-2a2 2 0 0 0-2.732.732"></svg:path></svg:g>`,
})
export class MingcuteShowerLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteShowersFillIcon],svg[mingcute-showers-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M9.104 18.949a1 1 0 0 1 .707 1.224l-.26.967a1 1 0 0 1-1.931-.518l.259-.966a1 1 0 0 1 1.225-.707m4.67-1.155a1 1 0 0 1 .706 1.224l-.258.966a1 1 0 1 1-1.932-.517l.259-.966a1 1 0 0 1 1.224-.707Zm-3.635-2.709a1 1 0 0 1 .707 1.225l-.259.966a1 1 0 0 1-1.932-.518l.26-.966a1 1 0 0 1 1.224-.707M11.5 2a6.5 6.5 0 0 1 6.086 4.212a6.002 6.002 0 0 1-1.172 11.774c.36-.363.633-.82.775-1.348l.259-.966a3 3 0 0 0-5.664-1.94a3 3 0 0 0-4.802 1.543l-.258.966a3 3 0 0 0-.001 1.552a3 3 0 0 0-.172.187a5 5 0 0 1-1.55-9.564A6.5 6.5 0 0 1 11.5 2m3.309 11.93a1 1 0 0 1 .707 1.225l-.26.966a1 1 0 0 1-1.931-.518l.259-.966a1 1 0 0 1 1.225-.707"></svg:path></svg:g>`,
})
export class MingcuteShowersFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteShowersLineIcon],svg[mingcute-showers-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M9.104 18.949a1 1 0 0 1 .707 1.224l-.26.967a1 1 0 0 1-1.931-.518l.259-.966a1 1 0 0 1 1.225-.707m4.67-1.155a1 1 0 0 1 .706 1.224l-.258.966a1 1 0 1 1-1.932-.517l.259-.966a1 1 0 0 1 1.224-.707Zm-3.635-2.709a1 1 0 0 1 .707 1.225l-.259.966a1 1 0 0 1-1.932-.518l.26-.966a1 1 0 0 1 1.224-.707M11.5 2a6.5 6.5 0 0 1 6.086 4.212A6.002 6.002 0 0 1 19.6 16.799a1 1 0 1 1-1.202-1.598a4.001 4.001 0 0 0-1.744-7.147a1.01 1.01 0 0 1-.81-.733A4.5 4.5 0 0 0 7.027 9a1.01 1.01 0 0 1-.76 1.09a3.002 3.002 0 0 0-1.252 5.16a1 1 0 1 1-1.324 1.5A5 5 0 0 1 5 8.416A6.5 6.5 0 0 1 11.5 2m3.309 11.93a1 1 0 0 1 .707 1.225l-.26.966a1 1 0 0 1-1.931-.518l.259-.966a1 1 0 0 1 1.225-.707"></svg:path></svg:g>`,
})
export class MingcuteShowersLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteShuffle2FillIcon],svg[mingcute-shuffle-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M6.301 5.5a4.5 4.5 0 0 1 3.732 1.985l.127.2l4.252 7.087a1.5 1.5 0 0 0 1.13.72l.157.008h.741l.02-.312l.011-.14c.056-.719.749-1.17 1.331-.865l.314.168l.368.209a21 21 0 0 1 1.564 1.005l.385.28l.323.245l.137.107c.489.39.47 1.195-.05 1.606l-.136.107l-.32.242l-.38.275l-.438.301a22 22 0 0 1-.714.457l-.426.255l-.375.211l-.316.17c-.577.3-1.207-.085-1.261-.756l-.04-.565H15.7a4.5 4.5 0 0 1-3.732-1.985l-.127-.2l-4.252-7.087a1.5 1.5 0 0 0-1.13-.72L6.301 8.5H4a1.5 1.5 0 0 1-.144-2.993L4 5.5zm1.007 9.612L7.42 15a1.5 1.5 0 1 1 2.237 2a4.5 4.5 0 0 1-3.113 1.494l-.242.006H4a1.5 1.5 0 0 1-.144-2.993L4 15.5h2.301a1.5 1.5 0 0 0 1.007-.388m10.494-10.93l.314.17l.368.208q.197.114.417.248l.459.29q.375.246.688.467l.385.28l.323.245l.137.107c.489.39.47 1.195-.05 1.606l-.136.107l-.32.242l-.38.275l-.438.301a22 22 0 0 1-.714.457l-.426.255l-.375.211l-.316.17c-.577.3-1.207-.085-1.261-.756l-.04-.565H15.7a1.5 1.5 0 0 0-1.007.388L14.58 9a1.5 1.5 0 1 1-2.237-2a4.5 4.5 0 0 1 3.113-1.494l.242-.006h.741l.031-.452c.056-.719.749-1.17 1.331-.865Z"></svg:path></svg:g>`,
})
export class MingcuteShuffle2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteShuffle2LineIcon],svg[mingcute-shuffle-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M6.301 6a4 4 0 0 1 3.312 1.756l.118.186l4.253 7.087a2 2 0 0 0 1.553.965L15.7 16h1.194l.02-.415l.022-.36l.012-.159c.027-.346.352-.557.631-.41l.306.164l.36.203l.198.117l.43.263l.229.147l.463.31l.21.147l.377.273l.315.24l.133.104c.236.188.225.566-.023.762l-.28.217l-.34.252l-.4.282l-.456.305l-.462.291l-.416.249l-.365.205l-.307.165c-.275.143-.572-.036-.598-.36l-.025-.347l-.024-.415l-.01-.23H15.7a4 4 0 0 1-3.312-1.756l-.118-.186l-4.253-7.087a2 2 0 0 0-1.553-.965L6.3 8H4a1 1 0 0 1-.117-1.993L4 6zm3.714 7.643a1 1 0 0 1 .342 1.371l-.626 1.044A4 4 0 0 1 6.301 18H4a1 1 0 1 1 0-2h2.301a2 2 0 0 0 1.715-.971l.627-1.043a1 1 0 0 1 1.371-.344Zm7.563-8.988l.306.165l.36.203l.198.117l.43.263l.229.147l.463.31l.21.147l.377.273l.315.24l.133.104c.236.188.225.566-.023.762l-.28.217l-.34.252q-.186.135-.4.282l-.456.305l-.462.291l-.416.249l-.365.206l-.307.164c-.275.143-.572-.036-.598-.36l-.025-.347l-.024-.415l-.01-.23H15.7a2 2 0 0 0-1.627.836l-.088.135l-.626 1.043a1 1 0 0 1-1.77-.925l.055-.104l.626-1.043a4 4 0 0 1 3.209-1.936l.22-.006h1.195l.02-.415l.022-.36l.012-.159c.027-.346.352-.557.631-.41Z"></svg:path></svg:g>`,
})
export class MingcuteShuffle2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteShuffleFillIcon],svg[mingcute-shuffle-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="M0 0v24h24V0zm11.407 23.258l.011.002l.071.035l.02.004l.014-.004l.071-.036q.016-.004.024.006l.004.01l.017.428l-.005.02l-.01.013l-.104.074l-.015.004l-.012-.004l-.104-.074l-.012-.016l-.004-.017l.017-.427q.004-.016.016-.018Zm-.265-.113l.014.002l.184.093l.01.01l.003.011l-.018.43l-.005.012l-.008.008l-.201.092a.03.03 0 0 1-.029-.008l-.004-.014l.034-.614q.005-.018.02-.022m.715.002a.02.02 0 0 1 .027.006l.006.014l.034.614q-.001.018-.017.024l-.015-.002l-.201-.093l-.01-.008l-.003-.011l-.018-.43l.003-.012l.01-.01z"></svg:path><svg:path fill="currentColor" d="M17.802 3.183c-.582-.305-1.274.146-1.33.865q-.017.201-.032.452a5.5 5.5 0 0 0-4.887 3.04L11 8.646l-.553-1.106a5.5 5.5 0 0 0-4.92-3.04H4a1.5 1.5 0 1 0 0 3h1.528a2.5 2.5 0 0 1 2.236 1.382L9.323 12l-1.56 3.118A2.5 2.5 0 0 1 5.529 16.5H4a1.5 1.5 0 1 0 0 3h1.528a5.5 5.5 0 0 0 4.92-3.04L11 15.354l.553 1.106a5.5 5.5 0 0 0 4.885 3.04q.018.321.039.565c.054.671.684 1.056 1.26.755c.38-.198.933-.506 1.591-.934a20 20 0 0 0 1.515-1.083c.52-.411.539-1.216.05-1.606a20 20 0 0 0-1.533-1.1a19 19 0 0 0-1.558-.914c-.582-.305-1.274.146-1.33.865q-.017.201-.032.452a2.5 2.5 0 0 1-2.204-1.382L12.677 12l1.56-3.118a2.5 2.5 0 0 1 2.2-1.382q.02.322.04.565c.054.671.684 1.056 1.26.755a20 20 0 0 0 1.591-.934c.66-.428 1.173-.812 1.515-1.083c.52-.411.539-1.216.05-1.606a20 20 0 0 0-1.533-1.1a19 19 0 0 0-1.558-.914"></svg:path></svg:g>`,
})
export class MingcuteShuffleFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteShuffleLineIcon],svg[mingcute-shuffle-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="M0 0v24h24V0zm11.407 23.258l.011.002l.071.035l.02.004l.014-.004l.071-.036q.016-.004.024.006l.004.01l.017.428l-.005.02l-.01.013l-.104.074l-.015.004l-.012-.004l-.104-.074l-.012-.016l-.004-.017l.017-.427q.004-.016.016-.018Zm-.265-.113l.014.002l.184.093l.01.01l.003.011l-.018.43l-.005.012l-.008.008l-.201.092a.03.03 0 0 1-.029-.008l-.004-.014l.034-.614q.005-.018.02-.022m.715.002a.02.02 0 0 1 .027.006l.006.014l.034.614q-.001.018-.017.024l-.015-.002l-.201-.093l-.01-.008l-.003-.011l-.018-.43l.003-.012l.01-.01z"></svg:path><svg:path fill="currentColor" d="M17.578 3.655c-.28-.146-.604.065-.631.411c-.02.252-.04.567-.054.934h-.42A5 5 0 0 0 12 7.764l-1 2l-1-2A5 5 0 0 0 5.528 5H4a1 1 0 1 0 0 2h1.528A3 3 0 0 1 8.21 8.658L9.882 12l-1.67 3.342A3 3 0 0 1 5.527 17H4a1 1 0 1 0 0 2h1.528A5 5 0 0 0 10 16.236l1-2l1 2A5 5 0 0 0 16.472 19h.421c.016.396.038.732.06.992c.026.324.322.503.597.36c.368-.192.906-.492 1.55-.91a20 20 0 0 0 1.476-1.056c.248-.196.259-.574.023-.762a19 19 0 0 0-1.498-1.074a19 19 0 0 0-1.523-.895c-.28-.146-.604.065-.631.411c-.02.252-.04.567-.054.934h-.42a3 3 0 0 1-2.684-1.658L12.118 12l1.67-3.342A3 3 0 0 1 16.473 7h.421c.016.396.038.732.06.992c.026.324.322.503.597.36c.368-.192.906-.492 1.55-.91a20 20 0 0 0 1.476-1.056c.248-.196.259-.574.023-.762a19 19 0 0 0-1.498-1.074a19 19 0 0 0-1.523-.895Z"></svg:path></svg:g>`,
})
export class MingcuteShuffleLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteSickFillIcon],svg[mingcute-sick-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2m2.918 12.571l-.018-.016a2.014 2.014 0 0 0-2.89-.001a.013.013 0 0 1-.02 0a2.014 2.014 0 0 0-2.768-.116l-.122.117c-.016.016-.036.037-.058.034l-.023-.011l-.343-.315a1 1 0 0 0-1.439 1.384l.087.09l.344.315a2.043 2.043 0 0 0 2.721.035l.132-.126c.009-.011.022-.027.034-.015c.79.816 2.1.816 2.89 0l.012-.002l.028.024c.73.752 1.9.825 2.715.195l.132-.111l.344-.315a1 1 0 0 0-1.254-1.553l-.098.079l-.343.315c-.023.02-.045.01-.063-.007M8.5 8a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3m7 0a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3"></svg:path></svg:g>`,
})
export class MingcuteSickFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteSickLineIcon],svg[mingcute-sick-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2m0 2a8 8 0 1 0 0 16a8 8 0 0 0 0-16m.01 10.554a2.013 2.013 0 0 1 2.767-.116l.123.116c.021.022.05.052.08.024l.344-.315a1 1 0 0 1 1.352 1.474l-.344.315a2.043 2.043 0 0 1-2.721.035l-.126-.119c-.01-.011-.03-.033-.04-.022c-.79.816-2.1.816-2.89 0c-.015-.015-.031.013-.04.022a2.043 2.043 0 0 1-2.847.084l-.344-.315a1 1 0 0 1 1.352-1.474l.343.315c.023.021.045.01.064-.007l.017-.017a2.01 2.01 0 0 1 2.89 0a.013.013 0 0 0 .02 0M8.5 8a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3m7 0a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3"></svg:path></svg:g>`,
})
export class MingcuteSickLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteSignalFillIcon],svg[mingcute-signal-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M20 3.5A1.5 1.5 0 0 1 21.5 5v14a1.5 1.5 0 0 1-3 0V5A1.5 1.5 0 0 1 20 3.5m-4 3A1.5 1.5 0 0 1 17.5 8v11a1.5 1.5 0 0 1-3 0V8A1.5 1.5 0 0 1 16 6.5m-4 3a1.5 1.5 0 0 1 1.5 1.5v8a1.5 1.5 0 0 1-3 0v-8A1.5 1.5 0 0 1 12 9.5m-4 3A1.5 1.5 0 0 1 9.5 14v5a1.5 1.5 0 0 1-3 0v-5A1.5 1.5 0 0 1 8 12.5m-4 3A1.5 1.5 0 0 1 5.5 17v2a1.5 1.5 0 0 1-3 0v-2A1.5 1.5 0 0 1 4 15.5"></svg:path></svg:g>`,
})
export class MingcuteSignalFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteSignalLineIcon],svg[mingcute-signal-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M20 4a1 1 0 0 1 1 1v14a1 1 0 1 1-2 0V5a1 1 0 0 1 1-1m-4 3a1 1 0 0 1 1 1v11a1 1 0 1 1-2 0V8a1 1 0 0 1 1-1m-4 3a1 1 0 0 1 1 1v8a1 1 0 1 1-2 0v-8a1 1 0 0 1 1-1m-4 3a1 1 0 0 1 1 1v5a1 1 0 1 1-2 0v-5a1 1 0 0 1 1-1m-4 3a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1"></svg:path></svg:g>`,
})
export class MingcuteSignalLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteSignatureFillIcon],svg[mingcute-signature-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M15.97 5.38c-.507.16-1.19.46-2.04.932c-1.97 1.092-4.657 3.218-7.82 6.697a1.5 1.5 0 1 1-2.22-2.018c3.298-3.628 6.236-6 8.586-7.303c1.176-.652 2.291-1.141 3.245-1.343c.799-.17 2.288-.284 3.072.997c.349.57.39 1.2.335 1.717c-.055.526-.222 1.078-.452 1.637c-.46 1.12-1.277 2.506-2.45 4.169c-1.091 1.546-1.766 2.671-2.15 3.464c1.01-.465 1.931-1.246 3.054-1.42c.32-.05.783-.06 1.248.173c.51.256.794.689.923 1.085c.304.93-.082 1.946-.366 2.834a1.5 1.5 0 0 1 .736 2.84c-.989.495-2.27.946-3.264.216a1.97 1.97 0 0 1-.726-1.066c-.204-.725-.028-1.489.177-2.194c-.852.44-1.798.859-2.77.899c-.433.017-1.075-.044-1.626-.491c-.604-.49-.788-1.182-.787-1.766c0-.552.158-1.127.379-1.688c.445-1.133 1.326-2.64 2.72-4.616c.827-1.17 1.689-2.405 2.197-3.755Z"></svg:path></svg:g>`,
})
export class MingcuteSignatureFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteSignatureLineIcon],svg[mingcute-signature-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M16.239 4.79c-.595.127-1.456.478-2.55 1.085c-2.034 1.127-4.763 3.294-7.949 6.798a1 1 0 1 1-1.48-1.346c3.276-3.603 6.172-5.934 8.458-7.202c1.16-.643 2.225-1.104 3.107-1.29c.778-.166 1.942-.211 2.541.768c.271.443.313.948.265 1.404c-.048.461-.197.965-.417 1.499c-.44 1.069-1.232 2.42-2.397 4.07c-1.362 1.93-2.103 3.241-2.437 4.09a4 4 0 0 0-.163.5q.157-.032.378-.105c.555-.185 1.235-.525 1.89-.918c.64-.384 1.22-.662 1.722-.74c.263-.04.609-.043.946.126c.369.185.576.497.673.793c.143.439.078.913-.024 1.352c-.165.713-.443 1.395-.621 2.104q.163-.069.372-.172a1 1 0 0 1 .894 1.788c-.65.325-1.265.552-1.81.55a1.57 1.57 0 0 1-.934-.29a1.47 1.47 0 0 1-.54-.798c-.136-.481-.049-1.007.033-1.372c.13-.592.337-1.162.514-1.74c-.804.457-1.6.92-2.483 1.215a4.3 4.3 0 0 1-1.16.237c-.374.015-.873-.04-1.29-.38c-.452-.366-.603-.892-.602-1.376c0-.463.134-.971.344-1.506c.423-1.076 1.276-2.544 2.664-4.51c1.13-1.6 1.824-2.811 2.181-3.68c.13-.316.264-.66.283-1.006c-.083 0-.213.011-.408.053Z"></svg:path></svg:g>`,
})
export class MingcuteSignatureLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteSilentFillIcon],svg[mingcute-silent-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2M9.793 12.793a1 1 0 0 0 0 1.414l.793.793l-.793.793a1 1 0 1 0 1.414 1.414l.793-.793l.793.793a1 1 0 0 0 1.414-1.414L13.414 15l.793-.793a1 1 0 0 0-1.414-1.414l-.793.793l-.793-.793a1 1 0 0 0-1.414 0M8.5 8a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3m7 0a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3"></svg:path></svg:g>`,
})
export class MingcuteSilentFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteSilentLineIcon],svg[mingcute-silent-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2m0 2a8 8 0 1 0 0 16a8 8 0 0 0 0-16m-.793 8.793l.793.793l.793-.793a1 1 0 0 1 1.414 1.414l-.793.793l.793.793a1 1 0 0 1-1.414 1.414L12 16.414l-.793.793a1 1 0 0 1-1.414-1.414l.793-.793l-.793-.793a1 1 0 1 1 1.414-1.414M8.5 8a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3m7 0a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3"></svg:path></svg:g>`,
})
export class MingcuteSilentLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteSiriFillIcon],svg[mingcute-siri-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M7 9c1.786 0 3.33 1.096 4.929 2.568l.458.43l.691.669c.733.714 1.49 1.453 2.241 2.031c.908.7 1.972 1.302 3.181 1.302a3.5 3.5 0 0 0 3.427-2.785C21.327 18.165 17.112 22 12 22C6.477 22 2 17.523 2 12a5 5 0 0 0 5 5c2.57 0 4.633-1.37 6.318-2.714l-.325-.308l-1.128-1.095C10.32 14.089 8.788 15 7 15a3 3 0 1 1 0-6m5-7c5.523 0 10 4.477 10 10l-.005.314A3.5 3.5 0 0 0 18.5 9c-1.162 0-2.204.497-3.121 1.103a13 13 0 0 0-.371.255l.745.723l.497.47q.12.111.238.216c.783-.516 1.426-.767 2.012-.767a1.5 1.5 0 0 1 0 3c-.54 0-1.165-.273-1.96-.886c-.464-.357-.93-.785-1.425-1.259l-1.3-1.26l-.395-.374l-.412-.378C11.4 8.396 9.43 7 7 7a5 5 0 0 0-4.995 4.783L2 11.937l.003-.217C2.152 6.327 6.57 2 12 2"></svg:path></svg:g>`,
})
export class MingcuteSiriFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteSiriFrameFillIcon],svg[mingcute-siri-frame-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M17 3a4 4 0 0 1 3.995 3.8L21 7v10a4 4 0 0 1-3.8 3.995L17 21H7a4 4 0 0 1-3.995-3.8L3 17V7a4 4 0 0 1 3.8-3.995L7 3zm-5 2a7 7 0 1 0 0 14a7 7 0 0 0 0-14M8.5 9.9c1.35 0 2.501.894 3.717 2.047l.537.52c.513.5 1.044 1.017 1.57 1.422c.635.49 1.38.911 2.226.911q.159 0 .312-.02A5.6 5.6 0 0 1 12 17.6a5.59 5.59 0 0 1-4.48-2.239q.468.137.98.139c1.799 0 3.243-.959 4.422-1.9l-.337-.322l-.68-.66C10.824 13.463 9.753 14.1 8.5 14.1a2.1 2.1 0 1 1 0-4.2M12 6.4a5.6 5.6 0 0 1 5.23 3.596a2.5 2.5 0 0 0-.68-.096c-.83 0-1.588.368-2.263.824l-.181.127l.385.374l.441.421q.106.1.21.191c.548-.361.998-.537 1.408-.537a1.05 1.05 0 1 1 0 2.1c-.379 0-.816-.191-1.372-.62c-.303-.234-.608-.51-.929-.816l-1.008-.975l-.34-.32l-.357-.322C11.45 9.387 10.121 8.5 8.5 8.5q-.512.001-.98.139A5.6 5.6 0 0 1 12 6.4"></svg:path></svg:g>`,
})
export class MingcuteSiriFrameFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteSiriFrameLineIcon],svg[mingcute-siri-frame-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M17 3.25A3.75 3.75 0 0 1 20.75 7v10A3.75 3.75 0 0 1 17 20.75H7A3.75 3.75 0 0 1 3.25 17V7A3.75 3.75 0 0 1 7 3.25zm0 1.5H7A2.25 2.25 0 0 0 4.75 7v10A2.25 2.25 0 0 0 7 19.25h10A2.25 2.25 0 0 0 19.25 17V7A2.25 2.25 0 0 0 17 4.75M12 6a6 6 0 1 1 0 12a6 6 0 0 1 0-12m-3 4.2a1.8 1.8 0 0 0 0 3.6c.996 0 1.86-.471 2.72-1.118l.2-.152l.299.29c.184.18.376.367.572.551C11.78 14.178 10.54 15 9 15q-.438 0-.84-.12a4.798 4.798 0 0 0 8.007-.498a2 2 0 0 1-.267.018c-.726 0-1.364-.361-1.908-.781c-.27-.208-.542-.451-.811-.705l-.81-.782C11.26 11.059 10.225 10.2 9 10.2m3-3c-1.57 0-2.964.754-3.84 1.92c.267-.079.55-.12.84-.12c1.331 0 2.432.698 3.348 1.48l.357.317l.337.316l.461.446c.439.427.831.81 1.221 1.11c.477.367.851.531 1.176.531a.9.9 0 1 0 0-1.8c-.351 0-.738.15-1.207.46l-.18-.163l-.378-.361l-.33-.321l.222-.153c.55-.364 1.176-.662 1.873-.662q.304.001.583.082A4.8 4.8 0 0 0 12 7.2"></svg:path></svg:g>`,
})
export class MingcuteSiriFrameLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteSiriLineIcon],svg[mingcute-siri-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M12 2c5.523 0 10 4.477 10 10l-.005.314l.005.186q0 .368-.073.715C21.327 18.165 17.112 22 12 22C6.477 22 2 17.523 2 12S6.477 2 12 2M7 9a3 3 0 1 0 0 6c1.689 0 3.148-.812 4.608-1.919l.257-.198l1.129 1.095l.324.308C11.633 15.63 9.57 17 7 17c-.486 0-.955-.07-1.4-.198A7.99 7.99 0 0 0 12 20a8 8 0 0 0 6.946-4.028A4 4 0 0 1 18.5 16c-1.21 0-2.273-.602-3.18-1.302c-.626-.482-1.257-1.075-1.873-1.673l-1.06-1.027l-.458-.43C10.33 10.096 8.786 9 7 9m5-5a7.99 7.99 0 0 0-6.4 3.198A5 5 0 0 1 7 7c2.43 0 4.4 1.396 6.008 2.843l.412.378l.395.375l1.3 1.259c.495.474.961.902 1.425 1.26c.795.612 1.42.885 1.96.885a1.5 1.5 0 0 0 1.453-1.125q.028-.26.04-.526A1.5 1.5 0 0 0 18.5 11c-.586 0-1.23.251-2.012.767q-.235-.21-.483-.445l-.997-.964q.186-.132.37-.255C16.297 9.497 17.339 9 18.5 9c.337 0 .664.048.972.137A8 8 0 0 0 12 4"></svg:path></svg:g>`,
})
export class MingcuteSiriLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteSitemapFillIcon],svg[mingcute-sitemap-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2v2h4a3 3 0 0 1 3 3v1a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2v-1a1 1 0 0 0-1-1h-4v2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2v-2H7a1 1 0 0 0-1 1v1a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2v-1a3 3 0 0 1 3-3h4V9a2 2 0 0 1-2-2z"></svg:path></svg:g>`,
})
export class MingcuteSitemapFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteSitemapLineIcon],svg[mingcute-sitemap-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M13 3a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2v2h4a3 3 0 0 1 3 3v1a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2v-1a1 1 0 0 0-1-1h-4v2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2v-2H7a1 1 0 0 0-1 1v1a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2v-1a3 3 0 0 1 3-3h4V9a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm7 14h-2v2h2zM6 17H4v2h2zm7 0h-2v2h2zm0-12h-2v2h2z"></svg:path></svg:g>`,
})
export class MingcuteSitemapLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteSkateboardFillIcon],svg[mingcute-skateboard-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M13.457 3.604a5.002 5.002 0 0 1 6.939 6.939a2.5 2.5 0 0 1-.132 3.082l-.132.143l-.707.707c-.81.81-2.039.948-2.991.413l-.156-.095l-1.485 1.485a2.5 2.5 0 0 1-.19 3.008l-.128.139l-.707.707a2.5 2.5 0 0 1-3.225.264a5.002 5.002 0 0 1-6.939-6.939a2.5 2.5 0 0 1 .132-3.082l.132-.143l.707-.707a2.5 2.5 0 0 1 2.99-.413l.157.095l1.485-1.485a2.5 2.5 0 0 1 .19-3.008l.128-.139l.707-.707a2.5 2.5 0 0 1 3.225-.264m-.396 13.7a.5.5 0 0 0-.638-.059l-.07.058l-.707.707a.5.5 0 0 0 .638.765l.07-.057l.707-.708a.5.5 0 0 0 0-.707Zm4.95-5.657l-.708.707a.5.5 0 1 0 .707.707l.707-.707a.5.5 0 1 0-.707-.707Zm-11.314-.708a.5.5 0 0 0-.638-.057l-.07.057l-.707.707a.5.5 0 0 0 .638.765l.07-.057l.707-.707a.5.5 0 0 0 0-.708m4.95-5.656l-.708.707a.5.5 0 0 0 .707.707l.708-.707a.5.5 0 0 0-.708-.707Z"></svg:path></svg:g>`,
})
export class MingcuteSkateboardFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
