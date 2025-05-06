import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phFileDocThinIcon],svg[ph-file-doc-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M52 148H36a4 4 0 0 0-4 4v56a4 4 0 0 0 4 4h16a32 32 0 0 0 0-64m0 56H40v-48h12a24 24 0 0 1 0 48m166.77-6a4 4 0 0 1 .12 5.66A26.1 26.1 0 0 1 200 212c-15.44 0-28-14.36-28-32s12.56-32 28-32a26.1 26.1 0 0 1 18.89 8.36a4 4 0 1 1-5.78 5.54A18.15 18.15 0 0 0 200 156c-11 0-20 10.77-20 24s9 24 20 24a18.15 18.15 0 0 0 13.11-5.9a4 4 0 0 1 5.66-.1M128 148c-15.44 0-28 14.36-28 32s12.56 32 28 32s28-14.36 28-32s-12.56-32-28-32m0 56c-11 0-20-10.77-20-24s9-24 20-24s20 10.77 20 24s-9 24-20 24m-80-88a4 4 0 0 0 4-4V40a4 4 0 0 1 4-4h92v52a4 4 0 0 0 4 4h52v20a4 4 0 0 0 8 0V88a4 4 0 0 0-1.17-2.83l-56-56A4 4 0 0 0 152 28H56a12 12 0 0 0-12 12v72a4 4 0 0 0 4 4m108-74.35L198.34 84H156Z"></svg:path>`,
})
export class PhFileDocThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileDottedIcon],svg[ph-file-dotted-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M80 224a8 8 0 0 1-8 8H56a16 16 0 0 1-16-16v-32a8 8 0 0 1 16 0v32h16a8 8 0 0 1 8 8Zm0-200H56a16 16 0 0 0-16 16v24a8 8 0 0 0 16 0V40h24a8 8 0 0 0 0-16Zm136 64.2V136a8 8 0 0 1-16 0V96h-48a8 8 0 0 1-8-8V40h-24a8 8 0 0 1 0-16h34.3l.7.3h.1l.6.3h.1l.5.3c0 .1.1.1.1.2l.5.3h.2l.4.4h.2l55.9 56A7.8 7.8 0 0 1 216 88ZM160 80h28.7L160 51.3Zm48 88a8 8 0 0 0-8 8v40h-8a8 8 0 0 0 0 16h8a16 16 0 0 0 16-16v-40a8 8 0 0 0-8-8ZM48 152a8 8 0 0 0 8-8v-40a8 8 0 0 0-16 0v40a8 8 0 0 0 8 8Zm104 64h-40a8 8 0 0 0 0 16h40a8 8 0 0 0 0-16Z"></svg:path>`,
})
export class PhFileDottedIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileDottedBoldIcon],svg[ph-file-dotted-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M220 92v-4a12.3 12.3 0 0 0-3.5-8.5l-56-56A12.3 12.3 0 0 0 152 20h-32a12 12 0 0 0 0 24h16v48a12 12 0 0 0 12 12h48v32a12 12 0 0 0 24 0V92Zm-60-35l23 23h-23ZM84 224a12 12 0 0 1-12 12H56a20.1 20.1 0 0 1-20-20v-32a12 12 0 0 1 24 0v28h12a12 12 0 0 1 12 12Zm8-192a12 12 0 0 1-12 12H60v20a12 12 0 0 1-24 0V40a20.1 20.1 0 0 1 20-20h24a12 12 0 0 1 12 12Zm128 144v40a20.1 20.1 0 0 1-20 20h-8a12 12 0 0 1 0-24h4v-36a12 12 0 0 1 24 0ZM36 144v-40a12 12 0 0 1 24 0v40a12 12 0 0 1-24 0Zm128 80a12 12 0 0 1-12 12h-40a12 12 0 0 1 0-24h40a12 12 0 0 1 12 12Z"></svg:path>`,
})
export class PhFileDottedBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileDottedDuotoneIcon],svg[ph-file-dotted-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 88h-56V32Z" opacity=".2"></svg:path><svg:path fill="currentColor" d="M80 224a8 8 0 0 1-8 8H56a16 16 0 0 1-16-16v-32a8 8 0 0 1 16 0v32h16a8 8 0 0 1 8 8Zm0-200H56a16 16 0 0 0-16 16v24a8 8 0 0 0 16 0V40h24a8 8 0 0 0 0-16Zm136 64.2V136a8 8 0 0 1-16 0V96h-48a8 8 0 0 1-8-8V40h-24a8 8 0 0 1 0-16h34.3l.7.3h.1l.5.3h.2l.5.3c0 .1.1.1.2.2l.4.3h.2l.4.4h.2l55.9 56A7.8 7.8 0 0 1 216 88ZM160 80h28.7L160 51.3Zm48 88a8 8 0 0 0-8 8v40h-8a8 8 0 0 0 0 16h8a16 16 0 0 0 16-16v-40a8 8 0 0 0-8-8ZM48 152a8 8 0 0 0 8-8v-40a8 8 0 0 0-16 0v40a8 8 0 0 0 8 8Zm104 64h-40a8 8 0 0 0 0 16h40a8 8 0 0 0 0-16Z"></svg:path>`,
})
export class PhFileDottedDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileDottedFillIcon],svg[ph-file-dotted-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M40 144v-40a8 8 0 0 1 16 0v40a8 8 0 0 1-16 0ZM80 24H56a16 16 0 0 0-16 16v24a8 8 0 0 0 16 0V40h24a8 8 0 0 0 0-16Zm-8 192H56v-32a8 8 0 0 0-16 0v32a16 16 0 0 0 16 16h16a8 8 0 0 0 0-16ZM213.6 82.3l-55.9-56h-.2l-.4-.4h-.2l-.4-.3c-.1-.1-.2-.1-.2-.2l-.5-.3h-.2l-.5-.3h-.1l-.7-.3H120a8 8 0 0 0 0 16h24V88a8 8 0 0 0 8 8h48v40a8 8 0 0 0 16 0V88a7.8 7.8 0 0 0-2.4-5.7ZM208 168a8 8 0 0 0-8 8v40h-8a8 8 0 0 0 0 16h8a16 16 0 0 0 16-16v-40a8 8 0 0 0-8-8Zm-56 48h-40a8 8 0 0 0 0 16h40a8 8 0 0 0 0-16Z"></svg:path>`,
})
export class PhFileDottedFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileDottedLightIcon],svg[ph-file-dotted-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M78 224a6 6 0 0 1-6 6H56a14 14 0 0 1-14-14v-32a6 6 0 0 1 12 0v32a2 2 0 0 0 2 2h16a6 6 0 0 1 6 6Zm2-198H56a14 14 0 0 0-14 14v24a6 6 0 0 0 12 0V40a2 2 0 0 1 2-2h24a6 6 0 0 0 0-12Zm134 62.2V136a6 6 0 0 1-12 0V94h-50a6 6 0 0 1-6-6V38h-26a6 6 0 0 1 0-12h34.2c.1 0 .1 0 .1.1a.5.5 0 0 1 .4.2h.1l.4.2h.1l.4.3h.1a.8.8 0 0 1 .4.4l56 55.9A6 6 0 0 1 214 88ZM158 82h35.5L158 46.5Zm50 88a6 6 0 0 0-6 6v40a2 2 0 0 1-2 2h-8a6 6 0 0 0 0 12h8a14 14 0 0 0 14-14v-40a6 6 0 0 0-6-6ZM48 150a6 6 0 0 0 6-6v-40a6 6 0 0 0-12 0v40a6 6 0 0 0 6 6Zm104 68h-40a6 6 0 0 0 0 12h40a6 6 0 0 0 0-12Z"></svg:path>`,
})
export class PhFileDottedLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileDottedThinIcon],svg[ph-file-dotted-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M76 224a4 4 0 0 1-4 4H56a12 12 0 0 1-12-12v-32a4 4 0 0 1 8 0v32a4 4 0 0 0 4 4h16a4 4 0 0 1 4 4Zm4-196H56a12 12 0 0 0-12 12v24a4 4 0 0 0 8 0V40a4 4 0 0 1 4-4h24a4 4 0 0 0 0-8Zm132 60.1V136a4 4 0 0 1-8 0V92h-52a4 4 0 0 1-4-4V36h-28a4 4 0 0 1 0-8h33.5l.6.3h.1l.6.5l56 55.9A4.5 4.5 0 0 1 212 88ZM156 84h42.3L156 41.7Zm52 88a4 4 0 0 0-4 4v40a4 4 0 0 1-4 4h-8a4 4 0 0 0 0 8h8a12 12 0 0 0 12-12v-40a4 4 0 0 0-4-4ZM48 148a4 4 0 0 0 4-4v-40a4 4 0 0 0-8 0v40a4 4 0 0 0 4 4Zm104 72h-40a4 4 0 0 0 0 8h40a4 4 0 0 0 0-8Z"></svg:path>`,
})
export class PhFileDottedThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileDuotoneIcon],svg[ph-file-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 88h-56V32Z" opacity=".2"></svg:path><svg:path d="m213.66 82.34l-56-56A8 8 0 0 0 152 24H56a16 16 0 0 0-16 16v176a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V88a8 8 0 0 0-2.34-5.66M160 51.31L188.69 80H160ZM200 216H56V40h88v48a8 8 0 0 0 8 8h48z"></svg:path></svg:g>`,
})
export class PhFileDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileFillIcon],svg[ph-file-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m213.66 82.34l-56-56A8 8 0 0 0 152 24H56a16 16 0 0 0-16 16v176a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V88a8 8 0 0 0-2.34-5.66M152 88V44l44 44Z"></svg:path>`,
})
export class PhFileFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileHtmlIcon],svg[ph-file-html-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 120V88a8 8 0 0 0-2.34-5.66l-56-56A8 8 0 0 0 152 24H56a16 16 0 0 0-16 16v80a8 8 0 0 0 16 0V40h88v48a8 8 0 0 0 8 8h48v24a8 8 0 0 0 16 0m-56-68.69L188.69 80H160ZM68 160v48a8 8 0 0 1-16 0v-16H32v16a8 8 0 0 1-16 0v-48a8 8 0 0 1 16 0v16h20v-16a8 8 0 0 1 16 0m56 0a8 8 0 0 1-8 8h-8v40a8 8 0 0 1-16 0v-40h-8a8 8 0 0 1 0-16h32a8 8 0 0 1 8 8m72 0v48a8 8 0 0 1-16 0v-24l-9.6 12.8a8 8 0 0 1-12.8 0L148 184v24a8 8 0 0 1-16 0v-48a8 8 0 0 1 14.4-4.8l17.6 23.47l17.6-23.47A8 8 0 0 1 196 160m56 48a8 8 0 0 1-8 8h-28a8 8 0 0 1-8-8v-48a8 8 0 0 1 16 0v40h20a8 8 0 0 1 8 8"></svg:path>`,
})
export class PhFileHtmlIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileHtmlBoldIcon],svg[ph-file-html-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M48 128a12 12 0 0 0 12-12V44h76v48a12 12 0 0 0 12 12h48v12a12 12 0 0 0 24 0V88a12 12 0 0 0-3.51-8.49l-56-56A12 12 0 0 0 152 20H56a20 20 0 0 0-20 20v76a12 12 0 0 0 12 12m135-48h-23V57ZM68 160v48a12 12 0 0 1-24 0v-12H32v12a12 12 0 0 1-24 0v-48a12 12 0 0 1 24 0v12h12v-12a12 12 0 0 1 24 0m60 0a12 12 0 0 1-12 12h-4v36a12 12 0 0 1-24 0v-36h-4a12 12 0 0 1 0-24h32a12 12 0 0 1 12 12m72 0v48a12 12 0 0 1-24 0v-9.36l-.11.16a12 12 0 0 1-19.78 0l-.11-.16V208a12 12 0 0 1-24 0v-48a12 12 0 0 1 21.89-6.8L166 170.82l12.11-17.62A12 12 0 0 1 200 160m56 48a12 12 0 0 1-12 12h-24a12 12 0 0 1-12-12v-48a12 12 0 0 1 24 0v36h12a12 12 0 0 1 12 12"></svg:path>`,
})
export class PhFileHtmlBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileHtmlDuotoneIcon],svg[ph-file-html-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 88h-56V32Z" opacity=".2"></svg:path><svg:path d="M216 120V88a8 8 0 0 0-2.34-5.66l-56-56A8 8 0 0 0 152 24H56a16 16 0 0 0-16 16v80a8 8 0 0 0 16 0V40h88v48a8 8 0 0 0 8 8h48v24a8 8 0 0 0 16 0m-56-68.69L188.69 80H160ZM68 160v48a8 8 0 0 1-16 0v-16H32v16a8 8 0 0 1-16 0v-48a8 8 0 0 1 16 0v16h20v-16a8 8 0 0 1 16 0m56 0a8 8 0 0 1-8 8h-8v40a8 8 0 0 1-16 0v-40h-8a8 8 0 0 1 0-16h32a8 8 0 0 1 8 8m72 0v48a8 8 0 0 1-16 0v-24l-9.6 12.8a8 8 0 0 1-12.8 0L148 184v24a8 8 0 0 1-16 0v-48a8 8 0 0 1 14.4-4.8l17.6 23.47l17.6-23.47A8 8 0 0 1 196 160m56 48a8 8 0 0 1-8 8h-28a8 8 0 0 1-8-8v-48a8 8 0 0 1 16 0v40h20a8 8 0 0 1 8 8"></svg:path></svg:g>`,
})
export class PhFileHtmlDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileHtmlFillIcon],svg[ph-file-html-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M44 128h168a4 4 0 0 0 4-4V88a8 8 0 0 0-2.34-5.66l-56-56A8 8 0 0 0 152 24H56a16 16 0 0 0-16 16v84a4 4 0 0 0 4 4m108-84l44 44h-44ZM68 160v48a8 8 0 0 1-16 0v-16H32v16a8 8 0 0 1-16 0v-48a8 8 0 0 1 16 0v16h20v-16a8 8 0 0 1 16 0m56 0a8 8 0 0 1-8 8h-8v40a8 8 0 0 1-16 0v-40h-8a8 8 0 0 1 0-16h32a8 8 0 0 1 8 8m72 0v48a8 8 0 0 1-16 0v-24l-9.6 12.8a8 8 0 0 1-12.8 0L148 184v24a8 8 0 0 1-16 0v-48a8 8 0 0 1 14.4-4.8l17.6 23.47l17.6-23.47A8 8 0 0 1 196 160m56 48a8 8 0 0 1-8 8h-28a8 8 0 0 1-8-8v-48a8 8 0 0 1 16 0v40h20a8 8 0 0 1 8 8"></svg:path>`,
})
export class PhFileHtmlFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileHtmlLightIcon],svg[ph-file-html-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M214 120V88a6 6 0 0 0-1.76-4.24l-56-56A6 6 0 0 0 152 26H56a14 14 0 0 0-14 14v80a6 6 0 0 0 12 0V40a2 2 0 0 1 2-2h90v50a6 6 0 0 0 6 6h50v26a6 6 0 0 0 12 0m-56-73.52L193.52 82H158ZM66 160v48a6 6 0 0 1-12 0v-18H30v18a6 6 0 0 1-12 0v-48a6 6 0 0 1 12 0v18h24v-18a6 6 0 0 1 12 0m56 0a6 6 0 0 1-6 6h-10v42a6 6 0 0 1-12 0v-42H84a6 6 0 0 1 0-12h32a6 6 0 0 1 6 6m72 0v48a6 6 0 0 1-12 0v-30l-13.2 17.6a6 6 0 0 1-9.6 0L146 178v30a6 6 0 0 1-12 0v-48a6 6 0 0 1 10.8-3.6L164 182l19.2-25.6A6 6 0 0 1 194 160m56 48a6 6 0 0 1-6 6h-28a6 6 0 0 1-6-6v-48a6 6 0 0 1 12 0v42h22a6 6 0 0 1 6 6"></svg:path>`,
})
export class PhFileHtmlLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileHtmlThinIcon],svg[ph-file-html-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M212 88a4 4 0 0 0-1.17-2.83l-2-2l-54-54A4 4 0 0 0 152 28H56a12 12 0 0 0-12 12v80a4 4 0 0 0 8 0V40a4 4 0 0 1 4-4h92v52a4 4 0 0 0 4 4h52v28a4 4 0 0 0 8 0Zm-56-46.35L198.34 84H156ZM64 160v48a4 4 0 0 1-8 0v-20H28v20a4 4 0 0 1-8 0v-48a4 4 0 0 1 8 0v20h28v-20a4 4 0 0 1 8 0m56 0a4 4 0 0 1-4 4h-12v44a4 4 0 0 1-8 0v-44H84a4 4 0 0 1 0-8h32a4 4 0 0 1 4 4m72 0v48a4 4 0 0 1-8 0v-36l-16.8 22.4a4 4 0 0 1-6.4 0L144 172v36a4 4 0 0 1-8 0v-48a4 4 0 0 1 7.2-2.4l20.8 27.73l20.8-27.73a4 4 0 0 1 7.2 2.4m56 48a4 4 0 0 1-4 4h-28a4 4 0 0 1-4-4v-48a4 4 0 0 1 8 0v44h24a4 4 0 0 1 4 4"></svg:path>`,
})
export class PhFileHtmlThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileImageIcon],svg[ph-file-image-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M110.66 147.56a8 8 0 0 0-13.32 0l-20.85 31.29l-9.76-15.18a8 8 0 0 0-13.46 0l-36 56A8 8 0 0 0 24 232h128a8 8 0 0 0 6.66-12.44ZM38.65 216L60 182.79l9.63 15a8 8 0 0 0 13.39.11l21-31.47L137.05 216Zm175-133.66l-56-56A8 8 0 0 0 152 24H56a16 16 0 0 0-16 16v88a8 8 0 0 0 16 0V40h88v48a8 8 0 0 0 8 8h48v120h-8a8 8 0 0 0 0 16h8a16 16 0 0 0 16-16V88a8 8 0 0 0-2.34-5.66ZM160 51.31L188.69 80H160Z"></svg:path>`,
})
export class PhFileImageIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileImageBoldIcon],svg[ph-file-image-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M114 145.34a12 12 0 0 0-20 0l-15 22.48l-6.7-10.09a12 12 0 0 0-20.07.17l-38.32 59.61A12 12 0 0 0 24 236h128a12 12 0 0 0 10-18.66ZM46 212l16.5-25.7l6.55 9.81a12 12 0 0 0 20 0l15-22.48L129.58 212ZM216.49 79.51l-56-56A12 12 0 0 0 152 20H56a20 20 0 0 0-20 20v84a12 12 0 0 0 24 0V44h76v48a12 12 0 0 0 12 12h48v108a12 12 0 0 0 0 24h4a20 20 0 0 0 20-20V88a12 12 0 0 0-3.51-8.49M160 57l23 23h-23Z"></svg:path>`,
})
export class PhFileImageBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileImageDuotoneIcon],svg[ph-file-image-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m104 152l48 72H24l36-56l16.36 25.45Zm48-120v56h56Z" opacity=".2"></svg:path><svg:path d="M110.66 147.56a8 8 0 0 0-13.32 0l-20.85 31.29l-9.76-15.18a8 8 0 0 0-13.46 0l-36 56A8 8 0 0 0 24 232h128a8 8 0 0 0 6.66-12.44ZM38.65 216L60 182.79l9.63 15a8 8 0 0 0 13.39.11l21-31.47L137.05 216Zm175-133.66l-56-56A8 8 0 0 0 152 24H56a16 16 0 0 0-16 16v88a8 8 0 0 0 16 0V40h88v48a8 8 0 0 0 8 8h48v120h-8a8 8 0 0 0 0 16h8a16 16 0 0 0 16-16V88a8 8 0 0 0-2.34-5.66ZM160 51.31L188.69 80H160Z"></svg:path></svg:g>`,
})
export class PhFileImageDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileImageFillIcon],svg[ph-file-image-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M158.66 219.56A8 8 0 0 1 152 232H24a8 8 0 0 1-6.73-12.33l36-56a8 8 0 0 1 13.46 0l9.76 15.18l20.85-31.29a8 8 0 0 1 13.32 0ZM216 88v128a16 16 0 0 1-16 16h-8a8 8 0 0 1 0-16h8V96h-48a8 8 0 0 1-8-8V40H56v88a8 8 0 0 1-16 0V40a16 16 0 0 1 16-16h96a8 8 0 0 1 5.66 2.34l56 56A8 8 0 0 1 216 88m-56-8h28.69L160 51.31Z"></svg:path>`,
})
export class PhFileImageFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileImageLightIcon],svg[ph-file-image-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M109 148.67a6 6 0 0 0-10 0L76.46 182.5l-11.41-17.74a6 6 0 0 0-10.1 0l-36 56A6 6 0 0 0 24 230h128a6 6 0 0 0 5-9.33ZM35 218l25-38.9l11.32 17.6a6 6 0 0 0 10 .08l22.64-34L140.79 218ZM212.24 83.76l-56-56A6 6 0 0 0 152 26H56a14 14 0 0 0-14 14v88a6 6 0 0 0 12 0V40a2 2 0 0 1 2-2h90v50a6 6 0 0 0 6 6h50v122a2 2 0 0 1-2 2h-8a6 6 0 0 0 0 12h8a14 14 0 0 0 14-14V88a6 6 0 0 0-1.76-4.24M158 46.48L193.52 82H158Z"></svg:path>`,
})
export class PhFileImageLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileImageThinIcon],svg[ph-file-image-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M107.33 149.78a4 4 0 0 0-6.66 0l-24.25 36.37l-13.06-20.31a4 4 0 0 0-6.72 0l-36 56A4 4 0 0 0 24 228h128a4 4 0 0 0 3.33-6.22Zm-76 70.22L60 175.4l13 20.22a4 4 0 0 0 3.33 1.83a3.93 3.93 0 0 0 3.36-1.78L104 159.21L144.53 220Zm179.5-134.83l-56-56A4 4 0 0 0 152 28H56a12 12 0 0 0-12 12v88a4 4 0 0 0 8 0V40a4 4 0 0 1 4-4h92v52a4 4 0 0 0 4 4h52v124a4 4 0 0 1-4 4h-8a4 4 0 0 0 0 8h8a12 12 0 0 0 12-12V88a4 4 0 0 0-1.17-2.83M156 41.65L198.34 84H156Z"></svg:path>`,
})
export class PhFileImageThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileIniIcon],svg[ph-file-ini-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M48 152v56a8 8 0 0 1-16 0v-56a8 8 0 0 1 16 0m72-8a8 8 0 0 0-8 8v31l-25.49-35.65A8 8 0 0 0 72 152v56a8 8 0 0 0 16 0v-31l25.49 35.69A8 8 0 0 0 120 216a7.9 7.9 0 0 0 2.44-.38A8 8 0 0 0 128 208v-56a8 8 0 0 0-8-8m40 0a8 8 0 0 0-8 8v56a8 8 0 0 0 16 0v-56a8 8 0 0 0-8-8m56-56v136a8 8 0 0 1-16 0V96h-48a8 8 0 0 1-8-8V40H56v72a8 8 0 0 1-16 0V40a16 16 0 0 1 16-16h96a8 8 0 0 1 5.66 2.34l56 56A8 8 0 0 1 216 88m-56-8h28.69L160 51.31Z"></svg:path>`,
})
export class PhFileIniIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileIniBoldIcon],svg[ph-file-ini-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M48 152v56a12 12 0 0 1-24 0v-56a12 12 0 0 1 24 0m72-12a12 12 0 0 0-12 12v18.55L89.76 145A12 12 0 0 0 68 152v56a12 12 0 0 0 24 0v-18.55L110.24 215a12 12 0 0 0 9.76 5a12.2 12.2 0 0 0 3.66-.57A12 12 0 0 0 132 208v-56a12 12 0 0 0-12-12m44 0a12 12 0 0 0-12 12v56a12 12 0 0 0 24 0v-56a12 12 0 0 0-12-12m56-52v136a12 12 0 0 1-24 0V104h-48a12 12 0 0 1-12-12V44H60v64a12 12 0 0 1-24 0V40a20 20 0 0 1 20-20h96a12 12 0 0 1 8.49 3.52l56 56A12 12 0 0 1 220 88m-60-8h23l-23-23Z"></svg:path>`,
})
export class PhFileIniBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileIniDuotoneIcon],svg[ph-file-ini-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 88h-56V32Z" opacity=".2"></svg:path><svg:path d="M48 152v56a8 8 0 0 1-16 0v-56a8 8 0 0 1 16 0m72-8a8 8 0 0 0-8 8v31l-25.49-35.65A8 8 0 0 0 72 152v56a8 8 0 0 0 16 0v-31l25.49 35.69A8 8 0 0 0 120 216a7.9 7.9 0 0 0 2.44-.38A8 8 0 0 0 128 208v-56a8 8 0 0 0-8-8m40 0a8 8 0 0 0-8 8v56a8 8 0 0 0 16 0v-56a8 8 0 0 0-8-8m56-56v136a8 8 0 0 1-16 0V96h-48a8 8 0 0 1-8-8V40H56v72a8 8 0 0 1-16 0V40a16 16 0 0 1 16-16h96a8 8 0 0 1 5.66 2.34l56 56A8 8 0 0 1 216 88m-56-8h28.69L160 51.31Z"></svg:path></svg:g>`,
})
export class PhFileIniDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileIniFillIcon],svg[ph-file-ini-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M48 152v55.73a8.17 8.17 0 0 1-7.47 8.27a8 8 0 0 1-8.53-8v-55.73a8.17 8.17 0 0 1 7.47-8.27a8 8 0 0 1 8.53 8m71.47-8a8.17 8.17 0 0 0-7.47 8.25V183l-25.31-35.4a8.26 8.26 0 0 0-8-3.48A8 8 0 0 0 72 152v55.73a8.17 8.17 0 0 0 7.47 8.27a8 8 0 0 0 8.53-8v-31l25.49 35.69a8 8 0 0 0 10.38 2.31a8.23 8.23 0 0 0 4.13-7.25V152a8 8 0 0 0-8.53-8m40 0a8.17 8.17 0 0 0-7.47 8.25v55.46a8.17 8.17 0 0 0 7.47 8.25a8 8 0 0 0 8.53-8V152a8 8 0 0 0-8.53-8M216 88v135.75a8.15 8.15 0 0 1-6.81 8.16A8 8 0 0 1 200 224V124a4 4 0 0 0-4-4H44a4 4 0 0 1-4-4V40a16 16 0 0 1 16-16h96a8 8 0 0 1 5.66 2.34l56 56A8 8 0 0 1 216 88m-20 0l-44-44v44Z"></svg:path>`,
})
export class PhFileIniFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileIniLightIcon],svg[ph-file-ini-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M46 152v56a6 6 0 0 1-12 0v-56a6 6 0 0 1 12 0m74-6a6 6 0 0 0-6 6v37.28l-29.12-40.77A6 6 0 0 0 74 152v56a6 6 0 0 0 12 0v-37.28l29.12 40.77A6 6 0 0 0 120 214a5.8 5.8 0 0 0 1.83-.29A6 6 0 0 0 126 208v-56a6 6 0 0 0-6-6m40 0a6 6 0 0 0-6 6v56a6 6 0 0 0 12 0v-56a6 6 0 0 0-6-6m54-58v136a6 6 0 0 1-12 0V94h-50a6 6 0 0 1-6-6V38H56a2 2 0 0 0-2 2v72a6 6 0 0 1-12 0V40a14 14 0 0 1 14-14h96a6 6 0 0 1 4.25 1.76l56 56A6 6 0 0 1 214 88m-56-6h35.52L158 46.48Z"></svg:path>`,
})
export class PhFileIniLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileIniThinIcon],svg[ph-file-ini-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M44 152v56a4 4 0 0 1-8 0v-56a4 4 0 0 1 8 0m76-4a4 4 0 0 0-4 4v43.52l-32.75-45.84A4 4 0 0 0 76 152v56a4 4 0 0 0 8 0v-43.52l32.75 45.84A4 4 0 0 0 124 208v-56a4 4 0 0 0-4-4m40 0a4 4 0 0 0-4 4v56a4 4 0 0 0 8 0v-56a4 4 0 0 0-4-4m52-60v136a4 4 0 0 1-8 0V92h-52a4 4 0 0 1-4-4V36H56a4 4 0 0 0-4 4v72a4 4 0 0 1-8 0V40a12 12 0 0 1 12-12h96a4 4 0 0 1 2.83 1.17l56 56A4 4 0 0 1 212 88m-56-4h42.34L156 41.65Z"></svg:path>`,
})
export class PhFileIniThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileJpgIcon],svg[ph-file-jpg-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M120 144h-16a8 8 0 0 0-8 8v56a8 8 0 0 0 16 0v-8h8a28 28 0 0 0 0-56m0 40h-8v-24h8a12 12 0 0 1 0 24m96 0v16.87a8 8 0 0 1-2.22 5.53A30.06 30.06 0 0 1 192 216c-17.65 0-32-16.15-32-36s14.35-36 32-36a29.4 29.4 0 0 1 16.48 5.12a8 8 0 0 1-9 13.26A13.2 13.2 0 0 0 192 160c-8.82 0-16 9-16 20s7.18 20 16 20a13.63 13.63 0 0 0 8-2.71V192a8 8 0 0 1 0-16h8a8 8 0 0 1 8 8M80 152v38a26 26 0 0 1-52 0a8 8 0 0 1 16 0a10 10 0 0 0 20 0v-38a8 8 0 0 1 16 0m133.66-69.66l-56-56A8 8 0 0 0 152 24H56a16 16 0 0 0-16 16v72a8 8 0 0 0 16 0V40h88v48a8 8 0 0 0 8 8h48v16a8 8 0 0 0 16 0V88a8 8 0 0 0-2.34-5.66M160 80V51.31L188.69 80Z"></svg:path>`,
})
export class PhFileJpgIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileJpgBoldIcon],svg[ph-file-jpg-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M120 140h-16a12 12 0 0 0-12 12v56a12 12 0 0 0 24 0v-4h4a32 32 0 0 0 0-64m0 40h-4v-16h4a8 8 0 0 1 0 16m104 20.87a12 12 0 0 1-3.33 8.3A34 34 0 0 1 196 220c-19.85 0-36-17.94-36-40s16.15-40 36-40a33.4 33.4 0 0 1 18.71 5.8a12 12 0 1 1-13.42 19.89A9.4 9.4 0 0 0 196 164c-6.5 0-12 7.33-12 16s5.5 16 12 16a9 9 0 0 0 2.7-.42A12 12 0 0 1 208 176h4a12 12 0 0 1 12 12ZM80 152v38a30 30 0 0 1-60 0a12 12 0 0 1 24 0a6 6 0 0 0 12 0v-38a12 12 0 0 1 24 0m-32-32a12 12 0 0 0 12-12V44h76v48a12 12 0 0 0 12 12h48v4a12 12 0 0 0 24 0V88a12 12 0 0 0-3.51-8.48l-56-56A12 12 0 0 0 152 20H56a20 20 0 0 0-20 20v68a12 12 0 0 0 12 12m112-63l23 23h-23Z"></svg:path>`,
})
export class PhFileJpgBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileJpgDuotoneIcon],svg[ph-file-jpg-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 88h-56V32Z" opacity=".2"></svg:path><svg:path d="M120 144h-16a8 8 0 0 0-8 8v56a8 8 0 0 0 16 0v-8h8a28 28 0 0 0 0-56m0 40h-8v-24h8a12 12 0 0 1 0 24m96 0v16.87a8 8 0 0 1-2.22 5.53A30.06 30.06 0 0 1 192 216c-17.64 0-32-16.15-32-36s14.36-36 32-36a29.4 29.4 0 0 1 16.48 5.12a8 8 0 0 1-9 13.26A13.2 13.2 0 0 0 192 160c-8.82 0-16 9-16 20s7.18 20 16 20a13.63 13.63 0 0 0 8-2.71V192a8 8 0 0 1 0-16h8a8 8 0 0 1 8 8M80 152v38a26 26 0 0 1-52 0a8 8 0 0 1 16 0a10 10 0 0 0 20 0v-38a8 8 0 0 1 16 0m133.66-69.66l-56-56A8 8 0 0 0 152 24H56a16 16 0 0 0-16 16v72a8 8 0 0 0 16 0V40h88v48a8 8 0 0 0 8 8h48v16a8 8 0 0 0 16 0V88a8 8 0 0 0-2.34-5.66M160 80V51.31L188.69 80Z"></svg:path></svg:g>`,
})
export class PhFileJpgDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileJpgFillIcon],svg[ph-file-jpg-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M44 120h168a4 4 0 0 0 4-4V88a8 8 0 0 0-2.34-5.66l-56-56A8 8 0 0 0 152 24H56a16 16 0 0 0-16 16v76a4 4 0 0 0 4 4m108-76l44 44h-44Zm-32 100h-16a8 8 0 0 0-8 8v55.73a8.17 8.17 0 0 0 7.47 8.25a8 8 0 0 0 8.53-8v-8h7.4c15.24 0 28.13-11.92 28.59-27.15A28 28 0 0 0 120 144m-.35 40H112v-24h8a12 12 0 0 1 11.94 13.16A12.23 12.23 0 0 1 119.65 184M216 200.87a8 8 0 0 1-2.26 5.57A30 30 0 0 1 192 216c-17.64 0-32-16.15-32-36s14.36-36 32-36a29.36 29.36 0 0 1 16.09 4.86a8.21 8.21 0 0 1 3 10.64a8 8 0 0 1-11.55 2.88A13.2 13.2 0 0 0 192 160c-8.82 0-16 9-16 20s7.18 20 16 20a13.63 13.63 0 0 0 8-2.71V192a8 8 0 0 1-8-8.53a8.17 8.17 0 0 1 8.25-7.47H208a8 8 0 0 1 8 8ZM80 152v37.41c0 14.22-11.18 26.26-25.41 26.58A26 26 0 0 1 28 190.37a8.17 8.17 0 0 1 7.31-8.37a8 8 0 0 1 8.69 8.22a8.89 8.89 0 0 0 4 8c7.85 4.82 16-.75 16-8.2v-37.75a8.17 8.17 0 0 1 7.47-8.27a8 8 0 0 1 8.53 8"></svg:path>`,
})
export class PhFileJpgFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileJpgLightIcon],svg[ph-file-jpg-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M120 146h-16a6 6 0 0 0-6 6v56a6 6 0 0 0 12 0v-10h10a26 26 0 0 0 0-52m0 40h-10v-28h10a14 14 0 0 1 0 28m94-2v16.87a6 6 0 0 1-1.67 4.15A28.06 28.06 0 0 1 192 214c-16.54 0-30-15.25-30-34s13.46-34 30-34a27.43 27.43 0 0 1 15.36 4.77a6 6 0 0 1-6.72 9.95A15.25 15.25 0 0 0 192 158c-9.93 0-18 9.87-18 22s8.07 22 18 22a15.75 15.75 0 0 0 10-3.73V190h-2a6 6 0 0 1 0-12h8a6 6 0 0 1 6 6M78 152v38a24 24 0 0 1-48 0a6 6 0 0 1 12 0a12 12 0 0 0 24 0v-38a6 6 0 0 1 12 0m134.24-68.24l-56-56A6 6 0 0 0 152 26H56a14 14 0 0 0-14 14v72a6 6 0 0 0 12 0V40a2 2 0 0 1 2-2h90v50a6 6 0 0 0 6 6h50v18a6 6 0 0 0 12 0V88a6 6 0 0 0-1.76-4.24M158 82V46.48L193.52 82Z"></svg:path>`,
})
export class PhFileJpgLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileJpgThinIcon],svg[ph-file-jpg-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M120 148h-16a4 4 0 0 0-4 4v56a4 4 0 0 0 8 0v-12h12a24 24 0 0 0 0-48m0 40h-12v-32h12a16 16 0 0 1 0 32m92-4v16.87a4 4 0 0 1-1.11 2.77A26.1 26.1 0 0 1 192 212c-15.44 0-28-14.36-28-32s12.56-32 28-32a25.4 25.4 0 0 1 14.24 4.43a4 4 0 1 1-4.48 6.63A17.45 17.45 0 0 0 192 156c-11 0-20 10.77-20 24s9 24 20 24a17.87 17.87 0 0 0 12-4.82V188h-4a4 4 0 0 1 0-8h8a4 4 0 0 1 4 4M76 152v38a22 22 0 0 1-44 0a4 4 0 0 1 8 0a14 14 0 0 0 28 0v-38a4 4 0 0 1 8 0m134.83-66.83l-56-56A4 4 0 0 0 152 28H56a12 12 0 0 0-12 12v72a4 4 0 0 0 8 0V40a4 4 0 0 1 4-4h92v52a4 4 0 0 0 4 4h52v20a4 4 0 0 0 8 0V88a4 4 0 0 0-1.17-2.83M156 84V41.65L198.34 84Z"></svg:path>`,
})
export class PhFileJpgThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileJsIcon],svg[ph-file-js-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m213.66 82.34l-56-56A8 8 0 0 0 152 24H56a16 16 0 0 0-16 16v72a8 8 0 0 0 16 0V40h88v48a8 8 0 0 0 8 8h48v120h-24a8 8 0 0 0 0 16h24a16 16 0 0 0 16-16V88a8 8 0 0 0-2.34-5.66M160 51.31L188.69 80H160Zm-12.19 145a20.82 20.82 0 0 1-9.19 15.23C133.43 215 127 216 121.13 216a61.3 61.3 0 0 1-15.19-2a8 8 0 0 1 4.31-15.41c4.38 1.2 15 2.7 19.55-.36c.88-.59 1.83-1.52 2.14-3.93c.34-2.67-.71-4.1-12.78-7.59c-9.35-2.7-25-7.23-23-23.11a20.56 20.56 0 0 1 9-14.95c11.84-8 30.71-3.31 32.83-2.76a8 8 0 0 1-4.07 15.48c-4.49-1.17-15.23-2.56-19.83.56a4.54 4.54 0 0 0-2 3.67c-.12.9-.14 1.09 1.11 1.9c2.31 1.49 6.45 2.68 10.45 3.84c9.84 2.83 26.4 7.66 24.16 24.97M80 152v38a26 26 0 0 1-52 0a8 8 0 0 1 16 0a10 10 0 0 0 20 0v-38a8 8 0 0 1 16 0"></svg:path>`,
})
export class PhFileJsIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileJsBoldIcon],svg[ph-file-js-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m216.49 79.51l-56-56A12 12 0 0 0 152 20H56a20 20 0 0 0-20 20v68a12 12 0 0 0 24 0V44h76v48a12 12 0 0 0 12 12h48v108h-16a12 12 0 0 0 0 24h20a20 20 0 0 0 20-20V88a12 12 0 0 0-3.51-8.49M160 57l23 23h-23Zm-4.22 139.85a24.75 24.75 0 0 1-10.95 18.06c-6 4-13.27 5.15-19.73 5.15a63.8 63.8 0 0 1-16.23-2.21a12 12 0 0 1 6.46-23.12c6.81 1.86 15 1.61 16.39.06a2.5 2.5 0 0 0 .21-.71c-1.94-1.23-6.83-2.64-9.88-3.52c-5.39-1.56-11-3.18-15.75-6.27c-7.62-4.92-11.21-12.45-10.11-21.2a24.45 24.45 0 0 1 10.69-17.75c6.06-4.09 14.17-5.84 24.1-5.18A68.5 68.5 0 0 1 143 142a12 12 0 0 1-6.1 23.21c-6.36-1.63-13.62-1.51-16.07-.33a80 80 0 0 0 7.91 2.59c5.48 1.58 11.68 3.37 16.8 6.82c7.79 5.26 11.46 13.26 10.24 22.53ZM84 152v38a30 30 0 0 1-60 0a12 12 0 0 1 24 0a6 6 0 0 0 12 0v-38a12 12 0 0 1 24 0"></svg:path>`,
})
export class PhFileJsBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileJsDuotoneIcon],svg[ph-file-js-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 88h-56V32Z" opacity=".2"></svg:path><svg:path d="m213.66 82.34l-56-56A8 8 0 0 0 152 24H56a16 16 0 0 0-16 16v72a8 8 0 0 0 16 0V40h88v48a8 8 0 0 0 8 8h48v120h-24a8 8 0 0 0 0 16h24a16 16 0 0 0 16-16V88a8 8 0 0 0-2.34-5.66M160 51.31L188.69 80H160Zm-12.19 145a20.82 20.82 0 0 1-9.19 15.23C133.43 215 127 216 121.13 216a61 61 0 0 1-15.13-2a8 8 0 1 1 4.3-15.41c4.38 1.2 15 2.7 19.55-.36c.88-.59 1.83-1.52 2.14-3.93c.35-2.67-.71-4.1-12.78-7.59c-9.35-2.7-25-7.23-23-23.11a20.56 20.56 0 0 1 9-14.95c11.84-8 30.71-3.31 32.83-2.76a8 8 0 0 1-4.07 15.48c-4.49-1.17-15.23-2.56-19.83.56a4.54 4.54 0 0 0-2 3.67c-.12.9-.14 1.09 1.11 1.9c2.31 1.49 6.45 2.68 10.45 3.84c9.79 2.83 26.35 7.66 24.11 24.97M80 152v38a26 26 0 0 1-52 0a8 8 0 0 1 16 0a10 10 0 0 0 20 0v-38a8 8 0 0 1 16 0"></svg:path></svg:g>`,
})
export class PhFileJsDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileJsFillIcon],svg[ph-file-js-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m213.66 82.34l-56-56A8 8 0 0 0 152 24H56a16 16 0 0 0-16 16v76a4 4 0 0 0 4 4h120a4 4 0 0 1 4 4v104a4 4 0 0 0 4 4h28a16 16 0 0 0 16-16V88a8 8 0 0 0-2.34-5.66M152 88V44l44 44Zm-4.19 108.31a20.82 20.82 0 0 1-9.19 15.23C133.43 215 127 216 121.13 216a61.3 61.3 0 0 1-15.19-2a8 8 0 0 1 4.31-15.41c4.38 1.2 15 2.7 19.55-.36c.88-.59 1.83-1.52 2.14-3.93c.34-2.67-.72-4.1-12.78-7.59c-9.35-2.7-25-7.23-23-23.11a20.58 20.58 0 0 1 9-14.95c11.85-8 30.72-3.31 32.84-2.76a8 8 0 0 1-4.07 15.48c-4.49-1.17-15.23-2.56-19.83.56a4.57 4.57 0 0 0-2 3.67c-.11.9-.13 1.09 1.12 1.9c2.31 1.49 6.45 2.68 10.45 3.84c9.82 2.83 26.33 7.66 24.14 24.97M80 152v37.41c0 14.22-11.18 26.26-25.41 26.58A26 26 0 0 1 28 190.37a8.17 8.17 0 0 1 7.31-8.37a8 8 0 0 1 8.69 8.22a8.89 8.89 0 0 0 4 8c7.85 4.82 16-.75 16-8.2v-37.75a8.17 8.17 0 0 1 7.47-8.27a8 8 0 0 1 8.53 8"></svg:path>`,
})
export class PhFileJsFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileJsLightIcon],svg[ph-file-js-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m212.24 83.76l-56-56A6 6 0 0 0 152 26H56a14 14 0 0 0-14 14v72a6 6 0 0 0 12 0V40a2 2 0 0 1 2-2h90v50a6 6 0 0 0 6 6h50v122a2 2 0 0 1-2 2h-24a6 6 0 0 0 0 12h24a14 14 0 0 0 14-14V88a6 6 0 0 0-1.76-4.24M158 46.48L193.52 82H158Zm-12.17 149.58a18.89 18.89 0 0 1-8.31 13.81c-4.82 3.19-10.87 4.14-16.36 4.14a59 59 0 0 1-14.68-2a6 6 0 0 1 3.23-11.56c3.71 1 15.58 3.11 21.19-.62a6.85 6.85 0 0 0 3-5.34c.58-4.43-2.08-6.26-14.2-9.76c-9.31-2.69-23.37-6.75-21.57-20.94a18.61 18.61 0 0 1 8.08-13.54c11.11-7.49 29.18-3 31.21-2.48a6 6 0 0 1-3.06 11.6c-3.78-1-15.85-3-21.45.84a6.59 6.59 0 0 0-2.88 5.08c-.41 3.22 2.14 4.78 13 7.91c9.89 2.89 24.81 7.2 22.8 22.86M78 152v38a24 24 0 0 1-48 0a6 6 0 0 1 12 0a12 12 0 0 0 24 0v-38a6 6 0 0 1 12 0"></svg:path>`,
})
export class PhFileJsLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileJsThinIcon],svg[ph-file-js-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m210.83 85.17l-56-56A4 4 0 0 0 152 28H56a12 12 0 0 0-12 12v72a4 4 0 0 0 8 0V40a4 4 0 0 1 4-4h92v52a4 4 0 0 0 4 4h52v124a4 4 0 0 1-4 4h-24a4 4 0 0 0 0 8h24a12 12 0 0 0 12-12V88a4 4 0 0 0-1.17-2.83M156 41.65L198.34 84H156ZM143.84 195.8a17 17 0 0 1-7.43 12.41c-4.39 2.91-10 3.77-15.22 3.77a58 58 0 0 1-14.19-1.87a4 4 0 0 1 2.15-7.7c4.22 1.17 16.56 3.29 22.83-.88a8.94 8.94 0 0 0 3.91-6.75c.83-6.45-4.38-8.69-15.64-11.94c-9.68-2.8-21.72-6.28-20.14-18.77a16.66 16.66 0 0 1 7.22-12.13c4.56-3.07 11-4.36 19.1-3.82a61.3 61.3 0 0 1 10.48 1.61a4 4 0 0 1-2.05 7.74c-4.29-1.13-16.81-3.12-23.06 1.11a8.51 8.51 0 0 0-3.75 6.49c-.66 5.17 3.89 7 14.42 10.08c9.79 2.85 23.17 6.69 21.37 20.65M76 152v38a22 22 0 0 1-44 0a4 4 0 0 1 8 0a14 14 0 0 0 28 0v-38a4 4 0 0 1 8 0"></svg:path>`,
})
export class PhFileJsThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileJsxIcon],svg[ph-file-jsx-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M147.81 196.31a20.82 20.82 0 0 1-9.19 15.23C133.43 215 127 216 121.13 216a60.6 60.6 0 0 1-15.19-2a8 8 0 0 1 4.31-15.41c4.38 1.21 15 2.71 19.55-.35c.88-.6 1.83-1.52 2.14-3.93c.34-2.67-.72-4.1-12.78-7.59c-9.35-2.7-25-7.23-23-23.11a20.58 20.58 0 0 1 9-14.95c11.85-8 30.72-3.31 32.84-2.76a8 8 0 0 1-4.07 15.48c-4.49-1.17-15.23-2.56-19.83.56a4.54 4.54 0 0 0-2 3.67c-.12.9-.14 1.08 1.11 1.9c2.31 1.49 6.45 2.68 10.45 3.84c9.83 2.82 26.34 7.65 24.15 24.96M72 144a8 8 0 0 0-8 8v38a10 10 0 0 1-20 0a8 8 0 0 0-16 0a26 26 0 0 0 52 0v-38a8 8 0 0 0-8-8m140.65 1.49a8 8 0 0 0-11.16 1.86L188 166.24l-13.49-18.89a8 8 0 0 0-13 9.3L178.17 180l-16.68 23.35a8 8 0 0 0 13 9.3L188 193.76l13.49 18.89a8 8 0 0 0 13-9.3L197.83 180l16.68-23.35a8 8 0 0 0-1.86-11.16M216 88v24a8 8 0 0 1-16 0V96h-48a8 8 0 0 1-8-8V40H56v72a8 8 0 0 1-16 0V40a16 16 0 0 1 16-16h96a8 8 0 0 1 5.66 2.34l56 56A8 8 0 0 1 216 88m-27.31-8L160 51.31V80Z"></svg:path>`,
})
export class PhFileJsxIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileJsxBoldIcon],svg[ph-file-jsx-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M151.78 196.8a24.73 24.73 0 0 1-10.95 18c-6 4-13.27 5.15-19.73 5.15a63.8 63.8 0 0 1-16.23-2.21a12 12 0 1 1 6.46-23.11c6.81 1.85 15 1.61 16.39.06a2.5 2.5 0 0 0 .21-.71c-1.94-1.23-6.83-2.64-9.88-3.53c-5.39-1.56-11-3.17-15.75-6.26c-7.63-4.92-11.21-12.45-10.11-21.19a24.45 24.45 0 0 1 10.69-17.76c6.06-4.09 14.17-5.83 24.1-5.17A69 69 0 0 1 139 142a12 12 0 0 1-6.1 23.21c-6.36-1.63-13.62-1.51-16.07-.33a80 80 0 0 0 7.91 2.59c5.47 1.58 11.68 3.37 16.8 6.82c7.79 5.24 11.46 13.24 10.24 22.51M68 140a12 12 0 0 0-12 12v38a6 6 0 0 1-12 0a12 12 0 0 0-24 0a30 30 0 0 0 60 0v-38a12 12 0 0 0-12-12m138.75 40l15-21a12 12 0 0 0-19.53-14L192 159.34L181.76 145a12 12 0 0 0-19.53 14l15 21l-15 21a12 12 0 1 0 19.53 14L192 200.62L202.23 215a12 12 0 0 0 19.53-14ZM36 108V40a20 20 0 0 1 20-20h96a12 12 0 0 1 8.49 3.51l56 56A12 12 0 0 1 220 88v20a12 12 0 1 1-24 0v-4h-48a12 12 0 0 1-12-12V44H60v64a12 12 0 1 1-24 0m124-28h23l-23-23Z"></svg:path>`,
})
export class PhFileJsxBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileJsxDuotoneIcon],svg[ph-file-jsx-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 88h-56V32Z" opacity=".2"></svg:path><svg:path d="M147.81 196.31a20.82 20.82 0 0 1-9.19 15.23C133.43 215 127 216 121.13 216a60.4 60.4 0 0 1-15.13-2a8 8 0 1 1 4.3-15.41c4.38 1.21 15 2.71 19.55-.35c.88-.6 1.83-1.52 2.14-3.93c.34-2.67-.72-4.1-12.78-7.59c-9.35-2.7-25-7.23-23-23.12a20.58 20.58 0 0 1 9-14.94c11.85-8 30.72-3.31 32.84-2.76a8 8 0 0 1-4.07 15.48c-4.49-1.17-15.23-2.56-19.83.56a4.54 4.54 0 0 0-2 3.67c-.12.9-.14 1.08 1.11 1.9c2.31 1.49 6.45 2.68 10.45 3.84c9.78 2.82 26.29 7.65 24.1 24.96M72 144a8 8 0 0 0-8 8v38a10 10 0 0 1-20 0a8 8 0 0 0-16 0a26 26 0 0 0 52 0v-38a8 8 0 0 0-8-8m140.65 1.49a8 8 0 0 0-11.16 1.86L188 166.24l-13.49-18.89a8 8 0 0 0-13 9.3L178.17 180l-16.68 23.35a8 8 0 0 0 13 9.3L188 193.76l13.49 18.89a8 8 0 0 0 13-9.3L197.83 180l16.68-23.35a8 8 0 0 0-1.86-11.16M216 88v24a8 8 0 0 1-16 0V96h-48a8 8 0 0 1-8-8V40H56v72a8 8 0 0 1-16 0V40a16 16 0 0 1 16-16h96a8 8 0 0 1 5.66 2.34l56 56A8 8 0 0 1 216 88m-27.31-8L160 51.31V80Z"></svg:path></svg:g>`,
})
export class PhFileJsxDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileJsxFillIcon],svg[ph-file-jsx-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m213.66 82.34l-56-56A8 8 0 0 0 152 24H56a16 16 0 0 0-16 16v76a4 4 0 0 0 4 4h168a4 4 0 0 0 4-4V88a8 8 0 0 0-2.34-5.66M152 88V44l44 44Zm-4.19 108.31a20.82 20.82 0 0 1-9.19 15.23C133.43 215 127 216 121.13 216a60.6 60.6 0 0 1-15.19-2a8 8 0 0 1 4.31-15.41c4.38 1.21 15 2.71 19.55-.35c.88-.6 1.83-1.52 2.14-3.93c.34-2.67-.72-4.1-12.78-7.59c-9.35-2.7-25-7.23-23-23.12a20.58 20.58 0 0 1 9-14.94c11.85-8 30.72-3.31 32.84-2.76a8 8 0 0 1-4.07 15.48c-4.49-1.17-15.23-2.56-19.83.56a4.57 4.57 0 0 0-2 3.67c-.11.9-.13 1.08 1.12 1.9c2.31 1.49 6.45 2.68 10.45 3.84c9.82 2.82 26.33 7.65 24.14 24.96M80 152v37.4c0 14.23-11.18 26.27-25.41 26.59A26 26 0 0 1 28 190.37a8.17 8.17 0 0 1 7.31-8.37a8 8 0 0 1 8.69 8.22a8.89 8.89 0 0 0 4 8c7.85 4.82 16-.76 16-8.2v-37.75a8.17 8.17 0 0 1 7.47-8.27a8 8 0 0 1 8.53 8m134.51 4.65L197.83 180l16.68 23.35a8 8 0 0 1-13 9.3L188 193.76l-13.49 18.89a8 8 0 1 1-13-9.3L178.17 180l-16.68-23.35a8 8 0 0 1 13-9.3L188 166.24l13.49-18.89a8 8 0 0 1 13 9.3Z"></svg:path>`,
})
export class PhFileJsxFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileJsxLightIcon],svg[ph-file-jsx-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M145.83 196.05a18.89 18.89 0 0 1-8.31 13.81c-4.82 3.19-10.87 4.14-16.36 4.14a59.4 59.4 0 0 1-14.68-2a6 6 0 0 1 3.23-11.56c3.71 1 15.58 3.11 21.19-.62a6.85 6.85 0 0 0 3-5.34c.58-4.43-2.08-6.26-14.2-9.76c-9.31-2.69-23.37-6.75-21.57-20.94a18.61 18.61 0 0 1 8.08-13.54c11.11-7.49 29.18-3 31.21-2.48a6 6 0 0 1-3.06 11.6c-3.79-1-15.85-2.95-21.45.84a6.59 6.59 0 0 0-2.88 5.08c-.41 3.22 2.14 4.78 13 7.91c9.89 2.89 24.81 7.2 22.8 22.86M72 146a6 6 0 0 0-6 6v38a12 12 0 0 1-24 0a6 6 0 0 0-12 0a24 24 0 0 0 48 0v-38a6 6 0 0 0-6-6m139.49 1.12a6 6 0 0 0-8.37 1.39L188 169.67l-15.12-21.17a6 6 0 0 0-9.76 7l17.51 24.5l-17.51 24.5a6 6 0 1 0 9.76 7L188 190.31l15.12 21.16a6 6 0 1 0 9.76-7L195.37 180l17.51-24.51a6 6 0 0 0-1.39-8.38ZM214 88v24a6 6 0 1 1-12 0V94h-50a6 6 0 0 1-6-6V38H56a2 2 0 0 0-2 2v72a6 6 0 1 1-12 0V40a14 14 0 0 1 14-14h96a6 6 0 0 1 4.25 1.76l56 56A6 6 0 0 1 214 88m-20.49-6L158 46.48V82Z"></svg:path>`,
})
export class PhFileJsxLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileJsxThinIcon],svg[ph-file-jsx-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M143.84 195.8a17 17 0 0 1-7.43 12.41c-4.39 2.91-10 3.77-15.22 3.77a58 58 0 0 1-14.19-1.87a4 4 0 1 1 2.15-7.7c4.22 1.17 16.56 3.29 22.83-.88a8.94 8.94 0 0 0 3.91-6.75c.83-6.45-4.38-8.69-15.64-11.94c-9.68-2.8-21.72-6.28-20.14-18.77a16.66 16.66 0 0 1 7.22-12.13c4.56-3.07 11-4.36 19.1-3.82a61.3 61.3 0 0 1 10.48 1.61a4 4 0 0 1-2.05 7.74c-4.29-1.13-16.81-3.12-23.06 1.11a8.51 8.51 0 0 0-3.75 6.49c-.66 5.17 3.89 7 14.42 10.08c9.79 2.85 23.17 6.69 21.37 20.65M72 148a4 4 0 0 0-4 4v38a14 14 0 0 1-28 0a4 4 0 0 0-8 0a22 22 0 0 0 44 0v-38a4 4 0 0 0-4-4m138.32.75a4 4 0 0 0-5.58.92L188 173.12l-16.75-23.45a4 4 0 0 0-6.51 4.66L183.08 180l-18.34 25.67a4 4 0 0 0 .93 5.58a4 4 0 0 0 5.58-.92L188 186.88l16.74 23.45A4 4 0 0 0 208 212a3.9 3.9 0 0 0 2.32-.75a4 4 0 0 0 .93-5.58L192.92 180l18.33-25.67a4 4 0 0 0-.93-5.58M212 88v24a4 4 0 0 1-8 0V92h-52a4 4 0 0 1-4-4V36H56a4 4 0 0 0-4 4v72a4 4 0 0 1-8 0V40a12 12 0 0 1 12-12h96a4 4 0 0 1 2.83 1.17l56 56A4 4 0 0 1 212 88m-13.66-4L156 41.65V84Z"></svg:path>`,
})
export class PhFileJsxThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileLightIcon],svg[ph-file-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m212.24 83.76l-56-56A6 6 0 0 0 152 26H56a14 14 0 0 0-14 14v176a14 14 0 0 0 14 14h144a14 14 0 0 0 14-14V88a6 6 0 0 0-1.76-4.24M158 46.48L193.52 82H158ZM200 218H56a2 2 0 0 1-2-2V40a2 2 0 0 1 2-2h90v50a6 6 0 0 0 6 6h50v122a2 2 0 0 1-2 2"></svg:path>`,
})
export class PhFileLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileLockIcon],svg[ph-file-lock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M120 176h-8v-4a28 28 0 0 0-56 0v4h-8a8 8 0 0 0-8 8v40a8 8 0 0 0 8 8h72a8 8 0 0 0 8-8v-40a8 8 0 0 0-8-8m-48-4a12 12 0 0 1 24 0v4H72Zm40 44H56v-24h56ZM213.66 82.34l-56-56A8 8 0 0 0 152 24H56a16 16 0 0 0-16 16v88a8 8 0 0 0 16 0V40h88v48a8 8 0 0 0 8 8h48v120h-40a8 8 0 0 0 0 16h40a16 16 0 0 0 16-16V88a8 8 0 0 0-2.34-5.66M160 51.31L188.69 80H160Z"></svg:path>`,
})
export class PhFileLockIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileLockBoldIcon],svg[ph-file-lock-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M120 168h-4v-4a32 32 0 0 0-64 0v4h-4a12 12 0 0 0-12 12v44a12 12 0 0 0 12 12h72a12 12 0 0 0 12-12v-44a12 12 0 0 0-12-12m-44-4a8 8 0 0 1 16 0v4H76Zm32 48H60v-20h48ZM216.49 79.52l-56-56A12 12 0 0 0 152 20H56a20 20 0 0 0-20 20v68a12 12 0 0 0 24 0V44h76v48a12 12 0 0 0 12 12h48v108h-32a12 12 0 0 0 0 24h36a20 20 0 0 0 20-20V88a12 12 0 0 0-3.51-8.48M160 57l23 23h-23Z"></svg:path>`,
})
export class PhFileLockBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileLockDuotoneIcon],svg[ph-file-lock-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M48 184h72v40H48ZM152 32v56h56Z" opacity=".2"></svg:path><svg:path d="M120 176h-8v-4a28 28 0 0 0-56 0v4h-8a8 8 0 0 0-8 8v40a8 8 0 0 0 8 8h72a8 8 0 0 0 8-8v-40a8 8 0 0 0-8-8m-48-4a12 12 0 0 1 24 0v4H72Zm40 44H56v-24h56ZM213.66 82.34l-56-56A8 8 0 0 0 152 24H56a16 16 0 0 0-16 16v88a8 8 0 0 0 16 0V40h88v48a8 8 0 0 0 8 8h48v120h-40a8 8 0 0 0 0 16h40a16 16 0 0 0 16-16V88a8 8 0 0 0-2.34-5.66M160 51.31L188.69 80H160Z"></svg:path></svg:g>`,
})
export class PhFileLockDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileLockFillIcon],svg[ph-file-lock-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M120 176h-8v-4a28 28 0 0 0-56 0v4h-8a8 8 0 0 0-8 8v40a8 8 0 0 0 8 8h72a8 8 0 0 0 8-8v-40a8 8 0 0 0-8-8m-24 0H72v-4a12 12 0 0 1 24 0Zm117.66-93.66l-56-56A8 8 0 0 0 152 24H56a16 16 0 0 0-16 16v88a8 8 0 0 0 16 0V40h88v48a8 8 0 0 0 8 8h48v120h-40a8 8 0 0 0 0 16h40a16 16 0 0 0 16-16V88a8 8 0 0 0-2.34-5.66M160 51.31L188.69 80H160Z"></svg:path>`,
})
export class PhFileLockFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileLockLightIcon],svg[ph-file-lock-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M120 178h-10v-6a26 26 0 0 0-52 0v6H48a6 6 0 0 0-6 6v40a6 6 0 0 0 6 6h72a6 6 0 0 0 6-6v-40a6 6 0 0 0-6-6m-50-6a14 14 0 0 1 28 0v6H70Zm44 46H54v-28h60Zm98.24-134.24l-56-56A6 6 0 0 0 152 26H56a14 14 0 0 0-14 14v88a6 6 0 0 0 12 0V40a2 2 0 0 1 2-2h90v50a6 6 0 0 0 6 6h50v122a2 2 0 0 1-2 2h-40a6 6 0 0 0 0 12h40a14 14 0 0 0 14-14V88a6 6 0 0 0-1.76-4.24M158 46.48L193.52 82H158Z"></svg:path>`,
})
export class PhFileLockLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileLockThinIcon],svg[ph-file-lock-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M120 180h-12v-8a24 24 0 0 0-48 0v8H48a4 4 0 0 0-4 4v40a4 4 0 0 0 4 4h72a4 4 0 0 0 4-4v-40a4 4 0 0 0-4-4m-52-8a16 16 0 0 1 32 0v8H68Zm48 48H52v-32h64Zm94.83-134.83l-56-56A4 4 0 0 0 152 28H56a12 12 0 0 0-12 12v88a4 4 0 0 0 8 0V40a4 4 0 0 1 4-4h92v52a4 4 0 0 0 4 4h52v124a4 4 0 0 1-4 4h-40a4 4 0 0 0 0 8h40a12 12 0 0 0 12-12V88a4 4 0 0 0-1.17-2.83M156 41.65L198.34 84H156Z"></svg:path>`,
})
export class PhFileLockThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileMagnifyingGlassIcon],svg[ph-file-magnifying-glass-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m213.66 82.34l-56-56A8 8 0 0 0 152 24H56a16 16 0 0 0-16 16v176a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V88a8 8 0 0 0-2.34-5.66M160 51.31L188.69 80H160ZM200 216H56V40h88v48a8 8 0 0 0 8 8h48zm-45.54-48.85a36.05 36.05 0 1 0-11.31 11.31l11.19 11.2a8 8 0 0 0 11.32-11.32ZM104 148a20 20 0 1 1 20 20a20 20 0 0 1-20-20"></svg:path>`,
})
export class PhFileMagnifyingGlassIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileMagnifyingGlassBoldIcon],svg[ph-file-magnifying-glass-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m216.49 79.52l-56-56A12 12 0 0 0 152 20H56a20 20 0 0 0-20 20v176a20 20 0 0 0 20 20h144a20 20 0 0 0 20-20V88a12 12 0 0 0-3.51-8.48M183 80h-23V57ZM60 212V44h76v48a12 12 0 0 0 12 12h48v108Zm96.48-48.49a36 36 0 1 0-17 17l12 12a12 12 0 0 0 17-17ZM112 148a12 12 0 1 1 12 12a12 12 0 0 1-12-12"></svg:path>`,
})
export class PhFileMagnifyingGlassBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileMagnifyingGlassDuotoneIcon],svg[ph-file-magnifying-glass-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 88h-56V32Z" opacity=".2"></svg:path><svg:path d="m213.66 82.34l-56-56A8 8 0 0 0 152 24H56a16 16 0 0 0-16 16v176a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V88a8 8 0 0 0-2.34-5.66M160 51.31L188.69 80H160ZM200 216H56V40h88v48a8 8 0 0 0 8 8h48zm-45.54-48.85a36.05 36.05 0 1 0-11.31 11.31l11.19 11.2a8 8 0 0 0 11.32-11.32ZM104 148a20 20 0 1 1 20 20a20 20 0 0 1-20-20"></svg:path></svg:g>`,
})
export class PhFileMagnifyingGlassDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileMagnifyingGlassFillIcon],svg[ph-file-magnifying-glass-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M144 148a20 20 0 1 1-20-20a20 20 0 0 1 20 20m72-60v128a16 16 0 0 1-16 16H56a16 16 0 0 1-16-16V40a16 16 0 0 1 16-16h96a8 8 0 0 1 5.66 2.34l56 56A8 8 0 0 1 216 88m-50.34 90.34l-11.2-11.19a36.05 36.05 0 1 0-11.31 11.31l11.19 11.2a8 8 0 0 0 11.32-11.32M196 88l-44-44v44Z"></svg:path>`,
})
export class PhFileMagnifyingGlassFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileMagnifyingGlassLightIcon],svg[ph-file-magnifying-glass-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m212.24 83.76l-56-56A6 6 0 0 0 152 26H56a14 14 0 0 0-14 14v176a14 14 0 0 0 14 14h144a14 14 0 0 0 14-14V88a6 6 0 0 0-1.76-4.24M158 46.48L193.52 82H158ZM200 218H56a2 2 0 0 1-2-2V40a2 2 0 0 1 2-2h90v50a6 6 0 0 0 6 6h50v122a2 2 0 0 1-2 2m-48.11-50.59a34.05 34.05 0 1 0-8.48 8.48l12.35 12.35a6 6 0 0 0 8.48-8.48ZM102 148a22 22 0 1 1 22 22a22 22 0 0 1-22-22"></svg:path>`,
})
export class PhFileMagnifyingGlassLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileMagnifyingGlassThinIcon],svg[ph-file-magnifying-glass-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m210.83 85.17l-56-56A4 4 0 0 0 152 28H56a12 12 0 0 0-12 12v176a12 12 0 0 0 12 12h144a12 12 0 0 0 12-12V88a4 4 0 0 0-1.17-2.83M156 41.65L198.34 84H156ZM200 220H56a4 4 0 0 1-4-4V40a4 4 0 0 1 4-4h92v52a4 4 0 0 0 4 4h52v124a4 4 0 0 1-4 4m-50.74-52.39a32.05 32.05 0 1 0-5.65 5.65l13.56 13.57a4 4 0 0 0 5.66-5.66ZM100 148a24 24 0 1 1 24 24a24 24 0 0 1-24-24"></svg:path>`,
})
export class PhFileMagnifyingGlassThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileMdIcon],svg[ph-file-md-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m213.66 82.34l-56-56A8 8 0 0 0 152 24H56a16 16 0 0 0-16 16v72a8 8 0 0 0 16 0V40h88v48a8 8 0 0 0 8 8h48v128a8 8 0 0 0 16 0V88a8 8 0 0 0-2.34-5.66M160 51.31L188.69 80H160ZM144 144h-16a8 8 0 0 0-8 8v56a8 8 0 0 0 8 8h16a36 36 0 0 0 0-72m0 56h-8v-40h8a20 20 0 0 1 0 40m-40-48v56a8 8 0 0 1-16 0v-30.62l-13.45 19.21a8 8 0 0 1-13.1 0L48 177.38V208a8 8 0 0 1-16 0v-56a8 8 0 0 1 14.55-4.59L68 178.05l21.45-30.64A8 8 0 0 1 104 152"></svg:path>`,
})
export class PhFileMdIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileMdBoldIcon],svg[ph-file-md-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M100 152v56a12 12 0 0 1-24 0v-17.93l-6.17 8.81a12 12 0 0 1-19.66 0L44 190.07V208a12 12 0 0 1-24 0v-56a12 12 0 0 1 21.83-6.88L60 171.07l18.17-25.95A12 12 0 0 1 100 152m84 28a40 40 0 0 1-40 40h-16a12 12 0 0 1-12-12v-56a12 12 0 0 1 12-12h16a40 40 0 0 1 40 40m-24 0a16 16 0 0 0-16-16h-4v32h4a16 16 0 0 0 16-16m60-92v136a12 12 0 0 1-24 0V104h-48a12 12 0 0 1-12-12V44H60v64a12 12 0 0 1-24 0V40a20 20 0 0 1 20-20h96a12 12 0 0 1 8.49 3.52l56 56A12 12 0 0 1 220 88m-60-8h23l-23-23Z"></svg:path>`,
})
export class PhFileMdBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileMdDuotoneIcon],svg[ph-file-md-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 88h-56V32Z" opacity=".2"></svg:path><svg:path d="m213.66 82.34l-56-56A8 8 0 0 0 152 24H56a16 16 0 0 0-16 16v72a8 8 0 0 0 16 0V40h88v48a8 8 0 0 0 8 8h48v128a8 8 0 0 0 16 0V88a8 8 0 0 0-2.34-5.66M160 51.31L188.69 80H160ZM144 144h-16a8 8 0 0 0-8 8v56a8 8 0 0 0 8 8h16a36 36 0 0 0 0-72m0 56h-8v-40h8a20 20 0 0 1 0 40m-40-48v56a8 8 0 0 1-16 0v-30.62l-13.45 19.21a8 8 0 0 1-13.1 0L48 177.38V208a8 8 0 0 1-16 0v-56a8 8 0 0 1 14.55-4.59L68 178.05l21.45-30.64A8 8 0 0 1 104 152"></svg:path></svg:g>`,
})
export class PhFileMdDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileMdFillIcon],svg[ph-file-md-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m213.66 82.34l-56-56A8 8 0 0 0 152 24H56a16 16 0 0 0-16 16v76a4 4 0 0 0 4 4h152a4 4 0 0 1 4 4v100a8 8 0 0 0 9.19 7.91a8.15 8.15 0 0 0 6.81-8.16V88a8 8 0 0 0-2.34-5.66M152 88V44l44 44Zm-8 56h-16a8 8 0 0 0-8 8v56a8 8 0 0 0 8 8h15.32c19.66 0 36.21-15.48 36.67-35.13A36 36 0 0 0 144 144m-.49 56H136v-40h8a20 20 0 0 1 20 20.77c-.42 10.82-9.66 19.23-20.49 19.23M104 152v55.73a8.17 8.17 0 0 1-7.47 8.27a8 8 0 0 1-8.53-8v-30.62l-13.32 19a8.3 8.3 0 0 1-4.2 3.2a8 8 0 0 1-9-3L48 177.38v30.35a8.17 8.17 0 0 1-7.47 8.27a8 8 0 0 1-8.53-8v-55.69a8.27 8.27 0 0 1 4.56-7.53a8 8 0 0 1 10 2.63L68 178.05l21.27-30.39a8.28 8.28 0 0 1 8.06-3.55A8 8 0 0 1 104 152"></svg:path>`,
})
export class PhFileMdFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileMdLightIcon],svg[ph-file-md-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m212.24 83.76l-56-56A6 6 0 0 0 152 26H56a14 14 0 0 0-14 14v72a6 6 0 0 0 12 0V40a2 2 0 0 1 2-2h90v50a6 6 0 0 0 6 6h50v130a6 6 0 0 0 12 0V88a6 6 0 0 0-1.76-4.24M158 46.48L193.52 82H158ZM144 146h-16a6 6 0 0 0-6 6v56a6 6 0 0 0 6 6h16a34 34 0 0 0 0-68m0 56h-10v-44h10a22 22 0 0 1 0 44m-42-50v56a6 6 0 0 1-12 0v-37l-17.08 24.44a6 6 0 0 1-9.84 0L46 171v37a6 6 0 0 1-12 0v-56a6 6 0 0 1 10.92-3.44l23.08 33l23.08-33A6 6 0 0 1 102 152"></svg:path>`,
})
export class PhFileMdLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileMdThinIcon],svg[ph-file-md-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m210.83 85.17l-56-56A4 4 0 0 0 152 28H56a12 12 0 0 0-12 12v72a4 4 0 0 0 8 0V40a4 4 0 0 1 4-4h92v52a4 4 0 0 0 4 4h52v132a4 4 0 0 0 8 0V88a4 4 0 0 0-1.17-2.83M156 41.65L198.34 84H156ZM144 148h-16a4 4 0 0 0-4 4v56a4 4 0 0 0 4 4h16a32 32 0 0 0 0-64m0 56h-12v-48h12a24 24 0 0 1 0 48m-44-52v56a4 4 0 0 1-8 0v-43.31l-20.72 29.6a4 4 0 0 1-6.56 0L44 164.69V208a4 4 0 0 1-8 0v-56a4 4 0 0 1 7.28-2.29L68 185l24.72-35.31A4 4 0 0 1 100 152"></svg:path>`,
})
export class PhFileMdThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileMinusIcon],svg[ph-file-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m213.66 82.34l-56-56A8 8 0 0 0 152 24H56a16 16 0 0 0-16 16v176a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V88a8 8 0 0 0-2.34-5.66M160 51.31L188.69 80H160ZM200 216H56V40h88v48a8 8 0 0 0 8 8h48zm-40-64a8 8 0 0 1-8 8h-48a8 8 0 0 1 0-16h48a8 8 0 0 1 8 8"></svg:path>`,
})
export class PhFileMinusIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileMinusBoldIcon],svg[ph-file-minus-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m216.49 79.51l-56-56A12 12 0 0 0 152 20H56a20 20 0 0 0-20 20v176a20 20 0 0 0 20 20h144a20 20 0 0 0 20-20V88a12 12 0 0 0-3.51-8.49M160 57l23 23h-23ZM60 212V44h76v48a12 12 0 0 0 12 12h48v108Zm104-60a12 12 0 0 1-12 12h-48a12 12 0 0 1 0-24h48a12 12 0 0 1 12 12"></svg:path>`,
})
export class PhFileMinusBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileMinusDuotoneIcon],svg[ph-file-minus-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 88h-56V32Z" opacity=".2"></svg:path><svg:path d="m213.66 82.34l-56-56A8 8 0 0 0 152 24H56a16 16 0 0 0-16 16v176a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V88a8 8 0 0 0-2.34-5.66M160 51.31L188.69 80H160ZM200 216H56V40h88v48a8 8 0 0 0 8 8h48zm-40-64a8 8 0 0 1-8 8h-48a8 8 0 0 1 0-16h48a8 8 0 0 1 8 8"></svg:path></svg:g>`,
})
export class PhFileMinusDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileMinusFillIcon],svg[ph-file-minus-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m213.66 82.34l-56-56A8 8 0 0 0 152 24H56a16 16 0 0 0-16 16v176a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V88a8 8 0 0 0-2.34-5.66M152 160h-48a8 8 0 0 1 0-16h48a8 8 0 0 1 0 16m0-72V43.31L196.69 88Z"></svg:path>`,
})
export class PhFileMinusFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileMinusLightIcon],svg[ph-file-minus-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m212.24 83.76l-56-56A6 6 0 0 0 152 26H56a14 14 0 0 0-14 14v176a14 14 0 0 0 14 14h144a14 14 0 0 0 14-14V88a6 6 0 0 0-1.76-4.24M158 46.48L193.52 82H158ZM200 218H56a2 2 0 0 1-2-2V40a2 2 0 0 1 2-2h90v50a6 6 0 0 0 6 6h50v122a2 2 0 0 1-2 2m-42-66a6 6 0 0 1-6 6h-48a6 6 0 0 1 0-12h48a6 6 0 0 1 6 6"></svg:path>`,
})
export class PhFileMinusLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileMinusThinIcon],svg[ph-file-minus-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m210.83 85.17l-56-56A4 4 0 0 0 152 28H56a12 12 0 0 0-12 12v176a12 12 0 0 0 12 12h144a12 12 0 0 0 12-12V88a4 4 0 0 0-1.17-2.83M156 41.65L198.34 84H156ZM200 220H56a4 4 0 0 1-4-4V40a4 4 0 0 1 4-4h92v52a4 4 0 0 0 4 4h52v124a4 4 0 0 1-4 4m-44-68a4 4 0 0 1-4 4h-48a4 4 0 0 1 0-8h48a4 4 0 0 1 4 4"></svg:path>`,
})
export class PhFileMinusThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFilePdfIcon],svg[ph-file-pdf-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 152a8 8 0 0 1-8 8h-24v16h16a8 8 0 0 1 0 16h-16v16a8 8 0 0 1-16 0v-56a8 8 0 0 1 8-8h32a8 8 0 0 1 8 8M92 172a28 28 0 0 1-28 28h-8v8a8 8 0 0 1-16 0v-56a8 8 0 0 1 8-8h16a28 28 0 0 1 28 28m-16 0a12 12 0 0 0-12-12h-8v24h8a12 12 0 0 0 12-12m88 8a36 36 0 0 1-36 36h-16a8 8 0 0 1-8-8v-56a8 8 0 0 1 8-8h16a36 36 0 0 1 36 36m-16 0a20 20 0 0 0-20-20h-8v40h8a20 20 0 0 0 20-20M40 112V40a16 16 0 0 1 16-16h96a8 8 0 0 1 5.66 2.34l56 56A8 8 0 0 1 216 88v24a8 8 0 0 1-16 0V96h-48a8 8 0 0 1-8-8V40H56v72a8 8 0 0 1-16 0m120-32h28.69L160 51.31Z"></svg:path>`,
})
export class PhFilePdfIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFilePdfBoldIcon],svg[ph-file-pdf-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 164v8h12a12 12 0 0 1 0 24h-12v12a12 12 0 0 1-24 0v-56a12 12 0 0 1 12-12h32a12 12 0 0 1 0 24Zm-108 8a32 32 0 0 1-32 32h-4v4a12 12 0 0 1-24 0v-56a12 12 0 0 1 12-12h16a32 32 0 0 1 32 32m-24 0a8 8 0 0 0-8-8h-4v16h4a8 8 0 0 0 8-8m100 8a40 40 0 0 1-40 40h-16a12 12 0 0 1-12-12v-56a12 12 0 0 1 12-12h16a40 40 0 0 1 40 40m-24 0a16 16 0 0 0-16-16h-4v32h4a16 16 0 0 0 16-16M36 108V40a20 20 0 0 1 20-20h96a12 12 0 0 1 8.49 3.52l56 56A12 12 0 0 1 220 88v20a12 12 0 0 1-24 0v-4h-48a12 12 0 0 1-12-12V44H60v64a12 12 0 0 1-24 0m124-51v23h23Z"></svg:path>`,
})
export class PhFilePdfBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFilePdfDuotoneIcon],svg[ph-file-pdf-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 88h-56V32Z" opacity=".2"></svg:path><svg:path d="M224 152a8 8 0 0 1-8 8h-24v16h16a8 8 0 0 1 0 16h-16v16a8 8 0 0 1-16 0v-56a8 8 0 0 1 8-8h32a8 8 0 0 1 8 8M92 172a28 28 0 0 1-28 28h-8v8a8 8 0 0 1-16 0v-56a8 8 0 0 1 8-8h16a28 28 0 0 1 28 28m-16 0a12 12 0 0 0-12-12h-8v24h8a12 12 0 0 0 12-12m88 8a36 36 0 0 1-36 36h-16a8 8 0 0 1-8-8v-56a8 8 0 0 1 8-8h16a36 36 0 0 1 36 36m-16 0a20 20 0 0 0-20-20h-8v40h8a20 20 0 0 0 20-20M40 112V40a16 16 0 0 1 16-16h96a8 8 0 0 1 5.66 2.34l56 56A8 8 0 0 1 216 88v24a8 8 0 0 1-16 0V96h-48a8 8 0 0 1-8-8V40H56v72a8 8 0 0 1-16 0m120-32h28.69L160 51.31Z"></svg:path></svg:g>`,
})
export class PhFilePdfDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFilePdfFillIcon],svg[ph-file-pdf-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M44 120h168a4 4 0 0 0 4-4V88a8 8 0 0 0-2.34-5.66l-56-56A8 8 0 0 0 152 24H56a16 16 0 0 0-16 16v76a4 4 0 0 0 4 4m108-76l44 44h-44Zm72 108.53a8.18 8.18 0 0 1-8.25 7.47H192v16h15.73a8.17 8.17 0 0 1 8.25 7.47a8 8 0 0 1-8 8.53H192v15.73a8.17 8.17 0 0 1-7.47 8.25a8 8 0 0 1-8.53-8V152a8 8 0 0 1 8-8h32a8 8 0 0 1 8 8.53M64 144H48a8 8 0 0 0-8 8v55.73a8.17 8.17 0 0 0 7.47 8.27a8 8 0 0 0 8.53-8v-8h7.4c15.24 0 28.14-11.92 28.59-27.15A28 28 0 0 0 64 144m-.35 40H56v-24h8a12 12 0 0 1 12 13.16A12.25 12.25 0 0 1 63.65 184M128 144h-16a8 8 0 0 0-8 8v56a8 8 0 0 0 8 8h15.32c19.66 0 36.21-15.48 36.67-35.13A36 36 0 0 0 128 144m-.49 56H120v-40h8a20 20 0 0 1 20 20.77c-.42 10.82-9.66 19.23-20.49 19.23"></svg:path>`,
})
export class PhFilePdfFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFilePdfLightIcon],svg[ph-file-pdf-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M222 152a6 6 0 0 1-6 6h-26v20h18a6 6 0 0 1 0 12h-18v18a6 6 0 0 1-12 0v-56a6 6 0 0 1 6-6h32a6 6 0 0 1 6 6M90 172a26 26 0 0 1-26 26H54v10a6 6 0 0 1-12 0v-56a6 6 0 0 1 6-6h16a26 26 0 0 1 26 26m-12 0a14 14 0 0 0-14-14H54v28h10a14 14 0 0 0 14-14m84 8a34 34 0 0 1-34 34h-16a6 6 0 0 1-6-6v-56a6 6 0 0 1 6-6h16a34 34 0 0 1 34 34m-12 0a22 22 0 0 0-22-22h-10v44h10a22 22 0 0 0 22-22M42 112V40a14 14 0 0 1 14-14h96a6 6 0 0 1 4.25 1.76l56 56A6 6 0 0 1 214 88v24a6 6 0 0 1-12 0V94h-50a6 6 0 0 1-6-6V38H56a2 2 0 0 0-2 2v72a6 6 0 0 1-12 0m116-30h35.52L158 46.48Z"></svg:path>`,
})
export class PhFilePdfLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFilePdfThinIcon],svg[ph-file-pdf-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M220 152a4 4 0 0 1-4 4h-28v24h20a4 4 0 0 1 0 8h-20v20a4 4 0 0 1-8 0v-56a4 4 0 0 1 4-4h32a4 4 0 0 1 4 4M88 172a24 24 0 0 1-24 24H52v12a4 4 0 0 1-8 0v-56a4 4 0 0 1 4-4h16a24 24 0 0 1 24 24m-8 0a16 16 0 0 0-16-16H52v32h12a16 16 0 0 0 16-16m80 8a32 32 0 0 1-32 32h-16a4 4 0 0 1-4-4v-56a4 4 0 0 1 4-4h16a32 32 0 0 1 32 32m-8 0a24 24 0 0 0-24-24h-12v48h12a24 24 0 0 0 24-24M44 112V40a12 12 0 0 1 12-12h96a4 4 0 0 1 2.83 1.17l56 56A4 4 0 0 1 212 88v24a4 4 0 0 1-8 0V92h-52a4 4 0 0 1-4-4V36H56a4 4 0 0 0-4 4v72a4 4 0 0 1-8 0m112-28h42.34L156 41.65Z"></svg:path>`,
})
export class PhFilePdfThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFilePlusIcon],svg[ph-file-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m213.66 82.34l-56-56A8 8 0 0 0 152 24H56a16 16 0 0 0-16 16v176a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V88a8 8 0 0 0-2.34-5.66M160 51.31L188.69 80H160ZM200 216H56V40h88v48a8 8 0 0 0 8 8h48zm-40-64a8 8 0 0 1-8 8h-16v16a8 8 0 0 1-16 0v-16h-16a8 8 0 0 1 0-16h16v-16a8 8 0 0 1 16 0v16h16a8 8 0 0 1 8 8"></svg:path>`,
})
export class PhFilePlusIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFilePlusBoldIcon],svg[ph-file-plus-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m216.49 79.51l-56-56A12 12 0 0 0 152 20H56a20 20 0 0 0-20 20v176a20 20 0 0 0 20 20h144a20 20 0 0 0 20-20V88a12 12 0 0 0-3.51-8.49M160 57l23 23h-23ZM60 212V44h76v48a12 12 0 0 0 12 12h48v108Zm104-60a12 12 0 0 1-12 12h-12v12a12 12 0 0 1-24 0v-12h-12a12 12 0 0 1 0-24h12v-12a12 12 0 0 1 24 0v12h12a12 12 0 0 1 12 12"></svg:path>`,
})
export class PhFilePlusBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFilePlusDuotoneIcon],svg[ph-file-plus-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 88h-56V32Z" opacity=".2"></svg:path><svg:path d="m213.66 82.34l-56-56A8 8 0 0 0 152 24H56a16 16 0 0 0-16 16v176a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V88a8 8 0 0 0-2.34-5.66M160 51.31L188.69 80H160ZM200 216H56V40h88v48a8 8 0 0 0 8 8h48zm-40-64a8 8 0 0 1-8 8h-16v16a8 8 0 0 1-16 0v-16h-16a8 8 0 0 1 0-16h16v-16a8 8 0 0 1 16 0v16h16a8 8 0 0 1 8 8"></svg:path></svg:g>`,
})
export class PhFilePlusDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFilePlusFillIcon],svg[ph-file-plus-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m213.66 82.34l-56-56A8 8 0 0 0 152 24H56a16 16 0 0 0-16 16v176a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V88a8 8 0 0 0-2.34-5.66M152 160h-16v16a8 8 0 0 1-16 0v-16h-16a8 8 0 0 1 0-16h16v-16a8 8 0 0 1 16 0v16h16a8 8 0 0 1 0 16m0-72V43.31L196.69 88Z"></svg:path>`,
})
export class PhFilePlusFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFilePlusLightIcon],svg[ph-file-plus-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m212.24 83.76l-56-56A6 6 0 0 0 152 26H56a14 14 0 0 0-14 14v176a14 14 0 0 0 14 14h144a14 14 0 0 0 14-14V88a6 6 0 0 0-1.76-4.24M158 46.48L193.52 82H158ZM200 218H56a2 2 0 0 1-2-2V40a2 2 0 0 1 2-2h90v50a6 6 0 0 0 6 6h50v122a2 2 0 0 1-2 2m-42-66a6 6 0 0 1-6 6h-18v18a6 6 0 0 1-12 0v-18h-18a6 6 0 0 1 0-12h18v-18a6 6 0 0 1 12 0v18h18a6 6 0 0 1 6 6"></svg:path>`,
})
export class PhFilePlusLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFilePlusThinIcon],svg[ph-file-plus-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m210.83 85.17l-56-56A4 4 0 0 0 152 28H56a12 12 0 0 0-12 12v176a12 12 0 0 0 12 12h144a12 12 0 0 0 12-12V88a4 4 0 0 0-1.17-2.83M156 41.65L198.34 84H156ZM200 220H56a4 4 0 0 1-4-4V40a4 4 0 0 1 4-4h92v52a4 4 0 0 0 4 4h52v124a4 4 0 0 1-4 4m-44-68a4 4 0 0 1-4 4h-20v20a4 4 0 0 1-8 0v-20h-20a4 4 0 0 1 0-8h20v-20a4 4 0 0 1 8 0v20h20a4 4 0 0 1 4 4"></svg:path>`,
})
export class PhFilePlusThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFilePngIcon],svg[ph-file-png-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M60 144H44a8 8 0 0 0-8 8v56a8 8 0 0 0 16 0v-8h8a28 28 0 0 0 0-56m0 40h-8v-24h8a12 12 0 0 1 0 24m164 16.87a8 8 0 0 1-2.22 5.53A30.06 30.06 0 0 1 200 216c-17.65 0-32-16.15-32-36s14.35-36 32-36a29.45 29.45 0 0 1 16.48 5.11a8 8 0 0 1-9 13.27A13.2 13.2 0 0 0 200 160c-8.82 0-16 9-16 20s7.18 20 16 20a13.57 13.57 0 0 0 8-2.72V192a8 8 0 0 1 0-16h8a8 8 0 0 1 8 8ZM156 152v56a8 8 0 0 1-5.56 7.62a7.9 7.9 0 0 1-2.44.38a8 8 0 0 1-6.51-3.35L116 177v31a8 8 0 0 1-16 0v-56a8 8 0 0 1 14.51-4.65L140 183v-31a8 8 0 0 1 16 0M48 120a8 8 0 0 0 8-8V40h88v48a8 8 0 0 0 8 8h48v16a8 8 0 0 0 16 0V88a8 8 0 0 0-2.34-5.66l-56-56A8 8 0 0 0 152 24H56a16 16 0 0 0-16 16v72a8 8 0 0 0 8 8m112-68.69L188.69 80H160Z"></svg:path>`,
})
export class PhFilePngIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFilePngBoldIcon],svg[ph-file-png-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M56 140H40a12 12 0 0 0-12 12v56a12 12 0 0 0 24 0v-4h4a32 32 0 0 0 0-64m0 40h-4v-16h4a8 8 0 0 1 0 16m176 20.87a12 12 0 0 1-3.33 8.3A34 34 0 0 1 204 220c-19.85 0-36-17.95-36-40s16.15-40 36-40a33.4 33.4 0 0 1 18.71 5.8a12 12 0 1 1-13.42 19.89A9.4 9.4 0 0 0 204 164c-6.5 0-12 7.33-12 16s5.5 16 12 16a9 9 0 0 0 2.7-.42A12 12 0 0 1 216 176h4a12 12 0 0 1 12 12ZM160 152v56a12 12 0 0 1-8.34 11.43a12.2 12.2 0 0 1-3.66.57a12 12 0 0 1-9.76-5L120 189.44V208a12 12 0 0 1-24 0v-56a12 12 0 0 1 21.76-7L136 170.55V152a12 12 0 0 1 24 0M48 120a12 12 0 0 0 12-12V44h76v48a12 12 0 0 0 12 12h48v4a12 12 0 0 0 24 0V88a12 12 0 0 0-3.51-8.49l-56-56A12 12 0 0 0 152 20H56a20 20 0 0 0-20 20v68a12 12 0 0 0 12 12m112-63l23 23h-23Z"></svg:path>`,
})
export class PhFilePngBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFilePngDuotoneIcon],svg[ph-file-png-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 88h-56V32Z" opacity=".2"></svg:path><svg:path d="M60 144H44a8 8 0 0 0-8 8v56a8 8 0 0 0 16 0v-8h8a28 28 0 0 0 0-56m0 40h-8v-24h8a12 12 0 0 1 0 24m164 16.87a8 8 0 0 1-2.22 5.53A30.06 30.06 0 0 1 200 216c-17.64 0-32-16.15-32-36s14.36-36 32-36a29.45 29.45 0 0 1 16.48 5.11a8 8 0 0 1-9 13.27A13.2 13.2 0 0 0 200 160c-8.82 0-16 9-16 20s7.18 20 16 20a13.57 13.57 0 0 0 8-2.72V192a8 8 0 0 1 0-16h8a8 8 0 0 1 8 8ZM156 152v56a8 8 0 0 1-5.56 7.62a7.9 7.9 0 0 1-2.44.38a8 8 0 0 1-6.51-3.35L116 177v31a8 8 0 0 1-16 0v-56a8 8 0 0 1 14.51-4.65L140 183v-31a8 8 0 0 1 16 0M48 120a8 8 0 0 0 8-8V40h88v48a8 8 0 0 0 8 8h48v16a8 8 0 0 0 16 0V88a8 8 0 0 0-2.34-5.66l-56-56A8 8 0 0 0 152 24H56a16 16 0 0 0-16 16v72a8 8 0 0 0 8 8m112-68.69L188.69 80H160Z"></svg:path></svg:g>`,
})
export class PhFilePngDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFilePngFillIcon],svg[ph-file-png-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M44 120h168a4 4 0 0 0 4-4V88a8 8 0 0 0-2.34-5.66l-56-56A8 8 0 0 0 152 24H56a16 16 0 0 0-16 16v76a4 4 0 0 0 4 4m108-76l44 44h-44ZM60 144H44a8 8 0 0 0-8 8v55.72a8.17 8.17 0 0 0 7.47 8.28a8 8 0 0 0 8.53-8v-8h7.4c15.24 0 28.14-11.92 28.59-27.15A28 28 0 0 0 60 144m-.35 40H52v-24h8a12 12 0 0 1 12 13.16A12.25 12.25 0 0 1 59.65 184M224 200.87a8 8 0 0 1-2.26 5.57A30.07 30.07 0 0 1 200 216c-17.64 0-32-16.15-32-36s14.36-36 32-36a29.36 29.36 0 0 1 16.09 4.86a8.21 8.21 0 0 1 3 10.64a8 8 0 0 1-11.55 2.88A13.2 13.2 0 0 0 200 160c-8.82 0-16 9-16 20s7.18 20 16 20a13.57 13.57 0 0 0 8-2.72V192a8 8 0 0 1-8-8.53a8.17 8.17 0 0 1 8.25-7.47H216a8 8 0 0 1 8 8ZM156 152v55.76a8.22 8.22 0 0 1-4.12 7.24a8 8 0 0 1-10.39-2.35L116 177v30.76a8.17 8.17 0 0 1-7.47 8.26a8 8 0 0 1-8.53-8v-55.71a8.27 8.27 0 0 1 4.53-7.52a8 8 0 0 1 10 2.56L140 183v-30.73a8.17 8.17 0 0 1 7.47-8.25A8 8 0 0 1 156 152"></svg:path>`,
})
export class PhFilePngFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFilePngLightIcon],svg[ph-file-png-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M60 146H44a6 6 0 0 0-6 6v56a6 6 0 0 0 12 0v-10h10a26 26 0 0 0 0-52m0 40H50v-28h10a14 14 0 0 1 0 28m162 14.87a6 6 0 0 1-1.67 4.15A28.06 28.06 0 0 1 200 214c-16.54 0-30-15.25-30-34s13.46-34 30-34a27.43 27.43 0 0 1 15.36 4.77a6 6 0 0 1-6.72 9.95A15.25 15.25 0 0 0 200 158c-9.93 0-18 9.87-18 22s8.07 22 18 22a15.75 15.75 0 0 0 10-3.73V190h-2a6 6 0 0 1 0-12h8a6 6 0 0 1 6 6ZM154 152v56a6 6 0 0 1-4.17 5.71a5.8 5.8 0 0 1-1.83.29a6 6 0 0 1-4.88-2.51L114 170.72V208a6 6 0 0 1-12 0v-56a6 6 0 0 1 10.88-3.49L142 189.28V152a6 6 0 0 1 12 0M48 118a6 6 0 0 0 6-6V40a2 2 0 0 1 2-2h90v50a6 6 0 0 0 6 6h50v18a6 6 0 0 0 12 0V88a6 6 0 0 0-1.76-4.24l-56-56A6 6 0 0 0 152 26H56a14 14 0 0 0-14 14v72a6 6 0 0 0 6 6m110-71.52L193.52 82H158Z"></svg:path>`,
})
export class PhFilePngLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFilePngThinIcon],svg[ph-file-png-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M60 148H44a4 4 0 0 0-4 4v56a4 4 0 0 0 8 0v-12h12a24 24 0 0 0 0-48m0 40H48v-32h12a16 16 0 0 1 0 32m160 12.87a4 4 0 0 1-1.11 2.77A26.1 26.1 0 0 1 200 212c-15.44 0-28-14.36-28-32s12.56-32 28-32a25.4 25.4 0 0 1 14.24 4.43a4 4 0 1 1-4.48 6.63A17.45 17.45 0 0 0 200 156c-11 0-20 10.77-20 24s9 24 20 24a17.87 17.87 0 0 0 12-4.82V188h-4a4 4 0 0 1 0-8h8a4 4 0 0 1 4 4ZM152 152v56a4 4 0 0 1-2.78 3.81a4 4 0 0 1-1.22.19a4 4 0 0 1-3.25-1.67L112 164.48V208a4 4 0 0 1-8 0v-56a4 4 0 0 1 7.25-2.33L144 195.52V152a4 4 0 0 1 8 0m52-40a4 4 0 0 0 8 0V88a4 4 0 0 0-1.17-2.83l-56-56A4 4 0 0 0 152 28H56a12 12 0 0 0-12 12v72a4 4 0 0 0 8 0V40a4 4 0 0 1 4-4h92v52a4 4 0 0 0 4 4h52Zm-48-28V41.65L198.34 84Z"></svg:path>`,
})
export class PhFilePngThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFilePptIcon],svg[ph-file-ppt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 152a8 8 0 0 1-8 8h-12v48a8 8 0 0 1-16 0v-48h-12a8 8 0 0 1 0-16h40a8 8 0 0 1 8 8M92 172a28 28 0 0 1-28 28h-8v8a8 8 0 0 1-16 0v-56a8 8 0 0 1 8-8h16a28 28 0 0 1 28 28m-16 0a12 12 0 0 0-12-12h-8v24h8a12 12 0 0 0 12-12m84 0a28 28 0 0 1-28 28h-8v8a8 8 0 0 1-16 0v-56a8 8 0 0 1 8-8h16a28 28 0 0 1 28 28m-16 0a12 12 0 0 0-12-12h-8v24h8a12 12 0 0 0 12-12M40 112V40a16 16 0 0 1 16-16h96a8 8 0 0 1 5.66 2.34l56 56A8 8 0 0 1 216 88v24a8 8 0 0 1-16 0V96h-48a8 8 0 0 1-8-8V40H56v72a8 8 0 0 1-16 0m120-32h28.69L160 51.31Z"></svg:path>`,
})
export class PhFilePptIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFilePptBoldIcon],svg[ph-file-ppt-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 152a12 12 0 0 1-12 12h-8v44a12 12 0 0 1-24 0v-44h-8a12 12 0 0 1 0-24h40a12 12 0 0 1 12 12M92 172a32 32 0 0 1-32 32h-4v4a12 12 0 0 1-24 0v-56a12 12 0 0 1 12-12h16a32 32 0 0 1 32 32m-24 0a8 8 0 0 0-8-8h-4v16h4a8 8 0 0 0 8-8m96 0a32 32 0 0 1-32 32h-4v4a12 12 0 0 1-24 0v-56a12 12 0 0 1 12-12h16a32 32 0 0 1 32 32m-24 0a8 8 0 0 0-8-8h-4v16h4a8 8 0 0 0 8-8M36 108V40a20 20 0 0 1 20-20h96a12 12 0 0 1 8.49 3.52l56 56A12 12 0 0 1 220 88v20a12 12 0 0 1-24 0v-4h-48a12 12 0 0 1-12-12V44H60v64a12 12 0 0 1-24 0m124-28h23l-23-23Z"></svg:path>`,
})
export class PhFilePptBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFilePptDuotoneIcon],svg[ph-file-ppt-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 88h-56V32Z" opacity=".2"></svg:path><svg:path d="M224 152a8 8 0 0 1-8 8h-12v48a8 8 0 0 1-16 0v-48h-12a8 8 0 0 1 0-16h40a8 8 0 0 1 8 8M92 172a28 28 0 0 1-28 28h-8v8a8 8 0 0 1-16 0v-56a8 8 0 0 1 8-8h16a28 28 0 0 1 28 28m-16 0a12 12 0 0 0-12-12h-8v24h8a12 12 0 0 0 12-12m84 0a28 28 0 0 1-28 28h-8v8a8 8 0 0 1-16 0v-56a8 8 0 0 1 8-8h16a28 28 0 0 1 28 28m-16 0a12 12 0 0 0-12-12h-8v24h8a12 12 0 0 0 12-12M40 112V40a16 16 0 0 1 16-16h96a8 8 0 0 1 5.66 2.34l56 56A8 8 0 0 1 216 88v24a8 8 0 0 1-16 0V96h-48a8 8 0 0 1-8-8V40H56v72a8 8 0 0 1-16 0m120-32h28.69L160 51.31Z"></svg:path></svg:g>`,
})
export class PhFilePptDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFilePptFillIcon],svg[ph-file-ppt-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 152.53a8.17 8.17 0 0 1-8.25 7.47H204v47.73a8.17 8.17 0 0 1-7.47 8.25a8 8 0 0 1-8.53-8V160h-11.73a8.17 8.17 0 0 1-8.25-7.47a8 8 0 0 1 8-8.53h40a8 8 0 0 1 7.98 8.53M92 172.85C91.54 188.08 78.64 200 63.4 200H56v7.73a8.17 8.17 0 0 1-7.47 8.27a8 8 0 0 1-8.53-8v-56a8 8 0 0 1 8-8h16a28 28 0 0 1 28 28.85m-16-2A12.25 12.25 0 0 0 63.65 160H56v24h8a12 12 0 0 0 12-13.16Zm84 2c-.46 15.23-13.36 27.15-28.6 27.15H124v7.73a8.17 8.17 0 0 1-7.47 8.25a8 8 0 0 1-8.53-8V152a8 8 0 0 1 8-8h16a28 28 0 0 1 28 28.85m-16-2A12.25 12.25 0 0 0 131.65 160H124v24h8a12 12 0 0 0 12-13.16ZM40 116V40a16 16 0 0 1 16-16h96a8 8 0 0 1 5.66 2.34l56 56A8 8 0 0 1 216 88v28a4 4 0 0 1-4 4H44a4 4 0 0 1-4-4m112-28h44l-44-44Z"></svg:path>`,
})
export class PhFilePptFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFilePptLightIcon],svg[ph-file-ppt-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M222 152a6 6 0 0 1-6 6h-14v50a6 6 0 0 1-12 0v-50h-14a6 6 0 0 1 0-12h40a6 6 0 0 1 6 6M90 172a26 26 0 0 1-26 26H54v10a6 6 0 0 1-12 0v-56a6 6 0 0 1 6-6h16a26 26 0 0 1 26 26m-12 0a14 14 0 0 0-14-14H54v28h10a14 14 0 0 0 14-14m80 0a26 26 0 0 1-26 26h-10v10a6 6 0 0 1-12 0v-56a6 6 0 0 1 6-6h16a26 26 0 0 1 26 26m-12 0a14 14 0 0 0-14-14h-10v28h10a14 14 0 0 0 14-14M42 112V40a14 14 0 0 1 14-14h96a6 6 0 0 1 4.25 1.76l56 56A6 6 0 0 1 214 88v24a6 6 0 0 1-12 0V94h-50a6 6 0 0 1-6-6V38H56a2 2 0 0 0-2 2v72a6 6 0 0 1-12 0m116-30h35.52L158 46.48Z"></svg:path>`,
})
export class PhFilePptLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFilePptThinIcon],svg[ph-file-ppt-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M220 152a4 4 0 0 1-4 4h-16v52a4 4 0 0 1-8 0v-52h-16a4 4 0 0 1 0-8h40a4 4 0 0 1 4 4M88 172a24 24 0 0 1-24 24H52v12a4 4 0 0 1-8 0v-56a4 4 0 0 1 4-4h16a24 24 0 0 1 24 24m-8 0a16 16 0 0 0-16-16H52v32h12a16 16 0 0 0 16-16m76 0a24 24 0 0 1-24 24h-12v12a4 4 0 0 1-8 0v-56a4 4 0 0 1 4-4h16a24 24 0 0 1 24 24m-8 0a16 16 0 0 0-16-16h-12v32h12a16 16 0 0 0 16-16M44 112V40a12 12 0 0 1 12-12h96a4 4 0 0 1 2.83 1.17l56 56A4 4 0 0 1 212 88v24a4 4 0 0 1-8 0V92h-52a4 4 0 0 1-4-4V36H56a4 4 0 0 0-4 4v72a4 4 0 0 1-8 0m112-28h42.34L156 41.65Z"></svg:path>`,
})
export class PhFilePptThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFilePyIcon],svg[ph-file-py-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m213.66 82.34l-56-56A8 8 0 0 0 152 24H56a16 16 0 0 0-16 16v72a8 8 0 0 0 16 0V40h88v48a8 8 0 0 0 8 8h48v120h-32a8 8 0 0 0 0 16h32a16 16 0 0 0 16-16V88a8 8 0 0 0-2.34-5.66M160 51.31L188.69 80H160ZM64 144H48a8 8 0 0 0-8 8v56a8 8 0 0 0 16 0v-8h8a28 28 0 0 0 0-56m0 40h-8v-24h8a12 12 0 0 1 0 24m90.78-27.76l-18.78 30V208a8 8 0 0 1-16 0v-21.71l-18.78-30a8 8 0 1 1 13.56-8.48l13.22 21.1l13.22-21.15a8 8 0 1 1 13.56 8.48"></svg:path>`,
})
export class PhFilePyIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFilePyBoldIcon],svg[ph-file-py-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m216.49 79.52l-56-56A12 12 0 0 0 152 20H56a20 20 0 0 0-20 20v68a12 12 0 0 0 24 0V44h76v48a12 12 0 0 0 12 12h48v108h-24a12 12 0 0 0 0 24h28a20 20 0 0 0 20-20V88a12 12 0 0 0-3.51-8.48M160 57l23 23h-23Zm-96 83H48a12 12 0 0 0-12 12v56a12 12 0 0 0 24 0v-4h4a32 32 0 0 0 0-64m0 40h-4v-16h4a8 8 0 0 1 0 16m80 7.44V208a12 12 0 0 1-24 0v-20.56l-18.18-29.08a12 12 0 0 1 20.36-12.72l9.82 15.72l9.82-15.72a12 12 0 0 1 20.36 12.72Z"></svg:path>`,
})
export class PhFilePyBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFilePyDuotoneIcon],svg[ph-file-py-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 88h-56V32Z" opacity=".2"></svg:path><svg:path d="m213.66 82.34l-56-56A8 8 0 0 0 152 24H56a16 16 0 0 0-16 16v72a8 8 0 0 0 16 0V40h88v48a8 8 0 0 0 8 8h48v120h-32a8 8 0 0 0 0 16h32a16 16 0 0 0 16-16V88a8 8 0 0 0-2.34-5.66M160 51.31L188.69 80H160ZM64 144H48a8 8 0 0 0-8 8v56a8 8 0 0 0 16 0v-8h8a28 28 0 0 0 0-56m0 40h-8v-24h8a12 12 0 0 1 0 24m90.78-27.76l-18.78 30V208a8 8 0 0 1-16 0v-21.71l-18.78-30a8 8 0 1 1 13.56-8.48l13.22 21.1l13.22-21.15a8 8 0 1 1 13.56 8.48"></svg:path></svg:g>`,
})
export class PhFilePyDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFilePyFillIcon],svg[ph-file-py-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m213.66 82.34l-56-56A8 8 0 0 0 152 24H56a16 16 0 0 0-16 16v76a4 4 0 0 0 4 4h128a4 4 0 0 1 4 4v104a4 4 0 0 0 4 4h20a16 16 0 0 0 16-16V88a8 8 0 0 0-2.34-5.66M152 88V44l44 44Zm-88 56H48a8 8 0 0 0-8 8v55.73a8.17 8.17 0 0 0 7.47 8.27a8 8 0 0 0 8.53-8v-8h7.4c15.24 0 28.14-11.92 28.59-27.15A28 28 0 0 0 64 144m-.35 40H56v-24h8a12 12 0 0 1 12 13.16A12.25 12.25 0 0 1 63.65 184m91-27.48L136 186.29v21.44a8.17 8.17 0 0 1-7.47 8.25a8 8 0 0 1-8.53-8v-21.69l-18.61-29.77a8.22 8.22 0 0 1 2.16-11.17a8 8 0 0 1 11.23 2.41L128 168.91l13.22-21.15a8 8 0 0 1 11.23-2.41a8.22 8.22 0 0 1 2.16 11.17Z"></svg:path>`,
})
export class PhFilePyFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFilePyLightIcon],svg[ph-file-py-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m212.24 83.76l-56-56A6 6 0 0 0 152 26H56a14 14 0 0 0-14 14v72a6 6 0 0 0 12 0V40a2 2 0 0 1 2-2h90v50a6 6 0 0 0 6 6h50v122a2 2 0 0 1-2 2h-32a6 6 0 0 0 0 12h32a14 14 0 0 0 14-14V88a6 6 0 0 0-1.76-4.24M158 46.48L193.52 82H158ZM64 146H48a6 6 0 0 0-6 6v56a6 6 0 0 0 12 0v-10h10a26 26 0 0 0 0-52m0 40H54v-28h10a14 14 0 0 1 0 28m89.09-30.82L134 185.72V208a6 6 0 0 1-12 0v-22.28l-19.09-30.54a6 6 0 0 1 10.18-6.36L128 172.68l14.91-23.86a6 6 0 0 1 10.18 6.36"></svg:path>`,
})
export class PhFilePyLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFilePyThinIcon],svg[ph-file-py-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m210.83 85.17l-56-56A4 4 0 0 0 152 28H56a12 12 0 0 0-12 12v72a4 4 0 0 0 8 0V40a4 4 0 0 1 4-4h92v52a4 4 0 0 0 4 4h52v124a4 4 0 0 1-4 4h-32a4 4 0 0 0 0 8h32a12 12 0 0 0 12-12V88a4 4 0 0 0-1.17-2.83M156 41.65L198.34 84H156ZM64 148H48a4 4 0 0 0-4 4v56a4 4 0 0 0 8 0v-12h12a24 24 0 0 0 0-48m0 40H52v-32h12a16 16 0 0 1 0 32m87.39-33.88l-19.39 31V208a4 4 0 0 1-8 0v-22.85l-19.39-31a4 4 0 0 1 6.78-4.24L128 176.45l16.61-26.57a4 4 0 1 1 6.78 4.24"></svg:path>`,
})
export class PhFilePyThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileRsIcon],svg[ph-file-rs-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m213.66 82.34l-56-56A8 8 0 0 0 152 24H56a16 16 0 0 0-16 16v72a8 8 0 0 0 16 0V40h88v48a8 8 0 0 0 8 8h48v120h-16a8 8 0 0 0 0 16h16a16 16 0 0 0 16-16V88a8 8 0 0 0-2.34-5.66M160 51.31L188.69 80H160ZM64 144H48a8 8 0 0 0-8 8v56a8 8 0 0 0 16 0v-8h8a28.5 28.5 0 0 0 5.73-.59L77.09 212a8 8 0 0 0 13.82-8l-7.11-12.22A28 28 0 0 0 64 144m-8 40v-24h8a12 12 0 0 1 0 24Zm99.81 12.31a20.82 20.82 0 0 1-9.19 15.23C141.43 215 135 216 129.13 216a61.3 61.3 0 0 1-15.19-2a8 8 0 0 1 4.31-15.41c4.38 1.2 14.95 2.7 19.55-.36c.88-.59 1.83-1.52 2.14-3.93c.34-2.67-.71-4.1-12.78-7.59c-9.35-2.7-25-7.23-23-23.11a20.56 20.56 0 0 1 9-14.95c11.84-8 30.71-3.31 32.83-2.76a8 8 0 0 1-4.07 15.48c-4.49-1.17-15.23-2.56-19.83.56a4.54 4.54 0 0 0-2 3.67c-.12.9-.14 1.09 1.11 1.9c2.31 1.49 6.45 2.68 10.45 3.84c9.84 2.83 26.4 7.66 24.16 24.97"></svg:path>`,
})
export class PhFileRsIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileRsBoldIcon],svg[ph-file-rs-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m216.49 79.51l-56-56A12 12 0 0 0 152 20H56a20 20 0 0 0-20 20v68a12 12 0 0 0 24 0V44h76v48a12 12 0 0 0 12 12h48v108h-8a12 12 0 0 0 0 24h12a20 20 0 0 0 20-20V88a12 12 0 0 0-3.51-8.49M160 57l23 23h-23Zm-96 83H48a12 12 0 0 0-12 12v56a12 12 0 0 0 24 0v-4h4a34 34 0 0 0 3.65-.21l6 10.26A12 12 0 0 0 94.37 202l-5.64-9.66A32 32 0 0 0 64 140m-4 24h4a8 8 0 0 1 0 16h-4Zm103.78 32.82a24.75 24.75 0 0 1-10.95 18.06c-6 4-13.27 5.15-19.73 5.15a63.8 63.8 0 0 1-16.23-2.21a12 12 0 0 1 6.46-23.12c6.81 1.86 15 1.61 16.39.06a2.5 2.5 0 0 0 .21-.71c-1.94-1.23-6.83-2.64-9.88-3.52c-5.39-1.56-11-3.18-15.75-6.27c-7.62-4.92-11.21-12.45-10.11-21.2a24.45 24.45 0 0 1 10.69-17.75c6.06-4.09 14.17-5.83 24.1-5.18A68.5 68.5 0 0 1 151 142a12 12 0 0 1-6.1 23.21c-6.36-1.63-13.62-1.51-16.07-.33a80 80 0 0 0 7.91 2.59c5.48 1.58 11.68 3.37 16.8 6.82c7.79 5.26 11.46 13.26 10.24 22.53"></svg:path>`,
})
export class PhFileRsBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileRsDuotoneIcon],svg[ph-file-rs-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 88h-56V32Z" opacity=".2"></svg:path><svg:path d="m213.66 82.34l-56-56A8 8 0 0 0 152 24H56a16 16 0 0 0-16 16v72a8 8 0 0 0 16 0V40h88v48a8 8 0 0 0 8 8h48v120h-16a8 8 0 0 0 0 16h16a16 16 0 0 0 16-16V88a8 8 0 0 0-2.34-5.66M160 51.31L188.69 80H160ZM64 144H48a8 8 0 0 0-8 8v56a8 8 0 0 0 16 0v-8h8a28.5 28.5 0 0 0 5.73-.59L77.09 212a8 8 0 0 0 13.82-8l-7.11-12.22A28 28 0 0 0 64 144m-8 40v-24h8a12 12 0 0 1 0 24Zm99.81 12.31a20.82 20.82 0 0 1-9.19 15.23C141.43 215 135 216 129.13 216a61 61 0 0 1-15.13-2a8 8 0 1 1 4.3-15.41c4.38 1.2 14.95 2.7 19.55-.36c.88-.59 1.83-1.52 2.14-3.93c.35-2.67-.71-4.1-12.78-7.59c-9.35-2.7-25-7.23-23-23.11a20.56 20.56 0 0 1 9-14.95c11.84-8 30.71-3.31 32.83-2.76a8 8 0 0 1-4.07 15.48c-4.49-1.17-15.23-2.56-19.83.56a4.54 4.54 0 0 0-2 3.67c-.12.9-.14 1.09 1.11 1.9c2.31 1.49 6.45 2.68 10.45 3.84c9.79 2.83 26.35 7.66 24.11 24.97"></svg:path></svg:g>`,
})
export class PhFileRsDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileRsFillIcon],svg[ph-file-rs-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m213.66 82.34l-56-56A8 8 0 0 0 152 24H56a16 16 0 0 0-16 16v76a4 4 0 0 0 4 4h128a4 4 0 0 1 4 4v104a4 4 0 0 0 4 4h20a16 16 0 0 0 16-16V88a8 8 0 0 0-2.34-5.66M152 88V44l44 44Zm-88.58 56H48a8 8 0 0 0-8 8v55.73a8.17 8.17 0 0 0 7.47 8.27a8 8 0 0 0 8.53-8v-8h8a28.5 28.5 0 0 0 5.73-.59L77.09 212a8 8 0 0 0 11.81 2.3a8.14 8.14 0 0 0 1.91-10.54l-7-12a27.92 27.92 0 0 0 8.19-20.4C91.65 156.05 78.74 144 63.42 144m.23 40H56v-24h8a12 12 0 0 1 12 13.16A12.25 12.25 0 0 1 63.65 184m92.16 12.31a20.82 20.82 0 0 1-9.19 15.23C141.43 215 135 216 129.13 216a61 61 0 0 1-15.13-2a8 8 0 1 1 4.3-15.41c4.38 1.2 14.95 2.7 19.55-.36c.88-.59 1.83-1.52 2.14-3.93c.35-2.67-.71-4.1-12.78-7.59c-9.35-2.7-25-7.23-23-23.11a20.56 20.56 0 0 1 9-14.95c11.84-8 30.71-3.31 32.83-2.76a8 8 0 0 1-4.07 15.48c-4.49-1.17-15.23-2.56-19.83.56a4.54 4.54 0 0 0-2 3.67c-.12.9-.14 1.09 1.11 1.9c2.31 1.49 6.45 2.68 10.45 3.84c9.79 2.83 26.35 7.66 24.11 24.97"></svg:path>`,
})
export class PhFileRsFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileRsLightIcon],svg[ph-file-rs-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m212.24 83.76l-56-56A6 6 0 0 0 152 26H56a14 14 0 0 0-14 14v72a6 6 0 0 0 12 0V40a2 2 0 0 1 2-2h90v50a6 6 0 0 0 6 6h50v122a2 2 0 0 1-2 2h-16a6 6 0 0 0 0 12h16a14 14 0 0 0 14-14V88a6 6 0 0 0-1.76-4.24M158 46.48L193.52 82H158ZM90 172a26 26 0 0 0-26-26H48a6 6 0 0 0-6 6v56a6 6 0 0 0 12 0v-10h10a26 26 0 0 0 6.71-.88L78.82 211a6 6 0 0 0 5.18 3a5.9 5.9 0 0 0 3-.82a6 6 0 0 0 2.16-8.2l-7.91-13.57A25.93 25.93 0 0 0 90 172m-36 14v-28h10a14 14 0 0 1 0 28Zm99.83 10.06a18.89 18.89 0 0 1-8.31 13.81c-4.82 3.19-10.87 4.14-16.36 4.14a59 59 0 0 1-14.68-2a6 6 0 0 1 3.23-11.56c3.71 1 15.58 3.11 21.19-.62a6.85 6.85 0 0 0 3-5.34c.58-4.43-2.08-6.26-14.2-9.76c-9.31-2.69-23.37-6.75-21.57-20.94a18.61 18.61 0 0 1 8.08-13.54c11.11-7.49 29.18-3 31.21-2.48a6 6 0 0 1-3.06 11.6c-3.78-1-15.85-3-21.45.84a6.59 6.59 0 0 0-2.88 5.08c-.41 3.22 2.14 4.78 13 7.91c9.89 2.89 24.81 7.2 22.8 22.86"></svg:path>`,
})
export class PhFileRsLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileRsThinIcon],svg[ph-file-rs-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m210.83 85.17l-56-56A4 4 0 0 0 152 28H56a12 12 0 0 0-12 12v72a4 4 0 0 0 8 0V40a4 4 0 0 1 4-4h92v52a4 4 0 0 0 4 4h52v124a4 4 0 0 1-4 4h-16a4 4 0 0 0 0 8h16a12 12 0 0 0 12-12V88a4 4 0 0 0-1.17-2.83M156 41.65L198.34 84H156ZM88 172a24 24 0 0 0-24-24H48a4 4 0 0 0-4 4v56a4 4 0 0 0 8 0v-12h12a23.9 23.9 0 0 0 7.64-1.25l8.9 15.25a4 4 0 1 0 6.92-4l-8.77-15A24 24 0 0 0 88 172m-24 16H52v-32h12a16 16 0 0 1 0 32m87.84 7.8a17 17 0 0 1-7.43 12.41c-4.39 2.91-10 3.77-15.22 3.77a58 58 0 0 1-14.19-1.87a4 4 0 0 1 2.15-7.7c4.22 1.17 16.56 3.29 22.83-.88a8.94 8.94 0 0 0 3.91-6.75c.83-6.45-4.38-8.69-15.64-11.94c-9.68-2.8-21.72-6.28-20.14-18.77a16.66 16.66 0 0 1 7.22-12.13c4.56-3.07 11-4.36 19.1-3.82a61.3 61.3 0 0 1 10.48 1.61a4 4 0 0 1-2.05 7.74c-4.29-1.13-16.81-3.12-23.06 1.11a8.51 8.51 0 0 0-3.75 6.49c-.66 5.17 3.89 7 14.42 10.08c9.79 2.85 23.17 6.69 21.37 20.65"></svg:path>`,
})
export class PhFileRsThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileSearchIcon],svg[ph-file-search-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 88a7.7 7.7 0 0 0-2.4-5.7l-55.9-56l-.6-.5h-.2l-.5-.3h-.1l-.5-.4h-.1l-.6-.3h-.1l-.7-.3H56A16 16 0 0 0 40 40v176a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V88Zm-56-36.7L188.7 80H160ZM200 216H56V40h88v48a8 8 0 0 0 8 8h48v120Zm-45.5-48.8A35.8 35.8 0 0 0 160 148a36.3 36.3 0 0 0-10.5-25.5a36 36 0 1 0-6.3 56l10.9 11a8.3 8.3 0 0 0 5.7 2.3a8.5 8.5 0 0 0 5.7-2.3a8.1 8.1 0 0 0 0-11.4Zm-44.6-5.1A19.8 19.8 0 1 1 124 168a19.7 19.7 0 0 1-14.1-5.9Z"></svg:path>`,
})
export class PhFileSearchIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileSearchBoldIcon],svg[ph-file-search-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M220 92v-4a12.3 12.3 0 0 0-3.5-8.5l-56-56A12.3 12.3 0 0 0 152 20H56a20.1 20.1 0 0 0-20 20v176a20.1 20.1 0 0 0 20 20h144a20.1 20.1 0 0 0 20-20V92Zm-37-12h-23V57ZM60 212V44h76v48a12 12 0 0 0 12 12h48v108Zm96.5-48.5A35.6 35.6 0 0 0 160 148a36 36 0 0 0-61.5-25.5a36.2 36.2 0 0 0 0 51a36.2 36.2 0 0 0 41 7l11.8 11.8a12.1 12.1 0 0 0 17 0a12 12 0 0 0 0-17Zm-41-7a12.1 12.1 0 0 1 0-17a12 12 0 0 1 17 0a12.1 12.1 0 0 1 0 17a12 12 0 0 1-17 0Z"></svg:path>`,
})
export class PhFileSearchBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileSearchDuotoneIcon],svg[ph-file-search-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 88h-56V32Z" opacity=".2"></svg:path><svg:path fill="currentColor" d="M216 88a7.7 7.7 0 0 0-2.4-5.7l-55.9-56l-.6-.5h-.2l-.5-.3h-.1l-.5-.4h-.1l-.6-.3h-.1l-.7-.3H56A16 16 0 0 0 40 40v176a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V88Zm-56-36.7L188.7 80H160ZM200 216H56V40h88v48a8 8 0 0 0 8 8h48v120Zm-45.5-48.8a36.4 36.4 0 0 0-5-44.7a36.2 36.2 0 0 0-51 0a36.2 36.2 0 0 0 0 51a36.2 36.2 0 0 0 44.7 5l10.9 11a8.3 8.3 0 0 0 5.7 2.3a8.5 8.5 0 0 0 5.7-2.3a8.1 8.1 0 0 0 0-11.4Zm-44.6-5.1a19.9 19.9 0 0 1 0-28.2a19.8 19.8 0 0 1 28.2 0a19.9 19.9 0 0 1 0 28.2a19.8 19.8 0 0 1-28.2 0Z"></svg:path>`,
})
export class PhFileSearchDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileSearchFillIcon],svg[ph-file-search-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m213.6 82.3l-55.9-56l-.3-.2l-.3-.3l-.3-.2l-.3-.2c-.1-.1-.2-.1-.2-.2l-.5-.3h-.2l-.5-.3h-.1l-.7-.3H56A16 16 0 0 0 40 40v176a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V88a7.8 7.8 0 0 0-2.4-5.7Zm-48.2 107.2a8 8 0 0 1-5.6 2.3a8.3 8.3 0 0 1-5.7-2.3l-10.9-11A36.8 36.8 0 0 1 124 184a36 36 0 1 1 36-36a35.8 35.8 0 0 1-5.5 19.2l10.9 10.9a8 8 0 0 1 0 11.4ZM152 88V43.3L196.7 88Z"></svg:path><svg:path fill="currentColor" d="M124 128a19.9 19.9 0 0 0-14.1 5.9a19.8 19.8 0 0 0 0 28.2a19.9 19.9 0 0 0 28.2 0a19.8 19.8 0 0 0 0-28.2A19.9 19.9 0 0 0 124 128Z"></svg:path>`,
})
export class PhFileSearchFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileSearchLightIcon],svg[ph-file-search-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M214 88a6 6 0 0 0-1.8-4.3l-56-55.9l-.4-.3h-.1l-.4-.3h-.1l-.4-.2l-.5-.2a.1.1 0 0 0-.1-.1H56A14 14 0 0 0 42 40v176a14 14 0 0 0 14 14h144a14 14 0 0 0 14-14V88Zm-56-41.5L193.5 82H158ZM200 218H56a2 2 0 0 1-2-2V40a2 2 0 0 1 2-2h90v50a6 6 0 0 0 6 6h50v122a2 2 0 0 1-2 2Zm-48.1-50.6A34 34 0 0 0 100 124a34 34 0 0 0 43.4 51.9l12.2 12.1a5.9 5.9 0 1 0 8.4-8.4Zm-43.5-3.8A22.2 22.2 0 1 1 124 170a22.2 22.2 0 0 1-15.6-6.4Z"></svg:path>`,
})
export class PhFileSearchLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileSearchThinIcon],svg[ph-file-search-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m210.8 85.1l-56-55.9l-.6-.4h-.2l-.5-.3H56A12 12 0 0 0 44 40v176a12 12 0 0 0 12 12h144a12 12 0 0 0 12-12V88.1a4.5 4.5 0 0 0-1.2-3ZM156 41.7L198.3 84H156ZM204 216a4 4 0 0 1-4 4H56a4 4 0 0 1-4-4V40a4 4 0 0 1 4-4h92v52a4 4 0 0 0 4 4h52Zm-57.4-90.6A32 32 0 1 0 124 180a32 32 0 0 0 19.6-6.7l13.4 13.3a3.8 3.8 0 0 0 2.8 1.2a3.9 3.9 0 0 0 2.8-1.2a3.9 3.9 0 0 0 0-5.6l-13.3-13.4A32 32 0 0 0 156 148a31.5 31.5 0 0 0-9.4-22.6ZM141 165a24.1 24.1 0 1 1 7-17a24.2 24.2 0 0 1-7 17Z"></svg:path>`,
})
export class PhFileSearchThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileSqlIcon],svg[ph-file-sql-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M48 120a8 8 0 0 0 8-8V40h88v48a8 8 0 0 0 8 8h48v16a8 8 0 0 0 16 0V88a8 8 0 0 0-2.34-5.66l-56-56A8 8 0 0 0 152 24H56a16 16 0 0 0-16 16v72a8 8 0 0 0 8 8m112-68.69L188.69 80H160ZM228 208a8 8 0 0 1-8 8h-28a8 8 0 0 1-8-8v-56a8 8 0 0 1 16 0v48h20a8 8 0 0 1 8 8M91.82 196.31a20.82 20.82 0 0 1-9.19 15.23C77.44 215 71 216 65.14 216A60.7 60.7 0 0 1 50 214a8 8 0 0 1 4.3-15.41c4.38 1.2 14.95 2.7 19.55-.36c.89-.59 1.83-1.52 2.14-3.93c.35-2.67-.71-4.1-12.78-7.59c-9.35-2.7-25-7.23-23-23.11a20.55 20.55 0 0 1 9-14.95c11.84-8 30.72-3.31 32.83-2.76a8 8 0 0 1-4.08 15.48c-4.49-1.17-15.22-2.56-19.82.56a4.54 4.54 0 0 0-2 3.67c-.12.9-.14 1.08 1.12 1.9c2.31 1.49 6.44 2.68 10.45 3.84c9.79 2.83 26.35 7.66 24.11 24.97m71 3.23A39.05 39.05 0 0 0 168 180c0-19.85-14.35-36-32-36s-32 16.15-32 36s14.35 36 32 36a29.2 29.2 0 0 0 15.9-4.78l2.44 2.44a8 8 0 0 0 11.31-11.32ZM136 200c-8.82 0-16-9-16-20s7.18-20 16-20s16 9 16 20a24.4 24.4 0 0 1-1.18 7.51l-1.17-1.17a8 8 0 1 0-11.31 11.32l1.68 1.67a13 13 0 0 1-4.02.67"></svg:path>`,
})
export class PhFileSqlIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileSqlBoldIcon],svg[ph-file-sql-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M48 120a12 12 0 0 0 12-12V44h76v48a12 12 0 0 0 12 12h48v4a12 12 0 1 0 24 0V88a12 12 0 0 0-3.51-8.48l-56-56A12 12 0 0 0 152 20H56a20 20 0 0 0-20 20v68a12 12 0 0 0 12 12m135-40h-23V57Zm53 128a12 12 0 0 1-12 12h-28a12 12 0 0 1-12-12v-56a12 12 0 0 1 24 0v44h16a12 12 0 0 1 12 12M91.78 196.8a24.7 24.7 0 0 1-11 18c-6 4-13.26 5.15-19.73 5.15a63.8 63.8 0 0 1-16.23-2.21a12 12 0 1 1 6.46-23.11c6.81 1.85 15 1.61 16.39.06a2.5 2.5 0 0 0 .21-.71c-1.94-1.23-6.82-2.64-9.88-3.53c-5.39-1.56-11-3.17-15.75-6.26c-7.62-4.92-11.21-12.45-10.1-21.19a24.44 24.44 0 0 1 10.68-17.76c6.07-4.09 14.17-5.83 24.1-5.17A69 69 0 0 1 79 142a12 12 0 0 1-6.1 23.21c-6.35-1.63-13.61-1.5-16.07-.33a80 80 0 0 0 7.92 2.59c5.47 1.58 11.67 3.37 16.8 6.82c7.78 5.24 11.45 13.24 10.23 22.51m76 2A43.2 43.2 0 0 0 172 180c0-22-16.15-40-36-40s-36 18-36 40s16.15 40 36 40a32.8 32.8 0 0 0 15.25-3.77l.27.26a12 12 0 0 0 17-17ZM124 180c0-8.67 5.5-16 12-16s12 7.33 12 16v.69a12 12 0 0 0-15.51 14.56C127.62 193.16 124 187 124 180"></svg:path>`,
})
export class PhFileSqlBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileSqlDuotoneIcon],svg[ph-file-sql-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 88h-56V32Z" opacity=".2"></svg:path><svg:path d="M48 120a8 8 0 0 0 8-8V40h88v48a8 8 0 0 0 8 8h48v16a8 8 0 0 0 16 0V88a8 8 0 0 0-2.34-5.66l-56-56A8 8 0 0 0 152 24H56a16 16 0 0 0-16 16v72a8 8 0 0 0 8 8m112-68.69L188.69 80H160ZM228 208a8 8 0 0 1-8 8h-28a8 8 0 0 1-8-8v-56a8 8 0 0 1 16 0v48h20a8 8 0 0 1 8 8M91.82 196.31a20.82 20.82 0 0 1-9.19 15.23C77.44 215 71 216 65.14 216A60.7 60.7 0 0 1 50 214a8 8 0 0 1 4.3-15.41c4.38 1.2 14.95 2.7 19.55-.36c.89-.59 1.83-1.52 2.14-3.93c.35-2.67-.71-4.1-12.78-7.59c-9.35-2.7-25-7.23-23-23.11a20.55 20.55 0 0 1 9-14.95c11.84-8 30.72-3.31 32.83-2.76a8 8 0 0 1-4.08 15.48c-4.49-1.17-15.22-2.56-19.82.56a4.54 4.54 0 0 0-2 3.67c-.12.9-.14 1.08 1.12 1.9c2.31 1.49 6.44 2.68 10.45 3.84c9.79 2.83 26.35 7.66 24.11 24.97m71 3.23A39.05 39.05 0 0 0 168 180c0-19.85-14.35-36-32-36s-32 16.15-32 36s14.35 36 32 36a29.2 29.2 0 0 0 15.9-4.78l2.44 2.44a8 8 0 0 0 11.31-11.32ZM136 200c-8.82 0-16-9-16-20s7.18-20 16-20s16 9 16 20a24.4 24.4 0 0 1-1.18 7.51l-1.17-1.17a8 8 0 1 0-11.31 11.32l1.68 1.67a13 13 0 0 1-4.02.67"></svg:path></svg:g>`,
})
export class PhFileSqlDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileSqlFillIcon],svg[ph-file-sql-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M44 120h168a4 4 0 0 0 4-4V88a8 8 0 0 0-2.34-5.66l-56-56A8 8 0 0 0 152 24H56a16 16 0 0 0-16 16v76a4 4 0 0 0 4 4m108-76l44 44h-44Zm76 164.53a8.18 8.18 0 0 1-8.25 7.47H192a8 8 0 0 1-8-8v-55.73a8.18 8.18 0 0 1 7.47-8.25a8 8 0 0 1 8.53 8v48h20a8 8 0 0 1 8 8.51M91.82 196.31a20.82 20.82 0 0 1-9.19 15.23C77.44 215 71 216 65.14 216A60.7 60.7 0 0 1 50 214a8 8 0 0 1 4.3-15.41c4.38 1.2 14.95 2.7 19.55-.36c.89-.59 1.83-1.52 2.14-3.93c.35-2.67-.71-4.1-12.78-7.59c-9.35-2.7-25-7.23-23-23.11a20.55 20.55 0 0 1 9-14.95c11.84-8 30.72-3.31 32.83-2.76a8 8 0 0 1-4.08 15.48c-4.49-1.17-15.22-2.56-19.82.56a4.54 4.54 0 0 0-2 3.67c-.12.9-.14 1.08 1.12 1.9c2.31 1.49 6.44 2.68 10.45 3.84c9.79 2.83 26.35 7.66 24.11 24.97m71 3.23A39.05 39.05 0 0 0 168 180c0-19.85-14.35-36-32-36s-32 16.15-32 36s14.35 36 32 36a29.2 29.2 0 0 0 15.9-4.78l2.44 2.44a8 8 0 0 0 11.71-.43a8.18 8.18 0 0 0-.61-11.09ZM136 200c-8.82 0-16-9-16-20s7.18-20 16-20s16 9 16 20a24.4 24.4 0 0 1-1.18 7.51l-.93-.93a8.22 8.22 0 0 0-11.37-.41a8 8 0 0 0-.18 11.49l1.68 1.67a13 13 0 0 1-4.02.67"></svg:path>`,
})
export class PhFileSqlFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileSqlLightIcon],svg[ph-file-sql-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M48 118a6 6 0 0 0 6-6V40a2 2 0 0 1 2-2h90v50a6 6 0 0 0 6 6h50v18a6 6 0 1 0 12 0V88a6 6 0 0 0-1.76-4.25l-56-56A6 6 0 0 0 152 26H56a14 14 0 0 0-14 14v72a6 6 0 0 0 6 6m110-71.52L193.52 82H158ZM226 208a6 6 0 0 1-6 6h-28a6 6 0 0 1-6-6v-56a6 6 0 0 1 12 0v50h22a6 6 0 0 1 6 6M89.83 196a18.85 18.85 0 0 1-8.3 13.82c-4.82 3.23-10.87 4.18-16.37 4.18a59 59 0 0 1-14.67-2a6 6 0 0 1 3.23-11.56c3.71 1 15.58 3.11 21.19-.62a6.85 6.85 0 0 0 3-5.34c.57-4.43-2.08-6.26-14.2-9.76c-9.31-2.69-23.37-6.75-21.57-20.94a18.61 18.61 0 0 1 8.08-13.54c11.11-7.49 29.18-3 31.2-2.48a6 6 0 1 1-3.06 11.6c-3.79-1-15.85-2.95-21.44.84a6.59 6.59 0 0 0-2.88 5.08c-.41 3.22 2.14 4.78 13 7.91c9.89 2.89 24.81 7.2 22.79 22.81M136 146c-16.54 0-30 15.25-30 34s13.45 34 30 34a27.32 27.32 0 0 0 16.15-5.37l3.61 3.61a6 6 0 1 0 8.49-8.48l-3.91-3.91A36.94 36.94 0 0 0 166 180c0-18.76-13.45-34-30-34m0 56c-9.92 0-18-9.87-18-22s8.07-22 18-22s18 9.87 18 22a25.6 25.6 0 0 1-2.45 11.06l-3.3-3.3a6 6 0 0 0-8.49 8.48l3.75 3.75A15.3 15.3 0 0 1 136 202"></svg:path>`,
})
export class PhFileSqlLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileSqlThinIcon],svg[ph-file-sql-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M48 116a4 4 0 0 0 4-4V40a4 4 0 0 1 4-4h92v52a4 4 0 0 0 4 4h52v20a4 4 0 0 0 8 0V88a4 4 0 0 0-1.17-2.83l-56-56A4 4 0 0 0 152 28H56a12 12 0 0 0-12 12v72a4 4 0 0 0 4 4m108-74.35L198.35 84H156ZM224 208a4 4 0 0 1-4 4h-28a4 4 0 0 1-4-4v-56a4 4 0 0 1 8 0v52h24a4 4 0 0 1 4 4M87.85 195.8a17 17 0 0 1-7.43 12.41C76 211.12 70.38 212 65.2 212a58 58 0 0 1-14.2-1.89a4 4 0 0 1 2.15-7.7c4.22 1.17 16.56 3.29 22.83-.88a8.94 8.94 0 0 0 3.91-6.75c.83-6.45-4.38-8.69-15.64-11.94c-9.68-2.8-21.72-6.28-20.14-18.77a16.66 16.66 0 0 1 7.22-12.13c4.56-3.07 11-4.36 19.1-3.82a61 61 0 0 1 10.47 1.61a4 4 0 0 1-2 7.74c-4.3-1.13-16.81-3.12-23.06 1.11a8.53 8.53 0 0 0-3.75 6.49c-.66 5.17 3.89 7 14.42 10.08c9.76 2.85 23.14 6.69 21.34 20.65M136 148c-15.44 0-28 14.35-28 32s12.56 32 28 32a25.56 25.56 0 0 0 16.31-6l4.86 4.85a4 4 0 0 0 5.65-5.66l-5.06-5.06A34.8 34.8 0 0 0 164 180c0-17.65-12.56-32-28-32m0 56c-11 0-20-10.77-20-24s9-24 20-24s20 10.77 20 24a27.16 27.16 0 0 1-4 14.36l-5.19-5.19a4 4 0 1 0-5.65 5.66l5.47 5.47A17.5 17.5 0 0 1 136 204"></svg:path>`,
})
export class PhFileSqlThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileSvgIcon],svg[ph-file-svg-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M87.82 196.31a20.82 20.82 0 0 1-9.19 15.23C73.44 215 67 216 61.14 216A61.2 61.2 0 0 1 46 214a8 8 0 0 1 4.3-15.41c4.38 1.2 14.95 2.7 19.55-.36c.88-.59 1.83-1.52 2.14-3.93c.35-2.67-.71-4.1-12.78-7.59c-9.35-2.7-25-7.23-23-23.11a20.55 20.55 0 0 1 9-14.95c11.84-8 30.72-3.31 32.83-2.76a8 8 0 0 1-4.07 15.48c-4.48-1.17-15.23-2.56-19.83.56a4.54 4.54 0 0 0-2 3.67c-.11.9-.14 1.09 1.12 1.9c2.31 1.49 6.44 2.68 10.45 3.84c9.79 2.83 26.35 7.66 24.11 24.97M216 88v24a8 8 0 0 1-16 0V96h-48a8 8 0 0 1-8-8V40H56v72a8 8 0 1 1-16 0V40a16 16 0 0 1 16-16h96a8 8 0 0 1 5.65 2.34l56 56A8 8 0 0 1 216 88m-56-8h28.69L160 51.31Zm-13.3 64.47a8 8 0 0 0-10.23 4.84L124 184.21l-12.47-34.9a8 8 0 1 0-15.06 5.38l20 56a8 8 0 0 0 15.07 0l20-56a8 8 0 0 0-4.84-10.22M208 176h-8a8 8 0 0 0 0 16v5.29a13.38 13.38 0 0 1-8 2.71c-8.82 0-16-9-16-20s7.18-20 16-20a13.27 13.27 0 0 1 7.53 2.38a8 8 0 0 0 8.95-13.26A29.4 29.4 0 0 0 192 144c-17.64 0-32 16.15-32 36s14.36 36 32 36a30.06 30.06 0 0 0 21.78-9.6a8 8 0 0 0 2.22-5.53V184a8 8 0 0 0-8-8"></svg:path>`,
})
export class PhFileSvgIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileSvgBoldIcon],svg[ph-file-svg-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M48 120a12 12 0 0 0 12-12V44h76v48a12 12 0 0 0 12 12h48v4a12 12 0 1 0 24 0V88a12 12 0 0 0-3.51-8.48l-56-56A12 12 0 0 0 152 20H56a20 20 0 0 0-20 20v68a12 12 0 0 0 12 12m135-40h-23V57ZM87.78 196.8a24.72 24.72 0 0 1-10.94 18c-6 4-13.27 5.15-19.74 5.15a63.8 63.8 0 0 1-16.23-2.21a12 12 0 1 1 6.46-23.11c6.82 1.85 15 1.61 16.39.06a2.5 2.5 0 0 0 .21-.71c-1.94-1.23-6.82-2.64-9.88-3.53c-5.39-1.56-11-3.17-15.75-6.26c-7.62-4.92-11.21-12.45-10.1-21.19a24.44 24.44 0 0 1 10.68-17.76c6.07-4.09 14.17-5.82 24.1-5.17A69 69 0 0 1 75 142a12 12 0 0 1-6.1 23.21c-6.35-1.63-13.61-1.51-16.07-.33a80 80 0 0 0 7.92 2.59c5.47 1.58 11.67 3.37 16.8 6.82c7.78 5.24 11.45 13.24 10.23 22.51M155.3 156l-20 56a12 12 0 0 1-22.6 0l-20-56a12 12 0 1 1 22.6-8l8.7 24.3l8.7-24.3a12 12 0 1 1 22.6 8m68.7 32v12.87a12 12 0 0 1-3.33 8.3A34 34 0 0 1 196 220c-19.85 0-36-17.94-36-40s16.15-40 36-40a33.4 33.4 0 0 1 18.71 5.8a12 12 0 1 1-13.42 19.89A9.4 9.4 0 0 0 196 164c-6.5 0-12 7.33-12 16s5.5 16 12 16a9 9 0 0 0 2.7-.42A12 12 0 0 1 208 176h4a12 12 0 0 1 12 12"></svg:path>`,
})
export class PhFileSvgBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileSvgDuotoneIcon],svg[ph-file-svg-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 88h-56V32Z" opacity=".2"></svg:path><svg:path d="m213.66 82.34l-56-56A8 8 0 0 0 152 24H56a16 16 0 0 0-16 16v72a8 8 0 1 0 16 0V40h88v48a8 8 0 0 0 8 8h48v16a8 8 0 0 0 16 0V88a8 8 0 0 0-2.34-5.66M160 51.31L188.69 80H160Zm-72.18 145a20.82 20.82 0 0 1-9.19 15.23C73.44 215 67 216 61.14 216A61.2 61.2 0 0 1 46 214a8 8 0 0 1 4.3-15.41c4.38 1.2 14.95 2.7 19.55-.36c.88-.59 1.83-1.52 2.14-3.93c.35-2.67-.71-4.1-12.78-7.59c-9.35-2.7-25-7.23-23-23.11a20.55 20.55 0 0 1 9-14.95c11.84-8 30.72-3.31 32.83-2.76a8 8 0 0 1-4.07 15.48c-4.48-1.17-15.23-2.56-19.83.56a4.54 4.54 0 0 0-2 3.67c-.11.9-.14 1.09 1.12 1.9c2.31 1.49 6.44 2.68 10.45 3.84c9.79 2.83 26.35 7.66 24.11 24.97m63.72-41.62l-20 56a8 8 0 0 1-15.07 0l-20-56a8 8 0 1 1 15.06-5.38l12.47 34.9l12.46-34.9a8 8 0 0 1 15.07 5.38ZM216 184v16.87a8 8 0 0 1-2.22 5.53A30.06 30.06 0 0 1 192 216c-17.64 0-32-16.15-32-36s14.36-36 32-36a29.4 29.4 0 0 1 16.48 5.12a8 8 0 0 1-8.95 13.26A13.27 13.27 0 0 0 192 160c-8.82 0-16 9-16 20s7.18 20 16 20a13.38 13.38 0 0 0 8-2.71V192a8 8 0 0 1 0-16h8a8 8 0 0 1 8 8"></svg:path></svg:g>`,
})
export class PhFileSvgDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileSvgFillIcon],svg[ph-file-svg-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m213.66 82.34l-56-56A8 8 0 0 0 152 24H56a16 16 0 0 0-16 16v76a4 4 0 0 0 4 4h168a4 4 0 0 0 4-4V88a8 8 0 0 0-2.34-5.66M152 88V44l44 44ZM87.82 196.31a20.82 20.82 0 0 1-9.19 15.23C73.44 215 67 216 61.14 216A61.2 61.2 0 0 1 46 214a8 8 0 0 1 4.3-15.41c4.38 1.2 14.95 2.7 19.55-.36c.88-.59 1.83-1.52 2.14-3.93c.35-2.67-.71-4.1-12.78-7.59c-9.35-2.7-25-7.23-23-23.11a20.55 20.55 0 0 1 9-14.95c11.84-8 30.72-3.31 32.83-2.76a8 8 0 0 1-4.07 15.48c-4.48-1.17-15.23-2.56-19.83.56a4.54 4.54 0 0 0-2 3.67c-.11.9-.14 1.09 1.12 1.9c2.31 1.49 6.44 2.68 10.45 3.84c9.79 2.83 26.35 7.66 24.11 24.97m63.72-41.62l-19.9 55.72a8.25 8.25 0 0 1-6.5 5.51a8 8 0 0 1-8.67-5.23L96.59 155a8.21 8.21 0 0 1 4.5-10.45a8 8 0 0 1 10.45 4.76l12.46 34.9l12.46-34.9a8 8 0 0 1 15.07 5.38ZM216 184v16.87a8 8 0 0 1-2.26 5.57A30 30 0 0 1 192 216c-17.64 0-32-16.15-32-36s14.36-36 32-36a29.36 29.36 0 0 1 16.09 4.86a8.22 8.22 0 0 1 3 10.64a8 8 0 0 1-11.54 2.88A13.27 13.27 0 0 0 192 160c-8.82 0-16 9-16 20s7.18 20 16 20a13.38 13.38 0 0 0 8-2.71V192a8 8 0 0 1-8-8.53a8.18 8.18 0 0 1 8.26-7.47H208a8 8 0 0 1 8 8"></svg:path>`,
})
export class PhFileSvgFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileSvgLightIcon],svg[ph-file-svg-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m212.24 83.75l-56-56A6 6 0 0 0 152 26H56a14 14 0 0 0-14 14v72a6 6 0 0 0 12 0V40a2 2 0 0 1 2-2h90v50a6 6 0 0 0 6 6h50v18a6 6 0 1 0 12 0V88a6 6 0 0 0-1.76-4.25M158 46.48L193.52 82H158ZM85.83 196.05a18.85 18.85 0 0 1-8.3 13.81c-4.82 3.19-10.87 4.14-16.37 4.14a59.4 59.4 0 0 1-14.67-2a6 6 0 0 1 3.23-11.56c3.71 1 15.58 3.11 21.19-.62a6.85 6.85 0 0 0 3-5.34c.57-4.43-2.08-6.26-14.2-9.76c-9.31-2.69-23.37-6.75-21.57-20.94a18.61 18.61 0 0 1 8.08-13.54c11.11-7.49 29.18-3 31.2-2.48a6 6 0 0 1-3 11.6c-3.79-1-15.85-2.95-21.45.84a6.59 6.59 0 0 0-2.88 5.08c-.41 3.22 2.14 4.78 13 7.91c9.84 2.89 24.76 7.2 22.74 22.86m63.82-42l-20 56a6 6 0 0 1-11.3 0l-20-56a6 6 0 1 1 11.3-4l14.35 40.1L138.35 150a6 6 0 0 1 11.3 4ZM214 184v16.87a6 6 0 0 1-1.67 4.15A28.06 28.06 0 0 1 192 214c-16.54 0-30-15.25-30-34s13.46-34 30-34a27.43 27.43 0 0 1 15.36 4.77a6 6 0 0 1-6.72 10A15.25 15.25 0 0 0 192 158c-9.92 0-18 9.87-18 22s8.08 22 18 22a15.7 15.7 0 0 0 10-3.74V190h-2a6 6 0 0 1 0-12h8a6 6 0 0 1 6 6"></svg:path>`,
})
export class PhFileSvgLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileSvgThinIcon],svg[ph-file-svg-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m210.83 85.17l-56-56A4 4 0 0 0 152 28H56a12 12 0 0 0-12 12v72a4 4 0 1 0 8 0V40a4 4 0 0 1 4-4h92v52a4 4 0 0 0 4 4h52v20a4 4 0 0 0 8 0V88a4 4 0 0 0-1.17-2.83M156 41.65L198.34 84H156ZM83.85 195.8a17 17 0 0 1-7.43 12.41C72 211.12 66.38 212 61.2 212a58 58 0 0 1-14.2-1.89a4 4 0 1 1 2.15-7.7c4.22 1.17 16.56 3.29 22.83-.88a8.94 8.94 0 0 0 3.91-6.75c.83-6.45-4.38-8.69-15.64-11.94c-9.68-2.8-21.72-6.28-20.14-18.77a16.66 16.66 0 0 1 7.22-12.13c4.56-3.07 11-4.36 19.1-3.82a61 61 0 0 1 10.47 1.61a4 4 0 0 1-2 7.74c-4.29-1.13-16.81-3.12-23.06 1.11a8.51 8.51 0 0 0-3.75 6.49c-.66 5.17 3.89 7 14.42 10.08c9.76 2.85 23.14 6.69 21.34 20.65m63.92-42.45l-20 56a4 4 0 0 1-7.53 0l-20-56a4 4 0 1 1 7.53-2.7L124 196.11l16.23-45.46a4 4 0 1 1 7.53 2.7ZM212 184v16.87a4 4 0 0 1-1.11 2.77A26.1 26.1 0 0 1 192 212c-15.44 0-28-14.36-28-32s12.56-32 28-32a25.4 25.4 0 0 1 14.24 4.43a4 4 0 1 1-4.48 6.63A17.43 17.43 0 0 0 192 156c-11 0-20 10.77-20 24s9 24 20 24a17.87 17.87 0 0 0 12-4.82V188h-4a4 4 0 0 1 0-8h8a4 4 0 0 1 4 4"></svg:path>`,
})
export class PhFileSvgThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileTextIcon],svg[ph-file-text-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m213.66 82.34l-56-56A8 8 0 0 0 152 24H56a16 16 0 0 0-16 16v176a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V88a8 8 0 0 0-2.34-5.66M160 51.31L188.69 80H160ZM200 216H56V40h88v48a8 8 0 0 0 8 8h48zm-32-80a8 8 0 0 1-8 8H96a8 8 0 0 1 0-16h64a8 8 0 0 1 8 8m0 32a8 8 0 0 1-8 8H96a8 8 0 0 1 0-16h64a8 8 0 0 1 8 8"></svg:path>`,
})
export class PhFileTextIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileTextBoldIcon],svg[ph-file-text-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m216.49 79.52l-56-56A12 12 0 0 0 152 20H56a20 20 0 0 0-20 20v176a20 20 0 0 0 20 20h144a20 20 0 0 0 20-20V88a12 12 0 0 0-3.51-8.48M160 57l23 23h-23ZM60 212V44h76v48a12 12 0 0 0 12 12h48v108Zm112-80a12 12 0 0 1-12 12H96a12 12 0 0 1 0-24h64a12 12 0 0 1 12 12m0 40a12 12 0 0 1-12 12H96a12 12 0 0 1 0-24h64a12 12 0 0 1 12 12"></svg:path>`,
})
export class PhFileTextBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileTextDuotoneIcon],svg[ph-file-text-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 88h-56V32Z" opacity=".2"></svg:path><svg:path d="m213.66 82.34l-56-56A8 8 0 0 0 152 24H56a16 16 0 0 0-16 16v176a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V88a8 8 0 0 0-2.34-5.66M160 51.31L188.69 80H160ZM200 216H56V40h88v48a8 8 0 0 0 8 8h48zm-32-80a8 8 0 0 1-8 8H96a8 8 0 0 1 0-16h64a8 8 0 0 1 8 8m0 32a8 8 0 0 1-8 8H96a8 8 0 0 1 0-16h64a8 8 0 0 1 8 8"></svg:path></svg:g>`,
})
export class PhFileTextDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileTextFillIcon],svg[ph-file-text-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m213.66 82.34l-56-56A8 8 0 0 0 152 24H56a16 16 0 0 0-16 16v176a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V88a8 8 0 0 0-2.34-5.66M160 176H96a8 8 0 0 1 0-16h64a8 8 0 0 1 0 16m0-32H96a8 8 0 0 1 0-16h64a8 8 0 0 1 0 16m-8-56V44l44 44Z"></svg:path>`,
})
export class PhFileTextFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileTextLightIcon],svg[ph-file-text-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m212.24 83.76l-56-56A6 6 0 0 0 152 26H56a14 14 0 0 0-14 14v176a14 14 0 0 0 14 14h144a14 14 0 0 0 14-14V88a6 6 0 0 0-1.76-4.24M158 46.48L193.52 82H158ZM200 218H56a2 2 0 0 1-2-2V40a2 2 0 0 1 2-2h90v50a6 6 0 0 0 6 6h50v122a2 2 0 0 1-2 2m-34-82a6 6 0 0 1-6 6H96a6 6 0 0 1 0-12h64a6 6 0 0 1 6 6m0 32a6 6 0 0 1-6 6H96a6 6 0 0 1 0-12h64a6 6 0 0 1 6 6"></svg:path>`,
})
export class PhFileTextLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileTextThinIcon],svg[ph-file-text-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m210.83 85.17l-56-56A4 4 0 0 0 152 28H56a12 12 0 0 0-12 12v176a12 12 0 0 0 12 12h144a12 12 0 0 0 12-12V88a4 4 0 0 0-1.17-2.83M156 41.65L198.34 84H156ZM200 220H56a4 4 0 0 1-4-4V40a4 4 0 0 1 4-4h92v52a4 4 0 0 0 4 4h52v124a4 4 0 0 1-4 4m-36-84a4 4 0 0 1-4 4H96a4 4 0 0 1 0-8h64a4 4 0 0 1 4 4m0 32a4 4 0 0 1-4 4H96a4 4 0 0 1 0-8h64a4 4 0 0 1 4 4"></svg:path>`,
})
export class PhFileTextThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileThinIcon],svg[ph-file-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m210.83 85.17l-56-56A4 4 0 0 0 152 28H56a12 12 0 0 0-12 12v176a12 12 0 0 0 12 12h144a12 12 0 0 0 12-12V88a4 4 0 0 0-1.17-2.83M156 41.65L198.34 84H156ZM200 220H56a4 4 0 0 1-4-4V40a4 4 0 0 1 4-4h92v52a4 4 0 0 0 4 4h52v124a4 4 0 0 1-4 4"></svg:path>`,
})
export class PhFileThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileTsIcon],svg[ph-file-ts-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M147.81 196.31a20.82 20.82 0 0 1-9.19 15.23C133.43 215 127 216 121.13 216a61.3 61.3 0 0 1-15.19-2a8 8 0 0 1 4.31-15.41c4.38 1.2 15 2.7 19.55-.36c.88-.59 1.83-1.52 2.14-3.93c.34-2.67-.71-4.1-12.78-7.59c-9.35-2.7-25-7.23-23-23.11a20.56 20.56 0 0 1 9-14.95c11.84-8 30.71-3.31 32.83-2.76a8 8 0 0 1-4.07 15.48c-4.49-1.17-15.23-2.56-19.83.56a4.54 4.54 0 0 0-2 3.67c-.12.9-.14 1.09 1.11 1.9c2.31 1.49 6.45 2.68 10.45 3.84c9.84 2.83 26.4 7.66 24.16 24.97M216 88v128a16 16 0 0 1-16 16h-24a8 8 0 0 1 0-16h24V96h-48a8 8 0 0 1-8-8V40H56v72a8 8 0 0 1-16 0V40a16 16 0 0 1 16-16h96a8 8 0 0 1 5.66 2.34l56 56A8 8 0 0 1 216 88m-56-8h28.69L160 51.31Zm-80 64H40a8 8 0 0 0 0 16h12v48a8 8 0 0 0 16 0v-48h12a8 8 0 0 0 0-16"></svg:path>`,
})
export class PhFileTsIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileTsBoldIcon],svg[ph-file-ts-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m216.49 79.51l-56-56A12 12 0 0 0 152 20H56a20 20 0 0 0-20 20v68a12 12 0 0 0 24 0V44h76v48a12 12 0 0 0 12 12h48v108h-16a12 12 0 0 0 0 24h20a20 20 0 0 0 20-20V88a12 12 0 0 0-3.51-8.49M160 57l23 23h-23Zm-4.22 139.85a24.75 24.75 0 0 1-10.95 18.06c-6 4-13.27 5.15-19.73 5.15a63.8 63.8 0 0 1-16.23-2.21a12 12 0 0 1 6.46-23.12c6.81 1.86 15 1.61 16.39.06a2.5 2.5 0 0 0 .21-.71c-1.94-1.23-6.83-2.64-9.88-3.52c-5.39-1.56-11-3.18-15.75-6.27c-7.62-4.92-11.21-12.45-10.11-21.2a24.45 24.45 0 0 1 10.69-17.75c6.06-4.09 14.17-5.83 24.1-5.18A68.5 68.5 0 0 1 143 142a12 12 0 0 1-6.1 23.21c-6.36-1.63-13.62-1.51-16.07-.33a80 80 0 0 0 7.91 2.59c5.48 1.58 11.68 3.37 16.8 6.82c7.79 5.26 11.46 13.26 10.24 22.53ZM92 152a12 12 0 0 1-12 12h-8v44a12 12 0 0 1-24 0v-44h-8a12 12 0 0 1 0-24h40a12 12 0 0 1 12 12"></svg:path>`,
})
export class PhFileTsBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileTsDuotoneIcon],svg[ph-file-ts-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 88h-56V32Z" opacity=".2"></svg:path><svg:path d="m213.66 82.34l-56-56A8 8 0 0 0 152 24H56a16 16 0 0 0-16 16v72a8 8 0 0 0 16 0V40h88v48a8 8 0 0 0 8 8h48v120h-24a8 8 0 0 0 0 16h24a16 16 0 0 0 16-16V88a8 8 0 0 0-2.34-5.66M160 51.31L188.69 80H160Zm-12.19 145a20.82 20.82 0 0 1-9.19 15.23C133.43 215 127 216 121.13 216a61 61 0 0 1-15.13-2a8 8 0 1 1 4.3-15.41c4.38 1.2 15 2.7 19.55-.36c.88-.59 1.83-1.52 2.14-3.93c.35-2.67-.71-4.1-12.78-7.59c-9.35-2.7-25-7.23-23-23.11a20.56 20.56 0 0 1 9-14.95c11.84-8 30.71-3.31 32.83-2.76a8 8 0 0 1-4.07 15.48c-4.49-1.17-15.23-2.56-19.83.56a4.54 4.54 0 0 0-2 3.67c-.12.9-.14 1.09 1.11 1.9c2.31 1.49 6.45 2.68 10.45 3.84c9.79 2.83 26.35 7.66 24.11 24.97M88 152a8 8 0 0 1-8 8H68v48a8 8 0 0 1-16 0v-48H40a8 8 0 0 1 0-16h40a8 8 0 0 1 8 8"></svg:path></svg:g>`,
})
export class PhFileTsDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileTsFillIcon],svg[ph-file-ts-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m213.66 82.34l-56-56A8 8 0 0 0 152 24H56a16 16 0 0 0-16 16v76a4 4 0 0 0 4 4h120a4 4 0 0 1 4 4v104a4 4 0 0 0 4 4h28a16 16 0 0 0 16-16V88a8 8 0 0 0-2.34-5.66M152 88V44l44 44Zm-4.19 108.31a20.82 20.82 0 0 1-9.19 15.23C133.43 215 127 216 121.13 216a61 61 0 0 1-15.13-2a8 8 0 1 1 4.3-15.41c4.38 1.2 15 2.7 19.55-.36c.88-.59 1.83-1.52 2.14-3.93c.35-2.67-.71-4.1-12.78-7.59c-9.35-2.7-25-7.23-23-23.11a20.56 20.56 0 0 1 9-14.95c11.84-8 30.71-3.31 32.83-2.76a8 8 0 0 1-4.07 15.48c-4.49-1.17-15.23-2.56-19.83.56a4.54 4.54 0 0 0-2 3.67c-.12.9-.14 1.09 1.11 1.9c2.31 1.49 6.45 2.68 10.45 3.84c9.79 2.83 26.35 7.66 24.11 24.97M88 152.53a8.17 8.17 0 0 1-8.27 7.47H68v47.73a8.17 8.17 0 0 1-7.47 8.27a8 8 0 0 1-8.53-8v-48H40.27a8.17 8.17 0 0 1-8.27-7.47a8 8 0 0 1 8-8.53h40a8 8 0 0 1 8 8.53"></svg:path>`,
})
export class PhFileTsFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileTsLightIcon],svg[ph-file-ts-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m212.24 83.76l-56-56A6 6 0 0 0 152 26H56a14 14 0 0 0-14 14v72a6 6 0 0 0 12 0V40a2 2 0 0 1 2-2h90v50a6 6 0 0 0 6 6h50v122a2 2 0 0 1-2 2h-24a6 6 0 0 0 0 12h24a14 14 0 0 0 14-14V88a6 6 0 0 0-1.76-4.24M158 46.48L193.52 82H158Zm-12.17 149.58a18.89 18.89 0 0 1-8.31 13.81c-4.82 3.19-10.87 4.14-16.36 4.14a59 59 0 0 1-14.68-2a6 6 0 0 1 3.23-11.56c3.71 1 15.58 3.11 21.19-.62a6.85 6.85 0 0 0 3-5.34c.58-4.43-2.08-6.26-14.2-9.76c-9.31-2.69-23.37-6.75-21.57-20.94a18.61 18.61 0 0 1 8.08-13.54c11.11-7.49 29.18-3 31.21-2.48a6 6 0 0 1-3.06 11.6c-3.78-1-15.85-3-21.45.84a6.59 6.59 0 0 0-2.88 5.08c-.41 3.22 2.14 4.78 13 7.91c9.89 2.89 24.81 7.2 22.8 22.86M86 152a6 6 0 0 1-6 6H66v50a6 6 0 0 1-12 0v-50H40a6 6 0 0 1 0-12h40a6 6 0 0 1 6 6"></svg:path>`,
})
export class PhFileTsLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileTsThinIcon],svg[ph-file-ts-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m210.83 85.17l-56-56A4 4 0 0 0 152 28H56a12 12 0 0 0-12 12v72a4 4 0 0 0 8 0V40a4 4 0 0 1 4-4h92v52a4 4 0 0 0 4 4h52v124a4 4 0 0 1-4 4h-24a4 4 0 0 0 0 8h24a12 12 0 0 0 12-12V88a4 4 0 0 0-1.17-2.83M156 41.65L198.34 84H156ZM143.84 195.8a17 17 0 0 1-7.43 12.41c-4.39 2.91-10 3.77-15.22 3.77a58 58 0 0 1-14.19-1.87a4 4 0 0 1 2.15-7.7c4.22 1.17 16.56 3.29 22.83-.88a8.94 8.94 0 0 0 3.91-6.75c.83-6.45-4.38-8.69-15.64-11.94c-9.68-2.8-21.72-6.28-20.14-18.77a16.66 16.66 0 0 1 7.22-12.13c4.56-3.07 11-4.36 19.1-3.82a61.3 61.3 0 0 1 10.48 1.61a4 4 0 0 1-2.05 7.74c-4.29-1.13-16.81-3.12-23.06 1.11a8.51 8.51 0 0 0-3.75 6.49c-.66 5.17 3.89 7 14.42 10.08c9.79 2.85 23.17 6.69 21.37 20.65M84 152a4 4 0 0 1-4 4H64v52a4 4 0 0 1-8 0v-52H40a4 4 0 0 1 0-8h40a4 4 0 0 1 4 4"></svg:path>`,
})
export class PhFileTsThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileTsxIcon],svg[ph-file-tsx-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M214.51 156.65L197.83 180l16.68 23.35a8 8 0 0 1-13 9.3L188 193.76l-13.49 18.89a8 8 0 1 1-13-9.3L178.17 180l-16.68-23.35a8 8 0 0 1 13-9.3L188 166.24l13.49-18.89a8 8 0 0 1 13 9.3Zm-90.91 14.66c-4-1.16-8.14-2.35-10.45-3.84c-1.25-.82-1.23-1-1.11-1.9a4.54 4.54 0 0 1 2-3.67c4.6-3.12 15.34-1.73 19.83-.56a8 8 0 0 0 4.13-15.48c-2.12-.55-21-5.22-32.84 2.76a20.58 20.58 0 0 0-9 14.95c-2 15.88 13.65 20.41 23 23.11c12.06 3.49 13.12 4.92 12.78 7.59c-.31 2.41-1.26 3.33-2.14 3.93c-4.6 3.06-15.17 1.56-19.55.35a8 8 0 0 0-4.31 15.45a60.6 60.6 0 0 0 15.19 2c5.82 0 12.3-1 17.49-4.46a20.82 20.82 0 0 0 9.19-15.23c2.19-17.31-14.32-22.14-24.21-25M80 144H40a8 8 0 0 0 0 16h12v48a8 8 0 0 0 16 0v-48h12a8 8 0 0 0 0-16m136-56v24a8 8 0 0 1-16 0V96h-48a8 8 0 0 1-8-8V40H56v72a8 8 0 0 1-16 0V40a16 16 0 0 1 16-16h96a8 8 0 0 1 5.66 2.34l56 56A8 8 0 0 1 216 88m-27.31-8L160 51.31V80Z"></svg:path>`,
})
export class PhFileTsxIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileTsxBoldIcon],svg[ph-file-tsx-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M221.76 201a12 12 0 1 1-19.53 14L192 200.62L181.76 215a12 12 0 1 1-19.53-14l15-21l-15-21a12 12 0 0 1 19.53-14L192 159.34L202.23 145a12 12 0 0 1 19.53 14l-15 21Zm-80.25-26.73c-5.12-3.45-11.33-5.24-16.8-6.82a80 80 0 0 1-7.91-2.59c2.45-1.18 9.71-1.3 16.07.33A12 12 0 0 0 139 142a69 69 0 0 0-12-1.86c-9.93-.66-18 1.08-24.1 5.17a24.45 24.45 0 0 0-10.69 17.76c-1.1 8.74 2.48 16.27 10.11 21.19c4.78 3.09 10.36 4.7 15.75 6.26c3 .89 7.94 2.3 9.88 3.53a2.5 2.5 0 0 1-.21.71c-1.37 1.55-9.58 1.79-16.39-.06a12 12 0 1 0-6.46 23.11A63.8 63.8 0 0 0 121.1 220c6.46 0 13.73-1.17 19.73-5.15a24.73 24.73 0 0 0 10.95-18c1.22-9.32-2.45-17.32-10.27-22.58M76 140H36a12 12 0 0 0 0 24h8v44a12 12 0 0 0 24 0v-44h8a12 12 0 0 0 0-24m-40-32V40a20 20 0 0 1 20-20h96a12 12 0 0 1 8.49 3.51l56 56A12 12 0 0 1 220 88v20a12 12 0 1 1-24 0v-4h-48a12 12 0 0 1-12-12V44H60v64a12 12 0 1 1-24 0m124-28h23l-23-23Z"></svg:path>`,
})
export class PhFileTsxBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileTsxDuotoneIcon],svg[ph-file-tsx-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 88h-56V32Z" opacity=".2"></svg:path><svg:path d="M214.51 156.65L197.83 180l16.68 23.35a8 8 0 0 1-13 9.3L188 193.76l-13.49 18.89a8 8 0 1 1-13-9.3L178.17 180l-16.68-23.35a8 8 0 0 1 13-9.3L188 166.24l13.49-18.89a8 8 0 0 1 13 9.3Zm-90.91 14.66c-4-1.16-8.14-2.35-10.45-3.84c-1.25-.82-1.23-1-1.11-1.9a4.54 4.54 0 0 1 2-3.67c4.6-3.12 15.34-1.73 19.83-.56a8 8 0 0 0 4.13-15.48c-2.12-.55-21-5.22-32.84 2.76a20.58 20.58 0 0 0-9 14.94c-2 15.89 13.65 20.42 23 23.12c12.06 3.49 13.12 4.92 12.78 7.59c-.31 2.41-1.26 3.33-2.14 3.93c-4.6 3.06-15.17 1.56-19.55.35A8 8 0 1 0 106 214a60.4 60.4 0 0 0 15.18 2c5.82 0 12.3-1 17.49-4.46a20.82 20.82 0 0 0 9.19-15.23c2.14-17.31-14.37-22.14-24.26-25M80 144H40a8 8 0 0 0 0 16h12v48a8 8 0 0 0 16 0v-48h12a8 8 0 0 0 0-16m136-56v24a8 8 0 0 1-16 0V96h-48a8 8 0 0 1-8-8V40H56v72a8 8 0 0 1-16 0V40a16 16 0 0 1 16-16h96a8 8 0 0 1 5.66 2.34l56 56A8 8 0 0 1 216 88m-27.31-8L160 51.31V80Z"></svg:path></svg:g>`,
})
export class PhFileTsxDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileTsxFillIcon],svg[ph-file-tsx-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m213.66 82.34l-56-56A8 8 0 0 0 152 24H56a16 16 0 0 0-16 16v76a4 4 0 0 0 4 4h168a4 4 0 0 0 4-4V88a8 8 0 0 0-2.34-5.66M152 88V44l44 44Zm62.51 68.65L197.83 180l16.68 23.35a8 8 0 0 1-13 9.3L188 193.76l-13.49 18.89a8 8 0 1 1-13-9.3L178.17 180l-16.68-23.35a8 8 0 0 1 2.3-11.46a8.19 8.19 0 0 1 10.88 2.38L188 166.24l13.49-18.89a8 8 0 0 1 13 9.3Zm-66.7 39.66a20.82 20.82 0 0 1-9.19 15.23C133.43 215 127 216 121.13 216a60.4 60.4 0 0 1-15.13-2a8 8 0 1 1 4.3-15.41c4.38 1.21 15 2.71 19.55-.35c.88-.6 1.83-1.52 2.14-3.93c.34-2.67-.72-4.1-12.78-7.59c-9.35-2.7-25-7.23-23-23.12a20.58 20.58 0 0 1 9-14.94c11.85-8 30.72-3.31 32.84-2.76a8 8 0 0 1-4.07 15.48c-4.49-1.17-15.23-2.56-19.83.56a4.54 4.54 0 0 0-2 3.67c-.12.9-.14 1.08 1.11 1.9c2.31 1.49 6.45 2.68 10.45 3.84c9.78 2.82 26.29 7.65 24.1 24.96M88 152.53a8.18 8.18 0 0 1-8.27 7.47H68v47.72a8.18 8.18 0 0 1-7.47 8.28a8 8 0 0 1-8.53-8v-48H40.27a8.18 8.18 0 0 1-8.27-7.47a8 8 0 0 1 8-8.53h40a8 8 0 0 1 8 8.53"></svg:path>`,
})
export class PhFileTsxFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileTsxLightIcon],svg[ph-file-tsx-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M212.88 155.48L195.37 180l17.51 24.51a6 6 0 1 1-9.76 7L188 190.31l-15.12 21.16a6 6 0 1 1-9.76-7L180.63 180l-17.51-24.51a6 6 0 0 1 9.76-7L188 169.67l15.12-21.17a6 6 0 1 1 9.76 7Zm-89.83 17.74c-10.86-3.13-13.41-4.69-13-7.91a6.59 6.59 0 0 1 2.88-5.08c5.6-3.79 17.66-1.83 21.45-.84a6 6 0 0 0 3.06-11.6c-2-.53-20.1-5-31.21 2.48a18.61 18.61 0 0 0-8.08 13.54c-1.8 14.19 12.26 18.25 21.57 20.94c12.12 3.5 14.78 5.33 14.2 9.76a6.85 6.85 0 0 1-3 5.34c-5.61 3.73-17.48 1.64-21.19.62a6 6 0 0 0-3.25 11.53a59.4 59.4 0 0 0 14.68 2c5.49 0 11.54-.95 16.36-4.14a18.89 18.89 0 0 0 8.31-13.81c2.01-15.66-12.91-19.97-22.78-22.83M80 146H40a6 6 0 0 0 0 12h14v50a6 6 0 0 0 12 0v-50h14a6 6 0 0 0 0-12m134-58v24a6 6 0 1 1-12 0V94h-50a6 6 0 0 1-6-6V38H56a2 2 0 0 0-2 2v72a6 6 0 1 1-12 0V40a14 14 0 0 1 14-14h96a6 6 0 0 1 4.25 1.76l56 56A6 6 0 0 1 214 88m-20.49-6L158 46.48V82Z"></svg:path>`,
})
export class PhFileTsxLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileTsxThinIcon],svg[ph-file-tsx-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M211.25 154.33L192.92 180l18.33 25.67a4 4 0 0 1-.93 5.58a3.9 3.9 0 0 1-2.32.75a4 4 0 0 1-3.26-1.67L188 186.88l-16.75 23.45a4 4 0 0 1-6.51-4.66L183.08 180l-18.34-25.67a4 4 0 0 1 6.51-4.66L188 173.12l16.74-23.45a4 4 0 0 1 6.51 4.66m-88.76 20.82c-10.53-3-15.08-4.91-14.42-10.08a8.51 8.51 0 0 1 3.75-6.49c6.25-4.23 18.77-2.24 23.06-1.11a4 4 0 0 0 2.05-7.74a61.3 61.3 0 0 0-10.48-1.61c-8.12-.54-14.54.75-19.1 3.82a16.66 16.66 0 0 0-7.22 12.13c-1.58 12.49 10.46 16 20.14 18.77c11.26 3.25 16.47 5.49 15.64 11.94a8.94 8.94 0 0 1-3.91 6.75c-6.27 4.17-18.61 2.05-22.83.88a4 4 0 1 0-2.15 7.7a58 58 0 0 0 14.17 1.89c5.18 0 10.83-.86 15.22-3.77a17 17 0 0 0 7.43-12.41c1.8-13.98-11.58-17.82-21.35-20.67M80 148H40a4 4 0 0 0 0 8h16v52a4 4 0 0 0 8 0v-52h16a4 4 0 0 0 0-8m132-60v24a4 4 0 0 1-8 0V92h-52a4 4 0 0 1-4-4V36H56a4 4 0 0 0-4 4v72a4 4 0 0 1-8 0V40a12 12 0 0 1 12-12h96a4 4 0 0 1 2.83 1.17l56 56A4 4 0 0 1 212 88m-13.66-4L156 41.65V84Z"></svg:path>`,
})
export class PhFileTsxThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileTxtIcon],svg[ph-file-txt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M48 120a8 8 0 0 0 8-8V40h88v48a8 8 0 0 0 8 8h48v16a8 8 0 0 0 16 0V88a8 8 0 0 0-2.34-5.66l-56-56A8 8 0 0 0 152 24H56a16 16 0 0 0-16 16v72a8 8 0 0 0 8 8m112-68.69L188.69 80H160Zm-5.49 105.34L137.83 180l16.68 23.35a8 8 0 0 1-13 9.3L128 193.76l-13.49 18.89a8 8 0 1 1-13-9.3L118.17 180l-16.68-23.35a8 8 0 1 1 13-9.3L128 166.24l13.49-18.89a8 8 0 0 1 13 9.3ZM92 152a8 8 0 0 1-8 8H72v48a8 8 0 0 1-16 0v-48H44a8 8 0 0 1 0-16h40a8 8 0 0 1 8 8m128 0a8 8 0 0 1-8 8h-12v48a8 8 0 0 1-16 0v-48h-12a8 8 0 0 1 0-16h40a8 8 0 0 1 8 8"></svg:path>`,
})
export class PhFileTxtIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileTxtBoldIcon],svg[ph-file-txt-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M48 120a12 12 0 0 0 12-12V44h76v48a12 12 0 0 0 12 12h48v4a12 12 0 0 0 24 0V88a12 12 0 0 0-3.51-8.49l-56-56A12 12 0 0 0 152 20H56a20 20 0 0 0-20 20v68a12 12 0 0 0 12 12m135-40h-23V57Zm-25.27 79l-15 21l15 21a12 12 0 1 1-19.49 14L128 200.65L117.76 215a12 12 0 1 1-19.52-14l15-21l-15-21a12 12 0 1 1 19.52-14L128 159.35L138.24 145a12 12 0 1 1 19.52 14ZM92 152a12 12 0 0 1-12 12h-8v44a12 12 0 0 1-24 0v-44h-8a12 12 0 0 1 0-24h40a12 12 0 0 1 12 12m136 0a12 12 0 0 1-12 12h-8v44a12 12 0 0 1-24 0v-44h-8a12 12 0 0 1 0-24h40a12 12 0 0 1 12 12"></svg:path>`,
})
export class PhFileTxtBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileTxtDuotoneIcon],svg[ph-file-txt-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 88h-56V32Z" opacity=".2"></svg:path><svg:path d="M48 120a8 8 0 0 0 8-8V40h88v48a8 8 0 0 0 8 8h48v16a8 8 0 0 0 16 0V88a8 8 0 0 0-2.34-5.66l-56-56A8 8 0 0 0 152 24H56a16 16 0 0 0-16 16v72a8 8 0 0 0 8 8m112-68.69L188.69 80H160Zm-5.49 105.34L137.83 180l16.68 23.35a8 8 0 0 1-13 9.3L128 193.76l-13.49 18.89a8 8 0 1 1-13-9.3L118.17 180l-16.68-23.35a8 8 0 1 1 13-9.3L128 166.24l13.49-18.89a8 8 0 0 1 13 9.3ZM92 152a8 8 0 0 1-8 8H72v48a8 8 0 0 1-16 0v-48H44a8 8 0 0 1 0-16h40a8 8 0 0 1 8 8m128 0a8 8 0 0 1-8 8h-12v48a8 8 0 0 1-16 0v-48h-12a8 8 0 0 1 0-16h40a8 8 0 0 1 8 8"></svg:path></svg:g>`,
})
export class PhFileTxtDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileTxtFillIcon],svg[ph-file-txt-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M154.31 156.92L137.83 180l16.53 23.14a8.18 8.18 0 0 1-1.22 11a8 8 0 0 1-11.65-1.48L128 193.76l-13.49 18.89a8 8 0 0 1-11.64 1.49a8.17 8.17 0 0 1-1.23-11L118.17 180l-16.48-23.08a8.22 8.22 0 0 1 1.46-11.28a8 8 0 0 1 11.36 1.71L128 166.24l13.49-18.89a8 8 0 0 1 11.36-1.71a8.22 8.22 0 0 1 1.46 11.28M84 144H44.27a8.18 8.18 0 0 0-8.27 7.47a8 8 0 0 0 8 8.53h12v47.73a8.17 8.17 0 0 0 7.47 8.27a8 8 0 0 0 8.53-8v-48h11.73a8.18 8.18 0 0 0 8.27-7.47a8 8 0 0 0-8-8.53m128 0h-39.73a8.18 8.18 0 0 0-8.25 7.47a8 8 0 0 0 8 8.53h12v47.73a8.17 8.17 0 0 0 7.47 8.25a8 8 0 0 0 8.53-8V160h11.73a8.18 8.18 0 0 0 8.25-7.47a8 8 0 0 0-8-8.53M40 116V40a16 16 0 0 1 16-16h96a8 8 0 0 1 5.66 2.34l56 56A8 8 0 0 1 216 88v28a4 4 0 0 1-4 4H44a4 4 0 0 1-4-4m112-28h44l-44-44Z"></svg:path>`,
})
export class PhFileTxtFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileTxtLightIcon],svg[ph-file-txt-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M48 118a6 6 0 0 0 6-6V40a2 2 0 0 1 2-2h90v50a6 6 0 0 0 6 6h50v18a6 6 0 0 0 12 0V88a6 6 0 0 0-1.76-4.24l-56-56A6 6 0 0 0 152 26H56a14 14 0 0 0-14 14v72a6 6 0 0 0 6 6m110-71.52L193.52 82H158Zm-5.12 109L135.37 180l17.51 24.51a6 6 0 1 1-9.76 7L128 190.32l-15.12 21.17a6 6 0 0 1-9.76-7L120.63 180l-17.51-24.51a6 6 0 1 1 9.76-7L128 169.68l15.12-21.17a6 6 0 0 1 9.76 7ZM90 152a6 6 0 0 1-6 6H70v50a6 6 0 0 1-12 0v-50H44a6 6 0 0 1 0-12h40a6 6 0 0 1 6 6m128 0a6 6 0 0 1-6 6h-14v50a6 6 0 0 1-12 0v-50h-14a6 6 0 0 1 0-12h40a6 6 0 0 1 6 6"></svg:path>`,
})
export class PhFileTxtLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileTxtThinIcon],svg[ph-file-txt-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M204 112a4 4 0 0 0 8 0V88a4 4 0 0 0-1.17-2.83l-56-56A4 4 0 0 0 152 28H56a12 12 0 0 0-12 12v72a4 4 0 0 0 8 0V40a4 4 0 0 1 4-4h92v52a4 4 0 0 0 4 4h52Zm-48-70.35L198.34 84H156Zm-4.75 112.67L132.92 180l18.33 25.67a4 4 0 1 1-6.5 4.65L128 186.88l-16.75 23.44a4 4 0 1 1-6.5-4.65L123.08 180l-18.33-25.68a4 4 0 1 1 6.5-4.65L128 173.12l16.75-23.45a4 4 0 1 1 6.5 4.65M88 152a4 4 0 0 1-4 4H68v52a4 4 0 0 1-8 0v-52H44a4 4 0 0 1 0-8h40a4 4 0 0 1 4 4m128 0a4 4 0 0 1-4 4h-16v52a4 4 0 0 1-8 0v-52h-16a4 4 0 0 1 0-8h40a4 4 0 0 1 4 4"></svg:path>`,
})
export class PhFileTxtThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileVideoIcon],svg[ph-file-video-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m213.66 82.34l-56-56A8 8 0 0 0 152 24H56a16 16 0 0 0-16 16v72a8 8 0 0 0 16 0V40h88v48a8 8 0 0 0 8 8h48v120h-8a8 8 0 0 0 0 16h8a16 16 0 0 0 16-16V88a8 8 0 0 0-2.34-5.66M160 51.31L188.69 80H160ZM155.88 145a8 8 0 0 0-8.12.22l-19.95 12.46A16 16 0 0 0 112 144H48a16 16 0 0 0-16 16v48a16 16 0 0 0 16 16h64a16 16 0 0 0 15.81-13.68l19.95 12.46A8 8 0 0 0 160 216v-64a8 8 0 0 0-4.12-7M112 208H48v-48h64zm32-6.43l-16-10v-15.14l16-10Z"></svg:path>`,
})
export class PhFileVideoIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileVideoBoldIcon],svg[ph-file-video-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m216.49 79.51l-56-56A12 12 0 0 0 152 20H56a20 20 0 0 0-20 20v68a12 12 0 0 0 24 0V44h76v48a12 12 0 0 0 12 12h48v108a12 12 0 0 0 0 24h4a20 20 0 0 0 20-20V88a12 12 0 0 0-3.51-8.49M160 57l23 23h-23Zm-1.91 84.69a12 12 0 0 0-11.92-.15l-19.67 10.9A20 20 0 0 0 108 140H48a20 20 0 0 0-20 20v48a20 20 0 0 0 20 20h60a20 20 0 0 0 18.5-12.44l19.67 10.93A12 12 0 0 0 164 216v-64a12 12 0 0 0-5.91-10.34ZM104 204H52v-40h52Zm36-8.39l-12-6.67v-9.88l12-6.67Z"></svg:path>`,
})
export class PhFileVideoBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileVideoDuotoneIcon],svg[ph-file-video-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 88h-56V32Zm-88 72a8 8 0 0 0-8-8H48a8 8 0 0 0-8 8v48a8 8 0 0 0 8 8h64a8 8 0 0 0 8-8v-12l32 20v-64l-32 20Z" opacity=".2"></svg:path><svg:path d="m213.66 82.34l-56-56A8 8 0 0 0 152 24H56a16 16 0 0 0-16 16v72a8 8 0 0 0 16 0V40h88v48a8 8 0 0 0 8 8h48v120h-8a8 8 0 0 0 0 16h8a16 16 0 0 0 16-16V88a8 8 0 0 0-2.34-5.66M160 51.31L188.69 80H160ZM155.88 145a8 8 0 0 0-8.12.22l-19.95 12.46A16 16 0 0 0 112 144H48a16 16 0 0 0-16 16v48a16 16 0 0 0 16 16h64a16 16 0 0 0 15.81-13.68l19.95 12.46A8 8 0 0 0 160 216v-64a8 8 0 0 0-4.12-7M112 208H48v-48h64zm32-6.43l-16-10v-15.14l16-10Z"></svg:path></svg:g>`,
})
export class PhFileVideoDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileVideoFillIcon],svg[ph-file-video-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m213.66 82.34l-56-56A8 8 0 0 0 152 24H56a16 16 0 0 0-16 16v72a8 8 0 0 0 16 0V40h88v48a8 8 0 0 0 8 8h48v120h-8a8 8 0 0 0 0 16h8a16 16 0 0 0 16-16V88a8 8 0 0 0-2.34-5.66M160 51.31L188.69 80H160ZM155.88 145a8 8 0 0 0-8.12.22l-19.95 12.46A16 16 0 0 0 112 144H48a16 16 0 0 0-16 16v48a16 16 0 0 0 16 16h64a16 16 0 0 0 15.81-13.68l19.95 12.46A8 8 0 0 0 160 216v-64a8 8 0 0 0-4.12-7M144 201.57l-16-10v-15.14l16-10Z"></svg:path>`,
})
export class PhFileVideoFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileVideoLightIcon],svg[ph-file-video-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m212.24 83.76l-56-56A6 6 0 0 0 152 26H56a14 14 0 0 0-14 14v72a6 6 0 0 0 12 0V40a2 2 0 0 1 2-2h90v50a6 6 0 0 0 6 6h50v122a2 2 0 0 1-2 2h-8a6 6 0 0 0 0 12h8a14 14 0 0 0 14-14V88a6 6 0 0 0-1.76-4.24M158 46.48L193.52 82H158Zm-3.09 100.27a6 6 0 0 0-6.09.16L126 161.17V160a14 14 0 0 0-14-14H48a14 14 0 0 0-14 14v48a14 14 0 0 0 14 14h64a14 14 0 0 0 14-14v-1.17l22.82 14.26A6 6 0 0 0 158 216v-64a6 6 0 0 0-3.09-5.25M114 208a2 2 0 0 1-2 2H48a2 2 0 0 1-2-2v-48a2 2 0 0 1 2-2h64a2 2 0 0 1 2 2Zm32-2.83l-20-12.5v-17.34l20-12.5Z"></svg:path>`,
})
export class PhFileVideoLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileVideoThinIcon],svg[ph-file-video-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m210.83 85.17l-56-56A4 4 0 0 0 152 28H56a12 12 0 0 0-12 12v72a4 4 0 0 0 8 0V40a4 4 0 0 1 4-4h92v52a4 4 0 0 0 4 4h52v124a4 4 0 0 1-4 4h-8a4 4 0 0 0 0 8h8a12 12 0 0 0 12-12V88a4 4 0 0 0-1.17-2.83M156 41.65L198.34 84H156Zm-2.06 106.85a4 4 0 0 0-4.06.11L124 164.78V160a12 12 0 0 0-12-12H48a12 12 0 0 0-12 12v48a12 12 0 0 0 12 12h64a12 12 0 0 0 12-12v-4.78l25.88 16.17a4 4 0 0 0 2.12.61a4.06 4.06 0 0 0 1.94-.5A4 4 0 0 0 156 216v-64a4 4 0 0 0-2.06-3.5M116 208a4 4 0 0 1-4 4H48a4 4 0 0 1-4-4v-48a4 4 0 0 1 4-4h64a4 4 0 0 1 4 4Zm32 .78l-24-15v-19.56l24-15Z"></svg:path>`,
})
export class PhFileVideoThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileVueIcon],svg[ph-file-vue-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m87.54 154.69l-20 56a8 8 0 0 1-15.07 0l-20-56a8 8 0 0 1 15.07-5.38L60 184.21l12.47-34.9a8 8 0 0 1 15.07 5.38M208 160a8 8 0 0 0 0-16h-32a8 8 0 0 0-8 8v56a8 8 0 0 0 8 8h32a8 8 0 0 0 0-16h-24v-12h16a8 8 0 0 0 0-16h-16v-12Zm-64-16a8 8 0 0 0-8 8v38a10 10 0 0 1-20 0v-38a8 8 0 0 0-16 0v38a26 26 0 0 0 52 0v-38a8 8 0 0 0-8-8m72-56v24a8 8 0 0 1-16 0V96h-48a8 8 0 0 1-8-8V40H56v72a8 8 0 0 1-16 0V40a16 16 0 0 1 16-16h96a8 8 0 0 1 5.66 2.34l56 56A8 8 0 0 1 216 88m-27.31-8L160 51.31V80Z"></svg:path>`,
})
export class PhFileVueIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileVueBoldIcon],svg[ph-file-vue-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m87.3 156l-20 56a12 12 0 0 1-22.6 0l-20-56a12 12 0 0 1 22.6-8l8.7 24.32L64.7 148a12 12 0 0 1 22.6 8M212 196h-20v-4h12a12 12 0 0 0 0-24h-12v-4h20a12 12 0 0 0 0-24h-32a12 12 0 0 0-12 12v56a12 12 0 0 0 12 12h32a12 12 0 0 0 0-24m-68-56a12 12 0 0 0-12 12v38a6 6 0 0 1-12 0v-38a12 12 0 0 0-24 0v38a30 30 0 0 0 60 0v-38a12 12 0 0 0-12-12M36 108V40a20 20 0 0 1 20-20h96a12 12 0 0 1 8.49 3.52l56 56A12 12 0 0 1 220 88v20a12 12 0 0 1-24 0v-4h-48a12 12 0 0 1-12-12V44H60v64a12 12 0 0 1-24 0m124-28h23l-23-23Z"></svg:path>`,
})
export class PhFileVueBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileVueDuotoneIcon],svg[ph-file-vue-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 88h-56V32Z" opacity=".2"></svg:path><svg:path d="m87.54 154.69l-20 56a8 8 0 0 1-15.07 0l-20-56a8 8 0 0 1 15.07-5.38L60 184.21l12.47-34.9a8 8 0 0 1 15.07 5.38M208 160a8 8 0 0 0 0-16h-32a8 8 0 0 0-8 8v56a8 8 0 0 0 8 8h32a8 8 0 0 0 0-16h-24v-12h16a8 8 0 0 0 0-16h-16v-12Zm-64-16a8 8 0 0 0-8 8v38a10 10 0 0 1-20 0v-38a8 8 0 0 0-16 0v38a26 26 0 0 0 52 0v-38a8 8 0 0 0-8-8m72-56v24a8 8 0 0 1-16 0V96h-48a8 8 0 0 1-8-8V40H56v72a8 8 0 0 1-16 0V40a16 16 0 0 1 16-16h96a8 8 0 0 1 5.66 2.34l56 56A8 8 0 0 1 216 88m-27.31-8L160 51.31V80Z"></svg:path></svg:g>`,
})
export class PhFileVueDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileVueFillIcon],svg[ph-file-vue-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m213.66 82.34l-56-56A8 8 0 0 0 152 24H56a16 16 0 0 0-16 16v76a4 4 0 0 0 4 4h168a4 4 0 0 0 4-4V88a8 8 0 0 0-2.34-5.66M152 88V44l44 44Zm-64.64 67l-19.89 55.69a8 8 0 0 1-15.08 0L32.5 155a8.21 8.21 0 0 1 4.5-10.45a8 8 0 0 1 10.46 4.76l12.47 34.9l12.47-34.9a8 8 0 0 1 10.46-4.76a8.22 8.22 0 0 1 4.5 10.45m96.64 5v12h15.73a8.19 8.19 0 0 1 8.26 7.47a8 8 0 0 1-8 8.53H184v12h23.73a8.18 8.18 0 0 1 8.26 7.47a8 8 0 0 1-8 8.53H176a8 8 0 0 1-8-8v-56a8 8 0 0 1 8-8h31.74a8.18 8.18 0 0 1 8.26 7.47a8 8 0 0 1-8 8.53Zm-32-8v37.45c0 14.14-11.07 26.12-25.22 26.54A26 26 0 0 1 100 190v-37.73a8.18 8.18 0 0 1 7.47-8.25a8 8 0 0 1 8.54 8v37.65a10.23 10.23 0 0 0 9.26 10.33A10 10 0 0 0 136 190v-37.73a8.18 8.18 0 0 1 7.47-8.25A8 8 0 0 1 152 152"></svg:path>`,
})
export class PhFileVueFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileVueLightIcon],svg[ph-file-vue-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m85.65 154l-20 56a6 6 0 0 1-11.3 0l-20-56a6 6 0 1 1 11.3-4L60 190.16L74.35 150a6 6 0 0 1 11.3 4M208 158a6 6 0 0 0 0-12h-32a6 6 0 0 0-6 6v56a6 6 0 0 0 6 6h32a6 6 0 0 0 0-12h-26v-16h18a6 6 0 0 0 0-12h-18v-16Zm-64-12a6 6 0 0 0-6 6v38a12 12 0 0 1-24 0v-38a6 6 0 0 0-12 0v38a24 24 0 0 0 48 0v-38a6 6 0 0 0-6-6m70-58v24a6 6 0 0 1-12 0V94h-50a6 6 0 0 1-6-6V38H56a2 2 0 0 0-2 2v72a6 6 0 0 1-12 0V40a14 14 0 0 1 14-14h96a6 6 0 0 1 4.25 1.76l56 56A6 6 0 0 1 214 88m-20.48-6L158 46.48V82Z"></svg:path>`,
})
export class PhFileVueLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileVueThinIcon],svg[ph-file-vue-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m83.77 153.35l-20 56a4 4 0 0 1-7.54 0l-20-56a4 4 0 0 1 7.54-2.7L60 196.11l16.23-45.46a4 4 0 0 1 7.54 2.7M208 156a4 4 0 0 0 0-8h-32a4 4 0 0 0-4 4v56a4 4 0 0 0 4 4h32a4 4 0 0 0 0-8h-28v-20h20a4 4 0 0 0 0-8h-20v-20Zm-64-8a4 4 0 0 0-4 4v38a14 14 0 0 1-28 0v-38a4 4 0 0 0-8 0v38a22 22 0 0 0 44 0v-38a4 4 0 0 0-4-4m68-60v24a4 4 0 0 1-8 0V92h-52a4 4 0 0 1-4-4V36H56a4 4 0 0 0-4 4v72a4 4 0 0 1-8 0V40a12 12 0 0 1 12-12h96a4 4 0 0 1 2.83 1.17l56 56A4 4 0 0 1 212 88m-13.66-4L156 41.65V84Z"></svg:path>`,
})
export class PhFileVueThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileXIcon],svg[ph-file-x-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m213.66 82.34l-56-56A8 8 0 0 0 152 24H56a16 16 0 0 0-16 16v176a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V88a8 8 0 0 0-2.34-5.66M160 51.31L188.69 80H160ZM200 216H56V40h88v48a8 8 0 0 0 8 8h48zm-42.34-82.34L139.31 152l18.35 18.34a8 8 0 0 1-11.32 11.32L128 163.31l-18.34 18.35a8 8 0 0 1-11.32-11.32L116.69 152l-18.35-18.34a8 8 0 0 1 11.32-11.32L128 140.69l18.34-18.35a8 8 0 0 1 11.32 11.32"></svg:path>`,
})
export class PhFileXIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileXBoldIcon],svg[ph-file-x-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m216.49 79.52l-56-56A12 12 0 0 0 152 20H56a20 20 0 0 0-20 20v176a20 20 0 0 0 20 20h144a20 20 0 0 0 20-20V88a12 12 0 0 0-3.51-8.48M183 80h-23V57ZM60 212V44h76v48a12 12 0 0 0 12 12h48v108Zm100.49-75.51L145 152l15.52 15.51a12 12 0 0 1-17 17L128 169l-15.51 15.52a12 12 0 0 1-17-17L111 152l-15.49-15.51a12 12 0 1 1 17-17L128 135l15.51-15.52a12 12 0 1 1 17 17Z"></svg:path>`,
})
export class PhFileXBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileXDuotoneIcon],svg[ph-file-x-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 88h-56V32Z" opacity=".2"></svg:path><svg:path d="m213.66 82.34l-56-56A8 8 0 0 0 152 24H56a16 16 0 0 0-16 16v176a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V88a8 8 0 0 0-2.34-5.66M160 51.31L188.69 80H160ZM200 216H56V40h88v48a8 8 0 0 0 8 8h48zm-42.34-82.34L139.31 152l18.35 18.34a8 8 0 0 1-11.32 11.32L128 163.31l-18.34 18.35a8 8 0 0 1-11.32-11.32L116.69 152l-18.35-18.34a8 8 0 0 1 11.32-11.32L128 140.69l18.34-18.35a8 8 0 0 1 11.32 11.32"></svg:path></svg:g>`,
})
export class PhFileXDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileXFillIcon],svg[ph-file-x-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m213.66 82.34l-56-56A8 8 0 0 0 152 24H56a16 16 0 0 0-16 16v176a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V88a8 8 0 0 0-2.34-5.66m-56 88a8 8 0 0 1-11.32 11.32L128 163.31l-18.34 18.35a8 8 0 0 1-11.32-11.32L116.69 152l-18.35-18.34a8 8 0 0 1 11.32-11.32L128 140.69l18.34-18.35a8 8 0 0 1 11.32 11.32L139.31 152ZM152 88V44l44 44Z"></svg:path>`,
})
export class PhFileXFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileXLightIcon],svg[ph-file-x-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m212.24 83.76l-56-56A6 6 0 0 0 152 26H56a14 14 0 0 0-14 14v176a14 14 0 0 0 14 14h144a14 14 0 0 0 14-14V88a6 6 0 0 0-1.76-4.24M158 46.48L193.52 82H158ZM202 216a2 2 0 0 1-2 2H56a2 2 0 0 1-2-2V40a2 2 0 0 1 2-2h90v50a6 6 0 0 0 6 6h50Zm-45.76-92.24a6 6 0 0 1 0 8.48L136.49 152l19.75 19.76a6 6 0 1 1-8.48 8.48L128 160.49l-19.76 19.75a6 6 0 0 1-8.48-8.48L119.51 152l-19.75-19.76a6 6 0 1 1 8.48-8.48L128 143.51l19.76-19.75a6 6 0 0 1 8.48 0"></svg:path>`,
})
export class PhFileXLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileXThinIcon],svg[ph-file-x-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m210.83 85.17l-56-56A4 4 0 0 0 152 28H56a12 12 0 0 0-12 12v176a12 12 0 0 0 12 12h144a12 12 0 0 0 12-12V88a4 4 0 0 0-1.17-2.83M156 41.65L198.34 84H156ZM200 220H56a4 4 0 0 1-4-4V40a4 4 0 0 1 4-4h92v52a4 4 0 0 0 4 4h52v124a4 4 0 0 1-4 4m-45.17-89.17L133.66 152l21.17 21.17a4 4 0 0 1-5.66 5.66L128 157.66l-21.17 21.17a4 4 0 0 1-5.66-5.66L122.34 152l-21.17-21.17a4 4 0 1 1 5.66-5.66L128 146.34l21.17-21.17a4 4 0 1 1 5.66 5.66"></svg:path>`,
})
export class PhFileXThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileXlsIcon],svg[ph-file-xls-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M156 208a8 8 0 0 1-8 8h-28a8 8 0 0 1-8-8v-56a8 8 0 0 1 16 0v48h20a8 8 0 0 1 8 8m-63.35-62.51a8 8 0 0 0-11.16 1.86L68 166.24l-13.49-18.89a8 8 0 1 0-13 9.3L58.17 180l-16.68 23.35a8 8 0 0 0 13 9.3L68 193.76l13.49 18.89a8 8 0 0 0 13-9.3L77.83 180l16.68-23.35a8 8 0 0 0-1.86-11.16m98.94 25.82c-4-1.16-8.14-2.35-10.45-3.84c-1.25-.82-1.23-1-1.12-1.9a4.54 4.54 0 0 1 2-3.67c4.6-3.12 15.34-1.72 19.82-.56a8 8 0 0 0 4.07-15.48c-2.11-.55-21-5.22-32.83 2.76a20.58 20.58 0 0 0-8.95 14.95c-2 15.88 13.65 20.41 23 23.11c12.06 3.49 13.12 4.92 12.78 7.59c-.31 2.41-1.26 3.33-2.15 3.93c-4.6 3.06-15.16 1.55-19.54.35a8 8 0 0 0-4.29 15.45a60.6 60.6 0 0 0 15.19 2c5.82 0 12.3-1 17.49-4.46a20.81 20.81 0 0 0 9.18-15.23c2.21-17.31-14.31-22.14-24.2-25M40 112V40a16 16 0 0 1 16-16h96a8 8 0 0 1 5.66 2.34l56 56A8 8 0 0 1 216 88v24a8 8 0 1 1-16 0V96h-48a8 8 0 0 1-8-8V40H56v72a8 8 0 0 1-16 0m120-32h28.68L160 51.31Z"></svg:path>`,
})
export class PhFileXlsIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileXlsBoldIcon],svg[ph-file-xls-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M160 208a12 12 0 0 1-12 12h-28a12 12 0 0 1-12-12v-56a12 12 0 0 1 24 0v44h16a12 12 0 0 1 12 12m-69-65.78A12 12 0 0 0 74.24 145L64 159.34L53.77 145a12 12 0 1 0-19.53 14l15 21l-15 21a12 12 0 1 0 19.53 14L64 200.62L74.24 215a12 12 0 0 0 19.53-14l-15-21l15-21A12 12 0 0 0 91 142.22m122.53 32.05c-5.12-3.45-11.32-5.24-16.79-6.82a80 80 0 0 1-7.92-2.59c2.45-1.18 9.71-1.3 16.07.33A12 12 0 0 0 211 142a69 69 0 0 0-12-1.86c-9.93-.66-18 1.08-24.1 5.17a24.45 24.45 0 0 0-10.69 17.76c-1.1 8.74 2.49 16.27 10.11 21.19c4.78 3.09 10.36 4.7 15.75 6.26c3 .89 7.94 2.3 9.88 3.53a2.5 2.5 0 0 1-.21.71c-1.37 1.55-9.58 1.79-16.39-.06a12 12 0 1 0-6.46 23.11A63.8 63.8 0 0 0 193.1 220c6.46 0 13.73-1.17 19.73-5.15a24.73 24.73 0 0 0 10.95-18c1.22-9.32-2.45-17.32-10.27-22.58ZM36 108V40a20 20 0 0 1 20-20h96a12 12 0 0 1 8.49 3.51l56 56A12 12 0 0 1 220 88v20a12 12 0 1 1-24 0v-4h-48a12 12 0 0 1-12-12V44H60v64a12 12 0 1 1-24 0m124-28h23l-23-23Z"></svg:path>`,
})
export class PhFileXlsBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileXlsDuotoneIcon],svg[ph-file-xls-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 88h-56V32Z" opacity=".2"></svg:path><svg:path d="M156 208a8 8 0 0 1-8 8h-28a8 8 0 0 1-8-8v-56a8 8 0 0 1 16 0v48h20a8 8 0 0 1 8 8m-63.35-62.51a8 8 0 0 0-11.16 1.86L68 166.24l-13.49-18.89a8 8 0 1 0-13 9.3L58.17 180l-16.68 23.35a8 8 0 0 0 13 9.3L68 193.76l13.49 18.89a8 8 0 0 0 13-9.3L77.83 180l16.68-23.35a8 8 0 0 0-1.86-11.16m98.94 25.82c-4-1.16-8.14-2.35-10.45-3.84c-1.25-.82-1.23-1-1.12-1.9a4.54 4.54 0 0 1 2-3.67c4.6-3.12 15.34-1.73 19.82-.56a8 8 0 0 0 4.07-15.48c-2.11-.55-21-5.22-32.83 2.76a20.58 20.58 0 0 0-8.95 14.94c-2 15.89 13.65 20.42 23 23.12c12.06 3.49 13.12 4.92 12.78 7.59c-.31 2.41-1.26 3.33-2.15 3.93c-4.6 3.06-15.16 1.56-19.54.35a8 8 0 0 0-4.29 15.45a60.6 60.6 0 0 0 15.19 2c5.82 0 12.3-1 17.49-4.46a20.81 20.81 0 0 0 9.18-15.23c2.21-17.31-14.31-22.14-24.2-25M40 112V40a16 16 0 0 1 16-16h96a8 8 0 0 1 5.66 2.34l56 56A8 8 0 0 1 216 88v24a8 8 0 1 1-16 0V96h-48a8 8 0 0 1-8-8V40H56v72a8 8 0 0 1-16 0m120-32h28.68L160 51.31Z"></svg:path></svg:g>`,
})
export class PhFileXlsDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileXlsFillIcon],svg[ph-file-xls-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M44 120h168a4 4 0 0 0 4-4V88a8 8 0 0 0-2.34-5.66l-56-56A8 8 0 0 0 152 24H56a16 16 0 0 0-16 16v76a4 4 0 0 0 4 4m108-76l44 44h-44Zm4 164.53a8.18 8.18 0 0 1-8.25 7.47H120a8 8 0 0 1-8-8v-55.73a8.18 8.18 0 0 1 7.47-8.25a8 8 0 0 1 8.53 8v48h20a8 8 0 0 1 8 8.51m-61.49-51.88L77.83 180l16.68 23.35a8 8 0 0 1-13 9.3L68 193.76l-13.49 18.89a8 8 0 1 1-13-9.3L58.17 180l-16.68-23.35a8 8 0 0 1 2.3-11.46a8.19 8.19 0 0 1 10.88 2.38L68 166.24l13.49-18.89a8 8 0 0 1 13 9.3Zm121.28 39.66a20.81 20.81 0 0 1-9.18 15.23c-5.19 3.46-11.67 4.46-17.49 4.46a60.6 60.6 0 0 1-15.19-2a8 8 0 0 1 4.31-15.41c4.38 1.21 14.94 2.71 19.54-.35c.89-.6 1.84-1.52 2.15-3.93c.34-2.67-.72-4.1-12.78-7.59c-9.35-2.7-25-7.23-23-23.12a20.58 20.58 0 0 1 8.95-14.94c11.84-8 30.72-3.31 32.83-2.76a8 8 0 0 1-4.07 15.48c-4.48-1.17-15.22-2.56-19.82.56a4.54 4.54 0 0 0-2 3.67c-.11.9-.13 1.08 1.12 1.9c2.31 1.49 6.45 2.68 10.45 3.84c9.87 2.82 26.39 7.65 24.18 24.96"></svg:path>`,
})
export class PhFileXlsFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileXlsLightIcon],svg[ph-file-xls-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M154 208a6 6 0 0 1-6 6h-28a6 6 0 0 1-6-6v-56a6 6 0 1 1 12 0v50h22a6 6 0 0 1 6 6m-62.52-60.89a6 6 0 0 0-8.36 1.39L68 169.67L52.88 148.5a6 6 0 1 0-9.76 7L60.63 180l-17.51 24.5a6 6 0 1 0 9.76 7L68 190.31l15.12 21.16A6 6 0 0 0 88 214a5.9 5.9 0 0 0 3.48-1.12a6 6 0 0 0 1.4-8.37L75.37 180l17.51-24.51a6 6 0 0 0-1.4-8.38M191 173.22c-10.85-3.13-13.41-4.69-13-7.91a6.59 6.59 0 0 1 2.88-5.08c5.6-3.79 17.65-1.83 21.44-.84a6 6 0 0 0 3.07-11.6c-2-.54-20.1-5-31.21 2.48a18.64 18.64 0 0 0-8.08 13.54c-1.8 14.19 12.26 18.25 21.57 20.94c12.12 3.5 14.77 5.33 14.2 9.76a6.85 6.85 0 0 1-3 5.34c-5.61 3.73-17.48 1.64-21.19.62a6 6 0 0 0-3.21 11.53a59.4 59.4 0 0 0 14.68 2c5.49 0 11.54-.95 16.36-4.14a18.89 18.89 0 0 0 8.31-13.81c2.01-15.66-12.91-19.97-22.82-22.83M42 112V40a14 14 0 0 1 14-14h96a6 6 0 0 1 4.24 1.76l56 56A6 6 0 0 1 214 88v24a6 6 0 1 1-12 0V94h-50a6 6 0 0 1-6-6V38H56a2 2 0 0 0-2 2v72a6 6 0 1 1-12 0m116-30h35.5L158 46.48Z"></svg:path>`,
})
export class PhFileXlsLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileXlsThinIcon],svg[ph-file-xls-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M152 208a4 4 0 0 1-4 4h-28a4 4 0 0 1-4-4v-56a4 4 0 0 1 8 0v52h24a4 4 0 0 1 4 4m-61.68-59.25a4 4 0 0 0-5.58.92L68 173.12l-16.75-23.45a4 4 0 0 0-6.5 4.66L63.08 180l-18.33 25.67a4 4 0 0 0 .93 5.58A3.9 3.9 0 0 0 48 212a4 4 0 0 0 3.25-1.67L68 186.88l16.74 23.45A4 4 0 0 0 88 212a3.9 3.9 0 0 0 2.32-.75a4 4 0 0 0 .93-5.58L72.91 180l18.34-25.67a4 4 0 0 0-.93-5.58m100.17 26.4c-10.53-3-15.08-4.91-14.43-10.08a8.57 8.57 0 0 1 3.75-6.49c6.26-4.23 18.77-2.24 23.07-1.11a4 4 0 0 0 2-7.74a61.3 61.3 0 0 0-10.48-1.61c-8.11-.54-14.54.75-19.09 3.82a16.63 16.63 0 0 0-7.22 12.13c-1.59 12.49 10.46 16 20.14 18.77c11.25 3.25 16.46 5.49 15.63 11.94a8.93 8.93 0 0 1-3.9 6.75c-6.28 4.17-18.61 2.05-22.83.88a4 4 0 1 0-2.15 7.7a57.7 57.7 0 0 0 14.21 1.89c5.17 0 10.83-.86 15.22-3.77a17 17 0 0 0 7.43-12.41c1.79-13.98-11.58-17.82-21.35-20.67M204 92h-52a4 4 0 0 1-4-4V36H56a4 4 0 0 0-4 4v72a4 4 0 0 1-8 0V40a12 12 0 0 1 12-12h96a4 4 0 0 1 2.83 1.17l56 56A4 4 0 0 1 212 88v24a4 4 0 0 1-8 0Zm-5.65-8L156 41.65V84Z"></svg:path>`,
})
export class PhFileXlsThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileZipIcon],svg[ph-file-zip-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M184 144h-16a8 8 0 0 0-8 8v56a8 8 0 0 0 16 0v-8h8a28 28 0 0 0 0-56m0 40h-8v-24h8a12 12 0 0 1 0 24m-48-32v56a8 8 0 0 1-16 0v-56a8 8 0 0 1 16 0m-40 56a8 8 0 0 1-8 8H56a8 8 0 0 1-7-12l25.16-44H56a8 8 0 0 1 0-16h32a8 8 0 0 1 7 12l-25.21 44H88a8 8 0 0 1 8 8M213.66 82.34l-56-56A8 8 0 0 0 152 24H56a16 16 0 0 0-16 16v72a8 8 0 0 0 16 0V40h88v48a8 8 0 0 0 8 8h48v16a8 8 0 0 0 16 0V88a8 8 0 0 0-2.34-5.66M160 80V51.31L188.69 80Z"></svg:path>`,
})
export class PhFileZipIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileZipBoldIcon],svg[ph-file-zip-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M188 140h-16a12 12 0 0 0-12 12v56a12 12 0 0 0 24 0v-4h4a32 32 0 0 0 0-64m0 40h-4v-16h4a8 8 0 0 1 0 16m-48-28v56a12 12 0 0 1-24 0v-56a12 12 0 0 1 24 0m-44 56a12 12 0 0 1-12 12H52a12 12 0 0 1-10.42-17.95L63.32 164H52a12 12 0 0 1 0-24h32a12 12 0 0 1 10.42 18l-21.74 38H84a12 12 0 0 1 12 12M216.49 79.52l-56-56A12 12 0 0 0 152 20H56a20 20 0 0 0-20 20v68a12 12 0 0 0 24 0V44h76v48a12 12 0 0 0 12 12h48v4a12 12 0 0 0 24 0V88a12 12 0 0 0-3.51-8.48M160 80V57l23 23Z"></svg:path>`,
})
export class PhFileZipBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileZipDuotoneIcon],svg[ph-file-zip-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 88h-56V32Z" opacity=".2"></svg:path><svg:path d="M184 144h-16a8 8 0 0 0-8 8v56a8 8 0 0 0 16 0v-8h8a28 28 0 0 0 0-56m0 40h-8v-24h8a12 12 0 0 1 0 24m-48-32v56a8 8 0 0 1-16 0v-56a8 8 0 0 1 16 0m-40 56a8 8 0 0 1-8 8H56a8 8 0 0 1-7-12l25.16-44H56a8 8 0 0 1 0-16h32a8 8 0 0 1 7 12l-25.21 44H88a8 8 0 0 1 8 8M213.66 82.34l-56-56A8 8 0 0 0 152 24H56a16 16 0 0 0-16 16v72a8 8 0 0 0 16 0V40h88v48a8 8 0 0 0 8 8h48v16a8 8 0 0 0 16 0V88a8 8 0 0 0-2.34-5.66M160 80V51.31L188.69 80Z"></svg:path></svg:g>`,
})
export class PhFileZipDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileZipFillIcon],svg[ph-file-zip-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M184 144h-16a8 8 0 0 0-8 8v55.73a8.17 8.17 0 0 0 7.47 8.25a8 8 0 0 0 8.53-8v-8h7.4c15.24 0 28.14-11.92 28.59-27.15A28 28 0 0 0 184 144m-.35 40H176v-24h8a12 12 0 0 1 12 13.16A12.25 12.25 0 0 1 183.65 184M136 152v55.73a8.17 8.17 0 0 1-7.47 8.25a8 8 0 0 1-8.53-8v-55.71a8.17 8.17 0 0 1 7.47-8.25A8 8 0 0 1 136 152m-40 56.53a8.17 8.17 0 0 1-8.27 7.47h-31.5a8.27 8.27 0 0 1-6-2.5a8 8 0 0 1-1.18-9.5l25.16-44H56.27a8.17 8.17 0 0 1-8.27-7.47a8 8 0 0 1 8-8.53h31.77a8.27 8.27 0 0 1 6 2.5A8 8 0 0 1 95 156l-25.21 44H88a8 8 0 0 1 8 8.53M213.66 82.34l-56-56A8 8 0 0 0 152 24H56a16 16 0 0 0-16 16v76a4 4 0 0 0 4 4h168a4 4 0 0 0 4-4V88a8 8 0 0 0-2.34-5.66M152 88V44l44 44Z"></svg:path>`,
})
export class PhFileZipFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileZipLightIcon],svg[ph-file-zip-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M184 146h-16a6 6 0 0 0-6 6v56a6 6 0 0 0 12 0v-10h10a26 26 0 0 0 0-52m0 40h-10v-28h10a14 14 0 0 1 0 28m-50-34v56a6 6 0 0 1-12 0v-56a6 6 0 0 1 12 0m-40 56a6 6 0 0 1-6 6H56a6 6 0 0 1-5.21-9l26.87-47H56a6 6 0 0 1 0-12h32a6 6 0 0 1 5.21 9l-26.87 47H88a6 6 0 0 1 6 6M212.24 83.76l-56-56A6 6 0 0 0 152 26H56a14 14 0 0 0-14 14v72a6 6 0 0 0 12 0V40a2 2 0 0 1 2-2h90v50a6 6 0 0 0 6 6h50v18a6 6 0 0 0 12 0V88a6 6 0 0 0-1.76-4.24M158 82V46.48L193.52 82Z"></svg:path>`,
})
export class PhFileZipLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileZipThinIcon],svg[ph-file-zip-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M184 148h-16a4 4 0 0 0-4 4v56a4 4 0 0 0 8 0v-12h12a24 24 0 0 0 0-48m0 40h-12v-32h12a16 16 0 0 1 0 32m-52-36v56a4 4 0 0 1-8 0v-56a4 4 0 0 1 8 0m-40.53 2l-28.58 50H88a4 4 0 0 1 0 8H56a4 4 0 0 1-3.47-6l28.58-50H56a4 4 0 0 1 0-8h32a4 4 0 0 1 3.47 6m119.36-68.83l-56-56A4 4 0 0 0 152 28H56a12 12 0 0 0-12 12v72a4 4 0 0 0 8 0V40a4 4 0 0 1 4-4h92v52a4 4 0 0 0 4 4h52v20a4 4 0 0 0 8 0V88a4 4 0 0 0-1.17-2.83M156 84V41.65L198.34 84Z"></svg:path>`,
})
export class PhFileZipThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFilesIcon],svg[ph-files-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m213.66 66.34l-40-40A8 8 0 0 0 168 24H88a16 16 0 0 0-16 16v16H56a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h112a16 16 0 0 0 16-16v-16h16a16 16 0 0 0 16-16V72a8 8 0 0 0-2.34-5.66M168 216H56V72h76.69L168 107.31zm32-32h-16v-80a8 8 0 0 0-2.34-5.66l-40-40A8 8 0 0 0 136 56H88V40h76.69L200 75.31Zm-56-32a8 8 0 0 1-8 8H88a8 8 0 0 1 0-16h48a8 8 0 0 1 8 8m0 32a8 8 0 0 1-8 8H88a8 8 0 0 1 0-16h48a8 8 0 0 1 8 8"></svg:path>`,
})
export class PhFilesIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFilesBoldIcon],svg[ph-files-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m220.49 59.51l-40-40A12 12 0 0 0 172 16H92a20 20 0 0 0-20 20v20H56a20 20 0 0 0-20 20v140a20 20 0 0 0 20 20h108a20 20 0 0 0 20-20v-20h20a20 20 0 0 0 20-20V68a12 12 0 0 0-3.51-8.49M160 212H60V80h67l33 33Zm40-40h-16v-64a12 12 0 0 0-3.51-8.49l-40-40A12 12 0 0 0 132 56H96V40h71l33 33Zm-56-28a12 12 0 0 1-12 12H88a12 12 0 0 1 0-24h44a12 12 0 0 1 12 12m0 40a12 12 0 0 1-12 12H88a12 12 0 0 1 0-24h44a12 12 0 0 1 12 12"></svg:path>`,
})
export class PhFilesBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFilesDuotoneIcon],svg[ph-files-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 72v112a8 8 0 0 1-8 8h-24v-88l-40-40H80V40a8 8 0 0 1 8-8h80Z" opacity=".2"></svg:path><svg:path d="m213.66 66.34l-40-40A8 8 0 0 0 168 24H88a16 16 0 0 0-16 16v16H56a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h112a16 16 0 0 0 16-16v-16h16a16 16 0 0 0 16-16V72a8 8 0 0 0-2.34-5.66M168 216H56V72h76.69L168 107.31zm32-32h-16v-80a8 8 0 0 0-2.34-5.66l-40-40A8 8 0 0 0 136 56H88V40h76.69L200 75.31Zm-56-32a8 8 0 0 1-8 8H88a8 8 0 0 1 0-16h48a8 8 0 0 1 8 8m0 32a8 8 0 0 1-8 8H88a8 8 0 0 1 0-16h48a8 8 0 0 1 8 8"></svg:path></svg:g>`,
})
export class PhFilesDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFilesFillIcon],svg[ph-files-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m213.66 66.34l-40-40A8 8 0 0 0 168 24H88a16 16 0 0 0-16 16v16H56a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h112a16 16 0 0 0 16-16v-16h16a16 16 0 0 0 16-16V72a8 8 0 0 0-2.34-5.66M136 192H88a8 8 0 0 1 0-16h48a8 8 0 0 1 0 16m0-32H88a8 8 0 0 1 0-16h48a8 8 0 0 1 0 16m64 24h-16v-80a8 8 0 0 0-2.34-5.66l-40-40A8 8 0 0 0 136 56H88V40h76.69L200 75.31Z"></svg:path>`,
})
export class PhFilesFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFilesLightIcon],svg[ph-files-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m212.24 67.76l-40-40A6 6 0 0 0 168 26H88a14 14 0 0 0-14 14v18H56a14 14 0 0 0-14 14v144a14 14 0 0 0 14 14h112a14 14 0 0 0 14-14v-18h18a14 14 0 0 0 14-14V72a6 6 0 0 0-1.76-4.24M170 216a2 2 0 0 1-2 2H56a2 2 0 0 1-2-2V72a2 2 0 0 1 2-2h77.51L170 106.49Zm32-32a2 2 0 0 1-2 2h-18v-82a6 6 0 0 0-1.76-4.24l-40-40A6 6 0 0 0 136 58H86V40a2 2 0 0 1 2-2h77.51L202 74.49Zm-60-32a6 6 0 0 1-6 6H88a6 6 0 0 1 0-12h48a6 6 0 0 1 6 6m0 32a6 6 0 0 1-6 6H88a6 6 0 0 1 0-12h48a6 6 0 0 1 6 6"></svg:path>`,
})
export class PhFilesLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFilesThinIcon],svg[ph-files-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m210.83 69.17l-40-40A4 4 0 0 0 168 28H88a12 12 0 0 0-12 12v20H56a12 12 0 0 0-12 12v144a12 12 0 0 0 12 12h112a12 12 0 0 0 12-12v-20h20a12 12 0 0 0 12-12V72a4 4 0 0 0-1.17-2.83M172 216a4 4 0 0 1-4 4H56a4 4 0 0 1-4-4V72a4 4 0 0 1 4-4h78.34L172 105.66Zm32-32a4 4 0 0 1-4 4h-20v-84a4 4 0 0 0-1.17-2.83l-40-40A4 4 0 0 0 136 60H84V40a4 4 0 0 1 4-4h78.34L204 73.66Zm-64-32a4 4 0 0 1-4 4H88a4 4 0 0 1 0-8h48a4 4 0 0 1 4 4m0 32a4 4 0 0 1-4 4H88a4 4 0 0 1 0-8h48a4 4 0 0 1 4 4"></svg:path>`,
})
export class PhFilesThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFilmReelIcon],svg[ph-film-reel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 216h-48.64A103.95 103.95 0 1 0 128 232h104a8 8 0 0 0 0-16M40 128a88 88 0 1 1 88 88a88.1 88.1 0 0 1-88-88m88-24a24 24 0 1 0-24-24a24 24 0 0 0 24 24m0-32a8 8 0 1 1-8 8a8 8 0 0 1 8-8m24 104a24 24 0 1 0-24 24a24 24 0 0 0 24-24m-32 0a8 8 0 1 1 8 8a8 8 0 0 1-8-8m56-24a24 24 0 1 0-24-24a24 24 0 0 0 24 24m0-32a8 8 0 1 1-8 8a8 8 0 0 1 8-8m-96-16a24 24 0 1 0 24 24a24 24 0 0 0-24-24m0 32a8 8 0 1 1 8-8a8 8 0 0 1-8 8"></svg:path>`,
})
export class PhFilmReelIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFilmReelBoldIcon],svg[ph-film-reel-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 212h-36.2a107.94 107.94 0 1 0-67.8 24h104a12 12 0 0 0 0-24M44 128a84 84 0 1 1 84 84a84.09 84.09 0 0 1-84-84m64-44a20 20 0 1 1 20 20a20 20 0 0 1-20-20m20 108a20 20 0 1 1 20-20a20 20 0 0 1-20 20m24-64a20 20 0 1 1 20 20a20 20 0 0 1-20-20m-48 0a20 20 0 1 1-20-20a20 20 0 0 1 20 20"></svg:path>`,
})
export class PhFilmReelBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFilmReelDuotoneIcon],svg[ph-film-reel-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M128 32a96 96 0 1 0 96 96a96 96 0 0 0-96-96M80 144a16 16 0 1 1 16-16a16 16 0 0 1-16 16m48 48a16 16 0 1 1 16-16a16 16 0 0 1-16 16m0-96a16 16 0 1 1 16-16a16 16 0 0 1-16 16m48 48a16 16 0 1 1 16-16a16 16 0 0 1-16 16" opacity=".2"></svg:path><svg:path d="M232 216h-48.64A103.95 103.95 0 1 0 128 232h104a8 8 0 0 0 0-16M40 128a88 88 0 1 1 88 88a88.1 88.1 0 0 1-88-88m88-24a24 24 0 1 0-24-24a24 24 0 0 0 24 24m0-32a8 8 0 1 1-8 8a8 8 0 0 1 8-8m24 104a24 24 0 1 0-24 24a24 24 0 0 0 24-24m-32 0a8 8 0 1 1 8 8a8 8 0 0 1-8-8m56-24a24 24 0 1 0-24-24a24 24 0 0 0 24 24m0-32a8 8 0 1 1-8 8a8 8 0 0 1 8-8m-96-16a24 24 0 1 0 24 24a24 24 0 0 0-24-24m0 32a8 8 0 1 1 8-8a8 8 0 0 1-8 8"></svg:path></svg:g>`,
})
export class PhFilmReelDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFilmReelFillIcon],svg[ph-film-reel-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 216h-48.64A103.95 103.95 0 1 0 128 232h104a8 8 0 0 0 0-16M80 148a20 20 0 1 1 20-20a20 20 0 0 1-20 20m48 48a20 20 0 1 1 20-20a20 20 0 0 1-20 20m0-96a20 20 0 1 1 20-20a20 20 0 0 1-20 20m28 28a20 20 0 1 1 20 20a20 20 0 0 1-20-20"></svg:path>`,
})
export class PhFilmReelFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFilmReelLightIcon],svg[ph-film-reel-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 218h-56a102 102 0 1 0-48 12h104a6 6 0 0 0 0-12M38 128a90 90 0 1 1 90 90a90.1 90.1 0 0 1-90-90m90-26a22 22 0 1 0-22-22a22 22 0 0 0 22 22m0-32a10 10 0 1 1-10 10a10 10 0 0 1 10-10m22 106a22 22 0 1 0-22 22a22 22 0 0 0 22-22m-32 0a10 10 0 1 1 10 10a10 10 0 0 1-10-10m58-26a22 22 0 1 0-22-22a22 22 0 0 0 22 22m0-32a10 10 0 1 1-10 10a10 10 0 0 1 10-10m-96-12a22 22 0 1 0 22 22a22 22 0 0 0-22-22m0 32a10 10 0 1 1 10-10a10 10 0 0 1-10 10"></svg:path>`,
})
export class PhFilmReelLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFilmReelThinIcon],svg[ph-film-reel-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 220h-64.82a100 100 0 1 0-39.18 8h104a4 4 0 0 0 0-8M36 128a92 92 0 1 1 92 92a92.1 92.1 0 0 1-92-92m92-28a20 20 0 1 0-20-20a20 20 0 0 0 20 20m0-32a12 12 0 1 1-12 12a12 12 0 0 1 12-12m20 108a20 20 0 1 0-20 20a20 20 0 0 0 20-20m-32 0a12 12 0 1 1 12 12a12 12 0 0 1-12-12m60-28a20 20 0 1 0-20-20a20 20 0 0 0 20 20m0-32a12 12 0 1 1-12 12a12 12 0 0 1 12-12m-96-8a20 20 0 1 0 20 20a20 20 0 0 0-20-20m0 32a12 12 0 1 1 12-12a12 12 0 0 1-12 12"></svg:path>`,
})
export class PhFilmReelThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFilmScriptIcon],svg[ph-film-script-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 24H56a16 16 0 0 0-16 16v176a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V40a16 16 0 0 0-16-16m0 192H56V40h144zM96 76a12 12 0 1 1-12-12a12 12 0 0 1 12 12m0 104a12 12 0 1 1-12-12a12 12 0 0 1 12 12m0-52a12 12 0 1 1-12-12a12 12 0 0 1 12 12"></svg:path>`,
})
export class PhFilmScriptIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFilmScriptBoldIcon],svg[ph-film-script-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 20H56a20 20 0 0 0-20 20v176a20 20 0 0 0 20 20h144a20 20 0 0 0 20-20V40a20 20 0 0 0-20-20m-4 192H60V44h136ZM76 80a16 16 0 1 1 16 16a16 16 0 0 1-16-16m0 96a16 16 0 1 1 16 16a16 16 0 0 1-16-16m0-48a16 16 0 1 1 16 16a16 16 0 0 1-16-16"></svg:path>`,
})
export class PhFilmScriptBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFilmScriptDuotoneIcon],svg[ph-film-script-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 40v176a8 8 0 0 1-8 8H56a8 8 0 0 1-8-8V40a8 8 0 0 1 8-8h144a8 8 0 0 1 8 8" opacity=".2"></svg:path><svg:path d="M200 24H56a16 16 0 0 0-16 16v176a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V40a16 16 0 0 0-16-16m0 192H56V40h144zM96 80a12 12 0 1 1-12-12a12 12 0 0 1 12 12m0 96a12 12 0 1 1-12-12a12 12 0 0 1 12 12m0-48a12 12 0 1 1-12-12a12 12 0 0 1 12 12"></svg:path></svg:g>`,
})
export class PhFilmScriptDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFilmScriptFillIcon],svg[ph-film-script-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 24H56a16 16 0 0 0-16 16v176a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V40a16 16 0 0 0-16-16M76 188a12 12 0 1 1 12-12a12 12 0 0 1-12 12m0-48a12 12 0 1 1 12-12a12 12 0 0 1-12 12m0-48a12 12 0 1 1 12-12a12 12 0 0 1-12 12"></svg:path>`,
})
export class PhFilmScriptFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFilmScriptLightIcon],svg[ph-film-script-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 26H56a14 14 0 0 0-14 14v176a14 14 0 0 0 14 14h144a14 14 0 0 0 14-14V40a14 14 0 0 0-14-14m2 190a2 2 0 0 1-2 2H56a2 2 0 0 1-2-2V40a2 2 0 0 1 2-2h144a2 2 0 0 1 2 2ZM94 80a10 10 0 1 1-10-10a10 10 0 0 1 10 10m0 96a10 10 0 1 1-10-10a10 10 0 0 1 10 10m0-48a10 10 0 1 1-10-10a10 10 0 0 1 10 10"></svg:path>`,
})
export class PhFilmScriptLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFilmScriptThinIcon],svg[ph-film-script-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 28H56a12 12 0 0 0-12 12v176a12 12 0 0 0 12 12h144a12 12 0 0 0 12-12V40a12 12 0 0 0-12-12m4 188a4 4 0 0 1-4 4H56a4 4 0 0 1-4-4V40a4 4 0 0 1 4-4h144a4 4 0 0 1 4 4ZM92 80a8 8 0 1 1-8-8a8 8 0 0 1 8 8m0 96a8 8 0 1 1-8-8a8 8 0 0 1 8 8m0-48a8 8 0 1 1-8-8a8 8 0 0 1 8 8"></svg:path>`,
})
export class PhFilmScriptThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFilmSlateIcon],svg[ph-film-slate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 104H102.09L210 75.51a8 8 0 0 0 5.68-9.84l-8.16-30a15.93 15.93 0 0 0-19.42-11.13L35.81 64.74a15.75 15.75 0 0 0-9.7 7.4a15.5 15.5 0 0 0-1.55 12L32 111.56V200a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16v-88a8 8 0 0 0-8-8m-23.84-64l6 22.07l-22.62 6l-28.12-16.24Zm-66.69 17.6l28.12 16.24l-36.94 9.75l-28.12-16.22Zm-79.4 44.62l-6-22.08l26.5-7L94.69 89.4ZM208 200H48v-80h160z"></svg:path>`,
})
export class PhFilmSlateIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFilmSlateBoldIcon],svg[ph-film-slate-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 100h-83.08l78.14-20.63a12 12 0 0 0 8.52-14.75l-8.16-30a19.94 19.94 0 0 0-24.3-13.95L34.79 60.87a19.74 19.74 0 0 0-12.14 9.27a19.48 19.48 0 0 0-1.95 15L28 112v88a20 20 0 0 0 20 20h160a20 20 0 0 0 20-20v-88a12 12 0 0 0-12-12m-91.11-38.09l18.29 10.56l-25.95 6.85l-18.29-10.56Zm64.45-17l3.91 14.35l-17.13 4.52l-18.29-10.57ZM66 77.46L84.29 88l-35.4 9.35L45 83ZM204 196H52v-72h152Z"></svg:path>`,
})
export class PhFilmSlateBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFilmSlateDuotoneIcon],svg[ph-film-slate-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m67.71 64.59l47.79 27.6L40.43 112l-8.16-30a7.76 7.76 0 0 1 5.58-9.52Zm132.13-26.83a7.9 7.9 0 0 0-9.66-5.49l-63.57 16.78l47.79 27.59l33.6-8.87Z" opacity=".2"></svg:path><svg:path d="M216 104H102.09L210 75.51a8 8 0 0 0 5.68-9.84l-8.16-30a15.93 15.93 0 0 0-19.42-11.13L35.81 64.74a15.75 15.75 0 0 0-9.7 7.4a15.5 15.5 0 0 0-1.55 12L32 111.56V200a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16v-88a8 8 0 0 0-8-8m-23.84-64l6 22.07l-22.62 6l-28.12-16.24Zm-66.69 17.6l28.12 16.24l-36.94 9.75l-28.12-16.22Zm-79.4 44.62l-6-22.08l26.5-7L94.69 89.4ZM208 200H48v-80h160z"></svg:path></svg:g>`,
})
export class PhFilmSlateDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFilmSlateFillIcon],svg[ph-film-slate-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 104H102.09L210 75.51a8 8 0 0 0 5.68-9.84l-8.16-30a15.93 15.93 0 0 0-19.42-11.13L35.81 64.74a15.75 15.75 0 0 0-9.7 7.4a15.5 15.5 0 0 0-1.55 12L32 111.56V200a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16v-88a8 8 0 0 0-8-8m-23.84-64l6 22.07L164.57 71l-28.13-16.28ZM77.55 70.27l28.12 16.24l-59.6 15.73l-6-22.08Z"></svg:path>`,
})
export class PhFilmSlateFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFilmSlateLightIcon],svg[ph-film-slate-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 106H86.68l122.85-32.43a6 6 0 0 0 4.26-7.38l-8.16-30a13.94 13.94 0 0 0-17-9.72L36.32 66.67a13.77 13.77 0 0 0-8.48 6.47a13.57 13.57 0 0 0-1.36 10.42L34 111.34V200a14 14 0 0 0 14 14h160a14 14 0 0 0 14-14v-88a6 6 0 0 0-6-6m-90.25-50.52l33 19.07l-42.43 11.2l-33-19.07Zm66-17.41a1.92 1.92 0 0 1 2.34 1.26l6.57 24.18l-25.4 6.69l-33-19.07ZM38.23 79.14a1.85 1.85 0 0 1 1.15-.87L66.86 71l33 19.08l-55.2 14.6l-6.6-24.27a1.63 1.63 0 0 1 .17-1.27M210 200a2 2 0 0 1-2 2H48a2 2 0 0 1-2-2v-82h164Z"></svg:path>`,
})
export class PhFilmSlateLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFilmSlateThinIcon],svg[ph-film-slate-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 108H71.26L209 71.64a4 4 0 0 0 2.84-4.92l-8.16-30a11.92 11.92 0 0 0-14.54-8.31L36.83 68.61a11.78 11.78 0 0 0-7.26 5.53A11.6 11.6 0 0 0 28.41 83l7.67 28.19a4 4 0 0 0-.08.81v88a12 12 0 0 0 12 12h160a12 12 0 0 0 12-12v-88a4 4 0 0 0-4-4m-90-54.67l38 21.92l-47.92 12.65L78.12 66Zm65.16-17.2a4 4 0 0 1 1-.13a3.88 3.88 0 0 1 3.84 2.81l7.1 26.12l-28.1 7.42l-38-21.92Zm-154.7 42a3.86 3.86 0 0 1 2.37-1.8l28.27-7.46l38 21.91l-61.85 16.34l-7.12-26.18a3.66 3.66 0 0 1 .37-2.8ZM212 200a4 4 0 0 1-4 4H48a4 4 0 0 1-4-4v-84h168Z"></svg:path>`,
})
export class PhFilmSlateThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFilmStripIcon],svg[ph-film-strip-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16M40 88h80v80H40Zm96-16V56h32v16Zm-16 0H88V56h32Zm0 112v16H88v-16Zm16 0h32v16h-32Zm0-16V88h80v80Zm80-96h-32V56h32ZM72 56v16H40V56ZM40 184h32v16H40Zm176 16h-32v-16h32z"></svg:path>`,
})
export class PhFilmStripIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFilmStripBoldIcon],svg[ph-film-strip-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 36H40a20 20 0 0 0-20 20v144a20 20 0 0 0 20 20h176a20 20 0 0 0 20-20V56a20 20 0 0 0-20-20M44 100h72v56H44Zm96-24V60h24v16Zm-24 0H92V60h24Zm0 104v16H92v-16Zm24 0h24v16h-24Zm0-24v-56h72v56Zm72-80h-24V60h24ZM68 60v16H44V60ZM44 180h24v16H44Zm144 16v-16h24v16Z"></svg:path>`,
})
export class PhFilmStripBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFilmStripDuotoneIcon],svg[ph-film-strip-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M32 176h192v24a8 8 0 0 1-8 8H40a8 8 0 0 1-8-8ZM216 48H40a8 8 0 0 0-8 8v24h192V56a8 8 0 0 0-8-8" opacity=".2"></svg:path><svg:path d="M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16M40 88h80v80H40Zm96-16V56h32v16Zm-16 0H88V56h32Zm0 112v16H88v-16Zm16 0h32v16h-32Zm0-16V88h80v80Zm80-96h-32V56h32ZM72 56v16H40V56ZM40 184h32v16H40Zm176 16h-32v-16h32z"></svg:path></svg:g>`,
})
export class PhFilmStripDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFilmStripFillIcon],svg[ph-film-strip-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16m-32 16h32v16h-32ZM72 200H40v-16h32Zm0-128H40V56h32Zm48 128H88v-16h32Zm0-128H88V56h32Zm48 128h-32v-16h32Zm0-128h-32V56h32Zm48 128h-32v-16h32z"></svg:path>`,
})
export class PhFilmStripFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFilmStripLightIcon],svg[ph-film-strip-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 42H40a14 14 0 0 0-14 14v144a14 14 0 0 0 14 14h176a14 14 0 0 0 14-14V56a14 14 0 0 0-14-14M38 86h84v84H38Zm96-12V54h36v20Zm-12 0H86V54h36Zm0 108v20H86v-20Zm12 0h36v20h-36Zm0-12V86h84v84Zm84-114v18h-36V54h34a2 2 0 0 1 2 2M40 54h34v20H38V56a2 2 0 0 1 2-2m-2 146v-18h36v20H40a2 2 0 0 1-2-2m178 2h-34v-20h36v18a2 2 0 0 1-2 2"></svg:path>`,
})
export class PhFilmStripLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFilmStripThinIcon],svg[ph-film-strip-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 44H40a12 12 0 0 0-12 12v144a12 12 0 0 0 12 12h176a12 12 0 0 0 12-12V56a12 12 0 0 0-12-12M36 84h88v88H36Zm96-8V52h40v24Zm-8 0H84V52h40Zm0 104v24H84v-24Zm8 0h40v24h-40Zm0-8V84h88v88Zm88-116v20h-40V52h36a4 4 0 0 1 4 4M40 52h36v24H36V56a4 4 0 0 1 4-4m-4 148v-20h40v24H40a4 4 0 0 1-4-4m180 4h-36v-24h40v20a4 4 0 0 1-4 4"></svg:path>`,
})
export class PhFilmStripThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFingerprintIcon],svg[ph-fingerprint-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M72 128a134.6 134.6 0 0 1-14.16 60.47a8 8 0 1 1-14.32-7.12A118.8 118.8 0 0 0 56 128a71.73 71.73 0 0 1 27-56.2a8 8 0 1 1 10 12.49A55.76 55.76 0 0 0 72 128m56-8a8 8 0 0 0-8 8a184.1 184.1 0 0 1-23 89.1a8 8 0 0 0 14 7.76A200.2 200.2 0 0 0 136 128a8 8 0 0 0-8-8m0-32a40 40 0 0 0-40 40a8 8 0 0 0 16 0a24 24 0 0 1 48 0a214.1 214.1 0 0 1-20.51 92a8 8 0 1 0 14.51 6.83A230 230 0 0 0 168 128a40 40 0 0 0-40-40m0-64A104.11 104.11 0 0 0 24 128a87.8 87.8 0 0 1-5 29.33a8 8 0 0 0 15.09 5.33A103.9 103.9 0 0 0 40 128a88 88 0 0 1 176 0a282 282 0 0 1-5.29 54.45a8 8 0 0 0 6.3 9.4a8 8 0 0 0 1.55.15a8 8 0 0 0 7.84-6.45A298.4 298.4 0 0 0 232 128A104.12 104.12 0 0 0 128 24M94.4 152.17a8 8 0 0 0-9.4 6.25a151 151 0 0 1-17.21 45.44a8 8 0 0 0 13.86 8a166.7 166.7 0 0 0 19-50.25a8 8 0 0 0-6.25-9.44M128 56a73 73 0 0 0-9 .56a8 8 0 0 0 2 15.87A56.08 56.08 0 0 1 184 128a252 252 0 0 1-1.92 31a8 8 0 0 0 6.92 9a8 8 0 0 0 1 .06a8 8 0 0 0 7.92-7a267 267 0 0 0 2-33A72.08 72.08 0 0 0 128 56m57.93 128.25a8 8 0 0 0-9.75 5.75c-1.46 5.69-3.15 11.4-5 17a8 8 0 0 0 5 10.13a7.9 7.9 0 0 0 2.55.42a8 8 0 0 0 7.58-5.46c2-5.92 3.79-12 5.35-18.05a8 8 0 0 0-5.72-9.78Z"></svg:path>`,
})
export class PhFingerprintIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFingerprintBoldIcon],svg[ph-fingerprint-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M160 128a224.5 224.5 0 0 1-26.37 105.54a12 12 0 1 1-21.16-11.32A200.3 200.3 0 0 0 136 128a8 8 0 0 0-16 0a12 12 0 0 1-24 0a32 32 0 0 1 64 0m-32-72a12 12 0 1 0 0 24a48.05 48.05 0 0 1 48 48c0 7.62-.36 15.32-1.07 22.87A12 12 0 0 0 185.74 164h1.14a12 12 0 0 0 11.93-10.87c.79-8.3 1.18-16.76 1.18-25.13A72.08 72.08 0 0 0 128 56M96 92.23a12 12 0 0 0-16-17.88A72.1 72.1 0 0 0 56 128a120.1 120.1 0 0 1-15.12 58.37a12 12 0 0 0 21 11.69A144.14 144.14 0 0 0 80 128a48.08 48.08 0 0 1 16-35.77m10.1 64.1a12 12 0 0 0-14.46 8.9a158.6 158.6 0 0 1-18.88 45.86a12 12 0 0 0 20.5 12.48A182.9 182.9 0 0 0 115 170.79a12 12 0 0 0-8.9-14.46m76.73 24.07a12 12 0 0 0-14.64 8.6a242 242 0 0 1-8 24.87a12 12 0 0 0 6.91 15.49a11.8 11.8 0 0 0 4.29.8a12 12 0 0 0 11.21-7.71a260 260 0 0 0 8.79-27.37a12 12 0 0 0-8.56-14.68M128 16A112.12 112.12 0 0 0 16 127.44v.57a79.8 79.8 0 0 1-5 27.82a12 12 0 1 0 22.5 8.35a103.6 103.6 0 0 0 6.5-35.6v-.57a88 88 0 0 1 176-.5v.5a282 282 0 0 1-6.74 61.38a12 12 0 0 0 9.09 14.33a11.8 11.8 0 0 0 2.65.28a12 12 0 0 0 11.7-9.38a306 306 0 0 0 7.3-66.07v-.54A112.13 112.13 0 0 0 128 16"></svg:path>`,
})
export class PhFingerprintBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFingerprintDuotoneIcon],svg[ph-fingerprint-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 128a96 96 0 1 1-96-96a96 96 0 0 1 96 96" opacity=".2"></svg:path><svg:path d="M72 128a134.6 134.6 0 0 1-14.16 60.47a8 8 0 1 1-14.32-7.12A118.8 118.8 0 0 0 56 128a71.73 71.73 0 0 1 27-56.2a8 8 0 1 1 10 12.49A55.76 55.76 0 0 0 72 128m56-8a8 8 0 0 0-8 8a184.1 184.1 0 0 1-23 89.1a8 8 0 0 0 14 7.76A200.2 200.2 0 0 0 136 128a8 8 0 0 0-8-8m0-32a40 40 0 0 0-40 40a8 8 0 0 0 16 0a24 24 0 0 1 48 0a214.1 214.1 0 0 1-20.51 92a8 8 0 1 0 14.51 6.83A230 230 0 0 0 168 128a40 40 0 0 0-40-40m0-64A104.11 104.11 0 0 0 24 128a87.8 87.8 0 0 1-5 29.33a8 8 0 0 0 15.09 5.33A103.9 103.9 0 0 0 40 128a88 88 0 0 1 176 0a282 282 0 0 1-5.29 54.45a8 8 0 0 0 6.3 9.4a8 8 0 0 0 1.55.15a8 8 0 0 0 7.84-6.45A298.4 298.4 0 0 0 232 128A104.12 104.12 0 0 0 128 24M94.4 152.17a8 8 0 0 0-9.4 6.25a151 151 0 0 1-17.21 45.44a8 8 0 0 0 13.86 8a166.7 166.7 0 0 0 19-50.25a8 8 0 0 0-6.25-9.44M128 56a73 73 0 0 0-9 .56a8 8 0 0 0 2 15.87A56.08 56.08 0 0 1 184 128a252 252 0 0 1-1.92 31a8 8 0 0 0 6.92 9a8 8 0 0 0 1 .06a8 8 0 0 0 7.92-7a267 267 0 0 0 2-33A72.08 72.08 0 0 0 128 56m57.93 128.25a8 8 0 0 0-9.75 5.75c-1.46 5.69-3.15 11.4-5 17a8 8 0 0 0 5 10.13a7.9 7.9 0 0 0 2.55.42a8 8 0 0 0 7.58-5.46c2-5.92 3.79-12 5.35-18.05a8 8 0 0 0-5.72-9.78Z"></svg:path></svg:g>`,
})
export class PhFingerprintDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFingerprintFillIcon],svg[ph-fingerprint-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M126.42 24C70.73 24.85 25.21 70.09 24 125.81a103.53 103.53 0 0 0 13.52 53.54a4 4 0 0 0 7.1-.3a119.35 119.35 0 0 0 11.37-51A71.77 71.77 0 0 1 83 71.83a8 8 0 1 1 9.86 12.61A55.82 55.82 0 0 0 72 128.07a135.3 135.3 0 0 1-18.45 68.35a4 4 0 0 0 .61 4.85c2 2 4.09 4 6.25 5.82a4 4 0 0 0 6-1A151.2 151.2 0 0 0 85 158.49a8 8 0 1 1 15.68 3.19a167.3 167.3 0 0 1-21.07 53.64a4 4 0 0 0 1.6 5.63c2.47 1.25 5 2.41 7.57 3.47a4 4 0 0 0 5-1.61A183 183 0 0 0 120 128.28a8.16 8.16 0 0 1 7.44-8.21a8 8 0 0 1 8.56 8a198.94 198.94 0 0 1-25.21 97.16a4 4 0 0 0 2.95 5.92q4.55.63 9.21.86a4 4 0 0 0 3.67-2.1A214.9 214.9 0 0 0 152 128.8c.05-13.25-10.3-24.49-23.54-24.74A24 24 0 0 0 104 128a8.1 8.1 0 0 1-7.29 8a8 8 0 0 1-8.71-8a40 40 0 0 1 40.42-40c22 .23 39.68 19.17 39.57 41.16a231.4 231.4 0 0 1-20.52 94.57a4 4 0 0 0 4.62 5.51a104 104 0 0 0 10.26-3a4 4 0 0 0 2.35-2.22a244 244 0 0 0 11.48-34a8 8 0 1 1 15.5 4q-1.12 4.37-2.4 8.7a4 4 0 0 0 6.46 4.17A104 104 0 0 0 126.42 24M198 161.08a8 8 0 0 1-7.92 7a8 8 0 0 1-1-.06a8 8 0 0 1-6.95-8.93a253 253 0 0 0 1.92-31a56.08 56.08 0 0 0-56-56a57 57 0 0 0-7 .43a8 8 0 0 1-2-15.89a72.1 72.1 0 0 1 81 71.49a267 267 0 0 1-2.05 32.96"></svg:path>`,
})
export class PhFingerprintFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFingerprintLightIcon],svg[ph-fingerprint-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M70 128a132.7 132.7 0 0 1-14 59.58a6 6 0 0 1-5.38 3.33a6 6 0 0 1-5.36-8.67A120.74 120.74 0 0 0 58 128a69.72 69.72 0 0 1 26.25-54.64a6 6 0 0 1 7.51 9.37A57.73 57.73 0 0 0 70 128m58-6a6 6 0 0 0-6 6a186.1 186.1 0 0 1-23.23 90.07a6 6 0 0 0 10.5 5.82A198.14 198.14 0 0 0 134 128a6 6 0 0 0-6-6m0-32a38 38 0 0 0-38 38a6 6 0 0 0 12 0a26 26 0 0 1 52 0a216.06 216.06 0 0 1-20.71 92.85a6 6 0 1 0 10.87 5.15A227.94 227.94 0 0 0 166 128a38 38 0 0 0-38-38m0-64A102.11 102.11 0 0 0 26 128a90 90 0 0 1-5.12 30a6 6 0 1 0 11.31 4A101.8 101.8 0 0 0 38 128a90 90 0 0 1 180 0a284.7 284.7 0 0 1-5.33 54.84a6 6 0 0 0 4.72 7.05a7 7 0 0 0 1.17.11a6 6 0 0 0 5.88-4.84A296 296 0 0 0 230 128A102.12 102.12 0 0 0 128 26M94 154.13a6 6 0 0 0-7.07 4.69a152.8 152.8 0 0 1-17.44 46a6 6 0 0 0 10.4 6a164.8 164.8 0 0 0 18.8-49.65a6 6 0 0 0-4.69-7.04M128 58a71 71 0 0 0-8.75.54a6 6 0 1 0 1.49 11.91A58 58 0 0 1 186 128a252 252 0 0 1-1.94 31.26a6 6 0 0 0 5.21 6.69a7 7 0 0 0 .75 0a6 6 0 0 0 5.95-5.26A267 267 0 0 0 198 128a70.08 70.08 0 0 0-70-70m57.44 128.2a6 6 0 0 0-7.31 4.31c-1.47 5.74-3.18 11.49-5.06 17.09a6 6 0 0 0 11.38 3.82c2-5.88 3.75-11.9 5.3-17.92a6 6 0 0 0-4.31-7.3"></svg:path>`,
})
export class PhFingerprintLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFingerprintSimpleIcon],svg[ph-fingerprint-simple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M184 128a246.6 246.6 0 0 1-18.54 94.24a8 8 0 0 1-7.4 5a8.2 8.2 0 0 1-3-.6a8 8 0 0 1-4.36-10.45A230.7 230.7 0 0 0 168 128a8 8 0 0 1 16 0m-56-40a40.06 40.06 0 0 1 29.81 13.33a8 8 0 1 0 11.92-10.67A56 56 0 0 0 72 128a136.06 136.06 0 0 1-17 65.85a8 8 0 1 0 14 7.76A152.14 152.14 0 0 0 88 128a40 40 0 0 1 40-40m0-64a103.8 103.8 0 0 0-34.67 5.92A8 8 0 0 0 98.67 45A88.05 88.05 0 0 1 216 128a281.3 281.3 0 0 1-6.94 62.23a8 8 0 0 0 6 9.57a7.8 7.8 0 0 0 1.78.2a8 8 0 0 0 7.8-6.23A298 298 0 0 0 232 128A104.11 104.11 0 0 0 128 24M69.34 62.42a8 8 0 1 0-10.67-11.93A104.16 104.16 0 0 0 24 128a87.3 87.3 0 0 1-8 36.66a8 8 0 0 0 14.54 6.68A103.2 103.2 0 0 0 40 128a88.13 88.13 0 0 1 29.34-65.58m44.58 138.32a8 8 0 0 0-10.61 3.93c-1.92 4.2-4 8.39-6.29 12.44a8 8 0 0 0 3.12 10.89a7.9 7.9 0 0 0 3.87 1a8 8 0 0 0 7-4.12c2.44-4.41 4.74-9 6.84-13.52a8 8 0 0 0-3.93-10.62M128 120a8 8 0 0 0-8 8a185 185 0 0 1-5.79 46a8 8 0 0 0 5.75 9.74a8 8 0 0 0 2 .25a8 8 0 0 0 7.74-6a200.7 200.7 0 0 0 6.3-50a8 8 0 0 0-8-7.99"></svg:path>`,
})
export class PhFingerprintSimpleIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFingerprintSimpleBoldIcon],svg[ph-fingerprint-simple-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M92 128a156.1 156.1 0 0 1-19.5 75.56a12 12 0 1 1-21-11.64A132 132 0 0 0 68 128a60 60 0 0 1 99.68-45a12 12 0 1 1-15.88 18A36 36 0 0 0 92 128m84.16-8H176a12 12 0 0 0-12 11.8a226.8 226.8 0 0 1-17 82.84a12 12 0 1 0 22.19 9.13A250.4 250.4 0 0 0 188 132.2a12 12 0 0 0-11.85-12.2Zm-62.22 81.21a12 12 0 0 0-16 5.54c-1.37 2.81-2.85 5.65-4.38 8.42a12 12 0 1 0 21 11.63c1.74-3.14 3.41-6.35 5-9.55a12 12 0 0 0-5.63-16.04ZM128 116a12 12 0 0 0-12 12a181 181 0 0 1-4.75 41.26a12 12 0 0 0 8.94 14.42a11.8 11.8 0 0 0 2.75.32a12 12 0 0 0 11.67-9.26A204.6 204.6 0 0 0 140 128a12 12 0 0 0-12-12m0-96a108 108 0 0 0-31.5 4.67a12 12 0 0 0 7 23A84.06 84.06 0 0 1 212 128a277.4 277.4 0 0 1-6.84 61.34a12 12 0 0 0 9.05 14.36a11.6 11.6 0 0 0 2.66.3a12 12 0 0 0 11.7-9.34A302 302 0 0 0 236 128A108.12 108.12 0 0 0 128 20M68.47 51.74a12 12 0 0 0-17 0A107.32 107.32 0 0 0 20 128a83.3 83.3 0 0 1-7.61 35a12 12 0 1 0 21.81 10a107.1 107.1 0 0 0 9.8-45a83.42 83.42 0 0 1 24.5-59.29a12 12 0 0 0-.03-16.97"></svg:path>`,
})
export class PhFingerprintSimpleBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFingerprintSimpleDuotoneIcon],svg[ph-fingerprint-simple-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 128a96 96 0 1 1-96-96a96 96 0 0 1 96 96" opacity=".2"></svg:path><svg:path d="M184 128a246.6 246.6 0 0 1-18.54 94.24a8 8 0 0 1-7.4 5a8.2 8.2 0 0 1-3-.6a8 8 0 0 1-4.36-10.45A230.7 230.7 0 0 0 168 128a8 8 0 0 1 16 0m-56-40a40.06 40.06 0 0 1 29.81 13.33a8 8 0 1 0 11.92-10.67A56 56 0 0 0 72 128a136.06 136.06 0 0 1-17 65.85a8 8 0 1 0 14 7.76A152.14 152.14 0 0 0 88 128a40 40 0 0 1 40-40m0-64a103.8 103.8 0 0 0-34.67 5.92A8 8 0 0 0 98.67 45A88.05 88.05 0 0 1 216 128a281.3 281.3 0 0 1-6.94 62.23a8 8 0 0 0 6 9.57a7.8 7.8 0 0 0 1.78.2a8 8 0 0 0 7.8-6.23A298 298 0 0 0 232 128A104.11 104.11 0 0 0 128 24M69.31 62.42a8 8 0 1 0-10.67-11.93A104.16 104.16 0 0 0 24 128a87.3 87.3 0 0 1-8 36.66a8 8 0 0 0 14.54 6.68A103.2 103.2 0 0 0 40 128a88.13 88.13 0 0 1 29.31-65.58m44.58 138.32a8 8 0 0 0-10.6 3.93c-1.93 4.2-4.05 8.39-6.3 12.44a8 8 0 0 0 3.12 10.89a7.9 7.9 0 0 0 3.87 1a8 8 0 0 0 7-4.12c2.44-4.41 4.74-9 6.84-13.52a8 8 0 0 0-3.93-10.62M128 120a8 8 0 0 0-8 8a185 185 0 0 1-5.79 46a8 8 0 0 0 5.75 9.74a8 8 0 0 0 2 .25a8 8 0 0 0 7.74-6a200.7 200.7 0 0 0 6.3-50a8 8 0 0 0-8-7.99"></svg:path></svg:g>`,
})
export class PhFingerprintSimpleDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFingerprintSimpleFillIcon],svg[ph-fingerprint-simple-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M126.41 24C70.72 24.85 25.21 70.07 24 125.75a103.5 103.5 0 0 0 13.51 53.5a4 4 0 0 0 7.1-.29A119.3 119.3 0 0 0 56 128a71.93 71.93 0 0 1 17.74-47.33a8.22 8.22 0 0 1 10.8-1.59A8 8 0 0 1 86 91a55.92 55.92 0 0 0-14 37a135.1 135.1 0 0 1-18.44 68.31a4 4 0 0 0 .61 4.85A104 104 0 0 0 67 212.21a4 4 0 0 0 5.82-1.21A159.6 159.6 0 0 0 84 189a8 8 0 1 1 14.8 6.1a177 177 0 0 1-11.85 23.54a4 4 0 0 0 1.89 5.74a103.5 103.5 0 0 0 25 6.7a4 4 0 0 0 4.07-2a206.9 206.9 0 0 0 25.57-85.61a8 8 0 1 1 15.95 1.16a222.8 222.8 0 0 1-21.58 80.75a4 4 0 0 0 4.08 5.74a103.7 103.7 0 0 0 20.6-4.95a4 4 0 0 0 2.35-2.23A247.3 247.3 0 0 0 184 129.76c.22-30.64-23.4-56.67-54-57.73a56.7 56.7 0 0 0-16 1.73a8 8 0 0 1-9.84-6.21a8.23 8.23 0 0 1 6.29-9.39A72.05 72.05 0 0 1 200 128a264.8 264.8 0 0 1-10.66 74.63a4 4 0 0 0 6.47 4.15A104 104 0 0 0 126.41 24M128 96a32.05 32.05 0 0 1 23.85 10.67a8 8 0 0 1-1.24 11.79a8.26 8.26 0 0 1-10.88-1.34a16 16 0 0 0-16.78-4.3a16.39 16.39 0 0 0-11 15.67a177 177 0 0 1-3.19 33A8 8 0 0 1 101 168a7.7 7.7 0 0 1-1.5-.14a8.3 8.3 0 0 1-6.31-9.66A161 161 0 0 0 96 128a32 32 0 0 1 32-32"></svg:path>`,
})
export class PhFingerprintSimpleFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFingerprintSimpleLightIcon],svg[ph-fingerprint-simple-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M182 128a244.7 244.7 0 0 1-18.38 93.48a6 6 0 0 1-5.55 3.72a6.1 6.1 0 0 1-2.28-.45a6 6 0 0 1-3.27-7.84A232.6 232.6 0 0 0 170 128a6 6 0 0 1 12 0m-54-42a42.08 42.08 0 0 1 31.31 14a6 6 0 1 0 8.94-8A54 54 0 0 0 74 128a138.1 138.1 0 0 1-17.22 66.82a6 6 0 1 0 10.49 5.82A150.1 150.1 0 0 0 86 128a42 42 0 0 1 42-42m0-60a101.6 101.6 0 0 0-34 5.81a6 6 0 1 0 4 11.31A90.07 90.07 0 0 1 218 128a283.4 283.4 0 0 1-7 62.67a6 6 0 1 0 11.7 2.66A295.4 295.4 0 0 0 230 128A102.12 102.12 0 0 0 128 26M68 60.92A6 6 0 0 0 60 52a102.2 102.2 0 0 0-34 76a89.3 89.3 0 0 1-8.15 37.5a6 6 0 1 0 10.9 5A101.1 101.1 0 0 0 38 128a90.15 90.15 0 0 1 30-67.08m45.08 141.64a6 6 0 0 0-8 2.95c-2 4.24-4.09 8.47-6.36 12.57a6 6 0 0 0 2.34 8.15a5.9 5.9 0 0 0 2.9.76a6 6 0 0 0 5.25-3.09c2.42-4.36 4.7-8.87 6.78-13.39a6 6 0 0 0-2.91-7.95M128 122a6 6 0 0 0-6 6a186.5 186.5 0 0 1-5.86 46.5a6 6 0 0 0 4.32 7.31a6 6 0 0 0 1.5.19a6 6 0 0 0 5.8-4.5A198.8 198.8 0 0 0 134 128a6 6 0 0 0-6-6"></svg:path>`,
})
export class PhFingerprintSimpleLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFingerprintSimpleThinIcon],svg[ph-fingerprint-simple-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M180 128a242.6 242.6 0 0 1-18.23 92.72a4 4 0 0 1-7.4-3A234.8 234.8 0 0 0 172 128a4 4 0 0 1 8 0m-19.21-29.33a4 4 0 0 0 6-5.33A52 52 0 0 0 76 128a140 140 0 0 1-17.48 67.8a4 4 0 0 0 7 3.88A148.1 148.1 0 0 0 84 128a44 44 0 0 1 76.79-29.34ZM128 28a99.9 99.9 0 0 0-33.33 5.69a4 4 0 1 0 2.66 7.54A92.08 92.08 0 0 1 220 128a285.7 285.7 0 0 1-7 63.12a4 4 0 0 0 3 4.78a4 4 0 0 0 .89.1a4 4 0 0 0 3.89-3.12A293 293 0 0 0 228 128A100.11 100.11 0 0 0 128 28M66.67 59.43a4 4 0 0 0-5.34-6A100.17 100.17 0 0 0 28 128a91.3 91.3 0 0 1-8.34 38.33a4 4 0 0 0 2 5.3a3.9 3.9 0 0 0 1.66.37a4 4 0 0 0 3.64-2.33A99.15 99.15 0 0 0 36 128a92.16 92.16 0 0 1 30.67-68.57m45.58 144.94a4 4 0 0 0-5.31 2c-2 4.29-4.13 8.57-6.42 12.71a4 4 0 1 0 7 3.88c2.39-4.32 4.65-8.78 6.7-13.25a4 4 0 0 0-1.97-5.34M128 124a4 4 0 0 0-4 4a188.7 188.7 0 0 1-5.92 47a4 4 0 0 0 2.87 4.87a4 4 0 0 0 1 .13a4 4 0 0 0 3.87-3a196.6 196.6 0 0 0 6.18-49a4 4 0 0 0-4-4"></svg:path>`,
})
export class PhFingerprintSimpleThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFingerprintThinIcon],svg[ph-fingerprint-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M68 128a130.7 130.7 0 0 1-13.73 58.7a4 4 0 0 1-3.58 2.22a3.9 3.9 0 0 1-1.78-.42a4 4 0 0 1-1.8-5.36A122.7 122.7 0 0 0 60 128a67.74 67.74 0 0 1 25.5-53.08a4 4 0 0 1 5 6.25A59.74 59.74 0 0 0 68 128m60-4a4 4 0 0 0-4 4a188.1 188.1 0 0 1-23.48 91a4 4 0 0 0 7 3.88A196.2 196.2 0 0 0 132 128a4 4 0 0 0-4-4m0-32a36 36 0 0 0-36 36a4 4 0 0 0 8 0a28 28 0 0 1 56 0a218 218 0 0 1-20.9 93.7a4 4 0 1 0 7.24 3.41A226 226 0 0 0 164 128a36 36 0 0 0-36-36m0-64A100.11 100.11 0 0 0 28 128a91.7 91.7 0 0 1-5.24 30.67a4 4 0 1 0 7.54 2.66A99.7 99.7 0 0 0 36 128a92 92 0 0 1 184 0a286.4 286.4 0 0 1-5.37 55.23a4 4 0 0 0 3.15 4.69a4 4 0 0 0 .78.08a4 4 0 0 0 3.92-3.23A294.3 294.3 0 0 0 228 128A100.11 100.11 0 0 0 128 28M93.6 156.09a4 4 0 0 0-4.71 3.12a155 155 0 0 1-17.66 46.64a4 4 0 0 0 6.93 4a163.1 163.1 0 0 0 18.57-49a4 4 0 0 0-3.13-4.76M128 60a69 69 0 0 0-8.5.53a4 4 0 0 0 1 7.93A63 63 0 0 1 128 68a60.07 60.07 0 0 1 60 60a256 256 0 0 1-1.95 31.5a4 4 0 0 0 3.47 4.47h.5a4 4 0 0 0 4-3.51A264 264 0 0 0 196 128a68.08 68.08 0 0 0-68-68m56.93 128.12a4 4 0 0 0-4.87 2.88c-1.49 5.78-3.21 11.58-5.1 17.23a4 4 0 1 0 7.58 2.54c2-5.83 3.73-11.81 5.27-17.77a4 4 0 0 0-2.87-4.87Z"></svg:path>`,
})
export class PhFingerprintThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFinnTheHumanIcon],svg[ph-finn-the-human-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M168 104H88a40 40 0 0 0-40 40v8a40 40 0 0 0 40 40h80a40 40 0 0 0 40-40v-8a40 40 0 0 0-40-40m24 48a24 24 0 0 1-24 24H88a24 24 0 0 1-24-24v-8a24 24 0 0 1 24-24h80a24 24 0 0 1 24 24Zm16-112a32.06 32.06 0 0 0-31 24H79a32 32 0 0 0-63 8v80a72.08 72.08 0 0 0 72 72h80a72.08 72.08 0 0 0 72-72V72a32 32 0 0 0-32-32m16 112a56.06 56.06 0 0 1-56 56H88a56.06 56.06 0 0 1-56-56V72a16 16 0 0 1 32 0a8 8 0 0 0 8 8h112a8 8 0 0 0 8-8a16 16 0 0 1 32 0Zm-120-4a12 12 0 1 1-12-12a12 12 0 0 1 12 12m72 0a12 12 0 1 1-12-12a12 12 0 0 1 12 12"></svg:path>`,
})
export class PhFinnTheHumanIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFinnTheHumanBoldIcon],svg[ph-finn-the-human-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M160 96H96a52 52 0 0 0 0 104h64a52 52 0 0 0 0-104m0 80H96a28 28 0 0 1 0-56h64a28 28 0 0 1 0 56m-48-28a16 16 0 1 1-16-16a16 16 0 0 1 16 16m64 0a16 16 0 1 1-16-16a16 16 0 0 1 16 16m36-112a36 36 0 0 0-33.94 24H77.94A36 36 0 0 0 8 72v76a88.1 88.1 0 0 0 88 88h64a88.1 88.1 0 0 0 88-88V72a36 36 0 0 0-36-36m12 112a64.07 64.07 0 0 1-64 64H96a64.07 64.07 0 0 1-64-64V72a12 12 0 0 1 24 0a12 12 0 0 0 12 12h120a12 12 0 0 0 12-12a12 12 0 0 1 24 0Z"></svg:path>`,
})
export class PhFinnTheHumanBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFinnTheHumanDuotoneIcon],svg[ph-finn-the-human-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 48a24 24 0 0 0-24 24H72a24 24 0 0 0-48 0v80a64 64 0 0 0 64 64h80a64 64 0 0 0 64-64V72a24 24 0 0 0-24-24m-8 104a32 32 0 0 1-32 32H88a32 32 0 0 1-32-32v-8a32 32 0 0 1 32-32h80a32 32 0 0 1 32 32Z" opacity=".2"></svg:path><svg:path d="M168 104H88a40 40 0 0 0-40 40v8a40 40 0 0 0 40 40h80a40 40 0 0 0 40-40v-8a40 40 0 0 0-40-40m24 48a24 24 0 0 1-24 24H88a24 24 0 0 1-24-24v-8a24 24 0 0 1 24-24h80a24 24 0 0 1 24 24Zm16-112a32.06 32.06 0 0 0-31 24H79a32 32 0 0 0-63 8v80a72.08 72.08 0 0 0 72 72h80a72.08 72.08 0 0 0 72-72V72a32 32 0 0 0-32-32m16 112a56.06 56.06 0 0 1-56 56H88a56.06 56.06 0 0 1-56-56V72a16 16 0 0 1 32 0a8 8 0 0 0 8 8h112a8 8 0 0 0 8-8a16 16 0 0 1 32 0Zm-120-4a12 12 0 1 1-12-12a12 12 0 0 1 12 12m72 0a12 12 0 1 1-12-12a12 12 0 0 1 12 12"></svg:path></svg:g>`,
})
export class PhFinnTheHumanDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFinnTheHumanFillIcon],svg[ph-finn-the-human-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M176 148a12 12 0 1 1-12-12a12 12 0 0 1 12 12m-84-12a12 12 0 1 0 12 12a12 12 0 0 0-12-12m148-64v80a72.08 72.08 0 0 1-72 72H88a72.08 72.08 0 0 1-72-72V72a32 32 0 0 1 63-8h98a32 32 0 0 1 63 8m-40 72a32 32 0 0 0-32-32H88a32 32 0 0 0-32 32v8a32 32 0 0 0 32 32h80a32 32 0 0 0 32-32Z"></svg:path>`,
})
export class PhFinnTheHumanFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFinnTheHumanLightIcon],svg[ph-finn-the-human-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M168 106H88a38 38 0 0 0-38 38v8a38 38 0 0 0 38 38h80a38 38 0 0 0 38-38v-8a38 38 0 0 0-38-38m26 46a26 26 0 0 1-26 26H88a26 26 0 0 1-26-26v-8a26 26 0 0 1 26-26h80a26 26 0 0 1 26 26Zm14-110a30.05 30.05 0 0 0-29.4 24H77.4A30 30 0 0 0 18 72v80a70.08 70.08 0 0 0 70 70h80a70.08 70.08 0 0 0 70-70V72a30 30 0 0 0-30-30m18 110a58.07 58.07 0 0 1-58 58H88a58.07 58.07 0 0 1-58-58V72a18 18 0 0 1 36 0a6 6 0 0 0 6 6h112a6 6 0 0 0 6-6a18 18 0 0 1 36 0Zm-124-4a10 10 0 1 1-10-10a10 10 0 0 1 10 10m72 0a10 10 0 1 1-10-10a10 10 0 0 1 10 10"></svg:path>`,
})
export class PhFinnTheHumanLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFinnTheHumanThinIcon],svg[ph-finn-the-human-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M168 108H88a36 36 0 0 0-36 36v8a36 36 0 0 0 36 36h80a36 36 0 0 0 36-36v-8a36 36 0 0 0-36-36m28 44a28 28 0 0 1-28 28H88a28 28 0 0 1-28-28v-8a28 28 0 0 1 28-28h80a28 28 0 0 1 28 28Zm12-108a28 28 0 0 0-27.71 24H75.71A28 28 0 0 0 20 72v80a68.07 68.07 0 0 0 68 68h80a68.07 68.07 0 0 0 68-68V72a28 28 0 0 0-28-28m20 108a60.07 60.07 0 0 1-60 60H88a60.07 60.07 0 0 1-60-60V72a20 20 0 0 1 40 0a4 4 0 0 0 4 4h112a4 4 0 0 0 4-4a20 20 0 0 1 40 0Zm-128-4a8 8 0 1 1-8-8a8 8 0 0 1 8 8m72 0a8 8 0 1 1-8-8a8 8 0 0 1 8 8"></svg:path>`,
})
export class PhFinnTheHumanThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFireIcon],svg[ph-fire-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M183.89 153.34a57.6 57.6 0 0 1-46.56 46.55a9 9 0 0 1-1.33.11a8 8 0 0 1-1.32-15.89c16.57-2.79 30.63-16.85 33.44-33.45a8 8 0 0 1 15.78 2.68ZM216 144a88 88 0 0 1-176 0c0-27.92 11-56.47 32.66-84.85a8 8 0 0 1 11.93-.89l24.12 23.41l22-60.41a8 8 0 0 1 12.63-3.41C165.21 36 216 84.55 216 144m-16 0c0-46.09-35.79-85.92-58.21-106.33l-22.27 61.07a8 8 0 0 1-13.09 3L80.06 76.16C64.09 99.21 56 122 56 144a72 72 0 0 0 144 0"></svg:path>`,
})
export class PhFireIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFireBoldIcon],svg[ph-fire-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M177.62 159.6a52 52 0 0 1-34 34a12.2 12.2 0 0 1-3.6.55a12 12 0 0 1-3.6-23.45a28 28 0 0 0 18.32-18.32a12 12 0 0 1 22.9 7.2ZM220 144a92 92 0 0 1-184 0c0-28.81 11.27-58.18 33.48-87.28a12 12 0 0 1 17.9-1.33l19.69 19.11L127 19.89a12 12 0 0 1 18.94-5.12C168.2 33.25 220 82.85 220 144m-24 0c0-41.71-30.61-78.39-52.52-99.29l-20.21 55.4a12 12 0 0 1-19.63 4.5L80.71 82.36C67 103.38 60 124.06 60 144a68 68 0 0 0 136 0"></svg:path>`,
})
export class PhFireBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFireDuotoneIcon],svg[ph-fire-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 144a80 80 0 0 1-160 0c0-30.57 14.42-58.26 31-80l33 32l26.27-72C159.86 41.92 208 88.15 208 144" opacity=".2"></svg:path><svg:path d="M183.89 153.34a57.6 57.6 0 0 1-46.56 46.55a9 9 0 0 1-1.33.11a8 8 0 0 1-1.32-15.89c16.57-2.79 30.63-16.85 33.44-33.45a8 8 0 0 1 15.78 2.68ZM216 144a88 88 0 0 1-176 0c0-27.92 11-56.47 32.66-84.85a8 8 0 0 1 11.93-.89l24.12 23.41l22-60.41a8 8 0 0 1 12.63-3.41C165.21 36 216 84.55 216 144m-16 0c0-46.09-35.79-85.92-58.21-106.33l-22.27 61.07a8 8 0 0 1-13.09 3L80.06 76.16C64.09 99.21 56 122 56 144a72 72 0 0 0 144 0"></svg:path></svg:g>`,
})
export class PhFireDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFireExtinguisherIcon],svg[ph-fire-extinguisher-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m218.3 48.34l-60.68-18.2l30-15a8 8 0 0 0-7.2-14.29L134 24.05a80.08 80.08 0 0 0-78 80V208a8 8 0 0 0 16 0v-32h16v56a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16V104a48.07 48.07 0 0 0-40-47.32V42.75l69.7 20.91a8 8 0 1 0 4.6-15.32M72 160v-56a64.07 64.07 0 0 1 56-63.48v16.16A48.07 48.07 0 0 0 88 104v56Zm96 72h-64v-56h64zm0-128v56h-64v-56a32 32 0 0 1 64 0"></svg:path>`,
})
export class PhFireExtinguisherIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFireExtinguisherBoldIcon],svg[ph-fire-extinguisher-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M219.45 44.51L170.07 29.7L185 22.93a12 12 0 1 0-10-21.85l-41.78 19A84.09 84.09 0 0 0 52 104v104a12 12 0 0 0 24 0v-28h16v52a20 20 0 0 0 20 20h48a20 20 0 0 0 20-20V104a44.08 44.08 0 0 0-32-42.32V48.13l64.55 19.37a11.8 11.8 0 0 0 3.45.5a12 12 0 0 0 3.45-23.49M76 156v-52a60.1 60.1 0 0 1 48-58.79v16.47A44.06 44.06 0 0 0 92 104v52Zm40 72v-48h40v48Zm40-124v52h-40v-52a20 20 0 0 1 40 0"></svg:path>`,
})
export class PhFireExtinguisherBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFireExtinguisherDuotoneIcon],svg[ph-fire-extinguisher-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M176 168v64a8 8 0 0 1-8 8h-64a8 8 0 0 1-8-8v-64Z" opacity=".2"></svg:path><svg:path d="m218.3 48.34l-60.68-18.2l30-15a8 8 0 0 0-7.2-14.29L134 24.05a80.08 80.08 0 0 0-78 80V208a8 8 0 0 0 16 0v-32h16v56a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16V104a48.07 48.07 0 0 0-40-47.32V42.75l69.7 20.91a8 8 0 1 0 4.6-15.32M88 104v56H72v-56a64.07 64.07 0 0 1 56-63.48v16.16A48.07 48.07 0 0 0 88 104m80 128h-64v-56h64Zm0-128v56h-64v-56a32 32 0 0 1 64 0"></svg:path></svg:g>`,
})
export class PhFireExtinguisherDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFireExtinguisherFillIcon],svg[ph-fire-extinguisher-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m218.3 48.34l-60.68-18.2l30-15a8 8 0 0 0-7.2-14.29L134 24.05a80.08 80.08 0 0 0-78 80V208a8 8 0 0 0 16 0v-32h16v56a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16V104a48.07 48.07 0 0 0-40-47.32V42.75l69.7 20.91a8 8 0 1 0 4.6-15.32M72 160v-56a64.07 64.07 0 0 1 56-63.48v16.16A48.07 48.07 0 0 0 88 104v56Zm96-56v56h-64v-56a32 32 0 0 1 64 0"></svg:path>`,
})
export class PhFireExtinguisherFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFireExtinguisherLightIcon],svg[ph-fire-extinguisher-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M217.72 50.25L152.21 30.6l34.47-17.23a6 6 0 1 0-5.36-10.74L134.51 26A78.07 78.07 0 0 0 58 104v104a6 6 0 0 0 12 0v-34h20v58a14 14 0 0 0 14 14h64a14 14 0 0 0 14-14V104a46.07 46.07 0 0 0-40-45.6V40.07l72.27 21.68A6.1 6.1 0 0 0 216 62a6 6 0 0 0 1.72-11.75M70 162v-58a66.07 66.07 0 0 1 60-65.71V58.4A46.07 46.07 0 0 0 90 104v58Zm98 72h-64a2 2 0 0 1-2-2v-58h68v58a2 2 0 0 1-2 2m2-130v58h-68v-58a34 34 0 0 1 68 0"></svg:path>`,
})
export class PhFireExtinguisherLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFireExtinguisherThinIcon],svg[ph-fire-extinguisher-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m217.15 52.17l-70.34-21.1l39-19.49a4 4 0 1 0-3.58-7.16L135 28a76.07 76.07 0 0 0-75 76v104a4 4 0 0 0 8 0v-36h24v60a12 12 0 0 0 12 12h64a12 12 0 0 0 12-12V104a44.06 44.06 0 0 0-40-43.81V37.38l74.85 22.45A3.8 3.8 0 0 0 216 60a4 4 0 0 0 1.15-7.83M68 164v-60a68.08 68.08 0 0 1 64-67.87v24.06A44.06 44.06 0 0 0 92 104v60Zm100 72h-64a4 4 0 0 1-4-4v-60h72v60a4 4 0 0 1-4 4m4-132v60h-72v-60a36 36 0 0 1 72 0"></svg:path>`,
})
export class PhFireExtinguisherThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFireFillIcon],svg[ph-fire-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M143.38 17.85a8 8 0 0 0-12.63 3.41l-22 60.41l-24.16-23.41a8 8 0 0 0-11.93.89C51 87.53 40 116.08 40 144a88 88 0 0 0 176 0c0-59.45-50.79-108-72.62-126.15m40.51 135.49a57.6 57.6 0 0 1-46.56 46.55a7.7 7.7 0 0 1-1.33.11a8 8 0 0 1-1.32-15.89c16.57-2.79 30.63-16.85 33.44-33.45a8 8 0 0 1 15.78 2.68Z"></svg:path>`,
})
export class PhFireFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFireLightIcon],svg[ph-fire-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M181.92 153A55.58 55.58 0 0 1 137 197.92a7 7 0 0 1-1 .08a6 6 0 0 1-1-11.92c17.38-2.92 32.13-17.68 35.08-35.08a6 6 0 1 1 11.84 2m32.08-9a86 86 0 0 1-172 0c0-27.47 10.85-55.61 32.25-83.64a6 6 0 0 1 9-.67l26.34 25.56l23.09-63.31a6 6 0 0 1 9.47-2.56C163.72 37.33 214 85.4 214 144m-12 0c0-48.4-38.65-89.84-61.07-109.8l-23.29 63.86a6 6 0 0 1-9.82 2.25l-28-27.22C62.67 97.13 54 121 54 144a74 74 0 0 0 148 0"></svg:path>`,
})
export class PhFireLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFireSimpleIcon],svg[ph-fire-simple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M143.38 17.85a8 8 0 0 0-12.63 3.41l-22 60.41l-24.16-23.41a8 8 0 0 0-11.93.89C51 87.53 40 116.08 40 144a88 88 0 0 0 176 0c0-59.45-50.79-108-72.62-126.15M128 216a72.08 72.08 0 0 1-72-72c0-22 8.09-44.79 24.06-67.84l26.37 25.58a8 8 0 0 0 13.09-3l22.27-61.07C164.21 58.08 200 97.91 200 144a72.08 72.08 0 0 1-72 72"></svg:path>`,
})
export class PhFireSimpleIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFireSimpleBoldIcon],svg[ph-fire-simple-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M145.93 14.77A12 12 0 0 0 127 19.89L107.07 74.5L87.38 55.39a12 12 0 0 0-17.9 1.33C47.27 85.82 36 115.19 36 144a92 92 0 0 0 184 0c0-61.15-51.8-110.75-74.07-129.23M128 212a68.07 68.07 0 0 1-68-68c0-19.94 7-40.62 20.71-61.64l22.93 22.25a12 12 0 0 0 19.63-4.5l20.21-55.4C165.39 65.61 196 102.29 196 144a68.07 68.07 0 0 1-68 68"></svg:path>`,
})
export class PhFireSimpleBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFireSimpleDuotoneIcon],svg[ph-fire-simple-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 144a80 80 0 0 1-160 0c0-30.57 14.42-58.26 31-80l33 32l26.27-72C159.86 41.92 208 88.15 208 144" opacity=".2"></svg:path><svg:path d="M143.38 17.85a8 8 0 0 0-12.63 3.41l-22 60.41l-24.16-23.41a8 8 0 0 0-11.93.89C51 87.53 40 116.08 40 144a88 88 0 0 0 176 0c0-59.45-50.79-108-72.62-126.15M128 216a72.08 72.08 0 0 1-72-72c0-22 8.09-44.79 24.06-67.84l26.37 25.58a8 8 0 0 0 13.09-3l22.27-61.07C164.21 58.08 200 97.91 200 144a72.08 72.08 0 0 1-72 72"></svg:path></svg:g>`,
})
export class PhFireSimpleDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFireSimpleFillIcon],svg[ph-fire-simple-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M143.38 17.85a8 8 0 0 0-12.63 3.41l-22 60.41l-24.16-23.41a8 8 0 0 0-11.93.89C51 87.53 40 116.08 40 144a88 88 0 0 0 176 0c0-59.45-50.79-108-72.62-126.15"></svg:path>`,
})
export class PhFireSimpleFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFireSimpleLightIcon],svg[ph-fire-simple-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M142.1 19.38a6 6 0 0 0-9.47 2.56l-23.09 63.31L83.2 59.69a6 6 0 0 0-9 .67C52.85 88.39 42 116.53 42 144a86 86 0 0 0 172 0c0-58.6-50.28-106.67-71.9-124.62M128 218a74.09 74.09 0 0 1-74-74c0-23 8.67-46.87 25.77-70.91l28.05 27.22a6 6 0 0 0 9.82-2.25l23.29-63.86C163.35 54.16 202 95.6 202 144a74.09 74.09 0 0 1-74 74"></svg:path>`,
})
export class PhFireSimpleLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFireSimpleThinIcon],svg[ph-fire-simple-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M140.82 20.92a4 4 0 0 0-6.31 1.71l-24.15 66.2l-28.55-27.7a4 4 0 0 0-6 .44C54.71 89.25 44 117 44 144a84 84 0 0 0 168 0c0-57.76-49.78-105.31-71.18-123.08M128 220a76.08 76.08 0 0 1-76-76c0-24.07 9.25-48.93 27.5-74l29.71 28.83a4 4 0 0 0 6.55-1.5l24.3-66.6C162.27 50.09 204 93.18 204 144a76.08 76.08 0 0 1-76 76"></svg:path>`,
})
export class PhFireSimpleThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFireThinIcon],svg[ph-fire-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M179.94 152.67a53.51 53.51 0 0 1-43.28 43.27a3.7 3.7 0 0 1-.66.06a4 4 0 0 1-.66-7.94c18.18-3.06 33.63-18.51 36.72-36.73a4 4 0 0 1 7.88 1.34M212 144a84 84 0 0 1-168 0c0-27 10.71-54.75 31.84-82.43a4 4 0 0 1 6-.44l28.55 27.7l24.15-66.2a4 4 0 0 1 6.31-1.71C162.22 38.69 212 86.24 212 144m-8 0c0-50.82-41.73-93.91-63.94-113.23l-24.3 66.6a4 4 0 0 1-6.55 1.5L79.5 70C61.25 95.07 52 119.93 52 144a76 76 0 0 0 152 0"></svg:path>`,
})
export class PhFireThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFireTruckIcon],svg[ph-fire-truck-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m255.43 117l-14-35a15.93 15.93 0 0 0-14.85-10H192v-8a8 8 0 0 0-16 0v100.31A32.1 32.1 0 0 0 161 184h-50a32 32 0 0 0-62 0H32v-48a8 8 0 0 0-16 0v48a16 16 0 0 0 16 16h17a32 32 0 0 0 62 0h50a32 32 0 0 0 62 0h17a16 16 0 0 0 16-16v-64a7.9 7.9 0 0 0-.57-3m-28.85-29l9.6 24H192V88ZM80 208a16 16 0 1 1 16-16a16 16 0 0 1-16 16m112 0a16 16 0 1 1 16-16a16 16 0 0 1-16 16m31-24a32.06 32.06 0 0 0-31-24v-32h48v56ZM24 96a8 8 0 0 0 0 16h128a8 8 0 0 0 0-16h-16V72h16a8 8 0 0 0 0-16H24a8 8 0 0 0 0 16h16v24Zm96 0H96V72h24ZM56 72h24v24H56Z"></svg:path>`,
})
export class PhFireTruckIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFireTruckBoldIcon],svg[ph-fire-truck-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m255.14 115.54l-14-35A19.9 19.9 0 0 0 222.58 68H204v-4a12 12 0 0 0-24 0v94.06A36.23 36.23 0 0 0 158.06 180h-44.12a36 36 0 0 0-67.88 0H36v-36a12 12 0 0 0-24 0v40a20 20 0 0 0 20 20h14.06a36 36 0 0 0 67.88 0h44.12a36 36 0 0 0 67.88 0H236a20 20 0 0 0 20-20v-64a12 12 0 0 0-.86-4.46M219.88 92l6.4 16H204V92ZM80 204a12 12 0 1 1 12-12a12 12 0 0 1-12 12m112 0a12 12 0 1 1 12-12a12 12 0 0 1-12 12m33.94-24A36.23 36.23 0 0 0 204 158.06V132h28v48ZM24 92a12 12 0 0 0 0 24h128a12 12 0 0 0 0-24h-12V76h12a12 12 0 0 0 0-24H24a12 12 0 0 0 0 24h12v16Zm92 0h-16V76h16ZM60 76h16v16H60Z"></svg:path>`,
})
export class PhFireTruckBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFireTruckDuotoneIcon],svg[ph-fire-truck-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M248 120v64a8 8 0 0 1-8 8h-24a24 24 0 0 0-32-22.63A24 24 0 0 0 168 192h-64a24 24 0 0 0-48 0H32a8 8 0 0 1-8-8V72a8 8 0 0 1 8-8h152v56Z" opacity=".2"></svg:path><svg:path d="m255.43 117l-14-35a15.93 15.93 0 0 0-14.85-10H192v-8a8 8 0 0 0-16 0v100.31A32.1 32.1 0 0 0 161 184h-50a32 32 0 0 0-62 0H32v-48a8 8 0 0 0-16 0v48a16 16 0 0 0 16 16h17a32 32 0 0 0 62 0h50a32 32 0 0 0 62 0h17a16 16 0 0 0 16-16v-64a7.9 7.9 0 0 0-.57-3m-28.85-29l9.6 24H192V88ZM80 208a16 16 0 1 1 16-16a16 16 0 0 1-16 16m112 0a16 16 0 1 1 16-16a16 16 0 0 1-16 16m31-24a32.06 32.06 0 0 0-31-24v-32h48v56ZM24 96a8 8 0 0 0 0 16h128a8 8 0 0 0 0-16h-16V72h16a8 8 0 0 0 0-16H24a8 8 0 0 0 0 16h16v24Zm96 0H96V72h24ZM56 72h24v24H56Z"></svg:path></svg:g>`,
})
export class PhFireTruckDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFireTruckFillIcon],svg[ph-fire-truck-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m255.43 117l-14-35a15.93 15.93 0 0 0-14.85-10H192v-8a8 8 0 0 0-16 0v64H24a8 8 0 0 0-8 8v48a16 16 0 0 0 16 16h17a32 32 0 0 0 62 0h50a32 32 0 0 0 62 0h17a16 16 0 0 0 16-16v-64a7.9 7.9 0 0 0-.57-3M80 208a16 16 0 1 1 16-16a16 16 0 0 1-16 16m112 0a16 16 0 1 1 16-16a16 16 0 0 1-16 16m0-96V88h34.58l9.6 24ZM24 96a8 8 0 0 0 0 16h128a8 8 0 0 0 0-16h-16V72h16a8 8 0 0 0 0-16H24a8 8 0 0 0 0 16h16v24Zm72-24h24v24H96Zm-40 0h24v24H56Z"></svg:path>`,
})
export class PhFireTruckFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFireTruckLightIcon],svg[ph-fire-truck-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m253.57 117.77l-14-35a13.93 13.93 0 0 0-13-8.8H190V64a6 6 0 0 0-12 0v101.48A30.1 30.1 0 0 0 162.6 186h-53.2a30 30 0 0 0-58.8 0H32a2 2 0 0 1-2-2v-48a6 6 0 0 0-12 0v48a14 14 0 0 0 14 14h18.6a30 30 0 0 0 58.8 0h53.2a30 30 0 0 0 58.8 0H240a14 14 0 0 0 14-14v-64a6.1 6.1 0 0 0-.43-2.23M226.58 86a2 2 0 0 1 1.86 1.26l10.7 26.74H190V86ZM80 210a18 18 0 1 1 18-18a18 18 0 0 1-18 18m112 0a18 18 0 1 1 18-18a18 18 0 0 1-18 18m48-24h-18.6a30.05 30.05 0 0 0-29.4-24c-.67 0-1.34 0-2 .07V126h52v58a2 2 0 0 1-2 2M24 98a6 6 0 0 0 0 12h128a6 6 0 0 0 0-12h-18V70h18a6 6 0 0 0 0-12H24a6 6 0 0 0 0 12h18v28Zm98 0H94V70h28ZM54 70h28v28H54Z"></svg:path>`,
})
export class PhFireTruckLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFireTruckThinIcon],svg[ph-fire-truck-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m251.71 118.51l-14-35A12 12 0 0 0 226.58 76H188V64a4 4 0 0 0-8 0v102.71A28.05 28.05 0 0 0 164.29 188h-56.58a28 28 0 0 0-55.42 0H32a4 4 0 0 1-4-4v-48a4 4 0 0 0-8 0v48a12 12 0 0 0 12 12h20.29a28 28 0 0 0 55.42 0h56.58a28 28 0 0 0 55.42 0H240a12 12 0 0 0 12-12v-64a4 4 0 0 0-.29-1.49M226.58 84a4 4 0 0 1 3.72 2.51L242.09 116H188V84ZM80 212a20 20 0 1 1 20-20a20 20 0 0 1-20 20m112 0a20 20 0 1 1 20-20a20 20 0 0 1-20 20m48-24h-20.29A28 28 0 0 0 188 164.29V124h56v60a4 4 0 0 1-4 4M24 100a4 4 0 0 0 0 8h128a4 4 0 0 0 0-8h-20V68h20a4 4 0 0 0 0-8H24a4 4 0 0 0 0 8h20v32Zm100 0H92V68h32ZM52 68h32v32H52Z"></svg:path>`,
})
export class PhFireTruckThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFirstAidIcon],svg[ph-first-aid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 88h-48V40a16 16 0 0 0-16-16h-48a16 16 0 0 0-16 16v48H40a16 16 0 0 0-16 16v48a16 16 0 0 0 16 16h48v48a16 16 0 0 0 16 16h48a16 16 0 0 0 16-16v-48h48a16 16 0 0 0 16-16v-48a16 16 0 0 0-16-16m0 64h-56a8 8 0 0 0-8 8v56h-48v-56a8 8 0 0 0-8-8H40v-48h56a8 8 0 0 0 8-8V40h48v56a8 8 0 0 0 8 8h56Z"></svg:path>`,
})
export class PhFirstAidIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFirstAidBoldIcon],svg[ph-first-aid-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 84h-44V40a20 20 0 0 0-20-20h-48a20 20 0 0 0-20 20v44H40a20 20 0 0 0-20 20v48a20 20 0 0 0 20 20h44v44a20 20 0 0 0 20 20h48a20 20 0 0 0 20-20v-44h44a20 20 0 0 0 20-20v-48a20 20 0 0 0-20-20m-4 64h-52a12 12 0 0 0-12 12v52h-40v-52a12 12 0 0 0-12-12H44v-40h52a12 12 0 0 0 12-12V44h40v52a12 12 0 0 0 12 12h52Z"></svg:path>`,
})
export class PhFirstAidBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFirstAidDuotoneIcon],svg[ph-first-aid-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 104v48a8 8 0 0 1-8 8h-56v56a8 8 0 0 1-8 8h-48a8 8 0 0 1-8-8v-56H40a8 8 0 0 1-8-8v-48a8 8 0 0 1 8-8h56V40a8 8 0 0 1 8-8h48a8 8 0 0 1 8 8v56h56a8 8 0 0 1 8 8" opacity=".2"></svg:path><svg:path d="M216 88h-48V40a16 16 0 0 0-16-16h-48a16 16 0 0 0-16 16v48H40a16 16 0 0 0-16 16v48a16 16 0 0 0 16 16h48v48a16 16 0 0 0 16 16h48a16 16 0 0 0 16-16v-48h48a16 16 0 0 0 16-16v-48a16 16 0 0 0-16-16m0 64h-56a8 8 0 0 0-8 8v56h-48v-56a8 8 0 0 0-8-8H40v-48h56a8 8 0 0 0 8-8V40h48v56a8 8 0 0 0 8 8h56Z"></svg:path></svg:g>`,
})
export class PhFirstAidDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFirstAidFillIcon],svg[ph-first-aid-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 108v40a16 16 0 0 1-16 16h-52v52a16 16 0 0 1-16 16h-40a16 16 0 0 1-16-16v-52H40a16 16 0 0 1-16-16v-40a16 16 0 0 1 16-16h52V40a16 16 0 0 1 16-16h40a16 16 0 0 1 16 16v52h52a16 16 0 0 1 16 16"></svg:path>`,
})
export class PhFirstAidFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFirstAidKitIcon],svg[ph-first-aid-kit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 56h-40v-8a24 24 0 0 0-24-24h-48a24 24 0 0 0-24 24v8H40a16 16 0 0 0-16 16v128a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V72a16 16 0 0 0-16-16M96 48a8 8 0 0 1 8-8h48a8 8 0 0 1 8 8v8H96Zm120 152H40V72h176zm-56-64a8 8 0 0 1-8 8h-16v16a8 8 0 0 1-16 0v-16h-16a8 8 0 0 1 0-16h16v-16a8 8 0 0 1 16 0v16h16a8 8 0 0 1 8 8"></svg:path>`,
})
export class PhFirstAidKitIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFirstAidKitBoldIcon],svg[ph-first-aid-kit-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 52h-36v-8a28 28 0 0 0-28-28h-48a28 28 0 0 0-28 28v8H40a20 20 0 0 0-20 20v128a20 20 0 0 0 20 20h176a20 20 0 0 0 20-20V72a20 20 0 0 0-20-20m-116-8a4 4 0 0 1 4-4h48a4 4 0 0 1 4 4v8h-56Zm112 152H44V76h168Zm-48-60a12 12 0 0 1-12 12h-12v12a12 12 0 0 1-24 0v-12h-12a12 12 0 0 1 0-24h12v-12a12 12 0 0 1 24 0v12h12a12 12 0 0 1 12 12"></svg:path>`,
})
export class PhFirstAidKitBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFirstAidKitDuotoneIcon],svg[ph-first-aid-kit-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 72v128a8 8 0 0 1-8 8H40a8 8 0 0 1-8-8V72a8 8 0 0 1 8-8h176a8 8 0 0 1 8 8" opacity=".2"></svg:path><svg:path d="M216 56h-40v-8a24 24 0 0 0-24-24h-48a24 24 0 0 0-24 24v8H40a16 16 0 0 0-16 16v128a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V72a16 16 0 0 0-16-16M96 48a8 8 0 0 1 8-8h48a8 8 0 0 1 8 8v8H96Zm120 152H40V72h176zm-56-64a8 8 0 0 1-8 8h-16v16a8 8 0 0 1-16 0v-16h-16a8 8 0 0 1 0-16h16v-16a8 8 0 0 1 16 0v16h16a8 8 0 0 1 8 8"></svg:path></svg:g>`,
})
export class PhFirstAidKitDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFirstAidKitFillIcon],svg[ph-first-aid-kit-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 56h-40v-8a24 24 0 0 0-24-24h-48a24 24 0 0 0-24 24v8H40a16 16 0 0 0-16 16v128a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V72a16 16 0 0 0-16-16m-64 88h-16v16a8 8 0 0 1-16 0v-16h-16a8 8 0 0 1 0-16h16v-16a8 8 0 0 1 16 0v16h16a8 8 0 0 1 0 16m8-88H96v-8a8 8 0 0 1 8-8h48a8 8 0 0 1 8 8Z"></svg:path>`,
})
export class PhFirstAidKitFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFirstAidKitLightIcon],svg[ph-first-aid-kit-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 58h-42V48a22 22 0 0 0-22-22h-48a22 22 0 0 0-22 22v10H40a14 14 0 0 0-14 14v128a14 14 0 0 0 14 14h176a14 14 0 0 0 14-14V72a14 14 0 0 0-14-14M94 48a10 10 0 0 1 10-10h48a10 10 0 0 1 10 10v10H94Zm124 152a2 2 0 0 1-2 2H40a2 2 0 0 1-2-2V72a2 2 0 0 1 2-2h176a2 2 0 0 1 2 2Zm-60-64a6 6 0 0 1-6 6h-18v18a6 6 0 0 1-12 0v-18h-18a6 6 0 0 1 0-12h18v-18a6 6 0 0 1 12 0v18h18a6 6 0 0 1 6 6"></svg:path>`,
})
export class PhFirstAidKitLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFirstAidKitThinIcon],svg[ph-first-aid-kit-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 60h-44V48a20 20 0 0 0-20-20h-48a20 20 0 0 0-20 20v12H40a12 12 0 0 0-12 12v128a12 12 0 0 0 12 12h176a12 12 0 0 0 12-12V72a12 12 0 0 0-12-12M92 48a12 12 0 0 1 12-12h48a12 12 0 0 1 12 12v12H92Zm128 152a4 4 0 0 1-4 4H40a4 4 0 0 1-4-4V72a4 4 0 0 1 4-4h176a4 4 0 0 1 4 4Zm-64-64a4 4 0 0 1-4 4h-20v20a4 4 0 0 1-8 0v-20h-20a4 4 0 0 1 0-8h20v-20a4 4 0 0 1 8 0v20h20a4 4 0 0 1 4 4"></svg:path>`,
})
export class PhFirstAidKitThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFirstAidLightIcon],svg[ph-first-aid-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 90h-50V40a14 14 0 0 0-14-14h-48a14 14 0 0 0-14 14v50H40a14 14 0 0 0-14 14v48a14 14 0 0 0 14 14h50v50a14 14 0 0 0 14 14h48a14 14 0 0 0 14-14v-50h50a14 14 0 0 0 14-14v-48a14 14 0 0 0-14-14m2 62a2 2 0 0 1-2 2h-56a6 6 0 0 0-6 6v56a2 2 0 0 1-2 2h-48a2 2 0 0 1-2-2v-56a6 6 0 0 0-6-6H40a2 2 0 0 1-2-2v-48a2 2 0 0 1 2-2h56a6 6 0 0 0 6-6V40a2 2 0 0 1 2-2h48a2 2 0 0 1 2 2v56a6 6 0 0 0 6 6h56a2 2 0 0 1 2 2Z"></svg:path>`,
})
export class PhFirstAidLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFirstAidThinIcon],svg[ph-first-aid-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 92h-52V40a12 12 0 0 0-12-12h-48a12 12 0 0 0-12 12v52H40a12 12 0 0 0-12 12v48a12 12 0 0 0 12 12h52v52a12 12 0 0 0 12 12h48a12 12 0 0 0 12-12v-52h52a12 12 0 0 0 12-12v-48a12 12 0 0 0-12-12m4 60a4 4 0 0 1-4 4h-56a4 4 0 0 0-4 4v56a4 4 0 0 1-4 4h-48a4 4 0 0 1-4-4v-56a4 4 0 0 0-4-4H40a4 4 0 0 1-4-4v-48a4 4 0 0 1 4-4h56a4 4 0 0 0 4-4V40a4 4 0 0 1 4-4h48a4 4 0 0 1 4 4v56a4 4 0 0 0 4 4h56a4 4 0 0 1 4 4Z"></svg:path>`,
})
export class PhFirstAidThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFishIcon],svg[ph-fish-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M168 76a12 12 0 1 1-12-12a12 12 0 0 1 12 12m48.72 67.64c-19.37 34.9-55.44 53.76-107.24 56.1l-22 51.41A8 8 0 0 1 80.1 256h-.51a8 8 0 0 1-7.19-5.78l-14.8-51.83l-51.8-14.83a8 8 0 0 1-1-15.05l51.41-22c2.35-51.78 21.21-87.84 56.09-107.22c24.75-13.74 52.74-15.84 71.88-15.18c18.64.64 36 4.27 38.86 6a8 8 0 0 1 2.83 2.83c1.69 2.85 5.33 20.21 6 38.85c.68 19.1-1.41 47.1-15.15 71.85m-55.18 29a52.11 52.11 0 0 1-33.4-44.78a52.09 52.09 0 0 1-44.77-33.39q-10.45 23.79-11.3 57.59a8 8 0 0 1-4.85 7.17l-35.39 15.14l34.45 9.86a8 8 0 0 1 5.49 5.5l9.84 34.44l15.16-35.4a8 8 0 0 1 7.17-4.84q33.77-.81 57.6-11.29m50.88-129.07c-14.15-3-64.1-11-100.3 14.75a81.2 81.2 0 0 0-16 15.07a36 36 0 0 0 39.35 38.44a8 8 0 0 1 8.73 8.73a36 36 0 0 0 38.47 39.34a80.8 80.8 0 0 0 15-16c25.75-36.17 17.75-86.16 14.75-100.33"></svg:path>`,
})
export class PhFishIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFishBoldIcon],svg[ph-fish-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M172 76a16 16 0 1 1-16-16a16 16 0 0 1 16 16m48.22 69.58a102 102 0 0 1-26.78 31.29c-.24.2-.47.39-.72.56a109.5 109.5 0 0 1-13.55 8.83c-18.3 10.07-40.88 15.9-67.22 17.36L91 249a12 12 0 0 1-10.89 7h-.81a12 12 0 0 1-10.66-8.44l-14.16-46l-46-14.19A12 12 0 0 1 7 165l45.4-20.92c1.47-26.33 7.3-48.91 17.37-67.2a110.6 110.6 0 0 1 8.8-13.58c.16-.22.34-.44.51-.66a101.9 101.9 0 0 1 31.33-26.84c25.55-14.19 54.33-16.37 74-15.69c17.76.61 36.49 4 40.76 6.52a12.1 12.1 0 0 1 4.23 4.23c2.52 4.26 5.92 23 6.53 40.76c.64 19.64-1.53 48.38-15.71 73.96m-68.7 26.66a57 57 0 0 1-11.12-8.64a55.8 55.8 0 0 1-15.9-32.1a55.8 55.8 0 0 1-32.1-15.9a56.6 56.6 0 0 1-8.63-11.13q-7 20.48-7.7 47.69a12 12 0 0 1-7 10.61l-23.56 10.87l22.1 6.82a12 12 0 0 1 7.94 7.94l6.79 22.09l10.89-23.59a12 12 0 0 1 10.61-7q27.16-.61 47.68-7.66M209 47c-16.25-3.14-61.81-9-95 14.91a76.7 76.7 0 0 0-14 13a32 32 0 0 0 35 32.94a12 12 0 0 1 13.09 13.09a32 32 0 0 0 33 35a76.3 76.3 0 0 0 13-14C218.05 108.81 212.18 63.22 209 47"></svg:path>`,
})
export class PhFishBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFishDuotoneIcon],svg[ph-fish-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M185.81 167.62c-18 13.9-44.17 23.41-81.68 24.31L80.09 248l-16-56.07L8 175.87l56.07-24c.9-37.49 10.41-63.61 24.31-81.65a44 44 0 0 0 47.82 49.58a44 44 0 0 0 49.61 47.82" opacity=".2"></svg:path><svg:path d="M168 76a12 12 0 1 1-12-12a12 12 0 0 1 12 12m48.72 67.64c-19.37 34.9-55.44 53.76-107.24 56.1l-22 51.41A8 8 0 0 1 80.1 256h-.51a8 8 0 0 1-7.19-5.78l-14.8-51.83l-51.8-14.83a8 8 0 0 1-1-15.05l51.41-22c2.35-51.78 21.21-87.84 56.09-107.22c24.75-13.74 52.74-15.84 71.88-15.18c18.64.64 36 4.27 38.86 6a8 8 0 0 1 2.83 2.83c1.69 2.85 5.33 20.21 6 38.85c.68 19.1-1.41 47.1-15.15 71.85m-55.18 29a52.11 52.11 0 0 1-33.4-44.78a52.09 52.09 0 0 1-44.77-33.39q-10.45 23.79-11.3 57.59a8 8 0 0 1-4.85 7.17l-35.39 15.14l34.45 9.86a8 8 0 0 1 5.49 5.5l9.84 34.44l15.16-35.4a8 8 0 0 1 7.17-4.84q33.77-.81 57.6-11.29m50.88-129.07c-14.15-3-64.1-11-100.3 14.75a81.2 81.2 0 0 0-16 15.07a36 36 0 0 0 39.35 38.44a8 8 0 0 1 8.73 8.73a36 36 0 0 0 38.47 39.34a80.8 80.8 0 0 0 15-16c25.75-36.17 17.75-86.16 14.75-100.33"></svg:path></svg:g>`,
})
export class PhFishDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFishFillIcon],svg[ph-fish-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M168 76a12 12 0 1 1-12-12a12 12 0 0 1 12 12m48.72 67.64c-19.37 34.9-55.44 53.76-107.24 56.1l-22 51.41A8 8 0 0 1 80.1 256h-.51a8 8 0 0 1-7.19-5.78l-14.8-51.83l-51.8-14.83a8 8 0 0 1-1-15.05l51.41-22c2.35-51.78 21.21-87.84 56.09-107.22c24.75-13.74 52.74-15.84 71.88-15.18c18.64.64 36 4.27 38.86 6a8 8 0 0 1 2.83 2.83c1.69 2.85 5.33 20.21 6 38.85c.68 19.1-1.41 47.1-15.15 71.85m-4.3-100.07c-14.15-3-64.1-11-100.3 14.75a81.2 81.2 0 0 0-16 15.07a36 36 0 0 0 39.35 38.44a8 8 0 0 1 8.73 8.73a36 36 0 0 0 38.47 39.34a80.8 80.8 0 0 0 15-16c25.75-36.17 17.75-86.16 14.75-100.33"></svg:path>`,
})
export class PhFishFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFishLightIcon],svg[ph-fish-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M166 76a10 10 0 1 1-10-10a10 10 0 0 1 10 10m49 66.67c-19.17 34.54-55.11 53.08-106.85 55.14l-22.53 52.55A6 6 0 0 1 80.1 254h-.38a6 6 0 0 1-5.39-4.34l-15.11-52.89l-52.87-15.14a6 6 0 0 1-.71-11.29l52.56-22.49C60.28 96.13 78.81 60.2 113.33 41C159.56 15.34 219 30 222.09 31.78a6 6 0 0 1 2.12 2.11c1.79 3.05 16.46 62.49-9.21 108.76Zm-48 29.64A50.06 50.06 0 0 1 130 126a50.09 50.09 0 0 1-46.29-37c-8.46 16.93-13 38-13.63 63a6 6 0 0 1-3.64 5.38l-40.56 17.36l39.85 11.41a6 6 0 0 1 4.12 4.12l11.38 39.85l17.39-40.56a6 6 0 0 1 5.37-3.64c25.01-.59 46.06-5.16 63.01-13.63Zm51-94.53a171 171 0 0 0-3.86-35.92A170.8 170.8 0 0 0 178.25 38H178c-18.52 0-45 3.22-66.67 18.47a83.5 83.5 0 0 0-17.16 16.09a38 38 0 0 0 41.47 41.25a6 6 0 0 1 6.54 6.55a38 38 0 0 0 41.28 41.46a83.1 83.1 0 0 0 16.07-17.07C214.87 123 218.05 96.31 218 77.76Z"></svg:path>`,
})
export class PhFishLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFishSimpleIcon],svg[ph-fish-simple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M168 76a12 12 0 1 1-12-12a12 12 0 0 1 12 12m42 79.08c-15.08 20.84-37.53 34.88-66.7 41.74c-20.08 4.72-43.54 6-70.12 3.93q2.4 17.82 6.72 37.54a8 8 0 0 1-6.1 9.52a7.8 7.8 0 0 1-1.72.19a8 8 0 0 1-7.81-6.29q-4.89-22.36-7.41-42.62q-20.22-2.51-42.58-7.41a8 8 0 0 1 3.43-15.63q19.7 4.32 37.5 6.73c-2.09-26.56-.78-50 3.93-70.06C66 83.55 80.05 61.1 100.88 46c14.12-10.24 39.27-22.36 78.39-22c21.19.21 40.83 4.33 43.81 6.08a8 8 0 0 1 2.83 2.83c1.75 3 5.87 22.59 6.08 43.78c.22 21.62-3.42 52.75-21.99 78.39m-23.76 2.8a112.07 112.07 0 0 1-88.12-88.14C75.64 94 66.7 132.47 71.36 184.6c52.15 4.68 90.64-4.25 114.89-26.72Zm26.2-114.32a175.8 175.8 0 0 0-39.22-3.51c-24.34.64-44.71 6.49-60.76 17.39a96 96 0 0 0 86.09 86.1c10.91-16 16.76-36.42 17.4-60.76a175.8 175.8 0 0 0-3.51-39.22"></svg:path>`,
})
export class PhFishSimpleIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFishSimpleBoldIcon],svg[ph-fish-simple-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M172 76a16 16 0 1 1-16-16a16 16 0 0 1 16 16m64 .66c.32 31.85-7.55 59.77-22.74 80.76c-15.66 21.65-38.89 36.21-69 43.29c-19.2 4.52-41.39 6-66.36 4.38q2.27 15.49 6 32.34a12 12 0 1 1-23.44 5.14q-4.58-20.85-7.08-39.91q-19-2.5-39.87-7.07a12 12 0 0 1 5.14-23.44q16.83 3.67 32.31 6c-1.58-25-.13-47.12 4.38-66.3c7.08-30.14 21.64-53.36 43.27-69c21-15.21 48.92-23.1 80.78-22.77c21.79.21 42 4.42 45.8 6.64a12 12 0 0 1 4.24 4.23c2.14 3.69 6.35 23.92 6.57 45.71m-58.46 83.28a116.08 116.08 0 0 1-81.48-81.48c-9.21 12.16-15.56 27.57-18.93 46c-3 16.39-3.66 35.25-2 56.39c21.16 1.65 40 1 56.42-2c18.45-3.36 33.82-9.71 45.98-18.91ZM209 47c-15.9-3-59.3-8.45-92.26 12.44a92 92 0 0 0 79.81 79.82C217.43 106.32 212 62.92 209 47"></svg:path>`,
})
export class PhFishSimpleBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFishSimpleDuotoneIcon],svg[ph-fish-simple-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M202.43 151.85c-21.26 28.17-62.09 48.24-138.35 40C55.89 115.64 76 74.82 104.15 53.57a104 104 0 0 0 98.28 98.28" opacity=".2"></svg:path><svg:path d="M168 76a12 12 0 1 1-12-12a12 12 0 0 1 12 12m42 79.08c-15.08 20.84-37.53 34.88-66.7 41.74c-20.08 4.72-43.54 6-70.12 3.93q2.4 17.82 6.72 37.54a8 8 0 0 1-6.1 9.52a7.8 7.8 0 0 1-1.72.19a8 8 0 0 1-7.81-6.29q-4.89-22.36-7.41-42.62q-20.22-2.51-42.58-7.41a8 8 0 0 1 3.43-15.63q19.7 4.32 37.5 6.73c-2.09-26.56-.78-50 3.93-70.06C66 83.55 80.05 61.1 100.88 46c14.12-10.24 39.24-22.36 78.39-22c21.19.21 40.83 4.33 43.81 6.08a8 8 0 0 1 2.83 2.83c1.75 3 5.87 22.59 6.08 43.78c.22 21.62-3.42 52.75-21.99 78.39m-23.76 2.8a112.07 112.07 0 0 1-88.12-88.14C75.64 94 66.7 132.47 71.36 184.6c52.15 4.68 90.64-4.25 114.89-26.72Zm26.2-114.32a175.8 175.8 0 0 0-39.22-3.51c-24.34.64-44.71 6.49-60.76 17.39a96 96 0 0 0 86.09 86.1c10.91-16 16.76-36.42 17.4-60.76a175.8 175.8 0 0 0-3.51-39.22"></svg:path></svg:g>`,
})
export class PhFishSimpleDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFishSimpleFillIcon],svg[ph-fish-simple-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M168 76a12 12 0 1 1-12-12a12 12 0 0 1 12 12m42 79.08c-15.08 20.84-37.53 34.88-66.7 41.74c-20.08 4.72-43.54 6-70.12 3.93q2.4 17.82 6.72 37.54a8 8 0 0 1-6.1 9.52a7.8 7.8 0 0 1-1.72.19a8 8 0 0 1-7.81-6.29q-4.89-22.36-7.41-42.62q-20.22-2.51-42.58-7.41a8 8 0 0 1 3.43-15.63q19.7 4.32 37.5 6.73c-2.09-26.56-.78-50 3.93-70.06C66 83.55 80.05 61.1 100.88 46c14.12-10.24 39.26-22.36 78.39-22c21.19.21 40.83 4.33 43.81 6.08a8 8 0 0 1 2.83 2.83c1.75 3 5.87 22.59 6.08 43.78c.22 21.62-3.42 52.75-21.99 78.39m2.43-111.52a175.8 175.8 0 0 0-39.22-3.51c-24.34.64-44.71 6.49-60.76 17.39a96 96 0 0 0 86.09 86.1c10.91-16 16.76-36.42 17.4-60.76a175.8 175.8 0 0 0-3.5-39.22Z"></svg:path>`,
})
export class PhFishSimpleFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFishSimpleLightIcon],svg[ph-fish-simple-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M166 76a10 10 0 1 1-10-10a10 10 0 0 1 10 10m42.38 77.9c-14.79 20.44-36.84 34.22-65.53 41c-20.5 4.81-44.58 6-72 3.68q2.43 19 7.07 40.15a6 6 0 0 1-4.58 7.15a6.3 6.3 0 0 1-1.29.14a6 6 0 0 1-5.85-4.72q-5.07-23.13-7.57-44q-20.8-2.51-43.94-7.57a6 6 0 1 1 2.6-11.73q21.14 4.63 40.12 7.07c-2.35-27.36-1.13-51.41 3.69-71.9c6.74-28.68 20.51-50.73 40.9-65.53c47.55-34.44 116.31-18 120-15.81a5.93 5.93 0 0 1 2.11 2.11c2.23 3.69 18.7 72.39-15.74 119.97Zm-17.94 2.69a110.06 110.06 0 0 1-91-91c-25.13 24.7-35.12 65.24-29.87 120.89c55.62 5.23 96.15-4.75 120.86-29.88Zm23.62-114.66c-12.78-2.84-65.42-12.17-103.69 14.52a97.92 97.92 0 0 0 89.16 89.17c26.68-38.25 17.36-90.9 14.53-103.69"></svg:path>`,
})
export class PhFishSimpleLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFishSimpleThinIcon],svg[ph-fish-simple-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M164 76a8 8 0 1 1-8-8a8 8 0 0 1 8 8m42.77 76.73c-14.5 20-36.17 33.57-64.38 40.2c-20.91 4.91-45.61 6-73.8 3.42q2.46 20.18 7.41 42.79a4 4 0 0 1-3 4.77a4.2 4.2 0 0 1-.86.09a4 4 0 0 1-3.9-3.14a457 457 0 0 1-7.72-45.36q-21.4-2.49-45.33-7.72a4 4 0 1 1 1.67-7.78q22.59 4.95 42.76 7.41c-2.62-28.16-1.48-52.84 3.43-73.73c6.63-28.21 20.14-49.88 40.18-64.39C127.32 31.8 156.61 28 177.53 28h1.71c22 .21 40.12 4.54 41.81 5.53a4 4 0 0 1 1.41 1.47c1 1.68 5.31 19.8 5.53 41.79c.21 20.96-3.3 51.21-21.22 75.94m-12.23 2.43a108 108 0 0 1-93.7-93.7c-27.92 25.08-39 67.62-33.14 126.81c59.2 5.87 101.75-5.2 126.84-33.11m21.2-114.9c-10.84-2.53-67.24-13.57-107.44 15.2a99.92 99.92 0 0 0 92.23 92.24c28.76-40.18 17.74-96.59 15.21-107.44"></svg:path>`,
})
export class PhFishSimpleThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFishThinIcon],svg[ph-fish-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M164 76.05a8 8 0 1 1-8-8a8 8 0 0 1 8 8m49.23 65.68c-19 34.15-54.76 52.35-106.43 54.13l-23 53.72a4 4 0 0 1-3.7 2.42h-.26a4 4 0 0 1-3.59-2.89l-15.41-53.94L6.9 179.73a4 4 0 0 1-.47-7.52l53.72-23C62 97.6 80.16 61.81 114.3 42.85c45.5-25.27 103.78-11 106.76-9.27a4.1 4.1 0 0 1 1.42 1.42c.87 1.48 4.72 16.94 5.42 36.95c.64 18.62-1.38 45.84-14.67 69.78m-40.46 29.77A48 48 0 0 1 132 124a48.05 48.05 0 0 1-47.47-40.71c-10.27 18-15.79 40.95-16.46 68.71a4 4 0 0 1-2.42 3.58l-45.73 19.56l45.26 13a4 4 0 0 1 2.74 2.74l12.93 45.25l19.6-45.72a4 4 0 0 1 3.58-2.43c27.78-.7 50.75-6.21 68.74-16.48M220 77.25a169.6 169.6 0 0 0-4.2-37a169.5 169.5 0 0 0-37-4.2c-18.81-.12-45.93 3-68.2 18.49a85.2 85.2 0 0 0-18.36 17.3a40 40 0 0 0 43.58 44a4 4 0 0 1 4.36 4.36a40 40 0 0 0 44.06 43.56a85.3 85.3 0 0 0 17.26-18.33c8.5-12.27 18.68-34.08 18.5-68.18"></svg:path>`,
})
export class PhFishThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFlagIcon],svg[ph-flag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M42.76 50A8 8 0 0 0 40 56v168a8 8 0 0 0 16 0v-44.23c26.79-21.16 49.87-9.75 76.45 3.41c16.4 8.11 34.06 16.85 53 16.85c13.93 0 28.54-4.75 43.82-18a8 8 0 0 0 2.76-6V56a8 8 0 0 0-13.27-6c-28 24.23-51.72 12.49-79.21-1.12C111.07 34.76 78.78 18.79 42.76 50M216 172.25c-26.79 21.16-49.87 9.74-76.45-3.41c-25-12.35-52.81-26.13-83.55-8.4V59.79c26.79-21.16 49.87-9.75 76.45 3.4c25 12.35 52.82 26.13 83.55 8.4Z"></svg:path>`,
})
export class PhFlagIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFlagBannerIcon],svg[ph-flag-banner-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M238.76 51.73A8 8 0 0 0 232 48H40a8 8 0 0 0-5.66 13.66L76.69 104l-42.35 42.34A8 8 0 0 0 40 160h133.62l-28.84 60.56a8 8 0 1 0 14.44 6.88l80-168a8 8 0 0 0-.46-7.71M181.23 144H59.31l34.35-34.34a8 8 0 0 0 0-11.32L59.31 64h160Z"></svg:path>`,
})
export class PhFlagBannerIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFlagBannerBoldIcon],svg[ph-flag-banner-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M242.15 49.59A12 12 0 0 0 232 44H40a12 12 0 0 0-8.48 20.49L71 104l-39.48 39.51A12 12 0 0 0 40 164h127.28l-26.11 54.84a12 12 0 1 0 21.66 10.32l80-168a12 12 0 0 0-.68-11.57M178.71 140H69l27.52-27.52a12 12 0 0 0 0-17L69 68h144Z"></svg:path>`,
})
export class PhFlagBannerBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFlagBannerDuotoneIcon],svg[ph-flag-banner-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m232 56l-45.71 96H40l48-48l-48-48Z" opacity=".2"></svg:path><svg:path d="M238.76 51.73A8 8 0 0 0 232 48H40a8 8 0 0 0-5.66 13.66L76.69 104l-42.35 42.34A8 8 0 0 0 40 160h133.62l-28.84 60.56a8 8 0 1 0 14.44 6.88l80-168a8 8 0 0 0-.46-7.71M181.23 144H59.31l34.35-34.34a8 8 0 0 0 0-11.32L59.31 64h160Z"></svg:path></svg:g>`,
})
export class PhFlagBannerDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFlagBannerFillIcon],svg[ph-flag-banner-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m239.22 59.44l-45.63 95.82a4 4 0 0 1-.16.34l-34.21 71.84a8 8 0 1 1-14.44-6.88L173.62 160H40a8 8 0 0 1-5.66-13.66L76.69 104L34.34 61.66A8 8 0 0 1 40 48h192a8 8 0 0 1 7.22 11.44"></svg:path>`,
})
export class PhFlagBannerFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFlagBannerFoldIcon],svg[ph-flag-banner-fold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M238.73 43.67A8 8 0 0 0 232 40h-80a8 8 0 0 0-7.28 4.69L135.94 64H28a8 8 0 0 0-5.92 13.38L57.19 116l-35.11 38.62A8 8 0 0 0 28 168h73.09a8 8 0 0 0 7.28-4.69l8.78-19.31h62.43l-34.86 76.69a8 8 0 1 0 14.56 6.62l80-176a8 8 0 0 0-.55-7.64M95.94 152H46.08l27.84-30.62a8 8 0 0 0 0-10.76L46.08 80h82.59Zm90.91-24h-62.43l32.73-72h62.43Z"></svg:path>`,
})
export class PhFlagBannerFoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFlagBannerFoldBoldIcon],svg[ph-flag-banner-fold-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M242.09 41.5A12 12 0 0 0 232 36h-80a12 12 0 0 0-10.92 7l-7.72 17H28a12 12 0 0 0-8.88 20.07L51.78 116l-32.66 35.93A12 12 0 0 0 28 172h73.09a12 12 0 0 0 10.91-7l7.71-17h53.63l-32.28 71a12 12 0 1 0 21.86 10l80-176a12 12 0 0 0-.83-11.5M55.13 148l21.75-23.93a12 12 0 0 0 0-16.14L55.13 84h67.32l-29.09 64Zm129.14-24h-53.63l29.09-64h53.63Z"></svg:path>`,
})
export class PhFlagBannerFoldBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFlagBannerFoldDuotoneIcon],svg[ph-flag-banner-fold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m141.09 72l-40 88H28l40-44l-40-44Z" opacity=".2"></svg:path><svg:path d="M238.73 43.67A8 8 0 0 0 232 40h-80a8 8 0 0 0-7.28 4.69L135.94 64H28a8 8 0 0 0-5.92 13.38L57.19 116l-35.11 38.62A8 8 0 0 0 28 168h73.09a8 8 0 0 0 7.28-4.69l8.78-19.31h62.43l-34.86 76.69a8 8 0 1 0 14.56 6.62l80-176a8 8 0 0 0-.55-7.64M95.94 152H46.08l27.84-30.62a8 8 0 0 0 0-10.76L46.08 80h82.59Zm90.91-24h-62.43l32.73-72h62.43Z"></svg:path></svg:g>`,
})
export class PhFlagBannerFoldDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFlagBannerFoldFillIcon],svg[ph-flag-banner-fold-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m131.79 69.65l-43.63 96a4 4 0 0 1-3.64 2.35H28.23a8.2 8.2 0 0 1-6.58-3.13a8 8 0 0 1 .43-10.25L57.19 116L22.08 77.38a8 8 0 0 1-.43-10.26A8.22 8.22 0 0 1 28.23 64h99.92a4 4 0 0 1 3.64 5.65m105.77-27.41a8.3 8.3 0 0 0-5.79-2.24H168a8 8 0 0 0-7.28 4.69l-42.57 93.65a4 4 0 0 0 3.64 5.66h57.79l-34.86 76.69a8 8 0 1 0 14.56 6.62l80-176a8 8 0 0 0-1.72-9.07"></svg:path>`,
})
export class PhFlagBannerFoldFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFlagBannerFoldLightIcon],svg[ph-flag-banner-fold-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M237 44.75a6 6 0 0 0-5-2.75h-80a6 6 0 0 0-5.46 3.52L137.23 66H28a6 6 0 0 0-4.44 10l36.33 40l-36.33 40A6 6 0 0 0 28 166h73.09a6 6 0 0 0 5.46-3.52l9.31-20.48h66.82l-36.14 79.52a6 6 0 0 0 3 7.94a5.9 5.9 0 0 0 2.46.54a6 6 0 0 0 5.46-3.52l80-176a6 6 0 0 0-.46-5.73M97.23 154H41.56l30.88-34a6 6 0 0 0 0-8.08L41.56 78h90.21Zm90.91-24h-66.82l34.54-76h66.82Z"></svg:path>`,
})
export class PhFlagBannerFoldLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFlagBannerFoldThinIcon],svg[ph-flag-banner-fold-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M235.36 45.83A4 4 0 0 0 232 44h-80a4 4 0 0 0-3.64 2.34L138.52 68H28a4 4 0 0 0-3 6.69L62.59 116L25 157.31a4 4 0 0 0 3 6.69h73.09a4 4 0 0 0 3.64-2.35l9.85-21.65h71.21l-37.43 82.34a4 4 0 0 0 2 5.3a4.1 4.1 0 0 0 1.64.36a4 4 0 0 0 3.64-2.35l80-176a4 4 0 0 0-.28-3.82M98.52 156H37l34-37.31a4 4 0 0 0 0-5.38L37 76h97.84Zm90.9-24h-71.21l36.37-80h71.21Z"></svg:path>`,
})
export class PhFlagBannerFoldThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFlagBannerLightIcon],svg[ph-flag-banner-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M237.07 52.8A6 6 0 0 0 232 50H40a6 6 0 0 0-4.24 10.24L79.51 104l-43.75 43.76A6 6 0 0 0 40 158h136.78l-30.2 63.42a6 6 0 0 0 10.84 5.16l80-168a6 6 0 0 0-.35-5.78M182.5 146h-128l37.75-37.76a6 6 0 0 0 0-8.48L54.49 62h168Z"></svg:path>`,
})
export class PhFlagBannerLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFlagBannerThinIcon],svg[ph-flag-banner-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M235.38 53.86A4 4 0 0 0 232 52H40a4 4 0 0 0-2.83 6.83L82.34 104l-45.17 45.17A4 4 0 0 0 40 156h140l-31.56 66.28a4 4 0 0 0 1.89 5.33a3.9 3.9 0 0 0 1.67.39a4 4 0 0 0 3.61-2.28l80-168a4 4 0 0 0-.23-3.86M183.76 148H49.66l41.17-41.17a4 4 0 0 0 0-5.66L49.66 60h176Z"></svg:path>`,
})
export class PhFlagBannerThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFlagBoldIcon],svg[ph-flag-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M40.14 46.88A12 12 0 0 0 36 56v168a12 12 0 0 0 24 0v-42.28c22.84-17.12 42.1-9.12 70.68 5c16.23 8 34.74 17.2 54.8 17.2c14.72 0 30.28-4.94 46.38-18.88A12 12 0 0 0 236 176V56a12 12 0 0 0-19.86-9.07c-24.71 21.41-44.53 13.31-74.82-1.68c-28.13-13.98-63.15-31.31-101.18 1.63M212 170.26c-22.84 17.13-42.1 9.11-70.68-5C118.16 153.76 90.33 140 60 153.87V61.69c22.84-17.12 42.1-9.12 70.68 5c16.23 8 34.74 17.2 54.8 17.2A63 63 0 0 0 212 78.08Z"></svg:path>`,
})
export class PhFlagBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFlagCheckeredIcon],svg[ph-flag-checkered-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M227.32 48.75a8 8 0 0 0-8.56 1.25c-28 24.22-51.72 12.48-79.21-1.13C111.07 34.76 78.78 18.79 42.76 50A8 8 0 0 0 40 56v168a8 8 0 0 0 16 0v-44.23c26.79-21.16 49.87-9.75 76.45 3.41c28.49 14.09 60.77 30.06 96.79-1.13a8 8 0 0 0 2.76-6V56a8 8 0 0 0-4.68-7.25M216 71.6v40.65c-14 11.06-27 13.22-40 10.88V79.34a60.05 60.05 0 0 0 40-7.74m-56 3.76v43c-6.66-2.67-13.43-6-20.45-9.48c-8.82-4.37-18-8.91-27.55-12.18v-43c6.66 2.66 13.43 6 20.45 9.48c8.82 4.37 18.01 8.91 27.55 12.18M96 48.91v43.78a60.06 60.06 0 0 0-40 7.75V59.78c14-11.06 27-13.21 40-10.87M86.58 152A60.06 60.06 0 0 0 56 160.43v-40.65c14-11.06 27-13.22 40-10.88v43.8a65.6 65.6 0 0 0-9.42-.7m25.42 4.67v-43c6.66 2.66 13.43 6 20.45 9.48c8.82 4.37 18 8.9 27.55 12.17v43c-6.66-2.67-13.43-6-20.45-9.48c-8.82-4.37-18.01-8.9-27.55-12.17m64 26.45v-43.8a65.6 65.6 0 0 0 9.42.72a60.1 60.1 0 0 0 30.58-8.47v40.68c-14 11.06-27 13.21-40 10.87"></svg:path>`,
})
export class PhFlagCheckeredIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFlagCheckeredBoldIcon],svg[ph-flag-checkered-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M229 45a12 12 0 0 0-12.85 1.84c-24.71 21.41-44.53 13.31-74.82-1.68c-28.14-13.89-63.16-31.22-101.19 1.72A12 12 0 0 0 36 56v168a12 12 0 0 0 24 0v-42.29c22.84-17.13 42.1-9.11 70.68 5c16.23 8 34.74 17.2 54.8 17.2c14.72 0 30.28-4.94 46.38-18.88A12 12 0 0 0 236 176V56a12 12 0 0 0-7-11m-43.52 38.91A63 63 0 0 0 212 78.08v32.15c-11 8.26-21.2 10.67-32 9.37V83.66c1.81.15 3.64.25 5.48.25M156 78.08v34.09c-4.64-2-9.5-4.4-14.68-7A255 255 0 0 0 116 93.83V59.75c4.64 2 9.5 4.4 14.68 7A253 253 0 0 0 156 78.08M92 52.32v35.92a63.33 63.33 0 0 0-32 5.61V61.68C71 53.42 81.2 51 92 52.32M86.52 148A63 63 0 0 0 60 153.86V121.7c11-8.25 21.2-10.66 32-9.36v35.94c-1.81-.15-3.64-.28-5.48-.28m29.48 5.86v-34.09c4.64 2 9.5 4.4 14.68 7A253 253 0 0 0 156 138.1v34.09c-4.64-2.05-9.5-4.4-14.68-7A251 251 0 0 0 116 153.86m64 25.76v-35.94c1.81.14 3.64.24 5.48.24a62.85 62.85 0 0 0 26.52-5.85v32.19c-11 8.26-21.2 10.66-32 9.36"></svg:path>`,
})
export class PhFlagCheckeredBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFlagCheckeredDuotoneIcon],svg[ph-flag-checkered-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 56v60c-19.89 17.23-38.23 18.39-56 13.48v-60c17.76 4.91 36.11 3.75 56-13.48m-120 46.52v-60C86.24 37.61 67.89 38.77 48 56v60c19.89-17.22 38.23-18.39 56-13.48v60c21.62 6 42.38 21 64 27v-60c-21.62-6-42.38-21-64-27" opacity=".2"></svg:path><svg:path d="M227.32 48.75a8 8 0 0 0-8.56 1.25c-28 24.22-51.72 12.48-79.21-1.13C111.07 34.76 78.78 18.79 42.76 50A8 8 0 0 0 40 56v168a8 8 0 0 0 16 0v-44.23c26.79-21.16 49.87-9.75 76.45 3.41c28.49 14.09 60.77 30.06 96.79-1.13a8 8 0 0 0 2.76-6V56a8 8 0 0 0-4.68-7.25M216 71.6v40.65c-14 11.06-27 13.22-40 10.88V79.34a60.05 60.05 0 0 0 40-7.74m-56 3.76v43c-6.66-2.67-13.43-6-20.45-9.48c-8.82-4.37-18-8.91-27.55-12.18v-43c6.66 2.66 13.43 6 20.45 9.48c8.82 4.37 18.01 8.91 27.55 12.18M96 48.91v43.78a60.06 60.06 0 0 0-40 7.75V59.78c14-11.06 27-13.21 40-10.87M86.58 152A60.06 60.06 0 0 0 56 160.43v-40.65c14-11.06 27-13.22 40-10.88v43.8a65.6 65.6 0 0 0-9.42-.7m25.42 4.67v-43c6.66 2.66 13.43 6 20.45 9.48c8.82 4.37 18 8.9 27.55 12.17v43c-6.66-2.67-13.43-6-20.45-9.48c-8.82-4.37-18.01-8.9-27.55-12.17m64 26.45v-43.8a65.6 65.6 0 0 0 9.42.72a60.1 60.1 0 0 0 30.58-8.47v40.68c-14 11.06-27 13.21-40 10.87"></svg:path></svg:g>`,
})
export class PhFlagCheckeredDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFlagCheckeredFillIcon],svg[ph-flag-checkered-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M227.32 48.75a8 8 0 0 0-8.56 1.25c-28 24.22-51.72 12.48-79.21-1.13C111.07 34.76 78.78 18.79 42.76 50A8 8 0 0 0 40 56v168a8 8 0 0 0 16 0v-44.23c26.79-21.16 49.87-9.75 76.45 3.41c16.4 8.11 34.06 16.85 53 16.85c13.93 0 28.54-4.75 43.82-18a8 8 0 0 0 2.76-6V56a8 8 0 0 0-4.71-7.25M56 160.44v-50.56c16.85-11.28 32.64-11.59 48-7.34v51.74c-15.13-3.81-31.13-3.57-48 6.16m48-109.57c9.25 2.83 18.61 7.45 28.45 12.32c11.26 5.57 23.11 11.43 35.55 14.56v51.74c15.35 4.25 31.14 3.94 48-7.35v50.11c-16.87 13.32-32.27 13.72-48 8.91v-51.67c-21.62-6-42.38-21-64-26.95Z"></svg:path>`,
})
export class PhFlagCheckeredFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFlagCheckeredLightIcon],svg[ph-flag-checkered-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M226.49 50.5a6 6 0 0 0-6.42.92c-29 25.11-53.28 13.08-81.41-.84c-27.92-13.82-59.57-29.49-94.59.84A6 6 0 0 0 42 56v168a6 6 0 0 0 12 0v-45.22c28.08-22.79 51.88-11 79.34 2.59c27.92 13.82 59.58 29.48 94.59-.85A6 6 0 0 0 230 176V56a6 6 0 0 0-3.51-5.5M218 68v45.2c-15.53 12.6-29.75 14.65-44 11.65V76.88c14 2.45 28.64.9 44-8.88m-56 5.87v47.4c-7.6-2.85-15.31-6.66-23.34-10.64c-9.16-4.53-18.71-9.26-28.66-12.5V50.71a255 255 0 0 1 23.34 10.63c9.16 4.53 18.71 9.25 28.66 12.49ZM98 47.13V95c-14-2.45-28.64-.89-44 8.93V58.75c15.53-12.6 29.75-14.62 44-11.62M86.63 154c-10.5 0-21.39 2.79-32.63 10v-45.21c15.53-12.61 29.75-14.65 44-11.65v47.93A66.3 66.3 0 0 0 86.63 154m23.37 4.11v-47.39c7.6 2.84 15.31 6.66 23.34 10.63c9.16 4.53 18.71 9.26 28.66 12.5v47.39c-7.6-2.85-15.31-6.66-23.34-10.63c-9.16-4.54-18.66-9.26-28.66-12.5m64 26.7v-47.92a66.3 66.3 0 0 0 11.37 1c10.5 0 21.39-2.78 32.63-10v45.24c-15.53 12.66-29.75 14.68-44 11.68"></svg:path>`,
})
export class PhFlagCheckeredLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFlagCheckeredThinIcon],svg[ph-flag-checkered-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M225.66 52.44a4 4 0 0 0-4.28.61c-30 26-56 13.08-83.61-.56c-28.7-14.2-58.38-28.88-92.39.56a4 4 0 0 0-1.38 3V224a4 4 0 0 0 8 0v-46.13c29.41-24.39 55.08-11.69 82.23 1.74c28.7 14.19 58.38 28.88 92.39-.56a4 4 0 0 0 1.38-3v-120a4 4 0 0 0-2.34-3.61M220 64.32v49.88c-16.91 14-32.58 15.79-48 12.2V74.67c15.24 3.23 31.09 1.7 48-10.35m-56 8.23v51.54c-8.7-3-17.39-7.25-26.23-11.62c-9.76-4.84-19.64-9.72-29.77-12.91V48c8.7 3 17.39 7.25 26.23 11.62c9.77 4.87 19.64 9.75 29.77 12.93m-64-26.82v51.71c-15.24-3.23-31.09-1.69-48 10.37V57.93c16.91-14.03 32.58-15.78 48-12.2M52 167.78V117.9c16.91-14 32.58-15.79 48-12.2v51.72A64.5 64.5 0 0 0 86.64 156C75.52 156 64 159.2 52 167.78m56-8.23V108c8.71 3 17.39 7.25 26.23 11.62c9.76 4.83 19.64 9.71 29.77 12.89v51.54c-8.71-3-17.39-7.25-26.23-11.62c-9.77-4.82-19.64-9.7-29.77-12.88m64 26.82v-51.72a64.5 64.5 0 0 0 13.36 1.47c11.12 0 22.61-3.27 34.64-11.85v49.9c-16.91 14.02-32.58 15.83-48 12.2"></svg:path>`,
})
export class PhFlagCheckeredThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFlagDuotoneIcon],svg[ph-flag-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 56v120c-64 55.43-112-55.43-176 0V56c64-55.43 112 55.43 176 0" opacity=".2"></svg:path><svg:path d="M42.76 50A8 8 0 0 0 40 56v168a8 8 0 0 0 16 0v-44.23c26.79-21.16 49.87-9.75 76.45 3.41c16.4 8.11 34.06 16.85 53 16.85c13.93 0 28.54-4.75 43.82-18a8 8 0 0 0 2.76-6V56a8 8 0 0 0-13.27-6c-28 24.23-51.72 12.49-79.21-1.12C111.07 34.76 78.78 18.79 42.76 50M216 172.25c-26.79 21.16-49.87 9.74-76.45-3.41c-25-12.35-52.81-26.13-83.55-8.4V59.79c26.79-21.16 49.87-9.75 76.45 3.4c25 12.35 52.82 26.13 83.55 8.4Z"></svg:path></svg:g>`,
})
export class PhFlagDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFlagFillIcon],svg[ph-flag-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 56v120a8 8 0 0 1-2.76 6c-15.28 13.23-29.89 18-43.82 18c-18.91 0-36.57-8.74-53-16.85C105.87 170 82.79 158.61 56 179.77V224a8 8 0 0 1-16 0V56a8 8 0 0 1 2.77-6c36-31.18 68.31-15.21 96.79-1.12C167 62.46 190.79 74.2 218.76 50A8 8 0 0 1 232 56"></svg:path>`,
})
export class PhFlagFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFlagLightIcon],svg[ph-flag-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M44.08 51.37A6 6 0 0 0 42 55.9V224a6 6 0 0 0 12 0v-45.22c28.08-22.79 51.88-11 79.34 2.57c16.12 8 33.49 16.58 52 16.58c13.57 0 27.76-4.6 42.56-17.42A6 6 0 0 0 230 176V55.9a6 6 0 0 0-9.93-4.54c-29 25.12-53.28 13.09-81.41-.84c-27.89-13.81-59.66-29.36-94.58.85M218 173.17c-28.08 22.8-51.88 11-79.34-2.58C113.4 158.08 85.09 144.07 54 164V58.72c28.08-22.8 51.88-11 79.34 2.56C158.6 73.79 186.91 87.8 218 67.91Z"></svg:path>`,
})
export class PhFlagLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFlagPennantIcon],svg[ph-flag-pennant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m242.63 96.44l-184-64A8 8 0 0 0 48 40v176a8 8 0 0 0 16 0v-42.31l178.63-62.13a8 8 0 0 0 0-15.12M64 156.75V51.25L215.65 104Z"></svg:path>`,
})
export class PhFlagPennantIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFlagPennantBoldIcon],svg[ph-flag-pennant-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m243.94 92.67l-184-64A12 12 0 0 0 44 40v176a12 12 0 0 0 24 0v-39.47l175.94-61.2a12 12 0 0 0 0-22.66M68 151.12V56.88L203.47 104Z"></svg:path>`,
})
export class PhFlagPennantBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFlagPennantDuotoneIcon],svg[ph-flag-pennant-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M240 104L56 168V40Z" opacity=".2"></svg:path><svg:path d="m242.63 96.44l-184-64A8 8 0 0 0 48 40v176a8 8 0 0 0 16 0v-42.31l178.63-62.13a8 8 0 0 0 0-15.12M64 156.75V51.25L215.65 104Z"></svg:path></svg:g>`,
})
export class PhFlagPennantDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFlagPennantFillIcon],svg[ph-flag-pennant-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M248 104a8 8 0 0 1-5.37 7.56L64 173.69V216a8 8 0 0 1-16 0V40a8 8 0 0 1 10.63-7.56l184 64A8 8 0 0 1 248 104"></svg:path>`,
})
export class PhFlagPennantFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFlagPennantLightIcon],svg[ph-flag-pennant-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m242 98.33l-184-64A6 6 0 0 0 50 40v176a6 6 0 0 0 12 0v-43.73l180-62.6a6 6 0 0 0 0-11.34M62 159.56V48.44L221.74 104Z"></svg:path>`,
})
export class PhFlagPennantLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFlagPennantThinIcon],svg[ph-flag-pennant-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m241.31 100.22l-184-64A4 4 0 0 0 52 40v176a4 4 0 0 0 8 0v-45.16l181.31-63.06a4 4 0 0 0 0-7.56M60 162.37V45.63L227.82 104Z"></svg:path>`,
})
export class PhFlagPennantThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFlagThinIcon],svg[ph-flag-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M45.39 53.06a4 4 0 0 0-1.39 3V224a4 4 0 0 0 8 0v-46.13c29.41-24.39 55.08-11.69 82.23 1.73c16.5 8.17 33.33 16.5 51.13 16.5c13.14 0 26.81-4.55 41.26-17.06a4 4 0 0 0 1.38-3v-120a4 4 0 0 0-6.62-3c-30 26-56 13.07-83.61-.57c-28.7-14.19-58.37-28.85-92.38.59M220 174.17c-29.41 24.4-55.08 11.7-82.23-1.73c-26.82-13.27-54.5-27-85.77-4.66V57.92c29.41-24.4 55.08-11.7 82.23 1.73c26.82 13.27 54.5 27 85.77 4.66Z"></svg:path>`,
})
export class PhFlagThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFlameIcon],svg[ph-flame-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M173.79 51.48a221.3 221.3 0 0 0-41.67-34.34a8 8 0 0 0-8.24 0a221.3 221.3 0 0 0-41.67 34.34C54.59 80.48 40 112.47 40 144a88 88 0 0 0 176 0c0-31.53-14.59-63.52-42.21-92.52M96 184c0-27.67 22.53-47.28 32-54.3c9.48 7 32 26.63 32 54.3a32 32 0 0 1-64 0m77.27 15.93A47.8 47.8 0 0 0 176 184c0-44-42.09-69.79-43.88-70.86a8 8 0 0 0-8.24 0C122.09 114.21 80 140 80 184a47.8 47.8 0 0 0 2.73 15.93A71.88 71.88 0 0 1 56 144c0-34.41 20.4-63.15 37.52-81.19A216.2 216.2 0 0 1 128 33.54a215.8 215.8 0 0 1 34.48 29.27C193.49 95.5 200 125 200 144a71.88 71.88 0 0 1-26.73 55.93"></svg:path>`,
})
export class PhFlameIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFlameBoldIcon],svg[ph-flame-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M176.69 48.72a225 225 0 0 0-42.52-35a12 12 0 0 0-12.34 0a225 225 0 0 0-42.52 35C51 78.47 36 111.42 36 144a92 92 0 0 0 184 0c0-32.58-15-65.53-43.31-95.28M100 184c0-13.33 5.53-26.26 16.45-38.45A93 93 0 0 1 128 134.72a93 93 0 0 1 11.55 10.83C150.47 157.74 156 170.67 156 184a28 28 0 0 1-56 0m79.84 3.94c.09-1.3.16-2.61.16-3.94c0-46.26-44-73.17-45.83-74.29a12 12 0 0 0-12.34 0C120 110.83 76 137.74 76 184c0 1.33.07 2.64.16 3.94A67.68 67.68 0 0 1 60 144c0-26.52 12.21-52.86 36.28-78.3A213 213 0 0 1 128 38.39c17.82 12.47 68 52.32 68 105.61a67.68 67.68 0 0 1-16.16 43.94"></svg:path>`,
})
export class PhFlameBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFlameDuotoneIcon],svg[ph-flame-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 144a80 80 0 0 1-77.94 80A40 40 0 0 0 168 184c0-40-40-64-40-64s-40 24-40 64a40 40 0 0 0 37.94 40A80 80 0 0 1 48 144c0-72 80-120 80-120s80 48 80 120" opacity=".2"></svg:path><svg:path d="M173.79 51.48a221.3 221.3 0 0 0-41.67-34.34a8 8 0 0 0-8.24 0a221.3 221.3 0 0 0-41.67 34.34C54.59 80.48 40 112.47 40 144a88 88 0 0 0 176 0c0-31.53-14.59-63.52-42.21-92.52M96 184c0-27.67 22.53-47.28 32-54.3c9.48 7 32 26.63 32 54.3a32 32 0 0 1-64 0m77.27 15.93A47.8 47.8 0 0 0 176 184c0-44-42.09-69.79-43.88-70.86a8 8 0 0 0-8.24 0C122.09 114.21 80 140 80 184a47.8 47.8 0 0 0 2.73 15.93A71.88 71.88 0 0 1 56 144c0-34.41 20.4-63.15 37.52-81.19A216.2 216.2 0 0 1 128 33.54a215.8 215.8 0 0 1 34.48 29.27C193.49 95.5 200 125 200 144a71.88 71.88 0 0 1-26.73 55.93"></svg:path></svg:g>`,
})
export class PhFlameDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFlameFillIcon],svg[ph-flame-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M173.79 51.48a221.3 221.3 0 0 0-41.67-34.34a8 8 0 0 0-8.24 0a221.3 221.3 0 0 0-41.67 34.34C54.59 80.48 40 112.47 40 144a88 88 0 0 0 176 0c0-31.53-14.59-63.52-42.21-92.52M96 184c0-27.67 22.53-47.28 32-54.3c9.48 7 32 26.63 32 54.3a32 32 0 0 1-64 0"></svg:path>`,
})
export class PhFlameFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFlameLightIcon],svg[ph-flame-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M172.34 52.86a218.3 218.3 0 0 0-41.25-34a6 6 0 0 0-6.18 0a218.3 218.3 0 0 0-41.25 34C56.4 81.48 42 113 42 144a86 86 0 0 0 172 0c0-31-14.4-62.52-41.66-91.14M94 184c0-29.8 25.11-50.41 34-56.78c8.91 6.35 34 26.87 34 56.78a34.05 34.05 0 0 1-32.25 34h-3.5A34.05 34.05 0 0 1 94 184m74.42 21.94A45.7 45.7 0 0 0 174 184c0-42.9-41.16-68.09-42.91-69.14a6 6 0 0 0-6.18 0C123.16 115.91 82 141.1 82 184a45.7 45.7 0 0 0 5.58 21.94A74 74 0 0 1 54 144c0-59.83 59.62-103.26 74-112.86c14.39 9.6 74 53 74 112.86a74 74 0 0 1-33.58 61.94"></svg:path>`,
})
export class PhFlameLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFlameThinIcon],svg[ph-flame-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M170.9 54.24a216.8 216.8 0 0 0-40.84-33.67a4 4 0 0 0-4.12 0A216.8 216.8 0 0 0 85.1 54.24C58.21 82.48 44 113.51 44 144a84 84 0 0 0 168 0c0-30.49-14.21-61.52-41.1-89.76M92 184c0-32.11 28.07-53.75 36-59.21c7.93 5.47 36 27.1 36 59.21a36 36 0 0 1-72 0m69.94 28A43.82 43.82 0 0 0 172 184c0-41.78-40.23-66.4-41.94-67.43a4 4 0 0 0-4.12 0C124.23 117.6 84 142.22 84 184a43.82 43.82 0 0 0 10.06 28A76.07 76.07 0 0 1 52 144c0-62.48 63.64-107.17 76-115.26c12.36 8.09 76 52.78 76 115.26a76.07 76.07 0 0 1-42.06 68"></svg:path>`,
})
export class PhFlameThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFlashlightIcon],svg[ph-flashlight-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M184 16H72a16 16 0 0 0-16 16v45.33a16.12 16.12 0 0 0 3.2 9.6L80 114.67V224a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16V114.67l20.8-27.74a16.12 16.12 0 0 0 3.2-9.6V32a16 16 0 0 0-16-16M72 32h112v24H72zm91.2 73.07a16.12 16.12 0 0 0-3.2 9.6V224H96V114.67a16.12 16.12 0 0 0-3.2-9.6L72 77.33V72h112v5.33ZM136 120v32a8 8 0 0 1-16 0v-32a8 8 0 0 1 16 0"></svg:path>`,
})
export class PhFlashlightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFlashlightBoldIcon],svg[ph-flashlight-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M184 12H72a20 20 0 0 0-20 20v45.33a20.12 20.12 0 0 0 4 12L76 116v108a20 20 0 0 0 20 20h64a20 20 0 0 0 20-20V116l20-26.67a20.12 20.12 0 0 0 4-12V32a20 20 0 0 0-20-20m-4 24v16H76V36Zm-20 66.67a20.12 20.12 0 0 0-4 12V220h-56V114.67a20.12 20.12 0 0 0-4-12L76 76h104ZM140 120v32a12 12 0 0 1-24 0v-32a12 12 0 0 1 24 0"></svg:path>`,
})
export class PhFlashlightBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFlashlightDuotoneIcon],svg[ph-flashlight-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M192 64v13.33a8 8 0 0 1-1.6 4.8l-20.8 27.74a8 8 0 0 0-1.6 4.8V224a8 8 0 0 1-8 8H96a8 8 0 0 1-8-8V114.67a8 8 0 0 0-1.6-4.8L65.6 82.13a8 8 0 0 1-1.6-4.8V64Z" opacity=".2"></svg:path><svg:path d="M184 16H72a16 16 0 0 0-16 16v45.33a16.12 16.12 0 0 0 3.2 9.6L80 114.67V224a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16V114.67l20.8-27.74a16.12 16.12 0 0 0 3.2-9.6V32a16 16 0 0 0-16-16M72 32h112v24H72zm91.2 73.07a16.12 16.12 0 0 0-3.2 9.6V224H96V114.67a16.12 16.12 0 0 0-3.2-9.6L72 77.33V72h112v5.33ZM136 120v32a8 8 0 0 1-16 0v-32a8 8 0 0 1 16 0"></svg:path></svg:g>`,
})
export class PhFlashlightDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFlashlightFillIcon],svg[ph-flashlight-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M184 16H72a16 16 0 0 0-16 16v45.33a16.12 16.12 0 0 0 3.2 9.6L80 114.67V224a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16V114.67l20.8-27.74a16.12 16.12 0 0 0 3.2-9.6V32a16 16 0 0 0-16-16m-48 136a8 8 0 0 1-16 0v-32a8 8 0 0 1 16 0ZM72 56V32h112v24Z"></svg:path>`,
})
export class PhFlashlightFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFlashlightLightIcon],svg[ph-flashlight-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M184 18H72a14 14 0 0 0-14 14v45.33a14 14 0 0 0 2.8 8.4l20.8 27.73a2 2 0 0 1 .4 1.21V224a14 14 0 0 0 14 14h64a14 14 0 0 0 14-14V114.67a2 2 0 0 1 .4-1.2l20.8-27.74a14 14 0 0 0 2.8-8.4V32a14 14 0 0 0-14-14M72 30h112a2 2 0 0 1 2 2v26H70V32a2 2 0 0 1 2-2m113.6 48.53l-20.8 27.74a14 14 0 0 0-2.8 8.4V224a2 2 0 0 1-2 2H96a2 2 0 0 1-2-2V114.67a14 14 0 0 0-2.8-8.4L70.4 78.54a2 2 0 0 1-.4-1.21V70h116v7.33a2 2 0 0 1-.4 1.2M134 120v32a6 6 0 0 1-12 0v-32a6 6 0 0 1 12 0"></svg:path>`,
})
export class PhFlashlightLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFlashlightThinIcon],svg[ph-flashlight-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M184 20H72a12 12 0 0 0-12 12v45.33a12.05 12.05 0 0 0 2.4 7.2l20.8 27.74a4 4 0 0 1 .8 2.4V224a12 12 0 0 0 12 12h64a12 12 0 0 0 12-12V114.67a4 4 0 0 1 .8-2.4l20.8-27.74a12.05 12.05 0 0 0 2.4-7.2V32a12 12 0 0 0-12-12M72 28h112a4 4 0 0 1 4 4v28H68V32a4 4 0 0 1 4-4m115.2 51.73l-20.8 27.74a12.05 12.05 0 0 0-2.4 7.2V224a4 4 0 0 1-4 4H96a4 4 0 0 1-4-4V114.67a12.05 12.05 0 0 0-2.4-7.2L68.8 79.73a4 4 0 0 1-.8-2.4V68h120v9.33a4 4 0 0 1-.8 2.4M132 120v32a4 4 0 0 1-8 0v-32a4 4 0 0 1 8 0"></svg:path>`,
})
export class PhFlashlightThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFlaskIcon],svg[ph-flask-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M221.69 199.77L160 96.92V40h8a8 8 0 0 0 0-16H88a8 8 0 0 0 0 16h8v56.92L34.31 199.77A16 16 0 0 0 48 224h160a16 16 0 0 0 13.72-24.23Zm-110.83-96.52a7.93 7.93 0 0 0 1.14-4.11V40h32v59.14a7.93 7.93 0 0 0 1.14 4.11L183.36 167c-12 2.37-29.07 1.37-51.75-10.11c-15.91-8.05-31.05-12.32-45.22-12.81ZM48 208l28.54-47.58c14.25-1.74 30.31 1.85 47.82 10.72c19 9.61 35 12.88 48 12.88a69.9 69.9 0 0 0 19.55-2.7L208 208Z"></svg:path>`,
})
export class PhFlaskIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFlaskBoldIcon],svg[ph-flask-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M225.15 197.71L164 95.81V44h4a12 12 0 0 0 0-24H88a12 12 0 0 0 0 24h4v51.81l-61.15 101.9A20 20 0 0 0 48 228h160a20 20 0 0 0 17.15-30.29M140 44v55.14a12 12 0 0 0 1.71 6.17l35.13 58.54c-10.79.86-25.15-1.31-43.42-10.56c-14-7.08-27.46-11.33-40.27-12.76l21.14-35.22a12 12 0 0 0 1.71-6.17V44ZM55.06 204L79 164.19c13-1.11 27.62 2.42 43.62 10.52c19.61 9.92 36.25 13.31 49.85 13.31a75.4 75.4 0 0 0 17.64-2.02l10.83 18Z"></svg:path>`,
})
export class PhFlaskBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFlaskDuotoneIcon],svg[ph-flask-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 216H48a8 8 0 0 1-6.86-12.12l30.48-50.8c13.23-2.48 32-1.41 56.37 10.92c32.25 16.33 54.75 12.91 67.5 7.65l19.34 32.23A8 8 0 0 1 208 216" opacity=".2"></svg:path><svg:path d="M221.69 199.77L160 96.92V40h8a8 8 0 0 0 0-16H88a8 8 0 0 0 0 16h8v56.92L34.31 199.77A16 16 0 0 0 48 224h160a16 16 0 0 0 13.72-24.23Zm-110.83-96.52a7.93 7.93 0 0 0 1.14-4.11V40h32v59.14a7.93 7.93 0 0 0 1.14 4.11L183.36 167c-12 2.37-29.07 1.37-51.75-10.11c-15.91-8.05-31.05-12.32-45.22-12.81ZM48 208l28.54-47.58c14.25-1.73 30.31 1.85 47.82 10.72c19 9.61 35 12.88 48 12.88a69.9 69.9 0 0 0 19.55-2.7L208 208Z"></svg:path></svg:g>`,
})
export class PhFlaskDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFlaskFillIcon],svg[ph-flask-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M221.69 199.77L160 96.92V40h8a8 8 0 0 0 0-16H88a8 8 0 0 0 0 16h8v56.92L34.31 199.77A16 16 0 0 0 48 224h160a16 16 0 0 0 13.72-24.23Zm-90.08-42.91c-15.91-8.05-31.05-12.32-45.22-12.81l24.47-40.8a7.93 7.93 0 0 0 1.14-4.11V40h32v59.14a7.93 7.93 0 0 0 1.14 4.11L183.36 167c-11.96 2.34-29.07 1.34-51.75-10.14"></svg:path>`,
})
export class PhFlaskFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFlaskLightIcon],svg[ph-flask-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M220 200.8L158 97.48V38h10a6 6 0 0 0 0-12H88a6 6 0 0 0 0 12h10v59.48L36 200.8A14 14 0 0 0 48 222h160a14 14 0 0 0 12-21.2m-110.85-98.57a6 6 0 0 0 .85-3.09V38h36v61.14a6 6 0 0 0 .85 3.09l39.65 66.08c-12.41 3.16-30.86 3-55.79-9.66c-16.94-8.58-33-12.8-47.83-12.64ZM209.72 209a2 2 0 0 1-1.74 1H48a2 2 0 0 1-1.71-3l29-48.41c14.89-2.08 31.68 1.55 49.94 10.79C144 178.8 159.67 182 172.42 182a67.9 67.9 0 0 0 20.47-3l16.8 28a2 2 0 0 1 .03 2"></svg:path>`,
})
export class PhFlaskLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFlaskThinIcon],svg[ph-flask-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M218.27 201.83L156 98V36h12a4 4 0 0 0 0-8H88a4 4 0 0 0 0 8h12v62L37.73 201.83A12 12 0 0 0 48 220h160a12 12 0 0 0 10.29-18.17ZM107.43 101.2a4.07 4.07 0 0 0 .57-2.06V36h40v63.14a4.07 4.07 0 0 0 .57 2.06l41 68.33c-12.76 3.94-32.54 4.68-59.75-9.1c-18-9.14-35-13.24-50.54-12.29ZM211.46 210a3.94 3.94 0 0 1-3.48 2H48a4 4 0 0 1-3.43-6.06l29.53-49.21c15.54-2.43 33.05 1.21 52.07 10.84C144.54 176.86 160 180 172.42 180a65 65 0 0 0 21.36-3.46l17.63 29.38a3.92 3.92 0 0 1 .05 4.08"></svg:path>`,
})
export class PhFlaskThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFlipHorizontalIcon],svg[ph-flip-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M107.18 24.33a15.86 15.86 0 0 0-17.92 9.45l-.06.14l-64 159.93A16 16 0 0 0 40 216h64a16 16 0 0 0 16-16V40a15.85 15.85 0 0 0-12.82-15.67M104 200H40l.06-.15L104 40Zm126.77-6.15l-64-159.93l-.06-.14A16 16 0 0 0 136 40v160a16 16 0 0 0 16 16h64a16 16 0 0 0 14.78-22.15ZM152 200V40l63.93 159.84l.06.15Z"></svg:path>`,
})
export class PhFlipHorizontalIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFlipHorizontalBoldIcon],svg[ph-flip-horizontal-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M104 20.41a19.83 19.83 0 0 0-22.4 11.81c-.07.15-.13.31-.19.46L21.47 192.49A20 20 0 0 0 40 220h60a20 20 0 0 0 20-20V40a19.83 19.83 0 0 0-16-19.59M96 196H45.79L96 62.09Zm138.53-3.51L174.61 32.68c-.06-.15-.12-.31-.19-.46A20 20 0 0 0 136 40v160a20 20 0 0 0 20 20h60a20 20 0 0 0 18.54-27.51ZM160 196V62.09L210.21 196Z"></svg:path>`,
})
export class PhFlipHorizontalBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFlipHorizontalDuotoneIcon],svg[ph-flip-horizontal-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M112 40v160a8 8 0 0 1-8 8H40a8 8 0 0 1-7.37-11.12l64-160C100 28.86 112 31.29 112 40" opacity=".2"></svg:path><svg:path d="M107.18 24.33a15.86 15.86 0 0 0-17.92 9.45l-.06.14l-64 159.93A16 16 0 0 0 40 216h64a16 16 0 0 0 16-16V40a15.85 15.85 0 0 0-12.82-15.67M104 200H40l.06-.15L104 40Zm126.77-6.15l-64-159.93l-.06-.14A16 16 0 0 0 136 40v160a16 16 0 0 0 16 16h64a16 16 0 0 0 14.78-22.15ZM152 200V40l63.93 159.84l.06.15Z"></svg:path></svg:g>`,
})
export class PhFlipHorizontalDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFlipHorizontalFillIcon],svg[ph-flip-horizontal-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M120 40v160a16 16 0 0 1-16 16H40a16 16 0 0 1-14.78-22.15l64-159.93l.06-.14A16 16 0 0 1 120 40m109.33 168.84A16 16 0 0 1 216 216h-64a16 16 0 0 1-16-16V40a16 16 0 0 1 30.74-6.23l.06.14l64 159.93a16 16 0 0 1-1.47 15M216 200l-.06-.15L152 40v160Z"></svg:path>`,
})
export class PhFlipHorizontalFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFlipHorizontalLightIcon],svg[ph-flip-horizontal-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M106.78 26.29a13.88 13.88 0 0 0-15.68 8.26s0 .08 0 .12l-64 159.94A14 14 0 0 0 40 214h64a14 14 0 0 0 14-14V40a13.87 13.87 0 0 0-11.22-13.71M106 200a2 2 0 0 1-2 2H40a2 2 0 0 1-1.85-2.78l.05-.11l64-159.92a2 2 0 0 1 3.8.81Zm122.92-5.39l-64-159.94v-.12A14 14 0 0 0 138 40v160a14 14 0 0 0 14 14h64a14 14 0 0 0 12.93-19.39Zm-11.26 6.49a1.93 1.93 0 0 1-1.67.9H152a2 2 0 0 1-2-2V40a1.82 1.82 0 0 1 1.6-2a2.6 2.6 0 0 1 .54-.06a1.76 1.76 0 0 1 1.69 1.2l64 159.92l.05.11a2 2 0 0 1-.22 1.93"></svg:path>`,
})
export class PhFlipHorizontalLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFlipHorizontalThinIcon],svg[ph-flip-horizontal-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M106.38 28.26a11.76 11.76 0 0 0-13.44 7.08v.08L29 195.32A12 12 0 0 0 40 212h64a12 12 0 0 0 12-12V40a11.75 11.75 0 0 0-9.62-11.74M108 200a4 4 0 0 1-4 4H40a3.93 3.93 0 0 1-3.33-1.79a4 4 0 0 1-.32-3.84l64-159.94A4 4 0 0 1 108 40Zm119.07-4.6l-64-160v-.08A12 12 0 0 0 140 40v160a12 12 0 0 0 12 12h64a12 12 0 0 0 11.08-16.6Zm-7.75 6.81A3.93 3.93 0 0 1 216 204h-64a4 4 0 0 1-4-4V40a3.81 3.81 0 0 1 3.2-3.92a4.6 4.6 0 0 1 .9-.09a3.69 3.69 0 0 1 3.57 2.42l64 160a3.9 3.9 0 0 1-.35 3.8"></svg:path>`,
})
export class PhFlipHorizontalThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFlipVerticalIcon],svg[ph-flip-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M56 120h160a16 16 0 0 0 6.23-30.74l-.14-.06l-159.93-64A16 16 0 0 0 40 40v64a16 16 0 0 0 16 16m0-80l.15.06L216 104H56zm160 96H56a16 16 0 0 0-16 16v64a16 16 0 0 0 22.15 14.78l159.93-64l.14-.06A16 16 0 0 0 216 136M56.15 215.93L56 216v-64h160Z"></svg:path>`,
})
export class PhFlipVerticalIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFlipVerticalBoldIcon],svg[ph-flip-vertical-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M56 120h160a20 20 0 0 0 7.79-38.42l-.46-.19L63.51 21.47A20 20 0 0 0 36 40v60a20 20 0 0 0 20 20m4-74.21L193.91 96H60ZM216 136H56a20 20 0 0 0-20 20v60a20 20 0 0 0 27.51 18.54l159.81-59.92l.46-.19A20 20 0 0 0 216 136M60 210.22V160h133.91Z"></svg:path>`,
})
export class PhFlipVerticalBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFlipVerticalDuotoneIcon],svg[ph-flip-vertical-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m219.11 159.37l-160 64A8 8 0 0 1 48 216v-64a8 8 0 0 1 8-8h160c8.71 0 11.14 12 3.11 15.37" opacity=".2"></svg:path><svg:path d="M56 120h160a16 16 0 0 0 6.23-30.74l-.14-.06l-159.93-64A16 16 0 0 0 40 40v64a16 16 0 0 0 16 16m0-80l.15.06L216 104H56zm160 96H56a16 16 0 0 0-16 16v64a16 16 0 0 0 22.15 14.78l159.93-64l.14-.06A16 16 0 0 0 216 136M56.15 215.93L56 216v-64h160Z"></svg:path></svg:g>`,
})
export class PhFlipVerticalDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFlipVerticalFillIcon],svg[ph-flip-vertical-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M56 120h160a16 16 0 0 0 6.23-30.74l-.14-.06l-159.93-64A16 16 0 0 0 40 40v64a16 16 0 0 0 16 16m0-80l.15.06L216 104H56zm175.67 108.82a15.85 15.85 0 0 1-9.45 17.92l-.14.06l-159.93 64A16 16 0 0 1 40 216v-64a16 16 0 0 1 16-16h160a15.85 15.85 0 0 1 15.67 12.82"></svg:path>`,
})
export class PhFlipVerticalFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFlipVerticalLightIcon],svg[ph-flip-vertical-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M56 118h160a14 14 0 0 0 5.46-26.9h-.11L61.4 27.1A14 14 0 0 0 42 40v64a14 14 0 0 0 14 14m-2-78a2 2 0 0 1 2-2a2 2 0 0 1 .79.16l.11.05l159.92 64A2 2 0 0 1 216 106H56a2 2 0 0 1-2-2Zm162 98H56a14 14 0 0 0-14 14v64a14 14 0 0 0 19.39 12.92l160-64l.11-.05A14 14 0 0 0 216 138m.82 15.83l-159.92 64l-.11.05A2 2 0 0 1 54 216v-64a2 2 0 0 1 2-2h160a2 2 0 0 1 .82 3.83"></svg:path>`,
})
export class PhFlipVerticalLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFlipVerticalThinIcon],svg[ph-flip-vertical-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M56 116h160a12 12 0 0 0 4.6-23.09l-160-64A12 12 0 0 0 44 40v64a12 12 0 0 0 12 12m-4-76a4 4 0 0 1 4-4a4 4 0 0 1 1.57.32h.07l159.91 64A4 4 0 0 1 216 108H56a4 4 0 0 1-4-4Zm175.74 109.61A11.75 11.75 0 0 0 216 140H56a12 12 0 0 0-12 12v64a12 12 0 0 0 12 12a11.8 11.8 0 0 0 4.59-.93l160-64h.08a11.75 11.75 0 0 0 7.07-13.46m-10.17 6.06l-160 64A4 4 0 0 1 52 216v-64a4 4 0 0 1 4-4h160a4 4 0 0 1 1.59 7.67Z"></svg:path>`,
})
export class PhFlipVerticalThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFloppyDiskIcon],svg[ph-floppy-disk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M219.31 72L184 36.69A15.86 15.86 0 0 0 172.69 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V83.31A15.86 15.86 0 0 0 219.31 72M168 208H88v-56h80Zm40 0h-24v-56a16 16 0 0 0-16-16H88a16 16 0 0 0-16 16v56H48V48h124.69L208 83.31ZM160 72a8 8 0 0 1-8 8H96a8 8 0 0 1 0-16h56a8 8 0 0 1 8 8"></svg:path>`,
})
export class PhFloppyDiskIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFloppyDiskBackIcon],svg[ph-floppy-disk-back-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32H83.31A15.86 15.86 0 0 0 72 36.69L36.69 72A15.86 15.86 0 0 0 32 83.31V208a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16M88 48h80v32H88Zm120 160H48V83.31l24-24V80a16 16 0 0 0 16 16h80a16 16 0 0 0 16-16V48h24Zm-80-96a40 40 0 1 0 40 40a40 40 0 0 0-40-40m0 64a24 24 0 1 1 24-24a24 24 0 0 1-24 24"></svg:path>`,
})
export class PhFloppyDiskBackIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFloppyDiskBackBoldIcon],svg[ph-floppy-disk-back-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 28H83.31a19.86 19.86 0 0 0-14.14 5.86L33.86 69.17A19.86 19.86 0 0 0 28 83.31V208a20 20 0 0 0 20 20h160a20 20 0 0 0 20-20V48a20 20 0 0 0-20-20M92 52h72v20H92Zm112 152H52V85l16-16v7a20 20 0 0 0 20 20h80a20 20 0 0 0 20-20V52h16Zm-76-96a42 42 0 1 0 42 42a42 42 0 0 0-42-42m0 60a18 18 0 1 1 18-18a18 18 0 0 1-18 18"></svg:path>`,
})
export class PhFloppyDiskBackBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFloppyDiskBackDuotoneIcon],svg[ph-floppy-disk-back-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 40h-32v40a8 8 0 0 1-8 8H88a8 8 0 0 1-8-8V40.73a8 8 0 0 0-2.34 1.61L42.34 77.66A8 8 0 0 0 40 83.31V208a8 8 0 0 0 8 8h160a8 8 0 0 0 8-8V48a8 8 0 0 0-8-8m-80 144a32 32 0 1 1 32-32a32 32 0 0 1-32 32" opacity=".2"></svg:path><svg:path d="M208 32H83.31A15.86 15.86 0 0 0 72 36.69L36.69 72A15.86 15.86 0 0 0 32 83.31V208a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16M88 48h80v32H88Zm120 160H48V83.31l24-24V80a16 16 0 0 0 16 16h80a16 16 0 0 0 16-16V48h24Zm-80-96a40 40 0 1 0 40 40a40 40 0 0 0-40-40m0 64a24 24 0 1 1 24-24a24 24 0 0 1-24 24"></svg:path></svg:g>`,
})
export class PhFloppyDiskBackDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFloppyDiskBackFillIcon],svg[ph-floppy-disk-back-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32H83.31A15.86 15.86 0 0 0 72 36.69L36.69 72A15.86 15.86 0 0 0 32 83.31V208a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m-80 152a32 32 0 1 1 32-32a32 32 0 0 1-32 32m44-104a4 4 0 0 1-4 4H88a4 4 0 0 1-4-4V48h88Z"></svg:path>`,
})
export class PhFloppyDiskBackFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFloppyDiskBackLightIcon],svg[ph-floppy-disk-back-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 34H83.31a13.94 13.94 0 0 0-9.9 4.1L38.1 73.41a13.94 13.94 0 0 0-4.1 9.9V208a14 14 0 0 0 14 14h160a14 14 0 0 0 14-14V48a14 14 0 0 0-14-14M86 46h84v34a2 2 0 0 1-2 2H88a2 2 0 0 1-2-2Zm124 162a2 2 0 0 1-2 2H48a2 2 0 0 1-2-2V83.31a2 2 0 0 1 .59-1.41L74 54.48V80a14 14 0 0 0 14 14h80a14 14 0 0 0 14-14V46h26a2 2 0 0 1 2 2Zm-82-94a38 38 0 1 0 38 38a38 38 0 0 0-38-38m0 64a26 26 0 1 1 26-26a26 26 0 0 1-26 26"></svg:path>`,
})
export class PhFloppyDiskBackLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFloppyDiskBackThinIcon],svg[ph-floppy-disk-back-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 36H83.31a12 12 0 0 0-8.48 3.51L39.52 74.83A11.9 11.9 0 0 0 36 83.31V208a12 12 0 0 0 12 12h160a12 12 0 0 0 12-12V48a12 12 0 0 0-12-12M84 44h88v36a4 4 0 0 1-4 4H88a4 4 0 0 1-4-4Zm128 164a4 4 0 0 1-4 4H48a4 4 0 0 1-4-4V83.31a4 4 0 0 1 1.17-2.82L76 49.66V80a12 12 0 0 0 12 12h80a12 12 0 0 0 12-12V44h28a4 4 0 0 1 4 4Zm-84-92a36 36 0 1 0 36 36a36 36 0 0 0-36-36m0 64a28 28 0 1 1 28-28a28 28 0 0 1-28 28"></svg:path>`,
})
export class PhFloppyDiskBackThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFloppyDiskBoldIcon],svg[ph-floppy-disk-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m222.14 69.17l-35.31-35.31A19.86 19.86 0 0 0 172.69 28H48a20 20 0 0 0-20 20v160a20 20 0 0 0 20 20h160a20 20 0 0 0 20-20V83.31a19.86 19.86 0 0 0-5.86-14.14M164 204H92v-44h72Zm40 0h-16v-48a20 20 0 0 0-20-20H88a20 20 0 0 0-20 20v48H52V52h119l33 33ZM164 84a12 12 0 0 1-12 12H96a12 12 0 0 1 0-24h56a12 12 0 0 1 12 12"></svg:path>`,
})
export class PhFloppyDiskBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFloppyDiskDuotoneIcon],svg[ph-floppy-disk-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 83.31V208a8 8 0 0 1-8 8h-32v-64a8 8 0 0 0-8-8H88a8 8 0 0 0-8 8v64H48a8 8 0 0 1-8-8V48a8 8 0 0 1 8-8h124.69a8 8 0 0 1 5.65 2.34l35.32 35.32a8 8 0 0 1 2.34 5.65" opacity=".2"></svg:path><svg:path d="M219.31 72L184 36.69A15.86 15.86 0 0 0 172.69 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V83.31A15.86 15.86 0 0 0 219.31 72M168 208H88v-56h80Zm40 0h-24v-56a16 16 0 0 0-16-16H88a16 16 0 0 0-16 16v56H48V48h124.69L208 83.31ZM160 72a8 8 0 0 1-8 8H96a8 8 0 0 1 0-16h56a8 8 0 0 1 8 8"></svg:path></svg:g>`,
})
export class PhFloppyDiskDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFloppyDiskFillIcon],svg[ph-floppy-disk-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M219.31 72L184 36.69A15.86 15.86 0 0 0 172.69 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V83.31A15.86 15.86 0 0 0 219.31 72M208 208h-24v-56a16 16 0 0 0-16-16H88a16 16 0 0 0-16 16v56H48V48h124.69L208 83.31ZM160 72a8 8 0 0 1-8 8H96a8 8 0 0 1 0-16h56a8 8 0 0 1 8 8"></svg:path>`,
})
export class PhFloppyDiskFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFloppyDiskLightIcon],svg[ph-floppy-disk-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M217.9 73.42L182.58 38.1a13.9 13.9 0 0 0-9.89-4.1H48a14 14 0 0 0-14 14v160a14 14 0 0 0 14 14h160a14 14 0 0 0 14-14V83.31a13.9 13.9 0 0 0-4.1-9.89M170 210H86v-58a2 2 0 0 1 2-2h80a2 2 0 0 1 2 2Zm40-2a2 2 0 0 1-2 2h-26v-58a14 14 0 0 0-14-14H88a14 14 0 0 0-14 14v58H48a2 2 0 0 1-2-2V48a2 2 0 0 1 2-2h124.69a2 2 0 0 1 1.41.58l35.32 35.32a2 2 0 0 1 .58 1.41ZM158 72a6 6 0 0 1-6 6H96a6 6 0 0 1 0-12h56a6 6 0 0 1 6 6"></svg:path>`,
})
export class PhFloppyDiskLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFloppyDiskThinIcon],svg[ph-floppy-disk-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m216.49 74.83l-35.32-35.32a11.93 11.93 0 0 0-8.48-3.51H48a12 12 0 0 0-12 12v160a12 12 0 0 0 12 12h160a12 12 0 0 0 12-12V83.31a11.93 11.93 0 0 0-3.51-8.48M172 212H84v-60a4 4 0 0 1 4-4h80a4 4 0 0 1 4 4Zm40-4a4 4 0 0 1-4 4h-28v-60a12 12 0 0 0-12-12H88a12 12 0 0 0-12 12v60H48a4 4 0 0 1-4-4V48a4 4 0 0 1 4-4h124.69a4 4 0 0 1 2.82 1.17l35.32 35.32a4 4 0 0 1 1.17 2.82ZM156 72a4 4 0 0 1-4 4H96a4 4 0 0 1 0-8h56a4 4 0 0 1 4 4"></svg:path>`,
})
export class PhFloppyDiskThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFlowArrowIcon],svg[ph-flow-arrow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m245.66 74.34l-32-32a8 8 0 0 0-11.32 11.32L220.69 72H208c-49.33 0-61.05 28.12-71.38 52.92c-9.38 22.51-16.92 40.59-49.48 42.84a40 40 0 1 0 .1 16c43.26-2.65 54.34-29.15 64.14-52.69C161.41 107 169.33 88 208 88h12.69l-18.35 18.34a8 8 0 0 0 11.32 11.32l32-32a8 8 0 0 0 0-11.32M48 200a24 24 0 1 1 24-24a24 24 0 0 1-24 24"></svg:path>`,
})
export class PhFlowArrowIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFlowArrowBoldIcon],svg[ph-flow-arrow-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m248.49 71.51l-32-32a12 12 0 0 0-17 17L211 68h-3c-52 0-64.8 30.71-75.08 55.38c-8.82 21.17-15.45 37.05-42.75 40.09a44 44 0 1 0 .28 24.08c43.34-3.87 55.07-32 64.63-54.93C164.9 109 172 92 208 92h3l-11.52 11.51a12 12 0 0 0 17 17l32-32a12 12 0 0 0 .01-17M48 196a20 20 0 1 1 20-20a20 20 0 0 1-20 20"></svg:path>`,
})
export class PhFlowArrowBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFlowArrowDuotoneIcon],svg[ph-flow-arrow-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M80 176a32 32 0 1 1-32-32a32 32 0 0 1 32 32" opacity=".2"></svg:path><svg:path d="m245.66 74.34l-32-32a8 8 0 0 0-11.32 11.32L220.69 72H208c-49.33 0-61.05 28.12-71.38 52.92c-9.38 22.51-16.92 40.59-49.48 42.84a40 40 0 1 0 .1 16c43.26-2.65 54.34-29.15 64.14-52.69C161.41 107 169.33 88 208 88h12.69l-18.35 18.34a8 8 0 0 0 11.32 11.32l32-32a8 8 0 0 0 0-11.32M48 200a24 24 0 1 1 24-24a24 24 0 0 1-24 24"></svg:path></svg:g>`,
})
export class PhFlowArrowDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFlowArrowFillIcon],svg[ph-flow-arrow-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m245.66 85.66l-32 32a8 8 0 0 1-11.32-11.32L220.69 88H208c-38.67 0-46.59 19-56.62 43.08C141.05 155.88 129.33 184 80 184h-1a32 32 0 1 1 0-16h1c38.67 0 46.59-19 56.62-43.08C147 100.12 158.67 72 208 72h12.69l-18.35-18.34a8 8 0 0 1 11.32-11.32l32 32a8 8 0 0 1 0 11.32"></svg:path>`,
})
export class PhFlowArrowFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFlowArrowLightIcon],svg[ph-flow-arrow-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m244.24 75.76l-32-32a6 6 0 0 0-8.48 8.48L225.51 74H208c-48 0-59.44 27.46-69.54 51.69c-9.43 22.64-17.66 42.33-53 44.16a38 38 0 1 0 .06 12c43.34-2.06 54.29-28.29 64-51.55C159.44 106.53 168 86 208 86h17.51l-21.75 21.76a6 6 0 1 0 8.48 8.48l32-32a6 6 0 0 0 0-8.48M48 202a26 26 0 1 1 26-26a26 26 0 0 1-26 26"></svg:path>`,
})
export class PhFlowArrowLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFlowArrowThinIcon],svg[ph-flow-arrow-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m242.83 77.17l-32-32a4 4 0 0 0-5.66 5.66L230.34 76H208c-46.67 0-57.84 26.81-67.69 50.46c-9.46 22.69-18.4 44.16-56.55 45.48a36 36 0 1 0 0 8c43.49-1.42 54.33-27.39 63.91-50.39C157.45 106.12 166.67 84 208 84h22.34l-25.17 25.17a4 4 0 0 0 5.66 5.66l32-32a4 4 0 0 0 0-5.66M48 204a28 28 0 1 1 28-28a28 28 0 0 1-28 28"></svg:path>`,
})
export class PhFlowArrowThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFlowerIcon],svg[ph-flower-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M210.35 129.36c-.81-.47-1.7-.92-2.62-1.36c.92-.44 1.81-.89 2.62-1.36a40 40 0 1 0-40-69.28c-.81.47-1.65 1-2.48 1.59c.08-1 .13-2 .13-3a40 40 0 0 0-80 0c0 .94 0 1.94.13 3c-.83-.57-1.67-1.12-2.48-1.59a40 40 0 1 0-40 69.28c.81.47 1.7.92 2.62 1.36c-.92.44-1.81.89-2.62 1.36a40 40 0 1 0 40 69.28c.81-.47 1.65-1 2.48-1.59c-.08 1-.13 2-.13 2.95a40 40 0 0 0 80 0c0-.94-.05-1.94-.13-2.95c.83.57 1.67 1.12 2.48 1.59a39.8 39.8 0 0 0 19.94 5.36a40.4 40.4 0 0 0 10.42-1.38a40 40 0 0 0 9.64-73.28ZM104 128a24 24 0 1 1 24 24a24 24 0 0 1-24-24m74.35-56.79a24 24 0 1 1 24 41.57c-6.27 3.63-18.61 6.13-35.16 7.19a40 40 0 0 0-12.66-21.87c9.2-13.82 17.55-23.26 23.82-26.89M128 32a24 24 0 0 1 24 24c0 7.24-4 19.19-11.36 34.06a39.8 39.8 0 0 0-25.28 0C108 75.19 104 63.24 104 56a24 24 0 0 1 24-24M44.86 80a24 24 0 0 1 32.79-8.79c6.27 3.63 14.62 13.07 23.82 26.89A40 40 0 0 0 88.81 120c-16.55-1.06-28.89-3.56-35.16-7.18A24 24 0 0 1 44.86 80m32.79 104.79a24 24 0 1 1-24-41.57c6.27-3.63 18.61-6.13 35.16-7.19a40 40 0 0 0 12.66 21.87c-9.2 13.82-17.55 23.26-23.82 26.89M128 224a24 24 0 0 1-24-24c0-7.24 4-19.19 11.36-34.06a39.8 39.8 0 0 0 25.28 0C148 180.81 152 192.76 152 200a24 24 0 0 1-24 24m83.14-48a24 24 0 0 1-32.79 8.79c-6.27-3.63-14.62-13.07-23.82-26.89a40 40 0 0 0 12.66-21.9c16.55 1.06 28.89 3.56 35.16 7.18a24 24 0 0 1 8.79 32.82"></svg:path>`,
})
export class PhFlowerIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFlowerBoldIcon],svg[ph-flower-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M215.64 128a44 44 0 0 0-43.82-75.9a44 44 0 0 0-87.64 0A44 44 0 0 0 40.36 128a44 44 0 0 0 43.82 75.89a44 44 0 0 0 87.64 0A44 44 0 0 0 215.64 128M108 128a20 20 0 1 1 20 20a20 20 0 0 1-20-20m72.35-53.32a20 20 0 1 1 20 34.64c-2.65 1.53-10.52 4.88-30.1 6.42a44.1 44.1 0 0 0-10.52-18.18c11.13-16.2 17.97-21.35 20.62-22.88M128 36a20 20 0 0 1 20 20c0 3.06-1 11.55-9.49 29.28a43.8 43.8 0 0 0-21 0C109 67.55 108 59.06 108 56a20 20 0 0 1 20-20M48.33 82a20 20 0 0 1 27.32-7.32c2.65 1.53 9.49 6.68 20.62 22.88a44.1 44.1 0 0 0-10.52 18.18c-19.58-1.54-27.45-4.89-30.1-6.42A20 20 0 0 1 48.33 82m27.32 99.32a20 20 0 1 1-20-34.64c2.65-1.53 10.52-4.88 30.1-6.42a44.1 44.1 0 0 0 10.52 18.18c-11.13 16.2-17.97 21.35-20.62 22.88M128 220a20 20 0 0 1-20-20c0-3.06 1-11.55 9.49-29.28a43.8 43.8 0 0 0 21 0C147 188.45 148 196.94 148 200a20 20 0 0 1-20 20m79.67-46a20 20 0 0 1-27.32 7.32c-2.65-1.53-9.49-6.68-20.62-22.88a44.1 44.1 0 0 0 10.52-18.18c19.58 1.54 27.45 4.89 30.1 6.42a20 20 0 0 1 7.32 27.32"></svg:path>`,
})
export class PhFlowerBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFlowerDuotoneIcon],svg[ph-flower-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M206.35 136.29c-8.87-5.13-24.46-7.38-39.4-8.29c14.94-.91 30.53-3.16 39.4-8.29a32 32 0 1 0-32-55.42c-8.87 5.12-18.61 17.48-26.87 30C154.17 80.87 160 66.25 160 56a32 32 0 0 0-64 0c0 10.25 5.83 24.87 12.52 38.26c-8.26-12.49-18-24.85-26.87-30a32 32 0 1 0-32 55.42c8.87 5.13 24.46 7.38 39.4 8.29c-14.94.91-30.53 3.16-39.4 8.29a32 32 0 1 0 32 55.42c8.87-5.12 18.61-17.48 26.87-30C101.83 175.13 96 189.75 96 200a32 32 0 0 0 64 0c0-10.25-5.83-24.87-12.52-38.26c8.26 12.49 18 24.85 26.87 30a32 32 0 1 0 32-55.42ZM155.71 144a32 32 0 1 1 4.29-16a31.74 31.74 0 0 1-4.29 16" opacity=".2"></svg:path><svg:path d="M210.35 129.36c-.81-.47-1.7-.92-2.62-1.36c.92-.44 1.81-.89 2.62-1.36a40 40 0 1 0-40-69.28c-.81.47-1.65 1-2.48 1.59c.08-1 .13-2 .13-3a40 40 0 0 0-80 0c0 .94 0 1.94.13 3c-.83-.57-1.67-1.12-2.48-1.59a40 40 0 1 0-40 69.28c.81.47 1.7.92 2.62 1.36c-.92.44-1.81.89-2.62 1.36a40 40 0 1 0 40 69.28c.81-.47 1.65-1 2.48-1.59c-.08 1-.13 2-.13 2.95a40 40 0 0 0 80 0c0-.94-.05-1.94-.13-2.95c.83.57 1.67 1.12 2.48 1.59a39.8 39.8 0 0 0 19.94 5.36a40.4 40.4 0 0 0 10.42-1.38a40 40 0 0 0 9.64-73.28ZM104 128a24 24 0 1 1 24 24a24 24 0 0 1-24-24m74.35-56.79a24 24 0 1 1 24 41.57c-6.27 3.63-18.61 6.13-35.16 7.19a40 40 0 0 0-12.66-21.87c9.2-13.82 17.55-23.26 23.82-26.89M128 32a24 24 0 0 1 24 24c0 7.24-4 19.19-11.36 34.06a39.8 39.8 0 0 0-25.28 0C108 75.19 104 63.24 104 56a24 24 0 0 1 24-24M44.86 80a24 24 0 0 1 32.79-8.79c6.27 3.63 14.62 13.07 23.82 26.89A40 40 0 0 0 88.81 120c-16.55-1.06-28.89-3.56-35.16-7.18A24 24 0 0 1 44.86 80m32.79 104.79a24 24 0 1 1-24-41.57c6.27-3.63 18.61-6.13 35.16-7.19a40 40 0 0 0 12.66 21.87c-9.2 13.82-17.55 23.26-23.82 26.89M128 224a24 24 0 0 1-24-24c0-7.24 4-19.19 11.36-34.06a39.8 39.8 0 0 0 25.28 0C148 180.81 152 192.76 152 200a24 24 0 0 1-24 24m83.14-48a24 24 0 0 1-32.79 8.79c-6.27-3.63-14.62-13.07-23.82-26.89a40 40 0 0 0 12.66-21.9c16.55 1.06 28.89 3.56 35.16 7.18a24 24 0 0 1 8.79 32.82"></svg:path></svg:g>`,
})
export class PhFlowerDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFlowerFillIcon],svg[ph-flower-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M210.35 129.36c-.81-.47-1.7-.92-2.62-1.36c.92-.44 1.81-.89 2.62-1.36a40 40 0 1 0-40-69.28c-.81.47-1.65 1-2.48 1.59c.08-1 .13-2 .13-3a40 40 0 0 0-80 0c0 .94 0 1.94.13 3c-.83-.57-1.67-1.12-2.48-1.59a40 40 0 1 0-40 69.28c.81.47 1.7.92 2.62 1.36c-.92.44-1.81.89-2.62 1.36a40 40 0 1 0 40 69.28c.81-.47 1.65-1 2.48-1.59c-.08 1-.13 2-.13 2.95a40 40 0 0 0 80 0c0-.94-.05-1.94-.13-2.95c.83.57 1.67 1.12 2.48 1.59a39.8 39.8 0 0 0 19.94 5.36a40.4 40.4 0 0 0 10.42-1.38a40 40 0 0 0 9.64-73.28ZM128 156a28 28 0 1 1 28-28a28 28 0 0 1-28 28"></svg:path>`,
})
export class PhFlowerFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFlowerLightIcon],svg[ph-flower-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M209.35 131.09a42 42 0 0 0-6.82-3.09a42 42 0 0 0 6.82-3.09a38 38 0 1 0-38-65.82a43.3 43.3 0 0 0-6.08 4.36A43 43 0 0 0 166 56a38 38 0 0 0-76 0a43 43 0 0 0 .73 7.45a43.3 43.3 0 0 0-6.08-4.36a38 38 0 0 0-38 65.82a42 42 0 0 0 6.82 3.09a42 42 0 0 0-6.82 3.09a38 38 0 0 0 9.16 69.62a38.5 38.5 0 0 0 9.9 1.31a37.8 37.8 0 0 0 18.94-5.11a43.3 43.3 0 0 0 6.08-4.36A43 43 0 0 0 90 200a38 38 0 0 0 76 0a43 43 0 0 0-.73-7.45a43.3 43.3 0 0 0 6.08 4.36a37.8 37.8 0 0 0 18.94 5.09a38.5 38.5 0 0 0 9.9-1.31a38 38 0 0 0 9.16-69.62Zm-32-61.61a26 26 0 1 1 26 45c-4.77 2.75-14.92 6.15-36.4 7.47l-1.44-.08A38 38 0 0 0 152 98.58l.66-1.31c11.9-17.94 19.92-25.03 24.69-27.79M128 154a26 26 0 1 1 26-26a26 26 0 0 1-26 26m0-124a26 26 0 0 1 26 26c0 5.51-2.13 16-11.73 35.27c-.26.4-.53.8-.79 1.21a37.88 37.88 0 0 0-27 0l-.79-1.22C104.13 72 102 61.51 102 56a26 26 0 0 1 26-26m-75.35 84.52a26 26 0 0 1 26-45c4.77 2.76 12.79 9.85 24.67 27.79l.66 1.31a38 38 0 0 0-13.49 23.33l-1.44.08c-21.48-1.36-31.63-4.76-36.4-7.51m26 72a26 26 0 0 1-26-45c4.77-2.75 14.92-6.15 36.4-7.47l1.44.08A38 38 0 0 0 104 157.42l-.66 1.31c-11.9 17.94-19.92 25.03-24.69 27.79M128 226a26 26 0 0 1-26-26c0-5.51 2.13-16 11.73-35.27c.26-.4.53-.8.79-1.21a37.88 37.88 0 0 0 27 0l.79 1.22C151.87 184 154 194.49 154 200a26 26 0 0 1-26 26m84.87-49a26 26 0 0 1-35.52 9.52c-4.77-2.76-12.79-9.85-24.67-27.79l-.66-1.31a38 38 0 0 0 13.49-23.33L167 134c21.48 1.32 31.63 4.72 36.4 7.47a26 26 0 0 1 9.47 35.53"></svg:path>`,
})
export class PhFlowerLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFlowerLotusIcon],svg[ph-flower-lotus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M245.83 121.63a15.53 15.53 0 0 0-9.52-7.33a73.5 73.5 0 0 0-22.17-2.22c4-19.85 1-35.55-2.06-44.86a16.15 16.15 0 0 0-18.79-10.88a85.5 85.5 0 0 0-28.55 12.12a94.6 94.6 0 0 0-27.11-33.25a16.05 16.05 0 0 0-19.26 0a94.5 94.5 0 0 0-27.11 33.25a85.5 85.5 0 0 0-28.55-12.12a16.15 16.15 0 0 0-18.79 10.88c-3 9.31-6 25-2.06 44.86a73.5 73.5 0 0 0-22.17 2.22a15.53 15.53 0 0 0-9.52 7.33a16 16 0 0 0-1.6 12.27c3.39 12.57 13.8 36.48 45.33 55.32S113.13 208 128.05 208s42.67 0 74-18.78c31.53-18.84 41.94-42.75 45.33-55.32a16 16 0 0 0-1.55-12.27M59.14 72.14a.2.2 0 0 1 .23-.15a70.4 70.4 0 0 1 25.81 11.67A118.7 118.7 0 0 0 80 119.17c0 18.74 3.77 34 9.11 46.28A123.6 123.6 0 0 1 69.57 140C51.55 108.62 55.3 84 59.14 72.14m3 103.35C35.47 159.57 26.82 140.05 24 129.7a59.8 59.8 0 0 1 22.5-1.17a129 129 0 0 0 9.15 19.41a142.3 142.3 0 0 0 34 39.56a115 115 0 0 1-27.55-12.01ZM128 190.4c-9.33-6.94-32-28.23-32-71.23C96 76.7 118.38 55.24 128 48c9.62 7.26 32 28.72 32 71.19c0 42.98-22.67 64.27-32 71.21m42.82-106.74A70.4 70.4 0 0 1 196.63 72a.2.2 0 0 1 .23.15c3.84 11.85 7.59 36.47-10.43 67.85a123.3 123.3 0 0 1-19.54 25.48c5.34-12.26 9.11-27.54 9.11-46.28a118.7 118.7 0 0 0-5.18-35.54M232 129.72c-2.77 10.25-11.4 29.81-38.09 45.77a115 115 0 0 1-27.55 12a142.3 142.3 0 0 0 34-39.56a129 129 0 0 0 9.15-19.41a59.7 59.7 0 0 1 22.49 1.19Z"></svg:path>`,
})
export class PhFlowerLotusIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFlowerLotusBoldIcon],svg[ph-flower-lotus-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M249.3 119.63a19.5 19.5 0 0 0-12-9.2a76 76 0 0 0-18.38-2.43a92.2 92.2 0 0 0-3-42a20.15 20.15 0 0 0-23.44-13.57A88.4 88.4 0 0 0 166.3 62.8A98 98 0 0 0 140 32a20.07 20.07 0 0 0-24 0a98 98 0 0 0-26.3 30.8a88.4 88.4 0 0 0-26.15-10.38A20.15 20.15 0 0 0 40.11 66a92.2 92.2 0 0 0-3 42a76 76 0 0 0-18.41 2.43a19.5 19.5 0 0 0-12 9.2a20 20 0 0 0-2 15.31c3.55 13.16 14.4 38.16 47.14 57.72C84.16 212 112.76 212 128.08 212s43.76 0 76.07-19.34c32.74-19.56 43.59-44.56 47.14-57.72a20 20 0 0 0-1.99-15.31M64.16 172.05c-22.29-13.32-31.35-29.13-35-39.35a57.5 57.5 0 0 1 14.54-.46a134 134 0 0 0 8.55 17.69a142.5 142.5 0 0 0 19.59 26.32q-3.81-1.875-7.68-4.2M79 147.27c-2.1-3-4.12-6-6-9.29c-15.63-27.28-14.16-49.04-11-61.22a69 69 0 0 1 18.5 8.57a124.2 124.2 0 0 0-4.5 33.84a127.6 127.6 0 0 0 3 28.1m49 38c-9.72-8.07-28-28.28-28-66.13c0-37.42 18-57.7 28-66.08c10 8.38 28 28.66 28 66.08c0 37.86-18.28 58.09-28 66.16Zm49-38a127.6 127.6 0 0 0 3-28.1a124.2 124.2 0 0 0-4.5-33.84a69 69 0 0 1 18.5-8.58c3.13 12.19 4.6 34-11.06 61.23c-1.84 3.25-3.86 6.34-5.94 9.29m14.86 24.78c-2.56 1.53-5.09 2.91-7.58 4.16a142.5 142.5 0 0 0 19.51-26.28a134 134 0 0 0 8.55-17.69a57.5 57.5 0 0 1 14.54.46c-3.69 10.22-12.75 26.03-35.04 39.35Z"></svg:path>`,
})
export class PhFlowerLotusBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFlowerLotusDuotoneIcon],svg[ph-flower-lotus-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M128 200c-15.37 0-40.77-.18-70-17.64S19.31 143 16.28 131.82a7.94 7.94 0 0 1 5.46-9.82a69.6 69.6 0 0 1 30.82-.64c-7.63-23.88-4-42.44-1-51.71A8.2 8.2 0 0 1 61 64.18C68.56 65.79 81.28 70 94.6 80.8a108.5 108.5 0 0 0-6.6 38.38C88 178 128 200 128 200m106.26-78a69.6 69.6 0 0 0-30.82-.64c7.63-23.88 4-42.44 1-51.71a8.2 8.2 0 0 0-9.44-5.47c-7.52 1.61-20.24 5.8-33.56 16.62a108.5 108.5 0 0 1 6.56 38.38C168 178 128 200 128 200c15.37 0 40.77-.18 70-17.64s38.69-39.34 41.72-50.54a7.94 7.94 0 0 0-5.46-9.82" opacity=".2"></svg:path><svg:path d="M245.83 121.63a15.53 15.53 0 0 0-9.52-7.33a73.5 73.5 0 0 0-22.17-2.22c4-19.85 1-35.55-2.06-44.86a16.15 16.15 0 0 0-18.79-10.88a85.5 85.5 0 0 0-28.55 12.12a94.6 94.6 0 0 0-27.11-33.25a16.05 16.05 0 0 0-19.26 0a94.5 94.5 0 0 0-27.11 33.25a85.5 85.5 0 0 0-28.55-12.12a16.15 16.15 0 0 0-18.79 10.88c-3 9.31-6 25-2.06 44.86a73.5 73.5 0 0 0-22.17 2.22a15.53 15.53 0 0 0-9.52 7.33a16 16 0 0 0-1.6 12.27c3.39 12.57 13.8 36.48 45.33 55.32S113.13 208 128.05 208s42.67 0 74-18.78c31.53-18.84 41.94-42.75 45.33-55.32a16 16 0 0 0-1.55-12.27M59.14 72.14a.2.2 0 0 1 .23-.15a70.4 70.4 0 0 1 25.81 11.67A118.7 118.7 0 0 0 80 119.17c0 18.74 3.77 34 9.11 46.28A123.6 123.6 0 0 1 69.57 140C51.55 108.62 55.3 84 59.14 72.14m3 103.35C35.47 159.57 26.82 140.05 24 129.7a59.8 59.8 0 0 1 22.5-1.17a129 129 0 0 0 9.15 19.41a142.3 142.3 0 0 0 34 39.56a115 115 0 0 1-27.55-12.01ZM128 190.4c-9.33-6.94-32-28.23-32-71.23C96 76.7 118.38 55.24 128 48c9.62 7.26 32 28.72 32 71.19c0 42.98-22.67 64.27-32 71.21m42.82-106.74A70.4 70.4 0 0 1 196.63 72a.2.2 0 0 1 .23.15c3.84 11.85 7.59 36.47-10.43 67.85a123.3 123.3 0 0 1-19.54 25.48c5.34-12.26 9.11-27.54 9.11-46.28a118.7 118.7 0 0 0-5.18-35.54M232 129.72c-2.77 10.25-11.4 29.81-38.09 45.77a115 115 0 0 1-27.55 12a142.3 142.3 0 0 0 34-39.56a129 129 0 0 0 9.15-19.41a59.7 59.7 0 0 1 22.49 1.19Z"></svg:path></svg:g>`,
})
export class PhFlowerLotusDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFlowerLotusFillIcon],svg[ph-flower-lotus-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M245.83 121.63a15.53 15.53 0 0 0-9.52-7.33a73.6 73.6 0 0 0-22.17-2.22c4-19.85 1-35.55-2-44.86a16.17 16.17 0 0 0-18.8-10.88a85.5 85.5 0 0 0-28.55 12.12a94.6 94.6 0 0 0-27.11-33.25a16.05 16.05 0 0 0-19.26 0a94.6 94.6 0 0 0-27.16 33.25a85.5 85.5 0 0 0-28.55-12.12a16.14 16.14 0 0 0-18.79 10.88c-3 9.31-6 25-2.06 44.86a73.6 73.6 0 0 0-22.17 2.22a15.53 15.53 0 0 0-9.52 7.33a16 16 0 0 0-1.6 12.26c3.39 12.58 13.8 36.49 45.33 55.33S113.13 208 128.05 208s42.67 0 74-18.78c31.53-18.84 41.94-42.75 45.33-55.33a16 16 0 0 0-1.55-12.26M62.1 175.49C35.47 159.57 26.82 140.05 24 129.7a59.6 59.6 0 0 1 22.5-1.17a129 129 0 0 0 9.15 19.41a142.3 142.3 0 0 0 34 39.56a115 115 0 0 1-27.55-12.01M128 190.4c-9.33-6.94-32-28.23-32-71.23C96 76.7 118.38 55.24 128 48c9.62 7.26 32 28.72 32 71.19c0 42.98-22.67 64.27-32 71.21m104-60.68c-2.77 10.24-11.4 29.81-38.09 45.77a115 115 0 0 1-27.55 12a142.3 142.3 0 0 0 34-39.56a129 129 0 0 0 9.15-19.41a59.7 59.7 0 0 1 22.49 1.19Z"></svg:path>`,
})
export class PhFlowerLotusFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFlowerLotusLightIcon],svg[ph-flower-lotus-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M244.1 122.63a13.56 13.56 0 0 0-8.3-6.4a72.6 72.6 0 0 0-24.17-2c4.67-20.63 1.62-36.91-1.45-46.4a14.16 14.16 0 0 0-16.48-9.53a84.2 84.2 0 0 0-29.76 13.11a92.6 92.6 0 0 0-27.52-34.6a14 14 0 0 0-16.85 0a92.7 92.7 0 0 0-27.51 34.6A84.2 84.2 0 0 0 62.29 58.3a14.15 14.15 0 0 0-16.47 9.54c-3.07 9.49-6.12 25.77-1.45 46.4a72.6 72.6 0 0 0-24.17 2a13.56 13.56 0 0 0-8.3 6.4a14 14 0 0 0-1.4 10.74C13.81 145.66 24 169 54.92 187.51S113.29 206 128 206s42.12 0 73.06-18.49s41.11-41.85 44.42-54.14a14 14 0 0 0-1.38-10.74M168.48 82.9A73.1 73.1 0 0 1 196.22 70a2.2 2.2 0 0 1 2.54 1.5c3.94 12.22 7.81 37.5-10.59 69.5a129.8 129.8 0 0 1-28 33.37C167.85 161 174 142.93 174 119.17a116.1 116.1 0 0 0-5.52-36.27M57.24 71.53A2.2 2.2 0 0 1 59.78 70a73.1 73.1 0 0 1 27.74 12.9A116.1 116.1 0 0 0 82 119.17c0 23.76 6.15 41.85 13.81 55.17a129.6 129.6 0 0 1-28-33.37C49.43 109 53.3 83.72 57.24 71.53m3.84 105.67c-27.3-16.31-36.15-36.42-39-47a2.08 2.08 0 0 1 .21-1.61a1.7 1.7 0 0 1 1-.8A62.2 62.2 0 0 1 48 126.72A126 126 0 0 0 57.43 147a141 141 0 0 0 41 44.72a114.8 114.8 0 0 1-37.35-14.52M128 192.86c-8.68-6.2-34-28.2-34-73.69c0-43.36 22.94-65.34 32.8-72.78a2 2 0 0 1 2.4 0c9.86 7.44 32.8 29.42 32.8 72.78c0 45.77-25.19 67.5-34 73.69m105.9-62.62c-2.85 10.54-11.7 30.65-39 47a114.8 114.8 0 0 1-37.38 14.47a141 141 0 0 0 41-44.72a126 126 0 0 0 9.48-20.27a62.2 62.2 0 0 1 24.73 1.11a1.7 1.7 0 0 1 1 .8a2.08 2.08 0 0 1 .19 1.61Z"></svg:path>`,
})
export class PhFlowerLotusLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFlowerLotusThinIcon],svg[ph-flower-lotus-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M242.37 123.65a11.54 11.54 0 0 0-7.08-5.46a71.5 71.5 0 0 0-26.29-1.67c5.48-21.46 2.38-38.36-.75-48a12.16 12.16 0 0 0-14.16-8.19a82.85 82.85 0 0 0-31 14.17a91.06 91.06 0 0 0-27.9-36a11.91 11.91 0 0 0-14.44 0a91.06 91.06 0 0 0-27.9 36a82.9 82.9 0 0 0-31-14.17a12.16 12.16 0 0 0-14.16 8.19c-3.13 9.68-6.23 26.58-.75 48a71.5 71.5 0 0 0-26.26 1.67a11.54 11.54 0 0 0-7.08 5.46a12 12 0 0 0-1.2 9.22c3.24 12 13.2 34.81 43.52 52.92S113.45 204 128 204s41.61 0 72.07-18.21s40.28-40.93 43.52-52.92a12 12 0 0 0-1.22-9.22M195.8 68.11a4.2 4.2 0 0 1 4.87 2.89c4 12.5 8 38.35-10.77 71c-10.45 18.19-25.11 32.2-38.11 41.44C162 170 172 149.24 172 119.19a113.4 113.4 0 0 0-5.88-37a75.3 75.3 0 0 1 29.68-14.08M55.33 71a4.19 4.19 0 0 1 4.87-2.84a75.3 75.3 0 0 1 29.68 14.03a113.4 113.4 0 0 0-5.88 37c0 30.05 10 50.82 20.21 64.23c-13-9.24-27.66-23.25-38.11-41.44C47.32 109.3 51.29 83.45 55.33 71m4.72 108c-27.9-16.67-37-37.32-39.9-48.15a4 4 0 0 1 .41-3.13a3.6 3.6 0 0 1 2.21-1.73a64.6 64.6 0 0 1 26.73-1a123.5 123.5 0 0 0 9.66 21c13.28 23.1 32.66 39.67 48.27 49.11a116.3 116.3 0 0 1-47.38-16.17Zm68 16.34a75.8 75.8 0 0 1-17.08-16.4C98.37 162.58 92 142.5 92 119.19c0-44.25 23.49-66.75 33.59-74.36a4 4 0 0 1 4.82 0c10.1 7.61 33.59 30.11 33.59 74.36c0 23.31-6.37 43.39-18.92 59.68a75.8 75.8 0 0 1-17.08 16.4Zm107.85-64.49c-2.92 10.83-12 31.48-39.9 48.15a116.3 116.3 0 0 1-47.38 16.15c15.61-9.44 35-26 48.27-49.11a123.5 123.5 0 0 0 9.66-21a64.45 64.45 0 0 1 26.73 1a3.6 3.6 0 0 1 2.21 1.73a4 4 0 0 1 .36 3.01Z"></svg:path>`,
})
export class PhFlowerLotusThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFlowerThinIcon],svg[ph-flower-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208.35 132.82a51 51 0 0 0-12.59-4.82a51 51 0 0 0 12.59-4.82a36 36 0 0 0-36-62.36a51.5 51.5 0 0 0-10.47 8.5A51.3 51.3 0 0 0 164 56a36 36 0 0 0-72 0a51.3 51.3 0 0 0 2.12 13.32a51.5 51.5 0 0 0-10.47-8.5a36 36 0 1 0-36 62.36A51 51 0 0 0 60.24 128a51 51 0 0 0-12.59 4.82a36 36 0 1 0 36 62.36a51.5 51.5 0 0 0 10.47-8.5A51.3 51.3 0 0 0 92 200a36 36 0 0 0 72 0a51.3 51.3 0 0 0-2.12-13.32a51.5 51.5 0 0 0 10.47 8.5a35.85 35.85 0 0 0 18 4.84a36.2 36.2 0 0 0 9.37-1.25a36 36 0 0 0 8.68-66Zm-32-65.07a28 28 0 0 1 28 48.5c-6.95 4-19.82 6.66-37.44 7.74l-3.16-.17a36 36 0 0 0-14.26-24.68c.49-1 1-1.9 1.44-2.84c9.74-14.71 18.47-24.53 25.42-28.55M128 156a28 28 0 1 1 28-28a28 28 0 0 1-28 28m0-128a28 28 0 0 1 28 28c0 8-4.14 20.5-12 36.3c-.58.87-1.15 1.75-1.73 2.65a35.94 35.94 0 0 0-28.52 0c-.58-.9-1.15-1.78-1.73-2.65C104.14 76.5 100 64 100 56a28 28 0 0 1 28-28m-76.35 88.25a28 28 0 1 1 28-48.5c6.95 4 15.68 13.84 25.42 28.55c.47.94 1 1.88 1.44 2.84a36 36 0 0 0-14.26 24.68l-3.16.17c-17.62-1.08-30.49-3.73-37.44-7.74m28 72a28 28 0 1 1-28-48.5c7-4 19.82-6.66 37.44-7.74l3.16.17a36 36 0 0 0 14.26 24.68c-.49 1-1 1.9-1.44 2.84c-9.74 14.71-18.47 24.53-25.42 28.55M128 228a28 28 0 0 1-28-28c0-8 4.14-20.5 12-36.3c.58-.87 1.15-1.75 1.73-2.65a35.94 35.94 0 0 0 28.52 0c.58.9 1.15 1.78 1.73 2.65c7.87 15.8 12 28.27 12 36.3A28 28 0 0 1 128 228m86.6-50a28 28 0 0 1-38.25 10.25c-6.95-4-15.68-13.84-25.42-28.55c-.47-.94-1-1.88-1.44-2.84a36 36 0 0 0 14.26-24.68l3.16-.17c17.62 1.08 30.49 3.73 37.44 7.74A28 28 0 0 1 214.6 178"></svg:path>`,
})
export class PhFlowerThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFlowerTulipIcon],svg[ph-flower-tulip-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 48a87.5 87.5 0 0 0-35.36 7.43c-15.1-25.37-39.92-38-41.06-38.59a8 8 0 0 0-7.16 0c-1.14.58-26 13.22-41.06 38.59A87.5 87.5 0 0 0 48 48a8 8 0 0 0-8 8v40a88.11 88.11 0 0 0 80 87.63v35.43l-36.42-18.22a8 8 0 1 0-7.16 14.32l48 24a8 8 0 0 0 7.16 0l48-24a8 8 0 0 0-7.16-14.32L136 219.06v-35.43A88.11 88.11 0 0 0 216 96V56a8 8 0 0 0-8-8m-88 119.56A72.1 72.1 0 0 1 56 96V64.44A72.1 72.1 0 0 1 120 136Zm8-68.2a88.4 88.4 0 0 0-30.64-36.17c9.57-15.79 24-25.9 30.64-30c6.65 4.08 21.08 14.19 30.64 30A88.46 88.46 0 0 0 128 99.36M200 96a72.1 72.1 0 0 1-64 71.56V136a72.1 72.1 0 0 1 64-71.56Z"></svg:path>`,
})
export class PhFlowerTulipIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFlowerTulipBoldIcon],svg[ph-flower-tulip-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 44a91.6 91.6 0 0 0-33.77 6.42c-15.8-24.4-39.72-36.58-40.86-37.15a12 12 0 0 0-10.74 0c-1.14.57-25.06 12.75-40.86 37.15A91.6 91.6 0 0 0 48 44a12 12 0 0 0-12 12v40a92.14 92.14 0 0 0 80 91.22v25.36l-30.63-15.31a12 12 0 0 0-10.74 21.46l48 24a12 12 0 0 0 10.74 0l48-24a12 12 0 1 0-10.74-21.46L140 212.58v-25.36A92.14 92.14 0 0 0 220 96V56a12 12 0 0 0-12-12m-80-6.06c6.37 4.16 17.13 12.31 25.21 24.2A92.6 92.6 0 0 0 128 90.61a92.8 92.8 0 0 0-25.21-28.47c8.08-11.89 18.84-20.04 25.21-24.2M60 96V69.06A68.11 68.11 0 0 1 116 136v26.94A68.12 68.12 0 0 1 60 96m136 0a68.12 68.12 0 0 1-56 66.94V136a68.11 68.11 0 0 1 56-66.94Z"></svg:path>`,
})
export class PhFlowerTulipBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFlowerTulipDuotoneIcon],svg[ph-flower-tulip-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M169.23 66A80 80 0 0 0 128 136a80 80 0 0 0-41.23-70C100 38 128 24 128 24s28 14 41.23 42" opacity=".2"></svg:path><svg:path d="M208 48a87.5 87.5 0 0 0-35.36 7.43c-15.1-25.37-39.92-38-41.06-38.59a8 8 0 0 0-7.16 0c-1.14.58-26 13.22-41.06 38.59A87.5 87.5 0 0 0 48 48a8 8 0 0 0-8 8v40a88.11 88.11 0 0 0 80 87.63v35.43l-36.42-18.22a8 8 0 1 0-7.16 14.32l48 24a8 8 0 0 0 7.16 0l48-24a8 8 0 0 0-7.16-14.32L136 219.06v-35.43A88.11 88.11 0 0 0 216 96V56a8 8 0 0 0-8-8m-80-14.79c6.65 4.08 21.08 14.19 30.64 30A88.46 88.46 0 0 0 128 99.36a88.4 88.4 0 0 0-30.64-36.17c9.57-15.79 23.99-25.9 30.64-29.98M56 96V64.44A72.1 72.1 0 0 1 120 136v31.56A72.1 72.1 0 0 1 56 96m144 0a72.1 72.1 0 0 1-64 71.56V136a72.1 72.1 0 0 1 64-71.56Z"></svg:path></svg:g>`,
})
export class PhFlowerTulipDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFlowerTulipFillIcon],svg[ph-flower-tulip-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 48a87.5 87.5 0 0 0-35.36 7.43c-15.1-25.37-39.92-38-41.06-38.59a8 8 0 0 0-7.16 0c-1.14.58-26 13.22-41.06 38.59A87.5 87.5 0 0 0 48 48a8 8 0 0 0-8 8v40a88.11 88.11 0 0 0 80 87.63v35.43l-36.42-18.22a8 8 0 1 0-7.16 14.32l48 24a8 8 0 0 0 7.16 0l48-24a8 8 0 0 0-7.16-14.32L136 219.06v-35.43A88.11 88.11 0 0 0 216 96V56a8 8 0 0 0-8-8M56 96V64.44A72.1 72.1 0 0 1 120 136v31.56A72.1 72.1 0 0 1 56 96m144 0a72.1 72.1 0 0 1-64 71.56V136a72.1 72.1 0 0 1 64-71.56Z"></svg:path>`,
})
export class PhFlowerTulipFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFlowerTulipLightIcon],svg[ph-flower-tulip-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 50a85.5 85.5 0 0 0-36.17 8c-14.67-25.9-40-38.79-41.15-39.37a6 6 0 0 0-5.36 0c-1.14.58-26.48 13.47-41.15 39.37A85.5 85.5 0 0 0 48 50a6 6 0 0 0-6 6v40a86.1 86.1 0 0 0 80 85.77v40.52l-39.32-19.66a6 6 0 0 0-5.36 10.74l48 24a6 6 0 0 0 5.36 0l48-24a6 6 0 1 0-5.36-10.74L134 222.29v-40.52A86.1 86.1 0 0 0 214 96V56a6 6 0 0 0-6-6m-80-19.12c6.46 3.84 23.07 15 33.33 32.94A86.5 86.5 0 0 0 128 104.5a86.5 86.5 0 0 0-33.33-40.68c10.26-17.99 26.87-29.11 33.33-32.94M54 96V62.24A74.11 74.11 0 0 1 122 136v33.76A74.1 74.1 0 0 1 54 96m148 0a74.1 74.1 0 0 1-68 73.76V136a74.11 74.11 0 0 1 68-73.76Z"></svg:path>`,
})
export class PhFlowerTulipLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFlowerTulipThinIcon],svg[ph-flower-tulip-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 52a83.5 83.5 0 0 0-37 8.62c-14.2-26.46-40-39.63-41.19-40.2a4 4 0 0 0-3.58 0c-1.14.57-27 13.74-41.19 40.2A83.5 83.5 0 0 0 48 52a4 4 0 0 0-4 4v40a84.1 84.1 0 0 0 80 83.9v45.63l-42.21-21.11a4 4 0 1 0-3.58 7.16l48 24a4 4 0 0 0 3.58 0l48-24a4 4 0 0 0-3.58-7.16L132 225.53V179.9A84.1 84.1 0 0 0 212 96V56a4 4 0 0 0-4-4m-80-23.44c5.91 3.37 25 15.45 36 35.93a84.46 84.46 0 0 0-36 45.92a84.46 84.46 0 0 0-36-45.92c11-20.42 30.1-32.55 36-35.93M52 96V60.1a76.11 76.11 0 0 1 72 75.9v35.9A76.11 76.11 0 0 1 52 96m152 0a76.11 76.11 0 0 1-72 75.9V136a76.11 76.11 0 0 1 72-75.9Z"></svg:path>`,
})
export class PhFlowerTulipThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFlyingSaucerIcon],svg[ph-flying-saucer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M183.59 213.47a8 8 0 0 1-15.18 5.06l-8-24a8 8 0 0 1 15.18-5.06ZM128 184a8 8 0 0 0-8 8v32a8 8 0 0 0 16 0v-32a8 8 0 0 0-8-8m-37.47.41a8 8 0 0 0-10.12 5.06l-8 24a8 8 0 0 0 15.18 5.06l8-24a8 8 0 0 0-5.06-10.12M248 112c0 16.22-13.37 30.89-37.65 41.29C188.22 162.78 159 168 128 168s-60.22-5.22-82.35-14.71C21.37 142.89 8 128.22 8 112c0-8.37 3.67-20.79 21.17-32.5c11.37-7.61 26.94-13.76 45.18-17.85A63.64 63.64 0 0 1 173 50.45a64.8 64.8 0 0 1 9.11 11.3C223.43 71.09 248 89.74 248 112M80 96.83v3a7.92 7.92 0 0 0 6.13 7.76A188.2 188.2 0 0 0 128 112a188 188 0 0 0 41.85-4.37a7.93 7.93 0 0 0 6.15-7.76V96a48 48 0 0 0-48.64-48C101.25 48.34 80 70.25 80 96.83M232 112c0-11.7-16.63-23.89-41.9-31.59A64.7 64.7 0 0 1 192 96v3.92a23.86 23.86 0 0 1-18.56 23.3A204 204 0 0 1 128 128a204 204 0 0 1-45.44-4.78A23.86 23.86 0 0 1 64 99.92v-3.06a65.3 65.3 0 0 1 2.13-16.52C40.72 88 24 100.25 24 112c0 18.92 42.71 40 104 40s104-21.08 104-40"></svg:path>`,
})
export class PhFlyingSaucerIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFlyingSaucerBoldIcon],svg[ph-flying-saucer-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M187.77 213.65a12 12 0 0 1-9.42 14.12a12 12 0 0 1-2.35.23a12 12 0 0 1-11.76-9.65l-4-20a12 12 0 1 1 23.54-4.7ZM128 188a12 12 0 0 0-12 12v24a12 12 0 0 0 24 0v-24a12 12 0 0 0-12-12m-41.65-3.77a12 12 0 0 0-14.12 9.42l-4 20a12 12 0 0 0 9.42 14.12A12 12 0 0 0 80 228a12 12 0 0 0 11.76-9.65l4-20a12 12 0 0 0-9.41-14.12M252 112c0 17.92-14.23 33.89-40.08 45c-22.61 9.69-52.42 15-83.92 15s-61.31-5.34-83.92-15C18.23 145.89 4 129.92 4 112c0-24.06 25.28-44 67.91-53.89A67.61 67.61 0 0 1 175.77 47.6a69 69 0 0 1 8.79 10.62C226.9 68.14 252 88.05 252 112M84 96.83v3a4 4 0 0 0 3 3.87a184.3 184.3 0 0 0 41 4.3a184.3 184.3 0 0 0 41-4.27a4 4 0 0 0 3-3.87V96a44 44 0 0 0-44-44h-.59C103.47 52.31 84 72.43 84 96.83M228 112c0-6.64-7.65-12.76-12.21-15.83a91.7 91.7 0 0 0-20.48-9.88A69.5 69.5 0 0 1 196 96v3.93a27.84 27.84 0 0 1-21.66 27.19A208 208 0 0 1 128 132a208 208 0 0 1-46.33-4.88A27.84 27.84 0 0 1 60 99.94v-3.07a70.4 70.4 0 0 1 .82-10.63a92.4 92.4 0 0 0-20.53 9.88C35.7 99.19 28 105.34 28 112c0 14.68 39 36 100 36s100-21.32 100-36"></svg:path>`,
})
export class PhFlyingSaucerBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFlyingSaucerDuotoneIcon],svg[ph-flying-saucer-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M240 112c0 26.51-50.14 48-112 48S16 138.51 16 112c0-19 25.86-35.49 63.35-43.25A57.07 57.07 0 0 0 72 96.83v3.07a15.94 15.94 0 0 0 12.34 15.52A196 196 0 0 0 128 120a195.7 195.7 0 0 0 43.64-4.58A16 16 0 0 0 184 99.9V96a55.7 55.7 0 0 0-7-27.18C214.29 76.61 240 93 240 112" opacity=".2"></svg:path><svg:path d="M183.59 213.47a8 8 0 0 1-15.18 5.06l-8-24a8 8 0 0 1 15.18-5.06ZM128 184a8 8 0 0 0-8 8v32a8 8 0 0 0 16 0v-32a8 8 0 0 0-8-8m-37.47.41a8 8 0 0 0-10.12 5.06l-8 24a8 8 0 0 0 15.18 5.06l8-24a8 8 0 0 0-5.06-10.12M248 112c0 16.22-13.37 30.89-37.65 41.29C188.22 162.78 159 168 128 168s-60.22-5.22-82.35-14.71C21.37 142.89 8 128.22 8 112c0-8.37 3.67-20.79 21.17-32.5c11.37-7.61 26.94-13.76 45.18-17.85A63.64 63.64 0 0 1 173 50.45a64.8 64.8 0 0 1 9.11 11.3C223.43 71.09 248 89.74 248 112M80 96.83v3a7.92 7.92 0 0 0 6.13 7.76A188.2 188.2 0 0 0 128 112a188 188 0 0 0 41.85-4.37a7.93 7.93 0 0 0 6.15-7.76V96a48 48 0 0 0-48.64-48C101.25 48.34 80 70.25 80 96.83M232 112c0-11.7-16.63-23.89-41.9-31.59A64.7 64.7 0 0 1 192 96v3.92a23.86 23.86 0 0 1-18.56 23.3A204 204 0 0 1 128 128a204 204 0 0 1-45.44-4.78A23.86 23.86 0 0 1 64 99.92v-3.06a65.3 65.3 0 0 1 2.13-16.52C40.72 88 24 100.25 24 112c0 18.92 42.71 40 104 40s104-21.08 104-40"></svg:path></svg:g>`,
})
export class PhFlyingSaucerDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFlyingSaucerFillIcon],svg[ph-flying-saucer-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M183.59 213.47a8 8 0 0 1-15.18 5.06l-8-24a8 8 0 0 1 15.18-5.06ZM128 184a8 8 0 0 0-8 8v32a8 8 0 0 0 16 0v-32a8 8 0 0 0-8-8m-37.47.41a8 8 0 0 0-10.12 5.06l-8 24a8 8 0 0 0 15.18 5.06l8-24a8 8 0 0 0-5.06-10.12M248 112c0 16.22-13.37 30.89-37.65 41.29C188.22 162.78 159 168 128 168s-60.22-5.22-82.35-14.71C21.37 142.89 8 128.22 8 112c0-8.37 3.67-20.79 21.17-32.5c11.37-7.61 26.94-13.76 45.18-17.85A63.64 63.64 0 0 1 173 50.45a64.8 64.8 0 0 1 9.11 11.3C223.43 71.09 248 89.74 248 112m-72-16a47.66 47.66 0 0 0-6.06-23.35l-.06-.09A48.07 48.07 0 0 0 127.36 48C101.25 48.34 80 70.25 80 96.83v3a7.92 7.92 0 0 0 6.13 7.76A188.2 188.2 0 0 0 128 112a188 188 0 0 0 41.85-4.37a7.93 7.93 0 0 0 6.15-7.76Z"></svg:path>`,
})
export class PhFlyingSaucerFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFlyingSaucerLightIcon],svg[ph-flying-saucer-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M181.69 214.1a6 6 0 1 1-11.38 3.8l-8-24a6 6 0 1 1 11.38-3.8ZM128 186a6 6 0 0 0-6 6v32a6 6 0 0 0 12 0v-32a6 6 0 0 0-6-6m-38.1.31a6 6 0 0 0-7.59 3.79l-8 24a6 6 0 1 0 11.38 3.8l8-24a6 6 0 0 0-3.79-7.59M246 112c0 15.37-12.94 29.39-36.44 39.46C187.67 160.84 158.71 166 128 166s-59.67-5.16-81.56-14.54C22.94 141.39 10 127.37 10 112c0-21.16 25.06-39.65 65.59-48.57a61.85 61.85 0 0 1 105.24.09C221.1 72.48 246 90.93 246 112M78 96.84v3a9.93 9.93 0 0 0 7.69 9.7A190.4 190.4 0 0 0 128 114a190.4 190.4 0 0 0 42.3-4.42a9.93 9.93 0 0 0 7.69-9.7V96a50 50 0 0 0-50-50h-.67C100.13 46.36 78 69.16 78 96.84M234 112c0-13.33-18.38-26.61-46.8-34.52A62.2 62.2 0 0 1 190 96v3.92a21.86 21.86 0 0 1-17 21.35a202 202 0 0 1-45 4.73a202 202 0 0 1-45-4.73a21.86 21.86 0 0 1-17-21.35v-3.07a63 63 0 0 1 3.08-19.45C40.49 85.3 22 98.62 22 112c0 10.12 10.63 20.48 29.17 28.43C71.59 149.18 98.88 154 128 154s56.41-4.82 76.83-13.57C223.37 132.48 234 122.12 234 112"></svg:path>`,
})
export class PhFlyingSaucerLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFlyingSaucerThinIcon],svg[ph-flying-saucer-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M179.79 214.73a4 4 0 0 1-2.53 5.06a3.9 3.9 0 0 1-1.26.21a4 4 0 0 1-3.79-2.73l-8-24a4 4 0 1 1 7.58-2.54ZM128 188a4 4 0 0 0-4 4v32a4 4 0 0 0 8 0v-32a4 4 0 0 0-4-4m-38.74.2a4 4 0 0 0-5.05 2.53l-8 24a4 4 0 1 0 7.58 2.54l8-24a4 4 0 0 0-2.53-5.07M244 112c0 29.16-50.95 52-116 52S12 141.16 12 112c0-20.31 24.8-38.16 64.84-46.8a59.65 59.65 0 0 1 93.31-11.9a61 61 0 0 1 9.42 12C219.36 74 244 91.77 244 112M76 96.83v3a11.9 11.9 0 0 0 9.24 11.64A192 192 0 0 0 128 116a192 192 0 0 0 42.75-4.48A11.9 11.9 0 0 0 180 99.88V96a52 52 0 0 0-52.69-52C99 44.37 76 68.07 76 96.83M236 112c0-15-20.13-29.37-51.94-37.43A59.9 59.9 0 0 1 188 96v3.91a19.87 19.87 0 0 1-15.45 19.41A199.7 199.7 0 0 1 128 124a199.7 199.7 0 0 1-44.54-4.68A19.86 19.86 0 0 1 68 99.91v-3.06a60.9 60.9 0 0 1 4.25-22.36C40.25 82.54 20 96.88 20 112c0 23.85 49.46 44 108 44s108-20.15 108-44"></svg:path>`,
})
export class PhFlyingSaucerThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFolderIcon],svg[ph-folder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 72h-84.69L104 44.69A15.86 15.86 0 0 0 92.69 40H40a16 16 0 0 0-16 16v144.62A15.4 15.4 0 0 0 39.38 216h177.51A15.13 15.13 0 0 0 232 200.89V88a16 16 0 0 0-16-16M40 56h52.69l16 16H40Zm176 144H40V88h176Z"></svg:path>`,
})
export class PhFolderIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFolderBoldIcon],svg[ph-folder-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 68h-82.61l-26-29.29a20 20 0 0 0-15-6.71H40a20 20 0 0 0-20 20v148.62A19.41 19.41 0 0 0 39.38 220h177.51A19.13 19.13 0 0 0 236 200.89V88a20 20 0 0 0-20-20M44 56h46.61l10.67 12H44Zm168 140H44V92h168Z"></svg:path>`,
})
export class PhFolderBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFolderDashedIcon],svg[ph-folder-dashed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M96 208a8 8 0 0 1-8 8H39.38A15.4 15.4 0 0 1 24 200.62V192a8 8 0 0 1 16 0v8h48a8 8 0 0 1 8 8m64-8h-32a8 8 0 0 0 0 16h32a8 8 0 0 0 0-16m64-56a8 8 0 0 0-8 8v48h-16a8 8 0 0 0 0 16h16.89A15.13 15.13 0 0 0 232 200.89V152a8 8 0 0 0-8-8m-8-72h-48a8 8 0 0 0 0 16h48v24a8 8 0 0 0 16 0V88a16 16 0 0 0-16-16M24 80V56a16 16 0 0 1 16-16h52.69A15.86 15.86 0 0 1 104 44.69l29.66 29.65A8 8 0 0 1 128 88H32a8 8 0 0 1-8-8m16-8h68.69l-16-16H40Zm-8 88a8 8 0 0 0 8-8v-32a8 8 0 0 0-16 0v32a8 8 0 0 0 8 8"></svg:path>`,
})
export class PhFolderDashedIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFolderDashedBoldIcon],svg[ph-folder-dashed-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M100 208a12 12 0 0 1-12 12H39.38A19.41 19.41 0 0 1 20 200.62V192a12 12 0 0 1 24 0v4h44a12 12 0 0 1 12 12m60-12h-32a12 12 0 0 0 0 24h32a12 12 0 0 0 0-24m64-56a12 12 0 0 0-12 12v44h-12a12 12 0 0 0 0 24h16.89A19.13 19.13 0 0 0 236 200.89V152a12 12 0 0 0-12-12m-8-72h-48a12 12 0 0 0 0 24h44v20a12 12 0 0 0 24 0V88a20 20 0 0 0-20-20M32 164a12 12 0 0 0 12-12v-32a12 12 0 0 0-24 0v32a12 12 0 0 0 12 12M20 80V52a20 20 0 0 1 20-20h52.41a20 20 0 0 1 14.94 6.71L137 72a12 12 0 0 1-9 20H32a12 12 0 0 1-12-12m24-12h57.28L90.61 56H44Z"></svg:path>`,
})
export class PhFolderDashedBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFolderDashedDuotoneIcon],svg[ph-folder-dashed-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M128 80H32V56a8 8 0 0 1 8-8h52.69a8 8 0 0 1 5.65 2.34Z" opacity=".2"></svg:path><svg:path d="M96 208a8 8 0 0 1-8 8H39.38A15.4 15.4 0 0 1 24 200.62V192a8 8 0 0 1 16 0v8h48a8 8 0 0 1 8 8m64-8h-32a8 8 0 0 0 0 16h32a8 8 0 0 0 0-16m64-56a8 8 0 0 0-8 8v48h-16a8 8 0 0 0 0 16h16.89A15.13 15.13 0 0 0 232 200.89V152a8 8 0 0 0-8-8m-8-72h-48a8 8 0 0 0 0 16h48v24a8 8 0 0 0 16 0V88a16 16 0 0 0-16-16M24 80V56a16 16 0 0 1 16-16h52.69A15.86 15.86 0 0 1 104 44.69l29.66 29.65A8 8 0 0 1 128 88H32a8 8 0 0 1-8-8m16-8h68.69l-16-16H40Zm-8 88a8 8 0 0 0 8-8v-32a8 8 0 0 0-16 0v32a8 8 0 0 0 8 8"></svg:path></svg:g>`,
})
export class PhFolderDashedDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFolderDashedFillIcon],svg[ph-folder-dashed-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M96 208a8 8 0 0 1-8 8H39.38A15.4 15.4 0 0 1 24 200.62V192a8 8 0 0 1 16 0v8h48a8 8 0 0 1 8 8m64-8h-32a8 8 0 0 0 0 16h32a8 8 0 0 0 0-16m64-56a8 8 0 0 0-8 8v48h-16a8 8 0 0 0 0 16h16.89A15.13 15.13 0 0 0 232 200.89V152a8 8 0 0 0-8-8m-8-72h-48a8 8 0 0 0 0 16h48v24a8 8 0 0 0 16 0V88a16 16 0 0 0-16-16M32 88h96a8 8 0 0 0 5.66-13.66L104 44.69A15.86 15.86 0 0 0 92.69 40H40a16 16 0 0 0-16 16v24a8 8 0 0 0 8 8m0 72a8 8 0 0 0 8-8v-32a8 8 0 0 0-16 0v32a8 8 0 0 0 8 8"></svg:path>`,
})
export class PhFolderDashedFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFolderDashedLightIcon],svg[ph-folder-dashed-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M94 208a6 6 0 0 1-6 6H39.38A13.39 13.39 0 0 1 26 200.62V192a6 6 0 0 1 12 0v8.62a1.4 1.4 0 0 0 1.38 1.38H88a6 6 0 0 1 6 6m66-6h-32a6 6 0 0 0 0 12h32a6 6 0 0 0 0-12m64-56a6 6 0 0 0-6 6v48.89a1.11 1.11 0 0 1-1.11 1.11H200a6 6 0 0 0 0 12h16.89A13.12 13.12 0 0 0 230 200.89V152a6 6 0 0 0-6-6m-8-72h-48a6 6 0 0 0 0 12h48a2 2 0 0 1 2 2v24a6 6 0 0 0 12 0V88a14 14 0 0 0-14-14M26 80V56a14 14 0 0 1 14-14h52.69a13.94 13.94 0 0 1 9.9 4.1l29.65 29.66A6 6 0 0 1 128 86H32a6 6 0 0 1-6-6m12-6h75.51L94.1 54.59a2 2 0 0 0-1.41-.59H40a2 2 0 0 0-2 2Zm-6 84a6 6 0 0 0 6-6v-32a6 6 0 0 0-12 0v32a6 6 0 0 0 6 6"></svg:path>`,
})
export class PhFolderDashedLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFolderDashedThinIcon],svg[ph-folder-dashed-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M92 208a4 4 0 0 1-4 4H39.38A11.4 11.4 0 0 1 28 200.62V192a4 4 0 0 1 8 0v8.62a3.39 3.39 0 0 0 3.38 3.38H88a4 4 0 0 1 4 4m68-4h-32a4 4 0 0 0 0 8h32a4 4 0 0 0 0-8m64-56a4 4 0 0 0-4 4v48.89a3.12 3.12 0 0 1-3.11 3.11H200a4 4 0 0 0 0 8h16.89A11.12 11.12 0 0 0 228 200.89V152a4 4 0 0 0-4-4m-8-72h-48a4 4 0 0 0 0 8h48a4 4 0 0 1 4 4v24a4 4 0 0 0 8 0V88a12 12 0 0 0-12-12M28 80V56a12 12 0 0 1 12-12h52.69a11.9 11.9 0 0 1 8.48 3.52l29.66 29.65A4 4 0 0 1 128 84H32a4 4 0 0 1-4-4m8-4h82.34L95.51 53.17A4 4 0 0 0 92.69 52H40a4 4 0 0 0-4 4Zm-4 80a4 4 0 0 0 4-4v-32a4 4 0 0 0-8 0v32a4 4 0 0 0 4 4"></svg:path>`,
})
export class PhFolderDashedThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFolderDottedIcon],svg[ph-folder-dotted-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M96 208a8 8 0 0 1-8 8H39.4A15.4 15.4 0 0 1 24 200.6V192a8 8 0 0 1 16 0v8h48a8 8 0 0 1 8 8Zm64-8h-32a8 8 0 0 0 0 16h32a8 8 0 0 0 0-16Zm64-56a8 8 0 0 0-8 8v48h-16a8 8 0 0 0 0 16h16.9a15.2 15.2 0 0 0 15.1-15.1V152a8 8 0 0 0-8-8Zm-8-72h-48a8 8 0 0 0 0 16h48v24a8 8 0 0 0 16 0V88a16 16 0 0 0-16-16ZM24 80V56a16 16 0 0 1 16-16h52.7a15.9 15.9 0 0 1 11.3 4.7l29.7 29.6a8.4 8.4 0 0 1 1.7 8.8A8 8 0 0 1 128 88H32a8 8 0 0 1-8-8Zm16-8h68.7l-16-16H40Zm-8 88a8 8 0 0 0 8-8v-32a8 8 0 0 0-16 0v32a8 8 0 0 0 8 8Z"></svg:path>`,
})
export class PhFolderDottedIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFolderDottedBoldIcon],svg[ph-folder-dotted-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M100 208a12 12 0 0 1-12 12H39.4A19.4 19.4 0 0 1 20 200.6V192a12 12 0 0 1 24 0v4h44a12 12 0 0 1 12 12Zm60-12h-32a12 12 0 0 0 0 24h32a12 12 0 0 0 0-24Zm64-56a12 12 0 0 0-12 12v44h-12a12 12 0 0 0 0 24h16.9a19.2 19.2 0 0 0 19.1-19.1V152a12 12 0 0 0-12-12Zm-8-72h-48a12 12 0 0 0 0 24h44v20a12 12 0 0 0 24 0V88a20.1 20.1 0 0 0-20-20ZM32 164a12 12 0 0 0 12-12v-32a12 12 0 0 0-24 0v32a12 12 0 0 0 12 12ZM20 80V52a20.1 20.1 0 0 1 20-20h52.4a20 20 0 0 1 15 6.7L137 72a12.1 12.1 0 0 1-9 20H32a12 12 0 0 1-12-12Zm24-12h57.3L90.6 56H44Z"></svg:path>`,
})
export class PhFolderDottedBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFolderDottedDuotoneIcon],svg[ph-folder-dotted-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 80H32V56a8 8 0 0 1 8-8h52.7a7.9 7.9 0 0 1 5.6 2.3Z" opacity=".2"></svg:path><svg:path fill="currentColor" d="M96 208a8 8 0 0 1-8 8H39.4A15.4 15.4 0 0 1 24 200.6V192a8 8 0 0 1 16 0v8h48a8 8 0 0 1 8 8Zm64-8h-32a8 8 0 0 0 0 16h32a8 8 0 0 0 0-16Zm64-56a8 8 0 0 0-8 8v48h-16a8 8 0 0 0 0 16h16.9a15.2 15.2 0 0 0 15.1-15.1V152a8 8 0 0 0-8-8Zm-8-72h-48a8 8 0 0 0 0 16h48v24a8 8 0 0 0 16 0V88a16 16 0 0 0-16-16ZM24 80V56a16 16 0 0 1 16-16h52.7a15.9 15.9 0 0 1 11.3 4.7l29.7 29.6a8.4 8.4 0 0 1 1.7 8.8A8 8 0 0 1 128 88H32a8 8 0 0 1-8-8Zm16-8h68.7l-16-16H40Zm-8 88a8 8 0 0 0 8-8v-32a8 8 0 0 0-16 0v32a8 8 0 0 0 8 8Z"></svg:path>`,
})
export class PhFolderDottedDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFolderDottedFillIcon],svg[ph-folder-dotted-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M96 208a8 8 0 0 1-8 8H39.4A15.4 15.4 0 0 1 24 200.6V192a8 8 0 0 1 16 0v8h48a8 8 0 0 1 8 8ZM32 88h96a8 8 0 0 0 7.4-4.9a8.4 8.4 0 0 0-1.7-8.8L104 44.7A15.9 15.9 0 0 0 92.7 40H40a16 16 0 0 0-16 16v24a8 8 0 0 0 8 8Zm0 72a8 8 0 0 0 8-8v-32a8 8 0 0 0-16 0v32a8 8 0 0 0 8 8Zm184-88h-48a8 8 0 0 0 0 16h48v24a8 8 0 0 0 16 0V88a16 16 0 0 0-16-16Zm8 72a8 8 0 0 0-8 8v48h-16a8 8 0 0 0 0 16h16.9a15.2 15.2 0 0 0 15.1-15.1V152a8 8 0 0 0-8-8Zm-64 56h-32a8 8 0 0 0 0 16h32a8 8 0 0 0 0-16Z"></svg:path>`,
})
export class PhFolderDottedFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFolderDottedLightIcon],svg[ph-folder-dotted-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M94 208a6 6 0 0 1-6 6H39.4A13.4 13.4 0 0 1 26 200.6V192a6 6 0 0 1 12 0v8.6a1.4 1.4 0 0 0 1.4 1.4H88a6 6 0 0 1 6 6Zm66-6h-32a6 6 0 0 0 0 12h32a6 6 0 0 0 0-12Zm64-56a6 6 0 0 0-6 6v48.9a1.1 1.1 0 0 1-1.1 1.1H200a6 6 0 0 0 0 12h16.9a13.1 13.1 0 0 0 13.1-13.1V152a6 6 0 0 0-6-6Zm-8-72h-48a6 6 0 0 0 0 12h48a2 2 0 0 1 2 2v24a6 6 0 0 0 12 0V88a14 14 0 0 0-14-14ZM26 80V56a14 14 0 0 1 14-14h52.7a14.3 14.3 0 0 1 9.9 4.1l29.6 29.7a5.7 5.7 0 0 1 1.3 6.5A6 6 0 0 1 128 86H32a6 6 0 0 1-6-6Zm12-6h75.5L94.1 54.6a2 2 0 0 0-1.4-.6H40a2 2 0 0 0-2 2Zm-6 84a6 6 0 0 0 6-6v-32a6 6 0 0 0-12 0v32a6 6 0 0 0 6 6Z"></svg:path>`,
})
export class PhFolderDottedLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFolderDottedThinIcon],svg[ph-folder-dotted-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M92 208a4 4 0 0 1-4 4H39.4A11.4 11.4 0 0 1 28 200.6V192a4 4 0 0 1 8 0v8.6a3.4 3.4 0 0 0 3.4 3.4H88a4 4 0 0 1 4 4Zm68-4h-32a4 4 0 0 0 0 8h32a4 4 0 0 0 0-8Zm64-56a4 4 0 0 0-4 4v48.9a3.1 3.1 0 0 1-3.1 3.1H200a4 4 0 0 0 0 8h16.9a11.1 11.1 0 0 0 11.1-11.1V152a4 4 0 0 0-4-4Zm-8-72h-48a4 4 0 0 0 0 8h48a4 4 0 0 1 4 4v24a4 4 0 0 0 8 0V88a12 12 0 0 0-12-12ZM28 80V56a12 12 0 0 1 12-12h52.7a11.9 11.9 0 0 1 8.5 3.5l29.6 29.7a3.8 3.8 0 0 1 .9 4.3A4 4 0 0 1 128 84H32a4 4 0 0 1-4-4Zm8-4h82.3L95.5 53.2a3.8 3.8 0 0 0-2.8-1.2H40a4 4 0 0 0-4 4Zm-4 80a4 4 0 0 0 4-4v-32a4 4 0 0 0-8 0v32a4 4 0 0 0 4 4Z"></svg:path>`,
})
export class PhFolderDottedThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFolderDuotoneIcon],svg[ph-folder-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M128 80H32V56a8 8 0 0 1 8-8h52.69a8 8 0 0 1 5.65 2.34Z" opacity=".2"></svg:path><svg:path d="M216 72h-84.69L104 44.69A15.86 15.86 0 0 0 92.69 40H40a16 16 0 0 0-16 16v144.62A15.4 15.4 0 0 0 39.38 216h177.51A15.13 15.13 0 0 0 232 200.89V88a16 16 0 0 0-16-16M92.69 56l16 16H40V56ZM216 200H40V88h176Z"></svg:path></svg:g>`,
})
export class PhFolderDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFolderFillIcon],svg[ph-folder-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 72h-84.69L104 44.69A15.88 15.88 0 0 0 92.69 40H40a16 16 0 0 0-16 16v144.62A15.41 15.41 0 0 0 39.39 216h177.5A15.13 15.13 0 0 0 232 200.89V88a16 16 0 0 0-16-16M40 56h52.69l16 16H40Z"></svg:path>`,
})
export class PhFolderFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFolderLightIcon],svg[ph-folder-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 74h-85.51l-27.9-27.9a13.94 13.94 0 0 0-9.9-4.1H40a14 14 0 0 0-14 14v144.62A13.39 13.39 0 0 0 39.38 214h177.51A13.12 13.12 0 0 0 230 200.89V88a14 14 0 0 0-14-14M40 54h52.69a2 2 0 0 1 1.41.59L113.51 74H38V56a2 2 0 0 1 2-2m178 146.89a1.11 1.11 0 0 1-1.11 1.11H39.38a1.4 1.4 0 0 1-1.38-1.38V86h178a2 2 0 0 1 2 2Z"></svg:path>`,
})
export class PhFolderLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFolderLockIcon],svg[ph-folder-lock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 160h-8v-4a28 28 0 0 0-56 0v4h-8a8 8 0 0 0-8 8v40a8 8 0 0 0 8 8h72a8 8 0 0 0 8-8v-40a8 8 0 0 0-8-8m-48-4a12 12 0 0 1 24 0v4h-24Zm40 44h-56v-24h56Zm0-128h-84.69L104 44.69A15.86 15.86 0 0 0 92.69 40H40a16 16 0 0 0-16 16v144.62A15.4 15.4 0 0 0 39.38 216h73.18a8 8 0 0 0 0-16H40V88h176v16a8 8 0 0 0 16 0V88a16 16 0 0 0-16-16M92.69 56l16 16H40V56Z"></svg:path>`,
})
export class PhFolderLockIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFolderLockBoldIcon],svg[ph-folder-lock-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 152h-4v-4a32 32 0 0 0-64 0v4h-4a12 12 0 0 0-12 12v44a12 12 0 0 0 12 12h72a12 12 0 0 0 12-12v-44a12 12 0 0 0-12-12m-44-4a8 8 0 0 1 16 0v4h-16Zm32 48h-48v-20h48Zm4-128h-82.61l-26-29.29a20 20 0 0 0-15-6.71H40a20 20 0 0 0-20 20v148.62A19.41 19.41 0 0 0 39.38 220h65.18a12 12 0 0 0 0-24H44V92h168a12 12 0 0 0 24 0v-4a20 20 0 0 0-20-20M44 68V56h46.61l10.67 12Z"></svg:path>`,
})
export class PhFolderLockBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFolderLockDuotoneIcon],svg[ph-folder-lock-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 168v40h-72v-40ZM92.69 48H40a8 8 0 0 0-8 8v24h96L98.34 50.34A8 8 0 0 0 92.69 48" opacity=".2"></svg:path><svg:path d="M224 160h-8v-4a28 28 0 0 0-56 0v4h-8a8 8 0 0 0-8 8v40a8 8 0 0 0 8 8h72a8 8 0 0 0 8-8v-40a8 8 0 0 0-8-8m-48-4a12 12 0 0 1 24 0v4h-24Zm40 44h-56v-24h56Zm0-128h-84.69L104 44.69A15.86 15.86 0 0 0 92.69 40H40a16 16 0 0 0-16 16v144.62A15.4 15.4 0 0 0 39.38 216h73.18a8 8 0 0 0 0-16H40V88h176v16a8 8 0 0 0 16 0V88a16 16 0 0 0-16-16M92.69 56l16 16H40V56Z"></svg:path></svg:g>`,
})
export class PhFolderLockDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFolderLockFillIcon],svg[ph-folder-lock-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 72h-84.69L104 44.69A15.86 15.86 0 0 0 92.69 40H40a16 16 0 0 0-16 16v144.62A15.4 15.4 0 0 0 39.38 216h73.18a8 8 0 0 0 0-16H40V88h176v16a8 8 0 0 0 16 0V88a16 16 0 0 0-16-16M40 72V56h52.69l16 16Zm184 88h-8v-4a28 28 0 0 0-56 0v4h-8a8 8 0 0 0-8 8v40a8 8 0 0 0 8 8h72a8 8 0 0 0 8-8v-40a8 8 0 0 0-8-8m-24 0h-24v-4a12 12 0 0 1 24 0Z"></svg:path>`,
})
export class PhFolderLockFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFolderLockLightIcon],svg[ph-folder-lock-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 162h-10v-6a26 26 0 0 0-52 0v6h-10a6 6 0 0 0-6 6v40a6 6 0 0 0 6 6h72a6 6 0 0 0 6-6v-40a6 6 0 0 0-6-6m-50-6a14 14 0 0 1 28 0v6h-28Zm44 46h-60v-28h60Zm-2-128h-85.51l-27.9-27.9a13.94 13.94 0 0 0-9.9-4.1H40a14 14 0 0 0-14 14v144.62A13.39 13.39 0 0 0 39.38 214h73.18a6 6 0 0 0 0-12H39.38a1.4 1.4 0 0 1-1.38-1.38V86h178a2 2 0 0 1 2 2v16a6 6 0 0 0 12 0V88a14 14 0 0 0-14-14M40 54h52.69a2 2 0 0 1 1.41.59L113.51 74H38V56a2 2 0 0 1 2-2"></svg:path>`,
})
export class PhFolderLockLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFolderLockThinIcon],svg[ph-folder-lock-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 164h-12v-8a24 24 0 0 0-48 0v8h-12a4 4 0 0 0-4 4v40a4 4 0 0 0 4 4h72a4 4 0 0 0 4-4v-40a4 4 0 0 0-4-4m-52-8a16 16 0 0 1 32 0v8h-32Zm48 48h-64v-32h64Zm-4-128h-86.34l-28.49-28.49A12 12 0 0 0 92.69 44H40a12 12 0 0 0-12 12v144.62A11.4 11.4 0 0 0 39.38 212h73.18a4 4 0 0 0 0-8H39.38a3.39 3.39 0 0 1-3.38-3.38V84h180a4 4 0 0 1 4 4v16a4 4 0 0 0 8 0V88a12 12 0 0 0-12-12M40 52h52.69a4 4 0 0 1 2.82 1.17L118.34 76H36V56a4 4 0 0 1 4-4"></svg:path>`,
})
export class PhFolderLockThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFolderMinusIcon],svg[ph-folder-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 72h-84.69L104 44.69A15.86 15.86 0 0 0 92.69 40H40a16 16 0 0 0-16 16v144.62A15.4 15.4 0 0 0 39.38 216h177.51A15.13 15.13 0 0 0 232 200.89V88a16 16 0 0 0-16-16M92.69 56l16 16H40V56ZM216 200H40V88h176Zm-112-64h48a8 8 0 0 1 0 16h-48a8 8 0 0 1 0-16"></svg:path>`,
})
export class PhFolderMinusIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFolderMinusBoldIcon],svg[ph-folder-minus-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M92 144a12 12 0 0 1 12-12h48a12 12 0 0 1 0 24h-48a12 12 0 0 1-12-12m144-56v112.89A19.13 19.13 0 0 1 216.89 220H39.38A19.41 19.41 0 0 1 20 200.62V52a20 20 0 0 1 20-20h52.41a20 20 0 0 1 15 6.71l26 29.29H216a20 20 0 0 1 20 20M44 68h57.28L90.61 56H44Zm168 24H44v104h168Z"></svg:path>`,
})
export class PhFolderMinusBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFolderMinusDuotoneIcon],svg[ph-folder-minus-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M128 80H32V56a8 8 0 0 1 8-8h52.69a8 8 0 0 1 5.65 2.34Z" opacity=".2"></svg:path><svg:path d="M216 72h-84.69L104 44.69A15.86 15.86 0 0 0 92.69 40H40a16 16 0 0 0-16 16v144.62A15.4 15.4 0 0 0 39.38 216h177.51A15.13 15.13 0 0 0 232 200.89V88a16 16 0 0 0-16-16M40 56h52.69l16 16H40Zm176 144H40V88h176ZM96 144a8 8 0 0 1 8-8h48a8 8 0 0 1 0 16h-48a8 8 0 0 1-8-8"></svg:path></svg:g>`,
})
export class PhFolderMinusDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFolderMinusFillIcon],svg[ph-folder-minus-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 72h-84.69L104 44.69A15.88 15.88 0 0 0 92.69 40H40a16 16 0 0 0-16 16v144.62A15.41 15.41 0 0 0 39.39 216h177.5A15.13 15.13 0 0 0 232 200.89V88a16 16 0 0 0-16-16M40 56h52.69l16 16H40Zm112 96h-48a8 8 0 0 1 0-16h48a8 8 0 0 1 0 16"></svg:path>`,
})
export class PhFolderMinusFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFolderMinusLightIcon],svg[ph-folder-minus-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 74h-85.51l-27.9-27.9a13.94 13.94 0 0 0-9.9-4.1H40a14 14 0 0 0-14 14v144.62A13.39 13.39 0 0 0 39.38 214h177.51A13.12 13.12 0 0 0 230 200.89V88a14 14 0 0 0-14-14M40 54h52.69a2 2 0 0 1 1.41.59L113.51 74H38V56a2 2 0 0 1 2-2m178 146.89a1.11 1.11 0 0 1-1.11 1.11H39.38a1.4 1.4 0 0 1-1.38-1.38V86h178a2 2 0 0 1 2 2ZM158 144a6 6 0 0 1-6 6h-48a6 6 0 0 1 0-12h48a6 6 0 0 1 6 6"></svg:path>`,
})
export class PhFolderMinusLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFolderMinusThinIcon],svg[ph-folder-minus-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 76h-86.34l-28.49-28.48A11.9 11.9 0 0 0 92.69 44H40a12 12 0 0 0-12 12v144.62A11.4 11.4 0 0 0 39.38 212h177.51A11.12 11.12 0 0 0 228 200.89V88a12 12 0 0 0-12-12M40 52h52.69a4 4 0 0 1 2.82 1.17L118.34 76H36V56a4 4 0 0 1 4-4m180 148.89a3.12 3.12 0 0 1-3.11 3.11H39.38a3.39 3.39 0 0 1-3.38-3.38V84h180a4 4 0 0 1 4 4ZM156 144a4 4 0 0 1-4 4h-48a4 4 0 0 1 0-8h48a4 4 0 0 1 4 4"></svg:path>`,
})
export class PhFolderMinusThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFolderNotchIcon],svg[ph-folder-notch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 72h-85.33l-27.74-20.8a16.12 16.12 0 0 0-9.6-3.2H40a16 16 0 0 0-16 16v136a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V88a16 16 0 0 0-16-16M40 64h53.33l21.34 16l-21.34 16H40Zm176 136H40v-88h53.33a16.12 16.12 0 0 0 9.6-3.2L130.67 88H216Z"></svg:path>`,
})
export class PhFolderNotchIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFolderNotchBoldIcon],svg[ph-folder-notch-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 68h-84l-26.67-20a20.12 20.12 0 0 0-12-4H40a20 20 0 0 0-20 20v136a20 20 0 0 0 20 20h176a20 20 0 0 0 20-20V88a20 20 0 0 0-20-20M44 68h48l16 12l-16 12H44Zm168 128H44v-80h49.33a20.12 20.12 0 0 0 12-4L132 92h80Z"></svg:path>`,
})
export class PhFolderNotchBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFolderNotchDuotoneIcon],svg[ph-folder-notch-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m128 80l-29.87 22.4a8 8 0 0 1-4.8 1.6H32V64a8 8 0 0 1 8-8h53.33a8 8 0 0 1 4.8 1.6Z" opacity=".2"></svg:path><svg:path d="M216 72h-85.33l-27.74-20.8a16.12 16.12 0 0 0-9.6-3.2H40a16 16 0 0 0-16 16v136a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V88a16 16 0 0 0-16-16M40 64h53.33l21.34 16l-21.34 16H40Zm176 136H40v-88h53.33a16.12 16.12 0 0 0 9.6-3.2L130.67 88H216Z"></svg:path></svg:g>`,
})
export class PhFolderNotchDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFolderNotchFillIcon],svg[ph-folder-notch-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 72h-85.34l-27.74-20.8a16 16 0 0 0-9.58-3.2H40a16 16 0 0 0-16 16v136a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V88a16 16 0 0 0-16-16M40 64h53.34l21.33 16l-21.34 16H40Z"></svg:path>`,
})
export class PhFolderNotchFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFolderNotchLightIcon],svg[ph-folder-notch-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 74h-86l-28.27-21.2a14 14 0 0 0-8.4-2.8H40a14 14 0 0 0-14 14v136a14 14 0 0 0 14 14h176a14 14 0 0 0 14-14V88a14 14 0 0 0-14-14M38 64a2 2 0 0 1 2-2h53.33a2 2 0 0 1 1.2.4L118 80L94.53 97.6a2 2 0 0 1-1.2.4H38Zm180 136a2 2 0 0 1-2 2H40a2 2 0 0 1-2-2v-90h55.33a14 14 0 0 0 8.4-2.8L130 86h86a2 2 0 0 1 2 2Z"></svg:path>`,
})
export class PhFolderNotchLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFolderNotchMinusIcon],svg[ph-folder-notch-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 72h-85.33l-27.74-20.8a16.12 16.12 0 0 0-9.6-3.2H40a16 16 0 0 0-16 16v136a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V88a16 16 0 0 0-16-16M40 64h53.33l21.34 16l-21.34 16H40Zm176 136H40v-88h53.33a16.12 16.12 0 0 0 9.6-3.2L130.67 88H216Zm-112-56h48a8 8 0 0 1 0 16h-48a8 8 0 0 1 0-16"></svg:path>`,
})
export class PhFolderNotchMinusIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFolderNotchMinusBoldIcon],svg[ph-folder-notch-minus-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 68h-84l-26.67-20a20.12 20.12 0 0 0-12-4H40a20 20 0 0 0-20 20v136a20 20 0 0 0 20 20h176a20 20 0 0 0 20-20V88a20 20 0 0 0-20-20M44 68h48l16 12l-16 12H44Zm168 128H44v-80h49.33a20.12 20.12 0 0 0 12-4L132 92h80Zm-60-56a12 12 0 0 1 0 24h-48a12 12 0 0 1 0-24Z"></svg:path>`,
})
export class PhFolderNotchMinusBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFolderNotchMinusDuotoneIcon],svg[ph-folder-notch-minus-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m128 80l-29.87 22.4a8 8 0 0 1-4.8 1.6H32V64a8 8 0 0 1 8-8h53.33a8 8 0 0 1 4.8 1.6Z" opacity=".2"></svg:path><svg:path d="M216 72h-85.33l-27.74-20.8a16.12 16.12 0 0 0-9.6-3.2H40a16 16 0 0 0-16 16v136a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V88a16 16 0 0 0-16-16M40 64h53.33l21.34 16l-21.34 16H40Zm176 136H40v-88h53.33a16.12 16.12 0 0 0 9.6-3.2L130.67 88H216Zm-64-56a8 8 0 0 1 0 16h-48a8 8 0 0 1 0-16Z"></svg:path></svg:g>`,
})
export class PhFolderNotchMinusDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFolderNotchMinusFillIcon],svg[ph-folder-notch-minus-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 72h-85.34l-27.74-20.8a16 16 0 0 0-9.58-3.2H40a16 16 0 0 0-16 16v136a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V88a16 16 0 0 0-16-16M40 96V64h53.34l21.33 16l-21.34 16Zm112 64h-48a8 8 0 0 1 0-16h48a8 8 0 0 1 0 16"></svg:path>`,
})
export class PhFolderNotchMinusFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFolderNotchMinusLightIcon],svg[ph-folder-notch-minus-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 74h-86l-28.27-21.2a14 14 0 0 0-8.4-2.8H40a14 14 0 0 0-14 14v136a14 14 0 0 0 14 14h176a14 14 0 0 0 14-14V88a14 14 0 0 0-14-14M38 64a2 2 0 0 1 2-2h53.33a2 2 0 0 1 1.2.4L118 80L94.53 97.6a2 2 0 0 1-1.2.4H38Zm180 136a2 2 0 0 1-2 2H40a2 2 0 0 1-2-2v-90h55.33a14 14 0 0 0 8.4-2.8L130 86h86a2 2 0 0 1 2 2Zm-60-48a6 6 0 0 1-6 6h-48a6 6 0 0 1 0-12h48a6 6 0 0 1 6 6"></svg:path>`,
})
export class PhFolderNotchMinusLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFolderNotchMinusThinIcon],svg[ph-folder-notch-minus-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 76h-86.67l-28.8-21.6a12.05 12.05 0 0 0-7.2-2.4H40a12 12 0 0 0-12 12v136a12 12 0 0 0 12 12h176a12 12 0 0 0 12-12V88a12 12 0 0 0-12-12M36 64a4 4 0 0 1 4-4h53.33a4 4 0 0 1 2.4.8l25.6 19.2l-25.6 19.2a4 4 0 0 1-2.4.8H36Zm184 136a4 4 0 0 1-4 4H40a4 4 0 0 1-4-4v-92h57.33a12.05 12.05 0 0 0 7.2-2.4l28.8-21.6H216a4 4 0 0 1 4 4Zm-64-48a4 4 0 0 1-4 4h-48a4 4 0 0 1 0-8h48a4 4 0 0 1 4 4"></svg:path>`,
})
export class PhFolderNotchMinusThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFolderNotchOpenIcon],svg[ph-folder-notch-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M245 110.64a16 16 0 0 0-13-6.64h-16V88a16 16 0 0 0-16-16h-69.33l-27.73-20.8a16.14 16.14 0 0 0-9.6-3.2H40a16 16 0 0 0-16 16v144a8 8 0 0 0 8 8h179.1a8 8 0 0 0 7.59-5.47l28.49-85.47a16.05 16.05 0 0 0-2.18-14.42M93.34 64l27.73 20.8a16.12 16.12 0 0 0 9.6 3.2H200v16h-53.57a16 16 0 0 0-8.88 2.69l-20 13.31H69.42a15.94 15.94 0 0 0-14.86 10.06L40 166.46V64Zm112 136H43.82l25.6-64h48.16a16 16 0 0 0 8.88-2.69l20-13.31H232Z"></svg:path>`,
})
export class PhFolderNotchOpenIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFolderNotchOpenBoldIcon],svg[ph-folder-notch-open-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M248.23 112.31A20 20 0 0 0 232 104h-12V88a20 20 0 0 0-20-20h-68l-26.66-20a20.12 20.12 0 0 0-12-4H40a20 20 0 0 0-20 20v144a12 12 0 0 0 12 12h179.1a12 12 0 0 0 11.33-8l28.49-81.47l.06-.17a20 20 0 0 0-2.75-18.05M92 68l26.67 20a20.12 20.12 0 0 0 12 4H196v12h-49.57a20 20 0 0 0-11.1 3.36l-19 12.64H69.42a19.91 19.91 0 0 0-18.52 12.44L44 148.77V68Zm110.59 128H50.1l22-52h45.51a20 20 0 0 0 11.1-3.36l19-12.64h78.73Z"></svg:path>`,
})
export class PhFolderNotchOpenBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFolderNotchOpenDuotoneIcon],svg[ph-folder-notch-open-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 88v24h-61.58a8.07 8.07 0 0 0-4.44 1.34l-20 13.32a8.07 8.07 0 0 1-4.44 1.34H69.42a8 8 0 0 0-7.42 5l-30 75V64a8 8 0 0 1 8-8h53.33a8 8 0 0 1 4.8 1.6l27.74 20.8a8 8 0 0 0 4.8 1.6H200a8 8 0 0 1 8 8" opacity=".2"></svg:path><svg:path d="M245 110.64a16 16 0 0 0-13-6.64h-16V88a16 16 0 0 0-16-16h-69.33l-27.73-20.8a16.14 16.14 0 0 0-9.6-3.2H40a16 16 0 0 0-16 16v144a8 8 0 0 0 8 8h179.1a8 8 0 0 0 7.59-5.47l28.49-85.47a16.05 16.05 0 0 0-2.18-14.42M93.34 64l27.73 20.8a16.12 16.12 0 0 0 9.6 3.2H200v16h-53.57a16 16 0 0 0-8.88 2.69l-20 13.31H69.42a15.94 15.94 0 0 0-14.86 10.06L40 166.46V64Zm112 136H43.82l25.6-64h48.16a16 16 0 0 0 8.88-2.69l20-13.31H232Z"></svg:path></svg:g>`,
})
export class PhFolderNotchOpenDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFolderNotchOpenFillIcon],svg[ph-folder-notch-open-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M245 110.64a16 16 0 0 0-13-6.64h-16V88a16 16 0 0 0-16-16h-69.33l-27.73-20.8a16.14 16.14 0 0 0-9.6-3.2H40a16 16 0 0 0-16 16v144a8 8 0 0 0 8 8h179.1a8 8 0 0 0 7.59-5.47l28.49-85.47a16.05 16.05 0 0 0-2.18-14.42M93.34 64l27.73 20.8a16.12 16.12 0 0 0 9.6 3.2H200v16h-53.57a16 16 0 0 0-8.88 2.69l-20 13.31H69.42a15.94 15.94 0 0 0-14.86 10.06L40 166.46V64Z"></svg:path>`,
})
export class PhFolderNotchOpenFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFolderNotchOpenLightIcon],svg[ph-folder-notch-open-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M243.36 111.81A14 14 0 0 0 232 106h-18V88a14 14 0 0 0-14-14h-69.33a2 2 0 0 1-1.2-.4l-27.73-20.8a14.06 14.06 0 0 0-8.4-2.8H40a14 14 0 0 0-14 14v144a6 6 0 0 0 6 6h179.1a6 6 0 0 0 5.69-4.1l28.49-85.47a14 14 0 0 0-1.92-12.62M40 62h53.34a2 2 0 0 1 1.2.4l27.73 20.8a14.06 14.06 0 0 0 8.4 2.8H200a2 2 0 0 1 2 2v18h-55.57a13.94 13.94 0 0 0-7.77 2.35l-20 13.31a2 2 0 0 1-1.11.34H69.42a13.93 13.93 0 0 0-13 8.8L38 176.84V64a2 2 0 0 1 2-2m193.9 58.63L206.78 202H40.86l26.7-66.74a2 2 0 0 1 1.86-1.26h48.16a13.94 13.94 0 0 0 7.77-2.35l20-13.31a2 2 0 0 1 1.11-.34H232a2 2 0 0 1 1.9 2.63"></svg:path>`,
})
export class PhFolderNotchOpenLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFolderNotchOpenThinIcon],svg[ph-folder-notch-open-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M241.72 113a11.88 11.88 0 0 0-9.73-5H212V88a12 12 0 0 0-12-12h-69.34a4 4 0 0 1-2.4-.8l-27.73-20.8a12.05 12.05 0 0 0-7.2-2.4H40a12 12 0 0 0-12 12v144a3.94 3.94 0 0 0 .69 2.24A4 4 0 0 0 32 212h179.09a4 4 0 0 0 3.79-2.74l28.49-85.47a11.86 11.86 0 0 0-1.65-10.79M40 60h53.33a4 4 0 0 1 2.4.8l27.73 20.8a12.07 12.07 0 0 0 7.2 2.4H200a4 4 0 0 1 4 4v20h-57.58a12 12 0 0 0-6.66 2l-20 13.31a4 4 0 0 1-2.22.67H69.41a12 12 0 0 0-11.14 7.54L36 187.23V64a4 4 0 0 1 4-4m195.78 61.27L208.2 204H37.91l27.79-69.49a4 4 0 0 1 3.71-2.51h48.16a12 12 0 0 0 6.66-2l20-13.31a4 4 0 0 1 2.22-.67H232a4 4 0 0 1 3.79 5.27Z"></svg:path>`,
})
export class PhFolderNotchOpenThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFolderNotchPlusIcon],svg[ph-folder-notch-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 120a8 8 0 0 1 8 8v16h16a8 8 0 0 1 0 16h-16v16a8 8 0 0 1-16 0v-16h-16a8 8 0 0 1 0-16h16v-16a8 8 0 0 1 8-8m104-32v112a16 16 0 0 1-16 16H40a16 16 0 0 1-16-16V64a16 16 0 0 1 16-16h53.33a16.12 16.12 0 0 1 9.6 3.2L130.67 72H216a16 16 0 0 1 16 16M40 96h53.33l21.34-16l-21.34-16H40Zm176-8h-85.33l-27.74 20.8a16.12 16.12 0 0 1-9.6 3.2H40v88h176Z"></svg:path>`,
})
export class PhFolderNotchPlusIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFolderNotchPlusBoldIcon],svg[ph-folder-notch-plus-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 68h-84l-26.67-20a20.12 20.12 0 0 0-12-4H40a20 20 0 0 0-20 20v136a20 20 0 0 0 20 20h176a20 20 0 0 0 20-20V88a20 20 0 0 0-20-20M44 68h48l16 12l-16 12H44Zm168 128H44v-80h49.33a20.12 20.12 0 0 0 12-4L132 92h80Zm-72-72v12h12a12 12 0 0 1 0 24h-12v12a12 12 0 0 1-24 0v-12h-12a12 12 0 0 1 0-24h12v-12a12 12 0 0 1 24 0"></svg:path>`,
})
export class PhFolderNotchPlusBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFolderNotchPlusDuotoneIcon],svg[ph-folder-notch-plus-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m128 80l-29.87 22.4a8 8 0 0 1-4.8 1.6H32V64a8 8 0 0 1 8-8h53.33a8 8 0 0 1 4.8 1.6Z" opacity=".2"></svg:path><svg:path d="M216 72h-85.33l-27.74-20.8a16.12 16.12 0 0 0-9.6-3.2H40a16 16 0 0 0-16 16v136a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V88a16 16 0 0 0-16-16M40 64h53.33l21.34 16l-21.34 16H40Zm176 136H40v-88h53.33a16.12 16.12 0 0 0 9.6-3.2L130.67 88H216Zm-80-72v16h16a8 8 0 0 1 0 16h-16v16a8 8 0 0 1-16 0v-16h-16a8 8 0 0 1 0-16h16v-16a8 8 0 0 1 16 0"></svg:path></svg:g>`,
})
export class PhFolderNotchPlusDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFolderNotchPlusFillIcon],svg[ph-folder-notch-plus-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 72h-85.34l-27.74-20.8a16 16 0 0 0-9.58-3.2H40a16 16 0 0 0-16 16v136a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V88a16 16 0 0 0-16-16M40 96V64h53.34l21.33 16l-21.34 16Zm112 64h-16v16a8 8 0 0 1-16 0v-16h-16a8 8 0 0 1 0-16h16v-16a8 8 0 0 1 16 0v16h16a8 8 0 0 1 0 16"></svg:path>`,
})
export class PhFolderNotchPlusFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFolderNotchPlusLightIcon],svg[ph-folder-notch-plus-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 74h-86l-28.27-21.2a14 14 0 0 0-8.4-2.8H40a14 14 0 0 0-14 14v136a14 14 0 0 0 14 14h176a14 14 0 0 0 14-14V88a14 14 0 0 0-14-14M38 64a2 2 0 0 1 2-2h53.33a2 2 0 0 1 1.2.4L118 80L94.53 97.6a2 2 0 0 1-1.2.4H38Zm180 136a2 2 0 0 1-2 2H40a2 2 0 0 1-2-2v-90h55.33a14 14 0 0 0 8.4-2.8L130 86h86a2 2 0 0 1 2 2Zm-60-48a6 6 0 0 1-6 6h-18v18a6 6 0 0 1-12 0v-18h-18a6 6 0 0 1 0-12h18v-18a6 6 0 0 1 12 0v18h18a6 6 0 0 1 6 6"></svg:path>`,
})
export class PhFolderNotchPlusLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFolderNotchPlusThinIcon],svg[ph-folder-notch-plus-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 76h-86.67l-28.8-21.6a12.05 12.05 0 0 0-7.2-2.4H40a12 12 0 0 0-12 12v136a12 12 0 0 0 12 12h176a12 12 0 0 0 12-12V88a12 12 0 0 0-12-12M36 64a4 4 0 0 1 4-4h53.33a4 4 0 0 1 2.4.8l25.6 19.2l-25.6 19.2a4 4 0 0 1-2.4.8H36Zm184 136a4 4 0 0 1-4 4H40a4 4 0 0 1-4-4v-92h57.33a12.05 12.05 0 0 0 7.2-2.4l28.8-21.6H216a4 4 0 0 1 4 4Zm-64-48a4 4 0 0 1-4 4h-20v20a4 4 0 0 1-8 0v-20h-20a4 4 0 0 1 0-8h20v-20a4 4 0 0 1 8 0v20h20a4 4 0 0 1 4 4"></svg:path>`,
})
export class PhFolderNotchPlusThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFolderNotchThinIcon],svg[ph-folder-notch-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 76h-86.67l-28.8-21.6a12.05 12.05 0 0 0-7.2-2.4H40a12 12 0 0 0-12 12v136a12 12 0 0 0 12 12h176a12 12 0 0 0 12-12V88a12 12 0 0 0-12-12M36 64a4 4 0 0 1 4-4h53.33a4 4 0 0 1 2.4.8l25.6 19.2l-25.6 19.2a4 4 0 0 1-2.4.8H36Zm184 136a4 4 0 0 1-4 4H40a4 4 0 0 1-4-4v-92h57.33a12.05 12.05 0 0 0 7.2-2.4l28.8-21.6H216a4 4 0 0 1 4 4Z"></svg:path>`,
})
export class PhFolderNotchThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFolderOpenIcon],svg[ph-folder-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M245 110.64a16 16 0 0 0-13-6.64h-16V88a16 16 0 0 0-16-16h-69.33l-27.73-20.8a16.14 16.14 0 0 0-9.6-3.2H40a16 16 0 0 0-16 16v144a8 8 0 0 0 8 8h179.1a8 8 0 0 0 7.59-5.47l28.49-85.47a16.05 16.05 0 0 0-2.18-14.42M93.34 64l29.86 22.4A8 8 0 0 0 128 88h72v16H69.77a16 16 0 0 0-15.18 10.94L40 158.7V64Zm112 136H43.1l26.67-80H232Z"></svg:path>`,
})
export class PhFolderOpenIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFolderOpenBoldIcon],svg[ph-folder-open-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M248.23 112.31A20 20 0 0 0 232 104h-12V88a20 20 0 0 0-20-20h-68l-26.66-20a20.12 20.12 0 0 0-12-4H40a20 20 0 0 0-20 20v144a12 12 0 0 0 12 12h179.1a12 12 0 0 0 11.33-8l28.49-81.47l.06-.17a20 20 0 0 0-2.75-18.05M92 68l28.8 21.6A12 12 0 0 0 128 92h68v12H69.77a20 20 0 0 0-18.94 13.58L44 137.15V68Zm110.59 128H48.89l23.72-68h153.76Z"></svg:path>`,
})
export class PhFolderOpenBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFolderOpenDuotoneIcon],svg[ph-folder-open-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 88v24H69.77a8 8 0 0 0-7.59 5.47L32 208V64a8 8 0 0 1 8-8h53.33a8 8 0 0 1 4.8 1.6L128 80h72a8 8 0 0 1 8 8" opacity=".2"></svg:path><svg:path d="M245 110.64a16 16 0 0 0-13-6.64h-16V88a16 16 0 0 0-16-16h-69.33l-27.73-20.8a16.14 16.14 0 0 0-9.6-3.2H40a16 16 0 0 0-16 16v144a8 8 0 0 0 8 8h179.1a8 8 0 0 0 7.59-5.47l28.49-85.47a16.05 16.05 0 0 0-2.18-14.42M93.34 64l29.86 22.4A8 8 0 0 0 128 88h72v16H69.77a16 16 0 0 0-15.18 10.94L40 158.7V64Zm112 136H43.1l26.67-80H232Z"></svg:path></svg:g>`,
})
export class PhFolderOpenDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFolderOpenFillIcon],svg[ph-folder-open-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M245 110.64a16 16 0 0 0-13-6.64h-16V88a16 16 0 0 0-16-16h-69.33l-27.73-20.8a16.14 16.14 0 0 0-9.6-3.2H40a16 16 0 0 0-16 16v144a8 8 0 0 0 8 8h179.1a8 8 0 0 0 7.59-5.47l28.49-85.47a16.05 16.05 0 0 0-2.18-14.42M93.34 64l29.86 22.4A8 8 0 0 0 128 88h72v16H69.77a16 16 0 0 0-15.18 10.94L40 158.7V64Z"></svg:path>`,
})
export class PhFolderOpenFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFolderOpenLightIcon],svg[ph-folder-open-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M243.36 111.81A14 14 0 0 0 232 106h-18V88a14 14 0 0 0-14-14h-70l-28.26-21.2a14.06 14.06 0 0 0-8.4-2.8H40a14 14 0 0 0-14 14v144a6 6 0 0 0 6 6h179.1a6 6 0 0 0 5.69-4.1l28.49-85.47a14 14 0 0 0-1.92-12.62M40 62h53.34a2 2 0 0 1 1.2.4l29.86 22.4A6 6 0 0 0 128 86h72a2 2 0 0 1 2 2v18H69.77a14 14 0 0 0-13.28 9.57L38 171V64a2 2 0 0 1 2-2m193.9 58.63L206.78 202H40.33l27.54-82.63a2 2 0 0 1 1.9-1.37H232a2 2 0 0 1 1.9 2.63"></svg:path>`,
})
export class PhFolderOpenLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFolderOpenThinIcon],svg[ph-folder-open-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M241.72 113a11.88 11.88 0 0 0-9.73-5H212V88a12 12 0 0 0-12-12h-70.67l-28.8-21.6a12.05 12.05 0 0 0-7.2-2.4H40a12 12 0 0 0-12 12v144a4 4 0 0 0 4 4h179.09a4 4 0 0 0 3.79-2.74l28.49-85.47a11.86 11.86 0 0 0-1.65-10.79M40 60h53.33a4 4 0 0 1 2.4.8l29.87 22.4a4 4 0 0 0 2.4.8h72a4 4 0 0 1 4 4v20H69.76a12 12 0 0 0-11.38 8.21L36 183.35V64a4 4 0 0 1 4-4m195.78 61.26L208.2 204H37.55L66 118.74a4 4 0 0 1 3.76-2.74H232a4 4 0 0 1 3.79 5.26Z"></svg:path>`,
})
export class PhFolderOpenThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFolderPlusIcon],svg[ph-folder-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 72h-84.69L104 44.69A15.86 15.86 0 0 0 92.69 40H40a16 16 0 0 0-16 16v144.62A15.4 15.4 0 0 0 39.38 216h177.51A15.13 15.13 0 0 0 232 200.89V88a16 16 0 0 0-16-16M92.69 56l16 16H40V56ZM216 200H40V88h176Zm-88-88a8 8 0 0 1 8 8v16h16a8 8 0 0 1 0 16h-16v16a8 8 0 0 1-16 0v-16h-16a8 8 0 0 1 0-16h16v-16a8 8 0 0 1 8-8"></svg:path>`,
})
export class PhFolderPlusIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFolderPlusBoldIcon],svg[ph-folder-plus-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 68h-82.61l-26-29.29a20 20 0 0 0-15-6.71H40a20 20 0 0 0-20 20v148.62A19.41 19.41 0 0 0 39.38 220h177.51A19.13 19.13 0 0 0 236 200.89V88a20 20 0 0 0-20-20M90.61 56l10.67 12H44V56ZM212 196H44V92h168Zm-72-76v12h12a12 12 0 0 1 0 24h-12v12a12 12 0 0 1-24 0v-12h-12a12 12 0 0 1 0-24h12v-12a12 12 0 0 1 24 0"></svg:path>`,
})
export class PhFolderPlusBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFolderPlusDuotoneIcon],svg[ph-folder-plus-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M128 80H32V56a8 8 0 0 1 8-8h52.69a8 8 0 0 1 5.65 2.34Z" opacity=".2"></svg:path><svg:path d="M216 72h-84.69L104 44.69A15.86 15.86 0 0 0 92.69 40H40a16 16 0 0 0-16 16v144.62A15.4 15.4 0 0 0 39.38 216h177.51A15.13 15.13 0 0 0 232 200.89V88a16 16 0 0 0-16-16M92.69 56l16 16H40V56ZM216 200H40V88h176Zm-88-88a8 8 0 0 1 8 8v16h16a8 8 0 0 1 0 16h-16v16a8 8 0 0 1-16 0v-16h-16a8 8 0 0 1 0-16h16v-16a8 8 0 0 1 8-8"></svg:path></svg:g>`,
})
export class PhFolderPlusDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFolderPlusFillIcon],svg[ph-folder-plus-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 72h-84.69L104 44.69A15.88 15.88 0 0 0 92.69 40H40a16 16 0 0 0-16 16v144.62A15.41 15.41 0 0 0 39.39 216h177.5A15.13 15.13 0 0 0 232 200.89V88a16 16 0 0 0-16-16M40 56h52.69l16 16H40Zm112 96h-16v16a8 8 0 0 1-16 0v-16h-16a8 8 0 0 1 0-16h16v-16a8 8 0 0 1 16 0v16h16a8 8 0 0 1 0 16"></svg:path>`,
})
export class PhFolderPlusFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFolderPlusLightIcon],svg[ph-folder-plus-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 74h-85.51l-27.9-27.9a13.94 13.94 0 0 0-9.9-4.1H40a14 14 0 0 0-14 14v144.62A13.39 13.39 0 0 0 39.38 214h177.51A13.12 13.12 0 0 0 230 200.89V88a14 14 0 0 0-14-14M40 54h52.69a2 2 0 0 1 1.41.59L113.51 74H38V56a2 2 0 0 1 2-2m178 146.89a1.11 1.11 0 0 1-1.11 1.11H39.38a1.4 1.4 0 0 1-1.38-1.38V86h178a2 2 0 0 1 2 2ZM158 144a6 6 0 0 1-6 6h-18v18a6 6 0 0 1-12 0v-18h-18a6 6 0 0 1 0-12h18v-18a6 6 0 0 1 12 0v18h18a6 6 0 0 1 6 6"></svg:path>`,
})
export class PhFolderPlusLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFolderPlusThinIcon],svg[ph-folder-plus-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 76h-86.34l-28.49-28.48A11.9 11.9 0 0 0 92.69 44H40a12 12 0 0 0-12 12v144.62A11.4 11.4 0 0 0 39.38 212h177.51A11.12 11.12 0 0 0 228 200.89V88a12 12 0 0 0-12-12M40 52h52.69a4 4 0 0 1 2.82 1.17L118.34 76H36V56a4 4 0 0 1 4-4m180 148.89a3.12 3.12 0 0 1-3.11 3.11H39.38a3.39 3.39 0 0 1-3.38-3.38V84h180a4 4 0 0 1 4 4ZM156 144a4 4 0 0 1-4 4h-20v20a4 4 0 0 1-8 0v-20h-20a4 4 0 0 1 0-8h20v-20a4 4 0 0 1 8 0v20h20a4 4 0 0 1 4 4"></svg:path>`,
})
export class PhFolderPlusThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFolderSimpleIcon],svg[ph-folder-simple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 72h-85.33l-27.74-20.8a16.12 16.12 0 0 0-9.6-3.2H40a16 16 0 0 0-16 16v136a16 16 0 0 0 16 16h176.89A15.13 15.13 0 0 0 232 200.89V88a16 16 0 0 0-16-16m0 128H40V64h53.33l29.87 22.4A8 8 0 0 0 128 88h88Z"></svg:path>`,
})
export class PhFolderSimpleIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFolderSimpleBoldIcon],svg[ph-folder-simple-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 68h-84l-26.67-20a20.12 20.12 0 0 0-12-4H40a20 20 0 0 0-20 20v136a20 20 0 0 0 20 20h176.89A19.13 19.13 0 0 0 236 200.89V88a20 20 0 0 0-20-20m-4 128H44V68h48l28.8 21.6A12 12 0 0 0 128 92h84Z"></svg:path>`,
})
export class PhFolderSimpleBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFolderSimpleDashedIcon],svg[ph-folder-simple-dashed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24 80V64a16 16 0 0 1 16-16h53.33a16.12 16.12 0 0 1 9.6 3.2l29.87 22.4a8 8 0 1 1-9.6 12.8L93.33 64H40v16a8 8 0 0 1-16 0m64 120H40v-8a8 8 0 0 0-16 0v8.62A15.4 15.4 0 0 0 39.38 216H88a8 8 0 0 0 0-16m72 0h-32a8 8 0 0 0 0 16h32a8 8 0 0 0 0-16m64-56a8 8 0 0 0-8 8v48h-16a8 8 0 0 0 0 16h16.89A15.13 15.13 0 0 0 232 200.89V152a8 8 0 0 0-8-8m-8-72h-48a8 8 0 0 0 0 16h48v24a8 8 0 0 0 16 0V88a16 16 0 0 0-16-16M32 160a8 8 0 0 0 8-8v-32a8 8 0 0 0-16 0v32a8 8 0 0 0 8 8"></svg:path>`,
})
export class PhFolderSimpleDashedIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFolderSimpleDashedBoldIcon],svg[ph-folder-simple-dashed-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 80V64a20 20 0 0 1 20-20h53.33a20.12 20.12 0 0 1 12 4l29.87 22.4a12 12 0 1 1-14.4 19.2L92 68H44v12a12 12 0 0 1-24 0m68 116H44v-4a12 12 0 0 0-24 0v8.62A19.41 19.41 0 0 0 39.38 220H88a12 12 0 0 0 0-24m72 0h-32a12 12 0 0 0 0 24h32a12 12 0 0 0 0-24m64-56a12 12 0 0 0-12 12v44h-12a12 12 0 0 0 0 24h16.89A19.13 19.13 0 0 0 236 200.89V152a12 12 0 0 0-12-12m-8-72h-48a12 12 0 0 0 0 24h44v20a12 12 0 0 0 24 0V88a20 20 0 0 0-20-20M32 164a12 12 0 0 0 12-12v-32a12 12 0 0 0-24 0v32a12 12 0 0 0 12 12"></svg:path>`,
})
export class PhFolderSimpleDashedBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFolderSimpleDashedDuotoneIcon],svg[ph-folder-simple-dashed-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 88v112.89a7.11 7.11 0 0 1-7.11 7.11H40a8 8 0 0 1-8-8V64a8 8 0 0 1 8-8h53.33a8 8 0 0 1 4.8 1.6l27.74 20.8a8 8 0 0 0 4.8 1.6H216a8 8 0 0 1 8 8" opacity=".2"></svg:path><svg:path d="M24 80V64a16 16 0 0 1 16-16h53.33a16.12 16.12 0 0 1 9.6 3.2l29.87 22.4a8 8 0 1 1-9.6 12.8L93.33 64H40v16a8 8 0 0 1-16 0m64 120H40v-8a8 8 0 0 0-16 0v8.62A15.4 15.4 0 0 0 39.38 216H88a8 8 0 0 0 0-16m72 0h-32a8 8 0 0 0 0 16h32a8 8 0 0 0 0-16m64-56a8 8 0 0 0-8 8v48h-16a8 8 0 0 0 0 16h16.89A15.13 15.13 0 0 0 232 200.89V152a8 8 0 0 0-8-8m-8-72h-48a8 8 0 0 0 0 16h48v24a8 8 0 0 0 16 0V88a16 16 0 0 0-16-16M32 160a8 8 0 0 0 8-8v-32a8 8 0 0 0-16 0v32a8 8 0 0 0 8 8"></svg:path></svg:g>`,
})
export class PhFolderSimpleDashedDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFolderSimpleDashedFillIcon],svg[ph-folder-simple-dashed-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24 80V64a16 16 0 0 1 16-16h53.33a16.12 16.12 0 0 1 9.6 3.2l29.87 22.4A8 8 0 0 1 128 88H32a8 8 0 0 1-8-8m64 120H40v-8a8 8 0 0 0-16 0v8.62A15.4 15.4 0 0 0 39.38 216H88a8 8 0 0 0 0-16m72 0h-32a8 8 0 0 0 0 16h32a8 8 0 0 0 0-16m64-56a8 8 0 0 0-8 8v48h-16a8 8 0 0 0 0 16h16.89A15.13 15.13 0 0 0 232 200.89V152a8 8 0 0 0-8-8m-8-72h-48a8 8 0 0 0 0 16h48v24a8 8 0 0 0 16 0V88a16 16 0 0 0-16-16M32 160a8 8 0 0 0 8-8v-32a8 8 0 0 0-16 0v32a8 8 0 0 0 8 8"></svg:path>`,
})
export class PhFolderSimpleDashedFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFolderSimpleDashedLightIcon],svg[ph-folder-simple-dashed-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M124.4 84.8L94.53 62.4a2 2 0 0 0-1.2-.4H40a2 2 0 0 0-2 2v16a6 6 0 0 1-12 0V64a14 14 0 0 1 14-14h53.33a14 14 0 0 1 8.4 2.8l29.87 22.4a6 6 0 0 1-7.2 9.6M88 202H39.38a1.4 1.4 0 0 1-1.38-1.38V192a6 6 0 0 0-12 0v8.62A13.39 13.39 0 0 0 39.38 214H88a6 6 0 0 0 0-12m72 0h-32a6 6 0 0 0 0 12h32a6 6 0 0 0 0-12m64-56a6 6 0 0 0-6 6v48.89a1.11 1.11 0 0 1-1.11 1.11H200a6 6 0 0 0 0 12h16.89A13.12 13.12 0 0 0 230 200.89V152a6 6 0 0 0-6-6m-8-72h-48a6 6 0 0 0 0 12h48a2 2 0 0 1 2 2v24a6 6 0 0 0 12 0V88a14 14 0 0 0-14-14M32 158a6 6 0 0 0 6-6v-32a6 6 0 0 0-12 0v32a6 6 0 0 0 6 6"></svg:path>`,
})
export class PhFolderSimpleDashedLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFolderSimpleDashedThinIcon],svg[ph-folder-simple-dashed-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M125.6 83.2L95.73 60.8a4 4 0 0 0-2.4-.8H40a4 4 0 0 0-4 4v16a4 4 0 0 1-8 0V64a12 12 0 0 1 12-12h53.33a12.05 12.05 0 0 1 7.2 2.4l29.87 22.4a4 4 0 1 1-4.8 6.4M88 204H39.38a3.39 3.39 0 0 1-3.38-3.38V192a4 4 0 0 0-8 0v8.62A11.4 11.4 0 0 0 39.38 212H88a4 4 0 0 0 0-8m72 0h-32a4 4 0 0 0 0 8h32a4 4 0 0 0 0-8m64-56a4 4 0 0 0-4 4v48.89a3.12 3.12 0 0 1-3.11 3.11H200a4 4 0 0 0 0 8h16.89A11.12 11.12 0 0 0 228 200.89V152a4 4 0 0 0-4-4m-8-72h-48a4 4 0 0 0 0 8h48a4 4 0 0 1 4 4v24a4 4 0 0 0 8 0V88a12 12 0 0 0-12-12M32 156a4 4 0 0 0 4-4v-32a4 4 0 0 0-8 0v32a4 4 0 0 0 4 4"></svg:path>`,
})
export class PhFolderSimpleDashedThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFolderSimpleDottedIcon],svg[ph-folder-simple-dotted-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24 80V64a16 16 0 0 1 16-16h53.3a15.6 15.6 0 0 1 9.6 3.2l29.9 22.4A8 8 0 0 1 128 88a7.7 7.7 0 0 1-4.8-1.6L93.3 64H40v16a8 8 0 0 1-16 0Zm64 120H40v-8a8 8 0 0 0-16 0v8.6A15.4 15.4 0 0 0 39.4 216H88a8 8 0 0 0 0-16Zm72 0h-32a8 8 0 0 0 0 16h32a8 8 0 0 0 0-16Zm64-56a8 8 0 0 0-8 8v48h-16a8 8 0 0 0 0 16h16.9a15.2 15.2 0 0 0 15.1-15.1V152a8 8 0 0 0-8-8Zm-8-72h-48a8 8 0 0 0 0 16h48v24a8 8 0 0 0 16 0V88a16 16 0 0 0-16-16ZM32 160a8 8 0 0 0 8-8v-32a8 8 0 0 0-16 0v32a8 8 0 0 0 8 8Z"></svg:path>`,
})
export class PhFolderSimpleDottedIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFolderSimpleDottedBoldIcon],svg[ph-folder-simple-dotted-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 80V64a20.1 20.1 0 0 1 20-20h53.3a19.9 19.9 0 0 1 12 4l29.9 22.4a12 12 0 0 1 2.4 16.8a12 12 0 0 1-16.8 2.4L92 68H44v12a12 12 0 0 1-24 0Zm68 116H44v-4a12 12 0 0 0-24 0v8.6A19.4 19.4 0 0 0 39.4 220H88a12 12 0 0 0 0-24Zm72 0h-32a12 12 0 0 0 0 24h32a12 12 0 0 0 0-24Zm64-56a12 12 0 0 0-12 12v44h-12a12 12 0 0 0 0 24h16.9a19.2 19.2 0 0 0 19.1-19.1V152a12 12 0 0 0-12-12Zm-8-72h-48a12 12 0 0 0 0 24h44v20a12 12 0 0 0 24 0V88a20.1 20.1 0 0 0-20-20ZM32 164a12 12 0 0 0 12-12v-32a12 12 0 0 0-24 0v32a12 12 0 0 0 12 12Z"></svg:path>`,
})
export class PhFolderSimpleDottedBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFolderSimpleDottedDuotoneIcon],svg[ph-folder-simple-dotted-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 88v112.9a7.1 7.1 0 0 1-7.1 7.1H40a8 8 0 0 1-8-8V64a8 8 0 0 1 8-8h53.3a8.1 8.1 0 0 1 4.8 1.6l27.8 20.8a8.1 8.1 0 0 0 4.8 1.6H216a8 8 0 0 1 8 8Z" opacity=".2"></svg:path><svg:path fill="currentColor" d="M24 80V64a16 16 0 0 1 16-16h53.3a15.6 15.6 0 0 1 9.6 3.2l29.9 22.4A8 8 0 0 1 128 88a7.7 7.7 0 0 1-4.8-1.6L93.3 64H40v16a8 8 0 0 1-16 0Zm64 120H40v-8a8 8 0 0 0-16 0v8.6A15.4 15.4 0 0 0 39.4 216H88a8 8 0 0 0 0-16Zm72 0h-32a8 8 0 0 0 0 16h32a8 8 0 0 0 0-16Zm64-56a8 8 0 0 0-8 8v48h-16a8 8 0 0 0 0 16h16.9a15.2 15.2 0 0 0 15.1-15.1V152a8 8 0 0 0-8-8Zm-8-72h-48a8 8 0 0 0 0 16h48v24a8 8 0 0 0 16 0V88a16 16 0 0 0-16-16ZM32 160a8 8 0 0 0 8-8v-32a8 8 0 0 0-16 0v32a8 8 0 0 0 8 8Z"></svg:path>`,
})
export class PhFolderSimpleDottedDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFolderSimpleDottedFillIcon],svg[ph-folder-simple-dotted-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24 152v-32a8 8 0 0 1 16 0v32a8 8 0 0 1-16 0Zm8-64a8 8 0 0 0 8-8V64h53.3l29.9 22.4A7.7 7.7 0 0 0 128 88a8 8 0 0 0 4.8-14.4l-29.9-22.4a15.6 15.6 0 0 0-9.6-3.2H40a16 16 0 0 0-16 16v16a8 8 0 0 0 8 8Zm56 112H40v-8a8 8 0 0 0-16 0v8.6A15.4 15.4 0 0 0 39.4 216H88a8 8 0 0 0 0-16ZM216 72h-48a8 8 0 0 0 0 16h48v24a8 8 0 0 0 16 0V88a16 16 0 0 0-16-16Zm-56 128h-32a8 8 0 0 0 0 16h32a8 8 0 0 0 0-16Zm64-56a8 8 0 0 0-8 8v48h-16a8 8 0 0 0 0 16h16.9a15.2 15.2 0 0 0 15.1-15.1V152a8 8 0 0 0-8-8Z"></svg:path>`,
})
export class PhFolderSimpleDottedFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFolderSimpleDottedLightIcon],svg[ph-folder-simple-dotted-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M124.4 84.8L94.5 62.4a1.6 1.6 0 0 0-1.2-.4H40a2 2 0 0 0-2 2v16a6 6 0 0 1-12 0V64a14 14 0 0 1 14-14h53.3a14.1 14.1 0 0 1 8.4 2.8l29.9 22.4a6 6 0 0 1-7.2 9.6ZM88 202H39.4a1.4 1.4 0 0 1-1.4-1.4V192a6 6 0 0 0-12 0v8.6A13.4 13.4 0 0 0 39.4 214H88a6 6 0 0 0 0-12Zm72 0h-32a6 6 0 0 0 0 12h32a6 6 0 0 0 0-12Zm64-56a6 6 0 0 0-6 6v48.9a1.1 1.1 0 0 1-1.1 1.1H200a6 6 0 0 0 0 12h16.9a13.1 13.1 0 0 0 13.1-13.1V152a6 6 0 0 0-6-6Zm-8-72h-48a6 6 0 0 0 0 12h48a2 2 0 0 1 2 2v24a6 6 0 0 0 12 0V88a14 14 0 0 0-14-14ZM32 158a6 6 0 0 0 6-6v-32a6 6 0 0 0-12 0v32a6 6 0 0 0 6 6Z"></svg:path>`,
})
export class PhFolderSimpleDottedLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFolderSimpleDottedThinIcon],svg[ph-folder-simple-dotted-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M125.6 83.2L95.7 60.8a4.1 4.1 0 0 0-2.4-.8H40a4 4 0 0 0-4 4v16a4 4 0 0 1-8 0V64a12 12 0 0 1 12-12h53.3a12.2 12.2 0 0 1 7.2 2.4l29.9 22.4a4 4 0 0 1 .8 5.6A4.2 4.2 0 0 1 128 84a4.3 4.3 0 0 1-2.4-.8ZM88 204H39.4a3.4 3.4 0 0 1-3.4-3.4V192a4 4 0 0 0-8 0v8.6A11.4 11.4 0 0 0 39.4 212H88a4 4 0 0 0 0-8Zm72 0h-32a4 4 0 0 0 0 8h32a4 4 0 0 0 0-8Zm64-56a4 4 0 0 0-4 4v48.9a3.1 3.1 0 0 1-3.1 3.1H200a4 4 0 0 0 0 8h16.9a11.1 11.1 0 0 0 11.1-11.1V152a4 4 0 0 0-4-4Zm-8-72h-48a4 4 0 0 0 0 8h48a4 4 0 0 1 4 4v24a4 4 0 0 0 8 0V88a12 12 0 0 0-12-12ZM32 156a4 4 0 0 0 4-4v-32a4 4 0 0 0-8 0v32a4 4 0 0 0 4 4Z"></svg:path>`,
})
export class PhFolderSimpleDottedThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFolderSimpleDuotoneIcon],svg[ph-folder-simple-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 88v112.89a7.11 7.11 0 0 1-7.11 7.11H40a8 8 0 0 1-8-8V64a8 8 0 0 1 8-8h53.33a8 8 0 0 1 4.8 1.6L128 80h88a8 8 0 0 1 8 8" opacity=".2"></svg:path><svg:path d="M216 72h-85.33l-27.74-20.8a16.12 16.12 0 0 0-9.6-3.2H40a16 16 0 0 0-16 16v136a16 16 0 0 0 16 16h176.89A15.13 15.13 0 0 0 232 200.89V88a16 16 0 0 0-16-16m0 128H40V64h53.33l29.87 22.4A8 8 0 0 0 128 88h88Z"></svg:path></svg:g>`,
})
export class PhFolderSimpleDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFolderSimpleFillIcon],svg[ph-folder-simple-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 88v112.89A15.13 15.13 0 0 1 216.89 216H40a16 16 0 0 1-16-16V64a16 16 0 0 1 16-16h53.33a16.12 16.12 0 0 1 9.6 3.2L130.67 72H216a16 16 0 0 1 16 16"></svg:path>`,
})
export class PhFolderSimpleFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFolderSimpleLightIcon],svg[ph-folder-simple-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 74h-86l-28.27-21.2a14 14 0 0 0-8.4-2.8H40a14 14 0 0 0-14 14v136a14 14 0 0 0 14 14h176.89A13.12 13.12 0 0 0 230 200.89V88a14 14 0 0 0-14-14m2 126.89a1.11 1.11 0 0 1-1.11 1.11H40a2 2 0 0 1-2-2V64a2 2 0 0 1 2-2h53.33a2 2 0 0 1 1.2.4l29.87 22.4A6 6 0 0 0 128 86h88a2 2 0 0 1 2 2Z"></svg:path>`,
})
export class PhFolderSimpleLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFolderSimpleLockIcon],svg[ph-folder-simple-lock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 88v16a8 8 0 0 1-16 0V88h-85.33a16.12 16.12 0 0 1-9.6-3.2L93.33 64H40v136h72a8 8 0 0 1 0 16H40a16 16 0 0 1-16-16V64a16 16 0 0 1 16-16h53.33a16.12 16.12 0 0 1 9.6 3.2L130.67 72H216a16 16 0 0 1 16 16m0 80v40a8 8 0 0 1-8 8h-72a8 8 0 0 1-8-8v-40a8 8 0 0 1 8-8h8v-4a28 28 0 0 1 56 0v4h8a8 8 0 0 1 8 8m-56-8h24v-4a12 12 0 0 0-24 0Zm40 16h-56v24h56Z"></svg:path>`,
})
export class PhFolderSimpleLockIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFolderSimpleLockBoldIcon],svg[ph-folder-simple-lock-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M236 88v4a12 12 0 0 1-24 0h-81.33a20.12 20.12 0 0 1-12-4L92 68H44v128h60a12 12 0 0 1 0 24H40a20 20 0 0 1-20-20V64a20 20 0 0 1 20-20h53.33a20.12 20.12 0 0 1 12 4L132 68h84a20 20 0 0 1 20 20m0 76v44a12 12 0 0 1-12 12h-72a12 12 0 0 1-12-12v-44a12 12 0 0 1 12-12h4v-4a32 32 0 0 1 64 0v4h4a12 12 0 0 1 12 12m-56-12h16v-4a8 8 0 0 0-16 0Zm32 24h-48v20h48Z"></svg:path>`,
})
export class PhFolderSimpleLockBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFolderSimpleLockDuotoneIcon],svg[ph-folder-simple-lock-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 168v40h-72v-40Z" opacity=".2"></svg:path><svg:path d="M232 88v16a8 8 0 0 1-16 0V88h-85.33a16.12 16.12 0 0 1-9.6-3.2L93.33 64H40v136h72a8 8 0 0 1 0 16H40a16 16 0 0 1-16-16V64a16 16 0 0 1 16-16h53.33a16.12 16.12 0 0 1 9.6 3.2L130.67 72H216a16 16 0 0 1 16 16m0 80v40a8 8 0 0 1-8 8h-72a8 8 0 0 1-8-8v-40a8 8 0 0 1 8-8h8v-4a28 28 0 0 1 56 0v4h8a8 8 0 0 1 8 8m-56-8h24v-4a12 12 0 0 0-24 0Zm40 16h-56v24h56Z"></svg:path></svg:g>`,
})
export class PhFolderSimpleLockDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFolderSimpleLockFillIcon],svg[ph-folder-simple-lock-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 160h-8v-4a28 28 0 0 0-56 0v4h-8a8 8 0 0 0-8 8v40a8 8 0 0 0 8 8h72a8 8 0 0 0 8-8v-40a8 8 0 0 0-8-8m-24 0h-24v-4a12 12 0 0 1 24 0Zm32-72v16a8 8 0 0 1-16 0V88h-85.33a16.12 16.12 0 0 1-9.6-3.2L93.33 64H40v136h72a8 8 0 0 1 0 16H40a16 16 0 0 1-16-16V64a16 16 0 0 1 16-16h53.33a16.12 16.12 0 0 1 9.6 3.2L130.67 72H216a16 16 0 0 1 16 16"></svg:path>`,
})
export class PhFolderSimpleLockFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFolderSimpleLockLightIcon],svg[ph-folder-simple-lock-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M230 88v16a6 6 0 0 1-12 0V88a2 2 0 0 0-2-2h-85.33a14 14 0 0 1-8.4-2.8L94.53 62.4a2 2 0 0 0-1.2-.4H40a2 2 0 0 0-2 2v136a2 2 0 0 0 2 2h72a6 6 0 0 1 0 12H40a14 14 0 0 1-14-14V64a14 14 0 0 1 14-14h53.33a14 14 0 0 1 8.4 2.8l27.74 20.8a2 2 0 0 0 1.2.4H216a14 14 0 0 1 14 14m0 80v40a6 6 0 0 1-6 6h-72a6 6 0 0 1-6-6v-40a6 6 0 0 1 6-6h10v-6a26 26 0 0 1 52 0v6h10a6 6 0 0 1 6 6m-56-6h28v-6a14 14 0 0 0-28 0Zm44 12h-60v28h60Z"></svg:path>`,
})
export class PhFolderSimpleLockLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFolderSimpleLockThinIcon],svg[ph-folder-simple-lock-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M228 88v16a4 4 0 0 1-8 0V88a4 4 0 0 0-4-4h-85.33a12.05 12.05 0 0 1-7.2-2.4L95.73 60.8a4 4 0 0 0-2.4-.8H40a4 4 0 0 0-4 4v136a4 4 0 0 0 4 4h72a4 4 0 0 1 0 8H40a12 12 0 0 1-12-12V64a12 12 0 0 1 12-12h53.33a12.05 12.05 0 0 1 7.2 2.4l27.74 20.8a4 4 0 0 0 2.4.8H216a12 12 0 0 1 12 12m0 80v40a4 4 0 0 1-4 4h-72a4 4 0 0 1-4-4v-40a4 4 0 0 1 4-4h12v-8a24 24 0 0 1 48 0v8h12a4 4 0 0 1 4 4m-56-4h32v-8a16 16 0 0 0-32 0Zm48 8h-64v32h64Z"></svg:path>`,
})
export class PhFolderSimpleLockThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFolderSimpleMinusIcon],svg[ph-folder-simple-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 72h-85.33l-27.74-20.8a16.12 16.12 0 0 0-9.6-3.2H40a16 16 0 0 0-16 16v136a16 16 0 0 0 16 16h176.89A15.13 15.13 0 0 0 232 200.89V88a16 16 0 0 0-16-16m0 128H40V64h53.33l29.87 22.4A8 8 0 0 0 128 88h88Zm-56-56a8 8 0 0 1-8 8h-48a8 8 0 0 1 0-16h48a8 8 0 0 1 8 8"></svg:path>`,
})
export class PhFolderSimpleMinusIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFolderSimpleMinusBoldIcon],svg[ph-folder-simple-minus-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 68h-84l-26.67-20a20.12 20.12 0 0 0-12-4H40a20 20 0 0 0-20 20v136a20 20 0 0 0 20 20h176.89A19.13 19.13 0 0 0 236 200.89V88a20 20 0 0 0-20-20m-4 128H44V68h48l28.8 21.6A12 12 0 0 0 128 92h84Zm-108-64h48a12 12 0 0 1 0 24h-48a12 12 0 0 1 0-24"></svg:path>`,
})
export class PhFolderSimpleMinusBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFolderSimpleMinusDuotoneIcon],svg[ph-folder-simple-minus-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 88v112.89a7.11 7.11 0 0 1-7.11 7.11H40a8 8 0 0 1-8-8V64a8 8 0 0 1 8-8h53.33a8 8 0 0 1 4.8 1.6L128 80h88a8 8 0 0 1 8 8" opacity=".2"></svg:path><svg:path d="M216 72h-85.33l-27.74-20.8a16.12 16.12 0 0 0-9.6-3.2H40a16 16 0 0 0-16 16v136a16 16 0 0 0 16 16h176.89A15.13 15.13 0 0 0 232 200.89V88a16 16 0 0 0-16-16m0 128H40V64h53.33l29.87 22.4A8 8 0 0 0 128 88h88Zm-56-56a8 8 0 0 1-8 8h-48a8 8 0 0 1 0-16h48a8 8 0 0 1 8 8"></svg:path></svg:g>`,
})
export class PhFolderSimpleMinusDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFolderSimpleMinusFillIcon],svg[ph-folder-simple-minus-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 72h-85.33l-27.74-20.8a16.12 16.12 0 0 0-9.6-3.2H40a16 16 0 0 0-16 16v136a16 16 0 0 0 16 16h176.89A15.13 15.13 0 0 0 232 200.89V88a16 16 0 0 0-16-16m-64 80h-48a8 8 0 0 1 0-16h48a8 8 0 0 1 0 16"></svg:path>`,
})
export class PhFolderSimpleMinusFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFolderSimpleMinusLightIcon],svg[ph-folder-simple-minus-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 74h-86l-28.27-21.2a14 14 0 0 0-8.4-2.8H40a14 14 0 0 0-14 14v136a14 14 0 0 0 14 14h176.89A13.12 13.12 0 0 0 230 200.89V88a14 14 0 0 0-14-14m2 126.89a1.11 1.11 0 0 1-1.11 1.11H40a2 2 0 0 1-2-2V64a2 2 0 0 1 2-2h53.33a2 2 0 0 1 1.2.4l29.87 22.4A6 6 0 0 0 128 86h88a2 2 0 0 1 2 2ZM158 144a6 6 0 0 1-6 6h-48a6 6 0 0 1 0-12h48a6 6 0 0 1 6 6"></svg:path>`,
})
export class PhFolderSimpleMinusLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFolderSimpleMinusThinIcon],svg[ph-folder-simple-minus-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 76h-86.67l-28.8-21.6a12.05 12.05 0 0 0-7.2-2.4H40a12 12 0 0 0-12 12v136a12 12 0 0 0 12 12h176.89A11.12 11.12 0 0 0 228 200.89V88a12 12 0 0 0-12-12m4 124.89a3.12 3.12 0 0 1-3.11 3.11H40a4 4 0 0 1-4-4V64a4 4 0 0 1 4-4h53.33a4 4 0 0 1 2.4.8l29.87 22.4a4 4 0 0 0 2.4.8h88a4 4 0 0 1 4 4ZM156 144a4 4 0 0 1-4 4h-48a4 4 0 0 1 0-8h48a4 4 0 0 1 4 4"></svg:path>`,
})
export class PhFolderSimpleMinusThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFolderSimplePlusIcon],svg[ph-folder-simple-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 72h-85.33l-27.74-20.8a16.12 16.12 0 0 0-9.6-3.2H40a16 16 0 0 0-16 16v136a16 16 0 0 0 16 16h176.89A15.13 15.13 0 0 0 232 200.89V88a16 16 0 0 0-16-16m0 128H40V64h53.33l29.87 22.4A8 8 0 0 0 128 88h88Zm-56-56a8 8 0 0 1-8 8h-16v16a8 8 0 0 1-16 0v-16h-16a8 8 0 0 1 0-16h16v-16a8 8 0 0 1 16 0v16h16a8 8 0 0 1 8 8"></svg:path>`,
})
export class PhFolderSimplePlusIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFolderSimplePlusBoldIcon],svg[ph-folder-simple-plus-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 68h-84l-26.67-20a20.12 20.12 0 0 0-12-4H40a20 20 0 0 0-20 20v136a20 20 0 0 0 20 20h176.89A19.13 19.13 0 0 0 236 200.89V88a20 20 0 0 0-20-20m-4 128H44V68h48l28.8 21.6A12 12 0 0 0 128 92h84Zm-84-88a12 12 0 0 1 12 12v12h12a12 12 0 0 1 0 24h-12v12a12 12 0 0 1-24 0v-12h-12a12 12 0 0 1 0-24h12v-12a12 12 0 0 1 12-12"></svg:path>`,
})
export class PhFolderSimplePlusBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFolderSimplePlusDuotoneIcon],svg[ph-folder-simple-plus-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 88v112.89a7.11 7.11 0 0 1-7.11 7.11H40a8 8 0 0 1-8-8V64a8 8 0 0 1 8-8h53.33a8 8 0 0 1 4.8 1.6L128 80h88a8 8 0 0 1 8 8" opacity=".2"></svg:path><svg:path d="M216 72h-85.33l-27.74-20.8a16.12 16.12 0 0 0-9.6-3.2H40a16 16 0 0 0-16 16v136a16 16 0 0 0 16 16h176.89A15.13 15.13 0 0 0 232 200.89V88a16 16 0 0 0-16-16m0 128H40V64h53.33l29.87 22.4A8 8 0 0 0 128 88h88Zm-56-56a8 8 0 0 1-8 8h-16v16a8 8 0 0 1-16 0v-16h-16a8 8 0 0 1 0-16h16v-16a8 8 0 0 1 16 0v16h16a8 8 0 0 1 8 8"></svg:path></svg:g>`,
})
export class PhFolderSimplePlusDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFolderSimplePlusFillIcon],svg[ph-folder-simple-plus-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 72h-85.33l-27.74-20.8a16.12 16.12 0 0 0-9.6-3.2H40a16 16 0 0 0-16 16v136a16 16 0 0 0 16 16h176.89A15.13 15.13 0 0 0 232 200.89V88a16 16 0 0 0-16-16m-64 80h-16v16a8 8 0 0 1-16 0v-16h-16a8 8 0 0 1 0-16h16v-16a8 8 0 0 1 16 0v16h16a8 8 0 0 1 0 16"></svg:path>`,
})
export class PhFolderSimplePlusFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFolderSimplePlusLightIcon],svg[ph-folder-simple-plus-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 74h-86l-28.27-21.2a14 14 0 0 0-8.4-2.8H40a14 14 0 0 0-14 14v136a14 14 0 0 0 14 14h176.89A13.12 13.12 0 0 0 230 200.89V88a14 14 0 0 0-14-14m2 126.89a1.11 1.11 0 0 1-1.11 1.11H40a2 2 0 0 1-2-2V64a2 2 0 0 1 2-2h53.33a2 2 0 0 1 1.2.4l29.87 22.4A6 6 0 0 0 128 86h88a2 2 0 0 1 2 2ZM158 144a6 6 0 0 1-6 6h-18v18a6 6 0 0 1-12 0v-18h-18a6 6 0 0 1 0-12h18v-18a6 6 0 0 1 12 0v18h18a6 6 0 0 1 6 6"></svg:path>`,
})
export class PhFolderSimplePlusLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFolderSimplePlusThinIcon],svg[ph-folder-simple-plus-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 76h-86.67l-28.8-21.6a12.05 12.05 0 0 0-7.2-2.4H40a12 12 0 0 0-12 12v136a12 12 0 0 0 12 12h176.89A11.12 11.12 0 0 0 228 200.89V88a12 12 0 0 0-12-12m4 124.89a3.12 3.12 0 0 1-3.11 3.11H40a4 4 0 0 1-4-4V64a4 4 0 0 1 4-4h53.33a4 4 0 0 1 2.4.8l29.87 22.4a4 4 0 0 0 2.4.8h88a4 4 0 0 1 4 4ZM156 144a4 4 0 0 1-4 4h-20v20a4 4 0 0 1-8 0v-20h-20a4 4 0 0 1 0-8h20v-20a4 4 0 0 1 8 0v20h20a4 4 0 0 1 4 4"></svg:path>`,
})
export class PhFolderSimplePlusThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFolderSimpleStarIcon],svg[ph-folder-simple-star-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 208a8 8 0 0 1-8 8H40a16 16 0 0 1-16-16V64a16 16 0 0 1 16-16h53.33a16.12 16.12 0 0 1 9.6 3.2L130.67 72H216a16 16 0 0 1 16 16v32a8 8 0 0 1-16 0V88h-88a8 8 0 0 1-4.8-1.6L93.33 64H40v136h80a8 8 0 0 1 8 8m109.09-40.22l-22.51 18.59l6.85 27.71a8 8 0 0 1-11.82 8.81L184 207.82l-25.61 15.07a8 8 0 0 1-11.82-8.81l6.85-27.71l-22.51-18.59a8 8 0 0 1 4.47-14.14l29.84-2.31l11.43-26.5a8 8 0 0 1 14.7 0l11.43 26.5l29.84 2.31a8 8 0 0 1 4.47 14.14m-25.47.28l-14.89-1.15a8 8 0 0 1-6.73-4.8l-6-13.92l-6 13.92a8 8 0 0 1-6.73 4.8l-14.89 1.15l11.11 9.18a8 8 0 0 1 2.68 8.09l-3.5 14.12l13.27-7.81a8 8 0 0 1 8.12 0l13.27 7.81l-3.5-14.12a8 8 0 0 1 2.68-8.09Z"></svg:path>`,
})
export class PhFolderSimpleStarIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFolderSimpleStarBoldIcon],svg[ph-folder-simple-star-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M44 68v128h64a12 12 0 0 1 0 24H40a20 20 0 0 1-20-20V64a20 20 0 0 1 20-20h53.33a20.12 20.12 0 0 1 12 4L132 68h84a20 20 0 0 1 20 20v20a12 12 0 0 1-24 0V92h-84a12 12 0 0 1-7.2-2.4L92 68Zm195.64 102.87l-20.58 17l6.25 25.26a12 12 0 0 1-17.73 13.22L184 212.46l-23.58 13.88a12 12 0 0 1-17.73-13.22l6.25-25.26l-20.58-17a12 12 0 0 1 6.72-21.22l27.42-2.12l10.5-24.28a12 12 0 0 1 22 0l10.48 24.29l27.42 2.12a12 12 0 0 1 6.72 21.22Zm-38.2.42l-5-.39a12 12 0 0 1-10.09-7.21l-2.33-5.4l-2.33 5.4a12 12 0 0 1-10.1 7.21l-5 .39l3.48 2.87a12 12 0 0 1 4 12.13l-1.21 4.89l5.07-3a12 12 0 0 1 12.18 0l5.07 3l-1.18-4.89a12 12 0 0 1 4-12.13Z"></svg:path>`,
})
export class PhFolderSimpleStarBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFolderSimpleStarDuotoneIcon],svg[ph-folder-simple-star-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m205.6 183.41l8.07 32.59L184 198.54L154.33 216l8.07-32.59l-26.4-21.8l34.65-2.67L184 128l13.35 30.94l34.65 2.67Z" opacity=".2"></svg:path><svg:path d="M128 208a8 8 0 0 1-8 8H40a16 16 0 0 1-16-16V64a16 16 0 0 1 16-16h53.33a16.12 16.12 0 0 1 9.6 3.2L130.67 72H216a16 16 0 0 1 16 16v32a8 8 0 0 1-16 0V88h-88a8 8 0 0 1-4.8-1.6L93.33 64H40v136h80a8 8 0 0 1 8 8m109.09-40.22l-22.51 18.59l6.85 27.71a8 8 0 0 1-11.82 8.81L184 207.82l-25.61 15.07a8 8 0 0 1-11.82-8.81l6.85-27.71l-22.51-18.59a8 8 0 0 1 4.47-14.14l29.84-2.31l11.43-26.5a8 8 0 0 1 14.7 0l11.43 26.5l29.84 2.31a8 8 0 0 1 4.47 14.14m-25.47.28l-14.89-1.15a8 8 0 0 1-6.73-4.8l-6-13.92l-6 13.92a8 8 0 0 1-6.73 4.8l-14.89 1.15l11.11 9.18a8 8 0 0 1 2.68 8.09l-3.5 14.12l13.27-7.81a8 8 0 0 1 8.12 0l13.27 7.81l-3.5-14.12a8 8 0 0 1 2.68-8.09Z"></svg:path></svg:g>`,
})
export class PhFolderSimpleStarDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFolderSimpleStarFillIcon],svg[ph-folder-simple-star-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 208a8 8 0 0 1-8 8H40a16 16 0 0 1-16-16V64a16 16 0 0 1 16-16h53.33a16.12 16.12 0 0 1 9.6 3.2L130.67 72H216a16 16 0 0 1 16 16v32a8 8 0 0 1-16 0V88h-88a8 8 0 0 1-4.8-1.6L93.33 64H40v136h80a8 8 0 0 1 8 8m111.63-48.8a8 8 0 0 0-7-5.56l-29.84-2.31l-11.43-26.5a8 8 0 0 0-14.7 0l-11.43 26.5l-29.84 2.31a8 8 0 0 0-4.47 14.14l22.51 18.59l-6.85 27.71a8 8 0 0 0 11.82 8.81l25.6-15.07l25.61 15.07a8 8 0 0 0 11.82-8.81l-6.85-27.71l22.51-18.59a8 8 0 0 0 2.54-8.58"></svg:path>`,
})
export class PhFolderSimpleStarFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFolderSimpleStarLightIcon],svg[ph-folder-simple-star-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M38 64v136a2 2 0 0 0 2 2h80a6 6 0 0 1 0 12H40a14 14 0 0 1-14-14V64a14 14 0 0 1 14-14h53.33a14.06 14.06 0 0 1 8.4 2.8L130 74h86a14 14 0 0 1 14 14v32a6 6 0 0 1-12 0V88a2 2 0 0 0-2-2h-88a6 6 0 0 1-3.6-1.2L94.53 62.4a2 2 0 0 0-1.2-.4H40a2 2 0 0 0-2 2m197.82 102.24l-23.49 19.39l7.16 28.93a6 6 0 0 1-8.87 6.61L184 205.5l-26.62 15.67a6 6 0 0 1-8.87-6.61l7.16-28.93l-23.49-19.39a6 6 0 0 1 3.36-10.61l31-2.4l11.91-27.61a6 6 0 0 1 11 0l11.91 27.61l31 2.4a6 6 0 0 1 3.36 10.61Zm-19.1.21l-19.83-1.53a6 6 0 0 1-5-3.61L184 143.14l-7.84 18.17a6 6 0 0 1-5 3.61l-19.83 1.53l14.94 12.33a6 6 0 0 1 2 6.07l-4.63 18.74L181 193.36a6 6 0 0 1 6.08 0l17.37 10.23l-4.64-18.74a6 6 0 0 1 2-6.07Z"></svg:path>`,
})
export class PhFolderSimpleStarLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFolderSimpleStarThinIcon],svg[ph-folder-simple-star-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 84h-88a4 4 0 0 1-2.4-.8L95.73 60.8a4 4 0 0 0-2.4-.8H40a4 4 0 0 0-4 4v136a4 4 0 0 0 4 4h80a4 4 0 0 1 0 8H40a12 12 0 0 1-12-12V64a12 12 0 0 1 12-12h53.33a12.05 12.05 0 0 1 7.2 2.4l28.8 21.6H216a12 12 0 0 1 12 12v32a4 4 0 0 1-8 0V88a4 4 0 0 0-4-4m18.55 80.7l-24.46 20.19l7.46 30.11a4 4 0 0 1-1.49 4.17a4.05 4.05 0 0 1-2.39.79a4 4 0 0 1-2-.55L184 203.18l-27.64 16.27a4 4 0 0 1-5.91-4.41l7.46-30.15l-24.46-20.19a4 4 0 0 1 2.24-7.08l32.24-2.49l12.4-28.72a4 4 0 0 1 7.34 0l12.4 28.72l32.24 2.49a4 4 0 0 1 2.24 7.08m-12.74.14L197 162.92a4 4 0 0 1-3.36-2.4L184 138.1l-9.68 22.42a4 4 0 0 1-3.36 2.4l-24.77 1.92L165 180.32a4 4 0 0 1 1.33 4.05l-5.78 23.36L182 195.09a4 4 0 0 1 4.06 0l21.47 12.64l-5.78-23.36a4 4 0 0 1 1.33-4.05Z"></svg:path>`,
})
export class PhFolderSimpleStarThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFolderSimpleThinIcon],svg[ph-folder-simple-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 76h-86.67l-28.8-21.6a12.05 12.05 0 0 0-7.2-2.4H40a12 12 0 0 0-12 12v136a12 12 0 0 0 12 12h176.89A11.12 11.12 0 0 0 228 200.89V88a12 12 0 0 0-12-12m4 124.89a3.12 3.12 0 0 1-3.11 3.11H40a4 4 0 0 1-4-4V64a4 4 0 0 1 4-4h53.33a4 4 0 0 1 2.4.8l29.87 22.4a4 4 0 0 0 2.4.8h88a4 4 0 0 1 4 4Z"></svg:path>`,
})
export class PhFolderSimpleThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFolderSimpleUserIcon],svg[ph-folder-simple-user-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M214.61 198.62a32 32 0 1 0-45.23 0a40 40 0 0 0-17.11 23.32a8 8 0 0 0 5.67 9.79a8.2 8.2 0 0 0 2.06.27a8 8 0 0 0 7.73-5.95C170.56 215.42 180.54 208 192 208s21.44 7.42 24.27 18.05a8 8 0 1 0 15.46-4.11a40 40 0 0 0-17.12-23.32M192 160a16 16 0 1 1-16 16a16 16 0 0 1 16-16m40-72v32a8 8 0 0 1-16 0V88h-85.33a16.12 16.12 0 0 1-9.6-3.2L93.33 64H40v136h80a8 8 0 0 1 0 16H40a16 16 0 0 1-16-16V64a16 16 0 0 1 16-16h53.33a16.12 16.12 0 0 1 9.6 3.2L130.67 72H216a16 16 0 0 1 16 16"></svg:path>`,
})
export class PhFolderSimpleUserIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFolderSimpleUserBoldIcon],svg[ph-folder-simple-user-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M220.51 197.94a36 36 0 1 0-57 0a43.75 43.75 0 0 0-15.08 23a12 12 0 0 0 8.52 14.67a11.8 11.8 0 0 0 3.05.39a12 12 0 0 0 11.59-8.92C174 218.2 182.35 212 192 212s18 6.2 20.4 15.08a12 12 0 0 0 23.19-6.17a43.7 43.7 0 0 0-15.08-22.97M192 164a12 12 0 1 1-12 12a12 12 0 0 1 12-12m44-76v20a12 12 0 0 1-24 0V92h-81.33a20.1 20.1 0 0 1-12-4L92 68H44v128h68a12 12 0 0 1 0 24H40a20 20 0 0 1-20-20V64a20 20 0 0 1 20-20h53.33a20.12 20.12 0 0 1 12 4L132 68h84a20 20 0 0 1 20 20"></svg:path>`,
})
export class PhFolderSimpleUserBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFolderSimpleUserDuotoneIcon],svg[ph-folder-simple-user-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 176a24 24 0 1 1-24-24a24 24 0 0 1 24 24" opacity=".2"></svg:path><svg:path d="M214.61 198.62a32 32 0 1 0-45.23 0a40 40 0 0 0-17.11 23.32a8 8 0 0 0 5.67 9.79a8.2 8.2 0 0 0 2.06.27a8 8 0 0 0 7.73-5.95C170.56 215.42 180.54 208 192 208s21.44 7.42 24.27 18.05a8 8 0 1 0 15.46-4.11a40 40 0 0 0-17.12-23.32M192 160a16 16 0 1 1-16 16a16 16 0 0 1 16-16m40-72v32a8 8 0 0 1-16 0V88h-85.33a16.12 16.12 0 0 1-9.6-3.2L93.33 64H40v136h80a8 8 0 0 1 0 16H40a16 16 0 0 1-16-16V64a16 16 0 0 1 16-16h53.33a16.12 16.12 0 0 1 9.6 3.2L130.67 72H216a16 16 0 0 1 16 16"></svg:path></svg:g>`,
})
export class PhFolderSimpleUserDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFolderSimpleUserFillIcon],svg[ph-folder-simple-user-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M231.73 221.94A8 8 0 0 1 224 232h-64a8 8 0 0 1-7.73-10a40 40 0 0 1 17.11-23.33a32 32 0 1 1 45.24 0a40 40 0 0 1 17.11 23.27M216 72h-85.33l-27.74-20.8a16.12 16.12 0 0 0-9.6-3.2H40a16 16 0 0 0-16 16v136a16 16 0 0 0 16 16h80a8 8 0 0 0 0-16H40V64h53.33l27.74 20.8a16.12 16.12 0 0 0 9.6 3.2H216v32a8 8 0 0 0 16 0V88a16 16 0 0 0-16-16"></svg:path>`,
})
export class PhFolderSimpleUserFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFolderSimpleUserLightIcon],svg[ph-folder-simple-user-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M211.28 199a30 30 0 1 0-38.56 0a38.1 38.1 0 0 0-18.52 23.5a6 6 0 0 0 4.26 7.34a6.3 6.3 0 0 0 1.54.2a6 6 0 0 0 5.8-4.46C168.86 214 179.63 206 192 206s23.14 8 26.2 19.54a6 6 0 0 0 11.6-3.08A38.1 38.1 0 0 0 211.28 199M192 158a18 18 0 1 1-18 18a18 18 0 0 1 18-18m38-70v32a6 6 0 0 1-12 0V88a2 2 0 0 0-2-2h-85.33a14 14 0 0 1-8.4-2.8L94.53 62.4a2 2 0 0 0-1.2-.4H40a2 2 0 0 0-2 2v136a2 2 0 0 0 2 2h80a6 6 0 0 1 0 12H40a14 14 0 0 1-14-14V64a14 14 0 0 1 14-14h53.33a14 14 0 0 1 8.4 2.8l27.74 20.8a2 2 0 0 0 1.2.4H216a14 14 0 0 1 14 14"></svg:path>`,
})
export class PhFolderSimpleUserLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFolderSimpleUserThinIcon],svg[ph-folder-simple-user-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M207.5 199.3a28 28 0 1 0-31 0a36.24 36.24 0 0 0-20.37 23.7a4 4 0 0 0 2.84 4.89a3.7 3.7 0 0 0 1 .14a4 4 0 0 0 3.87-3c3.29-12.38 14.85-21 28.13-21s24.84 8.65 28.13 21a4 4 0 1 0 7.73-2.05a36.22 36.22 0 0 0-20.33-23.68M172 176a20 20 0 1 1 20 20a20 20 0 0 1-20-20m56-88v32a4 4 0 0 1-8 0V88a4 4 0 0 0-4-4h-85.33a12.05 12.05 0 0 1-7.2-2.4L95.73 60.8a4 4 0 0 0-2.4-.8H40a4 4 0 0 0-4 4v136a4 4 0 0 0 4 4h80a4 4 0 0 1 0 8H40a12 12 0 0 1-12-12V64a12 12 0 0 1 12-12h53.33a12.05 12.05 0 0 1 7.2 2.4l27.74 20.8a4 4 0 0 0 2.4.8H216a12 12 0 0 1 12 12"></svg:path>`,
})
export class PhFolderSimpleUserThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFolderStarIcon],svg[ph-folder-star-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M120.56 200H40V88h176v32a8 8 0 0 0 16 0V88a16 16 0 0 0-16-16h-84.69L104 44.69A15.86 15.86 0 0 0 92.69 40H40a16 16 0 0 0-16 16v144.62A15.4 15.4 0 0 0 39.38 216h81.18a8 8 0 0 0 0-16M92.69 56l16 16H40V56Zm146.94 103.2a8 8 0 0 0-7-5.56l-29.84-2.31l-11.43-26.5a8 8 0 0 0-14.7 0l-11.43 26.5l-29.84 2.31a8 8 0 0 0-4.47 14.14l22.51 18.59l-6.85 27.71a8 8 0 0 0 11.82 8.81l25.6-15.07l25.61 15.07a8 8 0 0 0 11.82-8.81l-6.85-27.71l22.51-18.59a8 8 0 0 0 2.54-8.58m-39.12 18a8 8 0 0 0-2.68 8.09l3.5 14.12l-13.27-7.81a8 8 0 0 0-8.12 0l-13.27 7.81l3.5-14.12a8 8 0 0 0-2.68-8.09l-11.11-9.18l14.89-1.15a8 8 0 0 0 6.73-4.8l6-13.92l6 13.92a8 8 0 0 0 6.73 4.8l14.89 1.15Z"></svg:path>`,
})
export class PhFolderStarIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFolderStarBoldIcon],svg[ph-folder-star-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M112.56 196H44V92h168v20a12 12 0 0 0 24 0V88a20 20 0 0 0-20-20h-82.61l-26-29.29A20 20 0 0 0 92.41 32H40a20 20 0 0 0-20 20v148.62A19.41 19.41 0 0 0 39.38 220h73.18a12 12 0 0 0 0-24M44 56h46.61l10.67 12H44Zm199.44 102a12 12 0 0 0-10.52-8.34l-27.42-2.12l-10.5-24.29a12 12 0 0 0-22 0l-10.5 24.28l-27.42 2.12a12 12 0 0 0-6.72 21.22l20.58 17l-6.25 25.26a12 12 0 0 0 17.73 13.22L184 212.46l23.58 13.88a12 12 0 0 0 17.73-13.22l-6.25-25.26l20.58-17a12 12 0 0 0 3.8-12.86M198 174.16a12 12 0 0 0-4 12.13l1.21 4.89l-5.07-3a12.06 12.06 0 0 0-12.18 0l-5.07 3l1.21-4.89a12 12 0 0 0-4-12.13l-3.48-2.87l5-.39a12 12 0 0 0 10.1-7.21l2.33-5.4l2.33 5.4a12 12 0 0 0 10.09 7.21l5 .39Z"></svg:path>`,
})
export class PhFolderStarBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFolderStarDuotoneIcon],svg[ph-folder-star-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m205.6 183.41l8.07 32.59L184 198.54L154.33 216l8.07-32.59l-26.4-21.8l34.65-2.67L184 128l13.35 30.94l34.65 2.67Z" opacity=".2"></svg:path><svg:path d="M120.56 200H40V88h176v32a8 8 0 0 0 16 0V88a16 16 0 0 0-16-16h-84.69L104 44.69A15.86 15.86 0 0 0 92.69 40H40a16 16 0 0 0-16 16v144.62A15.4 15.4 0 0 0 39.38 216h81.18a8 8 0 0 0 0-16M92.69 56l16 16H40V56Zm146.94 103.2a8 8 0 0 0-7-5.56l-29.84-2.31l-11.43-26.5a8 8 0 0 0-14.7 0l-11.43 26.5l-29.84 2.31a8 8 0 0 0-4.47 14.14l22.51 18.59l-6.85 27.71a8 8 0 0 0 11.82 8.81l25.6-15.07l25.61 15.07a8 8 0 0 0 11.82-8.81l-6.85-27.71l22.51-18.59a8 8 0 0 0 2.54-8.58m-39.12 18a8 8 0 0 0-2.68 8.09l3.5 14.12l-13.27-7.81a8 8 0 0 0-8.12 0l-13.27 7.81l3.5-14.12a8 8 0 0 0-2.68-8.09l-11.11-9.18l14.89-1.15a8 8 0 0 0 6.73-4.8l6-13.92l6 13.92a8 8 0 0 0 6.73 4.8l14.89 1.15Z"></svg:path></svg:g>`,
})
export class PhFolderStarDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFolderStarFillIcon],svg[ph-folder-star-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m237.09 167.78l-22.51 18.59l6.85 27.71a8 8 0 0 1-11.82 8.81L184 207.82l-25.61 15.07a8 8 0 0 1-11.82-8.81l6.85-27.71l-22.51-18.59a8 8 0 0 1 4.47-14.14l29.84-2.31l11.43-26.5a8 8 0 0 1 14.7 0l11.43 26.5l29.84 2.31a8 8 0 0 1 4.47 14.14M128.56 208a8 8 0 0 1-8 8H39.38A15.4 15.4 0 0 1 24 200.62V56a16 16 0 0 1 16-16h52.69A15.86 15.86 0 0 1 104 44.69L131.31 72H216a16 16 0 0 1 16 16v32a8 8 0 0 1-16 0V88H40v112h80.56a8 8 0 0 1 8 8M40 72h68.69l-16-16H40Z"></svg:path>`,
})
export class PhFolderStarFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFolderStarLightIcon],svg[ph-folder-star-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 86a2 2 0 0 1 2 2v32a6 6 0 0 0 12 0V88a14 14 0 0 0-14-14h-85.52l-27.9-27.9a13.9 13.9 0 0 0-9.89-4.1H40a14 14 0 0 0-14 14v144.61A13.39 13.39 0 0 0 39.38 214h81.18a6 6 0 0 0 0-12H39.38a1.4 1.4 0 0 1-1.38-1.39V86ZM40 54h52.69a2 2 0 0 1 1.41.58L113.52 74H38V56a2 2 0 0 1 2-2m197.72 105.8a6 6 0 0 0-5.26-4.17l-31-2.4l-11.91-27.61a6 6 0 0 0-11 0l-11.91 27.61l-31 2.4a6 6 0 0 0-3.36 10.61l23.49 19.39l-7.16 28.93a6 6 0 0 0 8.87 6.61L184 205.5l26.62 15.67a6 6 0 0 0 8.87-6.61l-7.16-28.93l23.49-19.39a6 6 0 0 0 1.9-6.44m-35.94 19a6 6 0 0 0-2 6.07l4.64 18.74L187 193.36a6 6 0 0 0-6.08 0l-17.37 10.23l4.63-18.74a6 6 0 0 0-2-6.07l-14.94-12.33l19.83-1.53a6 6 0 0 0 5-3.61l7.93-18.17l7.84 18.17a6 6 0 0 0 5 3.61l19.83 1.53Z"></svg:path>`,
})
export class PhFolderStarLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFolderStarThinIcon],svg[ph-folder-star-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 84a4 4 0 0 1 4 4v32a4 4 0 0 0 8 0V88a12 12 0 0 0-12-12h-86.34l-28.49-28.49A11.93 11.93 0 0 0 92.69 44H40a12 12 0 0 0-12 12v144.61A11.4 11.4 0 0 0 39.38 212h81.18a4 4 0 0 0 0-8H39.38a3.39 3.39 0 0 1-3.38-3.39V84ZM40 52h52.69a4 4 0 0 1 2.82 1.17L118.34 76H36V56a4 4 0 0 1 4-4m195.81 108.41a4 4 0 0 0-3.5-2.79l-32.24-2.49l-12.4-28.72a4 4 0 0 0-7.34 0l-12.4 28.72l-32.24 2.49a4 4 0 0 0-2.24 7.08l24.46 20.19l-7.46 30.11a4 4 0 0 0 5.91 4.41L184 203.18l27.64 16.27a4 4 0 0 0 2 .55a4.05 4.05 0 0 0 2.39-.79a4 4 0 0 0 1.49-4.17l-7.46-30.15l24.46-20.19a4 4 0 0 0 1.29-4.29m-32.76 19.91a4 4 0 0 0-1.33 4.05l5.78 23.36l-21.5-12.64a4 4 0 0 0-4.06 0l-21.44 12.64l5.78-23.36a4 4 0 0 0-1.33-4.05l-18.76-15.48l24.81-1.92a4 4 0 0 0 3.36-2.4L184 138.1l9.68 22.42a4 4 0 0 0 3.36 2.4l24.77 1.92Z"></svg:path>`,
})
export class PhFolderStarThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFolderThinIcon],svg[ph-folder-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 76h-86.34l-28.49-28.48A11.9 11.9 0 0 0 92.69 44H40a12 12 0 0 0-12 12v144.62A11.4 11.4 0 0 0 39.38 212h177.51A11.12 11.12 0 0 0 228 200.89V88a12 12 0 0 0-12-12M36 56a4 4 0 0 1 4-4h52.69a4 4 0 0 1 2.82 1.17L118.34 76H36Zm184 144.89a3.12 3.12 0 0 1-3.11 3.11H39.38a3.39 3.39 0 0 1-3.38-3.38V84h180a4 4 0 0 1 4 4Z"></svg:path>`,
})
export class PhFolderThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFolderUserIcon],svg[ph-folder-user-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M214.61 198.62a32 32 0 1 0-45.23 0a40 40 0 0 0-17.11 23.32a8 8 0 0 0 5.67 9.79a8.2 8.2 0 0 0 2.06.27a8 8 0 0 0 7.73-5.95C170.56 215.42 180.54 208 192 208s21.44 7.42 24.27 18.05a8 8 0 1 0 15.46-4.11a40 40 0 0 0-17.12-23.32M192 160a16 16 0 1 1-16 16a16 16 0 0 1 16-16m24-88h-84.69L104 44.69A15.86 15.86 0 0 0 92.69 40H40a16 16 0 0 0-16 16v144.61A15.4 15.4 0 0 0 39.38 216h81.18a8 8 0 0 0 0-16H40V88h176v32a8 8 0 0 0 16 0V88a16 16 0 0 0-16-16M92.69 56l16 16H40V56Z"></svg:path>`,
})
export class PhFolderUserIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFolderUserBoldIcon],svg[ph-folder-user-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M220.51 197.94a36 36 0 1 0-57 0a43.75 43.75 0 0 0-15.08 23a12 12 0 0 0 8.52 14.67a11.8 11.8 0 0 0 3.05.39a12 12 0 0 0 11.59-8.92C174 218.2 182.35 212 192 212s18 6.2 20.4 15.08a12 12 0 0 0 23.19-6.17a43.7 43.7 0 0 0-15.08-22.97M192 164a12 12 0 1 1-12 12a12 12 0 0 1 12-12m24-96h-82.61l-26-29.29A20 20 0 0 0 92.41 32H40a20 20 0 0 0-20 20v148.61A19.41 19.41 0 0 0 39.38 220h73.18a12 12 0 0 0 0-24H44V92h168v16a12 12 0 0 0 24 0V88a20 20 0 0 0-20-20M44 68V56h46.61l10.67 12Z"></svg:path>`,
})
export class PhFolderUserBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFolderUserDuotoneIcon],svg[ph-folder-user-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 176a24 24 0 1 1-24-24a24 24 0 0 1 24 24" opacity=".2"></svg:path><svg:path d="M214.61 198.62a32 32 0 1 0-45.23 0a40 40 0 0 0-17.11 23.32a8 8 0 0 0 5.67 9.79a8.2 8.2 0 0 0 2.06.27a8 8 0 0 0 7.73-5.95C170.56 215.42 180.54 208 192 208s21.44 7.42 24.27 18.05a8 8 0 1 0 15.46-4.11a40 40 0 0 0-17.12-23.32M192 160a16 16 0 1 1-16 16a16 16 0 0 1 16-16m24-88h-84.69L104 44.69A15.86 15.86 0 0 0 92.69 40H40a16 16 0 0 0-16 16v144.61A15.4 15.4 0 0 0 39.38 216h81.18a8 8 0 0 0 0-16H40V88h176v32a8 8 0 0 0 16 0V88a16 16 0 0 0-16-16M92.69 56l16 16H40V56Z"></svg:path></svg:g>`,
})
export class PhFolderUserDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
