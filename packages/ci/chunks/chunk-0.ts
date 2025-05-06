import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ciAddColumnIcon],svg[ci-add-column-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 17h3m0 0h3m-3 0v-3m0 3v3m6 1h1a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v6"></svg:path>`,
})
export class CiAddColumnIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciAddMinusSquareIcon],svg[ci-add-minus-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h8M4 16.8V7.2c0-1.12 0-1.68.218-2.108c.192-.377.497-.682.874-.874C5.52 4 6.08 4 7.2 4h9.6c1.12 0 1.68 0 2.108.218a2 2 0 0 1 .874.874C20 5.52 20 6.08 20 7.2v9.6c0 1.12 0 1.68-.218 2.108a2 2 0 0 1-.874.874c-.428.218-.986.218-2.104.218H7.197c-1.118 0-1.678 0-2.105-.218a2 2 0 0 1-.874-.874C4 18.48 4 17.92 4 16.8"></svg:path>`,
})
export class CiAddMinusSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciAdobeXdIcon],svg[ci-adobe-xd-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 22H6a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4ZM6 4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H6Zm9.762 12.776a3.188 3.188 0 0 1-2.351-.9a3.762 3.762 0 0 1-.928-2.69a3.8 3.8 0 0 1 .955-2.6a3.422 3.422 0 0 1 2.587-1.069h.233v-2c0-.156.127-.283.283-.284h1.317a.29.29 0 0 1 .2.07a.263.263 0 0 1 .082.2v7.679c-.005.265.009.53.04.793V16a.286.286 0 0 1-.056.177a.34.34 0 0 1-.121.094a5.188 5.188 0 0 1-2.222.506l-.019-.001Zm-.916-5.116l-.005.006a2.222 2.222 0 0 0-.45 1.455a2.264 2.264 0 0 0 .443 1.524c.267.294.652.454 1.049.434a1.63 1.63 0 0 0 .375-.038v-3.849a1.31 1.31 0 0 0-.284-.029a1.436 1.436 0 0 0-1.128.5v-.003Zm-2.621 5h-1.451a.358.358 0 0 1-.354-.22l-.21-.44l-.005-.011L10 15.58l-.064-.133c-.319-.658-.648-1.336-.978-2.034a125.419 125.419 0 0 1-1.417 3.031v.01l-.005.009a.4.4 0 0 1-.136.137a.354.354 0 0 1-.188.05H5.841a.264.264 0 0 1-.263-.179a.282.282 0 0 1 .043-.245l2.229-4.261l-2.156-4.314a.27.27 0 0 1-.012-.288a.273.273 0 0 1 .234-.131H7.35a.372.372 0 0 1 .2.046a.33.33 0 0 1 .136.163c.536 1.125.988 2.1 1.383 2.965c.491-1.1 1.013-2.218 1.363-2.959l.005-.011l.006-.01v-.011a.495.495 0 0 1 .093-.115a.332.332 0 0 1 .221-.077H12.1a.266.266 0 0 1 .247.151a.285.285 0 0 1-.023.263l-2.157 4.187l2.282 4.4a.3.3 0 0 1 .029.259a.266.266 0 0 1-.253.175v.002Z"></svg:path>`,
})
export class CiAdobeXdIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciAddPlusCircleIcon],svg[ci-add-plus-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h4m0 0h4m-4 0v4m0-4V8m0 13a9 9 0 1 1 0-18a9 9 0 0 1 0 18"></svg:path>`,
})
export class CiAddPlusCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciAddRowIcon],svg[ci-add-row-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 14v1a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-6m-3-3H7m0 0H4m3 0V5m0 3v3"></svg:path>`,
})
export class CiAddRowIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciAirplayIcon],svg[ci-airplay-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6.25 17h-.053c-1.118 0-1.678 0-2.105-.218a2 2 0 0 1-.874-.875C3 15.48 3 14.92 3 13.8V8.2c0-1.12 0-1.68.218-2.108c.192-.377.497-.682.874-.874C4.52 5 5.08 5 6.2 5h11.6c1.12 0 1.68 0 2.107.218c.377.192.683.497.875.874c.218.427.218.987.218 2.105v5.606c0 1.118 0 1.677-.218 2.104a2 2 0 0 1-.874.875C19.48 17 18.92 17 17.803 17h-.05M16 20H8l4-5z"></svg:path>`,
})
export class CiAirplayIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciAddPlusSquareIcon],svg[ci-add-plus-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h4m0 0h4m-4 0v4m0-4V8m-8 8.8V7.2c0-1.12 0-1.68.218-2.108c.192-.377.497-.682.874-.874C5.52 4 6.08 4 7.2 4h9.6c1.12 0 1.68 0 2.108.218a2 2 0 0 1 .874.874C20 5.52 20 6.08 20 7.2v9.6c0 1.12 0 1.68-.218 2.108a2 2 0 0 1-.874.874c-.428.218-.986.218-2.104.218H7.197c-1.118 0-1.678 0-2.105-.218a2 2 0 0 1-.874-.874C4 18.48 4 17.92 4 16.8"></svg:path>`,
})
export class CiAddPlusSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciAlarmIcon],svg[ci-alarm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 7v5h5m4.004-7.429L17.939 2M6.064 2L3 4.571M12 20a8 8 0 1 1 0-16a8 8 0 0 1 0 16"></svg:path>`,
})
export class CiAlarmIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciAlarmAddIcon],svg[ci-alarm-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22a9.121 9.121 0 0 1-9-9a9.121 9.121 0 0 1 9-9a9.121 9.121 0 0 1 9 9a9.121 9.121 0 0 1-9 9Zm0-16a7.094 7.094 0 0 0-7 7a7.094 7.094 0 0 0 7 7a7.094 7.094 0 0 0 7-7a7.094 7.094 0 0 0-7-7Zm1 12h-2v-4H7v-2h4V8h2v4h4v2h-4v4Zm7.292-11.292l-3.009-3l1.409-1.417l3.01 3l-1.41 1.416v.001Zm-16.583 0L2.292 5.291l2.991-3l1.415 1.416l-2.989 3v.001Z"></svg:path>`,
})
export class CiAlarmAddIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciAppStoreIcon],svg[ci-app-store-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10c-.006 5.52-4.48 9.994-10 10Zm-4.273-7.213c-.129 0-.257.016-.383.046l-.15.041l-.594 1.017a.823.823 0 0 0 1.365.916l.062-.093l.79-1.371a1.386 1.386 0 0 0-1.1-.556h.01Zm5.484-6.127a1.944 1.944 0 0 0-.587 1.1a2.4 2.4 0 0 0 .3 1.689l3.04 5.266a.827.827 0 0 0 1.071.322a.823.823 0 0 0 .4-1.044l-.049-.1l-.8-1.391h1.19a.823.823 0 0 0 .1-1.639l-.1-.006h-2.14l-2.194-3.8l-.229-.4l-.002.003ZM6.26 12.85a.817.817 0 0 0-.815.821c0 .414.308.764.719.817l.1.005h7.48a1.16 1.16 0 0 0-.017-1.067a1.034 1.034 0 0 0-.793-.571l-.121-.006h-2.551L13.79 6.74a.828.828 0 0 0 .082-.625a.824.824 0 0 0-1.447-.29l-.062.092l-.363.634l-.359-.634a.827.827 0 0 0-1.072-.322a.825.825 0 0 0-.4 1.045l.049.1l.83 1.46l-2.685 4.65H6.26Z"></svg:path>`,
})
export class CiAppStoreIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciAppleIcon],svg[ci-apple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.094 21.006a2.457 2.457 0 0 1-1.653-.766a9.899 9.899 0 0 1-1.377-1.648a11.406 11.406 0 0 1-1.459-2.893a10.653 10.653 0 0 1-.61-3.445a6.317 6.317 0 0 1 .825-3.292a4.88 4.88 0 0 1 1.73-1.751a4.663 4.663 0 0 1 2.344-.662a5.51 5.51 0 0 1 1.81.421c.459.202.941.344 1.436.422a8.564 8.564 0 0 0 1.593-.5a5.79 5.79 0 0 1 1.903-.393c.087 0 .173 0 .256.01c1.43.041 2.76.743 3.6 1.9a4.02 4.02 0 0 0-2.123 3.637a4.022 4.022 0 0 0 1.317 3.023a4.38 4.38 0 0 0 1.316.863c-.1.3-.215.59-.337.882a10.38 10.38 0 0 1-1.02 1.837a9.437 9.437 0 0 1-1.317 1.592a2.57 2.57 0 0 1-1.692.743a4.249 4.249 0 0 1-1.562-.373a4.501 4.501 0 0 0-1.68-.373a4.647 4.647 0 0 0-1.73.371a4.656 4.656 0 0 1-1.495.393l-.075.002Zm3.15-14.507c-.075 0-.15 0-.225-.009a2.893 2.893 0 0 1-.025-.359a4.17 4.17 0 0 1 1.1-2.688a4.277 4.277 0 0 1 1.35-1.009a4.03 4.03 0 0 1 1.535-.435c.015.131.015.259.015.381a4.071 4.071 0 0 1-1.04 2.66a3.643 3.643 0 0 1-2.71 1.459Z"></svg:path>`,
})
export class CiAppleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciArchiveIcon],svg[ci-archive-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6.6 9h10.8M6.6 9c-.56 0-.84 0-1.054.109a1 1 0 0 0-.437.437c-.11.214-.11.494-.11 1.054v5.2c0 1.12 0 1.68.219 2.108a2 2 0 0 0 .874.874c.427.218.987.218 2.105.218h7.606c1.117 0 1.676 0 2.104-.218c.376-.192.683-.498.875-.874c.218-.427.218-.986.218-2.104V10.59c0-.554 0-.832-.109-1.045a1 1 0 0 0-.437-.437C18.24 9 17.96 9 17.4 9M6.6 9H4.975c-.849 0-1.273 0-1.514-.148a1 1 0 0 1-.472-.938c.024-.282.277-.623.783-1.307c.147-.197.22-.296.31-.372c.119-.1.26-.172.413-.208C4.609 6 4.73 6 4.977 6h14.045c.246 0 .368 0 .482.027c.152.036.294.108.414.208c.09.076.163.174.31.372c.506.683.759 1.025.783 1.307a1 1 0 0 1-.472.938C20.298 9 19.872 9 19.023 9H17.4M10 14h4"></svg:path>`,
})
export class CiArchiveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciArrowCircleDownIcon],svg[ci-arrow-circle-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 13l3 3m0 0l3-3m-3 3V8m9 4a9 9 0 1 0-18 0a9 9 0 0 0 18 0"></svg:path>`,
})
export class CiArrowCircleDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciArrowCircleDownLeftIcon],svg[ci-arrow-circle-down-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 11v4m0 0h4m-4 0l6-6m6 3a9 9 0 1 0-18 0a9 9 0 0 0 18 0"></svg:path>`,
})
export class CiArrowCircleDownLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciArrowCircleDownRightIcon],svg[ci-arrow-circle-down-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 15h4m0 0v-4m0 4L9 9m12 3a9 9 0 1 0-18 0a9 9 0 0 0 18 0"></svg:path>`,
})
export class CiArrowCircleDownRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciArrowCircleLeftIcon],svg[ci-arrow-circle-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m11 9l-3 3m0 0l3 3m-3-3h8m5 0a9 9 0 1 0-18 0a9 9 0 0 0 18 0"></svg:path>`,
})
export class CiArrowCircleLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciArrowCircleRightIcon],svg[ci-arrow-circle-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m13 15l3-3m0 0l-3-3m3 3H8m13 0a9 9 0 1 0-18 0a9 9 0 0 0 18 0"></svg:path>`,
})
export class CiArrowCircleRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciArrowCircleUpIcon],svg[ci-arrow-circle-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m15 11l-3-3m0 0l-3 3m3-3v8m9-4a9 9 0 1 0-18 0a9 9 0 0 0 18 0"></svg:path>`,
})
export class CiArrowCircleUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciArrowCircleUpLeftIcon],svg[ci-arrow-circle-up-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 9H9m0 0v4m0-4l6 6m6-3a9 9 0 1 0-18 0a9 9 0 0 0 18 0"></svg:path>`,
})
export class CiArrowCircleUpLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciArrowCircleUpRightIcon],svg[ci-arrow-circle-up-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13V9m0 0h-4m4 0l-6 6m12-3a9 9 0 1 0-18 0a9 9 0 0 0 18 0"></svg:path>`,
})
export class CiArrowCircleUpRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciArrowDownLeftLgIcon],svg[ci-arrow-down-left-lg-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.636 18.364h7.07m-7.07 0v-7.071m0 7.07L18.364 5.637"></svg:path>`,
})
export class CiArrowDownLeftLgIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciArrowDownLeftMdIcon],svg[ci-arrow-down-left-md-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 7L7 17m0 0h8m-8 0V9"></svg:path>`,
})
export class CiArrowDownLeftMdIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciArrowDownLeftSmIcon],svg[ci-arrow-down-left-sm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m16 8l-8 8m0 0h6m-6 0v-6"></svg:path>`,
})
export class CiArrowDownLeftSmIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciArrowDownLgIcon],svg[ci-arrow-down-lg-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m12 21l5-5m-5 5l-5-5m5 5V3"></svg:path>`,
})
export class CiArrowDownLgIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciArrowDownMdIcon],svg[ci-arrow-down-md-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v14m0 0l6-6m-6 6l-6-6"></svg:path>`,
})
export class CiArrowDownMdIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciArrowDownRightLgIcon],svg[ci-arrow-down-right-lg-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 18.364v-7.071m0 7.071h-7.071m7.07 0L5.637 5.636"></svg:path>`,
})
export class CiArrowDownRightLgIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciArrowDownRightMdIcon],svg[ci-arrow-down-right-md-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m7 7l10 10m0 0V9m0 8H9"></svg:path>`,
})
export class CiArrowDownRightMdIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciArrowDownRightSmIcon],svg[ci-arrow-down-right-sm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m8 8l8 8m0 0v-6m0 6h-6"></svg:path>`,
})
export class CiArrowDownRightSmIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciArrowDownSmIcon],svg[ci-arrow-down-sm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 7v10m0 0l4-4m-4 4l-4-4"></svg:path>`,
})
export class CiArrowDownSmIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciArrowDownUpIcon],svg[ci-arrow-down-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m11 16l-3 3m0 0l-3-3m3 3V5m5 3l3-3m0 0l3 3m-3-3v14"></svg:path>`,
})
export class CiArrowDownUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciArrowLeftLgIcon],svg[ci-arrow-left-lg-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m3 12l5 5m-5-5l5-5m-5 5h18"></svg:path>`,
})
export class CiArrowLeftLgIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciArrowLeftMdIcon],svg[ci-arrow-left-md-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 12H5m0 0l6 6m-6-6l6-6"></svg:path>`,
})
export class CiArrowLeftMdIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciArrowLeftRightIcon],svg[ci-arrow-left-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m16 13l3 3m0 0l-3 3m3-3H5m3-5L5 8m0 0l3-3M5 8h14"></svg:path>`,
})
export class CiArrowLeftRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciArrowLeftSmIcon],svg[ci-arrow-left-sm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 12H7m0 0l4 4m-4-4l4-4"></svg:path>`,
})
export class CiArrowLeftSmIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciArrowReload02Icon],svg[ci-arrow-reload-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 16h5v5M10 8H5V3m14.418 6.003A8 8 0 0 0 5.086 7.976m-.504 7.021a8 8 0 0 0 14.331 1.027"></svg:path>`,
})
export class CiArrowReload02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciArrowRightLgIcon],svg[ci-arrow-right-lg-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m21 12l-5-5m5 5l-5 5m5-5H3"></svg:path>`,
})
export class CiArrowRightLgIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciArrowRightMdIcon],svg[ci-arrow-right-md-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14m0 0l-6-6m6 6l-6 6"></svg:path>`,
})
export class CiArrowRightMdIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciArrowRightSmIcon],svg[ci-arrow-right-sm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 12h10m0 0l-4-4m4 4l-4 4"></svg:path>`,
})
export class CiArrowRightSmIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciArrowSubDownLeftIcon],svg[ci-arrow-sub-down-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m11 11l-5 5m0 0l5 5m-5-5h7.803c1.118 0 1.677 0 2.105-.218a2 2 0 0 0 .874-.874c.218-.428.218-.987.218-2.105V3"></svg:path>`,
})
export class CiArrowSubDownLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciArrowSubDownRightIcon],svg[ci-arrow-sub-down-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m13 11l5 5m0 0l-5 5m5-5h-7.803c-1.118 0-1.678 0-2.105-.218a2 2 0 0 1-.874-.874C7 14.48 7 13.92 7 12.8V3"></svg:path>`,
})
export class CiArrowSubDownRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciArrowSubLeftDownIcon],svg[ci-arrow-sub-left-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m13.5 12.5l-5 5m0 0l-5-5m5 5V9.7c0-1.12 0-1.68.218-2.108c.192-.377.497-.682.874-.874c.428-.218.988-.218 2.108-.218h9.8"></svg:path>`,
})
export class CiArrowSubLeftDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciArrowSubLeftUpIcon],svg[ci-arrow-sub-left-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m12.5 11.5l-5-5m0 0l-5 5m5-5v7.8c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874c.427.218.987.218 2.105.218H20.5"></svg:path>`,
})
export class CiArrowSubLeftUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciArrowSubRightDownIcon],svg[ci-arrow-sub-right-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m11 13l5 5m0 0l5-5m-5 5v-7.803c0-1.118 0-1.678-.218-2.105a2 2 0 0 0-.874-.874C14.48 7 13.92 7 12.8 7H3"></svg:path>`,
})
export class CiArrowSubRightDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciArrowSubRightUpIcon],svg[ci-arrow-sub-right-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m11 11l5-5m0 0l5 5m-5-5v7.803c0 1.118 0 1.677-.218 2.105a2 2 0 0 1-.874.874C14.48 17 13.92 17 12.803 17H3"></svg:path>`,
})
export class CiArrowSubRightUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciArrowSubUpLeftIcon],svg[ci-arrow-sub-up-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 13L6 8m0 0l5-5M6 8h7.8c1.12 0 1.68 0 2.108.218a2 2 0 0 1 .874.874c.218.427.218.987.218 2.105V21"></svg:path>`,
})
export class CiArrowSubUpLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciArrowSubUpRightIcon],svg[ci-arrow-sub-up-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m13 13l5-5m0 0l-5-5m5 5h-7.8c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C7 9.52 7 10.08 7 11.2V21"></svg:path>`,
})
export class CiArrowSubUpRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciArrowUndoDownLeftIcon],svg[ci-arrow-undo-down-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m7 11l-4 4m0 0l4 4m-4-4h13a5 5 0 0 0 0-10h-5"></svg:path>`,
})
export class CiArrowUndoDownLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciArrowUndoDownRightIcon],svg[ci-arrow-undo-down-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m17 11l4 4m0 0l-4 4m4-4H8A5 5 0 0 1 8 5h5"></svg:path>`,
})
export class CiArrowUndoDownRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciArrowUndoUpLeftIcon],svg[ci-arrow-undo-up-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 13L3 9m0 0l4-4M3 9h13a5 5 0 0 1 0 10h-5"></svg:path>`,
})
export class CiArrowUndoUpLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciArrowUndoUpRightIcon],svg[ci-arrow-undo-up-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m17 13l4-4m0 0l-4-4m4 4H8a5 5 0 0 0 0 10h5"></svg:path>`,
})
export class CiArrowUndoUpRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciArrowUpLeftLgIcon],svg[ci-arrow-up-left-lg-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.636 5.636v7.07m0-7.07h7.07m-7.07 0l12.728 12.728"></svg:path>`,
})
export class CiArrowUpLeftLgIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciArrowUpLeftMdIcon],svg[ci-arrow-up-left-md-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 17L7 7m0 0v8m0-8h8"></svg:path>`,
})
export class CiArrowUpLeftMdIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciArrowUpLeftSmIcon],svg[ci-arrow-up-left-sm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 16L8 8m0 0v6m0-6h6"></svg:path>`,
})
export class CiArrowUpLeftSmIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciArrowUpLgIcon],svg[ci-arrow-up-lg-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3L7 8m5-5l5 5m-5-5v18"></svg:path>`,
})
export class CiArrowUpLgIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciArrowUpMdIcon],svg[ci-arrow-up-md-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19V5m0 0l-6 6m6-6l6 6"></svg:path>`,
})
export class CiArrowUpMdIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciArrowUpRightLgIcon],svg[ci-arrow-up-right-lg-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.365 5.636h-7.071m7.07 0v7.071m0-7.07L5.638 18.363"></svg:path>`,
})
export class CiArrowUpRightLgIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciArrowUpRightMdIcon],svg[ci-arrow-up-right-md-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 17L17 7m0 0H9m8 0v8"></svg:path>`,
})
export class CiArrowUpRightMdIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciArrowUpRightSmIcon],svg[ci-arrow-up-right-sm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m8 16l8-8m0 0h-6m6 0v6"></svg:path>`,
})
export class CiArrowUpRightSmIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciArrowUpSmIcon],svg[ci-arrow-up-sm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 17V7m0 0l-4 4m4-4l4 4"></svg:path>`,
})
export class CiArrowUpSmIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciArrowsReload01Icon],svg[ci-arrows-reload-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 16H5v5m9-13h5V3M4.583 9.003a8 8 0 0 1 14.331-1.027m.504 7.021a8 8 0 0 1-14.332 1.027"></svg:path>`,
})
export class CiArrowsReload01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciBarBottomIcon],svg[ci-bar-bottom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 15H4m16 0V7.197c0-1.118 0-1.678-.218-2.105a2 2 0 0 0-.875-.874C18.48 4 17.92 4 16.8 4H7.2c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C4 5.52 4 6.08 4 7.2V15m16 0v1.803c0 1.118 0 1.677-.218 2.104a2 2 0 0 1-.875.875c-.427.218-.986.218-2.104.218H7.197c-1.118 0-1.678 0-2.105-.218a2 2 0 0 1-.874-.875C4 18.48 4 17.92 4 16.8V15"></svg:path>`,
})
export class CiBarBottomIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciBarChartIcon],svg[ci-bar-chart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 21h-3V11h3v10Zm-5 0h-3V8h3v13Zm-5 0H8V5h3v16Zm-5 0H3v-8h3v8Z"></svg:path>`,
})
export class CiBarChartIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciBarChartAltIcon],svg[ci-bar-chart-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 21H2V11a2 2 0 0 1 2-2h4V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v3h4a2 2 0 0 1 2 2v12ZM16 9v10h4V9h-4Zm-6-5v15h4V4h-4Zm-6 7v8h4v-8H4Z"></svg:path>`,
})
export class CiBarChartAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciBarChartCircleIcon],svg[ci-bar-chart-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 20a8 8 0 1 1 0-16a8 8 0 0 1 0 16ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12Zm13 4h2V9h-2v7Zm-8 0h2v-5H7v5Zm4 0h2V6h-2v10Z" clip-rule="evenodd"></svg:path>`,
})
export class CiBarChartCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciBarChartHorizontalIcon],svg[ci-bar-chart-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 22H2V2h2v20Zm11-1H5v-3h10v3Zm3-5H5v-3h13v3Zm3-5H5V8h16v3Zm-8-5H5V3h8v3Z"></svg:path>`,
})
export class CiBarChartHorizontalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciBarChartSquareIcon],svg[ci-bar-chart-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2ZM5 5v14h14V5H5Zm12 12h-2v-7h2v7Zm-4 0h-2V7h2v10Zm-4 0H7v-5h2v5Z"></svg:path>`,
})
export class CiBarChartSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciBarLeftIcon],svg[ci-bar-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20V4m0 16h7.803c1.118 0 1.677 0 2.104-.218a2 2 0 0 0 .875-.875c.218-.427.218-.986.218-2.104V7.197c0-1.118 0-1.678-.218-2.105a2 2 0 0 0-.875-.874C18.48 4 17.92 4 16.8 4H9m0 16H7.197c-1.118 0-1.678 0-2.105-.218a2 2 0 0 1-.874-.875C4 18.48 4 17.92 4 16.8V7.2c0-1.12 0-1.68.218-2.108c.192-.377.497-.682.874-.874C5.52 4 6.08 4 7.2 4H9"></svg:path>`,
})
export class CiBarLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciBarRightIcon],svg[ci-bar-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 4v16m0-16H7.2c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C4 5.52 4 6.08 4 7.2v9.6c0 1.12 0 1.68.218 2.107c.192.377.497.683.874.875c.427.218.987.218 2.105.218H15m0-16h1.8c1.12 0 1.68 0 2.107.218c.377.192.683.497.875.874c.218.427.218.987.218 2.105v9.606c0 1.118 0 1.677-.218 2.104a2 2 0 0 1-.875.875c-.427.218-.986.218-2.104.218H15"></svg:path>`,
})
export class CiBarRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciBarTopIcon],svg[ci-bar-top-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 9h16M4 9v7.8c0 1.12 0 1.68.218 2.107c.192.377.497.683.874.875c.427.218.987.218 2.105.218h9.606c1.118 0 1.677 0 2.104-.218a2 2 0 0 0 .875-.875c.218-.427.218-.986.218-2.104V9M4 9V7.2c0-1.12 0-1.68.218-2.108c.192-.377.497-.682.874-.874C5.52 4 6.08 4 7.2 4h9.6c1.12 0 1.68 0 2.107.218c.377.192.683.497.875.874c.218.427.218.987.218 2.105V9"></svg:path>`,
})
export class CiBarTopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciBarcodeIcon],svg[ci-barcode-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 4h3v16H2V4Zm4 0h1v16H6V4Zm5 0H9v16h2V4Zm1 0h2v16h-2V4Zm3 0h1v16h-1V4Zm5 0h-3v16h3V4Zm1 0h1v16h-1V4Z"></svg:path>`,
})
export class CiBarcodeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciBehanceIcon],svg[ci-behance-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.669 18.268a5.163 5.163 0 0 1-1.9-.337a4.024 4.024 0 0 1-1.439-.958a4.348 4.348 0 0 1-.905-1.485a5.461 5.461 0 0 1-.319-1.9a5.244 5.244 0 0 1 .328-1.864a4.358 4.358 0 0 1 .934-1.493a4.46 4.46 0 0 1 1.444-.994a4.6 4.6 0 0 1 1.858-.363a4.262 4.262 0 0 1 1.979.44a3.983 3.983 0 0 1 1.39 1.183c.369.507.635 1.082.783 1.691c.162.648.22 1.317.171 1.983h-6.431c-.026.633.191 1.25.606 1.729a2.186 2.186 0 0 0 1.584.538c.454.01.9-.12 1.278-.373c.3-.183.53-.46.653-.789h2.155a4.108 4.108 0 0 1-1.588 2.3a4.642 4.642 0 0 1-2.581.692Zm-.069-7.544a2.092 2.092 0 0 0-.974.2c-.238.12-.449.287-.62.49c-.15.185-.263.399-.328.628a2.812 2.812 0 0 0-.111.587h3.982a2.377 2.377 0 0 0-.563-1.409a1.834 1.834 0 0 0-1.386-.496Zm-9.63 7.312H2V5.731h5.8a7.645 7.645 0 0 1 1.6.155c.446.087.87.26 1.251.508a2.4 2.4 0 0 1 .8.939c.2.454.295.947.28 1.443a2.71 2.71 0 0 1-.417 1.555c-.32.443-.755.792-1.256 1.011c.681.17 1.28.577 1.69 1.147c.38.587.573 1.276.552 1.975a3.418 3.418 0 0 1-.358 1.614c-.23.444-.564.826-.974 1.113a4.32 4.32 0 0 1-1.4.64a6.28 6.28 0 0 1-1.603.206l.005-.001Zm-3.26-5.483v3.39H7.6c.255.003.51-.023.76-.077c.229-.044.446-.133.64-.262a1.29 1.29 0 0 0 .44-.491c.118-.25.173-.524.162-.8a1.614 1.614 0 0 0-.534-1.358a2.286 2.286 0 0 0-1.414-.4l-2.944-.002Zm0-4.725v2.875h2.742c.424.017.842-.104 1.192-.345a1.3 1.3 0 0 0 .464-1.119a1.487 1.487 0 0 0-.152-.708a1.122 1.122 0 0 0-.417-.428a1.677 1.677 0 0 0-.6-.215a3.575 3.575 0 0 0-.7-.061l-2.529.001Zm15.341-.056h-4.99V6.557h4.99v1.215Z"></svg:path>`,
})
export class CiBehanceIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciBellIcon],svg[ci-bell-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17v1a3 3 0 1 1-6 0v-1m6 0H9m6 0h3.59c.383 0 .575 0 .73-.052a1 1 0 0 0 .627-.628c.053-.156.053-.348.053-.734c0-.169 0-.253-.014-.334a1 1 0 0 0-.173-.42c-.048-.067-.108-.127-.227-.246l-.39-.39a.67.67 0 0 1-.196-.474V10a7 7 0 1 0-14 0v3.722a.67.67 0 0 1-.196.474l-.39.39c-.12.12-.179.179-.226.245a1 1 0 0 0-.175.421c-.013.08-.013.165-.013.334c0 .386 0 .578.052.734a1 1 0 0 0 .629.628c.155.052.346.052.729.052H9"></svg:path>`,
})
export class CiBellIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciBellAddIcon],svg[ci-bell-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17v1a3 3 0 1 1-6 0v-1m6 0H9m6 0h3.59c.383 0 .575 0 .73-.052a1 1 0 0 0 .627-.628c.053-.156.053-.348.053-.734c0-.169 0-.253-.014-.334a1 1 0 0 0-.173-.42c-.048-.067-.108-.127-.227-.246l-.39-.39a.67.67 0 0 1-.196-.474V10a7 7 0 1 0-14 0v3.722a.67.67 0 0 1-.196.474l-.39.39c-.12.12-.179.179-.226.245a1 1 0 0 0-.175.421c-.013.08-.013.165-.013.334c0 .386 0 .578.052.734a1 1 0 0 0 .629.628c.155.052.346.052.729.052H9m3-4v-3m0 0V7m0 3H9m3 0h3"></svg:path>`,
})
export class CiBellAddIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciBellCloseIcon],svg[ci-bell-close-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17v1a3 3 0 1 1-6 0v-1m6 0H9m6 0h3.59c.383 0 .575 0 .73-.052a1 1 0 0 0 .628-.628c.052-.156.052-.348.052-.734c0-.169 0-.253-.013-.334a1 1 0 0 0-.174-.42c-.048-.067-.108-.127-.227-.246l-.39-.39a.67.67 0 0 1-.196-.474V10a7 7 0 1 0-14 0v3.722a.67.67 0 0 1-.196.474l-.39.39c-.12.12-.179.179-.226.245a1 1 0 0 0-.175.421c-.013.08-.013.165-.013.334c0 .386 0 .578.052.734a1 1 0 0 0 .628.628c.155.052.347.052.73.052H9m1-5l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2"></svg:path>`,
})
export class CiBellCloseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciBellNotificationIcon],svg[ci-bell-notification-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17v1a3 3 0 1 1-6 0v-1m6 0H9m6 0h4a1 1 0 0 0 1-1v-.586a1 1 0 0 0-.293-.707l-.51-.51a.67.67 0 0 1-.197-.475V10q0-.264-.02-.524M9 17H5a1 1 0 0 1-1-1v-.586a1 1 0 0 1 .293-.707l.51-.511A.67.67 0 0 0 5 13.722V10a7 7 0 0 1 9.045-6.696m4.935 6.172a4 4 0 1 0-4.935-6.173m4.935 6.173a4 4 0 0 1-4.935-6.173m4.935 6.173q0 0 0 0m-4.935-6.172h.002"></svg:path>`,
})
export class CiBellNotificationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciBellOffIcon],svg[ci-bell-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17v1a3 3 0 1 0 6 0v-1m-6 0h6m-6 0H5a1 1 0 0 1-.993-.883L4 16v-.586a1 1 0 0 1 .293-.707l.51-.51A.67.67 0 0 0 5 13.722V10c0-1.842.711-3.517 1.874-4.767M15 17h4M5 3l16 16m-2-6.001V10a7 7 0 0 0-7-7l-.24.004a7 7 0 0 0-2.29.467"></svg:path>`,
})
export class CiBellOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciBellRemoveIcon],svg[ci-bell-remove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17v1a3 3 0 1 1-6 0v-1m6 0H9m6 0h3.59c.383 0 .575 0 .73-.052a1 1 0 0 0 .627-.628c.053-.156.053-.348.053-.734c0-.169 0-.253-.014-.334a1 1 0 0 0-.173-.42c-.048-.067-.108-.127-.227-.246l-.39-.39a.67.67 0 0 1-.196-.474V10a7 7 0 1 0-14 0v3.722a.67.67 0 0 1-.196.474l-.39.39c-.12.12-.179.179-.226.245a1 1 0 0 0-.175.421c-.013.08-.013.165-.013.334c0 .386 0 .578.052.734a1 1 0 0 0 .629.628c.155.052.346.052.729.052H9m0-7h6"></svg:path>`,
})
export class CiBellRemoveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciBellRingIcon],svg[ci-bell-ring-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17v1a3 3 0 1 1-6 0v-1m6 0H9m6 0h3.59c.383 0 .575 0 .73-.052a1 1 0 0 0 .627-.628c.053-.156.053-.348.053-.734c0-.169 0-.253-.014-.334a1 1 0 0 0-.173-.42c-.048-.067-.108-.127-.227-.246l-.39-.39a.67.67 0 0 1-.196-.474V10a7 7 0 1 0-14 0v3.722a.67.67 0 0 1-.196.474l-.39.39c-.12.12-.179.179-.226.245a1 1 0 0 0-.175.421c-.013.08-.013.165-.013.334c0 .386 0 .578.052.734a1 1 0 0 0 .629.628c.155.052.346.052.729.052H9m9.019-14.986a10 10 0 0 1 3.153 4.002M5.982 2.014a10 10 0 0 0-3.154 4.002"></svg:path>`,
})
export class CiBellRingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciBlackLivesMatterIcon],svg[ci-black-lives-matter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.172 3.703a.6.6 0 0 0-.162-.817l-1.18-.792a.551.551 0 0 0-.775.167l-1.46 2.273L9.88 5.719l1.293-2.016Zm2.005 3.729l1.068-1.664a.6.6 0 0 0-.163-.817l-1.178-.792a.551.551 0 0 0-.776.167l-1.232 1.921l2.281 1.185Zm1.289 3.426l-1.033-.477a.597.597 0 0 1-.24-.86L15.2 6.39a.551.551 0 0 1 .776-.167l.935.63a.6.6 0 0 1 .163.816l-1.91 2.977a.552.552 0 0 1-.699.21Zm5.276-2.102l-.935-.63a.551.551 0 0 0-.776.168l-1.713 2.67a.597.597 0 0 0 .24.86l1.033.476a.552.552 0 0 0 .699-.21l1.615-2.517a.6.6 0 0 0-.163-.817Z"></svg:path><svg:path fill="currentColor" d="M17.133 13.371c.218.101.449.152.687.152a1.66 1.66 0 0 0 1.236-.558v1.715a3.488 3.488 0 0 1-1.482 2.877l-.351.243a.593.593 0 0 0-.25.487v3.127a.575.575 0 0 1-.564.586H7.878c-.367 0-.636-.358-.547-.728l1.031-4.286a.604.604 0 0 0-.094-.49l-4.157-5.83a.605.605 0 0 1-.016-.675L6.69 5.947a.552.552 0 0 1 .722-.199l4.563 2.37a.598.598 0 0 1 .217.85l-.345.537a.559.559 0 0 1-.47.261H7.816a.577.577 0 0 0-.564.614a.584.584 0 0 0 .58.558h2.413l2.615 5.432c.135.282.461.417.739.289c.296-.136.42-.5.277-.798l-2.37-4.923h.357l5.27 2.433Z"></svg:path>`,
})
export class CiBlackLivesMatterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciBoldIcon],svg[ci-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h4.5M8 12V5h4.5a3.5 3.5 0 1 1 0 7M8 12v7h5.5a3.5 3.5 0 1 0 0-7h-1"></svg:path>`,
})
export class CiBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciBookIcon],svg[ci-book-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 19.5V6.2c0-1.12 0-1.68.218-2.108c.192-.377.497-.682.874-.874C6.52 3 7.08 3 8.2 3h9.2c.56 0 .84 0 1.055.109a1 1 0 0 1 .436.437C19 3.76 19 4.04 19 4.6v11.8c0 .56 0 .84-.11 1.054a1 1 0 0 1-.435.437C18.24 18 17.96 18 17.402 18H7.25A2.25 2.25 0 0 0 5 20.25c0 .414.336.75.75.75h10.652c.559 0 .84 0 1.053-.109a1 1 0 0 0 .436-.437C18 20.24 18 19.96 18 19.4V18"></svg:path>`,
})
export class CiBookIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciBookOpenIcon],svg[ci-book-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9.8V20m0-10.2c0-1.68 0-2.52.327-3.162a3 3 0 0 1 1.31-1.311C14.28 5 15.12 5 16.8 5h2.6c.56 0 .84 0 1.054.109c.188.096.34.249.437.437C21 5.76 21 6.04 21 6.6v8.8c0 .56 0 .84-.11 1.054a1 1 0 0 1-.436.437c-.213.109-.493.109-1.052.109h-2.833c-.939 0-1.41 0-1.836.13a3 3 0 0 0-1.032.552c-.344.283-.605.674-1.126 1.455L12 20m0-10.2c0-1.68 0-2.52-.327-3.162a3 3 0 0 0-1.311-1.311C9.72 5 8.88 5 7.2 5H4.6c-.56 0-.84 0-1.054.109a1 1 0 0 0-.437.437C3 5.76 3 6.04 3 6.6v8.8c0 .56 0 .84.109 1.054a1 1 0 0 0 .437.437C3.76 17 4.039 17 4.598 17h2.833c.939 0 1.408 0 1.835.13c.377.114.73.302 1.034.552c.343.282.602.67 1.118 1.446L12 20"></svg:path>`,
})
export class CiBookOpenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciBookmarkIcon],svg[ci-bookmark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 7.2v9.485c0 1.361 0 2.042.204 2.458a2 2 0 0 0 2.06 1.102c.46-.06 1.026-.438 2.158-1.193l.003-.002c.449-.3.673-.449.908-.532a2 2 0 0 1 1.333 0c.235.083.46.233.911.534c1.133.755 1.7 1.132 2.16 1.193a2 2 0 0 0 2.059-1.102c.204-.416.204-1.097.204-2.458V7.197c0-1.118 0-1.678-.218-2.105a2 2 0 0 0-.875-.874C16.48 4 15.92 4 14.8 4H9.2c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C6 5.52 6 6.08 6 7.2"></svg:path>`,
})
export class CiBookmarkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciBuildingIcon],svg[ci-building-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 21H4a1 1 0 0 1-1-1v-7.3a1 1 0 0 1 .341-.752L5 10.5V4a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1ZM9 7.329a1 1 0 0 1 .658.248l5 4.375A1 1 0 0 1 15 12.7V19h4V5H7v3.75l1.341-1.174A1 1 0 0 1 9 7.329ZM8 16h2v3h3v-5.843l-4-3.5l-4 3.5V19h3v-3Z"></svg:path>`,
})
export class CiBuildingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciBuilding01Icon],svg[ci-building-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2 20h2m0 0h5m-5 0V7.2c0-1.12 0-1.68.218-2.108c.192-.377.497-.682.874-.874C5.52 4 6.08 4 7.2 4h1.6c1.12 0 1.68 0 2.107.218c.377.192.684.497.875.874c.218.427.218.987.218 2.105V10M9 20h11M9 20v-5.632c0-.525 0-.788.063-1.033q.085-.328.272-.61c.14-.21.336-.387.726-.737l2.302-2.068c.755-.678 1.133-1.017 1.56-1.146a2 2 0 0 1 1.154 0c.428.129.806.468 1.562 1.147l2.3 2.067c.39.35.585.527.726.737c.124.187.216.393.271.61c.064.245.064.508.064 1.033V20m0 0h2"></svg:path>`,
})
export class CiBuilding01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciBuilding02Icon],svg[ci-building-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2 20h2m0 0h8m-8 0V7.2c0-1.12 0-1.68.218-2.108c.192-.377.497-.682.874-.874C5.52 4 6.08 4 7.2 4h1.6c1.12 0 1.68 0 2.108.218a2 2 0 0 1 .874.874c.218.427.218.987.218 2.105v3.05M12 20h8m-8 0v-9.754M20 20h2m-2 0v-5.632c0-.525 0-.788-.063-1.033a2 2 0 0 0-.272-.61c-.14-.21-.335-.386-.726-.737l-2.3-2.067c-.756-.679-1.134-1.018-1.562-1.147a2 2 0 0 0-1.154 0c-.428.129-.806.468-1.562 1.147l-.361.325"></svg:path>`,
})
export class CiBuilding02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciBuilding03Icon],svg[ci-building-03-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2 20h2m0 0h11M4 20v-5.632c0-.525 0-.788.063-1.033q.085-.328.272-.61c.14-.21.336-.387.727-.737L7.363 9.92c.755-.678 1.132-1.017 1.56-1.146a2 2 0 0 1 1.154 0c.428.129.806.468 1.562 1.147l2.3 2.067c.39.35.585.527.726.737c.124.187.216.393.272.61c.063.245.063.508.063 1.033V20m0 0h5m0 0h2m-2 0V7.197c0-1.118 0-1.678-.218-2.105a2 2 0 0 0-.875-.874C18.48 4 17.92 4 16.8 4h-6.6c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C7 5.52 7 6.08 7 7.2V10"></svg:path>`,
})
export class CiBuilding03Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciBuilding04Icon],svg[ci-building-04-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2 20h2m0 0h10M4 20V6.2c0-1.12 0-1.68.218-2.108c.192-.377.497-.682.874-.874C5.52 3 6.08 3 7.2 3h3.6c1.12 0 1.68 0 2.107.218c.377.192.684.497.875.874c.218.427.218.987.218 2.105V12m0 8h6m-6 0v-8m6 8h2m-2 0v-8c0-.932 0-1.398-.152-1.765a2 2 0 0 0-1.082-1.083C18.398 9 17.932 9 17 9s-1.398 0-1.766.152a2 2 0 0 0-1.082 1.083C14 10.602 14 11.068 14 12m-7-2h4M7 7h4"></svg:path>`,
})
export class CiBuilding04Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciBulbIcon],svg[ci-bulb-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 21h6M12 3a6 6 0 0 0-5.019 9.29c.954 1.452 1.43 2.178 1.493 2.286c.55.965.449.625.518 1.734c.008.124.008.313.008.69a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1c0-.377 0-.566.008-.69c.07-1.11-.033-.769.518-1.734c.062-.108.54-.834 1.493-2.287A6 6 0 0 0 12 3"></svg:path>`,
})
export class CiBulbIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciCalendarIcon],svg[ci-calendar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8h16M4 8v8.8c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874c.427.218.987.218 2.105.218h9.606c1.118 0 1.677 0 2.104-.218c.377-.192.683-.498.875-.874c.218-.428.218-.986.218-2.104V8M4 8v-.8c0-1.12 0-1.68.218-2.108c.192-.377.497-.682.874-.874C5.52 4 6.08 4 7.2 4H8m12 4v-.803c0-1.118 0-1.678-.218-2.105a2 2 0 0 0-.875-.874C18.48 4 17.92 4 16.8 4H16m0-2v2m0 0H8m0-2v2"></svg:path>`,
})
export class CiCalendarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciCalendarAddIcon],svg[ci-calendar-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8h16M4 8v8.8c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874c.427.218.987.218 2.105.218h9.607c1.118 0 1.677 0 2.104-.218c.376-.192.682-.498.874-.874c.218-.428.218-.986.218-2.104V8M4 8v-.8c0-1.12 0-1.68.218-2.108c.192-.377.497-.682.874-.874C5.52 4 6.08 4 7.2 4H8m12 4v-.803c0-1.118 0-1.678-.218-2.105a2 2 0 0 0-.874-.874C18.48 4 17.92 4 16.8 4H16M8 4h8M8 4V2m8 2V2m-1.5 12H12m0 0H9.5m2.5 0v-2.5m0 2.5v2.5"></svg:path>`,
})
export class CiCalendarAddIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciCalendarCalendarIcon],svg[ci-calendar-calendar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.999 22h-14a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2V2h2v2h6V2h2v2h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2Zm-14-12v10h14V10h-14Zm0-4v2h14V6h-14Z"></svg:path>`,
})
export class CiCalendarCalendarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciCalendarCheckIcon],svg[ci-calendar-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8h16M4 8v8.8c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874c.427.218.987.218 2.105.218h9.606c1.118 0 1.677 0 2.104-.218c.377-.192.683-.498.875-.874c.218-.428.218-.986.218-2.104V8M4 8v-.8c0-1.12 0-1.68.218-2.108c.192-.377.497-.682.874-.874C5.52 4 6.08 4 7.2 4H8m12 4v-.803c0-1.118 0-1.678-.218-2.105a2 2 0 0 0-.875-.874C18.48 4 17.92 4 16.8 4H16M8 4h8M8 4V2m8 2V2m-1 10l-4 4l-2-2"></svg:path>`,
})
export class CiCalendarCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciCalendarCloseIcon],svg[ci-calendar-close-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8h16M4 8v8.8c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874c.427.218.987.218 2.105.218h9.607c1.118 0 1.677 0 2.104-.218c.376-.192.682-.498.874-.874c.218-.428.218-.986.218-2.104V8M4 8v-.8c0-1.12 0-1.68.218-2.108c.192-.377.497-.682.874-.874C5.52 4 6.08 4 7.2 4H8m12 4v-.803c0-1.118 0-1.678-.218-2.105a2 2 0 0 0-.874-.874C18.48 4 17.92 4 16.8 4H16M8 4h8M8 4V2m8 2V2m-2 14l-2-2m0 0l-2-2m2 2l2-2m-2 2l-2 2"></svg:path>`,
})
export class CiCalendarCloseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciCalendarDaysIcon],svg[ci-calendar-days-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 4h-.8c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C4 5.52 4 6.08 4 7.2V8m4-4h8M8 4V2m8 2h.8c1.12 0 1.68 0 2.107.218c.377.192.683.497.875.874c.218.427.218.987.218 2.105V8m-4-4V2M4 8v8.8c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874c.427.218.987.218 2.105.218h9.606c1.118 0 1.677 0 2.104-.218c.377-.192.683-.498.875-.874c.218-.428.218-.986.218-2.104V8M4 8h16m-4 8h.002v.002H16zm-4 0h.002v.002H12zm-4 0h.002v.002H8zm8.002-4v.002H16V12zM12 12h.002v.002H12zm-4 0h.002v.002H8z"></svg:path>`,
})
export class CiCalendarDaysIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciCalendarEditIcon],svg[ci-calendar-edit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 22H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2V2h2v2h6V2h2v2h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2ZM5 10v10h14V10H5Zm0-4v2h14V6H5Zm4.8 13H8v-1.8l4.2-4.19l1.8 1.8L9.8 19Zm4.825-4.818l-1.8-1.8l1.375-1.369l1.8 1.8l-1.37 1.37l-.005-.001Z"></svg:path>`,
})
export class CiCalendarEditIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciCalendarEventIcon],svg[ci-calendar-event-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8h16M4 8v8.8c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874c.427.218.987.218 2.105.218h9.606c1.118 0 1.677 0 2.104-.218c.377-.192.683-.498.875-.874c.218-.428.218-.986.218-2.104V8M4 8v-.8c0-1.12 0-1.68.218-2.108c.192-.377.497-.682.874-.874C5.52 4 6.08 4 7.2 4H8m12 4v-.803c0-1.118 0-1.678-.218-2.105a2 2 0 0 0-.875-.874C18.48 4 17.92 4 16.8 4H16M8 4h8M8 4V2m8 2V2m-4.25 14a.25.25 0 0 0 .25-.25v-3.5a.25.25 0 0 0-.25-.25h-3.5a.25.25 0 0 0-.25.25v3.5c0 .138.112.25.25.25z"></svg:path>`,
})
export class CiCalendarEventIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciCalendarMinusIcon],svg[ci-calendar-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 22H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2V2h2v2h6V2h2v2h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2ZM5 10v10h14V10H5Zm0-4v2h14V6H5Zm10 10H9v-2h6v2Z"></svg:path>`,
})
export class CiCalendarMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciCalendarPlusIcon],svg[ci-calendar-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 22H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2V2h2v2h6V2h2v2h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2ZM5 10v10h14V10H5Zm0-4v2h14V6H5Zm8 12h-2v-2H9v-2h2v-2h2v2h2v2h-2v2Z"></svg:path>`,
})
export class CiCalendarPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciCalendarRemoveIcon],svg[ci-calendar-remove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8h16M4 8v8.8c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874c.427.218.987.218 2.105.218h9.606c1.118 0 1.677 0 2.104-.218c.377-.192.683-.498.875-.874c.218-.428.218-.986.218-2.104V8M4 8v-.8c0-1.12 0-1.68.218-2.108c.192-.377.497-.682.874-.874C5.52 4 6.08 4 7.2 4H8m12 4v-.803c0-1.118 0-1.678-.218-2.105a2 2 0 0 0-.875-.874C18.48 4 17.92 4 16.8 4H16M8 4h8M8 4V2m8 2V2m-1.5 12h-5"></svg:path>`,
})
export class CiCalendarRemoveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciCalendarWeekIcon],svg[ci-calendar-week-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8h16M4 8v8.8c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874c.427.218.987.218 2.105.218h9.606c1.118 0 1.677 0 2.104-.218c.377-.192.683-.498.875-.874c.218-.428.218-.986.218-2.104V8M4 8v-.8c0-1.12 0-1.68.218-2.108c.192-.377.497-.682.874-.874C5.52 4 6.08 4 7.2 4H8m12 4v-.803c0-1.118 0-1.678-.218-2.105a2 2 0 0 0-.875-.874C18.48 4 17.92 4 16.8 4H16M8 4h8M8 4V2m8 2V2m0 10H8"></svg:path>`,
})
export class CiCalendarWeekIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciCalendarXIcon],svg[ci-calendar-x-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 22H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2V2h2v2h6V2h2v2h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2ZM5 10v10h14V10H5Zm0-4v2h14V6H5Zm4.706 12.707l-1.413-1.414L10.586 15l-2.293-2.293l1.414-1.414L12 13.586l2.293-2.292l1.414 1.414L13.414 15l2.293 2.293l-1.413 1.413L12 16.414l-2.293 2.293h-.001Z"></svg:path>`,
})
export class CiCalendarXIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciCameraIcon],svg[ci-camera-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.489 7H6.2c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C3 8.52 3 9.08 3 10.2v5.6c0 1.12 0 1.68.218 2.107c.192.377.497.683.874.875c.427.218.987.218 2.105.218h11.606c1.118 0 1.677 0 2.104-.218a2 2 0 0 0 .875-.875c.218-.427.218-.986.218-2.104v-5.606c0-1.118 0-1.678-.218-2.105a2 2 0 0 0-.875-.874C19.48 7 18.92 7 17.8 7h-3.29M9.49 7h.062M9.49 7h.062M9.49 7c-.106 0-.166 0-.213-.006a1 1 0 0 1-.867-1.203a3 3 0 0 1 .08-.257l.001-.006c.052-.154.077-.23.106-.299a2 2 0 0 1 1.699-1.224C10.368 4 10.449 4 10.61 4h2.778c.162 0 .243 0 .317.005a2 2 0 0 1 1.698 1.224c.029.068.054.145.106.3c.046.138.07.207.08.262a1 1 0 0 1-.866 1.203A2 2 0 0 1 14.51 7M9.55 7h4.898m0 0h.062m-.062 0h.062M12 16a3 3 0 1 1 0-6a3 3 0 0 1 0 6"></svg:path>`,
})
export class CiCameraIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciCarAutoIcon],svg[ci-car-auto-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 11h1.045m0 0h15.91m-15.91 0q.018-.077.04-.153a4 4 0 0 1 .19-.467L5.822 6.9c.305-.687.458-1.032.7-1.284c.214-.223.476-.393.766-.498C7.617 5 7.993 5 8.746 5h6.508c.752 0 1.13 0 1.458.118c.29.105.552.275.765.498c.242.252.395.596.7 1.283l1.553 3.493c.099.223.15.337.185.455q.022.075.04.153m-15.91 0a2 2 0 0 0-.03.174C4 11.3 4 11.426 4 11.68V17m15.955-6H21m-1.046 0q.02.087.03.174c.016.124.016.25.016.5V17m0 0h-4m4 0v1a2 2 0 1 1-4 0v-1m0 0H8m0 0H4m4 0v1a2 2 0 1 1-4 0v-1"></svg:path>`,
})
export class CiCarAutoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciCaretCircleDownIcon],svg[ci-caret-circle-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m15 11l-3 3l-3-3m12 1a9 9 0 1 0-18 0a9 9 0 0 0 18 0"></svg:path>`,
})
export class CiCaretCircleDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciCaretCircleLeftIcon],svg[ci-caret-circle-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m13 15l-3-3l3-3m8 3a9 9 0 1 0-18 0a9 9 0 0 0 18 0"></svg:path>`,
})
export class CiCaretCircleLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciCaretCircleRightIcon],svg[ci-caret-circle-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m11 9l3 3l-3 3m10-3a9 9 0 1 0-18 0a9 9 0 0 0 18 0"></svg:path>`,
})
export class CiCaretCircleRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciCaretCircleUpIcon],svg[ci-caret-circle-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 13l3-3l3 3m6-1a9 9 0 1 0-18 0a9 9 0 0 0 18 0"></svg:path>`,
})
export class CiCaretCircleUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciCaretDownIcon],svg[ci-caret-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 14.5l5-5H7l5 5Z"></svg:path>`,
})
export class CiCaretDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciCaretDownMdIcon],svg[ci-caret-down-md-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m16 10l-4 4l-4-4"></svg:path>`,
})
export class CiCaretDownMdIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciCaretDownSmIcon],svg[ci-caret-down-sm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m15 11l-3 3l-3-3"></svg:path>`,
})
export class CiCaretDownSmIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciCaretLeftIcon],svg[ci-caret-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m9.5 12l5 5V7l-5 5Z"></svg:path>`,
})
export class CiCaretLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciCaretLeftSmIcon],svg[ci-caret-left-sm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m13 15l-3-3l3-3"></svg:path>`,
})
export class CiCaretLeftSmIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciCaretRightIcon],svg[ci-caret-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14.5 12l-5-5v10l5-5Z"></svg:path>`,
})
export class CiCaretRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciCaretRightSmIcon],svg[ci-caret-right-sm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m11 9l3 3l-3 3"></svg:path>`,
})
export class CiCaretRightSmIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciCaretUpIcon],svg[ci-caret-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 9.5l-5 5h10l-5-5Z"></svg:path>`,
})
export class CiCaretUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciCaretUpMdIcon],svg[ci-caret-up-md-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m8 14l4-4l4 4"></svg:path>`,
})
export class CiCaretUpMdIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciCaretUpSmIcon],svg[ci-caret-up-sm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 13l3-3l3 3"></svg:path>`,
})
export class CiCaretUpSmIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciCastIcon],svg[ci-cast-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 21h-7v-2h7V5H3v3H1V5a2 2 0 0 1 2-2h18a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2Zm-9 0h-2a8.94 8.94 0 0 0-2.639-6.361A8.939 8.939 0 0 0 1 12v-2a10.929 10.929 0 0 1 7.776 3.22A10.927 10.927 0 0 1 12 21Zm-4 0H6a4.968 4.968 0 0 0-1.466-3.534A4.966 4.966 0 0 0 1 16v-2a6.955 6.955 0 0 1 4.951 2.049A6.956 6.956 0 0 1 8 21Zm-4 0H1v-3a3 3 0 0 1 3 3Z"></svg:path>`,
})
export class CiCastIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciChartBarHorizontal01Icon],svg[ci-chart-bar-horizontal-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 9H4m9 0V4.6c0-.56 0-.84-.11-1.054a1 1 0 0 0-.435-.437C12.24 3 11.96 3 11.4 3H4v6m9 0h5.4c.56 0 .84 0 1.055.109a1 1 0 0 1 .436.437C20 9.76 20 10.04 20 10.6v2.8c0 .56 0 .84-.11 1.054a1 1 0 0 1-.435.437C19.24 15 18.96 15 18.402 15H16M4 9v6m0 0v6h10.402c.559 0 .84 0 1.053-.109a1 1 0 0 0 .436-.437C16 20.24 16 19.96 16 19.4V15M4 15h12"></svg:path>`,
})
export class CiChartBarHorizontal01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciChartBarVertical01Icon],svg[ci-chart-bar-vertical-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 11v9m0-9H4.6c-.56 0-.84 0-1.054.109a1 1 0 0 0-.437.437C3 11.76 3 12.04 3 12.6V20h6m0-9V5.6c0-.56 0-.84.109-1.054a1 1 0 0 1 .437-.437C9.76 4 10.04 4 10.6 4h2.8c.56 0 .84 0 1.054.109c.188.096.34.249.437.437C15 4.76 15 5.04 15 5.6V8M9 20h6m0 0h6V9.6c0-.56 0-.84-.11-1.054a1 1 0 0 0-.435-.437C20.24 8 19.96 8 19.4 8H15m0 12V8"></svg:path>`,
})
export class CiChartBarVertical01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciChartLineIcon],svg[ci-chart-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15v1.8c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874c.427.218.987.218 2.105.218H21M3 15V5m0 10l3.853-3.21l.004-.003c.697-.581 1.046-.872 1.425-.99a2 2 0 0 1 1.362.061c.367.153.688.474 1.332 1.118l.006.006c.654.654.981.982 1.354 1.133a2 2 0 0 0 1.385.046c.383-.128.733-.434 1.433-1.046L21 7"></svg:path>`,
})
export class CiChartLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciChartPieIcon],svg[ci-chart-pie-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3a9 9 0 1 0 9 9m-9-9a9 9 0 0 1 9 9m-9-9v9m9 0h-9m6 6.5L12 12"></svg:path>`,
})
export class CiChartPieIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciChatIcon],svg[ci-chat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m5.6 19.92l1.524-1.219l.01-.008c.318-.255.479-.383.658-.474q.241-.123.508-.178C8.499 18 8.706 18 9.122 18h8.681c1.118 0 1.678 0 2.105-.218a2 2 0 0 0 .874-.874C21 16.48 21 15.92 21 14.804V7.197c0-1.118 0-1.678-.218-2.105a2 2 0 0 0-.875-.874C19.48 4 18.92 4 17.8 4H6.2c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C3 5.52 3 6.08 3 7.2v11.471c0 1.066 0 1.599.218 1.872a1 1 0 0 0 .783.377c.35 0 .766-.334 1.599-1"></svg:path>`,
})
export class CiChatIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciChatAddIcon],svg[ci-chat-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14v-3m0 0V8m0 3H9m3 0h3m-7.876 7.701L5.6 19.921c-.833.665-1.249.998-1.599.999a1 1 0 0 1-.783-.377C3 20.27 3 19.737 3 18.671V7.201c0-1.12 0-1.681.218-2.11c.192-.376.497-.681.874-.873C4.52 4 5.08 4 6.2 4h11.6c1.12 0 1.68 0 2.108.218a2 2 0 0 1 .874.874c.218.427.218.987.218 2.105v7.607c0 1.117 0 1.676-.218 2.104a2 2 0 0 1-.874.874c-.427.218-.986.218-2.104.218H9.123c-.416 0-.625 0-.824.04a2 2 0 0 0-.507.179c-.18.092-.342.221-.665.48z"></svg:path>`,
})
export class CiChatAddIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciChatAltIcon],svg[ci-chat-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 2a2 2 0 0 1 2 2H4v11.177a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h12Z"></svg:path><svg:path fill="currentColor" d="m14 22l-2.667-2.823H8a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v9.177a2 2 0 0 1-2 2h-3.333L14 22Zm1.805-4.823H20V8H8v9.177h4.195L14 19.087l1.805-1.91Z"></svg:path>`,
})
export class CiChatAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciChatCheckIcon],svg[ci-chat-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m15 9l-4 4l-2-2m-1.876 7.701L5.6 19.921c-.833.665-1.249.998-1.599.999a1 1 0 0 1-.783-.377C3 20.27 3 19.737 3 18.671V7.201c0-1.12 0-1.681.218-2.11c.192-.376.497-.681.874-.873C4.52 4 5.08 4 6.2 4h11.6c1.12 0 1.68 0 2.108.218a2 2 0 0 1 .874.874c.218.427.218.987.218 2.105v7.607c0 1.117 0 1.676-.218 2.104a2 2 0 0 1-.874.874c-.427.218-.986.218-2.104.218H9.123c-.416 0-.625 0-.824.04a2 2 0 0 0-.507.179c-.18.092-.342.221-.665.48z"></svg:path>`,
})
export class CiChatCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciChatCircleIcon],svg[ci-chat-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7.51 19.802a9 9 0 1 0-3.312-3.312l.003.005c.073.127.11.191.127.252c.016.057.02.108.016.168a1 1 0 0 1-.07.26l-.768 2.307l-.001.003c-.162.487-.243.73-.186.892c.05.142.163.253.304.304c.162.057.404-.023.889-.185l.006-.002l2.306-.769c.131-.044.198-.066.262-.07a.5.5 0 0 1 .167.017a1.3 1.3 0 0 1 .253.127z"></svg:path>`,
})
export class CiChatCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciChatCircleAddIcon],svg[ci-chat-circle-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v-3m0 0V9m0 3H9m3 0h3m-3 9a8.96 8.96 0 0 1-4.49-1.198a1.3 1.3 0 0 0-.257-.13a.5.5 0 0 0-.167-.017a1 1 0 0 0-.258.07l-2.31.769h-.002c-.487.163-.731.245-.893.187a.5.5 0 0 1-.304-.304c-.057-.162.024-.405.186-.892v-.003l.77-2.306l.002-.005c.042-.129.064-.194.068-.256a.5.5 0 0 0-.017-.168a1.2 1.2 0 0 0-.127-.252l-.003-.005A9 9 0 1 1 12 21"></svg:path>`,
})
export class CiChatCircleAddIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciChatCircleCheckIcon],svg[ci-chat-circle-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m15 10l-4 4l-2-2m3 9a8.96 8.96 0 0 1-4.49-1.198a1.3 1.3 0 0 0-.257-.13a.5.5 0 0 0-.167-.017a1 1 0 0 0-.258.07l-2.31.769h-.002c-.487.163-.731.245-.893.187a.5.5 0 0 1-.304-.304c-.057-.162.024-.405.186-.892v-.003l.77-2.306l.002-.005c.042-.129.064-.194.068-.256a.5.5 0 0 0-.017-.168a1.2 1.2 0 0 0-.127-.252l-.003-.005A9 9 0 1 1 12 21"></svg:path>`,
})
export class CiChatCircleCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciChatCircleCloseIcon],svg[ci-chat-circle-close-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m-2 7a8.96 8.96 0 0 1-4.49-1.198l-.004-.003c-.128-.073-.192-.11-.253-.127a.5.5 0 0 0-.167-.017c-.064.004-.13.026-.262.07l-2.306.769l-.006.002c-.485.162-.727.242-.889.185a.5.5 0 0 1-.304-.304c-.057-.162.024-.405.186-.892v-.003l.77-2.306c.044-.132.065-.198.07-.261a.5.5 0 0 0-.017-.168a1.2 1.2 0 0 0-.127-.252l-.003-.005A9 9 0 1 1 12 21"></svg:path>`,
})
export class CiChatCircleCloseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciChatCircleDotsIcon],svg[ci-chat-circle-dots-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7.51 19.802a9 9 0 1 0-3.312-3.312l.003.005c.073.127.11.191.127.252c.016.057.02.108.016.168a1 1 0 0 1-.07.26l-.768 2.307l-.001.003c-.162.487-.243.73-.186.892c.05.142.163.253.304.304c.162.057.404-.023.889-.185l.006-.002l2.306-.769c.131-.044.198-.066.262-.07a.5.5 0 0 1 .167.017a1.3 1.3 0 0 1 .253.127z"></svg:path>`,
})
export class CiChatCircleDotsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciChatCircleRemoveIcon],svg[ci-chat-circle-remove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-3 9a8.96 8.96 0 0 1-4.49-1.198l-.004-.003c-.128-.073-.192-.11-.253-.127a.5.5 0 0 0-.167-.017c-.064.004-.13.026-.262.07l-2.306.769l-.006.002c-.485.162-.727.242-.889.185a.5.5 0 0 1-.304-.304c-.057-.162.024-.405.186-.892v-.003l.77-2.306c.044-.132.065-.198.07-.261a.5.5 0 0 0-.017-.168a1.2 1.2 0 0 0-.127-.252l-.003-.005A9 9 0 1 1 12 21"></svg:path>`,
})
export class CiChatCircleRemoveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciChatCloseIcon],svg[ci-chat-close-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m10 13l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m-6.876 5.701L5.6 19.921c-.833.665-1.249.998-1.599.999a1 1 0 0 1-.783-.377C3 20.27 3 19.737 3 18.671V7.201c0-1.12 0-1.681.218-2.11c.192-.376.497-.681.874-.873C4.52 4 5.08 4 6.2 4h11.6c1.12 0 1.68 0 2.107.218c.377.192.683.497.875.874c.218.427.218.987.218 2.105v7.607c0 1.117 0 1.676-.218 2.104a2 2 0 0 1-.874.874c-.427.218-.987.218-2.105.218h-8.68c-.417 0-.624 0-.823.04a2 2 0 0 0-.508.179c-.18.091-.34.22-.657.474z"></svg:path>`,
})
export class CiChatCloseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciChatConversationIcon],svg[ci-chat-conversation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 8h4a1 1 0 0 1 1 1v11l-3.333-2.769a1 1 0 0 0-.64-.231H9a1 1 0 0 1-1-1v-3m8-5V5a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v11l3.333-2.77c.18-.148.406-.23.64-.23H8m8-5v4a1 1 0 0 1-1 1H8"></svg:path>`,
})
export class CiChatConversationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciChatConversationCircleIcon],svg[ci-chat-conversation-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.338 15.99a6 6 0 1 0-5.408-2.78l-.424 1.272v.002c-.163.487-.244.73-.187.893c.05.141.163.253.304.303c.162.058.404-.023.888-.184l.007-.002l1.272-.424a5.97 5.97 0 0 0 3.548.92m0 0q0 0 0 0m0 0a6.003 6.003 0 0 0 8.872 3.08l1.272.424h.003c.487.163.73.244.893.186a.5.5 0 0 0 .302-.303c.058-.162-.023-.406-.186-.895l-.424-1.272l.142-.235A6 6 0 0 0 15 8l-.225.004l-.113.006"></svg:path>`,
})
export class CiChatConversationCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciChatDotsIcon],svg[ci-chat-dots-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m5.6 19.92l1.524-1.219l.01-.008c.318-.255.479-.383.658-.474q.241-.123.508-.178C8.499 18 8.706 18 9.122 18h8.681c1.118 0 1.678 0 2.105-.218a2 2 0 0 0 .874-.874C21 16.48 21 15.92 21 14.804V7.197c0-1.118 0-1.678-.218-2.105a2 2 0 0 0-.875-.874C19.48 4 18.92 4 17.8 4H6.2c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C3 5.52 3 6.08 3 7.2v11.471c0 1.066 0 1.599.218 1.872a1 1 0 0 0 .783.377c.35 0 .766-.334 1.599-1"></svg:path>`,
})
export class CiChatDotsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciChatRemoveIcon],svg[ci-chat-remove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 11h6m-7.876 7.701L5.6 19.921c-.833.665-1.249.998-1.599.999a1 1 0 0 1-.783-.377C3 20.27 3 19.737 3 18.671V7.201c0-1.12 0-1.681.218-2.11c.192-.376.497-.681.874-.873C4.52 4 5.08 4 6.2 4h11.6c1.12 0 1.68 0 2.107.218c.377.192.683.497.875.874c.218.427.218.987.218 2.105v7.607c0 1.117 0 1.676-.218 2.104a2 2 0 0 1-.874.874c-.427.218-.987.218-2.105.218h-8.68c-.417 0-.624 0-.823.04a2 2 0 0 0-.508.179c-.18.091-.34.22-.657.474z"></svg:path>`,
})
export class CiChatRemoveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciCheckIcon],svg[ci-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m6 12l4.243 4.243l8.484-8.486"></svg:path>`,
})
export class CiCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciCheckAllIcon],svg[ci-check-all-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m8 12.485l4.243 4.243l8.484-8.485M3 12.485l4.243 4.243m8.485-8.485L12.5 11.5"></svg:path>`,
})
export class CiCheckAllIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciCheckAllBigIcon],svg[ci-check-all-big-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m7 12l4.95 4.95L22.557 6.343M2.05 12.05L7 17M17.606 6.394l-5.303 5.303"></svg:path>`,
})
export class CiCheckAllBigIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciCheckBigIcon],svg[ci-check-big-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m4 12l4.95 4.95L19.557 6.343"></svg:path>`,
})
export class CiCheckBigIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciCheckBoldIcon],svg[ci-check-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m8.818 19.779l-6.364-6.364l2.83-2.83l3.534 3.544l9.898-9.908l2.83 2.83L8.818 19.779Z"></svg:path>`,
})
export class CiCheckBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciCheckboxIcon],svg[ci-checkbox-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 19H7a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2ZM7 7v10h10V7H7Z"></svg:path>`,
})
export class CiCheckboxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciCheckboxCheckIcon],svg[ci-checkbox-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m8 12l3 3l5-6M4 16.8V7.2c0-1.12 0-1.68.218-2.108c.192-.377.497-.682.874-.874C5.52 4 6.08 4 7.2 4h9.6c1.12 0 1.68 0 2.107.218c.377.192.683.497.875.874c.218.427.218.987.218 2.105v9.607c0 1.118 0 1.677-.218 2.104a2 2 0 0 1-.875.874c-.427.218-.986.218-2.104.218H7.197c-1.118 0-1.678 0-2.105-.218a2 2 0 0 1-.874-.874C4 18.48 4 17.92 4 16.8"></svg:path>`,
})
export class CiCheckboxCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciCheckboxCheckedIcon],svg[ci-checkbox-checked-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 19H7a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2ZM7 7v10h10V7H7Zm4 8.362l-2.7-2.647l1.4-1.43l1.3 1.271l3.3-3.267l1.4 1.422l-4.7 4.65v.001Z"></svg:path>`,
})
export class CiCheckboxCheckedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciCheckboxFillIcon],svg[ci-checkbox-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M4 7.2v9.6c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874c.427.218.987.218 2.105.218h9.606c1.118 0 1.677 0 2.104-.218c.377-.192.683-.498.875-.874c.218-.428.218-.986.218-2.104V7.197c0-1.118 0-1.678-.218-2.105a2 2 0 0 0-.875-.874C18.48 4 17.92 4 16.8 4H7.2c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C4 5.52 4 6.08 4 7.2"></svg:path><svg:path d="M15 13.4v-2.8c0-.56 0-.84-.11-1.054a1 1 0 0 0-.436-.437C14.24 9 13.96 9 13.4 9h-2.8c-.56 0-.84 0-1.054.109a1 1 0 0 0-.437.437C9 9.76 9 10.04 9 10.6v2.8c0 .56 0 .84.109 1.054a1 1 0 0 0 .437.437c.214.109.493.109 1.052.109h2.803c.559 0 .84 0 1.053-.109a1 1 0 0 0 .437-.437C15 14.24 15 13.96 15 13.4"></svg:path></svg:g>`,
})
export class CiCheckboxFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciCheckboxSquareIcon],svg[ci-checkbox-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 19H7a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2ZM7 7v10h10V7H7Zm8 8H9V9h6v6Z"></svg:path>`,
})
export class CiCheckboxSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciCheckboxUncheckedIcon],svg[ci-checkbox-unchecked-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7.2v9.6c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874c.427.218.987.218 2.105.218h9.606c1.118 0 1.677 0 2.104-.218c.377-.192.683-.498.875-.874c.218-.428.218-.986.218-2.104V7.197c0-1.118 0-1.678-.218-2.105a2 2 0 0 0-.875-.874C18.48 4 17.92 4 16.8 4H7.2c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C4 5.52 4 6.08 4 7.2"></svg:path>`,
})
export class CiCheckboxUncheckedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciChevronBigDownIcon],svg[ci-chevron-big-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.515 8.465L12 16.95l8.485-8.485L19.07 7.05L12 14.122L4.929 7.05L3.515 8.465Z"></svg:path>`,
})
export class CiChevronBigDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciChevronBigLeftIcon],svg[ci-chevron-big-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.535 3.515L7.05 12l8.485 8.485l1.415-1.414L9.878 12l7.072-7.071l-1.415-1.414Z"></svg:path>`,
})
export class CiChevronBigLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciChevronBigRightIcon],svg[ci-chevron-big-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.465 20.485L16.95 12L8.465 3.515L7.05 4.929L14.122 12L7.05 19.071l1.415 1.414Z"></svg:path>`,
})
export class CiChevronBigRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciChevronBigUpIcon],svg[ci-chevron-big-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.485 15.535L12 7.05l-8.485 8.485L4.93 16.95L12 9.878l7.071 7.072l1.414-1.415Z"></svg:path>`,
})
export class CiChevronBigUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciChevronDownIcon],svg[ci-chevron-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9l-7 7l-7-7"></svg:path>`,
})
export class CiChevronDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciChevronDownDuoIcon],svg[ci-chevron-down-duo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m16 13l-4 4l-4-4m8-6l-4 4l-4-4"></svg:path>`,
})
export class CiChevronDownDuoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciChevronDuoDownIcon],svg[ci-chevron-duo-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 18.424l-6.01-6.01l1.414-1.415l4.6 4.6l4.6-4.6l1.406 1.415l-6.009 6.01H12ZM12 13L5.99 6.989l1.414-1.414l4.6 4.6l4.6-4.6l1.406 1.414l-6.009 6.01L12 13Z"></svg:path>`,
})
export class CiChevronDuoDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciChevronDuoLeftIcon],svg[ci-chevron-duo-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.585 18.01L5.575 12l6.01-6.01L13 7.404l-4.6 4.6l4.6 4.6l-1.414 1.406h-.001Zm5.425 0L10.999 12l6.011-6.01l1.414 1.414l-4.6 4.6l4.6 4.6l-1.413 1.406h-.001Z"></svg:path>`,
})
export class CiChevronDuoLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciChevronDuoRightIcon],svg[ci-chevron-duo-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12.414 18.01l-1.415-1.413l4.6-4.6l-4.6-4.6l1.415-1.407l6.01 6.01l-6.009 6.01h-.001Zm-5.425 0l-1.414-1.413l4.6-4.6l-4.6-4.593L6.989 5.99L13 12l-6.01 6.01h-.001Z"></svg:path>`,
})
export class CiChevronDuoRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciChevronDuoUpIcon],svg[ci-chevron-duo-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.403 18.425L5.99 17.01L12 10.999l6.01 6.011l-1.413 1.413l-4.6-4.6l-4.6 4.6l.006.002Zm0-5.424L5.99 11.585L12 5.575l6.01 6.01l-1.413 1.414l-4.6-4.6l-4.6 4.6l.006.002Z"></svg:path>`,
})
export class CiChevronDuoUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciChevronLeftIcon],svg[ci-chevron-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m15 19l-7-7l7-7"></svg:path>`,
})
export class CiChevronLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciChevronLeftDuoIcon],svg[ci-chevron-left-duo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m17 16l-4-4l4-4m-6 8l-4-4l4-4"></svg:path>`,
})
export class CiChevronLeftDuoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciChevronLeftMdIcon],svg[ci-chevron-left-md-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m14 16l-4-4l4-4"></svg:path>`,
})
export class CiChevronLeftMdIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciChevronRightIcon],svg[ci-chevron-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 5l7 7l-7 7"></svg:path>`,
})
export class CiChevronRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciChevronRightDuoIcon],svg[ci-chevron-right-duo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m13 8l4 4l-4 4M7 8l4 4l-4 4"></svg:path>`,
})
export class CiChevronRightDuoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciChevronRightMdIcon],svg[ci-chevron-right-md-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m10 8l4 4l-4 4"></svg:path>`,
})
export class CiChevronRightMdIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciChevronUpIcon],svg[ci-chevron-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m5 16l7-7l7 7"></svg:path>`,
})
export class CiChevronUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciChevronUpDuoIcon],svg[ci-chevron-up-duo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m8 17l4-4l4 4m-8-6l4-4l4 4"></svg:path>`,
})
export class CiChevronUpDuoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciChromecastIcon],svg[ci-chromecast-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8.25V8.2c0-1.12 0-1.68.218-2.108c.192-.377.497-.682.874-.874C4.52 5 5.08 5 6.2 5h11.6c1.12 0 1.68 0 2.107.218c.377.192.683.497.875.874c.218.427.218.987.218 2.105v7.606c0 1.118 0 1.677-.218 2.104a2 2 0 0 1-.874.875C19.48 19 18.92 19 17.803 19H14m-9 0a2 2 0 0 0-2-2m5 2a5 5 0 0 0-5-5m8 5a8 8 0 0 0-8-8"></svg:path>`,
})
export class CiChromecastIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciCircleIcon],svg[ci-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0-18 0"></svg:path>`,
})
export class CiCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciCircleCheckIcon],svg[ci-circle-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m15 10l-4 4l-2-2m3 9a9 9 0 1 1 0-18a9 9 0 0 1 0 18"></svg:path>`,
})
export class CiCircleCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciCircleCheckOutlineIcon],svg[ci-circle-check-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10c-.006 5.52-4.48 9.994-10 10Zm-.016-2H12a8 8 0 1 0-.016 0ZM10 17l-4-4l1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8Z"></svg:path>`,
})
export class CiCircleCheckOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciCircleChevronDownIcon],svg[ci-circle-chevron-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10c-.006 5.52-4.48 9.994-10 10Zm0-18a8 8 0 1 0 8 8a8.009 8.009 0 0 0-8-8Zm-.05 11.5L7 10.55l1.414-1.414l3.536 3.535l3.536-3.535L16.9 10.55l-4.95 4.95Z"></svg:path>`,
})
export class CiCircleChevronDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciCircleChevronLeftIcon],svg[ci-circle-chevron-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10c-.006 5.52-4.48 9.994-10 10Zm0-18a8 8 0 1 0 8 8.18v1.783V12a8.009 8.009 0 0 0-8-8Zm1.45 12.9L8.5 11.95L13.45 7l1.414 1.414l-3.536 3.536l3.535 3.536l-1.412 1.414h-.001Z"></svg:path>`,
})
export class CiCircleChevronLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciCircleChevronRightIcon],svg[ci-circle-chevron-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22c-5.52-.006-9.994-4.48-10-10v-.2C2.11 6.305 6.635 1.928 12.13 2c5.497.074 9.904 4.569 9.868 10.065C21.962 17.562 17.497 22 12 22Zm0-18a8 8 0 1 0 8 8a8.009 8.009 0 0 0-8-8Zm-1.45 13l-1.414-1.415l3.535-3.535l-3.535-3.535L10.55 7.1l4.95 4.95L10.551 17h-.001Z"></svg:path>`,
})
export class CiCircleChevronRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciCircleChevronUpIcon],svg[ci-circle-chevron-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10c-.006 5.52-4.48 9.994-10 10Zm-.016-2H12a8 8 0 1 0-.016 0Zm-3.47-5.136L7.1 13.45l4.95-4.95L17 13.45l-1.414 1.413l-3.536-3.535l-3.535 3.536h-.001Z"></svg:path>`,
})
export class CiCircleChevronUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciCircleDownIcon],svg[ci-circle-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10c-.006 5.52-4.48 9.994-10 10Zm0-18a8 8 0 1 0 8 8a8.009 8.009 0 0 0-8-8Zm0 13l-5-5l1.41-1.41L11 13.17V7h2v6.17l2.59-2.58L17 12l-5 5Z"></svg:path>`,
})
export class CiCircleDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciCircleHelpIcon],svg[ci-circle-help-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.146 9.074a2.998 2.998 0 0 1 5.28-.838A3 3 0 0 1 12 13v1m0 7a9 9 0 1 1 0-18a9 9 0 0 1 0 18m.05-4v.1h-.1V17z"></svg:path>`,
})
export class CiCircleHelpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciCircleLeftIcon],svg[ci-circle-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10c-.006 5.52-4.48 9.994-10 10Zm0-18a8 8 0 1 0 8 8.18v1.783V12a8.009 8.009 0 0 0-8-8Zm0 13l-5-5l5-5l1.41 1.41L10.83 11H17v2h-6.17l2.58 2.59L12 17Z"></svg:path>`,
})
export class CiCircleLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciCircleRightIcon],svg[ci-circle-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22c-5.52-.006-9.994-4.48-10-10v-.2C2.11 6.305 6.635 1.928 12.13 2c5.497.074 9.904 4.569 9.868 10.065C21.962 17.562 17.497 22 12 22Zm0-18a8 8 0 1 0 8 8a8.009 8.009 0 0 0-8-8Zm0 13l-1.41-1.41L13.17 13H7v-2h6.17l-2.58-2.59L12 7l5 5l-5 5Z"></svg:path>`,
})
export class CiCircleRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciCircleUpIcon],svg[ci-circle-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10c-.006 5.52-4.48 9.994-10 10Zm-.016-2H12a8 8 0 1 0-.016 0ZM13 17h-2v-6.17l-2.59 2.58L7 12l5-5l5 5l-1.41 1.41L13 10.83V17Z"></svg:path>`,
})
export class CiCircleUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciCircleWarningIcon],svg[ci-circle-warning-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8.45v4M12 21a9 9 0 1 1 0-18a9 9 0 0 1 0 18m.05-5.55v.1h-.1v-.1z"></svg:path>`,
})
export class CiCircleWarningIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciClockIcon],svg[ci-clock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 7v5h5m-5 9a9 9 0 1 1 0-18a9 9 0 0 1 0 18"></svg:path>`,
})
export class CiClockIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciCloseBigIcon],svg[ci-close-big-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41L17.59 5Z"></svg:path>`,
})
export class CiCloseBigIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciCloseCircleIcon],svg[ci-close-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 9l3 3m0 0l3 3m-3-3l-3 3m3-3l3-3m-3 12a9 9 0 1 1 0-18a9 9 0 0 1 0 18"></svg:path>`,
})
export class CiCloseCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciCloseLgIcon],svg[ci-close-lg-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m21 21l-9-9m0 0L3 3m9 9l9-9m-9 9l-9 9"></svg:path>`,
})
export class CiCloseLgIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciCloseMdIcon],svg[ci-close-md-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m18 18l-6-6m0 0L6 6m6 6l6-6m-6 6l-6 6"></svg:path>`,
})
export class CiCloseMdIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciCloseSmIcon],svg[ci-close-sm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m16 16l-4-4m0 0L8 8m4 4l4-4m-4 4l-4 4"></svg:path>`,
})
export class CiCloseSmIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciCloseSmallIcon],svg[ci-close-small-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.59 7L12 10.59L8.41 7L7 8.41L10.59 12L7 15.59L8.41 17L12 13.41L15.59 17L17 15.59L13.41 12L17 8.41L15.59 7Z"></svg:path>`,
})
export class CiCloseSmallIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciCloseSquareIcon],svg[ci-close-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 9l3 3m0 0l3 3m-3-3l-3 3m3-3l3-3M4 16.8V7.2c0-1.12 0-1.68.218-2.108c.192-.377.497-.682.874-.874C5.52 4 6.08 4 7.2 4h9.6c1.12 0 1.68 0 2.108.218a2 2 0 0 1 .874.874C20 5.52 20 6.08 20 7.2v9.6c0 1.12 0 1.68-.218 2.108a2 2 0 0 1-.874.874c-.428.218-.986.218-2.104.218H7.197c-1.118 0-1.678 0-2.105-.218a2 2 0 0 1-.874-.874C4 18.48 4 17.92 4 16.8"></svg:path>`,
})
export class CiCloseSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciCloudIcon],svg[ci-cloud-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11a4 4 0 0 1 0 8H6a5 5 0 0 1-.331-9.99A7.002 7.002 0 0 1 18.929 11z"></svg:path>`,
})
export class CiCloudIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciCloudAddIcon],svg[ci-cloud-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 16v-3m0 0v-3m0 3H9m3 0h3m8 2a4 4 0 0 0-4.07-4A7.002 7.002 0 0 0 5.669 9.01A5 5 0 0 0 6 19h13a4 4 0 0 0 4-4"></svg:path>`,
})
export class CiCloudAddIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciCloudCheckIcon],svg[ci-cloud-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m15 11l-4 4l-2-2m14 2a4 4 0 0 0-4.07-4A7.002 7.002 0 0 0 5.669 9.01A5 5 0 0 0 6 19h13a4 4 0 0 0 4-4"></svg:path>`,
})
export class CiCloudCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciCloudCloseIcon],svg[ci-cloud-close-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m10 15l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m9 0a4 4 0 0 0-4.07-4A7.002 7.002 0 0 0 5.669 9.01A5 5 0 0 0 6 19h13a4 4 0 0 0 4-4"></svg:path>`,
})
export class CiCloudCloseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciCloudDownIcon],svg[ci-cloud-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#ciCloudDown0)"><svg:path fill="currentColor" d="M19 20H6a6 6 0 0 1-.974-11.921A8.018 8.018 0 0 1 12 3.999a7.916 7.916 0 0 1 4.962 1.725a8.041 8.041 0 0 1 2.8 4.334A5 5 0 0 1 19 20ZM12 6a6.014 6.014 0 0 0-5.232 3.061L6.3 9.9l-.95.155A4 4 0 0 0 6 18h13a3 3 0 0 0 .46-5.965l-1.316-.2l-.322-1.292A5.988 5.988 0 0 0 12 6Zm0 10l-4-4h2.55V9h2.9v3H16l-4 4Z"></svg:path></svg:g><svg:defs><svg:clippath id="ciCloudDown0"><svg:path fill="#fff" d="M0 0h24v24H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class CiCloudDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciCloudDownloadIcon],svg[ci-cloud-download-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v6m0 0l3-2m-3 2l-3-2m14 2a4 4 0 0 0-4.07-4A7.002 7.002 0 0 0 5.669 9.01A5 5 0 0 0 6 19h13a4 4 0 0 0 4-4"></svg:path>`,
})
export class CiCloudDownloadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciCloudOffIcon],svg[ci-cloud-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 19H6a5 5 0 0 1-.332-9.99a7 7 0 0 1 1.333-1.909M19 19L5 5m14 14l2 2M10 5.29A7.002 7.002 0 0 1 18.93 11H19a3.999 3.999 0 0 1 3.122 6.5"></svg:path>`,
})
export class CiCloudOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciCloudOutlineIcon],svg[ci-cloud-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#ciCloudOutline0)"><svg:path fill="currentColor" d="M19 20H6a6 6 0 0 1-.974-11.921A8.018 8.018 0 0 1 12 3.999a7.916 7.916 0 0 1 4.96 1.725a8.041 8.041 0 0 1 2.8 4.333A5 5 0 0 1 19 20ZM12 6a6.014 6.014 0 0 0-5.232 3.061L6.3 9.9l-.95.155A4 4 0 0 0 6 18h13a3 3 0 0 0 .46-5.965l-1.316-.2l-.322-1.292A5.988 5.988 0 0 0 12 6Z"></svg:path></svg:g><svg:defs><svg:clippath id="ciCloudOutline0"><svg:path fill="#fff" d="M0 0h24v24H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class CiCloudOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciCloudRemoveIcon],svg[ci-cloud-remove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 13h6m8 2a4 4 0 0 0-4.07-4A7.002 7.002 0 0 0 5.669 9.01A5 5 0 0 0 6 19h13a4 4 0 0 0 4-4"></svg:path>`,
})
export class CiCloudRemoveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciCloudUpIcon],svg[ci-cloud-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#ciCloudUp0)"><svg:path fill="currentColor" d="M19 20H6a6 6 0 0 1-.974-11.921A8.018 8.018 0 0 1 12 3.999a7.916 7.916 0 0 1 4.962 1.725a8.041 8.041 0 0 1 2.8 4.334A5 5 0 0 1 19 20ZM12 6a6.014 6.014 0 0 0-5.232 3.061L6.3 9.9l-.95.155A4 4 0 0 0 6 18h13a3 3 0 0 0 .46-5.965l-1.316-.2l-.322-1.292A5.988 5.988 0 0 0 12 6Zm1.45 10h-2.9v-3H8l4-4l4 4h-2.55v3Z"></svg:path></svg:g><svg:defs><svg:clippath id="ciCloudUp0"><svg:path fill="#fff" d="M0 0h24v24H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class CiCloudUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciCloudUploadIcon],svg[ci-cloud-upload-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 16v-6m0 0l-3 2m3-2l3 2m8 3a4 4 0 0 0-4.07-4A7.002 7.002 0 0 0 5.669 9.01A5 5 0 0 0 6 19h13a4 4 0 0 0 4-4"></svg:path>`,
})
export class CiCloudUploadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciCodeIcon],svg[ci-code-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m15 7l5 5l-5 5m-6 0l-5-5l5-5"></svg:path>`,
})
export class CiCodeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciCoffeToGoIcon],svg[ci-coffe-to-go-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6.686 15h10.629m-10.8-2h10.971M7.743 7h8.514M7.743 7c-.605 0-.907 0-1.13.12a1 1 0 0 0-.44.48c-.101.233-.076.534-.024 1.136l.8 9.337c.089 1.032.133 1.55.362 1.94a2 2 0 0 0 .863.792c.41.195.927.195 1.964.195h3.725c1.036 0 1.554 0 1.963-.195a2 2 0 0 0 .863-.792c.23-.39.274-.907.362-1.94l.8-9.338c.052-.602.078-.902-.023-1.134a1 1 0 0 0-.44-.48C17.165 7 16.862 7 16.258 7M7.742 7H6.75c-.9 0-1.35 0-1.611-.188a1 1 0 0 1-.41-.707c-.034-.32.19-.712.637-1.494V4.61c.334-.585.501-.877.736-1.09a2 2 0 0 1 .727-.422C7.129 3 7.467 3 8.14 3h7.72c.674 0 1.01 0 1.312.098c.27.087.517.231.726.422c.235.213.402.505.736 1.09c.447.782.671 1.174.637 1.495a1 1 0 0 1-.41.707C18.602 7 18.15 7 17.252 7h-.994"></svg:path>`,
})
export class CiCoffeToGoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciCoffeeIcon],svg[ci-coffee-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 20h6.943m0 0h.114m-.114 0h.114m-.114 0A7 7 0 0 1 4 13V8.923c0-.51.413-.923.923-.923h12.154c.51 0 .923.413.923.923V9m-6.943 11H18m-6.943 0A7 7 0 0 0 18 13m0-4h1.5a2.5 2.5 0 0 1 0 5H18v-1m0-4v4M15 3l-1 2m-2-2l-1 2M9 3L8 5"></svg:path>`,
})
export class CiCoffeeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciCoffeeTogoIcon],svg[ci-coffee-togo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.13 3.008A2 2 0 0 1 6.866 2h10.268a2 2 0 0 1 1.736 1.008l1.143 2c.648 1.134.049 2.503-1.09 2.887c.005.082.004.164-.002.247l-.857 12A2 2 0 0 1 16.069 22H7.93a2 2 0 0 1-1.995-1.858l-.857-12a2.023 2.023 0 0 1-.003-.247c-1.138-.384-1.737-1.753-1.09-2.887l1.144-2ZM7.074 8l.214 3h9.424l.214-3H7.074Zm.643 9l.214 3h8.138l.214-3H7.717Zm10.56-11l-1.143-2H6.866L5.723 6h12.554Z"></svg:path>`,
})
export class CiCoffeeTogoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciColorIcon],svg[ci-color-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.75 22H4.917a2.086 2.086 0 0 1-2.084-2.084v-9.7a1.977 1.977 0 0 1-.592-2.558c.9-1.608 1.818-3.193 2.721-4.712A1.976 1.976 0 0 1 6.666 2c.424.004.836.139 1.18.385l.024.015c.412.24 4.392 2.609 7.591 4.512l2.84 1.688l.13.077a372.255 372.255 0 0 1 2.744 1.628a1.963 1.963 0 0 1 .583 2.553c-.883 1.577-1.8 3.162-2.72 4.712a1.983 1.983 0 0 1-1.68.951c-.136 0-.27-.015-.4-.045c-.117.069-.757.48-1.568 1c-1.443.925-3.415 2.19-3.643 2.307a1.976 1.976 0 0 1-.997.217ZM4.5 13.03v6.886c0 .23.187.417.417.417H8.74A485.729 485.729 0 0 1 4.5 13.03Zm1.358-1c.4.687 4.716 8.132 4.752 8.182a.3.3 0 0 0 .38.082c.134-.076 4.193-2.684 4.233-2.71c-.314-.185-2.586-1.539-4.992-2.972L5.838 12l.007.011l.01.017v.006l.003-.004Zm.474-8.13c-.808 1.3-2.616 4.528-2.64 4.587a.312.312 0 0 0 .124.386c.133.079 13.354 7.956 13.48 7.976a.32.32 0 0 0 .048 0a.31.31 0 0 0 .266-.149a414.198 414.198 0 0 0 2.694-4.667a.316.316 0 0 0-.125-.387c-.127-.076-13.323-7.918-13.408-7.955a.314.314 0 0 0-.383.117l-.007.012l-.008.012l-.012.02v.005l-.015.024l-.015.019h.001Zm1.353 5.49a1.666 1.666 0 1 1 1.667-1.67a1.669 1.669 0 0 1-1.667 1.667v.003Z"></svg:path>`,
})
export class CiColorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciColumnsIcon],svg[ci-columns-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 6.5v11c0 .465 0 .697.038.89a2 2 0 0 0 1.572 1.571c.193.039.425.039.89.039s.697 0 .89-.039a2 2 0 0 0 1.571-1.57c.039-.194.039-.426.039-.891v-11c0-.465 0-.697-.039-.89a2 2 0 0 0-1.57-1.572C17.196 4 16.964 4 16.5 4s-.697 0-.89.038a2 2 0 0 0-1.572 1.572C14 5.803 14 6.035 14 6.5m-9 0v11c0 .465 0 .697.038.89a2 2 0 0 0 1.572 1.571c.193.039.425.039.89.039s.697 0 .89-.039a2 2 0 0 0 1.571-1.57c.039-.194.039-.426.039-.891v-11c0-.465 0-.697-.039-.89a2 2 0 0 0-1.57-1.572C8.196 4 7.964 4 7.5 4s-.697 0-.89.038A2 2 0 0 0 5.038 5.61C5 5.803 5 6.035 5 6.5"></svg:path>`,
})
export class CiColumnsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciCombineCellsIcon],svg[ci-combine-cells-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 16v1m0-6v2m0-6v1m-8 8.8V7.2c0-1.12 0-1.68.218-2.108c.192-.377.497-.682.874-.874C5.52 4 6.08 4 7.2 4h9.6c1.12 0 1.68 0 2.108.218a2 2 0 0 1 .874.874c.218.427.218.987.218 2.105v9.607c0 1.118 0 1.677-.218 2.104a2 2 0 0 1-.874.874c-.428.218-.986.218-2.104.218H7.197c-1.118 0-1.678 0-2.105-.218a2 2 0 0 1-.874-.874C4 18.48 4 17.92 4 16.8"></svg:path>`,
})
export class CiCombineCellsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciCommandIcon],svg[ci-command-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 15v3a3 3 0 1 1-3-3zm0 0h6m-6 0V9m6 6v3a3 3 0 1 0 3-3zm0 0V9m0 0H9m6 0V6a3 3 0 1 1 3 3zM9 9V6a3 3 0 1 0-3 3z"></svg:path>`,
})
export class CiCommandIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciCompassIcon],svg[ci-compass-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0-18 0"></svg:path><svg:path d="M10.5 10.5L16 8l-2.5 5.5L8 16z"></svg:path></svg:g>`,
})
export class CiCompassIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciConfusedIcon],svg[ci-confused-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10c-.006 5.52-4.48 9.994-10 10Zm0-18a8 8 0 1 0 8 8a8.009 8.009 0 0 0-8-8Zm4 13H8v-2h8v2Zm-7.5-5a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3Zm6.993-.014a1.493 1.493 0 1 1 0-2.986a1.493 1.493 0 0 1 0 2.986Z"></svg:path>`,
})
export class CiConfusedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciCookieIcon],svg[ci-cookie-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M12.152 4.087c0-.367-.052-.733-.152-1.087c4.968.005 8.994 4.04 9 9c.016 4.962-4.03 8.984-9 9s-8.984-4.037-9-9c1.112.236 2.27-.002 3.15-.72a3.83 3.83 0 0 0 1.42-3.006a4.5 4.5 0 0 0-.07-.781a3.28 3.28 0 0 0 3.07-.351a3.69 3.69 0 0 0 1.582-3.055m-9.15 2.915V7H3v.002zm5-4V3H8v.002zm-4 0V3H4v.002z"></svg:path><svg:path d="M10.002 17.002V17H10v.002zm5-2V15H15v.002zm-4-3V12H11v.002zm5-2V10H16v.002zm-13-3V7H3v.002zm5-4V3H8v.002zm-4 0V3H4v.002z"></svg:path></svg:g>`,
})
export class CiCookieIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciCooliconsIcon],svg[ci-coolicons-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.286 17.714A5.72 5.72 0 0 1 12 15.78a5.714 5.714 0 1 1-1.7-8.875a7.812 7.812 0 0 0-1.427 2.481a2.857 2.857 0 1 0 1.7 2.612a5.714 5.714 0 1 1 5.714 5.714v.002ZM13.43 12.1a2.857 2.857 0 1 0 0-.1v.1Z"></svg:path>`,
})
export class CiCooliconsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciCopyIcon],svg[ci-copy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 9V6.2c0-1.12 0-1.68.218-2.108c.192-.377.497-.682.874-.874C10.52 3 11.08 3 12.2 3h5.6c1.12 0 1.68 0 2.108.218a2 2 0 0 1 .874.874C21 4.52 21 5.08 21 6.2v5.6c0 1.12 0 1.68-.218 2.108a2 2 0 0 1-.874.874C19.48 15 18.92 15 17.803 15H15M9 9H6.2c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C3 10.52 3 11.08 3 12.2v5.6c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874c.427.218.987.218 2.105.218h5.607c1.117 0 1.676 0 2.104-.218a2 2 0 0 0 .874-.874c.218-.428.218-.987.218-2.105V15M9 9h2.8c1.12 0 1.68 0 2.108.218a2 2 0 0 1 .874.874c.218.427.218.987.218 2.105V15"></svg:path>`,
})
export class CiCopyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciCreditCardIcon],svg[ci-credit-card-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 20H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2ZM4 12v6h16v-6H4Zm0-6v2h16V6H4Zm9 10H6v-2h7v2Z"></svg:path>`,
})
export class CiCreditCardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciCreditCard01Icon],svg[ci-credit-card-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 11v4.8c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874c.427.218.987.218 2.105.218h11.606c1.118 0 1.677 0 2.104-.218c.377-.192.683-.498.875-.874c.218-.428.218-.986.218-2.104V11M3 11V9m0 2h18M3 9v-.8c0-1.12 0-1.68.218-2.108c.192-.377.497-.682.874-.874C4.52 5 5.08 5 6.2 5h11.6c1.12 0 1.68 0 2.107.218c.377.192.683.497.875.874c.218.427.218.987.218 2.105V9M3 9h18M7 15h4m10-4V9"></svg:path>`,
})
export class CiCreditCard01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciCreditCard02Icon],svg[ci-credit-card-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.5 15a1.5 1.5 0 0 1 0-3M3 15.8V8.2c0-1.12 0-1.68.218-2.108c.192-.377.497-.682.874-.874C4.52 5 5.08 5 6.2 5h11.6c1.12 0 1.68 0 2.107.218c.377.192.683.497.875.874c.218.427.218.987.218 2.105v7.607c0 1.118 0 1.676-.218 2.104a2 2 0 0 1-.875.874c-.427.218-.986.218-2.104.218H6.197c-1.118 0-1.678 0-2.105-.218a2 2 0 0 1-.874-.874C3 17.48 3 16.92 3 15.8m14-2.3a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0"></svg:path>`,
})
export class CiCreditCard02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciCreditCardAltIcon],svg[ci-credit-card-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 20H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2ZM4 6v12h16V6H4Zm11.5 10a2.5 2.5 0 1 1 0-5a2.5 2.5 0 0 1 0 5Zm-4 0a2.5 2.5 0 0 1 0-5c.543 0 1.07.18 1.5.512a2.476 2.476 0 0 0 0 3.975a2.46 2.46 0 0 1-1.5.513Z"></svg:path>`,
})
export class CiCreditCardAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciCropIcon],svg[ci-crop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 21v-3m0 0H9.197c-1.118 0-1.678 0-2.105-.218a2 2 0 0 1-.874-.874C6 16.48 6 15.92 6 14.8V6m12 12h3M6 6H3m3 0V3m4 3h4.8c1.12 0 1.68 0 2.108.218a2 2 0 0 1 .874.874c.218.427.218.987.218 2.105V14"></svg:path>`,
})
export class CiCropIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciCss3Icon],svg[ci-css3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11.983 20.989l-6.37-1.813l-1.42-16.033h15.615l-1.42 16.034l-6.4 1.812h-.004Zm-4.261-7.637l.216 2.867L12 17.483l3.99-1.14l.906-9.923h-9.8l.158 1.949h7.529l-.186 2.024H9.66l.178 1.912h4.6l-.272 2.62l-2.164.6l-2.2-.6l-.14-1.57h-1.94v-.003Z"></svg:path>`,
})
export class CiCss3Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciCupcakeIcon],svg[ci-cupcake-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 14l-.804 5.626c-.07.487-.104.731-.222.915a1 1 0 0 1-.426.369c-.197.09-.443.09-.933.09H14m5-7h-5m5 0c1.303-.604 2-2.236 2-3.666c0-1.536-1.03-2.85-2.49-3.397a.79.79 0 0 1-.51-.729c0-1.265-1.12-2.291-2.5-2.291q-.34 0-.654.079c-.432.107-.915.083-1.287-.145A5.83 5.83 0 0 0 10.5 3C7.462 3 5 5.257 5 8.042c0 .352-.23.674-.557.857C3.578 9.38 3 10.254 3 11.25c0 1.277.712 2.44 2 2.75m0 0l.804 5.626v.002c.07.486.104.73.222.913a1 1 0 0 0 .426.369c.197.09.443.09.933.09H10m-5-7h5m0 0h4m-4 0v7m4-7v7m0 0h-4"></svg:path>`,
})
export class CiCupcakeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciCylinderIcon],svg[ci-cylinder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 7v10c0 1.657-2.686 3-6 3s-6-1.343-6-3V7m12 0c0-1.657-2.686-3-6-3S6 5.343 6 7m12 0c0 1.657-2.686 3-6 3S6 8.657 6 7"></svg:path>`,
})
export class CiCylinderIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciDashboardIcon],svg[ci-dashboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 21h-8v-6h8v6Zm-10 0H3V11h8v10Zm10-8h-8V3h8v10ZM11 9H3V3h8v6Z"></svg:path>`,
})
export class CiDashboardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciDashboard02Icon],svg[ci-dashboard-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 20H11v-7h11v7ZM9 20H2v-7h7v7Zm13-9H2V4h20v7Z"></svg:path>`,
})
export class CiDashboard02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciDataIcon],svg[ci-data-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 12v5c0 1.657-2.686 3-6 3s-6-1.343-6-3v-5m12 0V7m0 5c0 1.657-2.686 3-6 3s-6-1.343-6-3m12-5c0-1.657-2.686-3-6-3S6 5.343 6 7m12 0c0 1.657-2.686 3-6 3S6 8.657 6 7m0 5V7"></svg:path>`,
})
export class CiDataIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciDeleteColumnIcon],svg[ci-delete-column-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 21H9a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v6m6 5h-6"></svg:path>`,
})
export class CiDeleteColumnIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciDeleteRowIcon],svg[ci-delete-row-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 16h6m1-6V9a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h6"></svg:path>`,
})
export class CiDeleteRowIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciDesktopIcon],svg[ci-desktop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 20H9m-1.803-3c-1.118 0-1.678 0-2.105-.218a2 2 0 0 1-.874-.875c-.121-.237-.175-.515-.199-.907m3.178 2h9.606m-9.606 0H5.6c-.56 0-.84 0-1.054-.11a1 1 0 0 1-.437-.435C4 16.24 4 15.96 4 15.4V15h.02m0 0C4 14.686 4 14.299 4 13.8V7.2c0-1.12 0-1.68.218-2.108c.192-.377.497-.682.874-.874C5.52 4 6.08 4 7.2 4h9.6c1.12 0 1.68 0 2.107.218c.377.192.683.497.875.874c.218.427.218.987.218 2.105v6.606c0 .497 0 .883-.02 1.197M4.02 15h15.96m0 0c-.023.392-.077.67-.198.907a2 2 0 0 1-.875.875c-.427.218-.986.218-2.104.218m3.178-2H20v.4c0 .56 0 .84-.11 1.055a1 1 0 0 1-.436.436C19.24 17 18.96 17 18.4 17h-1.597"></svg:path>`,
})
export class CiDesktopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciDesktopTowerIcon],svg[ci-desktop-tower-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20H7m11-3h-2m-3-8H6.2c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C3 10.52 3 11.08 3 12.2v1.6c0 1.12 0 1.68.218 2.107c.192.377.497.683.874.875c.427.218.987.218 2.105.218H13m0-8v8m0-8V7.2c0-1.12 0-1.68.218-2.108a2 2 0 0 1 .874-.874C14.52 4 15.08 4 16.2 4h1.6c1.12 0 1.68 0 2.107.218c.377.192.683.497.875.874c.218.427.218.987.218 2.105v9.606c0 1.118 0 1.677-.218 2.104a2 2 0 0 1-.875.875c-.427.218-.986.218-2.104.218h-1.606c-1.118 0-1.678 0-2.105-.218a2 2 0 0 1-.874-.875c-.205-.401-.217-.919-.218-1.907m4.002-10v.002H17V7z"></svg:path>`,
})
export class CiDesktopTowerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciDevicesIcon],svg[ci-devices-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 7.5v-.3c0-1.12 0-1.68.218-2.108c.192-.377.497-.682.874-.874C7.52 4 8.08 4 9.2 4h8.6c1.12 0 1.68 0 2.107.218c.377.192.683.497.875.874c.218.427.218.987.218 2.105v6.606c0 1.118 0 1.677-.218 2.104a2 2 0 0 1-.874.875C19.48 17 18.92 17 17.803 17H10.5M3 16.8v-5.6c0-1.12 0-1.68.218-2.108c.192-.377.497-.682.874-.874C4.52 8 5.08 8 6.2 8h.6c1.12 0 1.68 0 2.107.218c.377.192.683.497.875.874c.218.427.218.987.218 2.105v5.606c0 1.118 0 1.677-.218 2.104a2 2 0 0 1-.875.875C8.48 20 7.921 20 6.803 20h-.606c-1.118 0-1.678 0-2.105-.218a2 2 0 0 1-.874-.875C3 18.48 3 17.92 3 16.8"></svg:path>`,
})
export class CiDevicesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciDiscordIcon],svg[ci-discord-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19.625 22l-2.042-1.8l-1.151-1.07L15.215 18l.5 1.759H4.947A1.954 1.954 0 0 1 3 17.8V4.957A1.954 1.954 0 0 1 4.947 3h12.731a1.954 1.954 0 0 1 1.947 1.957V22ZM15.1 13.508a3.007 3.007 0 0 1-1.715 1.128c.282.36.622.767.625.771a3.5 3.5 0 0 0 2.907-1.444a12.826 12.826 0 0 0-1.368-5.538a4.721 4.721 0 0 0-2.658-1h-.011l-.133.152a6.4 6.4 0 0 1 2.366 1.206a7.788 7.788 0 0 0-2.86-.912a7.977 7.977 0 0 0-1.918.019a.8.8 0 0 0-.134.014h-.028a7.166 7.166 0 0 0-2.156.6c-.342.157-.552.271-.561.275c-.009.004 0 0 0-.007c.738-.58 1.59-1 2.499-1.231l-.1-.114h-.006a4.723 4.723 0 0 0-2.658 1a12.729 12.729 0 0 0-1.368 5.538a3.44 3.44 0 0 0 2.9 1.444s.358-.436.637-.789a2.966 2.966 0 0 1-1.667-1.12c.007.005.106.072.266.16c.01.013.024.023.039.03a.27.27 0 0 0 .04.023a5.366 5.366 0 0 0 .738.346c.453.18.922.317 1.4.41c.419.079.844.12 1.27.12c.4 0 .798-.037 1.191-.11a6.3 6.3 0 0 0 1.377-.408a5.516 5.516 0 0 0 1.086-.563Zm-2.038-.427a1.06 1.06 0 1 1 .967-1.055c.022.558-.41 1.03-.968 1.055h.001Zm-3.468 0a1.059 1.059 0 0 1 0-2.11a.93.93 0 0 1 .668.285c.199.206.307.483.3.769a1.015 1.015 0 0 1-.969 1.056h.001Z"></svg:path>`,
})
export class CiDiscordIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciDot01XsIcon],svg[ci-dot-01-xs-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 14a2 2 0 1 1 0-4a2 2 0 0 1 0 4Z"></svg:path>`,
})
export class CiDot01XsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciDot02SIcon],svg[ci-dot-02-s-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 15a3 3 0 1 1 0-6a3 3 0 0 1 0 6Z"></svg:path>`,
})
export class CiDot02SIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciDot03MIcon],svg[ci-dot-03-m-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 16a4 4 0 1 1 0-8a4 4 0 0 1 0 8Z"></svg:path>`,
})
export class CiDot03MIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciDot04LIcon],svg[ci-dot-04-l-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 17a5 5 0 1 1 0-10a5 5 0 0 1 0 10Z"></svg:path>`,
})
export class CiDot04LIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciDot05XlIcon],svg[ci-dot-05-xl-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 18a6 6 0 1 1 0-12a6 6 0 0 1 0 12Z"></svg:path>`,
})
export class CiDot05XlIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciDoubleQuotesLIcon],svg[ci-double-quotes-l-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 12v3.4c0 .56 0 .84.109 1.054a1 1 0 0 0 .437.437c.214.109.494.109 1.053.109H17.4c.56 0 .839 0 1.053-.109c.188-.096.341-.25.437-.437c.11-.214.11-.494.11-1.054v-1.803c0-.559 0-.838-.109-1.052a1 1 0 0 0-.437-.437C18.24 12 17.96 12 17.4 12zm0 0v-2a3 3 0 0 1 3-3M5 12v3.4c0 .56 0 .84.109 1.054a1 1 0 0 0 .437.437C5.76 17 6.04 17 6.598 17h1.804c.559 0 .838 0 1.052-.109c.188-.096.341-.25.437-.437C10 16.24 10 15.96 10 15.4v-1.803c0-.559 0-.838-.109-1.052a1 1 0 0 0-.437-.437C9.24 12 8.96 12 8.4 12zm0 0v-2a3 3 0 0 1 3-3"></svg:path>`,
})
export class CiDoubleQuotesLIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciDoubleQuotesRIcon],svg[ci-double-quotes-r-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 17a3 3 0 0 0 3-3v-2m0 0V8.598c0-.558 0-.838-.109-1.052a1 1 0 0 0-.437-.437C18.24 7 17.96 7 17.4 7h-1.8c-.56 0-.84 0-1.054.109a1 1 0 0 0-.437.437C14 7.76 14 8.04 14 8.6v1.8c0 .56 0 .84.109 1.054a1 1 0 0 0 .437.437c.214.109.494.109 1.053.109zM7 17a3 3 0 0 0 3-3v-2m0 0V8.598c0-.559 0-.838-.109-1.052a1 1 0 0 0-.437-.437C9.24 7 8.96 7 8.4 7H6.6c-.56 0-.84 0-1.054.109a1 1 0 0 0-.437.437C5 7.76 5 8.04 5 8.6v1.8c0 .56 0 .84.109 1.054a1 1 0 0 0 .437.437C5.76 12 6.04 12 6.598 12z"></svg:path>`,
})
export class CiDoubleQuotesRIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciDoughnutChartIcon],svg[ci-doughnut-chart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.051 21.949a10 10 0 0 1-1-19.949v4.04a5.994 5.994 0 1 0 6.91 6.909H22a10.015 10.015 0 0 1-9.95 9Zm9.95-11h-4.04a5.993 5.993 0 0 0-4.91-4.909V2a10.022 10.022 0 0 1 8.95 8.948v.001Z"></svg:path>`,
})
export class CiDoughnutChartIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciDownloadIcon],svg[ci-download-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 21h12M12 3v14m0 0l5-5m-5 5l-5-5"></svg:path>`,
})
export class CiDownloadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciDownloadDoneIcon],svg[ci-download-done-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 19H5v-2h14v2Zm-9-4.58l-4-4l1.41-1.41L10 11.59L16.59 5L18 6.42l-8 8Z"></svg:path>`,
})
export class CiDownloadDoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciDownloadPackageIcon],svg[ci-download-package-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8v8.8c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874c.427.218.987.218 2.105.218h9.606c1.118 0 1.677 0 2.104-.218c.377-.192.683-.498.875-.874c.218-.428.218-.987.218-2.105V8M4 8h16M4 8l1.365-2.39c.335-.585.503-.878.738-1.092c.209-.189.456-.332.723-.42C7.13 4 7.466 4 8.143 4h7.714c.676 0 1.015 0 1.318.099c.267.087.513.23.721.42c.236.213.404.506.74 1.093L20 8m-8 3v6m0 0l3-2m-3 2l-3-2"></svg:path>`,
})
export class CiDownloadPackageIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciDragHorizontalIcon],svg[ci-drag-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 14a1 1 0 1 0 0 2a1 1 0 0 0 0-2m-6 0a1 1 0 1 0 0 2a1 1 0 0 0 0-2m-6 0a1 1 0 1 0 0 2a1 1 0 0 0 0-2m12-6a1 1 0 1 0 0 2a1 1 0 0 0 0-2m-6 0a1 1 0 1 0 0 2a1 1 0 0 0 0-2M6 8a1 1 0 1 0 0 2a1 1 0 0 0 0-2"></svg:path>`,
})
export class CiDragHorizontalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciDragVerticalIcon],svg[ci-drag-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 18a1 1 0 1 0 2 0a1 1 0 0 0-2 0m-6 0a1 1 0 1 0 2 0a1 1 0 0 0-2 0m6-6a1 1 0 1 0 2 0a1 1 0 0 0-2 0m-6 0a1 1 0 1 0 2 0a1 1 0 0 0-2 0m6-6a1 1 0 1 0 2 0a1 1 0 0 0-2 0M8 6a1 1 0 1 0 2 0a1 1 0 0 0-2 0"></svg:path>`,
})
export class CiDragVerticalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciDribbbleIcon],svg[ci-dribbble-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10c-.006 5.52-4.48 9.994-10 10Zm-4.88-3.455l-.005.01a8.148 8.148 0 0 0 7.939 1.033a34.534 34.534 0 0 0-1.679-5.977a12.638 12.638 0 0 0-4.546 2.773a9.68 9.68 0 0 0-1.65 2.057l-.007.011v-.01l-.018.035l-.012.02l-.007.013l-.017.036l.002-.001Zm9.659-5.5c-.492 0-.984.034-1.472.1a37.456 37.456 0 0 1 1.5 5.463a8.052 8.052 0 0 0 3.22-5.127a12.187 12.187 0 0 0-3.248-.439v.003Zm-12.962-1.09v.056a8.181 8.181 0 0 0 1.925 5.264a13.522 13.522 0 0 1 6.772-5.375l.119-.034c-.177-.391-.343-.74-.509-1.066a31.124 31.124 0 0 1-8.195 1.155h-.112Zm12.649-.606a21.36 21.36 0 0 1 3.7.338a8.105 8.105 0 0 0-1.692-4.659a11.791 11.791 0 0 1-4.4 3.084l.029-.012l-.031.013a23.484 23.484 0 0 1 .548 1.233l.041.1c.6-.066 1.202-.099 1.805-.097ZM8.377 4.677a8.178 8.178 0 0 0-4.33 5.414c2.33-.036 4.65-.33 6.915-.878h.028L11 9.2l.054-.013h.006l.04-.008h.016l.021-.006l.04-.01l.023-.01l.022-.006h.02a51.796 51.796 0 0 0-2.866-4.47h.001ZM12 3.839a8.437 8.437 0 0 0-1.631.155a45.662 45.662 0 0 1 2.879 4.528a9.666 9.666 0 0 0 4.036-2.746A8.192 8.192 0 0 0 12 3.839Z"></svg:path>`,
})
export class CiDribbbleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciDropboxIcon],svg[ci-dropbox-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.006 20.5L7 17.311l5-3.186l5 3.186l-5 3.188l.006.001Zm5-4.251l-5-3.187l5-3.187l-5-3.186l5-3.189l5 3.189l-5 3.186l5 3.187l-5 3.187ZM7 16.249l-5-3.187l5-3.187l-5-3.186L7 3.5l5 3.189l-5 3.185l5 3.187l-5 3.188Z"></svg:path>`,
})
export class CiDropboxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciDummyCircleIcon],svg[ci-dummy-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6a6 6 0 1 0 0 12a6 6 0 0 0 0-12"></svg:path>`,
})
export class CiDummyCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciDummyCircleSmallIcon],svg[ci-dummy-circle-small-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8a4 4 0 1 0 0 8a4 4 0 0 0 0-8"></svg:path>`,
})
export class CiDummyCircleSmallIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciDummySquareIcon],svg[ci-dummy-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 9.2v5.6c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874c.427.218.987.218 2.105.218h5.606c1.118 0 1.677 0 2.104-.218c.377-.192.683-.498.875-.874c.218-.428.218-.987.218-2.104V9.197c0-1.118 0-1.678-.218-2.105a2 2 0 0 0-.875-.874C16.48 6 15.92 6 14.8 6H9.2c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C6 7.52 6 8.08 6 9.2"></svg:path>`,
})
export class CiDummySquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciDummySquareSmallIcon],svg[ci-dummy-square-small-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 11.2v1.6c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874c.427.218.987.218 2.105.218h1.606c1.118 0 1.677 0 2.104-.218c.377-.191.684-.498.875-.874c.218-.428.218-.986.218-2.104v-1.607c0-1.118 0-1.678-.218-2.105a2 2 0 0 0-.875-.874C14.48 8 13.92 8 12.8 8h-1.6c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C8 9.52 8 10.08 8 11.2"></svg:path>`,
})
export class CiDummySquareSmallIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciEditIcon],svg[ci-edit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.42 20.579a1 1 0 0 1-.737-.326a.988.988 0 0 1-.263-.764l.245-2.694L14.983 5.481l3.537 3.536L7.205 20.33l-2.694.245a.95.95 0 0 1-.091.004ZM19.226 8.31L15.69 4.774l2.121-2.121a1 1 0 0 1 1.415 0l2.121 2.121a1 1 0 0 1 0 1.415l-2.12 2.12l-.001.001Z"></svg:path>`,
})
export class CiEditIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciEditPencil01Icon],svg[ci-edit-pencil-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m12 8l-8 8v4h4l8-8m-4-4l2.869-2.869l.001-.001c.395-.395.593-.593.821-.667a1 1 0 0 1 .618 0c.228.074.425.272.82.666l1.74 1.74c.396.396.594.594.668.822a1 1 0 0 1 0 .618c-.074.228-.272.426-.668.822h0L16 12.001m-4-4l4 4"></svg:path>`,
})
export class CiEditPencil01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciEditPencil02Icon],svg[ci-edit-pencil-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v4h4L18.869 9.131h0c.396-.396.594-.594.668-.822a1 1 0 0 0 0-.618c-.074-.228-.272-.426-.668-.822l-1.74-1.74c-.395-.394-.592-.592-.82-.666a1 1 0 0 0-.618 0c-.228.074-.426.272-.82.667l-.002.001z"></svg:path>`,
})
export class CiEditPencil02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciEditPencilLine01Icon],svg[ci-edit-pencil-line-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 20h16M4 20v-4l8-8M4 20h4l8-8m-4-4l2.869-2.869l.001-.001c.395-.395.593-.593.821-.667a1 1 0 0 1 .618 0c.228.074.425.272.82.666l1.74 1.74c.396.396.594.594.668.822a1 1 0 0 1 0 .618c-.074.228-.272.426-.668.822h0L16 12.001m-4-4l4 4"></svg:path>`,
})
export class CiEditPencilLine01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciEditPencilLine02Icon],svg[ci-edit-pencil-line-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 20h16M4 20v-4L14.869 5.131l.001-.001c.395-.395.593-.593.821-.667a1 1 0 0 1 .618 0c.228.074.425.272.82.666l1.74 1.74c.396.396.594.594.668.822a1 1 0 0 1 0 .618c-.074.228-.272.426-.668.822h0L8 20.001z"></svg:path>`,
})
export class CiEditPencilLine02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciErrorIcon],svg[ci-error-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10c-.006 5.52-4.48 9.994-10 10Zm-1-7v2h2v-2h-2Zm0-8v6h2V7h-2Z"></svg:path>`,
})
export class CiErrorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciErrorOutlineIcon],svg[ci-error-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.99 22C6.468 21.994 1.996 17.515 2 11.993C2.004 6.472 6.482 1.998 12.003 2C17.525 2.002 22 6.478 22 12c-.003 5.525-4.485 10.002-10.01 10ZM4 12.172A8 8 0 1 0 4 12v.172ZM13 17h-2v-2h2v2Zm0-4h-2V7h2v6Z"></svg:path>`,
})
export class CiErrorOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciExitIcon],svg[ci-exit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m12 15l3-3m0 0l-3-3m3 3H4m0-4.752V7.2c0-1.12 0-1.68.218-2.108c.192-.377.497-.682.874-.874C5.52 4 6.08 4 7.2 4h9.6c1.12 0 1.68 0 2.107.218c.377.192.683.497.875.874c.218.427.218.987.218 2.105v9.607c0 1.118 0 1.677-.218 2.104a2 2 0 0 1-.875.874c-.427.218-.986.218-2.104.218H7.197c-1.118 0-1.678 0-2.105-.218a2 2 0 0 1-.874-.874C4 18.48 4 17.92 4 16.8v-.05"></svg:path>`,
})
export class CiExitIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciExpandIcon],svg[ci-expand-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19H5v-5m9-9h5v5"></svg:path>`,
})
export class CiExpandIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciExternalLinkIcon],svg[ci-external-link-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 5H8.2c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C5 6.52 5 7.08 5 8.2v7.6c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874c.427.218.987.218 2.105.218h7.606c1.118 0 1.677 0 2.104-.218c.377-.192.683-.498.875-.874c.218-.428.218-.987.218-2.105V14m1-5V4m0 0h-5m5 0l-7 7"></svg:path>`,
})
export class CiExternalLinkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciFacebookIcon],svg[ci-facebook-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.002 12.002a10.005 10.005 0 0 0 8.437 9.879v-6.989H7.902v-2.89h2.54v-2.2a3.528 3.528 0 0 1 3.773-3.9c.75.012 1.5.079 2.24.2v2.459h-1.264a1.446 1.446 0 0 0-1.628 1.563v1.878h2.771l-.443 2.891h-2.328v6.988a10 10 0 1 0-11.561-9.879Z"></svg:path>`,
})
export class CiFacebookIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciFastForwardIcon],svg[ci-fast-forward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 18V6l8.5 6l-8.5 6Zm-9 0V6l8.5 6L4 18Z"></svg:path>`,
})
export class CiFastForwardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciFastRewindIcon],svg[ci-fast-rewind-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20 18l-8.5-6L20 6v12Zm-9 0l-8.5-6L11 6v12Z"></svg:path>`,
})
export class CiFastRewindIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciFigmaIcon],svg[ci-figma-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 15h3m-3 0a3 3 0 1 0 3 3v-3m-3 0a3 3 0 1 1 0-6m3 6v-3M9 9h3M9 9a3 3 0 0 1 0-6h3m0 6v3m0-3V3m0 6h3m-3 3a3 3 0 1 0 3-3m-3 3a3 3 0 0 1 3-3m-3-6h3a3 3 0 1 1 0 6"></svg:path>`,
})
export class CiFigmaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciFileAddIcon],svg[ci-file-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18v-3m0 0v-3m0 3H9m3 0h3M13 3H8.2c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C5 4.52 5 5.08 5 6.2v11.6c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874c.427.218.987.218 2.105.218h7.606c1.118 0 1.677 0 2.104-.218c.377-.192.683-.498.875-.874c.218-.428.218-.986.218-2.104V9m-6-6c.286.003.466.014.639.055q.308.075.578.24c.202.124.375.297.72.643l3.126 3.125c.346.346.518.518.642.72q.165.271.24.578c.04.173.051.354.054.639M13 3v2.8c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874c.427.218.987.218 2.105.218h2.802m0 0H19"></svg:path>`,
})
export class CiFileAddIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciFileArchiveIcon],svg[ci-file-archive-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 22H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h1v2h2v2H7v2h2v2H7v7h4v-5H9v-2h2V8H9V6h2V4H9V2h4a.104.104 0 0 1 .027 0h.006a.15.15 0 0 0 .029.006c.088.006.175.023.259.051h.042a.421.421 0 0 1 .052.043a.988.988 0 0 1 .293.2l6 6a.987.987 0 0 1 .2.293a.735.735 0 0 1 .023.066l.01.028c.028.083.044.17.049.258a.1.1 0 0 0 .007.029v.006A.112.112 0 0 1 20 9v11a2 2 0 0 1-2 2ZM13 4v5h5l-5-5Zm-3 12H8v-2h2v2Z"></svg:path>`,
})
export class CiFileArchiveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciFileBlankIcon],svg[ci-file-blank-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 3H8.2c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C5 4.52 5 5.08 5 6.2v11.6c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874c.427.218.987.218 2.105.218h7.606c1.118 0 1.677 0 2.104-.218c.377-.192.683-.498.875-.874c.218-.428.218-.986.218-2.104V9m-6-6c.286.003.466.014.639.055q.308.075.578.24c.202.124.375.297.72.643l3.126 3.125c.346.346.518.518.642.72q.165.271.24.578c.04.173.051.354.054.639M13 3v2.8c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874c.427.218.987.218 2.105.218h2.802m0 0H19"></svg:path>`,
})
export class CiFileBlankIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciFileBlankFillIcon],svg[ci-file-blank-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 22H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h7a.104.104 0 0 1 .027 0h.006a.15.15 0 0 0 .029.006c.088.006.175.023.259.051h.042a.421.421 0 0 1 .052.043a.988.988 0 0 1 .293.2l6 6a.987.987 0 0 1 .2.293a.735.735 0 0 1 .023.066l.01.028c.028.083.044.17.049.258a.1.1 0 0 0 .007.029v.006A.112.112 0 0 1 20 9v11a2 2 0 0 1-2 2ZM13 4v5h5l-5-5Z"></svg:path>`,
})
export class CiFileBlankFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciFileBlankOutlineIcon],svg[ci-file-blank-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 22H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h7a.09.09 0 0 1 .032.006a.15.15 0 0 0 .03.006c.088.006.175.023.259.051l.028.009a.988.988 0 0 1 .359.228l6 6a.987.987 0 0 1 .2.293c.01.022.017.045.025.068l.009.026c.028.083.044.17.049.258l.007.027C20 8.982 20 8.991 20 9v11a2 2 0 0 1-2 2ZM6 4v16h12V10h-5a1 1 0 0 1-1-1V4H6Zm8 1.414V8h2.586L14 5.414Z"></svg:path>`,
})
export class CiFileBlankOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciFileCheckIcon],svg[ci-file-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 15l2 2l4-4M13 3H8.2c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C5 4.52 5 5.08 5 6.2v11.6c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874c.427.218.987.218 2.105.218h7.606c1.118 0 1.677 0 2.104-.218c.377-.192.683-.498.875-.874c.218-.428.218-.986.218-2.104V9m-6-6c.286.003.466.014.639.055q.308.075.578.24c.202.124.375.297.72.643l3.126 3.125c.346.346.518.518.642.72q.165.271.24.578c.04.173.051.354.054.639M13 3v2.8c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874c.427.218.987.218 2.105.218h2.802m0 0H19"></svg:path>`,
})
export class CiFileCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciFileCloseIcon],svg[ci-file-close-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m10 17l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M13 3H8.2c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C5 4.52 5 5.08 5 6.2v11.6c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874c.427.218.987.218 2.105.218h7.606c1.118 0 1.677 0 2.104-.218c.377-.192.683-.498.875-.874c.218-.428.218-.986.218-2.104V9m-6-6c.286.003.466.014.639.055q.308.075.578.24c.202.124.375.297.72.643l3.126 3.125c.346.346.518.518.642.72q.165.271.24.578c.04.173.051.354.054.639M13 3v2.8c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874c.427.218.987.218 2.105.218h2.802m0 0H19"></svg:path>`,
})
export class CiFileCloseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciFileCodeIcon],svg[ci-file-code-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 3H8.2c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C5 4.52 5 5.08 5 6.2v11.6c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874c.427.218.987.218 2.105.218h7.606c1.118 0 1.677 0 2.104-.218c.377-.192.683-.498.875-.874c.218-.428.218-.986.218-2.104V9m-6-6c.286.003.466.014.639.055q.308.075.578.24c.202.124.375.297.72.643l3.126 3.125c.346.346.518.518.642.72q.165.271.24.578c.04.173.051.354.054.639M13 3v2.8c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874c.427.218.987.218 2.105.218h2.802m0 0H19m-5 4l2 2l-2 2m-4 0l-2-2l2-2"></svg:path>`,
})
export class CiFileCodeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciFileCssIcon],svg[ci-file-css-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 22H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h7a.104.104 0 0 1 .027 0h.006a.15.15 0 0 0 .029.006c.088.006.175.023.259.051h.042a.421.421 0 0 1 .052.043a.988.988 0 0 1 .293.2l6 6a.987.987 0 0 1 .2.293a.735.735 0 0 1 .023.066l.01.028c.028.083.044.17.049.258a.1.1 0 0 0 .007.029v.006A.112.112 0 0 1 20 9v11a2 2 0 0 1-2 2Zm-3.973-4.6c-.008.297.061.59.2.852c.132.235.328.428.566.555c.247.13.521.196.8.193c.375.02.742-.109 1.024-.357A1.31 1.31 0 0 0 17 17.65a1.478 1.478 0 0 0-.3-.953a2.259 2.259 0 0 0-.962-.632a1.723 1.723 0 0 1-.529-.334a.528.528 0 0 1-.149-.364a.6.6 0 0 1 .134-.408a.47.47 0 0 1 .373-.154a.455.455 0 0 1 .389.181a.84.84 0 0 1 .137.517H17a1.684 1.684 0 0 0-.177-.782a1.253 1.253 0 0 0-.5-.531a1.586 1.586 0 0 0-1.778.184a1.28 1.28 0 0 0-.4.986c-.005.32.1.632.3.882c.269.294.605.517.981.649c.19.072.364.18.513.317a.632.632 0 0 1 .143.448c0 .361-.161.544-.479.544a.6.6 0 0 1-.5-.19a.984.984 0 0 1-.153-.612l-.923.002Zm-3.443 0c-.008.297.061.59.2.852c.132.235.328.428.566.555c.247.13.521.196.8.193c.375.02.742-.109 1.024-.357c.26-.263.397-.624.376-.993a1.478 1.478 0 0 0-.3-.953a2.259 2.259 0 0 0-.962-.632a1.723 1.723 0 0 1-.529-.334a.532.532 0 0 1-.149-.364a.6.6 0 0 1 .134-.408a.47.47 0 0 1 .374-.154a.455.455 0 0 1 .389.181c.101.153.15.334.137.517h.913a1.7 1.7 0 0 0-.177-.782a1.261 1.261 0 0 0-.5-.531a1.457 1.457 0 0 0-.745-.19c-.38-.013-.75.121-1.033.374a1.28 1.28 0 0 0-.4.986c-.006.32.1.632.3.882c.268.294.605.517.98.649c.19.072.365.18.514.317a.632.632 0 0 1 .143.448c0 .361-.161.544-.48.544a.6.6 0 0 1-.5-.19a.984.984 0 0 1-.159-.61h-.916ZM8.6 14a1.41 1.41 0 0 0-1.176.545c-.31.453-.458.996-.424 1.544v.819a2.56 2.56 0 0 0 .408 1.551A1.4 1.4 0 0 0 8.587 19c.421.025.833-.13 1.133-.427c.27-.32.421-.724.429-1.143v.053v-.173h-.908c.011.24-.043.478-.156.69a.582.582 0 0 1-.5.187a.55.55 0 0 1-.52-.271a2.3 2.3 0 0 1-.149-1V16c-.015-.31.04-.62.162-.905a.546.546 0 0 1 .52-.278a.557.557 0 0 1 .495.2c.112.219.163.463.149.708h.918a2.115 2.115 0 0 0-.439-1.277A1.406 1.406 0 0 0 8.6 14ZM13 4v5h5l-5-5Z"></svg:path>`,
})
export class CiFileCssIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciFileDocumentIcon],svg[ci-file-document-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17h6m-6-3h6M13 3H8.2c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C5 4.52 5 5.08 5 6.2v11.6c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874c.427.218.987.218 2.105.218h7.606c1.118 0 1.677 0 2.104-.218c.377-.192.683-.498.875-.874c.218-.428.218-.986.218-2.104V9.326L18.999 9M13 3c.286.003.466.014.638.055c.204.05.4.13.579.24c.202.124.375.297.72.643l3.126 3.125c.346.346.518.518.642.72q.165.271.24.578c.04.173.051.354.054.639M13 3v2.8c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874c.427.218.987.218 2.105.218h2.802"></svg:path>`,
})
export class CiFileDocumentIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciFileDownloadIcon],svg[ci-file-download-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 12v6m0 0l3-2m-3 2l-3-2m4-13H8.2c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C5 4.52 5 5.08 5 6.2v11.6c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874c.427.218.987.218 2.105.218h7.606c1.118 0 1.677 0 2.104-.218c.377-.192.683-.498.875-.874c.218-.428.218-.986.218-2.104V9m-6-6c.286.003.466.014.639.055q.308.075.578.24c.202.124.375.297.72.643l3.126 3.125c.346.346.518.518.642.72q.165.271.24.578c.04.173.051.354.054.639M13 3v2.8c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874c.427.218.987.218 2.105.218h2.802m0 0H19"></svg:path>`,
})
export class CiFileDownloadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciFileEditIcon],svg[ci-file-edit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 11V6.2c0-1.12 0-1.68.218-2.108c.192-.377.497-.682.874-.874C7.52 3 8.08 3 9.2 3H14m6 6v8.804c0 1.118 0 1.677-.218 2.104a2 2 0 0 1-.874.874C18.48 21 17.92 21 16.803 21H13m7-12c-.004-.285-.014-.466-.056-.639q-.074-.308-.24-.578c-.123-.202-.295-.374-.641-.72l-3.125-3.125c-.346-.346-.52-.52-.721-.643a2 2 0 0 0-.578-.24c-.173-.041-.353-.052-.639-.054M20 9h-2.803c-1.118 0-1.678 0-2.105-.218a2 2 0 0 1-.874-.874C14 7.48 14 6.92 14 5.8V3M9 14l2 2m-7 5v-2.5l7.5-7.5l2.5 2.5L6.5 21z"></svg:path>`,
})
export class CiFileEditIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciFileFindIcon],svg[ci-file-find-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 22H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h7c.265 0 .52.105.707.293l6 6A.991.991 0 0 1 20 9v11a2 2 0 0 1-2 2ZM6 4v16h10.586l-2.566-2.566A3.941 3.941 0 0 1 12 18a4.044 4.044 0 1 1 3.434-1.98L18 18.588V9.414L12.586 4H6Zm6 8a2 2 0 1 0 0 4a2 2 0 0 0 0-4Z"></svg:path>`,
})
export class CiFileFindIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciFileHtmlIcon],svg[ci-file-html-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 22H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h7a.104.104 0 0 1 .027 0h.006a.15.15 0 0 0 .029.006c.088.006.175.023.259.051h.042a.421.421 0 0 1 .052.043a.988.988 0 0 1 .293.2l6 6a.987.987 0 0 1 .2.293a.735.735 0 0 1 .023.066l.01.028c.028.083.044.17.049.258a.1.1 0 0 0 .007.029v.006A.112.112 0 0 1 20 9v11a2 2 0 0 1-2 2Zm-1.739-7v4H18.5v-.67h-1.426V15h-.813Zm-1.4 1.258l-.074 1.659V19h.815v-4h-1.057l-.757 2.894l-.76-2.894h-1.061v4h.813v-1.083l-.08-1.667l.8 2.75h.554l.807-2.742ZM8.712 15v.673h.978V19h.815v-3.327h.995V15H8.712Zm-2.4 2.289h1.2V19h.81v-4h-.81v1.618h-1.2V15H5.5v4h.812v-1.711ZM13 4v5h5l-5-5Z"></svg:path>`,
})
export class CiFileHtmlIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciFileImageIcon],svg[ci-file-image-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 22H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h7a.104.104 0 0 1 .027 0h.006a.15.15 0 0 0 .029.006c.088.006.175.023.259.051h.042a.421.421 0 0 1 .052.043a.988.988 0 0 1 .293.2l6 6a.987.987 0 0 1 .2.293a.735.735 0 0 1 .023.066l.01.028c.028.083.044.17.049.258a.1.1 0 0 0 .007.029v.006A.112.112 0 0 1 20 9v11a2 2 0 0 1-2 2Zm-9-6l-3 4h12l-5-7l-3 4l-1-1Zm-.5-5a1.5 1.5 0 1 0 1.5 1.578v.29v-.368A1.5 1.5 0 0 0 8.5 11ZM13 4v5h5l-5-5Z"></svg:path>`,
})
export class CiFileImageIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciFileJpgIcon],svg[ci-file-jpg-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 22H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h7a.104.104 0 0 1 .027 0h.006a.15.15 0 0 0 .029.006c.088.006.175.023.259.051h.042a.421.421 0 0 1 .052.043a.988.988 0 0 1 .293.2l6 6a.987.987 0 0 1 .2.293a.735.735 0 0 1 .023.066l.01.028c.028.083.044.17.049.258a.1.1 0 0 0 .007.029v.006A.112.112 0 0 1 20 9v11a2 2 0 0 1-2 2Zm-2.539-8a1.4 1.4 0 0 0-1.188.545a2.552 2.552 0 0 0-.406 1.547v.876c-.029.54.128 1.074.443 1.514c.3.35.746.542 1.207.518c.286.003.57-.05.836-.154h.008h-.006a.189.189 0 0 1 .029-.014h.005l.016-.008l.021-.01c.218-.1.412-.247.568-.43v-2.011H15.45v.742h.637v.893l-.08.06a.753.753 0 0 1-.436.117a.661.661 0 0 1-.607-.3a1.962 1.962 0 0 1-.183-.969v-.883a1.985 1.985 0 0 1 .173-.925a.574.574 0 0 1 .535-.292a.55.55 0 0 1 .446.171c.12.19.182.408.18.632H17a1.933 1.933 0 0 0-.433-1.227c-.297-.28-.7-.421-1.106-.392ZM7 17.5c-.021.396.1.787.344 1.1c.244.272.598.419.963.4c.362.009.709-.149.941-.427a1.7 1.7 0 0 0 .365-1.137v-3.369H8.7v3.322c0 .528-.133.8-.4.8s-.393-.232-.393-.689H7Zm3.327-3.429v4.866h.91v-1.715h.607c.405.022.802-.128 1.09-.414a1.58 1.58 0 0 0 .392-1.13a1.69 1.69 0 0 0-.4-1.164c-.27-.3-.661-.464-1.065-.447l-1.534.004ZM13 4v5h5l-5-5Zm-1.138 12.4h-.625v-1.515h.635c.16 0 .307.084.39.221c.105.174.156.375.146.578a.866.866 0 0 1-.142.535a.483.483 0 0 1-.404.181Z"></svg:path>`,
})
export class CiFileJpgIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciFileJsIcon],svg[ci-file-js-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 22H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h7a.104.104 0 0 1 .027 0h.006a.15.15 0 0 0 .029.006c.088.006.175.023.259.051h.042a.421.421 0 0 1 .052.043a.988.988 0 0 1 .293.2l6 6a.987.987 0 0 1 .2.293a.735.735 0 0 1 .023.066l.01.028c.028.083.044.17.049.258a.1.1 0 0 0 .007.029v.006A.112.112 0 0 1 20 9v11a2 2 0 0 1-2 2Zm-5.884-4.6c-.006.296.063.59.2.852a1.4 1.4 0 0 0 .55.555c.237.129.502.195.772.193c.366.019.724-.11.994-.357A1.33 1.33 0 0 0 15 17.65a1.506 1.506 0 0 0-.3-.95a2.178 2.178 0 0 0-.932-.632a1.67 1.67 0 0 1-.514-.334a.54.54 0 0 1-.145-.364a.6.6 0 0 1 .13-.408a.449.449 0 0 1 .362-.154a.434.434 0 0 1 .378.181a.859.859 0 0 1 .132.517H15a1.738 1.738 0 0 0-.172-.782a1.237 1.237 0 0 0-.486-.531A1.382 1.382 0 0 0 13.62 14a1.407 1.407 0 0 0-1 .374a1.3 1.3 0 0 0-.392.986a1.4 1.4 0 0 0 .29.882c.258.292.585.515.951.649c.186.072.356.18.5.317c.101.127.15.287.139.448c0 .361-.157.544-.465.544a.578.578 0 0 1-.483-.19a1.012 1.012 0 0 1-.148-.612l-.896.002ZM9 17.5c-.022.395.097.784.335 1.1c.235.27.581.418.939.4c.356.008.695-.15.918-.427c.25-.325.376-.728.356-1.137v-3.369h-.887v3.322c0 .528-.13.8-.387.8s-.383-.232-.383-.689H9ZM13 4v5h5l-5-5Z"></svg:path>`,
})
export class CiFileJsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciFileMinusIcon],svg[ci-file-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 22H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h7a.09.09 0 0 1 .032.006a.15.15 0 0 0 .03.006c.088.006.175.023.259.051l.028.009a.988.988 0 0 1 .359.228l6 6a.987.987 0 0 1 .2.293c.01.022.017.045.025.068l.009.026c.028.083.044.17.049.258l.007.027C20 8.982 20 8.991 20 9v11a2 2 0 0 1-2 2ZM6 4v16h12V10h-5a1 1 0 0 1-1-1V4H6Zm8 1.414V8h2.586L14 5.414ZM15 16H9v-2h6v2Z"></svg:path>`,
})
export class CiFileMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciFileNewIcon],svg[ci-file-new-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 22H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h7a.104.104 0 0 1 .027 0h.006a.15.15 0 0 0 .029.006c.088.006.175.023.259.051h.042a.421.421 0 0 1 .052.043a.988.988 0 0 1 .293.2l6 6a.987.987 0 0 1 .2.293a.735.735 0 0 1 .023.066v.028c.028.083.044.17.049.258a.1.1 0 0 0 .007.029v.006c.005.006.01.013.013.02v11a2 2 0 0 1-2 2ZM6 4v16h12V10h-5a1 1 0 0 1-1-1V4H6Zm8 1.414V8h2.586L14 5.414ZM13 18h-2v-2H9v-2h2v-2h2v2h2v2h-2v2Z"></svg:path>`,
})
export class CiFileNewIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciFilePdfIcon],svg[ci-file-pdf-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 22H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h7a.104.104 0 0 1 .027 0h.006a.15.15 0 0 0 .029.006c.088.006.175.023.259.051h.042a.421.421 0 0 1 .052.043a.988.988 0 0 1 .293.2l6 6a.987.987 0 0 1 .2.293a.735.735 0 0 1 .023.066l.01.028c.028.083.044.17.049.258a.1.1 0 0 0 .007.029v.006A.112.112 0 0 1 20 9v11a2 2 0 0 1-2 2Zm-3.576-8v5h.94v-2.04h1.46v-.838h-1.46v-1.281H17V14h-2.576Zm-3.7 0v5h1.206a1.67 1.67 0 0 0 1.332-.56a2.3 2.3 0 0 0 .486-1.549v-.81a2.287 2.287 0 0 0-.5-1.526c-.325-.37-.8-.574-1.293-.555h-1.231ZM7 14v5h.94v-1.759h.626c.418.023.826-.132 1.124-.426a1.62 1.62 0 0 0 .41-1.16a1.725 1.725 0 0 0-.412-1.194A1.4 1.4 0 0 0 8.585 14H7Zm6-10v5h5l-5-5Zm-1.054 14.162h-.282v-3.321h.342a.716.716 0 0 1 .62.292c.147.303.21.64.182.976v.869c.022.32-.047.64-.2.921a.765.765 0 0 1-.662.263ZM8.585 16.4h-.646v-1.559h.655a.475.475 0 0 1 .4.227c.108.179.16.385.15.594a.89.89 0 0 1-.147.55a.5.5 0 0 1-.412.188Z"></svg:path>`,
})
export class CiFilePdfIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciFilePngIcon],svg[ci-file-png-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 22H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h7a.104.104 0 0 1 .027 0h.006a.15.15 0 0 0 .029.006c.088.006.175.023.259.051h.042a.421.421 0 0 1 .052.043a.988.988 0 0 1 .293.2l6 6a.987.987 0 0 1 .2.293a.735.735 0 0 1 .023.066l.01.028c.028.083.044.17.049.258a.1.1 0 0 0 .007.029v.006A.112.112 0 0 1 20 9v11a2 2 0 0 1-2 2Zm-2.458-8a1.3 1.3 0 0 0-1.126.545a2.66 2.66 0 0 0-.384 1.547v.876a2.479 2.479 0 0 0 .419 1.514c.277.348.705.54 1.149.518c.271.003.54-.05.791-.154l.021-.009a1.55 1.55 0 0 0 .588-.455v-2.009h-1.469v.742h.6v.893l-.076.06a.689.689 0 0 1-.414.117a.62.62 0 0 1-.575-.3a2.063 2.063 0 0 1-.173-.969v-.883c-.016-.317.04-.633.165-.925a.537.537 0 0 1 .507-.292c.16-.013.317.05.423.171c.113.191.171.41.17.632H17a2 2 0 0 0-.41-1.227A1.34 1.34 0 0 0 15.543 14h-.001Zm-4.258 1.746l1.259 3.187h.857v-4.866h-.855v3.195l-1.263-3.195h-.862v4.866h.862v-3.187h.002ZM7 14.067v4.866h.862v-1.711h.575c.388.02.766-.131 1.032-.414c.262-.317.395-.72.373-1.13a1.747 1.747 0 0 0-.379-1.164a1.253 1.253 0 0 0-1.009-.447H7ZM13 4v5h5l-5-5ZM8.454 16.4h-.592v-1.515h.6a.432.432 0 0 1 .37.221c.1.176.148.376.138.578a.9.9 0 0 1-.135.535a.448.448 0 0 1-.381.181Z"></svg:path>`,
})
export class CiFilePngIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciFileRemoveIcon],svg[ci-file-remove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 15h6M13 3H8.2c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C5 4.52 5 5.08 5 6.2v11.6c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874c.427.218.987.218 2.105.218h7.606c1.118 0 1.677 0 2.104-.218c.377-.192.683-.498.875-.874c.218-.428.218-.986.218-2.104V9m-6-6c.286.003.466.014.639.055q.308.075.578.24c.202.124.375.297.72.643l3.126 3.125c.346.346.518.518.642.72q.165.271.24.578c.04.173.051.354.054.639M13 3v2.8c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874c.427.218.987.218 2.105.218h2.802m0 0H19"></svg:path>`,
})
export class CiFileRemoveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciFileSearchIcon],svg[ci-file-search-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m15 18l-1.658-1.657M13 3H8.2c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C5 4.52 5 5.08 5 6.2v11.6c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874c.427.218.987.218 2.105.218h7.606c1.118 0 1.677 0 2.104-.218c.377-.192.683-.498.875-.874c.218-.428.218-.986.218-2.104V9.326L18.999 9M13 3c.286.003.466.014.638.055c.204.05.4.13.579.24c.202.124.375.297.72.643l3.126 3.125c.346.346.518.518.642.72q.165.271.24.578c.04.173.051.354.054.639M13 3v2.8c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874c.427.218.987.218 2.105.218h2.802M11.5 17a2.5 2.5 0 1 1 0-5a2.5 2.5 0 0 1 0 5"></svg:path>`,
})
export class CiFileSearchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciFileSvgIcon],svg[ci-file-svg-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 22H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h7a.104.104 0 0 1 .027 0h.006a.15.15 0 0 0 .029.006c.088.006.175.023.259.051h.042a.421.421 0 0 1 .052.043a.988.988 0 0 1 .293.2l6 6a.987.987 0 0 1 .2.293a.735.735 0 0 1 .023.066l.01.028c.028.083.044.17.049.258a.1.1 0 0 0 .007.029v.006A.112.112 0 0 1 20 9v11a2 2 0 0 1-2 2Zm-2.5-8c-.454-.024-.89.18-1.161.545a2.6 2.6 0 0 0-.4 1.547v.876a2.426 2.426 0 0 0 .432 1.514c.29.35.728.541 1.181.518c.28.003.557-.05.816-.154l.013-.005l-.016.007c.245-.101.46-.26.63-.464v-2.011h-1.509v.742h.623v.893l-.078.06a.723.723 0 0 1-.427.117a.641.641 0 0 1-.592-.3a2.01 2.01 0 0 1-.178-.969v-.883a2.018 2.018 0 0 1 .166-.926a.557.557 0 0 1 .523-.292a.531.531 0 0 1 .435.171c.117.19.177.41.175.632H17a1.96 1.96 0 0 0-.423-1.227A1.4 1.4 0 0 0 15.5 14ZM7 17.4c-.006.296.063.59.2.852c.126.234.317.426.55.555c.237.129.503.195.773.193c.366.02.724-.11.994-.357a1.33 1.33 0 0 0 .366-.993c.013-.34-.09-.676-.293-.95a2.186 2.186 0 0 0-.934-.632a1.652 1.652 0 0 1-.513-.334a.536.536 0 0 1-.143-.367a.608.608 0 0 1 .13-.408a.45.45 0 0 1 .363-.154c.148-.008.29.06.377.181A.853.853 0 0 1 9 15.5h.886a1.739 1.739 0 0 0-.172-.782a1.245 1.245 0 0 0-.487-.531A1.382 1.382 0 0 0 8.505 14a1.409 1.409 0 0 0-1 .374a1.3 1.3 0 0 0-.393.986a1.4 1.4 0 0 0 .291.882c.258.293.585.516.951.649c.186.072.356.18.5.317c.101.127.15.287.139.448c0 .361-.157.544-.465.544a.58.58 0 0 1-.484-.19a1.012 1.012 0 0 1-.148-.612L7 17.4Zm3.182-3.332l1.26 4.866h.925l1.269-4.866h-.991L11.9 17.6l-.737-3.529l-.981-.003ZM13 4v5h5l-5-5Z"></svg:path>`,
})
export class CiFileSvgIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciFileUploadIcon],svg[ci-file-upload-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18v-6m0 0l-3 2m3-2l3 2M13 3H8.2c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C5 4.52 5 5.08 5 6.2v11.6c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874c.427.218.987.218 2.105.218h7.606c1.118 0 1.677 0 2.104-.218c.377-.192.683-.498.875-.874c.218-.428.218-.986.218-2.104V9m-6-6c.286.003.466.014.639.055q.308.075.578.24c.202.124.375.297.72.643l3.126 3.125c.346.346.518.518.642.72q.165.271.24.578c.04.173.051.354.054.639M13 3v2.8c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874c.427.218.987.218 2.105.218h2.802m0 0H19"></svg:path>`,
})
export class CiFileUploadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciFilesIcon],svg[ci-files-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 6h.337c.244 0 .367 0 .482.028q.154.037.29.12c.1.061.187.148.36.32l3.063 3.063c.172.173.258.26.32.36q.083.136.12.29c.028.114.028.235.028.474V18M9 6H4.6c-.56 0-.84 0-1.054.109a1 1 0 0 0-.437.437C3 6.76 3 7.04 3 7.6v11.8c0 .56 0 .84.109 1.054a1 1 0 0 0 .437.437C3.76 21 4.039 21 4.598 21h7.803c.559 0 .84 0 1.053-.109a1 1 0 0 0 .437-.437C14 20.24 14 19.96 14 19.4V18M9 6v3.4c0 .56 0 .84.109 1.054a1 1 0 0 0 .437.437c.214.109.493.109 1.052.109H14m-4-5V4.6c0-.56 0-.84.109-1.054a1 1 0 0 1 .437-.437C10.76 3 11.04 3 11.6 3H16m0 0h.337c.244 0 .367 0 .482.028q.154.037.29.12c.1.061.187.148.36.32l3.063 3.063c.172.173.258.26.32.36q.083.136.12.29c.028.114.028.235.028.474V16.4c0 .56 0 .84-.11 1.054a1 1 0 0 1-.435.437C20.24 18 19.96 18 19.402 18H14m2-15v3.4c0 .56 0 .84.109 1.054a1 1 0 0 0 .437.437C16.76 8 17.039 8 17.598 8H21"></svg:path>`,
})
export class CiFilesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciFilterIcon],svg[ci-filter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 5.6c0-.56 0-.84-.11-1.054a1 1 0 0 0-.436-.437C19.24 4 18.96 4 18.4 4H5.6c-.56 0-.84 0-1.054.109a1 1 0 0 0-.437.437C4 4.76 4 5.04 4 5.6v.737c0 .245 0 .367.028.482a1 1 0 0 0 .12.29c.061.1.148.187.32.36l5.063 5.062c.173.173.26.26.321.36q.083.136.12.29c.028.114.028.235.028.474v4.756c0 .857 0 1.286.18 1.544a1 1 0 0 0 .674.416c.311.046.695-.145 1.461-.529l.8-.4c.322-.16.482-.24.599-.36a1 1 0 0 0 .231-.374c.055-.158.055-.338.055-.697v-4.348c0-.245 0-.367.028-.482a1 1 0 0 1 .12-.29c.06-.1.147-.186.317-.356l.004-.004l5.063-5.062c.172-.173.258-.26.32-.36q.083-.136.12-.29C20 6.706 20 6.584 20 6.345z"></svg:path>`,
})
export class CiFilterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciFilterOffIcon],svg[ci-filter-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 4h5.4c.56 0 .84 0 1.055.109a1 1 0 0 1 .436.437C20 4.76 20 5.04 20 5.6v.745c0 .24 0 .36-.027.474q-.038.154-.12.29c-.062.1-.149.187-.322.36L18 9M7.5 4H5.6c-.56 0-.84 0-1.054.109a1 1 0 0 0-.437.437C4 4.76 4 5.04 4 5.6v.737c0 .245 0 .367.028.482a1 1 0 0 0 .12.29c.061.1.148.187.32.36l5.063 5.062c.173.173.26.26.321.36q.083.136.12.29c.028.114.028.235.028.474v4.756c0 .857 0 1.286.18 1.544a1 1 0 0 0 .674.416c.311.046.695-.145 1.461-.529l.8-.4c.322-.16.482-.24.599-.36a1 1 0 0 0 .231-.374c.055-.158.055-.338.055-.697v-4.348c0-.245 0-.367.028-.482a1 1 0 0 1 .12-.29c.061-.1.147-.186.319-.358l.002-.002l1.031-1.03m0 0L5 1m10.5 10.5L19 15"></svg:path>`,
})
export class CiFilterOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciFilterOffOutlineIcon],svg[ci-filter-off-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.414.414L7 1.828L8.172 3H4a1 1 0 0 0-1 1v2.59c0 .523.213 1.037.583 1.407L9 13.414V21a1.001 1.001 0 0 0 1.447.895l4-2c.339-.17.553-.516.553-.895v-5.586l1.793-1.793l2.935 2.935l1.414-1.414L8.414.414Zm6.965 9.793l-2.086 2.086A.996.996 0 0 0 13 13v5.382l-2 1V13a.996.996 0 0 0-.293-.707L5 6.59V5h5.172l5.207 5.207ZM20 3h-6.172l2 2h3.173l.002 1.583l-.796.796l1.414 1.414l.796-.796c.37-.37.583-.884.583-1.407V4a1 1 0 0 0-1-1Z"></svg:path>`,
})
export class CiFilterOffOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciFilterOutlineIcon],svg[ci-filter-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 3H4a1 1 0 0 0-1 1v2.59c0 .523.213 1.037.583 1.407L9 13.414V21a1.001 1.001 0 0 0 1.447.895l4-2c.339-.17.553-.516.553-.895v-5.586l5.417-5.417c.37-.37.583-.884.583-1.407V4a1 1 0 0 0-1-1Zm-6.707 9.293A.996.996 0 0 0 13 13v5.382l-2 1V13a.996.996 0 0 0-.293-.707L5 6.59V5h14.001l.002 1.583l-5.71 5.71Z"></svg:path>`,
})
export class CiFilterOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciFirstAidIcon],svg[ci-first-aid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-5h5a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-5V4a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v5H4a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h5z"></svg:path>`,
})
export class CiFirstAidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciFirstPageIcon],svg[ci-first-page-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.444 18.01L10.432 12l6.012-6.01l1.415 1.414l-4.6 4.6l4.6 4.6l-1.415 1.406Zm-8.3-.01h-2V6h2v12Z"></svg:path>`,
})
export class CiFirstPageIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciFlagIcon],svg[ci-flag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 21v-5.313m0 0c5.818-4.55 10.182 4.55 16 0V4.313c-5.818 4.55-10.182-4.55-16 0z"></svg:path>`,
})
export class CiFlagIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciFlagFillIcon],svg[ci-flag-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.66 4.3a1 1 0 0 0-.98-.8H5.5a1 1 0 0 0-1 1v15a1 1 0 1 0 2 0v-6h5.6l.24 1.2c.09.468.503.805.98.8h5.18a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1h-4.6l-.24-1.2Z"></svg:path>`,
})
export class CiFlagFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciFlagOutlineIcon],svg[ci-flag-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.5 20.5a1 1 0 0 1-1-1v-15a1 1 0 0 1 1-1h6.38a1 1 0 0 1 .9.55l.72 1.45h5a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-5.39a1 1 0 0 1-.89-.55l-.72-1.45h-5v6a1 1 0 0 1-1 1Zm1-15v6h6l1 2h4v-6h-5l-1-2h-5Z"></svg:path>`,
})
export class CiFlagOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciFolderIcon],svg[ci-folder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 6v10.8c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874c.427.218.987.218 2.105.218h11.606c1.118 0 1.677 0 2.104-.218c.377-.192.683-.498.875-.874C21 18.48 21 17.92 21 16.8V9.2c0-1.12 0-1.68-.218-2.108a2 2 0 0 0-.874-.874C19.48 6 18.92 6 17.8 6H12M3 6h9M3 6a2 2 0 0 1 2-2h3.675c.489 0 .734 0 .964.055q.308.075.578.24c.202.124.375.297.72.643L12 6"></svg:path>`,
})
export class CiFolderIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciFolderAddIcon],svg[ci-folder-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 16v-3m0 0v-3m0 3H9m3 0h3M3 6v10.8c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874c.427.218.987.218 2.105.218h11.606c1.118 0 1.677 0 2.104-.218c.377-.192.683-.498.875-.874C21 18.48 21 17.92 21 16.8V9.2c0-1.12 0-1.68-.218-2.108a2 2 0 0 0-.874-.874C19.48 6 18.92 6 17.8 6H12M3 6h9M3 6a2 2 0 0 1 2-2h3.675c.489 0 .734 0 .964.055q.308.075.578.24c.202.124.375.297.72.643L12 6"></svg:path>`,
})
export class CiFolderAddIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciFolderCheckIcon],svg[ci-folder-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m15 11l-4 4l-2-2M3 6v10.8c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874c.427.218.987.218 2.105.218h11.606c1.118 0 1.677 0 2.104-.218c.377-.192.683-.498.875-.874C21 18.48 21 17.92 21 16.8V9.2c0-1.12 0-1.68-.218-2.108a2 2 0 0 0-.874-.874C19.48 6 18.92 6 17.8 6H12M3 6h9M3 6a2 2 0 0 1 2-2h3.675c.489 0 .734 0 .964.055q.308.075.578.24c.202.124.375.297.72.643L12 6"></svg:path>`,
})
export class CiFolderCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciFolderCloseIcon],svg[ci-folder-close-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m10 15l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M3 6v10.8c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874c.427.218.987.218 2.105.218h11.606c1.118 0 1.677 0 2.104-.218c.377-.192.683-.498.875-.874C21 18.48 21 17.92 21 16.8V9.2c0-1.12 0-1.68-.218-2.108a2 2 0 0 0-.874-.874C19.48 6 18.92 6 17.8 6H12M3 6h9M3 6a2 2 0 0 1 2-2h3.675c.489 0 .734 0 .964.055q.308.075.578.24c.202.124.375.297.72.643L12 6"></svg:path>`,
})
export class CiFolderCloseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciFolderCodeIcon],svg[ci-folder-code-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m14 11l2 2l-2 2m-4 0l-2-2l2-2M3 6v10.8c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874c.427.218.987.218 2.105.218h11.606c1.118 0 1.677 0 2.104-.218c.377-.192.683-.498.875-.874C21 18.48 21 17.92 21 16.8V9.2c0-1.12 0-1.68-.218-2.108a2 2 0 0 0-.874-.874C19.48 6 18.92 6 17.8 6H12M3 6h9M3 6a2 2 0 0 1 2-2h3.675c.489 0 .734 0 .964.055q.308.075.578.24c.202.124.375.297.72.643L12 6"></svg:path>`,
})
export class CiFolderCodeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciFolderDocumentIcon],svg[ci-folder-document-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 15h6m-6-3h6M3 6v10.8c0 1.12 0 1.68.218 2.107c.192.377.497.683.874.875c.427.218.987.218 2.105.218h11.607c1.118 0 1.677 0 2.104-.218c.376-.192.682-.498.874-.874C21 18.48 21 17.92 21 16.8V9.2c0-1.12 0-1.68-.218-2.108a2 2 0 0 0-.875-.874C19.48 6 18.92 6 17.8 6H12M3 6h9M3 6a2 2 0 0 1 2-2h3.675c.489 0 .734 0 .964.055q.308.075.578.24c.202.124.375.297.72.643L12 6"></svg:path>`,
})
export class CiFolderDocumentIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciFolderDownloadIcon],svg[ci-folder-download-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l3-2m-3 2l-3-2M3 6v10.8c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874c.427.218.987.218 2.105.218h11.606c1.118 0 1.677 0 2.104-.218c.377-.192.683-.498.875-.874C21 18.48 21 17.92 21 16.8V9.2c0-1.12 0-1.68-.218-2.108a2 2 0 0 0-.874-.874C19.48 6 18.92 6 17.8 6H12M3 6h9M3 6a2 2 0 0 1 2-2h3.675c.489 0 .734 0 .964.055q.308.075.578.24c.202.124.375.297.72.643L12 6"></svg:path>`,
})
export class CiFolderDownloadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciFolderEditIcon],svg[ci-folder-edit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 9.25V9.2c0-1.12 0-1.68-.218-2.108a2 2 0 0 0-.874-.874C19.48 6 18.92 6 17.8 6H3m0 0v10.8c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874C4.52 20 5.08 20 6.2 20H7M3 6v-.4c0-.56 0-.84.109-1.054a1 1 0 0 1 .437-.437C3.76 4 4.04 4 4.6 4h4.737c.245 0 .367 0 .482.028a1 1 0 0 1 .29.12c.1.061.187.148.36.32L12 6m4 8l2 2m-7 5v-2.5l7.5-7.5l2.5 2.5l-7.5 7.5z"></svg:path>`,
})
export class CiFolderEditIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciFolderMinusIcon],svg[ci-folder-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 21H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6a1 1 0 0 1 .707.293L12.414 5H20a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2ZM4 7v12h16V7H4Zm12 7H8v-2h8v2Z"></svg:path>`,
})
export class CiFolderMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciFolderOpenIcon],svg[ci-folder-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.803 20h1.99c.433 0 .649 0 .83-.074c.161-.066.302-.172.41-.308c.12-.155.18-.362.299-.778l1.086-3.8c.198-.693.296-1.04.218-1.313a1 1 0 0 0-.435-.577c-.228-.141-.561-.15-1.2-.15m-3.198 7H6.197m11.606 0c1.118 0 1.677 0 2.104-.218c.377-.192.683-.498.875-.874C21 18.48 21 17.92 21 16.8V13M6.197 20H5.12c-.72 0-1.08 0-1.322-.15a1 1 0 0 1-.436-.577a.7.7 0 0 1-.025-.16m2.86.887c-1.118 0-1.678 0-2.105-.218a2 2 0 0 1-.754-.67M21 13H5l-1.417 4.96l-.002.007c-.16.56-.255.893-.243 1.145M21 13V9.2c0-1.12 0-1.68-.218-2.108a2 2 0 0 0-.874-.874C19.48 6 18.92 6 17.8 6H12M3.338 19.112a2 2 0 0 1-.12-.204C3 18.48 3 17.92 3 16.8V6m0 0h9M3 6a2 2 0 0 1 2-2h3.675c.489 0 .734 0 .964.055q.308.075.578.24c.202.124.375.297.72.643L12 6"></svg:path>`,
})
export class CiFolderOpenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciFolderPlusIcon],svg[ci-folder-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 21H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6a1 1 0 0 1 .707.293L12.414 5H20a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2ZM4 7v12h16V7H4Zm9 10h-2v-3H8v-2h3V9h2v3h3v2h-3v3Z"></svg:path>`,
})
export class CiFolderPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciFolderRemoveIcon],svg[ci-folder-remove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 13h6M3 6v10.8c0 1.12 0 1.68.218 2.107c.192.377.497.683.874.875c.427.218.987.218 2.105.218h11.607c1.118 0 1.677 0 2.104-.218c.376-.192.682-.498.874-.874C21 18.48 21 17.92 21 16.8V9.2c0-1.12 0-1.68-.218-2.108a2 2 0 0 0-.875-.874C19.48 6 18.92 6 17.8 6H12M3 6h9M3 6a2 2 0 0 1 2-2h3.675c.489 0 .734 0 .964.055q.308.075.578.24c.202.124.375.297.72.643L12 6"></svg:path>`,
})
export class CiFolderRemoveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciFolderSearchIcon],svg[ci-folder-search-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 6v10.8c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874c.427.218.987.218 2.105.218h11.606c1.118 0 1.677 0 2.104-.218c.377-.192.683-.498.875-.874C21 18.48 21 17.92 21 16.8V9.2c0-1.12 0-1.68-.218-2.108a2 2 0 0 0-.874-.874C19.48 6 18.92 6 17.8 6H12M3 6h9M3 6a2 2 0 0 1 2-2h3.675c.489 0 .734 0 .964.055q.308.075.578.24c.202.124.375.297.72.643L12 6m3 10l-1.658-1.657M11.5 15a2.5 2.5 0 1 1 0-5a2.5 2.5 0 0 1 0 5"></svg:path>`,
})
export class CiFolderSearchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciFolderUploadIcon],svg[ci-folder-upload-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 16v-6m0 0l-3 2m3-2l3 2M3 6v10.8c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874c.427.218.987.218 2.105.218h11.606c1.118 0 1.677 0 2.104-.218c.377-.192.683-.498.875-.874C21 18.48 21 17.92 21 16.8V9.2c0-1.12 0-1.68-.218-2.108a2 2 0 0 0-.874-.874C19.48 6 18.92 6 17.8 6H12M3 6h9M3 6a2 2 0 0 1 2-2h3.675c.489 0 .734 0 .964.055q.308.075.578.24c.202.124.375.297.72.643L12 6"></svg:path>`,
})
export class CiFolderUploadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciFoldersIcon],svg[ci-folders-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 11v8.4c0 .56 0 .84.109 1.053a1 1 0 0 0 .437.438C3.76 21 4.039 21 4.598 21h10.803c.56 0 .84 0 1.053-.109a1 1 0 0 0 .437-.437C17 20.24 17 19.96 17 19.4V15M3 11h7m-7 0v-.4c0-.56 0-.84.109-1.054a1 1 0 0 1 .437-.437C3.76 9 4.04 9 4.6 9H7m3 2h5.4c.56 0 .842 0 1.056.109a1 1 0 0 1 .435.437C17 11.76 17 12.04 17 12.6V15m-7-4L8.925 9.618c-.176-.227-.265-.34-.375-.422a1 1 0 0 0-.324-.159C8.094 9 7.949 9 7.662 9H7m0-4h12.4c.56 0 .842 0 1.056.109a1 1 0 0 1 .435.437C21 5.76 21 6.04 21 6.6v6.8c0 .56 0 .84-.11 1.054a1 1 0 0 1-.435.437c-.214.109-.494.109-1.053.109h-2.4M7 5v4m0-4v-.4c0-.56 0-.84.109-1.054a1 1 0 0 1 .437-.437C7.76 3 8.04 3 8.6 3h3.062c.287 0 .43 0 .562.037q.177.05.326.159c.11.081.199.195.375.422L14 5"></svg:path>`,
})
export class CiFoldersIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciFontIcon],svg[ci-font-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 18L8 6L3 18m8-4H5m16 4v-3m0 0v-3m0 3a3 3 0 1 1-6 0a3 3 0 0 1 6 0"></svg:path>`,
})
export class CiFontIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciForwardIcon],svg[ci-forward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 12V7l9 5l-9 5zm0 0l-9 5V7z"></svg:path>`,
})
export class CiForwardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciGiftIcon],svg[ci-gift-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5.5V8m0-2.5A2.5 2.5 0 1 1 14.5 8M12 5.5A2.5 2.5 0 1 0 9.5 8M12 8h2.5M12 8H9.5M12 8v6m2.5-6h3.3c1.12 0 1.68 0 2.107.218c.377.192.683.497.875.874c.218.427.218.987.218 2.105V14M9.5 8H6.2c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C3 9.52 3 10.08 3 11.2V14m0 0v2.8c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874c.427.218.987.218 2.105.218H12m-9-6h9m0 0v6m0-6h9m-9 6h5.803c1.118 0 1.677 0 2.104-.218c.377-.192.683-.498.875-.874c.218-.428.218-.986.218-2.104V14"></svg:path>`,
})
export class CiGiftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciGithubIcon],svg[ci-github-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.026 2a9.975 9.975 0 0 0-3.153 19.439c.5.09.679-.217.679-.481c0-.237-.008-.865-.011-1.7c-2.775.6-3.361-1.338-3.361-1.338a2.635 2.635 0 0 0-1.107-1.459c-.9-.619.069-.605.069-.605c.64.088 1.205.467 1.527 1.028a2.124 2.124 0 0 0 2.9.829c.046-.506.272-.979.635-1.334c-2.214-.251-4.542-1.107-4.542-4.93a3.865 3.865 0 0 1 1.026-2.671a3.588 3.588 0 0 1 .1-2.64s.837-.269 2.742 1.021a9.439 9.439 0 0 1 4.992 0c1.906-1.291 2.742-1.021 2.742-1.021c.37.835.405 1.78.1 2.64a3.84 3.84 0 0 1 1.024 2.675c0 3.833-2.33 4.675-4.552 4.922c.48.49.725 1.162.675 1.846c0 1.334-.012 2.41-.012 2.737c0 .267.178.577.687.479A9.975 9.975 0 0 0 12.026 2Z"></svg:path>`,
})
export class CiGithubIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciGlobeIcon],svg[ci-globe-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12h5m-5 0a9 9 0 0 0 9 9m-9-9a9 9 0 0 1 9-9m-4 9h8m-8 0c0 4.97 1.79 9 4 9m-4-9c0-4.97 1.79-9 4-9m4 9h5m-5 0c0-4.97-1.79-9-4-9m4 9c0 4.97-1.79 9-4 9m9-9a9 9 0 0 0-9-9m9 9a9 9 0 0 1-9 9"></svg:path>`,
})
export class CiGlobeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciGoogleIcon],svg[ci-google-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.956 10.356v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.28 5.28 0 0 1 0-10.559a5.166 5.166 0 0 1 3.29 1.178l2.6-2.6a8.93 8.93 0 1 0-5.89 15.635c4.467 0 8.529-3.249 8.529-8.934a7.468 7.468 0 0 0-.2-1.625l-8.329.001Z"></svg:path>`,
})
export class CiGoogleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciGridIcon],svg[ci-grid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 20h-4v-4h4v4Zm-6 0h-4v-4h4v4Zm-6 0H4v-4h4v4Zm12-6h-4v-4h4v4Zm-6 0h-4v-4h4v4Zm-6 0H4v-4h4v4Zm12-6h-4V4h4v4Zm-6 0h-4V4h4v4ZM8 8H4V4h4v4Z"></svg:path>`,
})
export class CiGridIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciGridBigIcon],svg[ci-grid-big-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 19h-6v-6h6v6Zm-8 0H5v-6h6v6Zm8-8h-6V5h6v6Zm-8 0H5V5h6v6Z"></svg:path>`,
})
export class CiGridBigIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciGridBigRoundIcon],svg[ci-grid-big-round-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 19a3 3 0 1 1 0-6a3 3 0 0 1 0 6Zm-8 0a3 3 0 1 1 0-6a3 3 0 0 1 0 6Zm8-8a3 3 0 1 1 0-6a3 3 0 0 1 0 6Zm-8 0a3 3 0 1 1 0-6a3 3 0 0 1 0 6Z"></svg:path>`,
})
export class CiGridBigRoundIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciGridHorizontalIcon],svg[ci-grid-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 17h-4v-4h4v4Zm-6 0h-4v-4h4v4Zm-6 0H4v-4h4v4Zm12-6h-4V7h4v4Zm-6 0h-4V7h4v4Zm-6 0H4V7h4v4Z"></svg:path>`,
})
export class CiGridHorizontalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciGridHorizontalRoundIcon],svg[ci-grid-horizontal-round-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 17h-4v-4h4v4Zm-6 0h-4v-4h4v4Zm-6 0H4v-4h4v4Zm12-6h-4V7h4v4Zm-8 0a2 2 0 1 1 0-4a2 2 0 0 1 0 4Zm-4 0H4V7h4v4Z"></svg:path>`,
})
export class CiGridHorizontalRoundIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciGridRoundIcon],svg[ci-grid-round-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 20a2 2 0 1 1 0-4a2 2 0 0 1 0 4Zm-6 0a2 2 0 1 1 0-4a2 2 0 0 1 0 4Zm-6 0a2 2 0 1 1 0-4a2 2 0 0 1 0 4Zm12-6a2 2 0 1 1 0-4a2 2 0 0 1 0 4Zm-6 0a2 2 0 1 1 0-4a2 2 0 0 1 0 4Zm-6 0a2 2 0 1 1 0-4a2 2 0 0 1 0 4Zm12-6a2 2 0 1 1 0-4a2 2 0 0 1 0 4Zm-6 0a2 2 0 1 1 0-4a2 2 0 0 1 0 4ZM6 8a2 2 0 1 1 0-4a2 2 0 0 1 0 4Z"></svg:path>`,
})
export class CiGridRoundIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciGridSmallIcon],svg[ci-grid-small-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 17h-4v-4h4v4Zm-6 0H7v-4h4v4Zm6-6h-4V7h4v4Zm-6 0H7V7h4v4Z"></svg:path>`,
})
export class CiGridSmallIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciGridSmallRoundIcon],svg[ci-grid-small-round-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 17h-4v-4h4v4Zm-6 0H7v-4h4v4Zm6-6h-4V7h4v4Zm-8 0a2 2 0 1 1 0-4a2 2 0 0 1 0 4Z"></svg:path>`,
})
export class CiGridSmallRoundIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciGridVerticalIcon],svg[ci-grid-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 20h-4v-4h4v4Zm-6 0H7v-4h4v4Zm6-6h-4v-4h4v4Zm-6 0H7v-4h4v4Zm6-6h-4V4h4v4Zm-6 0H7V4h4v4Z"></svg:path>`,
})
export class CiGridVerticalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciGridVerticalRoundIcon],svg[ci-grid-vertical-round-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 20h-4v-4h4v4Zm-6 0H7v-4h4v4Zm6-6h-4v-4h4v4Zm-8 0a2 2 0 1 1 0-4a2 2 0 0 1 0 4Zm8-6h-4V4h4v4Zm-6 0H7V4h4v4Z"></svg:path>`,
})
export class CiGridVerticalRoundIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciGroupIcon],svg[ci-group-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 3a5 5 0 1 0 0 10A5 5 0 0 0 9 3ZM6 8a3 3 0 1 1 6 0a3 3 0 0 1-6 0Zm10.908.218A2 2 0 0 0 16 8V6a4 4 0 1 1-2.357 7.232l1.178-1.616a2 2 0 1 0 2.087-3.398ZM19.998 21A3.999 3.999 0 0 0 16 17.002V15a6.001 6.001 0 0 1 6 6h-2.002ZM16 21h-2a5 5 0 0 0-10 0H2a7 7 0 1 1 14 0Z"></svg:path>`,
})
export class CiGroupIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciGroupAltIcon],svg[ci-group-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 7a4 4 0 1 1-8 0a4 4 0 0 1 8 0ZM9 7a2 2 0 1 0-4 0a2 2 0 0 0 4 0Zm12 4.5a3.5 3.5 0 1 1-7 0a3.5 3.5 0 0 1 7 0Zm-2 0a1.5 1.5 0 1 0-3 0a1.5 1.5 0 0 0 3 0ZM10 21v-4a3 3 0 1 0-6 0v4H2v-4a5 5 0 0 1 10 0v4h-2Zm10-.5v.5h2v-.5a4.5 4.5 0 1 0-9 0v.5h2v-.5a2.5 2.5 0 0 1 5 0Z"></svg:path>`,
})
export class CiGroupAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciHamburgerIcon],svg[ci-hamburger-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 18H3v-2h18v2Zm0-5H3v-2h18v2Zm0-5H3V6h18v2Z"></svg:path>`,
})
export class CiHamburgerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciHamburgerLgIcon],svg[ci-hamburger-lg-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 17h18M3 12h18M3 7h18"></svg:path>`,
})
export class CiHamburgerLgIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciHamburgerMdIcon],svg[ci-hamburger-md-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 17h14M5 12h14M5 7h14"></svg:path>`,
})
export class CiHamburgerMdIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciHandbagIcon],svg[ci-handbag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 8h-.29c-.962 0-1.443 0-1.834.175a2 2 0 0 0-.847.718c-.237.356-.316.83-.475 1.78l-.933 5.6v.003c-.214 1.28-.32 1.921-.135 2.42c.163.439.475.806.88 1.039C4.828 20 5.478 20 6.777 20h10.445c1.3 0 1.95 0 2.413-.265a2 2 0 0 0 .88-1.038c.184-.5.078-1.14-.136-2.42v-.003l-.934-5.6c-.158-.95-.237-1.425-.474-1.781a2 2 0 0 0-.847-.718C17.734 8 17.252 8 16.289 8H16M8 8h8M8 8a4 4 0 1 1 8 0"></svg:path>`,
})
export class CiHandbagIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciHappyIcon],svg[ci-happy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10c-.006 5.52-4.48 9.994-10 10Zm0-18a8 8 0 1 0 8 8a8.009 8.009 0 0 0-8-8Zm0 14a4.837 4.837 0 0 1-4-2a6.3 6.3 0 0 1-1-2h10v.008A6.422 6.422 0 0 1 16 16a4.838 4.838 0 0 1-4 2Zm-3.5-6a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3Zm6.993-.014a1.493 1.493 0 1 1 0-2.986a1.493 1.493 0 0 1 0 2.986Z"></svg:path>`,
})
export class CiHappyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciHeadingIcon],svg[ci-heading-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 5v7m0 0v7m0-7h10m0-7v7m0 0v7"></svg:path>`,
})
export class CiHeadingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciHeadingH1Icon],svg[ci-heading-h1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m16 10l3-1v10M3 5v7m0 0v7m0-7h8m0-7v7m0 0v7"></svg:path>`,
})
export class CiHeadingH1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciHeadingH2Icon],svg[ci-heading-h2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12.5V12a3 3 0 0 1 3-3h.172a2.828 2.828 0 0 1 2 4.829L15 19h6M3 5v7m0 0v7m0-7h8m0-7v7m0 0v7"></svg:path>`,
})
export class CiHeadingH2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciHeadingH3Icon],svg[ci-heading-h3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 9h6l-4 4h1a3 3 0 1 1-2.83 3.999M3 5v7m0 0v7m0-7h8m0-7v7m0 0v7"></svg:path>`,
})
export class CiHeadingH3Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciHeadingH4Icon],svg[ci-heading-h4-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m18 9l-2.5 8H20m0 0h1m-1 0v-3m0 3v2M3 5v7m0 0v7m0-7h8m0-7v7m0 0v7"></svg:path>`,
})
export class CiHeadingH4Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciHeadingH5Icon],svg[ci-heading-h5-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 9h-4l-1.25 5.016a3 3 0 0 1 3.555-.717a3 3 0 1 1-3.555 4.685M3 5v7m0 0v7m0-7h8m0-7v7m0 0v7"></svg:path>`,
})
export class CiHeadingH5Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciHeadingH6Icon],svg[ci-heading-h6-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.402 14.525A2.974 2.974 0 0 0 16.5 18.6a3.01 3.01 0 0 0 4.099-1.092a2.973 2.973 0 0 0-1.099-4.075a3.01 3.01 0 0 0-4.098 1.092m0 0L19 8M3 5v7m0 0v7m0-7h8m0-7v7m0 0v7"></svg:path>`,
})
export class CiHeadingH6Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciHeadphonesIcon],svg[ci-headphones-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11a7 7 0 1 0-14 0m11 3.5v2c0 .465 0 .697.038.89a2 2 0 0 0 1.572 1.572c.193.038.425.038.89.038s.697 0 .89-.038a2 2 0 0 0 1.571-1.572c.039-.193.039-.425.039-.89v-2c0-.465 0-.697-.039-.89a2 2 0 0 0-1.57-1.572C19.196 12 18.964 12 18.5 12s-.697 0-.89.038a2 2 0 0 0-1.572 1.571c-.038.194-.038.426-.038.891m-8 0v2c0 .465 0 .697-.039.89a2 2 0 0 1-1.57 1.572C6.196 19 5.964 19 5.5 19s-.697 0-.89-.038a2 2 0 0 1-1.572-1.572C3 17.197 3 16.965 3 16.5v-2c0-.465 0-.697.038-.89a2 2 0 0 1 1.572-1.572C4.803 12 5.035 12 5.5 12s.697 0 .89.038a2 2 0 0 1 1.571 1.571c.039.194.039.426.039.891"></svg:path>`,
})
export class CiHeadphonesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciHeart01Icon],svg[ci-heart-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 7.694C10 3 3 3.5 3 9.5s9 11 9 11s9-5 9-11s-7-6.5-9-1.806"></svg:path>`,
})
export class CiHeart01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciHeart02Icon],svg[ci-heart-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.237 6.237a4.1 4.1 0 0 1 .135 5.654l-7.373 8.11l-7.37-8.11a4.098 4.098 0 1 1 6.23-5.316L12 8l1.14-1.425a4.1 4.1 0 0 1 6.097-.338"></svg:path>`,
})
export class CiHeart02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciHeartFillIcon],svg[ci-heart-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 8.4A5.4 5.4 0 0 1 7.5 3A5.991 5.991 0 0 1 12 5a5.991 5.991 0 0 1 4.5-2A5.4 5.4 0 0 1 22 8.4c0 5.356-6.379 9.4-10 12.6C8.387 17.773 2 13.76 2 8.4Z"></svg:path>`,
})
export class CiHeartFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciHeartOutlineIcon],svg[ci-heart-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 21c-.645-.572-1.374-1.167-2.145-1.8h-.01c-2.715-2.22-5.792-4.732-7.151-7.742c-.446-.958-.683-2-.694-3.058A5.39 5.39 0 0 1 7.5 3a6.158 6.158 0 0 1 3.328.983A5.6 5.6 0 0 1 12 5c.344-.39.738-.732 1.173-1.017A6.152 6.152 0 0 1 16.5 3A5.39 5.39 0 0 1 22 8.4a7.422 7.422 0 0 1-.694 3.063c-1.359 3.01-4.435 5.521-7.15 7.737l-.01.008c-.772.629-1.5 1.224-2.145 1.8L12 21ZM7.5 5a3.535 3.535 0 0 0-2.5.992A3.342 3.342 0 0 0 4 8.4c.011.77.186 1.53.512 2.228A12.316 12.316 0 0 0 7.069 14.1c.991 1 2.131 1.968 3.117 2.782c.273.225.551.452.829.679l.175.143c.267.218.543.444.81.666l.013-.012l.006-.005h.006l.009-.007h.01l.018-.015l.041-.033l.007-.006l.011-.008h.006l.009-.008l.664-.545l.174-.143c.281-.229.559-.456.832-.681c.986-.814 2.127-1.781 3.118-2.786a12.298 12.298 0 0 0 2.557-3.471c.332-.704.51-1.472.52-2.25A3.343 3.343 0 0 0 19 6a3.535 3.535 0 0 0-2.5-1a3.988 3.988 0 0 0-2.99 1.311L12 8.051l-1.51-1.74A3.988 3.988 0 0 0 7.5 5Z"></svg:path>`,
})
export class CiHeartOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciHelpIcon],svg[ci-help-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.195 8.765A4 4 0 1 1 12 14v1m.05 4v.1h-.1V19z"></svg:path>`,
})
export class CiHelpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciHelpCircleIcon],svg[ci-help-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10c-.006 5.52-4.48 9.994-10 10Zm-1-5v2h2v-2h-2Zm1-10a2 2 0 0 1 2 2a1.95 1.95 0 0 1-.59 1.41l-1.24 1.26A4.015 4.015 0 0 0 11 14.5v.5h2a3.42 3.42 0 0 1 1.17-2.83l.9-.92A3.16 3.16 0 0 0 16 9a4 4 0 0 0-8 0h2a2 2 0 0 1 2-2Z"></svg:path>`,
})
export class CiHelpCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciHelpCircleOutlineIcon],svg[ci-help-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22c-5.52-.006-9.994-4.48-10-10v-.2C2.11 6.305 6.635 1.928 12.13 2c5.497.074 9.904 4.569 9.868 10.065C21.962 17.562 17.497 22 12 22Zm-.016-2H12a8 8 0 1 0-.016 0ZM13 18h-2v-2h2v2Zm0-3h-2a3.583 3.583 0 0 1 1.77-3.178C13.43 11.316 14 10.88 14 10a2 2 0 1 0-4 0H8v-.09a4 4 0 1 1 8 .09a3.413 3.413 0 0 1-1.56 2.645A3.1 3.1 0 0 0 13 15Z"></svg:path>`,
})
export class CiHelpCircleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciHelpQuestionmarkIcon],svg[ci-help-questionmark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 22h-3v-3h3v3Zm0-5h-3v-.007c0-1.65 0-3.075.672-4.073a6.304 6.304 0 0 1 1.913-1.62c.334-.214.649-.417.914-.628a3.712 3.712 0 0 0 1.332-3.824A3.033 3.033 0 0 0 9 8H6a6 6 0 0 1 6-6a6.04 6.04 0 0 1 5.434 3.366a6.017 6.017 0 0 1-.934 6.3c-.453.502-.96.95-1.514 1.337a7.248 7.248 0 0 0-1.316 1.167A4.23 4.23 0 0 0 13 17Z"></svg:path>`,
})
export class CiHelpQuestionmarkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciHideIcon],svg[ci-hide-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m4 4l16 16m-3.5-3.244C15.147 17.485 13.618 18 12 18c-3.53 0-6.634-2.452-8.413-4.221c-.47-.467-.705-.7-.854-1.159c-.107-.327-.107-.913 0-1.24c.15-.459.385-.693.855-1.16c.897-.892 2.13-1.956 3.584-2.793M19.5 14.634c.333-.293.638-.582.912-.854l.003-.003c.468-.466.703-.7.852-1.156c.107-.327.107-.914 0-1.241c-.15-.458-.384-.692-.854-1.159C18.633 8.452 15.531 6 12 6q-.507 0-1 .064m2.323 7.436a2 2 0 0 1-2.762-2.889"></svg:path>`,
})
export class CiHideIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciHomeAltCheckIcon],svg[ci-home-alt-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 22H5a1 1 0 0 1-1-1v-9.643a1.01 1.01 0 0 1 .293-.65l7-7a1 1 0 0 1 1.415 0l7 7a.994.994 0 0 1 .292.707V21a1 1 0 0 1-1 1ZM12 5.828l-6 6V20h12v-8.172l-6-6Zm-1.5 12.731l-2.706-2.7L9.2 14.441l1.3 1.292l4.3-4.292l1.412 1.416l-5.712 5.701v.001Z"></svg:path>`,
})
export class CiHomeAltCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciHomeAltFillIcon],svg[ci-home-alt-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m2 13l9.293-9.293a1 1 0 0 1 1.414 0L22 13h-2v8a1 1 0 0 1-1 1h-5v-7h-4v7H5a1 1 0 0 1-1-1v-8H2Z"></svg:path>`,
})
export class CiHomeAltFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciHomeAltMinusIcon],svg[ci-home-alt-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 22H5a1 1 0 0 1-1-1v-9.643a1.01 1.01 0 0 1 .293-.65l7-7a1 1 0 0 1 1.415 0l7 7a.994.994 0 0 1 .292.707V21a1 1 0 0 1-1 1ZM12 5.828l-6 6V20h12v-8.172l-6-6ZM16 16H8v-2h8v2Z"></svg:path>`,
})
export class CiHomeAltMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciHomeAltOutlineIcon],svg[ci-home-alt-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 22H5a1 1 0 0 1-1-1v-8H2l9.292-9.293a1 1 0 0 1 1.415 0L22 13h-2v8a1 1 0 0 1-1 1Zm-9-7h4v5h4v-8.172l-6-6l-6 6V20h4v-5Z"></svg:path>`,
})
export class CiHomeAltOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciHomeAltPlusIcon],svg[ci-home-alt-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 22H5a1 1 0 0 1-1-1v-9.643a1.01 1.01 0 0 1 .293-.65l7-7a1 1 0 0 1 1.415 0l7 7a.994.994 0 0 1 .292.707V21a1 1 0 0 1-1 1ZM12 5.828l-6 6V20h12v-8.172l-6-6Zm1 12.171h-2v-3H8v-2h3v-3h2v3h3v2h-3v3Z"></svg:path>`,
})
export class CiHomeAltPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciHomeAltXIcon],svg[ci-home-alt-x-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 22H5a1 1 0 0 1-1-1v-9.643a1.01 1.01 0 0 1 .293-.65l7-7a1 1 0 0 1 1.415 0l7 7a.994.994 0 0 1 .292.707V21a1 1 0 0 1-1 1ZM12 5.828l-6 6V20h12v-8.172l-6-6ZM9.878 18.071l-1.413-1.414l2.121-2.121l-2.121-2.122L9.879 11L12 13.121L14.121 11l1.414 1.414l-2.121 2.121l2.121 2.121l-1.413 1.413L12 15.949l-2.121 2.122h-.001Z"></svg:path>`,
})
export class CiHomeAltXIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciHomeCheckIcon],svg[ci-home-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 20H5a1 1 0 0 1-1-1v-7.86a1 1 0 0 1 .281-.695l5.5-5.7a1 1 0 0 1 1.439 0l2.8 2.9l-1.43 1.402L10.5 6.88L6 11.54v6.455h11v1A1 1 0 0 1 16 20Zm-1.712-4l-2.706-2.7L13 11.882l1.292 1.291l4.3-4.292L20 10.298l-5.712 5.7V16Z"></svg:path>`,
})
export class CiHomeCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciHomeFillIcon],svg[ci-home-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m4.293 10.707l7-7a1 1 0 0 1 1.414 0l7 7a1 1 0 0 1 .293.707V21a1 1 0 0 1-1 1h-5v-7h-4v7H5a1 1 0 0 1-1-1v-9.586a1 1 0 0 1 .293-.707Z"></svg:path>`,
})
export class CiHomeFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciHomeHeartIcon],svg[ci-home-heart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 22H5a1 1 0 0 1-1-1v-9.643a1.01 1.01 0 0 1 .293-.65l7-7a1 1 0 0 1 1.415 0l7 7a.994.994 0 0 1 .292.707V21a1 1 0 0 1-1 1ZM12 5.828l-6 6V20h12v-8.172l-6-6Zm0 12.171a22.972 22.972 0 0 0-.692-.582l-.047-.038c-1.157-.944-2.6-2.119-2.6-3.58A1.8 1.8 0 0 1 10.5 12a2.008 2.008 0 0 1 1.5.667A2.009 2.009 0 0 1 13.5 12a1.8 1.8 0 0 1 1.835 1.8c0 1.466-1.452 2.649-2.618 3.6l-.057.047c-.237.194-.461.377-.661.554l.001-.002Z"></svg:path>`,
})
export class CiHomeHeartIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciHomeHeart1Icon],svg[ci-home-heart-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 22H5a1 1 0 0 1-1-1v-9.643a1.01 1.01 0 0 1 .293-.65l7-7a1 1 0 0 1 1.415 0l7 7a.994.994 0 0 1 .292.707V21a1 1 0 0 1-1 1Zm-7.622-4.525c.22.18.433.356.622.525c.2-.177.424-.36.662-.554l.057-.047c1.166-.951 2.618-2.134 2.618-3.6A1.8 1.8 0 0 0 13.5 12a2.008 2.008 0 0 0-1.5.667A2.007 2.007 0 0 0 10.5 12a1.8 1.8 0 0 0-1.835 1.8c0 1.461 1.44 2.636 2.6 3.58h-.001h.005l.018.015h.005l.008.019l.052.043l.013.01h.006l.007.008Z"></svg:path>`,
})
export class CiHomeHeart1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciHomeMinusIcon],svg[ci-home-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 20H5a1 1 0 0 1-1-1v-7.86a1 1 0 0 1 .281-.695l5.5-5.7a1 1 0 0 1 1.439 0l2.8 2.9l-1.43 1.402L10.5 6.88L6 11.54v6.455h11v1A1 1 0 0 1 16 20Zm4-6h-8v-2h8v2Z"></svg:path>`,
})
export class CiHomeMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciHomeOutlineIcon],svg[ci-home-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 22H5a1 1 0 0 1-1-1v-9.586a1 1 0 0 1 .293-.707l7-7a1 1 0 0 1 1.415 0l7 7a.994.994 0 0 1 .292.707V21a1 1 0 0 1-1 1Zm-9-7h4v5h4v-8.172l-6-6l-6 6V20h4v-5Z"></svg:path>`,
})
export class CiHomeOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciHomePlusIcon],svg[ci-home-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 20H5a1 1 0 0 1-1-1v-7.86a1 1 0 0 1 .281-.695l5.5-5.7a1 1 0 0 1 1.439 0l1.651 1.713l-1.433 1.394l-.938-.972L6 11.54v6.455h11v1A1 1 0 0 1 16 20Zm1-4h-2v-3h-3v-2h3V8h2v3h3v2h-3v3Z"></svg:path>`,
})
export class CiHomePlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciHomeXIcon],svg[ci-home-x-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 20H5a1 1 0 0 1-1-1v-7.86a1 1 0 0 1 .281-.695l5.5-5.7a1 1 0 0 1 1.439 0l2.136 2.215l-1.434 1.394L10.5 6.88L6 11.54v6.455h11v1A1 1 0 0 1 16 20Zm-1.658-4l-1.413-1.414l2.121-2.122l-2.121-2.124l1.414-1.414l2.121 2.121l2.121-2.121L20 10.34l-2.121 2.124L20 14.586l-1.414 1.413l-2.122-2.121L14.343 16h-.001Z"></svg:path>`,
})
export class CiHomeXIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciHouse01Icon],svg[ci-house-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 17v-5.548c0-.534 0-.801-.065-1.05a2 2 0 0 0-.28-.617c-.145-.213-.345-.39-.748-.741l-4.8-4.2c-.746-.653-1.12-.98-1.54-1.104c-.37-.11-.764-.11-1.135 0c-.42.124-.792.45-1.538 1.102L5.093 9.044c-.402.352-.603.528-.747.74a2 2 0 0 0-.281.618C4 10.65 4 10.918 4 11.452V17c0 .932 0 1.398.152 1.765a2 2 0 0 0 1.082 1.083C5.602 20 6.068 20 7 20s1.398 0 1.766-.152a2 2 0 0 0 1.082-1.083C10 18.398 10 17.932 10 17v-1a2 2 0 1 1 4 0v1c0 .932 0 1.398.152 1.765a2 2 0 0 0 1.082 1.083C15.602 20 16.068 20 17 20s1.398 0 1.766-.152a2 2 0 0 0 1.082-1.083C20 18.398 20 17.932 20 17"></svg:path>`,
})
export class CiHouse01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciHouse02Icon],svg[ci-house-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 11.452V16.8c0 1.12 0 1.68.218 2.109c.192.376.497.682.874.873c.427.218.987.218 2.105.218h9.606c1.118 0 1.677 0 2.104-.218a2 2 0 0 0 .875-.873c.218-.428.218-.987.218-2.105v-5.352c0-.534 0-.801-.065-1.05a2 2 0 0 0-.28-.617c-.145-.213-.345-.39-.748-.741l-4.8-4.2c-.746-.653-1.12-.98-1.54-1.104c-.37-.11-.764-.11-1.135 0c-.42.124-.792.45-1.538 1.102L5.093 9.044c-.402.352-.603.528-.747.74a2 2 0 0 0-.281.618C4 10.65 4 10.918 4 11.452"></svg:path>`,
})
export class CiHouse02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciHouse03Icon],svg[ci-house-03-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2 20h2m0 0h6m-6 0v-8.548c0-.534 0-.801.065-1.05a2 2 0 0 1 .28-.617c.145-.213.346-.39.748-.741l4.801-4.202c.746-.652 1.119-.978 1.538-1.102c.37-.11.765-.11 1.135 0c.42.124.794.45 1.54 1.104l4.8 4.2c.402.352.603.528.748.74q.192.287.28.618c.065.249.065.516.065 1.05V20m-10 0h4m-4 0v-4a2 2 0 1 1 4 0v4m0 0h6m0 0h2"></svg:path>`,
})
export class CiHouse03Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciHouseAddIcon],svg[ci-house-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 16v-3m0 0v-3m0 3H9m3 0h3M4 16.8v-5.348c0-.534 0-.801.065-1.05c.058-.22.152-.429.28-.617c.145-.213.346-.39.748-.741l4.801-4.202c.746-.652 1.119-.978 1.538-1.102c.37-.11.765-.11 1.135 0c.42.124.794.45 1.54 1.104l4.8 4.2c.403.352.603.528.748.74a2 2 0 0 1 .28.618c.065.248.065.516.065 1.05v5.352c0 1.118 0 1.677-.218 2.105a2 2 0 0 1-.874.873c-.428.218-.986.218-2.104.218H7.197c-1.118 0-1.678 0-2.105-.218a2 2 0 0 1-.874-.873C4 18.48 4 17.92 4 16.8"></svg:path>`,
})
export class CiHouseAddIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciHouseCheckIcon],svg[ci-house-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m15 11l-4 4l-2-2m-5 3.8v-5.348c0-.534 0-.801.065-1.05a2 2 0 0 1 .28-.617c.145-.213.346-.39.748-.741l4.801-4.202c.746-.652 1.119-.978 1.538-1.102c.37-.11.765-.11 1.135 0c.42.124.794.45 1.54 1.104l4.8 4.2c.403.352.603.528.748.74q.192.287.28.618c.065.249.065.516.065 1.05v5.352c0 1.118 0 1.677-.218 2.105a2 2 0 0 1-.875.873c-.427.218-.986.218-2.104.218H7.197c-1.118 0-1.678 0-2.105-.218a2 2 0 0 1-.874-.873C4 18.48 4 17.92 4 16.8"></svg:path>`,
})
export class CiHouseCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciHouseCloseIcon],svg[ci-house-close-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m10 15l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M4 16.8v-5.348c0-.534 0-.801.065-1.05c.058-.22.152-.429.28-.617c.145-.213.346-.39.748-.741l4.801-4.202c.746-.652 1.119-.978 1.538-1.102c.37-.11.765-.11 1.135 0c.42.124.794.45 1.54 1.104l4.8 4.2c.403.352.603.528.748.74a2 2 0 0 1 .28.618c.065.248.065.516.065 1.05v5.352c0 1.118 0 1.677-.218 2.105a2 2 0 0 1-.874.873c-.428.218-.986.218-2.104.218H7.197c-1.118 0-1.678 0-2.105-.218a2 2 0 0 1-.874-.873C4 18.48 4 17.92 4 16.8"></svg:path>`,
})
export class CiHouseCloseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciHouseRemoveIcon],svg[ci-house-remove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 13h6M4 16.8v-5.348c0-.534 0-.801.065-1.05a2 2 0 0 1 .28-.617c.145-.213.346-.39.748-.741l4.801-4.202c.746-.652 1.119-.978 1.538-1.102c.37-.11.765-.11 1.135 0c.42.124.794.45 1.54 1.104l4.8 4.2c.403.352.603.528.748.74q.192.287.28.618c.065.249.065.516.065 1.05v5.352c0 1.118 0 1.677-.218 2.105a2 2 0 0 1-.875.873c-.427.218-.986.218-2.104.218H7.197c-1.118 0-1.678 0-2.105-.218a2 2 0 0 1-.874-.873C4 18.48 4 17.92 4 16.8"></svg:path>`,
})
export class CiHouseRemoveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciHtml5Icon],svg[ci-html5-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11.983 20.988l-6.414-1.826l-1.433-16.15h15.729l-1.429 16.15l-6.453 1.826Zm-4.292-7.691l.245 3.123l4.063 1.085l4.028-1.08l.559-6.113H9.402l-.173-2.033h7.533l.174-1.961h-9.87l.522 6h6.836l-.243 2.566l-2.179.6l-2.216-.607l-.141-1.58H7.691Z"></svg:path>`,
})
export class CiHtml5Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciIdCardIcon],svg[ci-id-card-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 20H4a1.943 1.943 0 0 1-2-1.876V5.875A1.942 1.942 0 0 1 4 4h16a1.942 1.942 0 0 1 2 1.875v12.25A1.943 1.943 0 0 1 20 20ZM4 6v11.989L20 18V6.011L4 6Zm9.43 10H6a3.21 3.21 0 0 1 1.093-2.14a3.829 3.829 0 0 1 2.622-1.11c.984.02 1.923.417 2.622 1.11A3.212 3.212 0 0 1 13.43 16ZM18 15h-3v-2h3v2Zm-8.285-3a1.934 1.934 0 0 1-2-2a1.935 1.935 0 0 1 2-2a1.935 1.935 0 0 1 2 2a1.934 1.934 0 0 1-2 2ZM18 11h-4V9h4v2Z"></svg:path>`,
})
export class CiIdCardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciImageIcon],svg[ci-image-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2ZM5 5v14h14V5H5Zm13 12H6l3-4l1 1l3-4l5 7Zm-9.5-6a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3Z"></svg:path>`,
})
export class CiImageIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciImage01Icon],svg[ci-image-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 17V7.2c0-1.12 0-1.68.218-2.108c.192-.377.497-.682.874-.874C4.52 4 5.08 4 6.2 4h11.6c1.12 0 1.68 0 2.108.218a2 2 0 0 1 .874.874c.218.427.218.987.218 2.105v9.606c0 .485 0 .865-.018 1.174M3 17c0 .988.013 1.506.218 1.907c.192.377.497.683.874.875c.427.218.987.218 2.105.218h11.607c1.118 0 1.677 0 2.104-.218c.376-.192.682-.498.874-.875c.123-.242.177-.526.2-.93M3 17l4.768-5.562l.001-.002c.423-.493.635-.74.886-.83a1 1 0 0 1 .681.005c.25.093.46.343.876.843l2.671 3.205c.386.464.58.696.816.79a1 1 0 0 0 .651.028c.244-.072.46-.287.889-.716l.497-.497c.437-.438.656-.656.904-.728a1 1 0 0 1 .659.037c.238.099.431.34.818.822l2.865 3.582m0 0L21 18m-6-8a1 1 0 1 1 0-2a1 1 0 0 1 0 2"></svg:path>`,
})
export class CiImage01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciImage02Icon],svg[ci-image-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 18V6.2c0-1.12 0-1.68.218-2.108c.192-.377.497-.682.874-.874C4.52 3 5.08 3 6.2 3h11.6c1.12 0 1.68 0 2.108.218a2 2 0 0 1 .874.874c.218.427.218.987.218 2.105v11.606c0 .485 0 .865-.018 1.174M3 18c0 .988.013 1.506.218 1.907c.192.377.497.683.874.875c.427.218.987.218 2.105.218h11.607c1.118 0 1.677 0 2.104-.218c.376-.192.682-.498.874-.875c.123-.242.177-.526.2-.93M3 18l4.768-5.562l.001-.002c.423-.493.635-.74.886-.83a1 1 0 0 1 .681.005c.25.093.46.343.876.843l2.671 3.205c.386.464.58.696.816.79a1 1 0 0 0 .651.028c.244-.072.46-.287.889-.716l.497-.497c.437-.438.656-.656.904-.728a1 1 0 0 1 .659.037c.238.099.431.34.818.822l2.865 3.582m0 0L21 19M15 9a1 1 0 1 1 0-2a1 1 0 0 1 0 2"></svg:path>`,
})
export class CiImage02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciImageAltIcon],svg[ci-image-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 18h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2Zm0-2V4h12v12H8Z"></svg:path><svg:path fill="currentColor" d="M2 8h2v12h12v2H4a2 2 0 0 1-2-2V8Z"></svg:path><svg:path fill="currentColor" d="M10 14h9l-3.75-5.444l-2.25 3.11l-.75-.777L10 14Zm.75-5.833c0 .644.504 1.166 1.125 1.166S13 8.811 13 8.167C13 7.522 12.496 7 11.875 7s-1.125.522-1.125 1.167Z"></svg:path>`,
})
export class CiImageAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciInfoIcon],svg[ci-info-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 11v5m0 5a9 9 0 1 1 0-18a9 9 0 0 1 0 18m.05-13v.1h-.1V8z"></svg:path>`,
})
export class CiInfoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciInfoCircleIcon],svg[ci-info-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10c-.006 5.52-4.48 9.994-10 10ZM9.99 10.99V13h1v4h3.02v-2H13l.01-4.009l-3.02-.001Zm1-3.99v2.019h2.02V7h-2.02Z"></svg:path>`,
})
export class CiInfoCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciInfoCircleOutlineIcon],svg[ci-info-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10c-.006 5.52-4.48 9.994-10 10Zm-8-9.828A8 8 0 1 0 4 12v.172ZM14 17h-3v-4h-1v-2h3v4h1v2Zm-1-8h-2V7h2v2Z"></svg:path>`,
})
export class CiInfoCircleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciInfoSquareIcon],svg[ci-info-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 21H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1ZM10 11v2h1v4h3v-2h-1v-4h-3Zm1-4v2h2V7h-2Z"></svg:path>`,
})
export class CiInfoSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciInfoSquareOutlineIcon],svg[ci-info-square-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 21H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1ZM5 5v14h14V5H5Zm9 12h-3v-4h-1v-2h3v4h1v2Zm-1-8h-2V7h2v2Z"></svg:path>`,
})
export class CiInfoSquareOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciInstagramIcon],svg[ci-instagram-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.002 21.041c-2.46 0-2.75-.013-3.71-.055a6.583 6.583 0 0 1-2.185-.45a4.619 4.619 0 0 1-2.63-2.631a6.591 6.591 0 0 1-.419-2.187c-.056-.958-.056-1.272-.056-3.713c0-2.467.013-2.755.056-3.71a6.59 6.59 0 0 1 .419-2.184A4.61 4.61 0 0 1 6.11 3.479a6.533 6.533 0 0 1 2.184-.42c.955-.054 1.269-.054 3.708-.054c2.48 0 2.765.013 3.71.054c.748.014 1.49.156 2.19.42a4.615 4.615 0 0 1 2.633 2.632c.267.71.41 1.46.421 2.217c.056.958.056 1.271.056 3.711s-.014 2.76-.056 3.707a6.603 6.603 0 0 1-.42 2.189a4.624 4.624 0 0 1-2.634 2.632c-.7.262-1.439.404-2.186.419c-.955.055-1.268.055-3.714.055Zm-.034-16.453c-2.446 0-2.7.012-3.655.055a4.99 4.99 0 0 0-1.67.311a2.99 2.99 0 0 0-1.718 1.712c-.2.54-.305 1.111-.311 1.687c-.053.969-.053 1.223-.053 3.652c0 2.4.009 2.691.053 3.654c.009.57.114 1.135.311 1.67c.306.787.93 1.409 1.719 1.711a4.92 4.92 0 0 0 1.669.311c.968.056 1.223.056 3.655.056c2.453 0 2.707-.012 3.654-.056a4.962 4.962 0 0 0 1.67-.311a3 3 0 0 0 1.71-1.709c.2-.54.305-1.112.311-1.688h.011c.043-.956.043-1.211.043-3.654c0-2.443-.011-2.7-.054-3.655a5.06 5.06 0 0 0-.311-1.668a3 3 0 0 0-1.71-1.712a4.94 4.94 0 0 0-1.67-.311c-.967-.055-1.22-.055-3.654-.055Zm.034 12.036A4.623 4.623 0 1 1 16.622 12a4.63 4.63 0 0 1-4.62 4.624Zm0-7.626a3 3 0 1 0 3 3a3.007 3.007 0 0 0-3-3Zm4.8-.713a1.078 1.078 0 1 1 .008-2.156a1.078 1.078 0 0 1-.008 2.156Z"></svg:path>`,
})
export class CiInstagramIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciInstanceIcon],svg[ci-instance-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m14.263 20.344l6.081-6.081c.792-.792 1.188-1.188 1.336-1.645c.13-.402.13-.834 0-1.235c-.148-.457-.544-.854-1.336-1.646l-6.082-6.082c-.792-.791-1.187-1.187-1.644-1.335a2 2 0 0 0-1.236 0c-.456.148-.853.545-1.644 1.336L3.656 9.737v.001c-.792.792-1.188 1.188-1.336 1.645c-.13.401-.13.833 0 1.235c.148.456.544.852 1.335 1.644l6.086 6.086c.79.79 1.185 1.185 1.641 1.333a2 2 0 0 0 1.236 0c.457-.149.853-.544 1.644-1.336z"></svg:path>`,
})
export class CiInstanceIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciInvisionIcon],svg[ci-invision-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.362 20.993H4.638a1.63 1.63 0 0 1-1.63-1.63V4.637c.001-.9.73-1.629 1.63-1.63h14.723c.9.001 1.63.73 1.632 1.63v14.724c-.001.9-.73 1.63-1.63 1.631ZM6.673 9.67l-.388 1.43h1.278l-.826 3.366c-.06.266-.094.538-.1.811a1.444 1.444 0 0 0 1.621 1.584c.93-.04 1.765-.58 2.183-1.412l-.327 1.3h1.811l1.033-4.14c.26-1.06.772-1.6 1.52-1.6a.907.907 0 0 1 .97.983c.003.197-.026.393-.085.581l-.528 1.906a2.904 2.904 0 0 0-.114.812a1.48 1.48 0 0 0 1.651 1.566c1.03 0 1.748-.7 2.137-2.08l-.707-.274c-.276.79-.57 1.173-.9 1.173c-.24 0-.368-.167-.368-.484c.007-.166.032-.331.075-.492l.52-1.858c.118-.382.179-.78.18-1.18a1.9 1.9 0 0 0-1.855-2.11a3.13 3.13 0 0 0-2.406 1.761l.36-1.617H10.62l-.39 1.4h1.293l-.8 3.188a2.09 2.09 0 0 1-1.826 1.383a.515.515 0 0 1-.092-.007c-.243-.057-.384-.15-.384-.452c.006-.25.043-.498.11-.738l1.216-4.8H6.673Zm2.345-3.162a1.09 1.09 0 1 0 0 2.18v-.025c.292.002.572-.11.781-.314a1.06 1.06 0 0 0 .317-.766a1.089 1.089 0 0 0-1.098-1.075Z"></svg:path>`,
})
export class CiInvisionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciItalicIcon],svg[ci-italic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 19h2m0 0h2m-2 0l4-14m-2 0h2m0 0h2"></svg:path>`,
})
export class CiItalicIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciJavascriptIcon],svg[ci-javascript-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 21H3V3h18v18ZM9.1 17.232l-1.368.844c.213.468.559.863.994 1.137c.473.271 1.01.41 1.555.4c.286-.002.57-.035.849-.1a2.108 2.108 0 0 0 1.358-1.058c.28-.66.384-1.382.3-2.094v-.415c.005-1.027 0-2.072 0-3.084v-1.593H11.1v4.897c.05.5.014 1.003-.107 1.49a.786.786 0 0 1-.759.422a1.43 1.43 0 0 1-.416-.063a1.43 1.43 0 0 1-.623-.641l-.033-.056c-.031-.053-.052-.09-.062-.09v.004Zm5.949-.2l-1.373.787c.112.246.268.47.458.662c.047.052.1.108.149.17c.671.6 1.549.918 2.449.887a2.63 2.63 0 0 0 2.7-1.641v-.008c.114-.4.132-.82.053-1.228l.034.049c-.148-.929-.821-1.574-2.252-2.155c-.111-.052-.226-.1-.338-.15c-.445-.192-.865-.372-1.011-.7a.886.886 0 0 1-.034-.529a.762.762 0 0 1 .808-.543c.111 0 .222.016.329.048c.33.11.595.357.732.676c.775-.507.775-.507 1.316-.844a3.247 3.247 0 0 0-.439-.586a2.466 2.466 0 0 0-2-.776h-.12l-.528.067a2.435 2.435 0 0 0-1.283.754a2.354 2.354 0 0 0 .427 3.354c.438.3.91.546 1.407.733c.641.27 1.194.5 1.306.921a.811.811 0 0 1-.135.707a1.3 1.3 0 0 1-1.027.37a2.58 2.58 0 0 1-.313-.02a1.977 1.977 0 0 1-1.317-1.008l.002.003Z"></svg:path>`,
})
export class CiJavascriptIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciKeyboardIcon],svg[ci-keyboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 15h1M9 15h6m-9 0H5m0-3h14M5 9h14M2 14.8V9.2c0-1.12 0-1.68.218-2.108c.192-.377.497-.682.874-.874C3.52 6 4.08 6 5.2 6h13.6c1.12 0 1.68 0 2.107.218c.377.192.683.497.875.874c.218.427.218.987.218 2.105v5.606c0 1.118 0 1.677-.218 2.104a2 2 0 0 1-.875.875c-.427.218-.986.218-2.104.218H5.197c-1.118 0-1.678 0-2.105-.218a2 2 0 0 1-.874-.875C2 16.48 2 15.92 2 14.8"></svg:path>`,
})
export class CiKeyboardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciLabelIcon],svg[ci-label-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19.293 9.951l-2.333-2.8c-.353-.423-.53-.635-.746-.787a2 2 0 0 0-.632-.295C15.327 6 15.052 6 14.502 6H7.2c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C4 7.52 4 8.08 4 9.2v5.6c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874c.427.218.987.218 2.105.218H14.5c.551 0 .826 0 1.081-.069c.226-.06.44-.16.632-.296c.216-.152.393-.363.746-.786l2.333-2.8c.608-.729.91-1.093 1.027-1.5c.102-.359.102-.74 0-1.098c-.116-.407-.42-.77-1.027-1.5"></svg:path>`,
})
export class CiLabelIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciLaptopIcon],svg[ci-laptop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 17h-.5a1.5 1.5 0 0 0 0 3h17a1.5 1.5 0 0 0 0-3H20M4 17h16M4 17V8.2c0-1.12 0-1.68.218-2.108c.192-.377.497-.682.874-.874C5.52 5 6.08 5 7.2 5h9.6c1.12 0 1.68 0 2.107.218c.377.192.683.497.875.874c.218.427.218.987.218 2.105V17"></svg:path>`,
})
export class CiLaptopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciLastPageIcon],svg[ci-last-page-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m7.558 18.01l-1.414-1.413l4.6-4.6l-4.6-4.593L7.558 5.99L13.569 12l-6.01 6.01h-.001Zm10.3-.01h-2V6h2v12Z"></svg:path>`,
})
export class CiLastPageIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciLayerIcon],svg[ci-layer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m21 14l-9 6l-9-6m18-4l-9 6l-9-6l9-6z"></svg:path>`,
})
export class CiLayerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciLayersIcon],svg[ci-layers-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m21 12l-9 6l-9-6m18 4l-9 6l-9-6m18-8l-9 6l-9-6l9-6z"></svg:path>`,
})
export class CiLayersIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciLayersAltIcon],svg[ci-layers-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 23.27l-9-7l1.62-1.26l7.37 5.73l7.38-5.739L21 16.27l-9 7ZM12 19l-9-7l1.62-1.26l7.37 5.73l7.38-5.74L21 12l-9 7Zm0-4.27L4.63 9L3 7.73l9-7l9 7L19.36 9L12 14.73Z"></svg:path>`,
})
export class CiLayersAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciLeafIcon],svg[ci-leaf-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6.83 17.08c7.07 4.243 12.727-1.414 12.02-12.02C8.244 4.353 2.587 10.01 6.83 17.08m0 0q0 0 0 0m0 0L5 18.91m1.83-1.828l3.827-3.829"></svg:path>`,
})
export class CiLeafIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciLineBreakIcon],svg[ci-line-break-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 6v6H7.83l2.58-2.59L9 8l-5 5l5 5l1.41-1.41L7.83 14H20V6h-2Z"></svg:path>`,
})
export class CiLineBreakIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciLineChartDownIcon],svg[ci-line-chart-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 21H4a1 1 0 0 1-1-1V3h2v16h16v2Zm-1.373-5l-4.17-4.082l-2.228 2.182a.985.985 0 0 1-1.373 0L7 9.344L8.373 8l4.17 4.082L14.77 9.9a.985.985 0 0 1 1.373 0L21 14.656L19.627 16Z"></svg:path>`,
})
export class CiLineChartDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciLineChartUpIcon],svg[ci-line-chart-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 21H4a1 1 0 0 1-1-1V3h2v16h16v2ZM8.373 16L7 14.656L11.856 9.9a.985.985 0 0 1 1.373 0l2.227 2.181L19.627 8L21 9.344L16.144 14.1a.985.985 0 0 1-1.373 0l-2.228-2.182L8.374 16h-.001Z"></svg:path>`,
})
export class CiLineChartUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciLineLIcon],svg[ci-line-l-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19V5"></svg:path>`,
})
export class CiLineLIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciLineMIcon],svg[ci-line-m-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 17V7"></svg:path>`,
})
export class CiLineMIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciLineSIcon],svg[ci-line-s-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15V9"></svg:path>`,
})
export class CiLineSIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciLineSxIcon],svg[ci-line-sx-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 10h-2v4h2v-4Z"></svg:path>`,
})
export class CiLineSxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciLineXlIcon],svg[ci-line-xl-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 21V3"></svg:path>`,
})
export class CiLineXlIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciLinkIcon],svg[ci-link-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9.172 14.829l5.657-5.657M7.05 11.293l-1.414 1.414a4 4 0 1 0 5.657 5.657l1.412-1.414m-1.413-9.9l1.414-1.414a4 4 0 1 1 5.657 5.657l-1.414 1.414"></svg:path>`,
})
export class CiLinkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciLink02Icon],svg[ci-link-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.465 20.535A5 5 0 0 1 4.929 12L7.05 9.878l1.414 1.414l-2.121 2.121a3 3 0 1 0 4.243 4.243l2.12-2.121l1.415 1.415L12 19.071a4.969 4.969 0 0 1-3.536 1.464Zm.707-4.293l-1.414-1.414l7.07-7.071l1.415 1.414l-7.07 7.07l-.001.001Zm7.779-2.121l-1.415-1.414l2.12-2.121a3 3 0 1 0-4.241-4.243l-2.122 2.121L9.879 7.05L12 4.928a5 5 0 0 1 7.07 7.071l-2.12 2.121v.001Z"></svg:path>`,
})
export class CiLink02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciLinkBreakIcon],svg[ci-link-break-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 20v-2m2-2h2M7.05 11.293l-1.414 1.414a4 4 0 0 0 5.657 5.657l1.415-1.414M6 8H4m4-4v2m3.293 1.05l1.414-1.414a4 4 0 1 1 5.656 5.657l-1.414 1.414"></svg:path>`,
})
export class CiLinkBreakIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciLinkHorizontalIcon],svg[ci-link-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h8m-1-4h2a4 4 0 0 1 0 8h-2M9 8H7a4 4 0 1 0 0 8h2"></svg:path>`,
})
export class CiLinkHorizontalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciLinkHorizontalOffIcon],svg[ci-link-horizontal-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h4m0 0L8 8m4 4l8 8M15 8h2a4 4 0 0 1 2.645 7M9 16H7a4 4 0 0 1 0-8h1m0 0L4 4"></svg:path>`,
})
export class CiLinkHorizontalOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciLinkVerticalIcon],svg[ci-link-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v8m4-1v2a4 4 0 0 1-8 0v-2m8-6V7a4 4 0 0 0-8 0v2"></svg:path>`,
})
export class CiLinkVerticalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciLinkedinIcon],svg[ci-linkedin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 21H9V9h4v2a4.618 4.618 0 0 1 3.525-1.763A4.5 4.5 0 0 1 21 13.75V21h-4v-6.75a2.265 2.265 0 0 0-2.247-1.944A1.815 1.815 0 0 0 13 14.25V21Zm-6 0H3V9h4v12ZM5 7a2 2 0 1 1 0-4a2 2 0 0 1 0 4Z"></svg:path>`,
})
export class CiLinkedinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciLinkpathIcon],svg[ci-linkpath-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.396 22a1.84 1.84 0 0 1-.918-.246l-4.52-2.61a1.84 1.84 0 0 1-.917-1.588v-5.22a1.84 1.84 0 0 1 .917-1.589l1.373-.793v1.71a2.76 2.76 0 0 0 1.376 2.383l4.521 2.61a2.75 2.75 0 0 0 2.752 0l1.772-1.022v1.921a1.84 1.84 0 0 1-.917 1.589l-4.521 2.61a1.84 1.84 0 0 1-.918.245Zm3.207-5.891c-.322 0-.638-.085-.917-.246l-4.521-2.61a1.84 1.84 0 0 1-.918-1.589v-5.22c.001-.655.35-1.26.918-1.59l4.521-2.608a1.834 1.834 0 0 1 1.834 0l4.521 2.61c.567.328.916.934.917 1.589v5.22c0 .655-.35 1.26-.917 1.589l-4.521 2.61c-.279.16-.595.245-.917.245Z"></svg:path>`,
})
export class CiLinkpathIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciListAddIcon],svg[ci-list-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 17h7m5-1h3m0 0h3m-3 0v3m0-3v-3M3 12h11M3 7h11"></svg:path>`,
})
export class CiListAddIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciListCheckIcon],svg[ci-list-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 17h7m9-3l-4 4l-2-2M4 12h11M4 7h11"></svg:path>`,
})
export class CiListCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciListChecklistIcon],svg[ci-list-checklist-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 17h9M8 15l-2.5 3L4 17m7-5h9M8 10l-2.5 3L4 12m7-5h9M8 5L5.5 8L4 7"></svg:path>`,
})
export class CiListChecklistIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciListChecklistAltIcon],svg[ci-list-checklist-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 4h10v2H11V4Zm0 4h6v2h-6V8Zm0 6h10v2H11v-2Zm0 4h6v2h-6v-2ZM3 4h6v6H3V4Zm2 2v2h2V6H5Zm-2 8h6v6H3v-6Zm2 2v2h2v-2H5Z"></svg:path>`,
})
export class CiListChecklistAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciListMinusIcon],svg[ci-list-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 17h-9v-2h9v2Zm-11 0H2v-2h9v2Zm4-4H2v-2h13v2Zm0-4H2V7h13v2Z"></svg:path>`,
})
export class CiListMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciListOlIcon],svg[ci-list-ol-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.983 19H4v-1h1.989v-.5h-.994v-1h.995V16H4v-1h2.983v4ZM21 18H9.069v-2H21v2ZM6.983 14H4v-.9L5.79 11H4v-1h2.983v.9L5.193 13h1.79v1ZM21 13H9.069v-2H21v2ZM6.486 9h-.995V6H4.5V5h1.986v4ZM21 8H9.069V6H21v2Z"></svg:path>`,
})
export class CiListOlIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciListOrderedIcon],svg[ci-list-ordered-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 17h10M4 15.685V15.5A1.5 1.5 0 0 1 5.5 14h.04c.807 0 1.46.653 1.46 1.46c0 .35-.114.692-.324.973L4 20h3m3-8h10M10 7h10M4 5l2-1v6"></svg:path>`,
})
export class CiListOrderedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciListPlusIcon],svg[ci-list-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 20h-2v-3h-3v-2h3v-3h2v3h3v2h-3v3Zm-7-3H2v-2h10v2Zm3-4H2v-2h13v2Zm0-4H2V7h13v2Z"></svg:path>`,
})
export class CiListPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciListRemoveIcon],svg[ci-list-remove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 17h7m5-1h6M3 12h11M3 7h11"></svg:path>`,
})
export class CiListRemoveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciListUlIcon],svg[ci-list-ul-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 18H8v-2h12v2ZM6 18H4v-2h2v2Zm14-5H8v-2h12v2ZM6 13H4v-2h2v2Zm14-5H8.023V6H20v2ZM6 8H4V6h2v2Z"></svg:path>`,
})
export class CiListUlIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciListUnorderedIcon],svg[ci-list-unordered-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17h10M9 12h10M9 7h10M5.002 17v.002H5V17zm0-5v.002H5V12zm0-5v.002H5V7z"></svg:path>`,
})
export class CiListUnorderedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciLoadingIcon],svg[ci-loading-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 14a1 1 0 1 0 2 0a1 1 0 0 0-2 0m6-2a1 1 0 1 0 2 0a1 1 0 0 0-2 0m6-2a1 1 0 1 0 2 0a1 1 0 0 0-2 0"></svg:path>`,
})
export class CiLoadingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciLocationIcon],svg[ci-location-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 21a29.776 29.776 0 0 1-3.5-3.531C6.9 15.558 5 12.712 5 10a7 7 0 0 1 11.952-4.951A6.955 6.955 0 0 1 19 10c0 2.712-1.9 5.558-3.5 7.469A29.777 29.777 0 0 1 12 21Zm0-14a3 3 0 1 0 0 6a3 3 0 0 0 0-6Z"></svg:path>`,
})
export class CiLocationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciLocationOutlineIcon],svg[ci-location-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 21a29.776 29.776 0 0 1-3.5-3.531C6.9 15.558 5 12.712 5 10a7 7 0 0 1 11.952-4.951A6.955 6.955 0 0 1 19 10c0 2.712-1.9 5.558-3.5 7.469A29.777 29.777 0 0 1 12 21Zm0-16a5.006 5.006 0 0 0-5 5c0 1.166.527 3.185 3.035 6.186A27.93 27.93 0 0 0 12 18.3a28.121 28.121 0 0 0 1.966-2.111C16.473 13.184 17 11.165 17 10a5.006 5.006 0 0 0-5-5Zm0 8a3 3 0 1 1 0-6a3 3 0 0 1 0 6Z"></svg:path>`,
})
export class CiLocationOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciLockIcon],svg[ci-lock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.23 9H7.2c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C4 10.52 4 11.08 4 12.2v5.6c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874c.427.218.987.218 2.105.218h9.606c1.118 0 1.677 0 2.104-.218c.377-.192.683-.498.875-.874c.218-.428.218-.986.218-2.104v-5.607c0-1.118 0-1.678-.218-2.105a2 2 0 0 0-.875-.874C18.48 9 17.92 9 16.8 9h-2.03M9.23 9h5.539M9.23 9A.23.23 0 0 1 9 8.77V6a3 3 0 1 1 6 0v2.77a.23.23 0 0 1-.231.23"></svg:path>`,
})
export class CiLockIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciLockOpenIcon],svg[ci-lock-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 9H7.2c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C4 10.52 4 11.08 4 12.2v5.6c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874c.427.218.987.218 2.105.218h9.606c1.118 0 1.677 0 2.104-.218c.377-.192.683-.498.875-.874c.218-.428.218-.986.218-2.104v-5.607c0-1.118 0-1.678-.218-2.105a2 2 0 0 0-.875-.874C18.48 9 17.92 9 16.8 9zm0 0V6.12C9 4.397 10.3 3 11.904 3c.824 0 1.567.369 2.095.961"></svg:path>`,
})
export class CiLockOpenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciLogOutIcon],svg[ci-log-out-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m12 15l3-3m0 0l-3-3m3 3H4m5-4.751V7.2c0-1.12 0-1.68.218-2.108c.192-.377.497-.682.874-.874C10.52 4 11.08 4 12.2 4h4.6c1.12 0 1.68 0 2.107.218c.377.192.683.497.875.874c.218.427.218.987.218 2.105v9.607c0 1.118 0 1.677-.218 2.104a2 2 0 0 1-.875.874c-.427.218-.986.218-2.104.218h-4.606c-1.118 0-1.678 0-2.105-.218a2 2 0 0 1-.874-.874C9 18.48 9 17.92 9 16.8v-.05"></svg:path>`,
})
export class CiLogOutIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciLongBottomDownIcon],svg[ci-long-bottom-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.021 15.55L7.014 12H5v7h7v-2.014l-3.55-.007L19 6.429L17.571 5L7.021 15.55Z"></svg:path>`,
})
export class CiLongBottomDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciLongBottomUpIcon],svg[ci-long-bottom-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16.979 8.45l.007 3.55H19V5h-7v2.014l3.55.007L5 17.571L6.429 19l10.55-10.55Z"></svg:path>`,
})
export class CiLongBottomUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciLongDownIcon],svg[ci-long-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11 18.17l-2.59-2.58L7 17l5 5l5-5l-1.41-1.41L13 18.17V2h-2v16.17Z"></svg:path>`,
})
export class CiLongDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciLongLeftIcon],svg[ci-long-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m5.83 11l2.58-2.59L7 7l-5 5l5 5l1.41-1.41L5.83 13H22v-2H5.83Z"></svg:path>`,
})
export class CiLongLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciLongRightIcon],svg[ci-long-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m18.17 13l-2.58 2.59L17 17l5-5l-5-5l-1.41 1.41L18.17 11H2v2h16.17Z"></svg:path>`,
})
export class CiLongRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciLongUpIcon],svg[ci-long-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13 5.83l2.59 2.58L17 7l-5-5l-5 5l1.41 1.41L11 5.83V22h2V5.83Z"></svg:path>`,
})
export class CiLongUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciLongUpLeftIcon],svg[ci-long-up-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.45 7.021L12 7.014V5H5v7h2.014l.007-3.55L17.571 19L19 17.571L8.45 7.021Z"></svg:path>`,
})
export class CiLongUpLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciMagnifyingGlassMinusIcon],svg[ci-magnifying-glass-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 10h6m2 5l6 6m-11-4a7 7 0 1 1 0-14a7 7 0 0 1 0 14"></svg:path>`,
})
export class CiMagnifyingGlassMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciMagnifyingGlassPlusIcon],svg[ci-magnifying-glass-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 10h3m0 0h3m-3 0V7m0 3v3m5 2l6 6m-11-4a7 7 0 1 1 0-14a7 7 0 0 1 0 14"></svg:path>`,
})
export class CiMagnifyingGlassPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciMailIcon],svg[ci-mail-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m4 6l6.108 4.612l.002.002c.678.497 1.017.746 1.389.842a2 2 0 0 0 1.002 0c.372-.096.712-.345 1.392-.844c0 0 3.917-3.006 6.107-4.612M3 15.8V8.2c0-1.12 0-1.68.218-2.108c.192-.377.497-.682.874-.874C4.52 5 5.08 5 6.2 5h11.6c1.12 0 1.68 0 2.107.218c.377.192.683.497.875.874c.218.427.218.987.218 2.105v7.607c0 1.118 0 1.676-.218 2.104a2 2 0 0 1-.875.874c-.427.218-.986.218-2.104.218H6.197c-1.118 0-1.678 0-2.105-.218a2 2 0 0 1-.874-.874C3 17.48 3 16.92 3 15.8"></svg:path>`,
})
export class CiMailIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciMailOpenIcon],svg[ci-mail-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m4 10l6.108 4.612l.002.002c.678.497 1.017.746 1.389.842a2 2 0 0 0 1.002 0c.372-.096.712-.346 1.392-.844L20 10m-.2-.96l-5.599-4.483c-.695-.557-1.043-.835-1.43-.946a2 2 0 0 0-1.046-.014c-.389.1-.744.368-1.454.905L4.27 9.04c-.466.352-.699.528-.867.75a2 2 0 0 0-.327.658C3 10.716 3 11.008 3 11.592V17.8c0 1.12 0 1.68.218 2.108c.192.377.497.682.874.874c.427.218.987.218 2.105.218h11.606c1.118 0 1.677 0 2.104-.218c.377-.192.683-.498.875-.874c.218-.427.218-.987.218-2.105v-6.276c0-.558 0-.838-.071-1.097a2 2 0 0 0-.31-.642c-.159-.22-.378-.396-.819-.749"></svg:path>`,
})
export class CiMailOpenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciMainComponentIcon],svg[ci-main-component-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.235 2.374c-.368.152-.697.482-1.356 1.14c-.659.66-.989.989-1.14 1.356a2 2 0 0 0 0 1.531c.151.368.48.697 1.14 1.356c.658.659.988.989 1.356 1.14a2 2 0 0 0 1.53 0c.368-.151.697-.48 1.356-1.14s.988-.988 1.14-1.356a2 2 0 0 0 0-1.53c-.152-.368-.48-.697-1.14-1.356s-.988-.989-1.356-1.141a2 2 0 0 0-1.53 0M4.87 8.738c-.367.152-.697.481-1.355 1.14c-.66.66-.989.989-1.141 1.356a2 2 0 0 0 0 1.531c.152.368.482.697 1.14 1.356c.66.659.989.988 1.356 1.14a2 2 0 0 0 1.531 0c.368-.152.697-.481 1.356-1.14s.988-.988 1.14-1.356a2 2 0 0 0 0-1.53c-.152-.368-.48-.698-1.14-1.357s-.988-.988-1.356-1.14a2 2 0 0 0-1.53 0m11.372 1.14c-.659.66-.988.989-1.14 1.356a2 2 0 0 0 0 1.531c.152.368.481.697 1.14 1.356s.989.988 1.356 1.14a2 2 0 0 0 1.53 0c.368-.152.698-.481 1.357-1.14s.987-.988 1.14-1.356a2 2 0 0 0 0-1.53c-.153-.368-.481-.698-1.14-1.357c-.66-.659-.989-.988-1.356-1.14a2 2 0 0 0-1.531 0c-.367.152-.697.481-1.356 1.14m-5.008 5.224c-.368.152-.697.482-1.356 1.14c-.659.66-.989.989-1.14 1.357a2 2 0 0 0 0 1.53c.151.368.48.697 1.14 1.356c.658.659.988.989 1.356 1.14a2 2 0 0 0 1.53 0c.368-.151.697-.48 1.356-1.14s.988-.988 1.14-1.356c.203-.49.203-1.04 0-1.53c-.152-.368-.48-.698-1.14-1.356c-.659-.66-.988-.989-1.356-1.141a2 2 0 0 0-1.53 0"></svg:path>`,
})
export class CiMainComponentIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciMapIcon],svg[ci-map-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 6v15m0-15l6-3v15l-6 3m0-15L9 3m6 18l-6-3m0 0l-6 3V6l6-3m0 15V3"></svg:path>`,
})
export class CiMapIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciMapPinIcon],svg[ci-map-pin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M5 9.923c0 4.852 4.244 8.864 6.123 10.402c.27.22.405.332.606.388c.156.044.386.044.542 0c.201-.056.336-.167.606-.388C14.756 18.787 19 14.775 19 9.923a6.9 6.9 0 0 0-2.05-4.895A7.04 7.04 0 0 0 12 3a7.04 7.04 0 0 0-4.95 2.028A6.88 6.88 0 0 0 5 9.923"></svg:path><svg:path d="M10 9a2 2 0 1 0 4 0a2 2 0 0 0-4 0"></svg:path></svg:g>`,
})
export class CiMapPinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciMentionIcon],svg[ci-mention-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12.002V13a2 2 0 1 0 4 0v-1a7 7 0 1 0-4.406 6.502m.406-6.5a3 3 0 1 1 0-.004m0 .004v-.004m0 0V9"></svg:path>`,
})
export class CiMentionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciMenuAlt01Icon],svg[ci-menu-alt-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 17h7M5 12h14M5 7h14"></svg:path>`,
})
export class CiMenuAlt01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciMenuAlt02Icon],svg[ci-menu-alt-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 17h8M5 12h14m-8-5h8"></svg:path>`,
})
export class CiMenuAlt02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciMenuAlt03Icon],svg[ci-menu-alt-03-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 17h8m-8-5h14M5 7h8"></svg:path>`,
})
export class CiMenuAlt03Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciMenuAlt04Icon],svg[ci-menu-alt-04-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 17h14M5 12h14M5 7h8"></svg:path>`,
})
export class CiMenuAlt04Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciMenuAlt05Icon],svg[ci-menu-alt-05-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 17h8m-8-5h14m-8-5h8"></svg:path>`,
})
export class CiMenuAlt05Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciMenuDuoIcon],svg[ci-menu-duo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 16H3v-2h18v2Zm0-6H3V8h18v2Z"></svg:path>`,
})
export class CiMenuDuoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciMenuDuoLgIcon],svg[ci-menu-duo-lg-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15h18M3 9h18"></svg:path>`,
})
export class CiMenuDuoLgIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciMenuDuoMdIcon],svg[ci-menu-duo-md-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15h14M5 9h14"></svg:path>`,
})
export class CiMenuDuoMdIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciMessageIcon],svg[ci-message-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 21V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H9c-.433 0-.854.14-1.2.4L3 21ZM5 5v12l2.134-1.6a1.99 1.99 0 0 1 1.2-.4H19V5H5Z"></svg:path>`,
})
export class CiMessageIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciMessageCheckIcon],svg[ci-message-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 21V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H9c-.433 0-.854.14-1.2.4L3 21ZM5 5v12l2.134-1.6a1.99 1.99 0 0 1 1.2-.4H19V5H5Zm6 8.561L7.293 9.853L8.707 8.44L11 10.733l4.293-4.293l1.414 1.414L11 13.56v.001Z"></svg:path>`,
})
export class CiMessageCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciMessageCircleIcon],svg[ci-message-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m8.051 17.828l.654.35a6.96 6.96 0 0 0 3.292.822H12a7 7 0 1 0-7-7v.003a6.96 6.96 0 0 0 .822 3.292l.35.654l-.538 2.417l2.417-.538ZM3 21l1.058-4.762A9 9 0 0 1 12 3a9 9 0 0 1 9 9a9 9 0 0 1-13.238 7.942L3 21Z"></svg:path>`,
})
export class CiMessageCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciMessageCloseIcon],svg[ci-message-close-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.879 13.536L8.464 12.12L10.586 10L8.464 7.879L9.88 6.464L12 8.586l2.121-2.122l1.415 1.415L13.414 10l2.122 2.121l-1.415 1.415L12 11.414l-2.121 2.122Z"></svg:path><svg:path fill="currentColor" d="M3 5v16l4.8-3.6c.346-.26.767-.4 1.2-.4h10a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2Zm2 12V5h14v10H8.334a1.984 1.984 0 0 0-1.2.4L5 17Z"></svg:path>`,
})
export class CiMessageCloseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciMessageMinusIcon],svg[ci-message-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 21V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H9c-.433 0-.854.14-1.2.4L3 21ZM5 5v12l2.134-1.6a1.99 1.99 0 0 1 1.2-.4H19V5H5Zm11 6H8V9h8v2Z"></svg:path>`,
})
export class CiMessageMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciMessagePlusIcon],svg[ci-message-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 21V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H9c-.433 0-.854.14-1.2.4L3 21ZM5 5v12l2.134-1.6a1.99 1.99 0 0 1 1.2-.4H19V5H5Zm8 9h-2v-3H8V9h3V6h2v3h3v2h-3v3Z"></svg:path>`,
})
export class CiMessagePlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciMessagePlusAltIcon],svg[ci-message-plus-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 10h-2V7h-3V5h3V2h2v3h3v2h-3v3Z"></svg:path><svg:path fill="currentColor" d="M21 12h-2v3H8.334a1.984 1.984 0 0 0-1.2.4L5 17V5h7V3H5a2 2 0 0 0-2 2v16l4.8-3.6c.346-.26.767-.4 1.2-.4h10a2 2 0 0 0 2-2v-3Z"></svg:path>`,
})
export class CiMessagePlusAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciMessageRoundIcon],svg[ci-message-round-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m5.124 12.114l.003.012a5.909 5.909 0 0 0 3.336 4.16L12 17.894V16h2a5 5 0 0 0 5-5v-1a5 5 0 0 0-5-5h-4a5 5 0 0 0-5 5v1c0 .38.042.748.121 1.1l.003.014ZM14 21l-6.364-2.893A7.909 7.909 0 0 1 3.17 12.54A7.024 7.024 0 0 1 3 11v-1a7 7 0 0 1 7-7h4a7 7 0 0 1 7 7v1a7 7 0 0 1-7 7v3Z"></svg:path>`,
})
export class CiMessageRoundIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciMessageWritingIcon],svg[ci-message-writing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 9H7v2h2V9Zm2 0h2v2h-2V9Zm6 0h-2v2h2V9Z"></svg:path><svg:path fill="currentColor" d="M3 5v16l4.8-3.6c.346-.26.767-.4 1.2-.4h10a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2Zm2 12V5h14v10H8.334a1.984 1.984 0 0 0-1.2.4L5 17Z"></svg:path>`,
})
export class CiMessageWritingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciMessengerIcon],svg[ci-messenger-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.401 21v-3.189a8.1 8.1 0 0 1-3.31-6.479C3.09 6.738 7.09 3 12 3s8.91 3.738 8.91 8.332c.001 4.594-4 8.33-8.91 8.33a9.463 9.463 0 0 1-2.559-.349L6.403 21h-.002Zm4.66-11.931l-4.866 5.163l4.438-2.454l2.3 2.394L17.8 9.01l-4.434 2.454l-2.305-2.395Z"></svg:path>`,
})
export class CiMessengerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciMinusIcon],svg[ci-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 13v-2h14v2H5Z"></svg:path>`,
})
export class CiMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciMinusCircleIcon],svg[ci-minus-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22c-5.52-.006-9.994-4.48-10-10v-.2C2.11 6.305 6.635 1.928 12.13 2c5.497.074 9.904 4.569 9.868 10.065C21.962 17.562 17.497 22 12 22ZM7 11v2h10v-2H7Z"></svg:path>`,
})
export class CiMinusCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciMinusCircleOutlineIcon],svg[ci-minus-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10c-.006 5.52-4.48 9.994-10 10Zm-8-9.828A8 8 0 1 0 4 12v.172ZM17 13H7v-2h10v2Z"></svg:path>`,
})
export class CiMinusCircleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciMinusSquareIcon],svg[ci-minus-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2ZM5 5v14h14V5H5Zm12 8H7v-2h10v2Z"></svg:path>`,
})
export class CiMinusSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciMobileIcon],svg[ci-mobile-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 6.2v11.6c0 1.12 0 1.68.218 2.107c.192.377.497.683.874.875c.427.218.987.218 2.105.218h3.606c1.118 0 1.677 0 2.104-.218a2 2 0 0 0 .875-.875c.218-.427.218-.986.218-2.104V6.197c0-1.118 0-1.678-.218-2.105a2 2 0 0 0-.875-.874C15.48 3 14.92 3 13.8 3h-3.6c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C7 4.52 7 5.08 7 6.2"></svg:path>`,
})
export class CiMobileIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciMobileAltIcon],svg[ci-mobile-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.75 23h-10a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v18a2 2 0 0 1-2 2Zm-10-20v18h10V3h-10Zm5 17a1 1 0 1 1 0-2a1 1 0 0 1 0 2Z"></svg:path>`,
})
export class CiMobileAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciMobileButtonIcon],svg[ci-mobile-button-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 6.2v11.6c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874c.427.218.987.218 2.105.218h3.606c1.118 0 1.677 0 2.104-.218c.377-.192.683-.498.875-.874c.218-.428.218-.986.218-2.104V6.197c0-1.118 0-1.678-.218-2.105a2 2 0 0 0-.875-.874C15.48 3 14.92 3 13.8 3h-3.6c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C7 4.52 7 5.08 7 6.2"></svg:path>`,
})
export class CiMobileButtonIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciMonitorIcon],svg[ci-monitor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 20H9m-5-6.2V8.2c0-1.12 0-1.68.218-2.108c.192-.377.497-.682.874-.874C5.52 5 6.08 5 7.2 5h9.6c1.12 0 1.68 0 2.107.218c.377.192.683.497.875.874c.218.427.218.987.218 2.105v5.606c0 1.118 0 1.677-.218 2.104a2 2 0 0 1-.875.875c-.427.218-.986.218-2.104.218H7.197c-1.118 0-1.678 0-2.105-.218a2 2 0 0 1-.874-.875C4 15.48 4 14.92 4 13.8"></svg:path>`,
})
export class CiMonitorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciMonitorPlayIcon],svg[ci-monitor-play-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 20H9m-5-6.2V8.2c0-1.12 0-1.68.218-2.108c.192-.377.497-.682.874-.874C5.52 5 6.08 5 7.2 5h9.6c1.12 0 1.68 0 2.107.218c.377.192.683.497.875.874c.218.427.218.987.218 2.105v5.606c0 1.118 0 1.677-.218 2.104a2 2 0 0 1-.875.875c-.427.218-.986.218-2.104.218H7.197c-1.118 0-1.678 0-2.105-.218a2 2 0 0 1-.874-.875C4 15.48 4 14.92 4 13.8M14.5 11L10 8v6z"></svg:path>`,
})
export class CiMonitorPlayIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciMoonIcon],svg[ci-moon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 6a9 9 0 0 0 9 9c.91 0 1.787-.134 2.614-.385A9 9 0 0 1 12 21A9 9 0 0 1 9.386 3.386A9 9 0 0 0 9 6"></svg:path>`,
})
export class CiMoonIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciMoreGridBigIcon],svg[ci-more-grid-big-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 18a1 1 0 1 0 2 0a1 1 0 0 0-2 0m-6 0a1 1 0 1 0 2 0a1 1 0 0 0-2 0m-6 0a1 1 0 1 0 2 0a1 1 0 0 0-2 0m12-6a1 1 0 1 0 2 0a1 1 0 0 0-2 0m-6 0a1 1 0 1 0 2 0a1 1 0 0 0-2 0m-6 0a1 1 0 1 0 2 0a1 1 0 0 0-2 0m12-6a1 1 0 1 0 2 0a1 1 0 0 0-2 0m-6 0a1 1 0 1 0 2 0a1 1 0 0 0-2 0M5 6a1 1 0 1 0 2 0a1 1 0 0 0-2 0"></svg:path>`,
})
export class CiMoreGridBigIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciMoreGridSmallIcon],svg[ci-more-grid-small-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 15a1 1 0 1 0 2 0a1 1 0 0 0-2 0m-6 0a1 1 0 1 0 2 0a1 1 0 0 0-2 0m6-6a1 1 0 1 0 2 0a1 1 0 0 0-2 0M8 9a1 1 0 1 0 2 0a1 1 0 0 0-2 0"></svg:path>`,
})
export class CiMoreGridSmallIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciMoreHorizontalIcon],svg[ci-more-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 12a1 1 0 1 0 2 0a1 1 0 0 0-2 0m-6 0a1 1 0 1 0 2 0a1 1 0 0 0-2 0m-6 0a1 1 0 1 0 2 0a1 1 0 0 0-2 0"></svg:path>`,
})
export class CiMoreHorizontalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciMoreVerticalIcon],svg[ci-more-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 18a1 1 0 1 0 2 0a1 1 0 0 0-2 0m0-6a1 1 0 1 0 2 0a1 1 0 0 0-2 0m0-6a1 1 0 1 0 2 0a1 1 0 0 0-2 0"></svg:path>`,
})
export class CiMoreVerticalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciMouseIcon],svg[ci-mouse-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10V7m6 2v6a6 6 0 0 1-12 0V9a6 6 0 1 1 12 0"></svg:path>`,
})
export class CiMouseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciMoveIcon],svg[ci-move-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 21v-9m0 9l3-3m-3 3l-3-3m3-6V3m0 9H3m9 0h9m-9-9L9 6m3-3l3 3M3 12l3 3m-3-3l3-3m15 3l-3-3m3 3l-3 3"></svg:path>`,
})
export class CiMoveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciMoveHorizontalIcon],svg[ci-move-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12h18M3 12l3 3m-3-3l3-3m15 3l-3-3m3 3l-3 3"></svg:path>`,
})
export class CiMoveHorizontalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciMoveVerticalIcon],svg[ci-move-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 21V3m0 18l3-3m-3 3l-3-3m3-15L9 6m3-3l3 3"></svg:path>`,
})
export class CiMoveVerticalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciMovingDeskIcon],svg[ci-moving-desk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12v3m0-3h1.803c1.118 0 1.677 0 2.104-.218c.377-.191.683-.498.875-.875C21 10.48 21 9.921 21 8.803v-.606c0-1.118 0-1.678-.218-2.105a2 2 0 0 0-.875-.874C19.48 5 18.92 5 17.8 5h-3.6c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C11 6.52 11 7.08 11 8.2v.6c0 1.12 0 1.68.218 2.107c.192.377.498.684.874.875c.427.218.987.218 2.105.218zm-9-2l-2 2l-2-2m0-3l2-2l2 2M3 21v-1.8c0-1.12 0-1.68.218-2.108c.192-.377.497-.682.874-.874C4.52 16 5.08 16 6.2 16h11.6c1.12 0 1.68 0 2.107.218c.377.192.683.497.875.874c.218.427.218.987.218 2.105V21"></svg:path>`,
})
export class CiMovingDeskIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciNavigationIcon],svg[ci-navigation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m4.805 3.555l15.81 4.865c.862.265.96 1.446.153 1.85l-6.7 3.35a1 1 0 0 0-.448.447l-3.35 6.7c-.403.807-1.584.71-1.85-.153L3.555 4.804a1 1 0 0 1 1.25-1.249"></svg:path>`,
})
export class CiNavigationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciNoteIcon],svg[ci-note-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 20H7.197c-1.118 0-1.678 0-2.105-.218a2 2 0 0 1-.874-.874C4 18.48 4 17.92 4 16.8V7.2c0-1.12 0-1.68.218-2.108c.192-.377.497-.682.874-.874C5.52 4 6.08 4 7.2 4h9.6c1.12 0 1.68 0 2.107.218c.377.192.683.497.875.874c.218.427.218.987.218 2.105V13m-7 7c.286-.003.466-.014.639-.055q.308-.075.578-.24c.202-.124.375-.296.72-.642l4.126-4.125c.346-.346.518-.52.642-.721q.165-.271.24-.579c.04-.172.051-.352.054-.638M13 20v-5.4c0-.56 0-.84.109-1.054a1 1 0 0 1 .437-.437C13.76 13 14.04 13 14.6 13H20"></svg:path>`,
})
export class CiNoteIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciNoteEditIcon],svg[ci-note-edit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 4H7.2c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C4 5.52 4 6.08 4 7.2v9.6c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874c.427.218.987.218 2.105.218h9.606c1.118 0 1.677 0 2.104-.218c.377-.192.683-.498.875-.874c.218-.428.218-.987.218-2.105V14m-4-9l-6 6v3h3l6-6m-3-3l3-3l3 3l-3 3m-3-3l3 3"></svg:path>`,
})
export class CiNoteEditIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciNoteSearchIcon],svg[ci-note-search-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19l-3-3m-6 4H7.197c-1.118 0-1.678 0-2.105-.218a2 2 0 0 1-.874-.874C4 18.48 4 17.92 4 16.8V7.2c0-1.12 0-1.68.218-2.108c.192-.377.497-.682.874-.874C5.52 4 6.08 4 7.2 4h9.6c1.12 0 1.68 0 2.107.218c.377.192.683.497.875.874c.218.427.218.987.218 2.105V10m-6.5 7a3.5 3.5 0 1 1 0-7a3.5 3.5 0 0 1 0 7"></svg:path>`,
})
export class CiNoteSearchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciNotebookIcon],svg[ci-notebook-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 4h-.8c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C4 5.52 4 6.08 4 7.2v9.6c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874c.427.218.987.218 2.105.218H8M8 4h8.8c1.12 0 1.68 0 2.107.218c.377.192.683.497.875.874c.218.427.218.987.218 2.105v9.607c0 1.118 0 1.677-.218 2.104a2 2 0 0 1-.875.874c-.427.218-.986.218-2.104.218H8M8 4v16m4-9h4m-4-3h4"></svg:path>`,
})
export class CiNotebookIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciNotificationIcon],svg[ci-notification-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22a2.02 2.02 0 0 1-2.01-2h4a2.02 2.02 0 0 1-.15.78a2.042 2.042 0 0 1-1.44 1.18h-.047A1.922 1.922 0 0 1 12 22Zm8-3H4v-2l2-1v-5.5a8.065 8.065 0 0 1 .924-4.06A4.654 4.654 0 0 1 10 4.18V2h4v2.18c2.579.614 4 2.858 4 6.32V16l2 1v2Z"></svg:path>`,
})
export class CiNotificationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciNotificationActiveIcon],svg[ci-notification-active-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22a2.02 2.02 0 0 1-2.01-2h4a2.02 2.02 0 0 1-.149.78a2.043 2.043 0 0 1-1.44 1.18h-.046A1.944 1.944 0 0 1 12 22Zm8-3H4v-2l2-1v-5.5a8.065 8.065 0 0 1 .924-4.06A4.654 4.654 0 0 1 10 4.18V2h4v2.18c2.579.614 4 2.858 4 6.32V16l2 1v2Zm1.97-9h-2a8.672 8.672 0 0 0-3.39-6.57L18 2a9.9 9.9 0 0 1 2.825 3.486A11.52 11.52 0 0 1 21.97 10ZM4 10H2c.07-1.567.46-3.103 1.145-4.514A9.9 9.9 0 0 1 5.97 2l1.42 1.43A8.67 8.67 0 0 0 4 10Z"></svg:path>`,
})
export class CiNotificationActiveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciNotificationDeactivatedIcon],svg[ci-notification-deactivated-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22a2 2 0 0 1-2-2h4a2 2 0 0 1-2 2Zm7.585-.1l-2.9-2.9H4v-2l2-1v-5.5a10.57 10.57 0 0 1 .182-2L2.615 4.929L4.03 3.515L21 20.487L19.585 21.9ZM18 14.659L8.28 4.938A4.946 4.946 0 0 1 10 4.18V2h4v2.18c2.58.613 4 2.858 4 6.32v4.16v-.001Z"></svg:path>`,
})
export class CiNotificationDeactivatedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciNotificationDotIcon],svg[ci-notification-dot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22a2 2 0 0 1-2-2h4a2 2 0 0 1-2 2Zm8-3H4v-2l2-1v-5.5a8.065 8.065 0 0 1 .924-4.06A4.654 4.654 0 0 1 10 4.18V2h3.646a4.5 4.5 0 0 0 4.3 7.4c.035.357.052.727.052 1.1V16l2 1v2H20ZM17 8a3 3 0 1 1 .01-6A3 3 0 0 1 17 8Z"></svg:path>`,
})
export class CiNotificationDotIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciNotificationMinusIcon],svg[ci-notification-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22a2.02 2.02 0 0 1-2.01-2h4a2.02 2.02 0 0 1-.15.78a2.042 2.042 0 0 1-1.44 1.18a1.758 1.758 0 0 1-.4.04Zm8-3H4v-2l2-1v-5.5a8.065 8.065 0 0 1 .924-4.06A4.654 4.654 0 0 1 10 4.18V2h4v2.18h.011c.025 0 .049.01.073.016C16.611 4.845 18 7.082 18 10.5V16l2 1v2ZM9 11v2h6v-2H9Z"></svg:path>`,
})
export class CiNotificationMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciNotificationOutlineIcon],svg[ci-notification-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22a2 2 0 0 1-2-2h4a2 2 0 0 1-2 2Zm8-3H4v-2l2-1v-5.5c0-3.462 1.421-5.707 4-6.32V2h4v2.18c2.579.612 4 2.856 4 6.32V16l2 1v2ZM12 5.75A3.6 3.6 0 0 0 8.875 7.2A5.692 5.692 0 0 0 8 10.5V17h8v-6.5a5.693 5.693 0 0 0-.875-3.3A3.6 3.6 0 0 0 12 5.75Z"></svg:path>`,
})
export class CiNotificationOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciNotificationOutlineDotIcon],svg[ci-notification-outline-dot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22a2 2 0 0 1-2-2h4a2 2 0 0 1-2 2Zm8-3H4v-2l2-1v-5.5c0-3.462 1.421-5.707 4-6.32V2h3a4.955 4.955 0 0 0-1 3c0 .251.019.502.056.751H12A3.6 3.6 0 0 0 8.875 7.2A5.692 5.692 0 0 0 8 10.5V17h8v-6.5c0-.211-.007-.414-.021-.6a5.044 5.044 0 0 0 2.006.007c.011.211.015.412.015.6V16l2 1v2ZM17 8a3 3 0 1 1 0-6a3 3 0 0 1 0 6Z"></svg:path>`,
})
export class CiNotificationOutlineDotIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciNotificationOutlineMinusIcon],svg[ci-notification-outline-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22a2 2 0 0 1-2-2h4a2 2 0 0 1-2 2Zm8-3H4v-2l2-1v-5.5c0-3.462 1.421-5.707 4-6.32V2h4v2.18h.041l.042.01C16.611 4.843 18 7.08 18 10.5V16l2 1v2ZM12 5.75A3.6 3.6 0 0 0 8.875 7.2A5.692 5.692 0 0 0 8 10.5V17h8v-6.5a5.693 5.693 0 0 0-.875-3.3A3.6 3.6 0 0 0 12 5.75ZM15 13H9v-2h6v2Z"></svg:path>`,
})
export class CiNotificationOutlineMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciNotificationOutlinePlusIcon],svg[ci-notification-outline-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22a2 2 0 0 1-2-2h4a2 2 0 0 1-2 2Zm8-3H4v-2l2-1v-5.5c0-3.462 1.421-5.707 4-6.32V2h4v2.18c2.579.612 4 2.856 4 6.32V16l2 1v2ZM12 5.75A3.6 3.6 0 0 0 8.875 7.2A5.692 5.692 0 0 0 8 10.5V17h8v-6.5a5.693 5.693 0 0 0-.875-3.3A3.6 3.6 0 0 0 12 5.75ZM13 15h-2v-2H9v-2h2V9h2v2h2v2h-2v2Z"></svg:path>`,
})
export class CiNotificationOutlinePlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciNotificationPlusIcon],svg[ci-notification-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22a2.02 2.02 0 0 1-2.01-2h4a2.02 2.02 0 0 1-.15.78a2.042 2.042 0 0 1-1.44 1.18a1.758 1.758 0 0 1-.4.04Zm8-3H4v-2l2-1v-5.5a8.065 8.065 0 0 1 .924-4.06A4.654 4.654 0 0 1 10 4.18V2h4v2.18h.011c.025 0 .049.01.073.016C16.611 4.845 18 7.082 18 10.5V16l2 1v2ZM9 11v2h2v2h2v-2h2v-2h-2V9h-2v2H9Z"></svg:path>`,
})
export class CiNotificationPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciOctagonIcon],svg[ci-octagon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.405 21H9.594c-.49 0-.734 0-.964-.056a2 2 0 0 1-.578-.239c-.202-.123-.374-.296-.72-.642L3.938 16.67c-.346-.346-.52-.519-.643-.72a2 2 0 0 1-.24-.579C3 15.14 3 14.895 3 14.405V9.594c0-.49 0-.734.055-.964q.075-.308.24-.578c.122-.2.293-.37.633-.71l.01-.01l3.394-3.394l.01-.01c.34-.34.51-.51.71-.633q.27-.165.578-.24C8.86 3 9.105 3 9.594 3h4.811c.49 0 .735 0 .965.055c.204.05.4.13.578.24c.202.124.375.297.72.643l3.395 3.394c.346.346.519.518.642.72q.165.27.24.578c.055.23.055.475.055.964v4.811m0 .001c0 .49 0 .734-.056.964a2 2 0 0 1-.239.578c-.123.202-.296.375-.642.72l-3.394 3.395c-.346.346-.519.519-.72.642q-.271.165-.579.24c-.23.055-.475.055-.964.055"></svg:path>`,
})
export class CiOctagonIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciOctagonCheckIcon],svg[ci-octagon-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m15 10l-4 4l-2-2M7.332 3.938L3.938 7.332l-.004.003c-.343.343-.516.516-.64.717q-.164.27-.239.578C3 8.86 3 9.105 3 9.594v4.812c0 .489 0 .733.055.964a2 2 0 0 0 .24.578c.124.201.297.375.643.72l3.394 3.395c.346.346.518.518.72.642q.27.165.578.24c.23.055.474.055.962.055h4.816c.487 0 .732 0 .962-.055c.204-.05.4-.13.578-.24c.202-.124.375-.296.72-.642l3.395-3.394c.346-.346.519-.52.642-.721q.165-.271.24-.578c.055-.23.055-.475.055-.964V9.594c0-.489 0-.733-.056-.964a2 2 0 0 0-.239-.578c-.123-.202-.296-.374-.642-.72L16.67 3.938c-.346-.346-.519-.52-.72-.643a2 2 0 0 0-.579-.24C15.14 3 14.895 3 14.405 3H9.594c-.49 0-.734 0-.964.055q-.308.075-.578.24c-.2.122-.37.293-.71.633z"></svg:path>`,
})
export class CiOctagonCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
