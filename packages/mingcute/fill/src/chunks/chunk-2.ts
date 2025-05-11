import { Component, input } from '@angular/core'

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

@Component({
  standalone: true,
  selector: 'svg[mingcuteSkipForwardFillIcon],svg[mingcute-skip-forward-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M3.569 5.865A1.332 1.332 0 0 1 5.415 4.8l.646.283l.511.233l.597.283l.676.331l.49.249l.793.414l.564.304l.588.326l.613.349l.633.37l.599.361l.564.349l.778.496l.694.458l.607.414l.517.363l.541.394l.206.154c.71.535.71 1.594.001 2.13l-.43.319l-.273.198l-.664.465l-.595.404l-.443.292l-.73.47l-.81.5l-.581.35l-.615.36l-.62.352l-.593.33l-.566.305l-.538.283l-.748.381l-.673.331l-.773.364l-.744.332l-.224.096a1.332 1.332 0 0 1-1.844-1.065l-.08-.698l-.071-.767l-.053-.689l-.05-.78l-.028-.57l-.024-.605l-.019-.64l-.015-1.026v-.715l.015-1.024l.03-.948l.026-.587l.03-.55l.052-.75l.054-.657l.07-.722zM19 5a1 1 0 0 1 .993.883L20 6v12a1 1 0 0 1-.883.993L19 19h-1a1 1 0 0 1-.993-.883L17 18V6a1 1 0 0 1 .883-.993L18 5z"></svg:path></svg:g>`,
})
export class MingcuteSkipForwardFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteSkipPreviousFillIcon],svg[mingcute-skip-previous-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="m20.43 5.865l.078.699l.072.767l.036.448l.051.75l.03.55l.038.894l.019.641l.012.675l.004.707l-.004.707l-.012.675l-.019.641l-.024.606l-.028.569l-.05.78l-.035.47l-.09.986l-.079.698a1.332 1.332 0 0 1-1.844 1.065l-.49-.213l-.846-.386l-.62-.298l-.458-.226l-.748-.381l-.538-.283l-.566-.306l-.594-.329l-.619-.353l-.615-.36l-.582-.349l-.809-.5l-.73-.47l-.443-.292l-.406-.274l-.54-.373l-.587-.42l-.43-.319a1.332 1.332 0 0 1 .002-2.13l.325-.242l.422-.306l.517-.363l.607-.414l.694-.458l.51-.327l.546-.342l.581-.355l.617-.366l.32-.186q.312-.18.613-.349l.588-.326l.563-.304l.793-.414l.725-.365l.442-.215l.597-.283l.802-.362l.355-.154a1.332 1.332 0 0 1 1.846 1.065ZM6 5a1 1 0 0 1 .993.883L7 6v12a1 1 0 0 1-.883.993L6 19H5a1 1 0 0 1-.993-.883L4 18V6a1 1 0 0 1 .883-.993L5 5z"></svg:path></svg:g>`,
})
export class MingcuteSkipPreviousFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteSkirtFillIcon],svg[mingcute-skirt-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M7.493 2.138a1 1 0 0 1 1.213.154a7.4 7.4 0 0 0 1.099.876C10.505 3.635 11.3 4 12 4s1.495-.365 2.195-.832a8.4 8.4 0 0 0 1.086-.864c.328-.32.825-.402 1.226-.166a1 1 0 0 1 .454 1.137l-1.814 6.35c.65.572 1.191 1.293 1.638 2.043c1.051 1.765 1.735 3.8 2.101 5.818c.109.598.295 1.388.008 1.961c-.462.924-1.903 1.009-2.798 1.11c-1.158.13-2.636.193-4.096.193s-2.938-.063-4.096-.194c-.9-.101-2.325-.162-2.798-1.109c-.293-.585-.102-1.358.008-1.961c.365-2.017 1.05-4.053 2.101-5.818c.447-.75.988-1.47 1.638-2.043l-1.815-6.35a1 1 0 0 1 .455-1.137m3.163 6.519A5.7 5.7 0 0 1 12 8.5a5.7 5.7 0 0 1 1.344.157l.922-3.229C13.6 5.748 12.819 6 12 6c-.82 0-1.6-.252-2.266-.572z"></svg:path></svg:g>`,
})
export class MingcuteSkirtFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteSkullFillIcon],svg[mingcute-skull-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M12 2a9 9 0 0 1 5.5 16.125c-.34.262-.5.59-.5.875a2 2 0 0 1-2 2v-1a1 1 0 1 0-2 0v1h-2v-1a1 1 0 1 0-2 0v1a2 2 0 0 1-2-2c0-.284-.16-.613-.5-.875A9 9 0 0 1 12 2M8.5 9a2.5 2.5 0 1 0 0 5a2.5 2.5 0 0 0 0-5m7 0a2.5 2.5 0 1 0 0 5a2.5 2.5 0 0 0 0-5"></svg:path></svg:g>`,
})
export class MingcuteSkullFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteSleepFillIcon],svg[mingcute-sleep-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M11.5 4A1.5 1.5 0 0 0 13 5.5h3.379l-4.44 4.44A1.5 1.5 0 0 0 13 12.5h7a1.5 1.5 0 1 0 0-3h-3.379l4.44-4.44A1.5 1.5 0 0 0 20 2.5h-7A1.5 1.5 0 0 0 11.5 4M4 10.5a1.5 1.5 0 1 1 0-3h5a1.5 1.5 0 0 1 1.06 2.56L7.622 12.5H9a1.5 1.5 0 0 1 0 3H4a1.5 1.5 0 0 1-1.06-2.56l2.439-2.44zm8 7a1.5 1.5 0 0 1 0-3h4a1.5 1.5 0 0 1 1.06 2.56l-1.439 1.44H16a1.5 1.5 0 1 1 0 3h-4a1.5 1.5 0 0 1-1.06-2.56l1.439-1.44z"></svg:path></svg:g>`,
})
export class MingcuteSleepFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteSleighFillIcon],svg[mingcute-sleigh-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M15.15 4.649c1.232-.52 2.801-.78 4.912-.647a1 1 0 0 1 .935 1.072l-.016.122l-1.679 8.392a3 3 0 0 1-1.876 2.216l-.179.062l.534 2.134H21a1 1 0 0 1 .117 1.993L21 20H6.657a5 5 0 0 1-3.344-1.283l-.192-.182l-.828-.828a1 1 0 0 1 1.32-1.497l.094.083l.829.828a3 3 0 0 0 1.923.872l.198.007h.562l.515-2.06c-1.335-.203-2.76-.93-3.622-2.188c-1.102-1.611-1.106-3.814.556-6.307A1 1 0 0 1 6.3 7.4c.599.798 1.055 1.174 1.395 1.362l.149.074C8.19 8.991 8.494 9 9 9c.88 0 1.409-.255 1.857-.624c.303-.25.57-.538.825-.837l.506-.602q.127-.15.258-.296c.646-.714 1.464-1.469 2.704-1.992m.07 11.35H9.78l-.5 2h6.44z"></svg:path></svg:g>`,
})
export class MingcuteSleighFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteSnapchatFillIcon],svg[mingcute-snapchat-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M12 2a6 6 0 0 0-6 6v1.875L5.1 9.2a1 1 0 1 0-1.2 1.6l1.866 1.4c-.444 1.168-1.527 2.39-3.28 3.443a1.01 1.01 0 0 0-.318 1.412C3.286 18.732 5.06 20 7 20c1.784 0 3.007 2 5 2c2.011 0 3.209-2 5-2c1.94 0 3.714-1.268 4.832-2.945a1.01 1.01 0 0 0-.318-1.412c-1.753-1.053-2.836-2.275-3.28-3.443l1.866-1.4a1 1 0 0 0-1.2-1.6l-.9.675V8a6 6 0 0 0-6-6"></svg:path></svg:g>`,
})
export class MingcuteSnapchatFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteSnowFillIcon],svg[mingcute-snow-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M13 3a1 1 0 1 0-2 0v.962l-.654-.346a1 1 0 1 0-.935 1.768l1.589.84v1.902a4 4 0 0 0-1.854 1.072l-1.648-.952l.067-1.796a1 1 0 0 0-1.999-.074l-.027.739l-.833-.48a1 1 0 1 0-1 1.731l.833.481l-.627.394a1 1 0 0 0 1.064 1.693l1.522-.956l1.647.951a4 4 0 0 0 0 2.142l-1.647.95l-1.522-.955a1 1 0 0 0-1.064 1.693l.627.394l-.833.48a1 1 0 1 0 1 1.733l.832-.481l.028.74a1 1 0 1 0 1.999-.075l-.067-1.796l1.648-.952A4 4 0 0 0 11 15.874v1.902l-1.589.84a1 1 0 0 0 .935 1.768l.654-.346V21a1 1 0 1 0 2 0v-.962l.654.346a1 1 0 0 0 .935-1.768L13 17.776v-1.902a4 4 0 0 0 1.854-1.071l1.648.951l-.067 1.796a1 1 0 1 0 1.999.075l.027-.74l.833.481a1 1 0 1 0 1-1.732l-.832-.48l.626-.394a1 1 0 0 0-1.064-1.694l-1.522.956l-1.647-.95a4 4 0 0 0 0-2.143l1.647-.951l1.522.956a1 1 0 0 0 1.064-1.694l-.627-.393l.833-.481a1 1 0 1 0-1-1.732l-.833.48l-.027-.739a1 1 0 1 0-1.999.075l.067 1.796l-1.648.951A4 4 0 0 0 13 8.126V6.224l1.589-.84a1 1 0 0 0-.935-1.768L13 3.962z"></svg:path></svg:g>`,
})
export class MingcuteSnowFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteSnowflakeFillIcon],svg[mingcute-snowflake-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M13.5 3a1.5 1.5 0 0 0-3 0v2.379l-1.44-1.44a1.5 1.5 0 1 0-2.12 2.122l3.56 3.56v.879h-.879l-3.56-3.56a1.5 1.5 0 1 0-2.122 2.12l1.44 1.44H3a1.5 1.5 0 0 0 0 3h2.379l-1.44 1.44a1.5 1.5 0 0 0 2.122 2.12l3.56-3.56h.879v.879l-3.56 3.56a1.5 1.5 0 0 0 2.12 2.122l1.44-1.44V21a1.5 1.5 0 0 0 3 0v-2.379l1.44 1.44a1.5 1.5 0 0 0 2.12-2.122l-3.56-3.56V13.5h.879l3.56 3.56a1.5 1.5 0 0 0 2.122-2.12l-1.44-1.44H21a1.5 1.5 0 0 0 0-3h-2.379l1.44-1.44a1.5 1.5 0 0 0-2.122-2.12l-3.56 3.56H13.5v-.879l3.56-3.56a1.5 1.5 0 0 0-2.12-2.122L13.5 5.38z"></svg:path></svg:g>`,
})
export class MingcuteSnowflakeFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteSnowmanFillIcon],svg[mingcute-snowman-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M12 2a5 5 0 0 1 4.33 7.5c.427.337.814.722 1.152 1.147l.197.26l1.614-1.614a1 1 0 0 1 1.497 1.32l-.083.094l-2 2l-.07.064a7 7 0 1 1-13.275 0l-.07-.064l-2-2a1 1 0 0 1 1.32-1.497l.095.083l1.614 1.614A7 7 0 0 1 7.669 9.5A5 5 0 0 1 12 2m0 14a1 1 0 1 0 0 2a1 1 0 0 0 0-2m0-3a1 1 0 1 0 0 2a1 1 0 0 0 0-2m-.207-6.207l-.5.5a1 1 0 0 0 1.414 1.414l.5-.5a1 1 0 0 0-1.414-1.414"></svg:path></svg:g>`,
})
export class MingcuteSnowmanFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteSnowstorm2FillIcon],svg[mingcute-snowstorm-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M11.5 2a6.5 6.5 0 0 1 6.086 4.212a6.002 6.002 0 0 1 .733 11.323a3 3 0 0 0 .549-3.035A3 3 0 0 0 15 10.632a3 3 0 0 0-3 .518a3 3 0 0 0-3-.518A3 3 0 0 0 5.132 14.5a3 3 0 0 0-.145 1.594a3 3 0 0 0-.994.562l-.196.183A5 5 0 0 1 5 8.416A6.5 6.5 0 0 1 11.5 2M8.646 12.732l.354.354l.354-.354a1 1 0 0 1 1.414 1.414l-.354.354l.354.354a1 1 0 0 1-1.414 1.414L9 15.914l-.354.354a1 1 0 0 1-1.414-1.415l.354-.353l-.354-.354a1 1 0 1 1 1.414-1.414m6 0l.354.354l.354-.354a1 1 0 0 1 1.414 1.414l-.354.354l.354.354a1 1 0 0 1-1.415 1.414L15 15.914l-.354.354a1 1 0 0 1-1.414-1.415l.354-.353l-.354-.354a1 1 0 0 1 1.414-1.414m-5.878 5.5a1 1 0 0 1 0 1.414L8.414 20l.354.354a1 1 0 0 1-1.414 1.414L7 21.414l-.354.354a1 1 0 0 1-1.414-1.415L5.586 20l-.354-.354a1 1 0 1 1 1.414-1.414l.354.354l.354-.354a1 1 0 0 1 1.414 0m6 1.414a1 1 0 0 0-1.415-1.414l-.353.354l-.354-.354a1 1 0 0 0-1.414 1.414l.354.354l-.354.354a1 1 0 0 0 1.414 1.414l.354-.354l.354.354a1 1 0 0 0 1.414-1.415L14.414 20z"></svg:path></svg:g>`,
})
export class MingcuteSnowstorm2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteSnowstormFillIcon],svg[mingcute-snowstorm-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M19.248 8.53a1.5 1.5 0 0 1 1.172 1.768A4 4 0 0 1 16.5 13.5H3a1.5 1.5 0 0 1 0-3h13.5a1 1 0 0 0 .95-.687l.03-.111a1.5 1.5 0 0 1 1.768-1.172M9 2.5a3.5 3.5 0 1 1 0 7H5a1.5 1.5 0 1 1 0-3h4a.5.5 0 1 0-.249-.934A1.5 1.5 0 1 1 7.25 2.969A3.5 3.5 0 0 1 9 2.5m7.002.5a1 1 0 0 1 1 1v.268l.232-.134a1 1 0 0 1 1 1.732L18.002 6l.232.134a1 1 0 1 1-1 1.732l-.232-.134V8a1 1 0 0 1-2 0v-.268l-.232.134a1 1 0 1 1-1-1.732L14.002 6l-.232-.134a1 1 0 0 1 1-1.732l.232.134V4a1 1 0 0 1 1-1M6 14.5a1.5 1.5 0 0 0 0 3h5.501a1.5 1.5 0 0 0-.001 2.829a3 3 0 1 0 1-5.829zm13-.5a1 1 0 0 1 1 1v.268l.232-.134a1 1 0 1 1 1 1.732L21 17l.232.134a1 1 0 0 1-1 1.732L20 18.732V19a1 1 0 1 1-2 0v-.268l-.232.134a1 1 0 1 1-1-1.732L17 17l-.232-.134a1 1 0 1 1 1-1.732l.232.134V15a1 1 0 0 1 1-1"></svg:path></svg:g>`,
})
export class MingcuteSnowstormFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteSobFillIcon],svg[mingcute-sob-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M12 2c5.523 0 10 4.477 10 10a10 10 0 0 1-5 8.662V13a1 1 0 1 0-2 0v8c0 .182.049.352.133.5c-.985.324-2.039.5-3.133.5a10 10 0 0 1-3.133-.5A1 1 0 0 0 9 21v-8a1 1 0 1 0-2 0v7.662A10 10 0 0 1 2 12C2 6.477 6.477 2 12 2m-2 6H7a1 1 0 0 0-.117 1.993L7 10h3a1 1 0 0 0 .117-1.993zm7 0h-3a1 1 0 1 0 0 2h3a1 1 0 1 0 0-2"></svg:path></svg:g>`,
})
export class MingcuteSobFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteSocialXFillIcon],svg[mingcute-social-x-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M19.753 4.659a1 1 0 0 0-1.506-1.317l-5.11 5.84L8.8 3.4A1 1 0 0 0 8 3H4a1 1 0 0 0-.8 1.6l6.437 8.582l-5.39 6.16a1 1 0 0 0 1.506 1.317l5.11-5.841L15.2 20.6a1 1 0 0 0 .8.4h4a1 1 0 0 0 .8-1.6l-6.437-8.582l5.39-6.16Z"></svg:path></svg:g>`,
})
export class MingcuteSocialXFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteSockFillIcon],svg[mingcute-sock-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M11 2a2 2 0 0 0-2 2h10a2 2 0 0 0-2-2zm8 4H9v2.172a1 1 0 0 1-.293.707l-3.586 3.585a5 5 0 0 0 0 7.071l.343.344a5 5 0 0 0 7.071 0l5-5A5 5 0 0 0 19 11.343z"></svg:path></svg:g>`,
})
export class MingcuteSockFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteSofaFillIcon],svg[mingcute-sofa-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M10 3a5 5 0 0 0-5 5v1.17A3 3 0 0 0 3 12v5a2 2 0 0 0 2 2v1a1 1 0 1 0 2 0v-1h10v1a1 1 0 1 0 2 0v-1a2 2 0 0 0 2-2v-5a3 3 0 0 0-2-2.83V8a5 5 0 0 0-5-5zm7 6.17V8a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3v1.17c1.165.413 2 1.524 2 2.83v1h6v-1c0-1.306.835-2.417 2-2.83"></svg:path></svg:g>`,
})
export class MingcuteSofaFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteSolanaSolFillIcon],svg[mingcute-solana-sol-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M7.293 4.293A1 1 0 0 1 8 4h13a1 1 0 0 1 .707 1.707l-3 3A1 1 0 0 1 18 9H5a1 1 0 0 1-.707-1.707zm-3.175 6.235A1 1 0 0 1 5 10h13a1 1 0 0 1 .832.445l2 3A1 1 0 0 1 20 15H7a1 1 0 0 1-.832-.445l-2-3a1 1 0 0 1-.05-1.027m2.175 5.765A1 1 0 0 1 7 16h13a1 1 0 0 1 .707 1.707l-3 3A1 1 0 0 1 17 21H4a1 1 0 0 1-.707-1.707z"></svg:path></svg:g>`,
})
export class MingcuteSolanaSolFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteSolarPanelFillIcon],svg[mingcute-solar-panel-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M10.105 4h3.79l.5 5h-4.79zm-.7 7h5.19l.5 5H13v2h2a1 1 0 1 1 0 2H9a1 1 0 1 1 0-2h2v-2H8.905zm7.2 0l.5 5h3.285a1.5 1.5 0 0 0 1.471-1.794L21.22 11zm-.7-7l.5 5h4.415l-.679-3.392A2 2 0 0 0 18.181 4zm-7.81 0H5.82a2 2 0 0 0-1.961 1.608L3.18 9h4.415zm-.7 7H2.78l-.641 3.206A1.5 1.5 0 0 0 3.609 16h3.286z"></svg:path></svg:g>`,
})
export class MingcuteSolarPanelFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteSortAscendingFillIcon],svg[mingcute-sort-ascending-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M16.94 3.111a1.5 1.5 0 0 1 2.007-.103l.114.103l2.828 2.829a1.5 1.5 0 0 1-2.007 2.224l-.114-.103l-.268-.268V19a1.5 1.5 0 0 1-2.993.144L16.5 19V7.793l-.268.268a1.5 1.5 0 0 1-2.224-2.008l.103-.113l2.828-2.829ZM13 17.5a1.5 1.5 0 0 1 .144 2.993L13 20.5H4a1.5 1.5 0 0 1-.144-2.993L4 17.5zm0-7a1.5 1.5 0 0 1 0 3H4a1.5 1.5 0 0 1 0-3zm-2-7a1.5 1.5 0 0 1 0 3H4a1.5 1.5 0 1 1 0-3z"></svg:path></svg:g>`,
})
export class MingcuteSortAscendingFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteSortDescendingFillIcon],svg[mingcute-sort-descending-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M18 3.5A1.5 1.5 0 0 1 19.5 5v11.207l.268-.268a1.5 1.5 0 1 1 2.121 2.122l-2.828 2.828a1.5 1.5 0 0 1-2.122 0l-2.828-2.828a1.5 1.5 0 1 1 2.121-2.122l.268.268V5A1.5 1.5 0 0 1 18 3.5m-7 14a1.5 1.5 0 0 1 .144 2.993L11 20.5H4a1.5 1.5 0 0 1-.144-2.993L4 17.5zm2-7a1.5 1.5 0 0 1 .144 2.993L13 13.5H4a1.5 1.5 0 0 1-.144-2.993L4 10.5zm0-7a1.5 1.5 0 0 1 0 3H4a1.5 1.5 0 1 1 0-3z"></svg:path></svg:g>`,
})
export class MingcuteSortDescendingFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteSoundLineFillIcon],svg[mingcute-sound-line-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M9.5 4A1.5 1.5 0 0 1 11 2.5h3a1.5 1.5 0 0 1 0 3h-3A1.5 1.5 0 0 1 9.5 4m0 4A1.5 1.5 0 0 1 11 6.5h3a1.5 1.5 0 0 1 0 3h-3A1.5 1.5 0 0 1 9.5 8m7 0A1.5 1.5 0 0 1 18 6.5h3a1.5 1.5 0 0 1 0 3h-3A1.5 1.5 0 0 1 16.5 8m-14 4A1.5 1.5 0 0 1 4 10.5h3a1.5 1.5 0 0 1 0 3H4A1.5 1.5 0 0 1 2.5 12m7 0a1.5 1.5 0 0 1 1.5-1.5h3a1.5 1.5 0 0 1 0 3h-3A1.5 1.5 0 0 1 9.5 12m7 0a1.5 1.5 0 0 1 1.5-1.5h3a1.5 1.5 0 0 1 0 3h-3a1.5 1.5 0 0 1-1.5-1.5m-14 4A1.5 1.5 0 0 1 4 14.5h3a1.5 1.5 0 0 1 0 3H4A1.5 1.5 0 0 1 2.5 16m7 0a1.5 1.5 0 0 1 1.5-1.5h3a1.5 1.5 0 0 1 0 3h-3A1.5 1.5 0 0 1 9.5 16m7 0a1.5 1.5 0 0 1 1.5-1.5h3a1.5 1.5 0 0 1 0 3h-3a1.5 1.5 0 0 1-1.5-1.5m-14 4A1.5 1.5 0 0 1 4 18.5h3a1.5 1.5 0 0 1 0 3H4A1.5 1.5 0 0 1 2.5 20m7 0a1.5 1.5 0 0 1 1.5-1.5h3a1.5 1.5 0 0 1 0 3h-3A1.5 1.5 0 0 1 9.5 20m7 0a1.5 1.5 0 0 1 1.5-1.5h3a1.5 1.5 0 0 1 0 3h-3a1.5 1.5 0 0 1-1.5-1.5"></svg:path></svg:g>`,
})
export class MingcuteSoundLineFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteSoupPot2FillIcon],svg[mingcute-soup-pot-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M10 3a1 1 0 0 0 0 2h1v1h-1a6 6 0 0 0-.713.055c-.415.053-.99.158-1.65.366A9.5 9.5 0 0 0 4.506 8.1a2 2 0 0 0-.093-.1l-.707-.707a1 1 0 0 0-1.414 1.414L3 9.414V16a5 5 0 0 0 5 5h8a5 5 0 0 0 5-5V9.414l.707-.707a1 1 0 0 0-1.414-1.414L19.586 8a2 2 0 0 0-.092.099a9.5 9.5 0 0 0-3.13-1.678a9.5 9.5 0 0 0-1.651-.366A8 8 0 0 0 14 6h-1V5h1a1 1 0 1 0 0-2z"></svg:path></svg:g>`,
})
export class MingcuteSoupPot2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteSoupPotFillIcon],svg[mingcute-soup-pot-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M19.447 4.106a1 1 0 0 1 .494 1.234l-.047.108L17.618 10h1.425a2 2 0 0 1 .43-.877L19.586 9l.707-.707a1 1 0 0 1 1.497 1.32l-.083.094l-.707.708V17a4 4 0 0 1-3.8 3.996L17 21H7a4 4 0 0 1-3.995-3.8L3 17v-6.585l-.707-.708a1 1 0 0 1 1.32-1.497l.094.083l.707.707a2 2 0 0 1 .502.841l.04.16h10.426l2.724-5.448a1 1 0 0 1 1.341-.447M17.118 11h-2.236l-1 2H9a1 1 0 0 0-.993.884L8 14v.5a3.5 3.5 0 0 0 6.844 1.037l.026-.044zm-4.203 4a1.5 1.5 0 0 1-2.776.132L10.085 15zM9.555 2.168a1 1 0 0 1 .277 1.387l-.215.323a.725.725 0 0 0 .09.915a2.725 2.725 0 0 1 .34 3.439l-.215.323a1 1 0 0 1-1.664-1.11l.215-.323a.725.725 0 0 0-.09-.915a2.725 2.725 0 0 1-.34-3.438l.215-.324a1 1 0 0 1 1.387-.277m4 0a1 1 0 0 1 .277 1.387l-.216.323a.725.725 0 0 0 .091.915a2.725 2.725 0 0 1 .34 3.439l-.215.323a1 1 0 0 1-1.664-1.11l.216-.323a.725.725 0 0 0-.091-.915a2.725 2.725 0 0 1-.34-3.438l.215-.324a1 1 0 0 1 1.387-.277"></svg:path></svg:g>`,
})
export class MingcuteSoupPotFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteSpaceFillIcon],svg[mingcute-space-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M3 8.5A1.5 1.5 0 0 1 4.5 10v2.5h15V10a1.5 1.5 0 0 1 3 0v3a2.5 2.5 0 0 1-2.5 2.5H4A2.5 2.5 0 0 1 1.5 13v-3A1.5 1.5 0 0 1 3 8.5"></svg:path></svg:g>`,
})
export class MingcuteSpaceFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteSpacingHorizontalFillIcon],svg[mingcute-spacing-horizontal-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M6 2.5A2.5 2.5 0 0 1 8.5 5v14A2.5 2.5 0 0 1 6 21.5H4a1.5 1.5 0 0 1 0-3h1.5v-13H4a1.5 1.5 0 1 1 0-3zm14 0a1.5 1.5 0 0 1 .144 2.993L20 5.5h-1.5v13H20a1.5 1.5 0 0 1 .144 2.993L20 21.5h-2a2.5 2.5 0 0 1-2.495-2.336L15.5 19V5a2.5 2.5 0 0 1 2.336-2.495L18 2.5zm-8 4a1.5 1.5 0 0 1 1.493 1.356L13.5 8v8a1.5 1.5 0 0 1-2.993.144L10.5 16V8A1.5 1.5 0 0 1 12 6.5"></svg:path></svg:g>`,
})
export class MingcuteSpacingHorizontalFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteSpacingVerticalFillIcon],svg[mingcute-spacing-vertical-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M20 2.5A1.5 1.5 0 0 1 21.5 4v2A2.5 2.5 0 0 1 19 8.5H5A2.5 2.5 0 0 1 2.5 6V4a1.5 1.5 0 1 1 3 0v1.5h13V4A1.5 1.5 0 0 1 20 2.5m0 19a1.5 1.5 0 0 0 1.5-1.5v-2a2.5 2.5 0 0 0-2.5-2.5H5A2.5 2.5 0 0 0 2.5 18v2a1.5 1.5 0 0 0 3 0v-1.5h13V20a1.5 1.5 0 0 0 1.5 1.5m-4-8a1.5 1.5 0 0 0 0-3H8a1.5 1.5 0 0 0 0 3z"></svg:path></svg:g>`,
})
export class MingcuteSpacingVerticalFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteSpadeFillIcon],svg[mingcute-spade-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M9.836 18.89c-1.39.3-2.795-.025-3.954-.786c-1.738-1.141-2.936-3.253-2.88-5.701C3.076 9.17 5.62 6.343 9.89 3.86c.397-.231.669-.41.891-.557c.372-.246.754-.498 1.219-.498c.464 0 .847.252 1.219.498c.222.146.494.326.891.557c4.27 2.481 6.814 5.31 6.888 8.542c.056 2.448-1.142 4.56-2.88 5.7c-1.16.762-2.563 1.086-3.954.786c.206.619.437 1.17.694 1.596A1 1 0 0 1 14 22h-4a1 1 0 0 1-.857-1.515c.256-.427.487-.977.693-1.596Z"></svg:path></svg:g>`,
})
export class MingcuteSpadeFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteSparkles2FillIcon],svg[mingcute-sparkles-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M14 6.24c.335 0 .588.141.777.342c.305.324.434.801.624 1.196a11.7 11.7 0 0 0 4.429 4.91l.434.257c.393.239.735.518.736 1.053c.001.732-.636.986-1.17 1.313a11.7 11.7 0 0 0-4.429 4.91c-.19.396-.32.873-.624 1.197c-.188.201-.442.342-.777.342s-.589-.141-.777-.342c-.176-.187-.292-.422-.395-.662l-.15-.36a4 4 0 0 0-.079-.174a11.7 11.7 0 0 0-4.429-4.91l-.321-.191c-.433-.26-.85-.556-.849-1.123c.002-.73.637-.982 1.17-1.309a11.7 11.7 0 0 0 4.429-4.91c.19-.396.32-.873.624-1.197c.188-.2.442-.342.777-.342m-7.253-.415c.149.183.238.39.34.601c.274.57.688 1.06 1.201 1.422l.198.13c.856.525.888 1.41.12 1.964l-.12.08a3.7 3.7 0 0 0-1.4 1.552l-.114.242c-.097.2-.21.391-.406.518c-.315.202-.817.202-1.132 0c-.265-.17-.39-.488-.52-.76a3.7 3.7 0 0 0-1.4-1.552c-.178-.11-.348-.213-.495-.367a1.08 1.08 0 0 1 .001-1.312c.15-.156.31-.252.495-.365a3.7 3.7 0 0 0 1.399-1.552c.104-.216.187-.414.34-.6a1.07 1.07 0 0 1 1.493 0ZM10 2a1 1 0 0 1 1 1a1 1 0 1 1 0 2a1 1 0 1 1-2 0a1 1 0 1 1 0-2a1 1 0 0 1 1-1"></svg:path></svg:g>`,
})
export class MingcuteSparkles2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteSparkles3FillIcon],svg[mingcute-sparkles-3-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M12 19.5a1 1 0 0 1 1 1v.5a1 1 0 1 1-2 0v-.5a1 1 0 0 1 1-1m5.657-3.257l2.121 2.121a1 1 0 0 1-1.414 1.415l-2.121-2.122a1 1 0 1 1 1.414-1.414m-9.9 0a1 1 0 0 1 0 1.414l-2.12 2.12a1 1 0 0 1-1.415-1.413l2.121-2.122a1 1 0 0 1 1.414 0M12.004 5.47a1 1 0 0 1 .944.67a8.03 8.03 0 0 0 4.92 4.92a1 1 0 0 1 0 1.888a8.03 8.03 0 0 0-4.92 4.92a1 1 0 0 1-1.888 0a8.03 8.03 0 0 0-4.92-4.92a1 1 0 0 1 0-1.888a8.02 8.02 0 0 0 4.92-4.92a1 1 0 0 1 .944-.67M21 11a1 1 0 1 1 0 2h-.5a1 1 0 1 1 0-2zM3.5 11a1 1 0 1 1 0 2H3a1 1 0 1 1 0-2zm16.278-6.778a1 1 0 0 1 .084 1.32l-.084.094l-2.12 2.121a1 1 0 0 1-1.498-1.32l.083-.094l2.121-2.121a1 1 0 0 1 1.414 0M5.542 4.138l.094.084l2.121 2.12a1 1 0 0 1-1.32 1.498l-.094-.083l-2.121-2.121A1 1 0 0 1 5.44 4.069zM12 2a1 1 0 0 1 .993.883L13 3v.5a1 1 0 0 1-1.993.117L11 3.5V3a1 1 0 0 1 1-1"></svg:path></svg:g>`,
})
export class MingcuteSparkles3FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteSparklesFillIcon],svg[mingcute-sparkles-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="m6.173 13.004l.17.371a8.7 8.7 0 0 0 3.3 3.638l.265.155a.181.181 0 0 1 0 .316a8.7 8.7 0 0 0-3.565 3.793l-.17.372a.19.19 0 0 1-.346 0l-.17-.372a8.7 8.7 0 0 0-3.565-3.793a.181.181 0 0 1 0-.316l.265-.155a8.7 8.7 0 0 0 3.3-3.638l.17-.371a.19.19 0 0 1 .346 0M15.078 2.73a15.2 15.2 0 0 0 6.536 7.288a.317.317 0 0 1 0 .553a15.2 15.2 0 0 0-6.536 7.289a.331.331 0 0 1-.605 0a15.2 15.2 0 0 0-6.536-7.289a.317.317 0 0 1 0-.553a15.2 15.2 0 0 0 6.536-7.288a.331.331 0 0 1 .605 0"></svg:path></svg:g>`,
})
export class MingcuteSparklesFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteSpatulaFillIcon],svg[mingcute-spatula-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M20.778 3.222a2.5 2.5 0 0 1 0 3.536l-2.121 2.12a2.5 2.5 0 0 1-2.681.56l-1.69 1.69l.556.832a5 5 0 0 1-.625 6.308l-3.338 3.339a2 2 0 0 1-2.829 0L2.393 15.95a2 2 0 0 1 0-2.829l3.339-3.338a5 5 0 0 1 6.309-.624l.832.554l1.688-1.688a2.5 2.5 0 0 1 .56-2.682l2.122-2.121a2.5 2.5 0 0 1 3.535 0m-8.839 10.96a1 1 0 0 0-1.32-.083l-.094.083l-2.121 2.121a1 1 0 0 0 1.32 1.498l.094-.083l2.121-2.122a1 1 0 0 0 0-1.414m-2.121-2.121a1 1 0 0 0-1.32-.083l-.094.083l-2.121 2.121l-.084.094a1 1 0 0 0 1.404 1.403l.094-.083l2.121-2.121l.083-.094a1 1 0 0 0-.083-1.32"></svg:path></svg:g>`,
})
export class MingcuteSpatulaFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteSpeakerFillIcon],svg[mingcute-speaker-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M17 2a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3zm-5 9a4 4 0 1 0 0 8a4 4 0 0 0 0-8m0 2a2 2 0 1 1 0 4a2 2 0 0 1 0-4m0-8a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3"></svg:path></svg:g>`,
})
export class MingcuteSpeakerFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteSpeechFillIcon],svg[mingcute-speech-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M12 9c1.753 0 3.341.62 4.548 1.499c.507.369.965.798 1.345 1.265l.183.236H5.924a7 7 0 0 1 1.528-1.501C8.659 9.62 10.247 9 12 9m0-6a3 3 0 1 1 0 6a3 3 0 0 1 0-6M3 13a1 1 0 0 0-.894 1.447l3 6A1 1 0 0 0 6 21h12a1 1 0 0 0 .894-.553l3-6A1 1 0 0 0 21 13z"></svg:path></svg:g>`,
})
export class MingcuteSpeechFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteSpoonFillIcon],svg[mingcute-spoon-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M12.03 13.739L4.422 7.705a2.337 2.337 0 1 1 3.283-3.283l6.034 7.608c1.307-.571 3.3-.648 4.979 1.03c1.015 1.016 1.647 2.258 1.863 3.44c.21 1.15.049 2.426-.803 3.278c-.851.852-2.128 1.013-3.277.803c-1.182-.216-2.425-.848-3.44-1.864c-1.68-1.679-1.602-3.671-1.031-4.978"></svg:path></svg:g>`,
})
export class MingcuteSpoonFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteSpotifyFillIcon],svg[mingcute-spotify-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10S17.523 2 12 2m-4.731 8.44c3.24-.904 6.505-.449 9.334.774a1 1 0 0 0 .793-1.836c-3.17-1.37-6.906-1.913-10.665-.864a1 1 0 0 0 .538 1.926m.476 2.866c2.788-.777 5.996-.291 7.78.804a1 1 0 1 0 1.046-1.705c-2.312-1.42-6.104-1.934-9.363-1.025a1 1 0 0 0 .537 1.926m.431 2.754c1.13-.26 2.387-.263 3.492-.091c1.14.176 1.962.514 2.318.806a1 1 0 0 0 1.266-1.55c-.763-.623-2-1.035-3.277-1.233c-1.312-.203-2.829-.207-4.247.12a1 1 0 1 0 .448 1.948"></svg:path></svg:g>`,
})
export class MingcuteSpotifyFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteSquareArrowDownFillIcon],svg[mingcute-square-arrow-down-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="M24 0v24H0V0zM12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M6 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3zm3.879 7.293L12 12.414l2.121-2.121a1 1 0 0 1 1.415 1.414l-2.829 2.829a1 1 0 0 1-1.414 0l-2.829-2.829a1 1 0 1 1 1.415-1.414"></svg:path></svg:g>`,
})
export class MingcuteSquareArrowDownFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteSquareArrowLeftFillIcon],svg[mingcute-square-arrow-left-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="M24 0v24H0V0zM12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M6 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3zm7.707 6.879L11.586 12l2.121 2.121a1 1 0 0 1-1.414 1.415l-2.829-2.829a1 1 0 0 1 0-1.414l2.829-2.829a1 1 0 1 1 1.414 1.415"></svg:path></svg:g>`,
})
export class MingcuteSquareArrowLeftFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteSquareArrowRightFillIcon],svg[mingcute-square-arrow-right-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="M24 0v24H0V0zM12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M6 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3zm4.293 11.121L12.414 12l-2.121-2.121a1 1 0 1 1 1.414-1.415l2.829 2.829a1 1 0 0 1 0 1.414l-2.829 2.829a1 1 0 1 1-1.414-1.415"></svg:path></svg:g>`,
})
export class MingcuteSquareArrowRightFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteSquareArrowUpFillIcon],svg[mingcute-square-arrow-up-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="M24 0v24H0V0zM12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M6 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3zm8.121 10.707L12 11.586l-2.121 2.121a1 1 0 0 1-1.415-1.414l2.829-2.828a1 1 0 0 1 1.414 0l2.829 2.828a1 1 0 1 1-1.415 1.414"></svg:path></svg:g>`,
})
export class MingcuteSquareArrowUpFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteSquareFillIcon],svg[mingcute-square-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></svg:path></svg:g>`,
})
export class MingcuteSquareFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteStar2FillIcon],svg[mingcute-star-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M12.633 2.108c.79-.06 1.45.389 1.783.99l1.22 2.21c1.742-.112 3.082.532 4.048 1.398c1.059.95 1.652 2.144 1.93 2.824c.3.733.078 1.5-.39 2.002l-1.726 1.844c.646 1.622.447 3.095-.078 4.282c-.576 1.3-1.529 2.233-2.09 2.708c-.604.512-1.402.538-2.024.247l-2.287-1.071c-1.343 1.115-2.806 1.381-4.096 1.248c-1.415-.145-2.597-.763-3.222-1.15c-.674-.417-.945-1.168-.86-1.849l.312-2.506c-1.476-.933-2.181-2.242-2.454-3.51c-.298-1.39-.076-2.705.099-3.42c.188-.769.818-1.26 1.492-1.389l2.48-.478c.431-1.691 1.458-2.767 2.58-3.417c1.23-.714 2.55-.909 3.283-.963"></svg:path></svg:g>`,
})
export class MingcuteStar2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteStarFillIcon],svg[mingcute-star-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M10.92 2.868a1.25 1.25 0 0 1 2.16 0l2.795 4.798l5.428 1.176a1.25 1.25 0 0 1 .667 2.054l-3.7 4.141l.56 5.525a1.25 1.25 0 0 1-1.748 1.27L12 19.592l-5.082 2.24a1.25 1.25 0 0 1-1.748-1.27l.56-5.525l-3.7-4.14a1.25 1.25 0 0 1 .667-2.055l5.428-1.176z"></svg:path></svg:g>`,
})
export class MingcuteStarFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteStarHalfFillIcon],svg[mingcute-star-half-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M13.08 2.868a1.25 1.25 0 0 0-2.16 0L8.126 7.665L2.697 8.842a1.25 1.25 0 0 0-.667 2.054l3.7 4.141l-.56 5.525a1.25 1.25 0 0 0 1.748 1.27L12 19.592l5.082 2.24a1.25 1.25 0 0 0 1.748-1.27l-.56-5.525l3.7-4.14a1.25 1.25 0 0 0-.667-2.055l-5.428-1.176zM12 17.523c.172 0 .344.035.504.106l4.206 1.854l-.463-4.573a1.25 1.25 0 0 1 .312-.959l3.062-3.427l-4.492-.973a1.25 1.25 0 0 1-.816-.592L12 4.987z"></svg:path></svg:g>`,
})
export class MingcuteStarHalfFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteStarTopperFillIcon],svg[mingcute-star-topper-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M12.864 1.497a1 1 0 0 0-1.728 0L9.095 5l-3.965.86a1 1 0 0 0-.534 1.643l2.702 3.024l-.408 4.035a1 1 0 0 0 1.398 1.016l1.042-.459l-1.305 5.656A1 1 0 0 0 9 22h6a1 1 0 0 0 .974-1.225L14.67 15.12l1.042.46a1 1 0 0 0 1.398-1.017l-.408-4.035l2.702-3.024a1 1 0 0 0-.534-1.643L14.905 5zm-1.248 12.615l.384-.17l.384.17L13.743 20h-3.486z"></svg:path></svg:g>`,
})
export class MingcuteStarTopperFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteStatueOfLibertyFillIcon],svg[mingcute-statue-of-liberty-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M9 2.5a1 1 0 0 1-2 0c0-.552.844-2 1-2s1 1.448 1 2m4 2q0 .026-.003.052c.277.059.53.166.757.31a.5.5 0 0 1 .063-.183c.138-.24 1.082-1.108 1.183-1.049s-.179 1.31-.317 1.549a.5.5 0 0 1-.319.237a2.97 2.97 0 0 1 .418 2.961a1 1 0 0 1-.408.478l.018.004A2 2 0 0 1 16 10.819v1.767l.293-.293a1 1 0 0 1 1.414 1.414L16 15.414V18a1 1 0 0 1 1 1v2a1 1 0 1 1 0 2H8a1 1 0 1 1 0-2v-2a1 1 0 0 1 1-1v-3.586l-1.707-1.707A1 1 0 0 1 7 12V5.866A1 1 0 0 1 7.5 4h1a1 1 0 0 1 .867 1.498l.664 1.328a2.96 2.96 0 0 1 .605-1.41a.5.5 0 0 1-.319-.237c-.138-.24-.419-1.49-.317-1.549s1.045.81 1.183 1.049a.5.5 0 0 1 .063.184c.226-.145.48-.252.757-.311L12 4.5c0-.276.383-1.5.5-1.5s.5 1.224.5 1.5"></svg:path></svg:g>`,
})
export class MingcuteStatueOfLibertyFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteSteeringWheelFillIcon],svg[mingcute-steering-wheel-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2M4.205 13.81a8.01 8.01 0 0 0 6.254 6.042c-.193-2.625-1.056-4.2-2.146-5.071c-1.044-.835-2.46-1.158-4.108-.972Zm11.482.97c-1.09.873-1.953 2.447-2.146 5.072a8.01 8.01 0 0 0 6.254-6.043c-1.648-.186-3.064.137-4.108.972ZM12 4a8 8 0 0 0-7.862 6.513l-.043.248l2.21-.442c.582-.116 1.135-.423 1.753-.84l.477-.332C9.332 8.581 10.513 8 12 8c1.388 0 2.509.506 3.3 1.034l.642.445c.54.365 1.032.645 1.536.788l.217.052l2.21.442A8 8 0 0 0 12 4"></svg:path></svg:g>`,
})
export class MingcuteSteeringWheelFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteStethoscopeFillIcon],svg[mingcute-stethoscope-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M8 4a1 1 0 0 0-2 0a3 3 0 0 0-3 3v2a6 6 0 0 0 5 5.917V15a6 6 0 0 0 12 0v-1.17a3.001 3.001 0 1 0-2 0V15a4 4 0 0 1-8 0v-.083A6 6 0 0 0 15 9V7a3 3 0 0 0-3-3a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0a1 1 0 0 1 1 1v2a4 4 0 0 1-8 0V7a1 1 0 0 1 1-1a1 1 0 0 0 2 0z"></svg:path></svg:g>`,
})
export class MingcuteStethoscopeFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteStickerFillIcon],svg[mingcute-sticker-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M18 3a3 3 0 0 1 2.995 2.824L21 6v6h-6a3 3 0 0 0-2.995 2.824L12 15v6H6a3 3 0 0 1-2.995-2.824L3 18V6a3 3 0 0 1 2.824-2.995L6 3zm2.883 11a3 3 0 0 1-.613 1.132l-.149.16l-4.828 4.83a3 3 0 0 1-1.088.694l-.205.067V15a1 1 0 0 1 .883-.993L15 14z"></svg:path></svg:g>`,
})
export class MingcuteStickerFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteStockFillIcon],svg[mingcute-stock-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M8 2a1 1 0 0 1 1 1v2a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3v4a1 1 0 1 1-2 0v-4a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3V3a1 1 0 0 1 1-1m9 0a1 1 0 0 1 .993.883L18 3v4a3 3 0 0 1 2.995 2.824L21 10v6a3 3 0 0 1-2.824 2.995L18 19v2a1 1 0 0 1-1.993.117L16 21v-2a3 3 0 0 1-2.995-2.824L13 16v-6a3 3 0 0 1 2.824-2.995L16 7V3a1 1 0 0 1 1-1"></svg:path></svg:g>`,
})
export class MingcuteStockFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteStopCircleFillIcon],svg[mingcute-stop-circle-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2m2 6h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2"></svg:path></svg:g>`,
})
export class MingcuteStopCircleFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteStopFillIcon],svg[mingcute-stop-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z"></svg:path></svg:g>`,
})
export class MingcuteStopFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteStopwatchFillIcon],svg[mingcute-stopwatch-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M12 2c.937 0 1.85.108 2.726.311a1 1 0 1 1-.452 1.948a10 10 0 0 0-1.499-.23l-.42-.023l.34.02a8.95 8.95 0 0 1 4.074 1.34l.273.178l.606-.606a1 1 0 0 1 1.498 1.32l-.083.094l-.495.495a9 9 0 1 1-7.097-2.831l.199-.01l-.06.001q-.776.031-1.516.174l-.368.078a1 1 0 0 1-.452-1.948C10.15 2.108 11.064 2 12 2m0 6a1 1 0 0 0-1 1v4a1 1 0 1 0 2 0V9a1 1 0 0 0-1-1"></svg:path></svg:g>`,
})
export class MingcuteStopwatchFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteStorageFillIcon],svg[mingcute-storage-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M5 4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 9a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2zm1 4a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1M7 7a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2z"></svg:path></svg:g>`,
})
export class MingcuteStorageFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteStore2FillIcon],svg[mingcute-store-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M18 2a3 3 0 0 1 3 3v13a3 3 0 0 1-3 3h-3v-6a3 3 0 0 0-3-3h-1a3 3 0 0 0-3 3v6H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3zm-6 12a1 1 0 0 1 .993.883L13 15v6h-3v-6a1 1 0 0 1 .883-.993L11 14zm6-10H5a1 1 0 0 0-.993.883L4 5v1a2 2 0 0 0 3.94.49l.032-.155a1 1 0 0 1 .898-.831L9 5.5a1 1 0 0 1 .993.883L10 6.5a1.5 1.5 0 0 0 2.993.144L13 6.5a1 1 0 0 1 .883-.993l.135-.007a1 1 0 0 1 .984.723l.026.112a2 2 0 0 0 3.967-.186L19 6V5a1 1 0 0 0-.883-.993z"></svg:path></svg:g>`,
})
export class MingcuteStore2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteStoreFillIcon],svg[mingcute-store-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M17.5 3a2 2 0 0 1 1.6.8l2.688 3.584a1 1 0 0 1 .204.616H22v1a4 4 0 0 1-1 2.646V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7.354A4 4 0 0 1 2 9V8h.008a1 1 0 0 1 .204-.616L4.9 3.8A2 2 0 0 1 6.5 3zM20 9h-4a2 2 0 0 0 3.995.15zm-6 0h-4a2 2 0 0 0 3.995.15zM8 9H4a2 2 0 0 0 3.995.15z"></svg:path></svg:g>`,
})
export class MingcuteStoreFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteStrikethroughFillIcon],svg[mingcute-strikethrough-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M19 11.5a1.5 1.5 0 0 1 .144 2.993L19 14.5h-1.272q.086.198.155.405c1.06 3.18-1.238 6.461-4.55 6.591l-.203.004h-1.702a6.24 6.24 0 0 1-5.462-3.224l-.117-.224l-.178-.355a1.5 1.5 0 0 1-.157-.902a1.499 1.499 0 0 1 2.725-.64l.062.098l.231.458a3.24 3.24 0 0 0 2.692 1.783l.204.006h1.701a2.01 2.01 0 0 0 1.054-3.723l-.154-.086l-.383-.191H5a1.5 1.5 0 0 1-.144-2.993L5 11.5zm-6.428-9a6.24 6.24 0 0 1 5.462 3.224l.117.224l.176.352a1.501 1.501 0 0 1-2.582 1.522l-.053-.087l-.224-.446a3.24 3.24 0 0 0-2.692-1.783l-.204-.006h-1.701a2.01 2.01 0 0 0-1.054 3.723l.154.086l1.383.691H6.522a5 5 0 0 1-.405-.905c-1.06-3.18 1.238-6.461 4.55-6.591l.204-.004z"></svg:path></svg:g>`,
})
export class MingcuteStrikethroughFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteStripeFillIcon],svg[mingcute-stripe-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M10.729 8.36c0-.771.63-1.068 1.675-1.068c1.112 0 2.442.251 3.666.712c.567.214 1.222-.182 1.222-.789V4.588a.95.95 0 0 0-.636-.912C15.236 3.195 13.828 3 12.404 3C8.403 3 5.742 5.097 5.742 8.598c0 5.46 7.49 4.589 7.49 6.943c0 .91-.788 1.206-1.892 1.206c-1.255 0-2.777-.396-4.165-.99c-.56-.24-1.216.152-1.216.76v2.698c0 .4.236.763.61.904c1.632.615 3.263.881 4.77.881c4.1 0 6.919-2.037 6.919-5.578c-.02-5.895-7.53-4.846-7.53-7.062Z"></svg:path></svg:g>`,
})
export class MingcuteStripeFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteSubtitleFillIcon],svg[mingcute-subtitle-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M20 4a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zM8.5 8a3 3 0 0 0-2.995 2.824L5.5 11v2a3 3 0 0 0 5.906.75a1 1 0 0 0-1.902-.61l-.035.111a1 1 0 0 1-1.962-.134L7.5 13v-2a1 1 0 0 1 1.935-.356l.034.105a1 1 0 1 0 1.937-.498A3 3 0 0 0 8.5 8.001m7 0a3 3 0 0 0-3 3v2a3 3 0 0 0 5.906.75a1 1 0 0 0-1.902-.61l-.035.111a1 1 0 0 1-1.969-.25v-2a1 1 0 0 1 1.935-.357l.034.105a1 1 0 0 0 1.937-.498a3 3 0 0 0-2.906-2.25"></svg:path></svg:g>`,
})
export class MingcuteSubtitleFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteSubtractFillIcon],svg[mingcute-subtract-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M5 3a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h3v3a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-9a2 2 0 0 0-2-2h-3V5a2 2 0 0 0-2-2zm0 2h9v9H5z"></svg:path></svg:g>`,
})
export class MingcuteSubtractFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteSugarCoatedHawsFillIcon],svg[mingcute-sugar-coated-haws-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M6.61 11.026a4 4 0 1 1 4.416-4.416c.873.096 1.72.479 2.388 1.148a4 4 0 0 1 1.148 2.387a4.002 4.002 0 0 1 3.006 6.008l2.21 2.211a1 1 0 1 1-1.414 1.414l-2.21-2.21a4.002 4.002 0 0 1-6.008-3.006a4 4 0 0 1-2.388-1.148a4 4 0 0 1-1.148-2.388"></svg:path></svg:g>`,
})
export class MingcuteSugarCoatedHawsFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteSuitcase2FillIcon],svg[mingcute-suitcase-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M10 4a3 3 0 0 0-3 3H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3a3 3 0 0 0-3-3zm0 2a1 1 0 0 0-1 1h6a1 1 0 0 0-1-1zm-6 7a1 1 0 1 0 0 2h16a1 1 0 1 0 0-2z"></svg:path></svg:g>`,
})
export class MingcuteSuitcase2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteSuitcaseFillIcon],svg[mingcute-suitcase-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M14 4a3 3 0 0 1 3 3h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h3a3 3 0 0 1 3-3zM8 8a1 1 0 0 0-.993.883L7 9v10a1 1 0 0 0 1.993.117L9 19V9a1 1 0 0 0-1-1m8 0a1 1 0 0 0-1 1v10a1 1 0 1 0 2 0V9a1 1 0 0 0-1-1m-2-2h-4a1 1 0 0 0-.993.883L9 7h6a1 1 0 0 0-.883-.993z"></svg:path></svg:g>`,
})
export class MingcuteSuitcaseFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteSun2FillIcon],svg[mingcute-sun-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M7.05 11a3.5 3.5 0 0 0 2.257 5.995L9.5 17h9.985a9 9 0 0 1-16.46-5.67l.03-.33zm4.45-3a2.5 2.5 0 0 1 .164 4.995L11.5 13h-2a.5.5 0 0 0-.09.992L9.5 14H21a1 1 0 0 1 .117 1.993L21 16H9.5a2.5 2.5 0 0 1-.164-4.995L9.5 11h2a.5.5 0 0 0 .09-.992L11.5 10H3a1 1 0 0 1-.117-1.993L3 8zm.5-5a9 9 0 0 1 8.945 10H13.95a3.5 3.5 0 0 0-2.45-6H4.516A8.99 8.99 0 0 1 12 3"></svg:path></svg:g>`,
})
export class MingcuteSun2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteSunCloudyFillIcon],svg[mingcute-sun-cloudy-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M11 6a6 6 0 0 1 5.703 4.132a5.502 5.502 0 0 1-.982 10.864L15.5 21h-9a4.5 4.5 0 0 1-1.495-8.746A6 6 0 0 1 11 6m5-3a6 6 0 0 1 5.09 9.18a6.52 6.52 0 0 0-3.63-2.88a7 7 0 0 0-5.949-4.282A6 6 0 0 1 16.002 3Z"></svg:path></svg:g>`,
})
export class MingcuteSunCloudyFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteSunFillIcon],svg[mingcute-sun-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M12 19a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1m6.364-2.05l.707.707a1 1 0 0 1-1.414 1.414l-.707-.707a1 1 0 0 1 1.414-1.414m-12.728 0a1 1 0 0 1 1.497 1.32l-.083.094l-.707.707a1 1 0 0 1-1.497-1.32l.083-.094zM12 6a6 6 0 1 1 0 12a6 6 0 0 1 0-12m-8 5a1 1 0 0 1 .117 1.993L4 13H3a1 1 0 0 1-.117-1.993L3 11zm17 0a1 1 0 1 1 0 2h-1a1 1 0 1 1 0-2zM4.929 4.929a1 1 0 0 1 1.32-.083l.094.083l.707.707a1 1 0 0 1-1.32 1.497l-.094-.083l-.707-.707a1 1 0 0 1 0-1.414m14.142 0a1 1 0 0 1 0 1.414l-.707.707a1 1 0 1 1-1.414-1.414l.707-.707a1 1 0 0 1 1.414 0M12 2a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1"></svg:path></svg:g>`,
})
export class MingcuteSunFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteSunFogFillIcon],svg[mingcute-sun-fog-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M12 6a6 6 0 0 1 5.88 7.2a1 1 0 0 1-.98.8H7.1a1 1 0 0 1-.98-.8A6 6 0 0 1 12 6m9 5a1 1 0 1 1 0 2h-1a1 1 0 1 1 0-2zM4 11a1 1 0 1 1 0 2H3a1 1 0 1 1 0-2zm15.071-6.07a1 1 0 0 1 0 1.414l-.707.707a1 1 0 1 1-1.414-1.414l.707-.707a1 1 0 0 1 1.414 0m-12.728 0l.707.707A1 1 0 0 1 5.636 7.05l-.707-.707A1 1 0 1 1 6.343 4.93M12 2a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1M4 15a1 1 0 1 0 0 2h16a1 1 0 1 0 0-2zm3 4a1 1 0 1 0 0 2h10a1 1 0 1 0 0-2z"></svg:path></svg:g>`,
})
export class MingcuteSunFogFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteSunflowerFillIcon],svg[mingcute-sunflower-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M9.109 5.02a4.13 4.13 0 0 0-2.314-.618c-.586.014-1.416.101-1.866.527c-.426.45-.513 1.28-.528 1.866a4.13 4.13 0 0 0 .62 2.314c-.928.214-1.61.71-2.074 1.198c-.404.425-.93 1.073-.947 1.693c.017.62.543 1.268.947 1.693A4.13 4.13 0 0 0 5.02 14.89a4.13 4.13 0 0 0-.618 2.314c.015.587.1 1.416.527 1.866c.45.426 1.28.512 1.866.527a4.13 4.13 0 0 0 2.314-.618c.214.927.71 1.61 1.198 2.073c.425.404 1.074.93 1.693.947c.62-.017 1.268-.543 1.693-.947a4.13 4.13 0 0 0 1.198-2.073a4.14 4.14 0 0 0 2.314.619c.586-.015 1.416-.102 1.866-.528c.426-.45.512-1.28.527-1.866a4.13 4.13 0 0 0-.618-2.314a4.13 4.13 0 0 0 2.073-1.198c.404-.425.93-1.073.947-1.693c-.017-.62-.543-1.268-.947-1.693A4.13 4.13 0 0 0 18.98 9.11a4.14 4.14 0 0 0 .619-2.314c-.015-.586-.102-1.416-.528-1.866c-.45-.426-1.28-.513-1.866-.528a4.13 4.13 0 0 0-2.314.62a4.13 4.13 0 0 0-1.198-2.074C13.268 2.543 12.62 2.017 12 2c-.62.017-1.267.543-1.693.947A4.13 4.13 0 0 0 9.11 5.02M12 14a2 2 0 1 0 0-4a2 2 0 0 0 0 4"></svg:path></svg:g>`,
})
export class MingcuteSunflowerFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteSunriseFillIcon],svg[mingcute-sunrise-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M12 10a6 6 0 0 1 5.197 9H20a1 1 0 1 1 0 2H4a1 1 0 1 1 0-2h2.803A6 6 0 0 1 12 10m9 5a1 1 0 0 1 .117 1.993L21 17h-1a1 1 0 0 1-.117-1.993L20 15zM4 15a1 1 0 0 1 .117 1.993L4 17H3a1 1 0 0 1-.117-1.993L3 15zm2.343-6.071l.707.707a1 1 0 0 1-1.414 1.414l-.707-.707a1 1 0 0 1 1.414-1.414m11.314 0a1 1 0 0 1 1.497 1.32l-.083.094l-.707.707a1 1 0 0 1-1.497-1.32l.083-.094zm-4.95-6.756l2.121 2.121a1 1 0 1 1-1.414 1.414L13 5.294V8a1 1 0 1 1-2 0V5.294l-.414.414a1 1 0 0 1-1.414-1.414l2.12-2.121a1 1 0 0 1 1.415 0"></svg:path></svg:g>`,
})
export class MingcuteSunriseFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteSunsetFillIcon],svg[mingcute-sunset-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M12 10a6 6 0 0 1 5.33 8.756l-.133.244H20a1 1 0 0 1 .117 1.993L20 21H4a1 1 0 0 1-.117-1.993L4 19h2.803A6 6 0 0 1 12 10m9 5a1 1 0 1 1 0 2h-1a1 1 0 1 1 0-2zM4 15a1 1 0 1 1 0 2H3a1 1 0 1 1 0-2zm.929-6.071a1 1 0 0 1 1.32-.083l.094.083l.707.707a1 1 0 0 1-1.32 1.497l-.094-.083l-.707-.707a1 1 0 0 1 0-1.414m14.142 0a1 1 0 0 1 0 1.414l-.707.707a1 1 0 0 1-1.414-1.414l.707-.707a1 1 0 0 1 1.414 0M12 1.879a1 1 0 0 1 1 1v2.707l.414-.415a1 1 0 1 1 1.414 1.415l-2.12 2.121a1 1 0 0 1-1.415 0L9.172 6.586a1 1 0 1 1 1.414-1.415l.414.415V2.88a1 1 0 0 1 1-1Z"></svg:path></svg:g>`,
})
export class MingcuteSunsetFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteSurfboardFillIcon],svg[mingcute-surfboard-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M19.778 4.222c.537.536.514 1.463.482 2.165c-.038.834-.198 1.899-.513 3.069c-.629 2.335-1.907 5.189-4.211 7.494c-2.582 2.582-5.693 4.086-8.16 4.677a1.95 1.95 0 0 1-1.833-.528l-2.642-2.642a1.95 1.95 0 0 1-.529-1.832c.592-2.468 2.096-5.578 4.678-8.16c2.305-2.306 5.16-3.583 7.494-4.212c1.17-.316 2.235-.475 3.07-.513c.701-.032 1.628-.055 2.164.482"></svg:path></svg:g>`,
})
export class MingcuteSurfboardFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteSurpriseFillIcon],svg[mingcute-surprise-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2m0 10a3 3 0 1 0 0 6a3 3 0 0 0 0-6m0 2a1 1 0 1 1 0 2a1 1 0 0 1 0-2M8.5 8a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3m7 0a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3"></svg:path></svg:g>`,
})
export class MingcuteSurpriseFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteSweatsFillIcon],svg[mingcute-sweats-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M12 2c2.106 0 4.06.65 5.67 1.762c-.169.244-.35.519-.527.814l-.096.164l-.203.365C16.431 5.882 16 6.927 16 8c0 1.97 1.563 4 4 4c.752 0 1.421-.193 1.987-.519Q22 11.739 22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2m0 12H9a1 1 0 1 0 0 2h3a1 1 0 1 0 0-2m-3-4H6a1 1 0 1 0 0 2h3a1 1 0 1 0 0-2m6 0h-3a1 1 0 1 0 0 2h3a1 1 0 1 0 0-2m5.05-5.94l.238.3l.205.272C21.085 5.44 22 6.872 22 8c0 1-.797 2-2 2s-2-1-2-2c0-.845.515-1.862 1.022-2.66l.215-.326l.205-.293l.187-.253l.223-.288l.098-.12a.064.064 0 0 1 .1 0"></svg:path></svg:g>`,
})
export class MingcuteSweatsFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteSwimmingPoolFillIcon],svg[mingcute-swimming-pool-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M19.063 17.829a1.5 1.5 0 0 1 1.989 2.24l-.115.102l-1.358 1.087c-1.515 1.212-3.235.774-4.694-.199a.5.5 0 0 0-.59.026a3.62 3.62 0 0 1-4.59 0a.5.5 0 0 0-.59-.026c-1.405.937-3.052 1.378-4.525.327l-.169-.128l-1.358-1.087a1.5 1.5 0 0 1 1.75-2.432l.124.09l1.358 1.086a.5.5 0 0 0 .509.07l.08-.044l.567-.378c1.332-.888 3.015-.711 4.237.266a.5.5 0 0 0 .624 0c1.17-.935 2.76-1.137 4.061-.376l.176.11l.566.378a.5.5 0 0 0 .513.025l.077-.05zM18.5 2.5a4 4 0 0 1 4 4a1.5 1.5 0 0 1-2.993.144L19.5 6.5a1 1 0 0 0-2 0V15c0 .014.02.01.048 0l.094-.046l.063-.039l1.358-1.086a1.5 1.5 0 0 1 1.874 2.342l-1.358 1.087a3.5 3.5 0 0 1-4.128.179l-.566-.378a.5.5 0 0 0-.59.026c-1.307 1.045-3.142 1.159-4.481.087c-.32-.256-.589-.177-.857-.013l-.161.106l-.164.115q-.04.03-.083.057a3.5 3.5 0 0 1-4.128-.18l-1.358-1.086a1.5 1.5 0 1 1 1.874-2.342l.563.45V6.5a4 4 0 1 1 8 0a1.5 1.5 0 0 1-2.993.144L10.5 6.5a1 1 0 0 0-2 0v3h6v-3a4 4 0 0 1 4-4m-4 10h-6v1.59c1.139-.3 2.283.015 3.188.74a.5.5 0 0 0 .624 0c.633-.507 1.369-.828 2.188-.853z"></svg:path></svg:g>`,
})
export class MingcuteSwimmingPoolFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteSwitchFillIcon],svg[mingcute-switch-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M16.5 12a4.5 4.5 0 0 1 .212 8.995L16.5 21h-9a4.5 4.5 0 0 1-.212-8.995L7.5 12zM7 14.5a2 2 0 1 0 0 4a2 2 0 0 0 0-4M16.5 2a4.5 4.5 0 0 1 .212 8.995L16.5 11h-9a4.5 4.5 0 0 1-.212-8.995L7.5 2zm.5 2.5a2 2 0 1 0 0 4a2 2 0 0 0 0-4"></svg:path></svg:g>`,
})
export class MingcuteSwitchFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteSwordFillIcon],svg[mingcute-sword-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M19.071 3.929a1 1 0 0 1 1 1v5.657a1 1 0 0 1-.405.804l-7.198 5.32l.946.947a1 1 0 0 1 0 1.414L12 20.485a1 1 0 0 1-1.154.187l-2.184-1.091l-1.612 1.611a1 1 0 0 1-1.414 0l-2.828-2.828a1 1 0 0 1 0-1.414l1.611-1.612l-1.091-2.184A1 1 0 0 1 3.515 12l1.414-1.414a1 1 0 0 1 1.414 0l.947.946l5.32-7.198a1 1 0 0 1 .804-.405z"></svg:path></svg:g>`,
})
export class MingcuteSwordFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteSydneyOperaHouseFillIcon],svg[mingcute-sydney-opera-house-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M2 19a1 1 0 0 1-.117-1.993L3.044 17c-.013-1.906-.578-3.88-1.812-5.36A1 1 0 0 1 2 10c1.476 0 2.838.41 4.057 1.094c-.287-1.6-.84-3.187-1.846-4.481A1 1 0 0 1 5.038 5c5.451.21 8.942 2.276 10.726 5.63C17.65 9.55 19.83 9 22 9a1 1 0 0 1 .8 1.6c-1.628 2.17-2.113 4.43-1.937 6.4H22a1 1 0 0 1 .117 1.992z"></svg:path></svg:g>`,
})
export class MingcuteSydneyOperaHouseFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteTShirt2FillIcon],svg[mingcute-t-shirt-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M15 3a6 6 0 0 1 6 6v2a1 1 0 0 1-1 1h-2v7a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-7H4a1 1 0 0 1-1-1V9a6 6 0 0 1 6-6zm0 2H9a3 3 0 0 0 5.995.176z"></svg:path></svg:g>`,
})
export class MingcuteTShirt2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteTShirtFillIcon],svg[mingcute-t-shirt-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M5.707 3.879A3 3 0 0 1 7.828 3c.79 0 1.948-.22 2.302.711a2.001 2.001 0 0 0 3.74 0c.354-.93 1.513-.71 2.302-.71a3 3 0 0 1 2.12.878L22 7.586a2 2 0 0 1 0 2.828l-1.478 1.478c-.52.52-1.246.689-1.9.526l.272 5.432A3 3 0 0 1 15.898 21H8.102a3 3 0 0 1-2.996-3.15l.272-5.432a2 2 0 0 1-1.9-.526L2 10.414a2 2 0 0 1 0-2.828z"></svg:path></svg:g>`,
})
export class MingcuteTShirtFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteTable2FillIcon],svg[mingcute-table-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M3 5a2 2 0 0 1 2-2h3v5H3zm5 5H3v9a2 2 0 0 0 2 2h3zm2 11h9a2 2 0 0 0 2-2v-9H10zm0-13V3h9a2 2 0 0 1 2 2v3z"></svg:path></svg:g>`,
})
export class MingcuteTable2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteTable3FillIcon],svg[mingcute-table-3-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M2 6a2 2 0 0 1 2-2h3v4H2zm0 4v4h5v-4zm7 0v4h6v-4zm8 0v4h5v-4zm5-2V6a2 2 0 0 0-2-2h-3v4zm-7 0H9V4h6zM2 16h5v4H4a2 2 0 0 1-2-2zm13 0H9v4h6zm5 4h-3v-4h5v2a2 2 0 0 1-2 2"></svg:path></svg:g>`,
})
export class MingcuteTable3FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteTableFillIcon],svg[mingcute-table-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M11 16v5H5a2 2 0 0 1-1.995-1.85L3 19v-3zm10 0v3a2 2 0 0 1-1.85 1.995L19 21h-6v-5zm-10-6v4H3v-4zm10 0v4h-8v-4zM11 3v5H3V5a2 2 0 0 1 1.85-1.995L5 3zm8 0a2 2 0 0 1 2 2v3h-8V3z"></svg:path></svg:g>`,
})
export class MingcuteTableFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteTag2FillIcon],svg[mingcute-tag-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M10.238 4.827a3 3 0 0 1 2.122.879l6.485 6.485a3 3 0 0 1 0 4.243l-4.243 4.242a3 3 0 0 1-4.242 0l-6.486-6.485a3 3 0 0 1-.878-2.121V7.327a2.5 2.5 0 0 1 2.5-2.5zm-.586 4.536a1.5 1.5 0 1 0-2.12 2.12a1.5 1.5 0 0 0 2.12-2.12m2-7.364a3 3 0 0 1 1.977.743l.145.135l7.192 7.193a1 1 0 0 1-1.32 1.497l-.094-.083L12.36 4.29a1 1 0 0 0-.576-.284L11.652 4H7a1 1 0 0 1-.117-1.994L7 2z"></svg:path></svg:g>`,
})
export class MingcuteTag2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteTagChevronFillIcon],svg[mingcute-tag-chevron-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M2.467 7.17A1.5 1.5 0 0 1 3.81 5h12.955a3 3 0 0 1 2.683 1.658l2 4a3 3 0 0 1 0 2.684l-2 4A3 3 0 0 1 16.764 19H3.809a1.5 1.5 0 0 1-1.342-2.17l2.191-4.383a1 1 0 0 0 0-.894z"></svg:path></svg:g>`,
})
export class MingcuteTagChevronFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteTagFillIcon],svg[mingcute-tag-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M10.537 2.164a3 3 0 0 1 2.244.727l.15.14l7.822 7.823a3 3 0 0 1 .135 4.098l-.135.144l-5.657 5.657a3 3 0 0 1-4.098.135l-.144-.135L3.03 12.93a3 3 0 0 1-.878-2.188l.011-.205l.472-5.185a3 3 0 0 1 2.537-2.695l.179-.021zM8.024 8.025a2 2 0 1 0 2.829 2.829a2 2 0 0 0-2.829-2.829"></svg:path></svg:g>`,
})
export class MingcuteTagFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteTaipei101FillIcon],svg[mingcute-taipei101-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M12 1a1 1 0 0 1 1 1v1h1.5c.609 0 1.086.564.986 1.164l-.308 1.852c.56.101.93.673.792 1.227L15.28 10h.22c.64 0 1.125.621.97 1.242L15.53 15H16c.64 0 1.125.621.97 1.242L15.78 21H16a1 1 0 1 1 0 2H8a1 1 0 1 1 0-2h.22l-1.19-4.757A1.01 1.01 0 0 1 8 15h.47l-.94-3.758A1.01 1.01 0 0 1 8.5 10h.22l-.69-2.757a1.01 1.01 0 0 1 .792-1.227l-.308-1.852C8.414 3.564 8.89 3 9.5 3H11V2a1 1 0 0 1 1-1"></svg:path></svg:g>`,
})
export class MingcuteTaipei101FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteTajMahalFillIcon],svg[mingcute-taj-mahal-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M12 2a1 1 0 0 1 .945.672l.031.111c.15.678.588 1.016 1.144 1.313l.443.225c.644.321 1.488.778 2.205 1.638A5.2 5.2 0 0 1 18 9.3c0 .797-.185 1.555-.516 2.237a3 3 0 0 1-.23.386l-.254.373V19h2v-5q0-.177.057-.334A1.5 1.5 0 0 1 18.5 12.5c0-.31.14-.81.343-1.313l.143-.334c.326-.716.743-1.353 1.014-1.353c.27 0 .688.637 1.014 1.353l.143.334c.202.503.343 1.002.343 1.313c0 .471-.217.892-.557 1.166q.038.105.05.219L21 14v5a1 1 0 0 1 .117 1.993L21 21H3a1 1 0 0 1-.117-1.993L3 19v-5q0-.177.057-.334A1.5 1.5 0 0 1 2.5 12.5c0-.31.14-.81.343-1.313l.143-.334C3.312 10.137 3.729 9.5 4 9.5c.27 0 .688.637 1.014 1.353l.143.334c.202.503.343 1.002.343 1.313c0 .471-.217.892-.557 1.166q.038.105.05.219L5 14v5h2v-6.704l-.254-.373a3 3 0 0 1-.23-.386A5.1 5.1 0 0 1 6 9.3c0-1.265.466-2.423 1.232-3.34c.657-.788 1.42-1.237 2.039-1.554l.321-.161c.64-.317 1.174-.623 1.388-1.3l.044-.162A1 1 0 0 1 12 2m0 12c-.25 0-1 1-1 1.5V19h2v-3.5c0-.5-.75-1.5-1-1.5"></svg:path></svg:g>`,
})
export class MingcuteTajMahalFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteTankFillIcon],svg[mingcute-tank-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M7 7a3 3 0 0 1 3-3h1.53a5 5 0 0 1 4.584 3H20a1 1 0 1 1 0 2h-3.418l.285 2h.633a4.5 4.5 0 1 1 0 9h-11a4.5 4.5 0 1 1 0-9H7z"></svg:path></svg:g>`,
})
export class MingcuteTankFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteTargetFillIcon],svg[mingcute-target-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M12 2c.896 0 1.764.118 2.59.339l-2.126 2.125A3 3 0 0 0 12.04 5H12a7 7 0 1 0 7 7v-.04q.29-.18.535-.425l2.126-2.125c.221.826.339 1.694.339 2.59c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2m-.414 5.017c0 .851-.042 1.714.004 2.564l-.54.54a2 2 0 1 0 2.829 2.829l.54-.54c.85.046 1.712.004 2.564.004a5 5 0 1 1-5.397-5.397m6.918-4.89a1 1 0 0 1 .617.923v1.83h1.829a1 1 0 0 1 .707 1.707L18.12 10.12a1 1 0 0 1-.707.293H15l-1.828 1.829a1 1 0 0 1-1.415-1.415L13.586 9V6.586a1 1 0 0 1 .293-.708l3.535-3.535a1 1 0 0 1 1.09-.217"></svg:path></svg:g>`,
})
export class MingcuteTargetFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteTask2FillIcon],svg[mingcute-task-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M7.416 3A5 5 0 0 0 7 5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2c0-.711-.148-1.388-.416-2H18a2 2 0 0 1 2 2v15a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zM12 14H9a1 1 0 1 0 0 2h3a1 1 0 1 0 0-2m3-4H9a1 1 0 0 0-.117 1.993L9 12h6a1 1 0 1 0 0-2m-3-8a3 3 0 0 1 2.236 1c.428.478.704 1.093.755 1.772L15 5H9c0-.725.257-1.39.685-1.908L9.764 3c.55-.614 1.348-1 2.236-1"></svg:path></svg:g>`,
})
export class MingcuteTask2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteTaskFillIcon],svg[mingcute-task-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M15 2a2 2 0 0 1 1.732 1H18a2 2 0 0 1 2 2v12a5 5 0 0 1-5 5H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h1.268A2 2 0 0 1 9 2zm-.176 7.379l-4.242 4.243l-1.415-1.415a1 1 0 0 0-1.414 1.414l2.05 2.051a1.1 1.1 0 0 0 1.556 0l4.88-4.879a1 1 0 1 0-1.415-1.414M14.5 4h-5a.5.5 0 0 0-.492.41L9 4.5v1a.5.5 0 0 0 .41.492L9.5 6h5a.5.5 0 0 0 .492-.41L15 5.5v-1a.5.5 0 0 0-.41-.492z"></svg:path></svg:g>`,
})
export class MingcuteTaskFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteTaurusFillIcon],svg[mingcute-taurus-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M18 2a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4zm0 3.667c-.757 0-1.358.273-1.854.576c-.16.098-.318.204-.468.308l-.22.154c-.227.161-.435.308-.659.45l-.075.045l-.17.087c-.46.214-1.201.38-2.554.38s-2.095-.166-2.555-.38l-.17-.087l-.074-.046l-.328-.216l-.326-.228c-.218-.155-.452-.32-.693-.467C7.358 5.94 6.757 5.667 6 5.667a1 1 0 0 0-.117 1.993L6 7.667c.243 0 .476.077.812.283l.133.084l.286.195l.518.363q.182.126.384.253q.189.12.397.222a5 5 0 1 0 6.94 0q.208-.102.397-.222q.202-.127.384-.253l.665-.465a6 6 0 0 1 .272-.177c.288-.176.5-.259.708-.278L18 7.667a1 1 0 1 0 0-2m-6 4a3 3 0 1 1 0 6a3 3 0 0 1 0-6"></svg:path></svg:g>`,
})
export class MingcuteTaurusFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteTeacupFillIcon],svg[mingcute-teacup-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" fill-rule="nonzero" d="M17 4a2 2 0 0 1 2 2v2.035A3.5 3.5 0 0 1 18.5 15h-.788a8.54 8.54 0 0 1-3.208 3H17a1 1 0 1 1 0 2H4a1 1 0 1 1 0-2h2.496A8.5 8.5 0 0 1 2 10.5V6a2 2 0 0 1 2-2zm2 6.085v.415c0 .868-.13 1.706-.372 2.495a1.5 1.5 0 0 0 .503-2.856z"></svg:path></svg:g>`,
})
export class MingcuteTeacupFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteTelegramFillIcon],svg[mingcute-telegram-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M19.777 4.43a1.5 1.5 0 0 1 2.062 1.626l-2.268 13.757c-.22 1.327-1.676 2.088-2.893 1.427c-1.018-.553-2.53-1.405-3.89-2.294c-.68-.445-2.763-1.87-2.507-2.884c.22-.867 3.72-4.125 5.72-6.062c.785-.761.427-1.2-.5-.5c-2.302 1.738-5.998 4.381-7.22 5.125c-1.078.656-1.64.768-2.312.656c-1.226-.204-2.363-.52-3.291-.905c-1.254-.52-1.193-2.244-.001-2.746z"></svg:path></svg:g>`,
})
export class MingcuteTelegramFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteTelescope2FillIcon],svg[mingcute-telescope-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M8.5 3A2.5 2.5 0 0 1 11 5.5V7h2V5.5a2.5 2.5 0 0 1 2.336-2.495L15.559 3a3 3 0 0 1 2.845 2.051l3.202 9.605A4.5 4.5 0 1 1 13 16.5V9h-2v7.5a4.5 4.5 0 1 1-8.606-1.844l3.201-9.605a3 3 0 0 1 2.663-2.045zm-2 11C5.145 14 4 15.149 4 16.5A2.5 2.5 0 1 0 6.5 14m11 0a2.5 2.5 0 1 0 2.5 2.5c0-1.351-1.145-2.5-2.5-2.5"></svg:path></svg:g>`,
})
export class MingcuteTelescope2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteTelescopeFillIcon],svg[mingcute-telescope-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M14.21 14.287a2 2 0 0 0 1.705-.14l5.196-3a2 2 0 0 0 .732-2.732l-2.5-4.33a2 2 0 0 0-2.732-.732l-5.196 3a2 2 0 0 0-1 1.751a2 2 0 0 0-.232.115l-4.33 2.5a2 2 0 0 0-1 1.751a2 2 0 0 0-.232.115l-1.732 1a2 2 0 0 0-.732 2.732l.5.866a2 2 0 0 0 2.732.732l1.732-1q.113-.066.215-.143a2 2 0 0 0 2.017.01l1.817-1.05l-2.09 4.874a1 1 0 1 0 1.84.788L13 16.539l2.08 4.855a1 1 0 0 0 1.84-.788z"></svg:path></svg:g>`,
})
export class MingcuteTelescopeFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteTempleOfHeavenFillIcon],svg[mingcute-temple-of-heaven-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="m19.705 15.854l-.56 3.362c-.137.82-.61 1.792-1.688 2.15l-.284.089l-.155.043l-.342.085q-.361.083-.809.156l-.472.07c-.662.086-1.452.15-2.395.177V20a1 1 0 1 0-2 0v1.986a24 24 0 0 1-2.395-.178l-.472-.069q-.448-.072-.81-.156l-.34-.085l-.303-.087l-.137-.044c-1.078-.359-1.55-1.332-1.687-2.15l-.56-3.363c.372.146.741.261 1.065.354C7.102 16.706 9.45 17 12 17s4.898-.294 6.639-.792a12 12 0 0 0 1.066-.354M12 2a1 1 0 0 1 1 1c0 1.39 1.01 2.137 1.947 2.606c.298.149.615.279.938.405l.65.251c.649.256 1.287.536 1.81.965c.302.246.655.663.655 1.273c0 .494-.198.88-.47 1.18l.45.128l.32.1l.33.114c1.16.422 2.37 1.122 2.37 2.405c0 1.189-1.048 1.907-2.123 2.357l-.323.127l-.16.058l-.313.105l-.3.092l-.142.042C16.898 15.706 14.55 16 12 16c-2.381 0-4.584-.257-6.283-.695l-.499-.139l-.3-.092l-.313-.105l-.16-.058l-.322-.127C3.048 14.334 2 13.616 2 12.427c0-1.283 1.21-1.983 2.37-2.405l.33-.114l.32-.1l.45-.128A1.7 1.7 0 0 1 5 8.5c0-.61.353-1.027.654-1.273c.522-.427 1.16-.708 1.809-.963l.65-.252c.323-.126.64-.257.94-.406c.89-.445 1.846-1.143 1.94-2.402L11 3a1 1 0 0 1 1-1"></svg:path></svg:g>`,
})
export class MingcuteTempleOfHeavenFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteTentFillIcon],svg[mingcute-tent-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M15 4H9a1 1 0 0 0-.928.627L2.08 18.607A1 1 0 0 0 3 20h5v-5a1 1 0 1 1 2 0v5h11a1 1 0 0 0 .92-1.394l-6-14A1 1 0 0 0 15 4"></svg:path></svg:g>`,
})
export class MingcuteTentFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteTerminalBoxFillIcon],svg[mingcute-terminal-box-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-3 11h-2a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2M9.05 8.465a1 1 0 0 0-1.497 1.32l.083.094L9.757 12l-2.12 2.121a1 1 0 0 0 1.32 1.498l.093-.083l2.829-2.829a1 1 0 0 0 .083-1.32l-.083-.094z"></svg:path></svg:g>`,
})
export class MingcuteTerminalBoxFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteTerminalFillIcon],svg[mingcute-terminal-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M20 16.5a1.5 1.5 0 0 1 .145 2.993L20 19.5h-8a1.5 1.5 0 0 1-.144-2.993L12 16.5zM3.283 5.283A1.5 1.5 0 0 1 5.29 5.18l.114.103l5.657 5.657a1.5 1.5 0 0 1 .103 2.007l-.103.114l-5.657 5.657A1.5 1.5 0 0 1 3.18 16.71l.103-.114L7.879 12L3.283 7.404a1.5 1.5 0 0 1 0-2.121"></svg:path></svg:g>`,
})
export class MingcuteTerminalFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteTerrorFillIcon],svg[mingcute-terror-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2m0 9a3 3 0 0 0-3 3v1a3 3 0 1 0 6 0v-1a3 3 0 0 0-3-3m0 2a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1M8.422 7.276c-.46.115-.895.383-1.245.733s-.618.785-.733 1.245c-.11.437-.113 1.091.38 1.583c.492.493 1.146.489 1.583.38c.46-.115.894-.383 1.245-.733c.35-.35.618-.785.732-1.245c.11-.437.114-1.091-.379-1.584c-.492-.492-1.146-.488-1.583-.379m5.573.38c-.493.492-.489 1.146-.38 1.583c.115.46.383.895.733 1.245s.785.618 1.245.733c.437.109 1.091.113 1.584-.38c.492-.492.488-1.146.379-1.583c-.115-.46-.383-.895-.733-1.245s-.785-.618-1.245-.733c-.437-.109-1.09-.113-1.583.38"></svg:path></svg:g>`,
})
export class MingcuteTerrorFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteTestTubeFillIcon],svg[mingcute-test-tube-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M16 2a1 1 0 1 1 0 2v14a4 4 0 0 1-8 0V4a1 1 0 0 1 0-2zm-2 13h-2a1 1 0 1 0 0 2h2zm0-4h-2a1 1 0 0 0-.117 1.993L12 13h2zm0-4h-2a1 1 0 1 0 0 2h2z"></svg:path></svg:g>`,
})
export class MingcuteTestTubeFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteTetherUsdtFillIcon],svg[mingcute-tether-usdt-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M17.42 3a2 2 0 0 1 1.736 1.008L22.49 9.84a2 2 0 0 1-.322 2.406l-9.283 9.283a1.25 1.25 0 0 1-1.768 0l-9.283-9.283a2 2 0 0 1-.322-2.406l3.333-5.833A2 2 0 0 1 6.58 3zM15 6H9a1 1 0 0 0-.117 1.993L9 8h2v1.545c-.758.07-1.447.217-2.004.426c-.395.148-.749.336-1.013.571s-.483.557-.483.958s.219.724.483.958c.264.235.618.423 1.013.57c.594.223 1.338.377 2.157.44a1 1 0 0 0-.146.416L11 14v2a1 1 0 0 0 1.993.117L13 16v-2a1 1 0 0 0-.153-.532c.819-.063 1.563-.216 2.157-.44c.395-.147.749-.335 1.013-.57s.483-.557.483-.958s-.219-.724-.483-.958c-.264-.235-.618-.423-1.013-.57a7.5 7.5 0 0 0-1.683-.392L13 9.545V8h2a1 1 0 0 0 .117-1.993zm-2.001 4.55a6.8 6.8 0 0 1 1.654.357c.329.124.56.259.7.383a.46.46 0 0 1 .14.178l.007.032l-.007.032a.46.46 0 0 1-.14.178c-.14.124-.371.26-.7.382c-.655.246-1.593.408-2.653.408s-1.998-.162-2.653-.408c-.329-.123-.56-.258-.701-.382a.46.46 0 0 1-.14-.178L8.5 11.5c0-.013.005-.085.146-.21s.372-.26.701-.382c.44-.165 1.007-.293 1.654-.358a1 1 0 0 0 1.998 0"></svg:path></svg:g>`,
})
export class MingcuteTetherUsdtFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteText2FillIcon],svg[mingcute-text-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M4.5 5A1.5 1.5 0 0 1 6 3.5h12A1.5 1.5 0 0 1 19.5 5v2a1.5 1.5 0 0 1-3 0v-.5h-3v12h.5a1.5 1.5 0 0 1 0 3h-4a1.5 1.5 0 0 1 0-3h.5v-12h-3V7a1.5 1.5 0 1 1-3 0z"></svg:path></svg:g>`,
})
export class MingcuteText2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteTextAreaFillIcon],svg[mingcute-text-area-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M7 3a1 1 0 0 1 1 1h8a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1v8a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1H8a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1V8a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm12 15h-1v1h1zM6 18H5v1h1zm6-11a1.71 1.71 0 0 0-1.556 1.002l-.054.133l-2.332 6.529a1 1 0 0 0 1.838.78l.046-.108l.477-1.336h3.162l.477 1.336a1 1 0 0 0 1.917-.56l-.033-.112l-2.332-6.53A1.71 1.71 0 0 0 12 7m0 2.573L12.867 12h-1.734zM6 5H5v1h1zm13 0h-1v1h1z"></svg:path></svg:g>`,
})
export class MingcuteTextAreaFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteTextColorFillIcon],svg[mingcute-text-color-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M8.428 17.459a1.5 1.5 0 0 1-2.856-.918L9.919 3.017a2.186 2.186 0 0 1 4.162 0l4.347 13.524a1.5 1.5 0 1 1-2.856.918L14.299 13.5H9.701zm2.237-6.959h2.67L12 6.346zM3.5 21A1.5 1.5 0 0 1 5 19.5h14a1.5 1.5 0 0 1 0 3H5A1.5 1.5 0 0 1 3.5 21"></svg:path></svg:g>`,
})
export class MingcuteTextColorFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteTextDirectionLeftFillIcon],svg[mingcute-text-direction-left-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M8.182 15.818a1.5 1.5 0 0 1 .305 1.682H18a1.5 1.5 0 0 1 0 3H8.487a1.5 1.5 0 0 1-2.426 1.682l-2.122-2.121a1.5 1.5 0 0 1 0-2.122l2.122-2.121a1.5 1.5 0 0 1 2.121 0M17 1.5a1.5 1.5 0 0 1 0 3V15a1.5 1.5 0 0 1-3 0V4.5h-1V15a1.5 1.5 0 0 1-3 0v-2.5a5.5 5.5 0 1 1 0-11zm-7 3a2.5 2.5 0 0 0-.164 4.995L10 9.5z"></svg:path></svg:g>`,
})
export class MingcuteTextDirectionLeftFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteTextDirectionRightFillIcon],svg[mingcute-text-direction-right-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="m18.94 15.818l2.12 2.121a1.5 1.5 0 0 1 0 2.122l-2.12 2.121a1.5 1.5 0 0 1-2.427-1.682H7a1.5 1.5 0 0 1 0-3h9.513a1.5 1.5 0 0 1 2.426-1.682M17 1.5a1.5 1.5 0 0 1 0 3V15a1.5 1.5 0 0 1-3 0V4.5h-1V15a1.5 1.5 0 0 1-3 0v-2.5a5.5 5.5 0 1 1 0-11zm-7 3a2.5 2.5 0 0 0-.164 4.995L10 9.5z"></svg:path></svg:g>`,
})
export class MingcuteTextDirectionRightFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteTextFillIcon],svg[mingcute-text-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="M0 0h24v24H0z"></svg:path><svg:path fill="currentColor" d="M5 3.5a1.5 1.5 0 1 0 0 3h5.5V20a1.5 1.5 0 0 0 3 0V6.5H19a1.5 1.5 0 0 0 0-3z"></svg:path></svg:g>`,
})
export class MingcuteTextFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteTextboxAiFillIcon],svg[mingcute-textbox-ai-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M12 3c.768 0 1.47.289 2 .764A3 3 0 0 1 16 3h1a1 1 0 1 1 0 2h-1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h1a1 1 0 1 1 0 2h-1c-.768 0-1.47-.289-2-.764A3 3 0 0 1 12 21h-1a1 1 0 1 1 0-2h1a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-1a1 1 0 1 1 0-2zm0 5v9H5a2 2 0 0 1-2-2v-3.49l.032.081l.129.379a3 3 0 0 0 5.678 0l.13-.379a1 1 0 0 1 .622-.623l.378-.129A3 3 0 0 0 12 8m7-1a2 2 0 0 1 1.995 1.85L21 9v6a2 2 0 0 1-1.85 1.995L19 17h-3V7zM6 4a1 1 0 0 1 .898.56l.048.117l.13.378a3 3 0 0 0 1.684 1.8l.185.07l.378.129a1 1 0 0 1 .117 1.844l-.117.048l-.378.13a3 3 0 0 0-1.8 1.684l-.07.185l-.129.378a1 1 0 0 1-1.844.118l-.048-.118l-.13-.378a3 3 0 0 0-1.684-1.8l-.185-.07l-.378-.129a1 1 0 0 1-.117-1.844l.117-.048l.378-.13a3 3 0 0 0 1.8-1.684l.07-.185l.129-.378A1 1 0 0 1 6 4"></svg:path></svg:g>`,
})
export class MingcuteTextboxAiFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteTextboxFillIcon],svg[mingcute-textbox-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M12 3c.768 0 1.47.289 2 .764A3 3 0 0 1 16 3h1a1 1 0 1 1 0 2h-1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h1a1 1 0 1 1 0 2h-1c-.768 0-1.47-.289-2-.764A3 3 0 0 1 12 21h-1a1 1 0 1 1 0-2h1a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-1a1 1 0 1 1 0-2zm0 4v10H5a2 2 0 0 1-1.995-1.85L3 15V9a2 2 0 0 1 1.85-1.995L5 7zm7 0a2 2 0 0 1 1.995 1.85L21 9v6a2 2 0 0 1-1.85 1.995L19 17h-3V7z"></svg:path></svg:g>`,
})
export class MingcuteTextboxFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteThermometerFillIcon],svg[mingcute-thermometer-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M9 5a3 3 0 1 1 6 0v7.956a.34.34 0 0 0 .097.118a5 5 0 1 1-6.193 0a.3.3 0 0 0 .087-.097L9 12.956z"></svg:path></svg:g>`,
})
export class MingcuteThermometerFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteThoughtFillIcon],svg[mingcute-thought-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M5 16c.748 0 1.463.226 2.014.64c.552.413.986 1.06.986 1.86s-.434 1.447-.986 1.86c-.55.414-1.266.64-2.014.64s-1.463-.226-2.014-.64C2.434 19.948 2 19.3 2 18.5s.434-1.447.986-1.86C3.536 16.225 4.252 16 5 16m7.923-13.115c1.487 0 2.803.727 3.613 1.844a4.462 4.462 0 0 1 4.309 7.344a4.462 4.462 0 0 1-6.296 3.956a4.462 4.462 0 0 1-6.87-1.707A4.462 4.462 0 0 1 8.725 5.83a4.46 4.46 0 0 1 4.197-2.945Z"></svg:path></svg:g>`,
})
export class MingcuteThoughtFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteThreadsFillIcon],svg[mingcute-threads-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M5.086 4.28c1.65-1.76 4.031-2.78 6.93-2.78c4.792 0 8.017 2.784 9.033 6.65a1.5 1.5 0 0 1-2.902.762C17.48 6.37 15.45 4.5 12.017 4.5c-2.164 0-3.72.742-4.742 1.832C6.239 7.438 5.64 9.02 5.64 10.875v2.25c0 1.855.598 3.437 1.634 4.543c1.022 1.09 2.578 1.832 4.741 1.832c1.576 0 2.795-.365 3.714-.93c.92-.568 1.42-1.285 1.56-2.068c.173-.972-.044-1.579-.364-2.001a2 2 0 0 0-.116-.14a5.3 5.3 0 0 1-.623 1.382c-1.514 2.3-4.369 2.46-6.203 1.728c-1.091-.435-1.972-1.583-2.247-2.788a3.5 3.5 0 0 1 .168-2.147c.312-.75.884-1.37 1.662-1.828c.8-.472 1.927-.665 2.979-.694a11 11 0 0 1 1.254.04c-.09-.2-.187-.343-.274-.425c-.384-.357-1.06-.632-1.746-.628c-.647.005-1.126.247-1.41.7a1.5 1.5 0 1 1-2.544-1.59c.948-1.515 2.507-2.1 3.933-2.11c1.388-.01 2.821.512 3.81 1.432c.954.888 1.373 2.254 1.513 3.485c.836.403 1.63.974 2.234 1.77c.874 1.15 1.233 2.624.927 4.34c-.32 1.793-1.45 3.178-2.94 4.096c-1.457.898-3.239 1.376-5.287 1.376c-2.899 0-5.28-1.02-6.93-2.78c-1.636-1.746-2.445-4.1-2.445-6.595v-2.25c0-2.494.81-4.85 2.445-6.594Zm8.947 8.823a8 8 0 0 0-1.405-.09c-.86.024-1.384.188-1.537.279c-.305.18-.39.333-.417.398a.53.53 0 0 0-.011.327c.036.16.121.333.238.48a.8.8 0 0 0 .194.186q.008.006 0 .002c.985.393 2.105.14 2.586-.592c.137-.207.265-.553.352-.99"></svg:path></svg:g>`,
})
export class MingcuteThreadsFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteThreeCirclesFillIcon],svg[mingcute-three-circles-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M16 7a4 4 0 1 1-8 0a4 4 0 0 1 8 0m-5 9a4 4 0 1 1-8 0a4 4 0 0 1 8 0m10 0a4 4 0 1 1-8 0a4 4 0 0 1 8 0"></svg:path></svg:g>`,
})
export class MingcuteThreeCirclesFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteThumbDown2FillIcon],svg[mingcute-thumb-down-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M15 16h2.405a4 4 0 0 0 3.936-4.716l-.91-5A4 4 0 0 0 16.497 3H8v12l1.821 5.788c.296.69 1.06 1.316 2.024 1.131C13.374 21.625 15 20.433 15 18.5zm-9-1a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3z"></svg:path></svg:g>`,
})
export class MingcuteThumbDown2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteThumbDownFillIcon],svg[mingcute-thumb-down-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M9.5 21.5c1.356 0 2.294-.852 2.895-2.053c.522-1.044.571-2.3.597-3.447h4.834a3 3 0 0 0 2.99-3.25l-.361-4.331A7 7 0 0 0 13.479 2h-1.512A6.94 6.94 0 0 0 6.9 4.179a5.5 5.5 0 0 0-1.4-.18c-1.108 0-2.028.622-2.624 1.61c-.58.96-.876 2.284-.876 3.89s.297 2.932.876 3.892C3.472 14.38 4.392 15 5.5 15c.281 0 .579-.05.877-.134c.458 1.2.784 2.437.63 3.735C6.835 20.046 8.016 21.5 9.5 21.5"></svg:path></svg:g>`,
})
export class MingcuteThumbDownFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteThumbUp2FillIcon],svg[mingcute-thumb-up-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M15 8h2.405a4 4 0 0 1 3.936 4.716l-.91 5A4 4 0 0 1 16.497 21H8V9l1.821-5.788c.296-.69 1.06-1.316 2.024-1.13C13.374 2.375 15 3.566 15 5.5zM6 9a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3z"></svg:path></svg:g>`,
})
export class MingcuteThumbUp2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteThumbUpFillIcon],svg[mingcute-thumb-up-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M9.5 2.5c1.356 0 2.294.852 2.895 2.053c.522 1.045.571 2.3.597 3.447h4.834a3 3 0 0 1 2.99 3.25l-.361 4.331A7 7 0 0 1 13.479 22h-1.512a6.96 6.96 0 0 1-4.642-1.762a1.24 1.24 0 0 0-1.009-.298A5.5 5.5 0 0 1 5.5 20c-1.108 0-2.028-.62-2.624-1.608C2.296 17.432 2 16.107 2 14.5s.297-2.931.876-3.891C3.472 9.62 4.392 9 5.5 9c.281 0 .579.05.877.134c.458-1.2.784-2.437.63-3.735C6.835 3.954 8.016 2.5 9.5 2.5"></svg:path></svg:g>`,
})
export class MingcuteThumbUpFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteThunderstormFillIcon],svg[mingcute-thunderstorm-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M12.496 12.632a1 1 0 0 1 .372 1.364L11.723 16h1.105a1.1 1.1 0 0 1 .955 1.646l-1.915 3.35a1 1 0 0 1-1.736-.992L11.277 18h-1.105a1.1 1.1 0 0 1-.955-1.646l1.915-3.35a1 1 0 0 1 1.364-.372m2.503 5.869a1 1 0 1 1 1.931.517l-.258.966a1 1 0 1 1-1.932-.517zm-9.78 0a1 1 0 1 1 1.932.517l-.26.966a1 1 0 0 1-1.931-.517zM11.5 2a6.5 6.5 0 0 1 6.086 4.212a6.002 6.002 0 0 1 2.001 10.598l.027-.085l.284-1.053a3 3 0 0 0-4.994-2.924a3 3 0 0 0-5.51-.737l-.305.537a3 3 0 0 0-4.767 1.571l-.259.966a3 3 0 0 0 0 1.553a3 3 0 0 0-.217.242A5 5 0 0 1 5 8.417A6.5 6.5 0 0 1 11.5 2m5.759 11.93a1 1 0 0 1 .707 1.225l-.259.966a1 1 0 0 1-1.932-.518l.259-.966a1 1 0 0 1 1.225-.707m-9.78 0a1 1 0 0 1 .707 1.225l-.259.966a1 1 0 0 1-1.932-.518l.259-.966a1 1 0 0 1 1.225-.707"></svg:path></svg:g>`,
})
export class MingcuteThunderstormFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteTicketFillIcon],svg[mingcute-ticket-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M13 4a1 1 0 0 1 .993.883L14 5a1 1 0 0 0 1.993.117L16 5a1 1 0 0 1 1-1h2a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3h-2a1 1 0 0 1-.993-.883L16 19a1 1 0 0 0-1.993-.117L14 19a1 1 0 0 1-1 1H5a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3zm2 9a1 1 0 0 0-1 1v1a1 1 0 1 0 2 0v-1a1 1 0 0 0-1-1m0-5a1 1 0 0 0-.993.883L14 9v1a1 1 0 0 0 1.993.117L16 10V9a1 1 0 0 0-1-1"></svg:path></svg:g>`,
})
export class MingcuteTicketFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteTiktokFillIcon],svg[mingcute-tiktok-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M14 2a2 2 0 0 1 2 2a3.004 3.004 0 0 0 2.398 2.94a2 2 0 0 1-.796 3.92A7 7 0 0 1 16 10.325V16a6 6 0 1 1-7.499-5.81a2 2 0 0 1 .998 3.873A2.002 2.002 0 0 0 10 18a2 2 0 0 0 2-2V4a2 2 0 0 1 2-2"></svg:path></svg:g>`,
})
export class MingcuteTiktokFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteTimeDurationFillIcon],svg[mingcute-time-duration-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M11.463 2.891a1.5 1.5 0 0 1-1.131 1.795q-.277.063-.546.146A1.5 1.5 0 1 1 8.9 1.965q.378-.117.767-.205a1.5 1.5 0 0 1 1.795 1.131m1.074 0a1.5 1.5 0 0 1 1.795-1.13C19.008 2.82 22.5 7 22.5 12c0 5.799-4.701 10.5-10.5 10.5c-4.999 0-9.179-3.492-10.24-8.168a1.5 1.5 0 0 1 2.926-.664a7.5 7.5 0 1 0 8.982-8.982a1.5 1.5 0 0 1-1.13-1.795M6.98 4.381A1.5 1.5 0 0 1 6.9 6.5a8 8 0 0 0-.4.4a1.5 1.5 0 1 1-2.2-2.04q.27-.29.56-.56a1.5 1.5 0 0 1 2.12.08M12 5.5A1.5 1.5 0 0 1 13.5 7v4.379l2.56 2.56a1.5 1.5 0 1 1-2.12 2.122l-3-3A1.5 1.5 0 0 1 10.5 12V7A1.5 1.5 0 0 1 12 5.5M3.84 7.91a1.5 1.5 0 0 1 .992 1.876a8 8 0 0 0-.146.546a1.5 1.5 0 0 1-2.926-.664q.088-.39.205-.767a1.5 1.5 0 0 1 1.876-.991"></svg:path></svg:g>`,
})
export class MingcuteTimeDurationFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteTimeFillIcon],svg[mingcute-time-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2m0 4a1 1 0 0 0-1 1v5a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V7a1 1 0 0 0-1-1"></svg:path></svg:g>`,
})
export class MingcuteTimeFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteTimelineFillIcon],svg[mingcute-timeline-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M13 4a1 1 0 1 0-2 0v17a1 1 0 1 0 2 0zM7 4h3v5H7a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2m-2 6h5v5H5a2 2 0 0 1-2-2v-1a2 2 0 0 1 2-2m9 0v5h2a2 2 0 0 0 2-2v-1a2 2 0 0 0-2-2zm-6 6h2v5H8a2 2 0 0 1-2-2v-1a2 2 0 0 1 2-2m6 0v5h5a2 2 0 0 0 2-2v-1a2 2 0 0 0-2-2zm0-12v5h4a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z"></svg:path></svg:g>`,
})
export class MingcuteTimelineFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteToDoFillIcon],svg[mingcute-to-do-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M18 2a2 2 0 0 1 2 2v8.803A6 6 0 0 0 12.528 22H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm-1 12a4 4 0 1 1 0 8a4 4 0 0 1 0-8m0 1.5a1 1 0 0 0-.993.883L16 16.5V18a1 1 0 0 0 .883.993L17 19h1a1 1 0 0 0 .117-1.993L18 17v-.5a1 1 0 0 0-1-1M9 11H8a1 1 0 1 0 0 2h1a1 1 0 1 0 0-2m5-4H8a1 1 0 0 0-.117 1.993L8 9h6a1 1 0 0 0 .117-1.993z"></svg:path></svg:g>`,
})
export class MingcuteToDoFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteToggleLeft2FillIcon],svg[mingcute-toggle-left-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" fill-rule="nonzero" d="M6 12a2 2 0 1 1 4 0a2 2 0 0 1-4 0"></svg:path><svg:path fill="currentColor" d="M8 5a7 7 0 0 0 0 14h8a7 7 0 1 0 0-14zm0 3a4 4 0 1 0 0 8a4 4 0 0 0 0-8"></svg:path></svg:g>`,
})
export class MingcuteToggleLeft2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteToggleLeftFillIcon],svg[mingcute-toggle-left-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M7 6a6 6 0 1 0 0 12h10a6 6 0 0 0 0-12zm0 10a4 4 0 1 0 0-8a4 4 0 0 0 0 8"></svg:path></svg:g>`,
})
export class MingcuteToggleLeftFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteToggleRight2FillIcon],svg[mingcute-toggle-right-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" fill-rule="nonzero" d="M14 12a2 2 0 1 1 4 0a2 2 0 0 1-4 0"></svg:path><svg:path fill="currentColor" d="M8 5a7 7 0 0 0 0 14h8a7 7 0 1 0 0-14zm8 3a4 4 0 1 0 0 8a4 4 0 0 0 0-8"></svg:path></svg:g>`,
})
export class MingcuteToggleRight2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteToggleRightFillIcon],svg[mingcute-toggle-right-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M7 6a6 6 0 1 0 0 12h10a6 6 0 0 0 0-12zm10 10a4 4 0 1 0 0-8a4 4 0 0 0 0 8"></svg:path></svg:g>`,
})
export class MingcuteToggleRightFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteToiletPaperFillIcon],svg[mingcute-toilet-paper-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M18 3c1.454 0 2.452 1.235 3.03 2.485c.571 1.24.918 2.858.965 4.609L22 10.5V20a1 1 0 0 1-1.04 1l-.124-.014L18 20.514l-2.836.472a1 1 0 0 1-.362-.006l-.118-.031L12 20.054l-2.684.895a1 1 0 0 1-1.309-.83L8 20v-2.927c-.531.55-1.196.927-2 .927c-1.454 0-2.452-1.235-3.03-2.485C2.356 14.18 2 12.406 2 10.5s.355-3.68.97-5.015c.551-1.194 1.486-2.373 2.835-2.477L6 3zM6 5c-.203 0-.705.22-1.213 1.323C4.317 7.34 4 8.816 4 10.5s.317 3.16.787 4.177C5.295 15.78 5.797 16 6 16s.705-.22 1.213-1.323C7.683 13.66 8 12.184 8 10.5s-.317-3.16-.787-4.177C6.705 5.22 6.203 5 6 5m0 3.5c.552 0 1 .895 1 2s-.448 2-1 2s-1-.895-1-2s.448-2 1-2"></svg:path></svg:g>`,
})
export class MingcuteToiletPaperFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteTongueFillIcon],svg[mingcute-tongue-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10M8.5 11a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m.5 2a1 1 0 1 0 0 2v1a3 3 0 1 0 6 0v-1a1 1 0 1 0 0-2zm7.949-5.316a1 1 0 0 0-1.265-.633a4.05 4.05 0 0 0-1.792 1.214a4.3 4.3 0 0 0-.84 1.419A1 1 0 0 0 14 11c.5.026.952.367 1.293.707a1 1 0 1 0 1.414-1.414c-.352-.336-.726-.641-1.157-.872c.259-.235.55-.386.875-.516a1 1 0 0 0 .524-1.221"></svg:path></svg:g>`,
})
export class MingcuteTongueFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteToolFillIcon],svg[mingcute-tool-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M7.527 2.657a7.001 7.001 0 0 1 8.26 9.347l4.599 3.893a3.3 3.3 0 1 1-4.651 4.65l-3.891-4.597a7.001 7.001 0 0 1-9.35-8.26a1.01 1.01 0 0 1 1.72-.432l3.045 3.307l2.297-.845l.847-2.3l-3.309-3.04a1.01 1.01 0 0 1 .433-1.723"></svg:path></svg:g>`,
})
export class MingcuteToolFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteTornado2FillIcon],svg[mingcute-tornado-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M2.5 4A1.5 1.5 0 0 1 4 2.5h16a1.5 1.5 0 0 1 0 3H4A1.5 1.5 0 0 1 2.5 4m1 4A1.5 1.5 0 0 1 5 6.5h12a1.5 1.5 0 0 1 0 3H5A1.5 1.5 0 0 1 3.5 8m4 4A1.5 1.5 0 0 1 9 10.5h10a1.5 1.5 0 0 1 0 3H9A1.5 1.5 0 0 1 7.5 12m3 4a1.5 1.5 0 0 1 1.5-1.5h5a1.5 1.5 0 0 1 0 3h-5a1.5 1.5 0 0 1-1.5-1.5m-1 4a1.5 1.5 0 0 1 1.5-1.5h3a1.5 1.5 0 0 1 0 3h-3A1.5 1.5 0 0 1 9.5 20"></svg:path></svg:g>`,
})
export class MingcuteTornado2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteTornadoFillIcon],svg[mingcute-tornado-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M7.25 16.582c.327.678.937 1.201 1.582 1.56c.99.55 2.288.858 3.668.858c.693 0 1.365-.078 1.988-.225c-.271.3-.61.526-.92.68C12.86 19.81 11.95 20 11 20s-1.86-.19-2.569-.545C7.782 19.131 7 18.497 7 17.5c0-.35.096-.655.25-.918m10.718-2.483q.031.195.032.401c0 1.218-.877 2.111-1.832 2.642c-.99.55-2.288.858-3.668.858s-2.679-.309-3.668-.858c-.733-.408-1.42-1.029-1.7-1.847c1.237.451 2.756.705 4.368.705c1.906 0 3.68-.354 5.015-.97a5.8 5.8 0 0 0 1.453-.931m-13.946-3.43c.51.491 1.177.897 1.92 1.222C7.544 12.591 9.686 13 12 13s4.456-.408 6.058-1.109q.478-.21.905-.462c-.214 1.223-1.325 2.082-2.448 2.6c-1.335.617-3.109.971-5.015.971s-3.68-.354-5.015-.97C5.235 13.451 4 12.453 4 11q0-.17.022-.33ZM12 3c2.314 0 4.456.408 6.058 1.109c.799.35 1.509.792 2.032 1.334c.529.546.91 1.243.91 2.057s-.381 1.51-.91 2.057c-.523.542-1.233.984-2.032 1.334C16.456 11.591 14.314 12 12 12s-4.456-.408-6.058-1.109c-.799-.35-1.509-.792-2.032-1.334C3.38 9.011 3 8.314 3 7.5s.381-1.51.91-2.057c.523-.542 1.233-.984 2.032-1.334C7.544 3.409 9.686 3 12 3"></svg:path></svg:g>`,
})
export class MingcuteTornadoFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteTowerCraneFillIcon],svg[mingcute-tower-crane-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M12 17.618V21a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-.382zM8.232 2.36a1 1 0 0 1 1.14-.288l.107.05l11 6a1 1 0 0 1-.366 1.872L20 10h-2v2.994a.3.3 0 0 0 .057.085c.058.067.146.142.26.216l.122.072A3 3 0 1 1 14 16a1 1 0 0 1 1.993-.117L16 16a1 1 0 1 0 1.479-.878a3.4 3.4 0 0 1-.94-.741a2.15 2.15 0 0 1-.53-1.192L16 13v-3h-4v.382l-6 3V10H4a1 1 0 0 1-.844-1.537l.076-.103zM12 12.618v2.764l-6 3v-2.764z"></svg:path></svg:g>`,
})
export class MingcuteTowerCraneFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteTowerFillIcon],svg[mingcute-tower-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M12 2a1 1 0 0 1 .993.883L13 3v.723l.166.277H14a1 1 0 0 1 .445 1.896l-.113.047L15.566 8H17a1 1 0 0 1 .117 1.993L17 10h-1c.628.836 1 1.874 1 3a5 5 0 0 1-2 4a5 5 0 0 1 1.845 2.758L16.9 20H19a1 1 0 0 1 .117 1.993L19 22H5a1 1 0 0 1-.117-1.993L5 20h2.1A5 5 0 0 1 9 17a5 5 0 0 1-2-4c0-1.032.313-1.99.848-2.787L8 10H7a1 1 0 0 1-.117-1.993L7 8h1.434l1.234-2.057a1 1 0 0 1 .215-1.936L10 4h.834L11 3.723V3a1 1 0 0 1 1-1m.034 4h-.068l-1.2 2h2.468z"></svg:path></svg:g>`,
})
export class MingcuteTowerFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteToxophilyFillIcon],svg[mingcute-toxophily-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M11.06 1.94a1.5 1.5 0 0 0-2.12 2.12l.156.157L5.169 10.5H5a1.5 1.5 0 0 0 0 3h.169l3.927 6.283l-.157.156a1.5 1.5 0 0 0 2.122 2.122l.895-.895l1.734-1.157a5.5 5.5 0 0 0 2.167-2.837l1.224-3.672h.505a1.5 1.5 0 0 0 2.475.56l1-1a1.5 1.5 0 0 0 0-2.12l-1-1a1.5 1.5 0 0 0-2.475.56h-.505l-1.224-3.672A5.5 5.5 0 0 0 13.69 3.99l-1.734-1.157l-.895-.895ZM8.707 10.5l2.747-4.395l.573.382a2.5 2.5 0 0 1 .985 1.29l.908 2.723H8.706Zm2.747 7.395L8.706 13.5h5.213l-.908 2.724a2.5 2.5 0 0 1-.985 1.29z"></svg:path></svg:g>`,
})
export class MingcuteToxophilyFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteToyHorseFillIcon],svg[mingcute-toy-horse-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="m3.606 3.447l.23.462l-2.15 3.01a1 1 0 0 0 .107 1.288l1.5 1.5a1 1 0 0 0 1.154.187l1.254-.626l.692.922l-2.07 6.626l-.17-.13a5 5 0 0 1-.43-.376a1 1 0 0 0-1.45 1.377l.636.565c.397.315.98.725 1.748 1.132C6.2 20.2 8.483 21 11.5 21s5.301-.8 6.843-1.616a11.4 11.4 0 0 0 1.748-1.132c.154-.123.655-.582.636-.565a1 1 0 0 0-1.275-1.524l-1.03-5.151c.523.489 1.088 1.245 1.684 2.435a1 1 0 1 0 1.788-.894c-1.056-2.113-2.186-3.317-3.447-3.947C17.39 8.077 16.34 8.01 15.45 8h-3.692a11 11 0 0 0-.339-.894c-.409-.954-1.097-2.198-2.212-3.313c-1.159-1.159-2.353-1.623-3.293-1.78a5 5 0 0 0-1.141-.057c-.113.008-.45.057-.516.074a1 1 0 0 0-.651 1.417m10.72 15.268L13.306 16h-2.614l-1.079 2.876c.585.079 1.213.124 1.886.124c1.049 0 1.99-.11 2.825-.285Z"></svg:path></svg:g>`,
})
export class MingcuteToyHorseFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteTrafficConeFillIcon],svg[mingcute-traffic-cone-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M12 3a1 1 0 0 1 .916.6L19.654 19H20a1 1 0 1 1 0 2H4a1 1 0 1 1 0-2h.346l6.738-15.4A1 1 0 0 1 12 3m-2.409 9h4.818l-.876-2h-3.066zm-2.187 5h9.192l-.875-2H8.279z"></svg:path></svg:g>`,
})
export class MingcuteTrafficConeFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteTrafficLightsFillIcon],svg[mingcute-traffic-lights-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M14 2a4 4 0 0 1 3.995 3.8L18 6v12a4 4 0 0 1-3.8 3.995L14 22h-4a4 4 0 0 1-3.995-3.8L6 18V6a4 4 0 0 1 3.8-3.995L10 2zm-2 13a2 2 0 1 0 0 4a2 2 0 0 0 0-4m0-5a2 2 0 1 0 0 4a2 2 0 0 0 0-4m0-5a2 2 0 1 0 0 4a2 2 0 0 0 0-4"></svg:path></svg:g>`,
})
export class MingcuteTrafficLightsFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteTrain2FillIcon],svg[mingcute-train-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M17 2a4 4 0 0 1 4 4v9a4 4 0 0 1-3.127 3.904L19.6 20.2a1 1 0 0 1-1.2 1.6L14.667 19H9.333L5.6 21.8a1 1 0 1 1-1.2-1.6l1.727-1.296A4 4 0 0 1 3 15V6a4 4 0 0 1 4-4zM8.25 13.25a1.25 1.25 0 1 0 0 2.5a1.25 1.25 0 0 0 0-2.5m7.5 0a1.25 1.25 0 1 0 0 2.5a1.25 1.25 0 0 0 0-2.5M16.5 5h-9a1.5 1.5 0 0 0-1.493 1.356L6 6.5v3a1.5 1.5 0 0 0 1.356 1.493L7.5 11h9a1.5 1.5 0 0 0 1.493-1.356L18 9.5v-3a1.5 1.5 0 0 0-1.356-1.493zM16 7v2H8V7z"></svg:path></svg:g>`,
})
export class MingcuteTrain2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteTrain3FillIcon],svg[mingcute-train-3-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M17 2a4 4 0 0 1 4 4v9a4 4 0 0 1-3.127 3.904L19.6 20.2a1 1 0 0 1-1.2 1.6L14.667 19H9.333L5.6 21.8a1 1 0 1 1-1.2-1.6l1.727-1.296A4 4 0 0 1 3 15V6a4 4 0 0 1 4-4zm-5 11a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3m7-5H5v2h14zm-2-4H7a2 2 0 0 0-1.995 1.85L5 6h14a2 2 0 0 0-1.85-1.995z"></svg:path></svg:g>`,
})
export class MingcuteTrain3FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteTrain4FillIcon],svg[mingcute-train-4-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M14.72 2a5 5 0 0 1 4.855 3.802l.049.217l1.4 7c.496 2.482-.929 4.83-3.14 5.663l-.21.073L19.6 20.2a1 1 0 0 1-1.095 1.669L18.4 21.8L14.667 19H9.333L5.6 21.8a1 1 0 0 1-1.296-1.518L4.4 20.2l1.926-1.445c-2.26-.735-3.768-3.031-3.39-5.503l.04-.233l1.4-7a5 5 0 0 1 4.68-4.014L9.28 2h5.442ZM8.25 13.25a1.25 1.25 0 1 0 0 2.5a1.25 1.25 0 0 0 0-2.5m7.5 0a1.25 1.25 0 1 0 0 2.5a1.25 1.25 0 0 0 0-2.5M14.61 5H9.39a1.5 1.5 0 0 0-1.455 1.136l-.75 3A1.5 1.5 0 0 0 8.64 11h6.72a1.5 1.5 0 0 0 1.455-1.864l-.75-3A1.5 1.5 0 0 0 14.609 5Zm-.39 2l.5 2H9.28l.5-2z"></svg:path></svg:g>`,
})
export class MingcuteTrain4FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteTrainFillIcon],svg[mingcute-train-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M21 18a1 1 0 1 1 0 2H2a1 1 0 1 1 0-2zM12 5c3.224 0 5.942 1.075 7.868 2.589C21.759 9.075 23 11.085 23 13c0 .842-.258 1.56-.713 2.14c-.443.566-1.034.95-1.636 1.214c-1.186.518-2.597.646-3.651.646H2.994A1.995 1.995 0 0 1 1 15V7c0-1.101.89-2 1.998-2zM7 7H3v3h4zm5 0H9v3h4V7.04a12 12 0 0 0-.662-.035zm3 .383V10h4.551a8 8 0 0 0-.919-.839c-.962-.756-2.19-1.395-3.632-1.778"></svg:path></svg:g>`,
})
export class MingcuteTrainFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteTransfer2FillIcon],svg[mingcute-transfer-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M7.269 3.11c.974-.974 2.617-.34 2.725.991l.006.14V20a1.5 1.5 0 0 1-2.993.144L7 20V7.621l-1.44 1.44a1.5 1.5 0 0 1-2.224-2.008l.103-.114zM15.5 2.5a1.5 1.5 0 0 1 1.493 1.356L17 4v12.379l1.44-1.44a1.5 1.5 0 0 1 2.224 2.008l-.103.114l-3.83 3.829c-.974.974-2.617.34-2.725-.991l-.006-.14V4a1.5 1.5 0 0 1 1.5-1.5"></svg:path></svg:g>`,
})
export class MingcuteTransfer2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteTransfer3FillIcon],svg[mingcute-transfer-3-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M8.56 11.9a1.5 1.5 0 0 1 0 2.12l-.974.976H16a1.5 1.5 0 0 1 0 3H7.586l.975.974a1.5 1.5 0 1 1-2.122 2.122l-3.535-3.536a1.5 1.5 0 0 1 0-2.121l3.535-3.536a1.5 1.5 0 0 1 2.122 0Zm6.88-9a1.5 1.5 0 0 1 2.007-.104l.114.103l3.535 3.536a1.5 1.5 0 0 1 .103 2.007l-.103.114l-3.535 3.536a1.5 1.5 0 0 1-2.225-2.008l.103-.114l.975-.974H8a1.5 1.5 0 0 1-.144-2.994L8 5.996h8.414l-.975-.975a1.5 1.5 0 0 1 0-2.122Z"></svg:path></svg:g>`,
})
export class MingcuteTransfer3FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteTransfer4FillIcon],svg[mingcute-transfer-4-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M16.496 6.5a1.5 1.5 0 0 1 1.5 1.5v8.414l.974-.975a1.5 1.5 0 1 1 2.122 2.122l-3.536 3.535a1.5 1.5 0 0 1-2.121 0l-3.536-3.535a1.5 1.5 0 1 1 2.122-2.122l.975.975V8a1.5 1.5 0 0 1 1.5-1.5m-7.94-3.596l3.536 3.535A1.5 1.5 0 1 1 9.97 8.561l-.974-.975V16a1.5 1.5 0 0 1-3 0V7.586l-.975.975a1.5 1.5 0 1 1-2.122-2.122l3.536-3.535a1.5 1.5 0 0 1 2.121 0"></svg:path></svg:g>`,
})
export class MingcuteTransfer4FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteTransferFillIcon],svg[mingcute-transfer-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M20 14a1.5 1.5 0 0 1 .144 2.993L20 17H7.621l1.44 1.44a1.5 1.5 0 0 1-2.008 2.224l-.114-.103l-3.829-3.83c-.974-.974-.34-2.617.991-2.725l.14-.006zM14.94 3.44a1.5 1.5 0 0 1 2.007-.104l.114.103l3.829 3.83c.974.974.34 2.617-.991 2.725l-.14.006H4a1.5 1.5 0 0 1-.144-2.993L4 7h12.379l-1.44-1.44a1.5 1.5 0 0 1 0-2.12Z"></svg:path></svg:g>`,
})
export class MingcuteTransferFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteTransferHorizontalFillIcon],svg[mingcute-transfer-horizontal-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="M24 0v24H0V0zM12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M11.996 13v3a1 1 0 0 0 1 1h2v1.793c0 1.336 1.616 2.006 2.56 1.06l2.853-2.85h.002l1.94-1.94c.293-.293.44-.678.439-1.062c0-.384-.146-.768-.44-1.062L20.41 11h-.001l-2.852-2.851c-.945-.945-2.56-.276-2.56 1.06v1.793H14V11h-2V8.003a1 1 0 0 0-1-1H9V5.209c0-1.336-1.616-2.005-2.56-1.06L3.586 7h-.002l-1.94 1.94A1.5 1.5 0 0 0 1.205 10c0 .385.146.77.44 1.063l1.94 1.94h.001l2.852 2.85C7.384 16.8 9 16.13 9 14.794V13z"></svg:path></svg:g>`,
})
export class MingcuteTransferHorizontalFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteTransferVerticalFillIcon],svg[mingcute-transfer-vertical-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="M24 0v24H0V0zM12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M11 12H8a1 1 0 0 0-1 1v2H5.205c-1.336 0-2.005 1.615-1.06 2.56l2.85 2.852v.002l1.94 1.94a1.5 1.5 0 0 0 2.124 0l1.94-1.94v-.002l2.85-2.852c.945-.945.276-2.56-1.06-2.56h-1.793v-.997h.002v-2h2.998a1 1 0 0 0 1-1v-2h1.793c1.336 0 2.005-1.615 1.06-2.56L17 3.59v-.003l-1.94-1.94a1.5 1.5 0 0 0-1.062-.439c-.384 0-.769.146-1.062.44l-1.94 1.94v.002l-2.85 2.852c-.945.945-.276 2.56 1.06 2.56H11z"></svg:path></svg:g>`,
})
export class MingcuteTransferVerticalFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteTransformationFillIcon],svg[mingcute-transformation-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M20 10.5a1.5 1.5 0 0 1 1.493 1.356L21.5 12v4a4.5 4.5 0 0 1-4.288 4.495L17 20.5H4a1.5 1.5 0 0 1-1.162-2.45l.101-.11l3-3a1.5 1.5 0 0 1 2.225 2.007l-.103.114l-.44.439H17a1.5 1.5 0 0 0 1.493-1.356L18.5 16v-4a1.5 1.5 0 0 1 1.5-1.5m0-7a1.5 1.5 0 0 1 1.162 2.45l-.101.11l-3 3a1.5 1.5 0 0 1-2.225-2.007l.103-.114l.44-.439H7a1.5 1.5 0 0 0-1.493 1.356L5.5 8v4a1.5 1.5 0 0 1-2.993.144L2.5 12V8a4.5 4.5 0 0 1 4.288-4.495L7 3.5z"></svg:path></svg:g>`,
})
export class MingcuteTransformationFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteTranslate2AiFillIcon],svg[mingcute-translate-2-ai-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M9 2.5A1.5 1.5 0 0 1 10.5 4v.5h2a1.5 1.5 0 0 1 .928 2.678c-.237 1.942-1.053 3.802-2.329 5.442q.557.446 1.197.846l1.836-4.082a1.5 1.5 0 0 1 2.736 0l4.5 10a1.5 1.5 0 0 1-2.736 1.232L17.68 18.5h-4.36l-.952 2.116a1.5 1.5 0 0 1-2.736-1.232l1.423-3.162a16 16 0 0 1-2.057-1.445a16.6 16.6 0 0 1-4.441 2.616a1.5 1.5 0 1 1-1.114-2.786a13.6 13.6 0 0 0 3.459-1.986a12.2 12.2 0 0 1-1.512-2.515a1.5 1.5 0 1 1 2.745-1.212A9 9 0 0 0 9 10.414c.656-.935 1.101-1.925 1.327-2.914H4a1.5 1.5 0 1 1 0-3h3.5V4A1.5 1.5 0 0 1 9 2.5m6.5 11.155l-.83 1.845h1.66zM19 1a1 1 0 0 1 .946.677l.13.378a3 3 0 0 0 1.869 1.87l.378.129a1 1 0 0 1 0 1.892l-.378.13a3 3 0 0 0-1.87 1.869l-.129.378a1 1 0 0 1-1.892 0l-.13-.378a3 3 0 0 0-1.87-1.87l-.377-.129a1 1 0 0 1 0-1.892l.378-.13a3 3 0 0 0 1.87-1.869l.129-.378A1 1 0 0 1 19 1"></svg:path></svg:g>`,
})
export class MingcuteTranslate2AiFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteTranslate2FillIcon],svg[mingcute-translate-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M9 2.5a1.5 1.5 0 0 1 1.493 1.356L10.5 4v.5H14a1.5 1.5 0 0 1 .144 2.993L14 7.5h-.617c-.284 1.826-1.078 3.571-2.284 5.12q.419.333.882.643l.315.203l1.836-4.082a1.5 1.5 0 0 1 2.67-.13l.066.13l4.5 10a1.5 1.5 0 0 1-2.67 1.36l-.066-.128l-.952-2.116h-4.36l-.952 2.116a1.5 1.5 0 0 1-2.789-1.097l.053-.134l1.423-3.163a16 16 0 0 1-2.057-1.445a16.6 16.6 0 0 1-4.441 2.616a1.5 1.5 0 1 1-1.114-2.786a13.6 13.6 0 0 0 3.459-1.986a12.2 12.2 0 0 1-1.512-2.515a1.5 1.5 0 1 1 2.745-1.212A9 9 0 0 0 9 10.414c.583-.831 1-1.706 1.244-2.584l.083-.33H4a1.5 1.5 0 0 1-.145-2.993L4 4.5h3.5V4A1.5 1.5 0 0 1 9 2.5m6.5 11.155l-.83 1.845h1.66z"></svg:path></svg:g>`,
})
export class MingcuteTranslate2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteTranslateFillIcon],svg[mingcute-translate-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M17 10.5a1.5 1.5 0 0 1 1.493 1.356L18.5 12v.5h1a2 2 0 0 1 1.995 1.85l.005.15v3a2 2 0 0 1-1.85 1.995l-.15.005h-1v.5a1.5 1.5 0 0 1-2.993.144L15.5 20v-.5h-1a2 2 0 0 1-1.995-1.85l-.005-.15v-3a2 2 0 0 1 1.85-1.995l.15-.005h1V12a1.5 1.5 0 0 1 1.5-1.5m-12 4A1.5 1.5 0 0 1 6.5 16v1a.5.5 0 0 0 .5.5h3a1.5 1.5 0 0 1 0 3H7A3.5 3.5 0 0 1 3.5 17v-1A1.5 1.5 0 0 1 5 14.5m10.5.5h-1v2h1zm4 0h-1v2h1zM9.5 2.5a1.5 1.5 0 0 1 0 3h-4v1H9a1.5 1.5 0 1 1 0 3H5.5v1H10a1.5 1.5 0 0 1 0 3H4.1a1.6 1.6 0 0 1-1.6-1.6V4.1a1.6 1.6 0 0 1 1.6-1.6zm7.5 1A3.5 3.5 0 0 1 20.5 7v2a1.5 1.5 0 0 1-3 0V7a.5.5 0 0 0-.5-.5h-3a1.5 1.5 0 0 1 0-3z"></svg:path></svg:g>`,
})
export class MingcuteTranslateFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteTree2FillIcon],svg[mingcute-tree-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M4 10.5C4 5.872 7.518 2 12 2s8 3.872 8 8.5c0 4.278-3.006 7.91-7 8.435V21a1 1 0 1 1-2 0v-2.065c-3.994-.525-7-4.157-7-8.435m8 6.5q.51 0 1-.09v-2.59l2.314-3.239a1 1 0 1 0-1.628-1.162l-1.814 2.54l-1.165-1.166a1 1 0 0 0-1.414 1.414L11 14.414v2.495q.49.09 1 .091"></svg:path></svg:g>`,
})
export class MingcuteTree2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteTree3FillIcon],svg[mingcute-tree-3-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M9.479 3.04C10.259 2.479 11.167 2 12 2s1.74.479 2.521 1.04c.83.596 1.703 1.423 2.5 2.385C18.587 7.319 20 9.916 20 12.5c0 2.46-1.217 4.137-2.846 5.152c-1.266.79-2.77 1.18-4.154 1.303V21a1 1 0 1 1-2 0v-2.045c-1.384-.124-2.888-.514-4.154-1.303C5.217 16.637 4 14.96 4 12.5c0-2.584 1.412-5.18 2.98-7.075c.795-.962 1.67-1.79 2.499-2.385M12 17a9 9 0 0 0 1-.055V14.32l2.314-3.239a1 1 0 1 0-1.628-1.162l-1.814 2.54l-1.165-1.166a1 1 0 0 0-1.414 1.414L11 14.414v2.531A9 9 0 0 0 12 17"></svg:path></svg:g>`,
})
export class MingcuteTree3FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteTree4FillIcon],svg[mingcute-tree-4-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M12.618 5.004q.141.245.243.51c1.385-.737 2.916-.834 4.248-.322c2.13.82 3.456 3.082 2.872 6.004a1 1 0 0 1-1.352.733l-4.724-1.89c.635 2.269.7 4.578.593 6.395a25 25 0 0 1-.526 3.8A1.02 1.02 0 0 1 13 21h-2.5a1 1 0 0 1-.895-1.446c.454-.91.754-1.92.984-2.906c.38-1.629.596-3.7.108-5.78l-5.417 3.48a1 1 0 0 1-1.53-.703c-.376-2.693.716-5.091 2.57-6.352q.128-.087.26-.167l-1.916-.684a1 1 0 0 1-.371-1.649C6.046 3.04 8.438 2.55 10.316 3.176c.946.316 1.787.926 2.302 1.828"></svg:path></svg:g>`,
})
export class MingcuteTree4FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteTreeFillIcon],svg[mingcute-tree-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M12.707 2.293a1 1 0 0 0-1.414 0l-4 4a1 1 0 0 0-.175 1.178c.247.463.633.775 1.01.987l-2.835 2.835a1 1 0 0 0 0 1.414c.478.478 1.082.77 1.634.952l-2.634 2.634a1 1 0 0 0 .396 1.657c.69.227 1.403.388 2.115.53c.78.157 1.746.312 2.845.412l-.598 1.792A1 1 0 0 0 10 22h4a1 1 0 0 0 .949-1.316l-.598-1.792c1.1-.1 2.066-.255 2.845-.411c.712-.143 1.43-.304 2.12-.532a1 1 0 0 0 .391-1.656l-2.634-2.634c.552-.181 1.156-.474 1.634-.952a1 1 0 0 0 0-1.414l-2.835-2.835c.377-.212.763-.524 1.01-.987a1 1 0 0 0-.175-1.178z"></svg:path></svg:g>`,
})
export class MingcuteTreeFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteTrelloBoardFillIcon],svg[mingcute-trello-board-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="M0 0h24v24H0z"></svg:path><svg:path fill="currentColor" d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zM9.5 6h-2a1.5 1.5 0 0 0-1.493 1.356L6 7.5v8a1.5 1.5 0 0 0 1.356 1.493L7.5 17h2a1.5 1.5 0 0 0 1.493-1.356L11 15.5v-8a1.5 1.5 0 0 0-1.356-1.493zm7 0h-2A1.5 1.5 0 0 0 13 7.5v3a1.5 1.5 0 0 0 1.5 1.5h2a1.5 1.5 0 0 0 1.5-1.5v-3A1.5 1.5 0 0 0 16.5 6"></svg:path></svg:g>`,
})
export class MingcuteTrelloBoardFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteTrendingDownFillIcon],svg[mingcute-trending-down-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="M24 0v24H0V0zM12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M17.379 15.5H17a1.5 1.5 0 0 0 0 3h4a1.5 1.5 0 0 0 1.5-1.5v-4a1.5 1.5 0 0 0-3 0v.379l-4.44-4.44a1.5 1.5 0 0 0-2.12 0L9.5 12.38L4.06 6.94a1.5 1.5 0 1 0-2.12 2.122l6.5 6.5a1.5 1.5 0 0 0 2.12 0L14 12.12l3.379 3.379Z"></svg:path></svg:g>`,
})
export class MingcuteTrendingDownFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteTrendingUpFillIcon],svg[mingcute-trending-up-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="M24 0v24H0V0zM12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M17 5.5a1.5 1.5 0 0 0 0 3h.379L14 11.879l-3.44-3.44a1.5 1.5 0 0 0-2.12 0l-6.5 6.5a1.5 1.5 0 0 0 2.12 2.122l5.44-5.44l3.44 3.44a1.5 1.5 0 0 0 2.12 0l4.44-4.44V11a1.5 1.5 0 0 0 3 0V7A1.5 1.5 0 0 0 21 5.5z"></svg:path></svg:g>`,
})
export class MingcuteTrendingUpFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteTriangleFillIcon],svg[mingcute-triangle-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M10.7 3.148a1.5 1.5 0 0 1 2.599 0l8.634 14.954a1.5 1.5 0 0 1-1.299 2.25H3.366a1.5 1.5 0 0 1-1.299-2.25l8.634-14.954Z"></svg:path></svg:g>`,
})
export class MingcuteTriangleFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteTriumphalArchFillIcon],svg[mingcute-triumphal-arch-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M4 5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2a1 1 0 1 1 0 2v3a1 1 0 1 1 0 2v4a1 1 0 1 1 0 2h-6a1 1 0 1 1 0-2v-4a2 2 0 1 0-4 0v4a1 1 0 1 1 0 2H4a1 1 0 1 1 0-2v-4a1 1 0 1 1 0-2V9a1 1 0 0 1 0-2zm14 2v1H6V7z"></svg:path></svg:g>`,
})
export class MingcuteTriumphalArchFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteTrophyFillIcon],svg[mingcute-trophy-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M16.617 3a2 2 0 0 1 1.985 1.752L18.758 6h.668a2.29 2.29 0 0 1 2.246 2.74l-.201 1.005a4.05 4.05 0 0 1-2.972 3.13a7.18 7.18 0 0 1-5.5 4.056V19h3a1 1 0 1 1 0 2H8a1 1 0 1 1 0-2h3v-2.069a7.18 7.18 0 0 1-5.498-4.056a4.05 4.05 0 0 1-2.972-3.13l-.201-1.006A2.29 2.29 0 0 1 4.574 6h.668l.156-1.248A2 2 0 0 1 7.383 3zm2.81 5h-.42l.117.93q.075.61.05 1.203q.197-.276.294-.61l.042-.17l.2-1.006a.29.29 0 0 0-.217-.34zM4.991 8h-.418a.29.29 0 0 0-.285.347l.201 1.005c.058.289.174.553.336.78q-.025-.592.05-1.202z"></svg:path></svg:g>`,
})
export class MingcuteTrophyFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteTrouserFillIcon],svg[mingcute-trouser-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M7.895 2a2 2 0 0 0-1.988 1.78L5.883 4h12.234l-.024-.22A2 2 0 0 0 16.105 2zm10.444 4H5.66L4.13 19.78A2 2 0 0 0 6.116 22h3.08a2 2 0 0 0 1.953-1.566L12 13.61l.85 6.824A2 2 0 0 0 14.802 22h3.08a2 2 0 0 0 1.988-2.22L18.34 6Z"></svg:path></svg:g>`,
})
export class MingcuteTrouserFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteTruckFillIcon],svg[mingcute-truck-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M15 4a2 2 0 0 1 2 2v1h1.52a2 2 0 0 1 1.561.75l1.48 1.851a2 2 0 0 1 .439 1.25V15a2 2 0 0 1-2 2h-1a3 3 0 1 1-6 0h-3a3 3 0 1 1-6 0a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zM7 16a1 1 0 1 0 0 2a1 1 0 0 0 0-2m9 0a1 1 0 1 0 0 2a1 1 0 0 0 0-2m2.52-7H17v4h3v-2.15z"></svg:path></svg:g>`,
})
export class MingcuteTruckFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteTrunkFillIcon],svg[mingcute-trunk-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="m19.668 7.248l-.617-.411l-1.82 1.365a45 45 0 0 1 1.48 1.338c.218.207.56.307.826.436a3.5 3.5 0 0 1 1.963 3.145V15a3.5 3.5 0 0 1-3.5 3.5h-1.837a3.5 3.5 0 0 1-6.326 0H3v-3h6.837a3.5 3.5 0 0 1 6.326 0H18a.5.5 0 0 0 .5-.5v-1.88a.5.5 0 0 0-.28-.45c-.557-.271-1.117-.52-1.573-.953A41 41 0 0 0 14.6 9.906c-.87-.715-1.745-1.607-2.874-1.883c-.99-.243-2.032-.31-3.046-.38a68 68 0 0 0-5.651-.131l-.058-3c1.882-.036 4.054.01 5.917.139c1.432.099 3.139.124 4.456.767c.467.228.959.53 1.445.865l2.745-2.058a2.5 2.5 0 0 1 2.887-.08l.911.607a1.5 1.5 0 1 1-1.664 2.496M13 16.5a.5.5 0 1 0 0 1a.5.5 0 0 0 0-1"></svg:path></svg:g>`,
})
export class MingcuteTrunkFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteTunnelFillIcon],svg[mingcute-tunnel-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M12 19.5a1 1 0 0 1 .993.883L13 20.5v.5a1 1 0 0 1-1.993.117L11 21v-.5a1 1 0 0 1 1-1M12 2a8 8 0 0 1 7.996 7.75L20 10v11a1 1 0 0 1-1.696.718l-.085-.093L14.52 17h-1.653q.097.166.125.366L13 17.5v.5a1 1 0 0 1-1.993.117L11 18v-.5q.001-.207.077-.385l.057-.115H9.48l-3.7 4.625a1 1 0 0 1-1.773-.5L4 21V10a8 8 0 0 1 8-8m0 8a2 2 0 0 0-2 2v3h4v-3a2 2 0 0 0-2-2"></svg:path></svg:g>`,
})
export class MingcuteTunnelFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteTv1FillIcon],svg[mingcute-tv-1-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M16 19a1 1 0 0 1 .117 1.993L16 21H8a1 1 0 0 1-.117-1.993L8 19zm4-15a2 2 0 0 1 1.995 1.85L22 6v10a2 2 0 0 1-1.85 1.995L20 18H4a2 2 0 0 1-1.995-1.85L2 16V6a2 2 0 0 1 1.85-1.995L4 4z"></svg:path></svg:g>`,
})
export class MingcuteTv1FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteTv2FillIcon],svg[mingcute-tv-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M16.95 4.007a1 1 0 0 0-1.414-1.414l-3.89 3.889a.5.5 0 0 1-.707 0L8.464 4.007A1 1 0 0 0 7.05 5.42l1.414 1.414q.086.086.175.165H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-5.053a5 5 0 0 0 .174-.165z"></svg:path></svg:g>`,
})
export class MingcuteTv2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteTvToweFillIcon],svg[mingcute-tv-towe-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M12 1a1 1 0 0 1 1 1v2.17a3 3 0 0 1 1.085 4.987l.785 2.748A5 5 0 0 1 17 16a4.97 4.97 0 0 1-.895 2.855l1.727 2.59a1 1 0 0 1-1.664 1.11l-1.535-2.303A5 5 0 0 1 13 20.9V22a1 1 0 1 1-2 0v-1.1a5 5 0 0 1-1.632-.648l-1.536 2.303a1 1 0 0 1-1.664-1.11l1.727-2.59A5 5 0 0 1 7 16c0-1.693.842-3.19 2.13-4.095l.785-2.748A3 3 0 0 1 11 4.171V2a1 1 0 0 1 1-1m-.243 8.99l-.296 1.039a5 5 0 0 1 1.079 0l-.297-1.039a3 3 0 0 1-.486 0m2.84 4.506c-.714.25-1.68.504-2.597.504c-.916 0-1.883-.254-2.596-.504a3.02 3.02 0 0 0-.365 1.987c.79.256 1.86.517 2.961.517c1.102 0 2.17-.26 2.961-.517a3.02 3.02 0 0 0-.365-1.987Z"></svg:path></svg:g>`,
})
export class MingcuteTvToweFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteTwitterFillIcon],svg[mingcute-twitter-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M4.594 4.984a1 1 0 0 1 .941.429C7.011 7.572 8.783 8.47 10.75 8.674c.096-.841.323-1.672.75-2.404c.626-1.074 1.644-1.864 3.098-2.156c2.01-.404 3.54.324 4.427 1.215l1.792-.335a1 1 0 0 1 1.053 1.478l-1.72 3.022c.157 4.361-1.055 7.405-3.639 9.502c-1.37 1.112-3.332 1.743-5.485 1.938c-2.17.196-4.623-.041-7.061-.753a1 1 0 0 1 .007-1.922c1.226-.349 2.16-.65 3.003-1.177c-1.199-.636-2.082-1.468-2.707-2.416c-.868-1.318-1.19-2.788-1.254-4.113S3.141 8 3.343 7.115c.115-.505.249-1.011.434-1.495a1 1 0 0 1 .818-.636Z"></svg:path></svg:g>`,
})
export class MingcuteTwitterFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteTyphoonFillIcon],svg[mingcute-typhoon-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M20 12c0 5.523-4.477 10-10 10a9.97 9.97 0 0 1-6.322-2.251l-.985-.805c-.455-.372-.16-1.108.425-1.063l1.268.096c.72.054 1.464.01 2.159-.126A7.98 7.98 0 0 1 4 12C4 6.477 8.478 2 14 2c2.397 0 4.6.844 6.323 2.252l.985.804c.455.372.16 1.108-.425 1.063l-1.268-.096a8.2 8.2 0 0 0-2.159.126A7.98 7.98 0 0 1 20 12m-8 3a3 3 0 1 0 0-6a3 3 0 0 0 0 6"></svg:path></svg:g>`,
})
export class MingcuteTyphoonFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteTyreFillIcon],svg[mingcute-tyre-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M7.587 2.27q.162-.075.33-.144l.345-.135c1.643-.607 3.812-.878 7.48.039c1.639.41 2.87 1.684 3.668 3.12C20.412 6.954 21 9.378 21 12c0 2.623-.588 5.046-1.59 6.85c-.799 1.436-2.03 2.71-3.668 3.12c-3.668.917-5.837.646-7.48.04l-.344-.136a11 11 0 0 1-.33-.143c-1.397-.633-2.538-1.974-3.322-3.638C3.473 16.41 3 14.309 3 12s.473-4.41 1.266-6.093C5.05 4.243 6.19 2.902 7.587 2.27M15 4c-.853 0-1.835.634-2.661 2.122C11.53 7.576 11 9.652 11 12s.53 4.424 1.339 5.878C13.165 19.366 14.147 20 15 20s1.835-.634 2.661-2.122C18.47 16.424 19 14.348 19 12s-.53-4.424-1.339-5.878C16.835 4.634 15.853 4 15 4m0 4.5c.706 0 1.21.559 1.508 1.155c.313.626.492 1.456.492 2.345s-.18 1.719-.492 2.345c-.298.596-.802 1.155-1.508 1.155s-1.21-.559-1.508-1.155C13.18 13.719 13 12.889 13 12s.18-1.719.492-2.345C13.79 9.06 14.294 8.5 15 8.5"></svg:path></svg:g>`,
})
export class MingcuteTyreFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteUfo2FillIcon],svg[mingcute-ufo-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M19.527 8.206a13 13 0 0 0-1.91-1.267a5.38 5.38 0 0 0-3.754-3.624l-.065-.017a5.38 5.38 0 0 0-5.062 1.261a13 13 0 0 0-2.288.142c-.963.152-1.848.43-2.558.864c-.716.437-1.303 1.067-1.53 1.915s-.034 1.687.367 2.424c.398.73 1.026 1.414 1.784 2.027c1.518 1.227 3.71 2.296 6.214 2.967c2.503.67 4.936.841 6.865.537c.962-.152 1.847-.43 2.557-.863c.716-.438 1.304-1.068 1.53-1.916c.228-.847.034-1.687-.367-2.424c-.398-.73-1.025-1.413-1.783-2.026M13.28 5.23a3.38 3.38 0 0 0-3.582 1.24c-.538.72-.303 1.473.233 1.742a12.4 12.4 0 0 0 4.824 1.292c.598.036 1.179-.5 1.073-1.391a3.38 3.38 0 0 0-2.483-2.866zm2.712 11.646a1 1 0 0 0-1.984.248l.1.8a1 1 0 0 0 1.984-.248zm-8.118-.89a1 1 0 1 0-1.748-.972l-.5.9a1 1 0 0 0 1.748.971zm8.519 4.09a1 1 0 1 0-1.985.248l.1.8a1 1 0 1 0 1.985-.248zm-10.518-.49a1 1 0 0 0-1.748-.971l-.5.9a1 1 0 1 0 1.748.97z"></svg:path></svg:g>`,
})
export class MingcuteUfo2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteUfoFillIcon],svg[mingcute-ufo-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M20.214 13.829c.933.591 1.786 1.5 1.786 2.671c0 1.574-1.426 2.588-2.76 3.191l-.345.149l-.169.067C16.956 20.596 14.577 21 12 21s-4.956-.404-6.726-1.093l-.17-.067l-.344-.149C3.426 19.088 2 18.074 2 16.5c0-1.172.853-2.08 1.786-2.671c.295.182.634.374 1.017.565C6.425 15.206 8.827 16 12 16s5.575-.794 7.197-1.606c.383-.19.722-.383 1.017-.565M12 3a1.5 1.5 0 0 1 1 2.618v1.453a7.01 7.01 0 0 1 5.802 5.27l-.356.192C17.071 13.245 14.927 14 12 14s-5.07-.755-6.446-1.467l-.356-.193A7.01 7.01 0 0 1 11 7.07V5.619A1.5 1.5 0 0 1 12 3"></svg:path></svg:g>`,
})
export class MingcuteUfoFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteUmbrella2FillIcon],svg[mingcute-umbrella-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M17 3.34a1 1 0 0 1 .366 1.366l-.027.047a9.004 9.004 0 0 1 2.956 10.741c-.482 1.14-1.81 1.405-2.733.872l-5.186-2.994L9.21 19H20a1 1 0 1 1 0 2H4a1 1 0 0 1 0-2h2.915l3.729-6.628l-5.206-3.006c-.924-.533-1.358-1.816-.611-2.803a9.004 9.004 0 0 1 10.78-2.81l.027-.047A1 1 0 0 1 17 3.34"></svg:path></svg:g>`,
})
export class MingcuteUmbrella2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteUmbrellaFillIcon],svg[mingcute-umbrella-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M13 3a1 1 0 1 0-2 0v.056a9 9 0 0 0-7.996 8.663A1.244 1.244 0 0 0 4.25 13H11v6a3 3 0 1 0 6 0v-1a1 1 0 1 0-2 0v1a1 1 0 1 1-2 0v-6h6.75c.682 0 1.268-.559 1.245-1.281A9 9 0 0 0 13 3.056z"></svg:path></svg:g>`,
})
export class MingcuteUmbrellaFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteUnarchiveFillIcon],svg[mingcute-unarchive-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M6 3.586A2 2 0 0 1 7.414 3h9.172A2 2 0 0 1 18 3.586L20.414 6a2 2 0 0 1 .543 1H3.043a2 2 0 0 1 .543-1zM3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zm8 9a1 1 0 1 0 2 0v-3.186l.414.414a1 1 0 1 0 1.414-1.414l-2.12-2.121a1 1 0 0 0-1.415 0l-2.121 2.121a1 1 0 1 0 1.414 1.414l.414-.414z"></svg:path></svg:g>`,
})
export class MingcuteUnarchiveFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteUnderlineFillIcon],svg[mingcute-underline-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M18 18.5a1.5 1.5 0 0 1 .144 2.993L18 21.5H6a1.5 1.5 0 0 1-.144-2.993L6 18.5zm-1-16a1.5 1.5 0 0 1 1.493 1.356L18.5 4v7a6.5 6.5 0 0 1-12.996.233L5.5 11V4a1.5 1.5 0 0 1 2.993-.144L8.5 4v7a3.5 3.5 0 0 0 6.995.192L15.5 11V4A1.5 1.5 0 0 1 17 2.5"></svg:path></svg:g>`,
})
export class MingcuteUnderlineFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteUnfoldHorizontalFillIcon],svg[mingcute-unfold-horizontal-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M13 4a1 1 0 0 0-2 0v1a1 1 0 1 0 2 0zm0 5a1 1 0 0 0-2 0v1a1 1 0 1 0 2 0zm-1 4a1 1 0 0 1 1 1v1a1 1 0 0 1-2 0v-1a1 1 0 0 1 1-1m1 6a1 1 0 0 0-2 0v1a1 1 0 1 0 2 0zm-6.207-8.5l.268-.268a1.5 1.5 0 0 0-2.122-2.121l-2.828 2.828a1.5 1.5 0 0 0 0 2.122l2.828 2.828a1.5 1.5 0 1 0 2.122-2.121l-.268-.268H8a1.5 1.5 0 0 0 0-3zM14.5 12a1.5 1.5 0 0 1 1.5-1.5h1.207l-.268-.268a1.5 1.5 0 1 1 2.122-2.121l2.828 2.828a1.5 1.5 0 0 1 0 2.122l-2.828 2.828a1.5 1.5 0 1 1-2.122-2.121l.268-.268H16a1.5 1.5 0 0 1-1.5-1.5"></svg:path></svg:g>`,
})
export class MingcuteUnfoldHorizontalFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteUnfoldVerticalFillIcon],svg[mingcute-unfold-vertical-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M4 11a1 1 0 1 0 0 2h1a1 1 0 0 0 0-2zm5 0a1 1 0 1 0 0 2h1a1 1 0 0 0 0-2zm4 1a1 1 0 0 1 1-1h1a1 1 0 1 1 0 2h-1a1 1 0 0 1-1-1m6-1a1 1 0 1 0 0 2h1a1 1 0 0 0 0-2zm-8.5 6.207l-.268-.268a1.5 1.5 0 1 0-2.121 2.122l2.828 2.828a1.5 1.5 0 0 0 2.122 0l2.828-2.828a1.5 1.5 0 1 0-2.121-2.122l-.268.268V16a1.5 1.5 0 1 0-3 0zM12 9.5A1.5 1.5 0 0 1 10.5 8V6.793l-.268.268a1.5 1.5 0 0 1-2.121-2.122l2.828-2.828a1.5 1.5 0 0 1 2.122 0l2.828 2.828a1.5 1.5 0 1 1-2.121 2.122l-.268-.268V8A1.5 1.5 0 0 1 12 9.5"></svg:path></svg:g>`,
})
export class MingcuteUnfoldVerticalFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteUnhappyDizzyFillIcon],svg[mingcute-unhappy-dizzy-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2m0 12a4.98 4.98 0 0 0-3.308 1.25a1 1 0 1 0 1.324 1.5A3 3 0 0 1 12 16c.761 0 1.455.282 1.984.75a1 1 0 1 0 1.324-1.5A4.98 4.98 0 0 0 12 14M8.707 8.293a1 1 0 0 0-1.497 1.32l.083.094l.293.293l-.293.293a1 1 0 0 0 1.32 1.497l.094-.083l.293-.293l.293.293a1 1 0 0 0 1.497-1.32l-.083-.094l-.293-.293l.293-.293a1 1 0 0 0-1.32-1.497l-.094.083L9 8.586zm4.586 0a1 1 0 0 0 0 1.414l.293.293l-.293.293a1 1 0 0 0 1.414 1.414l.293-.293l.293.293a1 1 0 0 0 1.414-1.414L16.414 10l.293-.293a1 1 0 0 0-1.414-1.414L15 8.586l-.293-.293a1 1 0 0 0-1.414 0"></svg:path></svg:g>`,
})
export class MingcuteUnhappyDizzyFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteUnhappyFillIcon],svg[mingcute-unhappy-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2m0 12a4.98 4.98 0 0 0-3.308 1.25a1 1 0 1 0 1.324 1.5A3 3 0 0 1 12 16c.761 0 1.455.282 1.984.75a1 1 0 1 0 1.324-1.5A4.98 4.98 0 0 0 12 14M9.164 9.45l-.058.102c-.162.324-.41.448-.606.448c-.17 0-.382-.095-.541-.336l-.065-.112a1 1 0 1 0-1.788.896C6.542 11.32 7.413 12 8.5 12s1.957-.68 2.394-1.552a1 1 0 0 0-1.73-.997Zm8.284-.344a1 1 0 0 0-1.284.345l-.058.101c-.162.324-.41.448-.606.448c-.17 0-.382-.095-.541-.336l-.065-.112a1 1 0 1 0-1.788.896C13.543 11.32 14.413 12 15.5 12s1.957-.68 2.394-1.552a1 1 0 0 0-.446-1.342"></svg:path></svg:g>`,
})
export class MingcuteUnhappyFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteUnionFillIcon],svg[mingcute-union-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M3 5a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v3h3a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-9a2 2 0 0 1-2-2v-3H5a2 2 0 0 1-2-2z"></svg:path></svg:g>`,
})
export class MingcuteUnionFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteUnlink2FillIcon],svg[mingcute-unlink-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M8 17.5a1.5 1.5 0 0 1 1.493 1.356L9.5 19v2a1.5 1.5 0 0 1-2.993.144L6.5 21v-2A1.5 1.5 0 0 1 8 17.5m8.245-7.62a1.5 1.5 0 0 1 2.007-.102l.114.102l1.766 1.766a6 6 0 0 1-8.302 8.661l-.183-.175l-1.766-1.766a1.5 1.5 0 0 1 2.007-2.225l.114.103l1.766 1.766a3 3 0 0 0 4.378-4.098l-.135-.144l-1.766-1.766a1.5 1.5 0 0 1 0-2.122M5 15.5a1.5 1.5 0 0 1 .145 2.993L5 18.5H4a1.5 1.5 0 0 1-.144-2.993L4 15.5zm3.818-6.682a1.5 1.5 0 0 1 2.007-.103l.114.103l4.243 4.243a1.5 1.5 0 0 1-2.007 2.224l-.114-.103l-4.243-4.243a1.5 1.5 0 0 1 0-2.121m-4.95-4.95a6 6 0 0 1 8.303-.175l.183.175l1.77 1.77a1.5 1.5 0 0 1-2.008 2.224l-.114-.103l-1.77-1.77a3 3 0 0 0-4.377 4.1l.135.143l1.77 1.77a1.5 1.5 0 0 1-2.008 2.224l-.114-.103l-1.77-1.77a6 6 0 0 1 0-8.485M20 5.5a1.5 1.5 0 0 1 0 3h-1a1.5 1.5 0 1 1 0-3zm-4-4a1.5 1.5 0 0 1 1.493 1.356L17.5 3v2a1.5 1.5 0 0 1-2.993.144L14.5 5V3A1.5 1.5 0 0 1 16 1.5"></svg:path></svg:g>`,
})
export class MingcuteUnlink2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteUnlinkFillIcon],svg[mingcute-unlink-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="m17.303 9.524l3.182 3.182a5.5 5.5 0 0 1-7.778 7.778l-1.06-1.06a1.5 1.5 0 1 1 2.12-2.122l1.061 1.061a2.5 2.5 0 1 0 3.536-3.535l-3.182-3.182a2.5 2.5 0 0 0-2.682-.56a8 8 0 0 0-.453.195l-.464.217c-.62.28-1.098.4-1.705-.206c-.872-.872-.645-1.677.418-2.41a5.5 5.5 0 0 1 7.007.642M8 16.5a1.5 1.5 0 0 1 1.493 1.356L9.5 18v2a1.5 1.5 0 0 1-2.993.144L6.5 20v-2A1.5 1.5 0 0 1 8 16.5m-3-2a1.5 1.5 0 0 1 .144 2.993L5 17.5H4a1.5 1.5 0 0 1-.145-2.993L4 14.5zm6.293-10.986l1.06 1.06a1.5 1.5 0 1 1-2.121 2.122l-1.06-1.06A2.5 2.5 0 1 0 5.635 9.17l3.182 3.182a2.5 2.5 0 0 0 2.681.56q.241-.096.454-.196l.463-.216c.62-.281 1.098-.402 1.705.205c.872.872.646 1.678-.418 2.411a5.5 5.5 0 0 1-7.007-.643l-3.182-3.182a5.5 5.5 0 1 1 7.779-7.778ZM20 6.5a1.5 1.5 0 0 1 0 3h-1a1.5 1.5 0 0 1 0-3zm-4-4a1.5 1.5 0 0 1 1.493 1.356L17.5 4v2a1.5 1.5 0 0 1-2.993.144L14.5 6V4A1.5 1.5 0 0 1 16 2.5"></svg:path></svg:g>`,
})
export class MingcuteUnlinkFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteUnlockFillIcon],svg[mingcute-unlock-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M12 2c1.091 0 2.117.292 3 .804a1 1 0 1 1-1 1.73A4 4 0 0 0 8 8l11 .001a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2h1a6 6 0 0 1 6-6m0 10a2 2 0 0 0-1 3.732V17a1 1 0 1 0 2 0v-1.268A2 2 0 0 0 12 12m7.918-6.979l.966.26a1 1 0 0 1-.518 1.93l-.965-.258a1 1 0 0 1 .517-1.932M18.633 2.09a1 1 0 0 1 .707 1.225l-.129.482a1 1 0 1 1-1.932-.517l.13-.483a1 1 0 0 1 1.224-.707"></svg:path></svg:g>`,
})
export class MingcuteUnlockFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteUpFillIcon],svg[mingcute-up-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M10.94 7.94a1.5 1.5 0 0 1 2.12 0l5.658 5.656a1.5 1.5 0 1 1-2.122 2.121L12 11.122l-4.596 4.596a1.5 1.5 0 1 1-2.122-2.12z"></svg:path></svg:g>`,
})
export class MingcuteUpFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteUpSmallFillIcon],svg[mingcute-up-small-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="M24 0v24H0V0zM12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M11.293 9.464a1 1 0 0 1 1.414 0l2.829 2.829A1 1 0 0 1 14.828 14H9.172a1 1 0 0 1-.708-1.707z"></svg:path></svg:g>`,
})
export class MingcuteUpSmallFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteUpload2FillIcon],svg[mingcute-upload-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M20 14.5a1.5 1.5 0 0 1 1.5 1.5v4a2.5 2.5 0 0 1-2.5 2.5H5A2.5 2.5 0 0 1 2.5 20v-4a1.5 1.5 0 0 1 3 0v3.5h13V16a1.5 1.5 0 0 1 1.5-1.5M13.237 3.12l4.066 4.067a1.5 1.5 0 1 1-2.121 2.121L13.5 7.626V16a1.5 1.5 0 0 1-3 0V7.626L8.818 9.308a1.5 1.5 0 1 1-2.121-2.121l4.066-4.066a1.75 1.75 0 0 1 2.474 0Z"></svg:path></svg:g>`,
})
export class MingcuteUpload2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteUpload3FillIcon],svg[mingcute-upload-3-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M11.117 9.473a1.25 1.25 0 0 1 1.665-.09l.101.09l2.824 2.82a1 1 0 0 1-1.32 1.498l-.094-.083L13 12.416V21a1 1 0 0 1-1.993.117L11 21v-8.584l-1.293 1.292a1 1 0 0 1-1.497-1.321l.083-.095zM11.5 2c2.784 0 5.16 1.75 6.086 4.212a6 6 0 0 1-1.36 11.784L16 18h-1v-2a3 3 0 0 0 2.255-4.979l-.135-.144l-2.824-2.819a3.25 3.25 0 0 0-4.448-.135l-.144.135l-2.824 2.82a3 3 0 0 0 1.91 5.115L9 16v2H7a5 5 0 0 1-2-9.584A6.5 6.5 0 0 1 11.5 2"></svg:path></svg:g>`,
})
export class MingcuteUpload3FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteUploadFillIcon],svg[mingcute-upload-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M11 9v6a1 1 0 0 0 1.993.117L13 15V9h6a2 2 0 0 1 1.995 1.85L21 11v9a2 2 0 0 1-1.85 1.995L19 22H5a2 2 0 0 1-1.995-1.85L3 20v-9a2 2 0 0 1 1.85-1.995L5 9zm1.884-6.531l3.359 3.358a1 1 0 1 1-1.415 1.415L13 5.413V9h-2V5.413L9.172 7.242a1 1 0 1 1-1.415-1.415l3.36-3.358a1.25 1.25 0 0 1 1.767 0"></svg:path></svg:g>`,
})
export class MingcuteUploadFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteUsbFillIcon],svg[mingcute-usb-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M12 2a1 1 0 0 1 .78.375l2 2.5A1 1 0 0 1 14 6.5h-1v6.382l3-1.5V11a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v.382a2 2 0 0 1-1.106 1.789l-3.341 1.67a1 1 0 0 0-.553.895v.435a3.001 3.001 0 1 1-2.469.213L7.106 14.67A2 2 0 0 1 6 12.882v-1.15A2 2 0 0 1 7 8a2 2 0 0 1 1 3.732v1.15l3 1.5V6.5h-1a1 1 0 0 1-.78-1.625l2-2.5A1 1 0 0 1 12 2"></svg:path></svg:g>`,
})
export class MingcuteUsbFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteUsbFlashDiskFillIcon],svg[mingcute-usb-flash-disk-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M16 2a2 2 0 0 1 1.995 1.85L18 4v4h1a1 1 0 0 1 .993.883L20 9v7a5 5 0 0 1-4.783 4.995L15 21H9a5 5 0 0 1-4.995-4.783L4 16V9a1 1 0 0 1 .883-.993L5 8h1V4a2 2 0 0 1 1.85-1.995L8 2zm0 2H8v4h8zm-5 1v2H9V5zm4 0v2h-2V5z"></svg:path></svg:g>`,
})
export class MingcuteUsbFlashDiskFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteUsdCoinUsdcFillIcon],svg[mingcute-usd-coin-usdc-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M9.882 3.122a1.5 1.5 0 0 1-.798 1.965a7.503 7.503 0 0 0 0 13.825a1.5 1.5 0 1 1-1.168 2.764A10.5 10.5 0 0 1 1.5 12c0-4.353 2.649-8.084 6.416-9.676a1.5 1.5 0 0 1 1.966.798m6.202-.798A10.5 10.5 0 0 1 22.5 12c0 4.353-2.649 8.084-6.416 9.676a1.5 1.5 0 0 1-1.168-2.764a7.503 7.503 0 0 0 0-13.825a1.5 1.5 0 1 1 1.168-2.763M12 5.5A1.5 1.5 0 0 1 13.5 7H15a1.5 1.5 0 0 1 0 3h-1.5v.5h.25a3.25 3.25 0 0 1 0 6.5h-.25a1.5 1.5 0 0 1-3 0H9a1.5 1.5 0 0 1 0-3h1.5v-.5h-.25a3.25 3.25 0 0 1 0-6.5h.25A1.5 1.5 0 0 1 12 5.5m1.75 8h-.25v.5h.25a.25.25 0 1 0 0-.5M10.5 10h-.25a.25.25 0 1 0 0 .5h.25z"></svg:path></svg:g>`,
})
export class MingcuteUsdCoinUsdcFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteUser1FillIcon],svg[mingcute-user-1-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M16 13.5a5.5 5.5 0 0 1 5.5 5.5v1.5a1.5 1.5 0 0 1-3 0V19a2.5 2.5 0 0 0-2.5-2.5H8A2.5 2.5 0 0 0 5.5 19v1.5a1.5 1.5 0 0 1-3 0V19A5.5 5.5 0 0 1 8 13.5zm-4-12a5.5 5.5 0 1 1 0 11a5.5 5.5 0 0 1 0-11m0 3a2.5 2.5 0 1 0 0 5a2.5 2.5 0 0 0 0-5"></svg:path></svg:g>`,
})
export class MingcuteUser1FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteUser2FillIcon],svg[mingcute-user-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M16 14a5 5 0 0 1 4.995 4.783L21 19v1a2 2 0 0 1-1.85 1.995L19 22H5a2 2 0 0 1-1.995-1.85L3 20v-1a5 5 0 0 1 4.783-4.995L8 14zM12 2a5 5 0 1 1 0 10a5 5 0 0 1 0-10"></svg:path></svg:g>`,
})
export class MingcuteUser2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteUser3FillIcon],svg[mingcute-user-3-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M12 13c2.396 0 4.575.694 6.178 1.672c.8.488 1.484 1.064 1.978 1.69c.486.615.844 1.351.844 2.138c0 .845-.411 1.511-1.003 1.986c-.56.45-1.299.748-2.084.956c-1.578.417-3.684.558-5.913.558s-4.335-.14-5.913-.558c-.785-.208-1.524-.506-2.084-.956C3.41 20.01 3 19.345 3 18.5c0-.787.358-1.523.844-2.139c.494-.625 1.177-1.2 1.978-1.69C7.425 13.695 9.605 13 12 13m0-11a5 5 0 1 1 0 10a5 5 0 0 1 0-10"></svg:path></svg:g>`,
})
export class MingcuteUser3FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteUser4FillIcon],svg[mingcute-user-4-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10S17.523 2 12 2M8.5 9.5a3.5 3.5 0 1 1 7 0a3.5 3.5 0 0 1-7 0m9.758 7.484A7.99 7.99 0 0 1 12 20a7.99 7.99 0 0 1-6.258-3.016C7.363 15.821 9.575 15 12 15s4.637.821 6.258 1.984"></svg:path></svg:g>`,
})
export class MingcuteUser4FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteUser5FillIcon],svg[mingcute-user-5-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M9.586 15a2 2 0 0 1 1.284.467l.13.119l1 1l1-1a2 2 0 0 1 1.238-.578l.176-.008h4.024a3 3 0 0 1 2.862 2.1l.049.172l.466 1.864a1.5 1.5 0 0 1-1.324 1.858L20.36 21H3.64a1.5 1.5 0 0 1-1.481-1.735l.026-.129l.466-1.864a3 3 0 0 1 2.732-2.267L5.562 15zM12 2c.784 0 1.661.19 2.38.391c1.596.445 2.542 1.896 2.615 3.415l.005.19v4.007c0 1.588-.957 3.143-2.62 3.606c-.719.2-1.596.391-2.38.391s-1.661-.19-2.38-.391c-1.596-.445-2.542-1.896-2.615-3.415L7 10.004V5.996c0-1.587.957-3.143 2.62-3.606C10.339 2.191 11.216 2 12 2"></svg:path></svg:g>`,
})
export class MingcuteUser5FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteUserAdd2FillIcon],svg[mingcute-user-add-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M6 7a5 5 0 1 1 10 0A5 5 0 0 1 6 7m-1.178 7.672C6.425 13.694 8.605 13 11 13q.671 0 1.316.07a1 1 0 0 1 .72 1.557A5.97 5.97 0 0 0 12 18c0 .92.207 1.79.575 2.567a1 1 0 0 1-.89 1.428L11 22c-2.229 0-4.335-.14-5.913-.558c-.785-.208-1.524-.506-2.084-.956C2.41 20.01 2 19.345 2 18.5c0-.787.358-1.523.844-2.139c.494-.625 1.177-1.2 1.978-1.69ZM18 14a1 1 0 0 1 1 1v2h2a1 1 0 1 1 0 2h-2v2a1 1 0 1 1-2 0v-2h-2a1 1 0 1 1 0-2h2v-2a1 1 0 0 1 1-1"></svg:path></svg:g>`,
})
export class MingcuteUserAdd2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteUserAddFillIcon],svg[mingcute-user-add-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M16 14a5 5 0 0 1 5 5v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1a5 5 0 0 1 5-5zm4-6a1 1 0 0 1 1 1v1h1a1 1 0 1 1 0 2h-1v1a1 1 0 1 1-2 0v-1h-1a1 1 0 1 1 0-2h1V9a1 1 0 0 1 1-1m-8-6a5 5 0 1 1 0 10a5 5 0 0 1 0-10"></svg:path></svg:g>`,
})
export class MingcuteUserAddFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteUserEditFillIcon],svg[mingcute-user-edit-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M11 2a5 5 0 1 0 0 10a5 5 0 0 0 0-10m0 11q.887.002 1.724.12a1 1 0 0 1 .539 1.726a6.98 6.98 0 0 0-2.21 6.022a1 1 0 0 1-1.012 1.123c-2.01-.04-3.89-.216-5.294-.646c-.702-.215-1.364-.517-1.866-.962C2.35 19.913 2 19.28 2 18.5c0-.787.358-1.523.844-2.139c.494-.625 1.177-1.2 1.978-1.69C6.425 13.695 8.605 13 11 13m10.212 1.034a2.5 2.5 0 0 1 0 3.535l-3.418 3.418a1.5 1.5 0 0 1-.848.424l-2.309.33a1 1 0 0 1-1.132-1.133l.33-2.308a1.5 1.5 0 0 1 .424-.849l3.418-3.418a2.5 2.5 0 0 1 3.535 0Z"></svg:path></svg:g>`,
})
export class MingcuteUserEditFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteUserFollow2FillIcon],svg[mingcute-user-follow-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M11 2a5 5 0 1 0 0 10a5 5 0 0 0 0-10m0 11c-2.395 0-4.575.694-6.178 1.672c-.8.488-1.484 1.064-1.978 1.69C2.358 16.976 2 17.713 2 18.5c0 .845.411 1.511 1.003 1.986c.56.45 1.299.748 2.084.956C6.665 21.859 8.771 22 11 22q.346 0 .685-.005a1 1 0 0 0 .89-1.428A6 6 0 0 1 12 18c0-1.252.383-2.412 1.037-3.373a1 1 0 0 0-.72-1.557Q11.671 13 11 13m10.708 3.068a1 1 0 0 0-1.414-1.414l-3.182 3.182l-1.414-1.414a1 1 0 0 0-1.414 1.414l2.05 2.05a1.1 1.1 0 0 0 1.556 0z"></svg:path></svg:g>`,
})
export class MingcuteUserFollow2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteUserFollowFillIcon],svg[mingcute-user-follow-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M16 14a5 5 0 0 1 5 5v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1a5 5 0 0 1 5-5zm5.414-4.919a1 1 0 0 1 1.498 1.32l-.084.095L20 13.324a1 1 0 0 1-1.32.083l-.094-.083l-1.414-1.414a1 1 0 0 1 1.32-1.498l.094.084l.707.707zM12 2a5 5 0 1 1 0 10a5 5 0 0 1 0-10"></svg:path></svg:g>`,
})
export class MingcuteUserFollowFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteUserForbidFillIcon],svg[mingcute-user-forbid-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M6 7a5 5 0 1 1 10 0A5 5 0 0 1 6 7m-1.178 7.672C6.425 13.694 8.605 13 11 13q.671 0 1.316.07a1 1 0 0 1 .72 1.557A5.97 5.97 0 0 0 12 18c0 .92.207 1.79.575 2.567a1 1 0 0 1-.89 1.428Q11.345 22 11 22c-2.229 0-4.335-.14-5.913-.558c-.785-.208-1.524-.506-2.084-.956C2.41 20.01 2 19.345 2 18.5c0-.787.358-1.523.844-2.139c.494-.625 1.177-1.2 1.978-1.69Zm11.246 2.81a2 2 0 0 0 2.45 2.45zm1.414-1.414l2.45 2.45a2 2 0 0 0-2.45-2.45M14 18a4 4 0 1 1 8 0a4 4 0 0 1-8 0"></svg:path></svg:g>`,
})
export class MingcuteUserForbidFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteUserHeartFillIcon],svg[mingcute-user-heart-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M11 2a5 5 0 1 0 0 10a5 5 0 0 0 0-10m0 11c-2.395 0-4.575.694-6.178 1.672c-.8.488-1.484 1.064-1.978 1.69C2.358 16.976 2 17.713 2 18.5c0 .845.411 1.511 1.003 1.986c.56.45 1.299.748 2.084.956C6.665 21.859 8.771 22 11 22l.685-.005a1 1 0 0 0 .89-1.428A6 6 0 0 1 12 18c0-1.252.383-2.412 1.037-3.373a1 1 0 0 0-.72-1.557Q11.671 13 11 13m4.5 1.691c.753-.439 1.679-.496 2.5-.046c.821-.45 1.747-.393 2.5.046c.916.534 1.526 1.59 1.5 2.788c-.036 1.57-1.248 2.798-2.886 3.771c-.343.203-.703.417-1.114.417c-.41 0-.771-.214-1.114-.417c-1.638-.973-2.85-2.202-2.885-3.77c-.027-1.198.583-2.255 1.499-2.789"></svg:path></svg:g>`,
})
export class MingcuteUserHeartFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteUserHideFillIcon],svg[mingcute-user-hide-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M11 2a5 5 0 1 0 0 10a5 5 0 0 0 0-10m.123 12.55a1 1 0 0 0-.913-1.525c-2.21.14-4.195.858-5.651 1.813c-.728.478-1.348 1.031-1.796 1.63C2.32 17.057 2 17.755 2 18.5c0 1.535 1.278 2.346 2.495 2.763c1.28.439 2.99.638 4.832.707a1 1 0 0 0 .995-1.29A7.5 7.5 0 0 1 10 18.5a7.46 7.46 0 0 1 1.123-3.95m6.288 6.232a5.4 5.4 0 0 1-.822 0l-.087.325a1 1 0 0 1-1.932-.518l.09-.337q-.362-.18-.693-.42l-.26.259a1 1 0 0 1-1.414-1.414l.33-.331a5.4 5.4 0 0 1-.517-1.202a1 1 0 0 1 1.918-.568c.878 2.963 5.074 2.963 5.952 0a1 1 0 1 1 1.918.568c-.13.44-.306.841-.518 1.202l.331.33a1 1 0 0 1-1.414 1.415l-.26-.26q-.332.24-.693.421l.09.337a1 1 0 1 1-1.932.518z"></svg:path></svg:g>`,
})
export class MingcuteUserHideFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteUserInfoFillIcon],svg[mingcute-user-info-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M6 7a5 5 0 1 1 10 0A5 5 0 0 1 6 7m-1.178 7.672C6.425 13.694 8.605 13 11 13q.671 0 1.316.07a1 1 0 0 1 .72 1.557A5.97 5.97 0 0 0 12 18c0 .92.207 1.79.575 2.567a1 1 0 0 1-.89 1.428L11 22c-2.229 0-4.335-.14-5.913-.558c-.785-.208-1.524-.506-2.084-.956C2.41 20.01 2 19.345 2 18.5c0-.787.358-1.523.844-2.139c.494-.625 1.177-1.2 1.978-1.69ZM16 18a1 1 0 0 1 1-1h.99c.558 0 1.01.452 1.01 1.01v2.124A1 1 0 0 1 18.5 22h-.49A1.01 1.01 0 0 1 17 20.99V19a1 1 0 0 1-1-1m2-4a1 1 0 0 0-.117 1.993l.119.007a1 1 0 0 0 .117-1.993z"></svg:path></svg:g>`,
})
export class MingcuteUserInfoFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteUserLockFillIcon],svg[mingcute-user-lock-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M11 13q.671 0 1.316.07a1 1 0 0 1 .72 1.557A5.97 5.97 0 0 0 12 18c0 .92.207 1.79.575 2.567a1 1 0 0 1-.89 1.428L11 22c-2.229 0-4.335-.14-5.913-.558c-.785-.208-1.524-.506-2.084-.956C2.41 20.01 2 19.345 2 18.5c0-.787.358-1.523.844-2.139c.494-.625 1.177-1.2 1.978-1.69C6.425 13.695 8.605 13 11 13m7.5 0a2.5 2.5 0 0 1 2.5 2.5v.585a1.5 1.5 0 0 1 1 1.415v3a1.5 1.5 0 0 1-1.5 1.5h-4a1.5 1.5 0 0 1-1.5-1.5v-3a1.5 1.5 0 0 1 1-1.415V15.5a2.5 2.5 0 0 1 2.5-2.5m0 2a.5.5 0 0 0-.492.41L18 15.5v.5h1v-.5a.5.5 0 0 0-.5-.5M11 2a5 5 0 1 1 0 10a5 5 0 0 1 0-10"></svg:path></svg:g>`,
})
export class MingcuteUserLockFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteUserPinFillIcon],svg[mingcute-user-pin-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M11 13q.671 0 1.316.07a1 1 0 0 1 .72 1.557A5.97 5.97 0 0 0 12 18c0 .92.207 1.79.575 2.567a1 1 0 0 1-.763 1.419l-.127.01L11 22c-2.229 0-4.335-.14-5.913-.558c-.785-.208-1.524-.506-2.084-.956C2.41 20.01 2 19.345 2 18.5c0-.787.358-1.523.844-2.139c.494-.625 1.177-1.2 1.978-1.69C6.425 13.695 8.605 13 11 13m7 0a4 4 0 0 1 4 4c0 1.387-.755 2.48-1.469 3.21c-.446.456-.92.817-1.301 1.073l-.383.244l-.192.113a1.33 1.33 0 0 1-1.31 0l-.192-.113l-.245-.152c-.4-.26-.938-.652-1.44-1.165C14.756 19.48 14 18.387 14 17a4 4 0 0 1 4-4m0 3a1 1 0 1 0 0 2a1 1 0 0 0 0-2M11 2a5 5 0 1 1 0 10a5 5 0 0 1 0-10"></svg:path></svg:g>`,
})
export class MingcuteUserPinFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteUserQuestionFillIcon],svg[mingcute-user-question-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M6 7a5 5 0 1 1 10 0A5 5 0 0 1 6 7m-1.178 7.672C6.425 13.694 8.605 13 11 13q.671 0 1.316.07a1 1 0 0 1 .72 1.557A5.97 5.97 0 0 0 12 18c0 .92.207 1.79.575 2.567a1 1 0 0 1-.89 1.428L11 22c-2.229 0-4.335-.14-5.913-.558c-.785-.208-1.524-.506-2.084-.956C2.41 20.01 2 19.345 2 18.5c0-.787.358-1.523.844-2.139c.494-.625 1.177-1.2 1.978-1.69ZM17 21a1 1 0 0 1 .883-.993l.119-.007a1 1 0 0 1 .117 1.993L18 22a1 1 0 0 1-1-1m.567-4.75a.5.5 0 0 1 .933.25c0 .135-.048.255-.321.48l-.145.114l-.11.082c-.074.055-.162.12-.243.186l-.139.116a1.7 1.7 0 0 0-.488.697a1 1 0 0 0 1.835.782l.097-.077l.357-.27l.107-.086l.181-.158c.406-.374.869-.968.869-1.866a2.5 2.5 0 0 0-4.662-1.257a1 1 0 0 0 1.729 1.007"></svg:path></svg:g>`,
})
export class MingcuteUserQuestionFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteUserRemove2FillIcon],svg[mingcute-user-remove-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M11 2a5 5 0 1 0 0 10a5 5 0 0 0 0-10m0 11c-2.395 0-4.575.694-6.178 1.672c-.8.488-1.484 1.064-1.978 1.69C2.358 16.976 2 17.713 2 18.5c0 .845.411 1.511 1.003 1.986c.56.45 1.299.748 2.084.956C6.665 21.859 8.771 22 11 22q.346 0 .685-.005a1 1 0 0 0 .89-1.428A6 6 0 0 1 12 18c0-1.252.383-2.412 1.037-3.373a1 1 0 0 0-.72-1.557Q11.671 13 11 13m4 4a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2z"></svg:path></svg:g>`,
})
export class MingcuteUserRemove2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteUserRemoveFillIcon],svg[mingcute-user-remove-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M16 14a5 5 0 0 1 5 5v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1a5 5 0 0 1 5-5zM12 2a5 5 0 1 1 0 10a5 5 0 0 1 0-10m10 8a1 1 0 0 1 .117 1.993L22 12h-4a1 1 0 0 1-.117-1.993L18 10z"></svg:path></svg:g>`,
})
export class MingcuteUserRemoveFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteUserSearchFillIcon],svg[mingcute-user-search-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M6 7a5 5 0 1 1 10 0A5 5 0 0 1 6 7m-1.178 7.672C6.425 13.694 8.605 13 11 13q.671 0 1.316.07a1 1 0 0 1 .72 1.557A5.97 5.97 0 0 0 12 18c0 .92.207 1.79.575 2.567a1 1 0 0 1-.89 1.428Q11.345 22 11 22c-2.229 0-4.335-.14-5.913-.558c-.785-.208-1.524-.506-2.084-.956C2.41 20.01 2 19.345 2 18.5c0-.787.358-1.523.844-2.139c.494-.625 1.177-1.2 1.978-1.69ZM17.5 16a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3M14 17.5a3.5 3.5 0 1 1 6.58 1.665l.834.835A1 1 0 1 1 20 21.414l-.835-.835A3.5 3.5 0 0 1 14 17.5"></svg:path></svg:g>`,
})
export class MingcuteUserSearchFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteUserSecurityFillIcon],svg[mingcute-user-security-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M11 2a5 5 0 1 0 0 10a5 5 0 0 0 0-10m0 11c-2.395 0-4.575.694-6.178 1.672c-.8.488-1.484 1.064-1.978 1.69C2.358 16.976 2 17.713 2 18.5c0 .845.411 1.511 1.003 1.986c.56.45 1.299.748 2.084.956C6.665 21.859 8.771 22 11 22l.685-.005a1 1 0 0 0 .89-1.428A6 6 0 0 1 12 18c0-1.252.383-2.412 1.037-3.373a1 1 0 0 0-.72-1.557Q11.671 13 11 13m7.316 1.051a1 1 0 0 0-.632 0l-3 1A1 1 0 0 0 14 16v1.671a4.346 4.346 0 0 0 3.866 4.32q.135.015.268 0A4.346 4.346 0 0 0 22 17.671V16a1 1 0 0 0-.684-.949z"></svg:path></svg:g>`,
})
export class MingcuteUserSecurityFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteUserSettingFillIcon],svg[mingcute-user-setting-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M11 2a5 5 0 1 0 0 10a5 5 0 0 0 0-10m0 11c-2.395 0-4.575.694-6.178 1.672c-.8.488-1.484 1.064-1.978 1.69C2.358 16.976 2 17.713 2 18.5c0 .845.411 1.511 1.003 1.986c.56.45 1.299.748 2.084.956C6.665 21.859 8.771 22 11 22l.685-.005a1 1 0 0 0 .89-1.428A6 6 0 0 1 12 18c0-1.252.383-2.412 1.037-3.373a1 1 0 0 0-.72-1.557Q11.671 13 11 13m9.616 2.469a1 1 0 1 0-1.732-1l-.336.582a3 3 0 0 0-1.097-.001l-.335-.581a1 1 0 1 0-1.732 1l.335.58a3 3 0 0 0-.547.951H14.5a1 1 0 0 0 0 2h.671a3 3 0 0 0 .549.95l-.336.581a1 1 0 1 0 1.732 1l.336-.581c.359.066.73.068 1.097 0l.335.581a1 1 0 1 0 1.732-1l-.335-.58c.242-.284.426-.607.547-.951h.672a1 1 0 1 0 0-2h-.671a3 3 0 0 0-.549-.95z"></svg:path></svg:g>`,
})
export class MingcuteUserSettingFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteUserStarFillIcon],svg[mingcute-user-star-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M11 2a5 5 0 1 0 0 10a5 5 0 0 0 0-10m0 11c-2.395 0-4.575.694-6.178 1.672c-.8.488-1.484 1.064-1.978 1.69C2.358 16.976 2 17.713 2 18.5c0 .845.411 1.511 1.003 1.986c.56.45 1.299.748 2.084.956C6.665 21.859 8.771 22 11 22q.346 0 .685-.005a1 1 0 0 0 .89-1.428A6 6 0 0 1 12 18c0-1.252.383-2.412 1.037-3.373a1 1 0 0 0-.72-1.557Q11.671 13 11 13m7.864.997a1 1 0 0 0-1.728 0l-.91 1.562l-1.766.382a1 1 0 0 0-.534 1.644l1.204 1.348l-.182 1.798a1 1 0 0 0 1.398 1.016l1.654-.73l1.654.73a1 1 0 0 0 1.398-1.016l-.182-1.799l1.204-1.347a1 1 0 0 0-.534-1.644l-1.766-.382z"></svg:path></svg:g>`,
})
export class MingcuteUserStarFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteUserVisibleFillIcon],svg[mingcute-user-visible-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M11 2a5 5 0 1 0 0 10a5 5 0 0 0 0-10m.123 12.55a1 1 0 0 0-.913-1.525c-2.21.14-4.195.858-5.651 1.813c-.728.478-1.348 1.031-1.796 1.63C2.32 17.057 2 17.755 2 18.5c0 1.535 1.278 2.346 2.495 2.763c1.28.439 2.99.638 4.832.707a1 1 0 0 0 .995-1.29A7.5 7.5 0 0 1 10 18.5a7.46 7.46 0 0 1 1.123-3.95m2.387.728c.858-.757 2.084-1.39 3.49-1.39s2.632.633 3.49 1.39a5.3 5.3 0 0 1 1.057 1.26c.252.427.453.94.453 1.462c0 .523-.2 1.035-.453 1.462a5.3 5.3 0 0 1-1.057 1.26c-.858.757-2.084 1.39-3.49 1.39s-2.632-.633-3.49-1.39a5.3 5.3 0 0 1-1.057-1.26C12.2 19.035 12 18.522 12 18c0-.523.2-1.035.453-1.462a5.3 5.3 0 0 1 1.057-1.26m4.486 2.635a.667.667 0 0 1-.91-.91L17.001 17a1 1 0 1 0 1 1l-.004-.087Z"></svg:path></svg:g>`,
})
export class MingcuteUserVisibleFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteUserWarningFillIcon],svg[mingcute-user-warning-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M6 7a5 5 0 1 1 10 0A5 5 0 0 1 6 7m-1.178 7.672C6.425 13.694 8.605 13 11 13q.671 0 1.316.07a1 1 0 0 1 .72 1.557A5.97 5.97 0 0 0 12 18c0 .92.207 1.79.575 2.567a1 1 0 0 1-.89 1.428L11 22c-2.229 0-4.335-.14-5.913-.558c-.785-.208-1.524-.506-2.084-.956C2.41 20.01 2 19.345 2 18.5c0-.787.358-1.523.844-2.139c.494-.625 1.177-1.2 1.978-1.69ZM18 14a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0v-3a1 1 0 0 1 1-1m0 6a1 1 0 0 0-.117 1.993l.119.007a1 1 0 0 0 .117-1.993z"></svg:path></svg:g>`,
})
export class MingcuteUserWarningFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteUserXFillIcon],svg[mingcute-user-x-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M11 2a5 5 0 1 0 0 10a5 5 0 0 0 0-10m0 11c-2.395 0-4.575.694-6.178 1.672c-.8.488-1.484 1.064-1.978 1.69C2.358 16.976 2 17.713 2 18.5c0 .845.411 1.511 1.003 1.986c.56.45 1.299.748 2.084.956C6.665 21.859 8.771 22 11 22q.346 0 .685-.005a1 1 0 0 0 .89-1.428A6 6 0 0 1 12 18c0-1.252.383-2.412 1.037-3.373a1 1 0 0 0-.72-1.557Q11.671 13 11 13m5.586 2.172a1 1 0 0 0-1.414 1.414L16.586 18l-1.414 1.414a1 1 0 1 0 1.414 1.414L18 19.414l1.414 1.414a1 1 0 1 0 1.414-1.414L19.414 18l1.414-1.414a1 1 0 0 0-1.414-1.414L18 16.586z"></svg:path></svg:g>`,
})
export class MingcuteUserXFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteVectorBezier2FillIcon],svg[mingcute-vector-bezier-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M5 2a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 1.806-1.14A5 5 0 0 1 11 11v2a6.98 6.98 0 0 0 2.101 5H9.732a2 2 0 1 0 0 2H15a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-2a2 2 0 0 0-1.806 1.14A5 5 0 0 1 13 13v-2a6.98 6.98 0 0 0-2.101-5h3.369A2 2 0 0 0 18 5a2 2 0 0 0-3.732-1H9a2 2 0 0 0-2-2z"></svg:path></svg:g>`,
})
export class MingcuteVectorBezier2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteVectorBezier3FillIcon],svg[mingcute-vector-bezier-3-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M17 3a2 2 0 0 0-2 2H9a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2v6a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2h6a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2V9a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm0 12a2 2 0 0 0-2 2H9a2 2 0 0 0-2-2V9a2 2 0 0 0 2-2h6a2 2 0 0 0 2 2z"></svg:path></svg:g>`,
})
export class MingcuteVectorBezier3FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteVectorBezierFillIcon],svg[mingcute-vector-bezier-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M9 6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2h4.268A2 2 0 0 1 23 7a2 2 0 0 1-3.732 1h-3.392a8 8 0 0 1 4.062 6H20a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-2a2 2 0 0 1 1.917-1.998a6.01 6.01 0 0 0-3.569-4.525A2 2 0 0 1 13 10h-2c-.52 0-.993-.198-1.348-.523a6.01 6.01 0 0 0-3.57 4.525A2 2 0 0 1 8 16v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h.062a8 8 0 0 1 4.062-6H4.732a2 2 0 1 1 0-2z"></svg:path></svg:g>`,
})
export class MingcuteVectorBezierFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteVectorGroupFillIcon],svg[mingcute-vector-group-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M10.5 3A2.5 2.5 0 0 0 9 7.5V9H7.5A2.5 2.5 0 1 0 4 12.5v4A2.5 2.5 0 1 0 7.5 20h4a2.5 2.5 0 1 0 3.5-3.5V15h1.5a2.5 2.5 0 1 0 3.5-3.5v-4A2.5 2.5 0 1 0 16.5 4h-4a2.5 2.5 0 0 0-2-1m5.55 3h-3.1A2.5 2.5 0 0 1 11 7.95v3.1c.98.199 1.751.97 1.95 1.95h3.1c.199-.98.97-1.751 1.95-1.95v-3.1A2.5 2.5 0 0 1 16.05 6M8 13.5c0-.818.393-1.544 1-2V11H7.95A2.5 2.5 0 0 1 6 12.95v3.1c.98.199 1.751.97 1.95 1.95h3.1c.199-.98.97-1.751 1.95-1.95V15h-.5A2.5 2.5 0 0 1 8 13.5"></svg:path></svg:g>`,
})
export class MingcuteVectorGroupFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteVersionFillIcon],svg[mingcute-version-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M20.245 14.75c.935.614.892 2.037-.129 2.576l-7.181 3.796a2 2 0 0 1-1.87 0l-7.181-3.796c-1.02-.54-1.064-1.962-.129-2.576l.063.04l7.247 3.832a2 2 0 0 0 1.87 0l7.181-3.796a2 2 0 0 0 .13-.076Zm0-4a1.5 1.5 0 0 1 0 2.501l-.129.075l-7.181 3.796a2 2 0 0 1-1.707.077l-.162-.077l-7.182-3.796c-1.02-.54-1.064-1.962-.129-2.576l.063.04l7.247 3.832a2 2 0 0 0 1.708.077l.162-.077l7.181-3.796a2 2 0 0 0 .13-.076Zm-7.31-7.872l7.181 3.796c1.066.563 1.066 2.09 0 2.652l-7.181 3.797a2 2 0 0 1-1.87 0L3.884 9.326c-1.066-.563-1.066-2.089 0-2.652l7.181-3.796a2 2 0 0 1 1.87 0"></svg:path></svg:g>`,
})
export class MingcuteVersionFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteVestFillIcon],svg[mingcute-vest-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M5.963 4.919C6.045 3.902 6.876 3 8 3h8c1.124 0 1.955.902 2.037 1.919a11.23 11.23 0 0 0 2.224 5.843c.424.554.739 1.27.739 2.066V18a3 3 0 0 1-3 3h-4a1 1 0 0 1-1-1v-8.715c0-.858.592-1.597 1.202-2.2c.533-.528.928-1.218 1.204-1.888a9.3 9.3 0 0 0 .49-1.623a.48.48 0 0 0-.479-.574H8.583a.48.48 0 0 0-.479.574a9.3 9.3 0 0 0 .49 1.623c.276.67.67 1.36 1.204 1.887c.61.604 1.202 1.343 1.202 2.201V20a1 1 0 0 1-1 1H6a3 3 0 0 1-3-3v-5.172c0-.797.315-1.512.74-2.066c.71-.93 1.99-2.97 2.223-5.843"></svg:path></svg:g>`,
})
export class MingcuteVestFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteViberMessengerFillIcon],svg[mingcute-viber-messenger-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M9.365 3.108a56 56 0 0 1 6.27 0l.632.036l.582.042c.932.08 1.682.219 2.384.597a5.3 5.3 0 0 1 2.035 2.04c.415.774.538 1.593.61 2.639l.053.91a40 40 0 0 1 0 4.256l-.053.91c-.072 1.047-.195 1.865-.61 2.639a5.3 5.3 0 0 1-2.035 2.04c-.843.454-1.754.563-2.966.639l-.632.037A57 57 0 0 1 12.5 20l-1.634.005q-.248 0-.499-.005l-.501-.012l-2.241 1.793a1 1 0 0 1-1.617-.654L6 21v-1.666a4 4 0 0 1-.233-.117a5.3 5.3 0 0 1-2.035-2.04c-.414-.774-.538-1.592-.61-2.638l-.036-.595l-.017-.316a40 40 0 0 1 0-4.256l.053-.91c.072-1.046.196-1.865.61-2.638a5.3 5.3 0 0 1 2.035-2.04c.772-.417 1.603-.544 2.67-.62l.605-.038zm-.4 3.777c-.977.419-1.813 1.478-1.772 2.58l.009.162l.019.195q.005.052.014.108l.038.24c.179.974.726 2.555 2.365 4.193c1.638 1.639 3.22 2.186 4.193 2.365l.24.038l.21.025l.254.017c1.101.04 2.16-.79 2.579-1.767a.74.74 0 0 0-.095-.742c-.433-.556-.982-.993-1.552-1.4l-.573-.4a.75.75 0 0 0-1.028.166l-.635.967a.24.24 0 0 1-.322.08c-.43-.245-1.056-.663-1.506-1.114c-.45-.45-.843-1.048-1.064-1.45a.24.24 0 0 1 .07-.308l.976-.724a.75.75 0 0 0 .128-.993l-.33-.485c-.401-.586-.874-1.22-1.495-1.674a.74.74 0 0 0-.723-.079m4.628 2.002a1 1 0 0 0-.666 1.886c.113.04.208.12.268.224l.037.081a1 1 0 0 0 1.886-.666a2.5 2.5 0 0 0-1.525-1.525m-.276-2.22a1 1 0 0 0 .61 1.276a3.51 3.51 0 0 1 2.134 2.134a1 1 0 1 0 1.886-.666a5.51 5.51 0 0 0-3.354-3.354a1 1 0 0 0-1.276.61"></svg:path></svg:g>`,
})
export class MingcuteViberMessengerFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteVideoCamera2FillIcon],svg[mingcute-video-camera-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M11.762 7.445A1 1 0 0 0 10.93 7H6a1 1 0 1 1 0-2h4.93a3 3 0 0 1 2.496 1.336L14.536 8H15a3 3 0 0 1 3 3v.21l1.713-1.056A1.5 1.5 0 0 1 22 11.43v5.138a1.5 1.5 0 0 1-2.287 1.277L18 16.79V17a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-6a3 3 0 0 1 3-3h7.132z"></svg:path></svg:g>`,
})
export class MingcuteVideoCamera2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteVideoCameraFillIcon],svg[mingcute-video-camera-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M16 7a4 4 0 0 1-.554 2.033A3 3 0 0 1 18 12v.21l1.713-1.056A1.5 1.5 0 0 1 22 12.43v5.138a1.5 1.5 0 0 1-2.287 1.277L18 17.79V18a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-6a3 3 0 0 1 1.545-2.624a3.5 3.5 0 0 1 5.138-4.612A4 4 0 0 1 16 7m-4-2a2 2 0 1 0 0 4a2 2 0 0 0 0-4M6.5 9a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3"></svg:path></svg:g>`,
})
export class MingcuteVideoCameraFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteVideoFillIcon],svg[mingcute-video-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M4 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm4.625 5.63a1.235 1.235 0 0 1 1.715-.992c.504.216 1.568.702 2.916 1.48a28 28 0 0 1 2.74 1.786a1.234 1.234 0 0 1 0 1.98a28 28 0 0 1-2.74 1.784a28 28 0 0 1-2.916 1.482a1.234 1.234 0 0 1-1.715-.992a29 29 0 0 1-.176-3.264c0-1.551.112-2.719.176-3.264"></svg:path></svg:g>`,
})
export class MingcuteVideoFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteVip1FillIcon],svg[mingcute-vip-1-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M17.42 3a2 2 0 0 1 1.649.868l.087.14L22.49 9.84a2 2 0 0 1-.208 2.283l-.114.123l-9.283 9.283a1.25 1.25 0 0 1-1.666.091l-.102-.09l-9.283-9.284a2 2 0 0 1-.4-2.257l.078-.15l3.333-5.832a2 2 0 0 1 1.572-1.001L6.58 3zM7.293 9.293a1 1 0 0 0 0 1.414l3.823 3.823a1.25 1.25 0 0 0 1.768 0l3.823-3.823a1 1 0 1 0-1.414-1.414L12 12.586L8.707 9.293a1 1 0 0 0-1.414 0"></svg:path></svg:g>`,
})
export class MingcuteVip1FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteVip2FillIcon],svg[mingcute-vip-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M12.987 5.74a2 2 0 1 0-1.97.002l-.01.018c-.655 1.367-1.565 3.325-2.97 4.06c-1.154.603-2.81.3-4.04.074a1.5 1.5 0 1 0-1.772 1.58l2.948 7.61A3 3 0 0 0 7.97 21h8.06a3 3 0 0 0 2.797-1.916l2.947-7.61a1.5 1.5 0 1 0-1.767-1.624c-1.259.163-2.882.371-4.044-.236c-1.377-.72-2.3-2.543-2.976-3.874"></svg:path></svg:g>`,
})
export class MingcuteVip2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteVip3FillIcon],svg[mingcute-vip-3-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M2.338 4.863A1.25 1.25 0 0 1 3.428 3h5.18a1.5 1.5 0 0 1 1.307.765L13 9.258l3.085-5.493A1.5 1.5 0 0 1 17.392 3h3.18a1.25 1.25 0 0 1 1.09 1.863l-8.573 15.24a1.25 1.25 0 0 1-2.179 0z"></svg:path></svg:g>`,
})
export class MingcuteVip3FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteVip4FillIcon],svg[mingcute-vip-4-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M11.2 1.401a1 1 0 0 1 1.6 0L15.5 5h4.645a1.5 1.5 0 0 1 1.308 2.235L13.09 22.103a1.25 1.25 0 0 1-2.18 0L2.549 7.235A1.5 1.5 0 0 1 3.855 5H8.5zm.797 2.266L9.33 7.222l2.667 4.445l2.666-4.445z"></svg:path></svg:g>`,
})
export class MingcuteVip4FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteVirgoFillIcon],svg[mingcute-virgo-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M18 2a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4zM7.333 5.667h-.666A1 1 0 0 0 6.55 7.66l.117.007h.666c.161 0 .296.114.327.266L7.667 8v6a1 1 0 0 0 1.993.117L9.667 14V8a.333.333 0 0 1 .659-.071l.007.066V14a1 1 0 0 0 1.994.117l.006-.117V7.995a.333.333 0 0 1 .66-.062L13 8v6c0 .518.09 1.015.257 1.475c-.297.086-.58.158-.833.222a1 1 0 1 0 .485 1.94l.442-.113c.32-.084.685-.188 1.069-.316c.77.7 1.792 1.125 2.913 1.125a1 1 0 1 0 0-2c-.264 0-.519-.044-.756-.125c.656-.429 1.27-.998 1.65-1.76c.43-.858.549-1.85.16-2.699c-.417-.907-1.309-1.416-2.387-1.416c-.296 0-.569.048-.818.13l-.182.069V8a2.333 2.333 0 0 0-3.667-1.915A2.3 2.3 0 0 0 10 5.667c-.496 0-.955.154-1.333.418a2.3 2.3 0 0 0-1.15-.411zM16 12.333c.225 0 .356.05.425.09c.067.04.112.09.144.161c.07.152.108.493-.13.969c-.226.452-.682.851-1.317 1.195a2.3 2.3 0 0 1-.114-.548L15 14.008c0-.388.122-.867.346-1.222c.216-.342.438-.453.654-.453"></svg:path></svg:g>`,
})
export class MingcuteVirgoFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteVirusFillIcon],svg[mingcute-virus-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M10 3a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2v2.083a6 6 0 0 1 2.476 1.026l1.474-1.473a1 1 0 0 1 1.414-1.414l.707.707l.707.707a1 1 0 0 1-1.414 1.414l-1.473 1.473A6 6 0 0 1 17.917 11H20a1 1 0 1 1 2 0v2a1 1 0 1 1-2 0h-2.083a6 6 0 0 1-1.026 2.476l1.473 1.474a1 1 0 0 1 1.414 1.414l-1.414 1.414a1 1 0 0 1-1.414-1.414l-1.473-1.473A6 6 0 0 1 13 17.917V20a1 1 0 1 1 0 2h-2a1 1 0 1 1 0-2v-2.083a6 6 0 0 1-2.477-1.026L7.05 18.364a1 1 0 1 1-1.414 1.414l-1.414-1.414a1 1 0 0 1 1.414-1.414l1.473-1.473A6 6 0 0 1 6.083 13H4a1 1 0 1 1-2 0v-2a1 1 0 1 1 2 0h2.083a6 6 0 0 1 1.026-2.477L5.636 7.05a1 1 0 1 1-1.414-1.414l1.414-1.414A1 1 0 1 1 7.05 5.636l1.473 1.473A6 6 0 0 1 11 6.083V4a1 1 0 0 1-1-1"></svg:path></svg:g>`,
})
export class MingcuteVirusFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteVisaFillIcon],svg[mingcute-visa-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M7.527 6.595a1.5 1.5 0 0 1 .971 1.325l.014-.106a1.5 1.5 0 0 1 2.976.372l-.071.574a3 3 0 0 1 2.907-2.26h.176c.72 0 1.445.27 1.928.888c.47.602.56 1.344.4 1.98a1.5 1.5 0 0 1-2.567.638l-.05.4a.2.2 0 0 0 .121.211a3.2 3.2 0 0 1 1.96 2.999l2.303-6.143a1.5 1.5 0 0 1 2.893.34l1 8a1.5 1.5 0 1 1-2.976.373l-.086-.686h-.636l-.386 1.027a1.5 1.5 0 0 1-2.863-.18a3 3 0 0 1-2.364 1.153H13c-.51 0-1.37-.087-1.946-.82c-.377-.482-.453-1.025-.448-1.436l-.118.942a1.5 1.5 0 1 1-2.976-.372l.92-7.37l-.028.083l-3 8A1.5 1.5 0 0 1 2.5 16V9.415A1.5 1.5 0 0 1 3 6.5h1a1.5 1.5 0 0 1 1.483 1.273l.113-.3a1.5 1.5 0 0 1 1.93-.878Zm3.164 7.969a1.5 1.5 0 0 1 2.55-.57l.05-.401a.2.2 0 0 0-.122-.21a3.2 3.2 0 0 1-1.96-2.963z"></svg:path></svg:g>`,
})
export class MingcuteVisaFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteVisonProFillIcon],svg[mingcute-vison-pro-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M5.303 6.641C7.083 6.283 9.333 6 12 6s4.917.283 6.697.641c3.39.682 4.902 4.086 4.129 7.178l-.12.48a6.06 6.06 0 0 1-4.406 4.407a4.37 4.37 0 0 1-2.683-.182l-2.874-1.15a2 2 0 0 0-1.486 0l-2.874 1.15a4.37 4.37 0 0 1-2.683.182A6.06 6.06 0 0 1 1.294 14.3l-.12-.48c-.773-3.093.74-6.497 4.129-7.179"></svg:path></svg:g>`,
})
export class MingcuteVisonProFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteVkontakteFillIcon],svg[mingcute-vkontakte-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M7 3a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4V7a4 4 0 0 0-4-4zm10.332 7.055a1 1 0 0 0-1.664-1.11c-.354.47-.725.92-1.159 1.32c-.503.464-1.012.812-1.508 1.018l-.008-1.9A1 1 0 0 0 12 8.5c-.542.031-1 .431-1 1v4.373c-1.948-.54-3-2.43-3-4.373a1 1 0 0 0-2 0c0 3.632 2.51 6.5 6 6.5a1 1 0 0 0 1-1v-1.563c1.332.106 2.624 1.047 3.106 2.01a1 1 0 1 0 1.788-.894c-.478-.957-1.37-1.852-2.468-2.436q.222-.182.44-.382a9.8 9.8 0 0 0 1.466-1.68"></svg:path></svg:g>`,
})
export class MingcuteVkontakteFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteVoice2FillIcon],svg[mingcute-voice-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M20 3.5A1.5 1.5 0 0 1 21.5 5v14a1.5 1.5 0 0 1-3 0V5A1.5 1.5 0 0 1 20 3.5m-10 3A1.5 1.5 0 0 1 11.5 8v11a1.5 1.5 0 0 1-3 0V8A1.5 1.5 0 0 1 10 6.5m5 3a1.5 1.5 0 0 1 1.5 1.5v8a1.5 1.5 0 0 1-3 0v-8A1.5 1.5 0 0 1 15 9.5m-10 3A1.5 1.5 0 0 1 6.5 14v5a1.5 1.5 0 0 1-3 0v-5A1.5 1.5 0 0 1 5 12.5"></svg:path></svg:g>`,
})
export class MingcuteVoice2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteVoiceFillIcon],svg[mingcute-voice-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M12 2.5a1.5 1.5 0 0 1 1.493 1.356L13.5 4v16a1.5 1.5 0 0 1-2.993.144L10.5 20V4A1.5 1.5 0 0 1 12 2.5m-4 3A1.5 1.5 0 0 1 9.5 7v10a1.5 1.5 0 0 1-3 0V7A1.5 1.5 0 0 1 8 5.5m8 0A1.5 1.5 0 0 1 17.5 7v10a1.5 1.5 0 0 1-3 0V7A1.5 1.5 0 0 1 16 5.5m-12 3A1.5 1.5 0 0 1 5.5 10v4a1.5 1.5 0 0 1-3 0v-4A1.5 1.5 0 0 1 4 8.5m16 0a1.5 1.5 0 0 1 1.493 1.356L21.5 10v4a1.5 1.5 0 0 1-2.993.144L18.5 14v-4A1.5 1.5 0 0 1 20 8.5"></svg:path></svg:g>`,
})
export class MingcuteVoiceFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteVolleyballFillIcon],svg[mingcute-volleyball-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M17.68 14.175a6 6 0 0 1 2.112 4.093A9.98 9.98 0 0 1 12 22q-.813 0-1.59-.126a11 11 0 0 0 2.126-.946a10.97 10.97 0 0 0 5.145-6.754Zm-1.81-1.05a8.98 8.98 0 0 1-4.334 6.071a8.96 8.96 0 0 1-4.979 1.194a10 10 0 0 1-2.479-2.286a7.97 7.97 0 0 0 5.16-.988a7.97 7.97 0 0 0 3.544-4.265a5.97 5.97 0 0 1 3.088.274M4.244 5.688C4.084 6.433 4 7.207 4 8a10.97 10.97 0 0 0 3.277 7.832a6 6 0 0 1-4.605-.22A10 10 0 0 1 2 12c0-2.394.841-4.59 2.244-6.312m14.22 3.116a8.96 8.96 0 0 1 3.523 3.713a10 10 0 0 1-.739 3.294a7.97 7.97 0 0 0-3.436-3.977a7.97 7.97 0 0 0-5.467-.937a5.97 5.97 0 0 1-1.306-2.81a8.98 8.98 0 0 1 7.425.717m-7.789-6.717A7.97 7.97 0 0 0 8.95 7.05c0 1.986.725 3.804 1.922 5.202a5.97 5.97 0 0 1-1.78 2.537A8.98 8.98 0 0 1 6 7.999a8.96 8.96 0 0 1 1.456-4.91a9.9 9.9 0 0 1 3.22-1.002Zm2.859.03a10.01 10.01 0 0 1 7.815 6.325a11 11 0 0 0-1.885-1.37a10.97 10.97 0 0 0-8.421-1.079a6 6 0 0 1 2.49-3.876Z"></svg:path></svg:g>`,
})
export class MingcuteVolleyballFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteVolumeFillIcon],svg[mingcute-volume-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M13.26 3.3a1.1 1.1 0 0 1 1.734.78l.006.114v15.612a1.1 1.1 0 0 1-1.643.957l-.096-.062L6.68 16H4a2 2 0 0 1-1.995-1.85L2 14v-4a2 2 0 0 1 1.85-1.995L4 8h2.68zm6.407 3.483A7 7 0 0 1 22 12a7 7 0 0 1-2.333 5.217a1 1 0 1 1-1.334-1.49A5 5 0 0 0 20 12c0-1.48-.642-2.81-1.667-3.727a1 1 0 1 1 1.334-1.49m-2 2.236A4 4 0 0 1 19 11.999a4 4 0 0 1-1.333 2.982a1 1 0 0 1-1.422-1.4l.088-.09c.41-.368.667-.899.667-1.491a2 2 0 0 0-.548-1.376l-.119-.115a1 1 0 1 1 1.334-1.49"></svg:path></svg:g>`,
})
export class MingcuteVolumeFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteVolumeMuteFillIcon],svg[mingcute-volume-mute-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M13.26 3.3a1.1 1.1 0 0 1 1.734.78l.006.114v15.612a1.1 1.1 0 0 1-1.643.957l-.096-.062L6.68 16H4a2 2 0 0 1-1.995-1.85L2 14v-4a2 2 0 0 1 1.85-1.994L4 8h2.68zm4.326 5.872L19 10.586l1.414-1.414a1 1 0 1 1 1.414 1.414L20.414 12l1.414 1.414a1 1 0 0 1-1.414 1.415L19 13.414l-1.414 1.415a1 1 0 0 1-1.414-1.415L17.586 12l-1.414-1.414a1 1 0 1 1 1.414-1.414"></svg:path></svg:g>`,
})
export class MingcuteVolumeMuteFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteVolumeOffFillIcon],svg[mingcute-volume-off-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M4.596 8L15 18.404v1.402a1.1 1.1 0 0 1-1.74.895L6.68 16H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2zM15 4.194v9.392l1.113 1.113a1 1 0 0 1 .132-1.119l.088-.089c.41-.368.667-.899.667-1.491a2 2 0 0 0-.548-1.376l-.119-.115a1 1 0 0 1 1.334-1.49A4 4 0 0 1 19 12a4 4 0 0 1-1.333 2.981a1 1 0 0 1-1.13.142l1.47 1.47a1 1 0 0 1 .326-.866A5 5 0 0 0 20 12c0-1.48-.642-2.81-1.667-3.727a1 1 0 1 1 1.334-1.49A7 7 0 0 1 22 12a7 7 0 0 1-2.333 5.217a1 1 0 0 1-.788.248l1.606 1.606a1 1 0 0 1-1.414 1.414L3.515 4.93a1 1 0 1 1 1.414-1.414L8.275 6.86l4.986-3.562A1.1 1.1 0 0 1 15 4.194"></svg:path></svg:g>`,
})
export class MingcuteVolumeOffFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteVscodeFillIcon],svg[mingcute-vscode-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M5.633 17.774a1 1 0 0 1-1.188.058l-1.5-1a1 1 0 0 1-.166-1.525L5.96 12L2.78 8.693a1 1 0 0 1 .166-1.525l1.5-1a1 1 0 0 1 1.188.058l3.29 2.692l6.35-6.604A1.02 1.02 0 0 1 15.999 2H16a1 1 0 0 1 .6.2l4 3a1 1 0 0 1 .4.8v12a1 1 0 0 1-.4.8l-4 3a1 1 0 0 1-1.328-.114l-6.35-6.603zM15 13.89v-3.78L12.69 12z"></svg:path></svg:g>`,
})
export class MingcuteVscodeFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteVueFillIcon],svg[mingcute-vue-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M19.707 3.94a1.5 1.5 0 0 1 2.653 1.393l-.067.128l-9 15.3a1.5 1.5 0 0 1-2.507.12l-.079-.12l-9-15.3a1.5 1.5 0 0 1 2.507-1.642l.079.12L12 17.043zm-4.88-.005a1.5 1.5 0 0 1 2.653 1.393l-.067.128l-4.12 7.004a1.5 1.5 0 0 1-2.507.121l-.079-.12L6.59 5.46a1.5 1.5 0 0 1 2.507-1.642l.079.12L12 8.743z"></svg:path></svg:g>`,
})
export class MingcuteVueFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mingcuteWalkFillIcon],svg[mingcute-walk-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M12 2a3 3 0 0 1 .866 5.873l-.17.046l2.427 2.775l1.824.911a1 1 0 0 1-.787 1.836l-.107-.047l-1.824-.912a2 2 0 0 1-.476-.332l-.135-.14l-1.018-1.163l-.66 2.638a2 2 0 0 1-.306.669l-.11.142l1.928 1.763a2 2 0 0 1 .544.83l.047.16l.738 2.951H15a1 1 0 0 1 .117 1.993L15 22h-.922a1.1 1.1 0 0 1-1.03-.714l-.037-.12l-.908-3.631l-3.01-2.752a2 2 0 0 1-1.067-2.105l.034-.163l.513-2.052l-.323.23l-1.393 2.322a1 1 0 0 1-1.769-.926l.054-.104l1.393-2.321a2 2 0 0 1 .423-.498l.13-.1L9.85 7.091A3 3 0 0 1 12 2M9.316 15.551a1 1 0 0 1 .633 1.265l-.426 1.276a2 2 0 0 1-.483.782l-1.657 1.657a1 1 0 0 1-1.59 1.176l-.493-.493a1.01 1.01 0 0 1 0-1.428l2.326-2.326l.425-1.276a1 1 0 0 1 1.265-.633"></svg:path></svg:g>`,
})
export class MingcuteWalkFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
