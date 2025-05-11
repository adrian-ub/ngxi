import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cilTouchAppIcon],svg[cil-touch-app-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M454.423 278.957L328 243.839v-8.185a116 116 0 1 0-104 0V312h-24.418l-18.494-22.6a90.414 90.414 0 0 0-126.43-13.367a20.862 20.862 0 0 0-8.026 33.47L215.084 496H472V302.08a24.07 24.07 0 0 0-17.577-23.123M192 132a84 84 0 1 1 136 65.9V132a52 52 0 0 0-104 0v65.9a83.87 83.87 0 0 1-32-65.9m248 332H229.3L79.141 297.75a58.44 58.44 0 0 1 77.181 11.91l28.1 34.34H256V132a20 20 0 0 1 40 0v136.161l144 40Z"></svg:path>`,
})
export class CilTouchAppIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[cilTransferIcon],svg[cil-transfer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m356.687 228.687l22.626 22.626L494.627 136L379.313 20.687l-22.626 22.626L433.372 120H16v32h417.372zM496 360H78.628l76.685-76.687l-22.626-22.626L17.373 376l115.314 115.313l22.626-22.626L78.628 392H496z"></svg:path>`,
})
export class CilTransferIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[cilTranslateIcon],svg[cil-translate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m230.2 356.821l14.425-30.654a574 574 0 0 1-40.421-44.777q15.881-21.418 29.594-43.958A543.4 543.4 0 0 0 292.212 104H344V72H200V16h-32v56H16v32h59.77a545.1 545.1 0 0 0 71.448 153.959a563 563 0 0 0 20.566-27.031A512.7 512.7 0 0 1 109.13 104h149.737c-29.727 97.53-84.546 169.208-126.64 213.119c-48.993 51.107-91.952 76.86-92.38 77.114l1.621 2.738L48 408l8.14 13.774c1.873-1.106 46.474-27.729 98.389-81.68q15.38-15.982 29.44-32.931a608 608 0 0 0 46.231 49.658M333.722 200L328 212.516L209.379 472h35.185l36.571-80h141.73l36.571 80h35.185L370.278 200ZM328 360h-32.236L328 289.484l24-52.5L408.236 360Z"></svg:path>`,
})
export class CilTranslateIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[cilTrashIcon],svg[cil-trash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M96 472a23.82 23.82 0 0 0 23.579 24h272.842A23.82 23.82 0 0 0 416 472V152H96Zm32-288h256v280H128Z"></svg:path><svg:path fill="currentColor" d="M168 216h32v200h-32zm72 0h32v200h-32zm72 0h32v200h-32zm16-128V40c0-13.458-9.488-24-21.6-24H205.6C193.488 16 184 26.542 184 40v48H64v32h384V88ZM216 48h80v40h-80Z"></svg:path>`,
})
export class CilTrashIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[cilTriangleIcon],svg[cil-triangle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M273.342 66.038a20 20 0 0 0-34.684 0L29.569 430.007a20 20 0 0 0 17.342 29.963h418.178a20 20 0 0 0 17.342-29.962ZM67.644 427.97L256 100.091L444.356 427.97Z"></svg:path>`,
})
export class CilTriangleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[cilTruckIcon],svg[cil-truck-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M441.885 141.649A32.03 32.03 0 0 0 415.669 128H336V80a32.036 32.036 0 0 0-32-32H48a32.036 32.036 0 0 0-32 32v328h53.082a67.982 67.982 0 0 0 133.836 0h106.164a67.982 67.982 0 0 0 133.836 0H496V226.522a23.9 23.9 0 0 0-4.338-13.763ZM47.98 80H304v176H48ZM136 432a36 36 0 1 1 36-36a36.04 36.04 0 0 1-36 36m240 0a36 36 0 1 1 36-36a36.04 36.04 0 0 1-36 36m88-56h-23.006a68 68 0 0 0-129.988 0H200.994a68 68 0 0 0-129.988 0H48v-88h416Zm0-120H336v-96h79.669L464 229.044Z"></svg:path>`,
})
export class CilTruckIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[cilTvIcon],svg[cil-tv-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M472 88.5H302.627l72.5-72.5h-45.254l-72.5 72.5h-2.246l-72.5-72.5h-45.254l72.5 72.5H40a24.03 24.03 0 0 0-24 24v296a24.03 24.03 0 0 0 24 24h112V496h224v-63.5h96a24.03 24.03 0 0 0 24-24v-296a24.03 24.03 0 0 0-24-24M344 464H184v-31.5h160Zm120-63.5H48v-280h416Z"></svg:path>`,
})
export class CilTvIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[cilUnderlineIcon],svg[cil-underline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 496h480V16H16ZM48 48h416v416H48Z"></svg:path><svg:path fill="currentColor" d="M296 152h32v88a63.966 63.966 0 0 1-88 59.313V152h24v-32H136v32h32v88a96 96 0 0 0 192 0v-88h32v-32h-96ZM136 368h256v32H136z"></svg:path>`,
})
export class CilUnderlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[cilUsbIcon],svg[cil-usb-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M320 224h32v40h-80V78.627l17.941 17.941l22.627-22.627L256 17.373l-56.568 56.568l22.627 22.627L240 78.627V264h-72v-42.341a56 56 0 1 0-32 0V296h104v90.341a56 56 0 1 0 32 0V296h112v-72h40V120H320Zm-192-56a24 24 0 1 1 24 24a24.027 24.027 0 0 1-24-24m152 272a24 24 0 1 1-24-24a24.027 24.027 0 0 1 24 24m72-288h40v40h-40Z"></svg:path>`,
})
export class CilUsbIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[cilUserIcon],svg[cil-user-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m411.6 343.656l-72.823-47.334l27.455-50.334A80.2 80.2 0 0 0 376 207.681V128a112 112 0 0 0-224 0v79.681a80.24 80.24 0 0 0 9.768 38.308l27.455 50.333l-72.823 47.334A79.72 79.72 0 0 0 80 410.732V496h368v-85.268a79.73 79.73 0 0 0-36.4-67.076M416 464H112v-53.268a47.84 47.84 0 0 1 21.841-40.246l97.66-63.479l-41.64-76.341A48.15 48.15 0 0 1 184 207.681V128a80 80 0 0 1 160 0v79.681a48.15 48.15 0 0 1-5.861 22.985L296.5 307.007l97.662 63.479A47.84 47.84 0 0 1 416 410.732Z"></svg:path>`,
})
export class CilUserIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[cilUserFemaleIcon],svg[cil-user-female-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m403.6 343.656l-72.823-47.334L344.043 272h23.428a48 48 0 0 0 44.119-66.908L361.581 90.57a112.029 112.029 0 0 0-211.162 0L100.41 205.092A48 48 0 0 0 144.529 272h23.428l13.266 24.322l-72.823 47.334A79.72 79.72 0 0 0 72 410.732V496h368v-85.268a79.73 79.73 0 0 0-36.4-67.076M408 464H104v-53.268a47.84 47.84 0 0 1 21.841-40.246l97.66-63.479L186.953 240h-42.424a16 16 0 0 1-14.72-22.27l50.172-114.9l.448-1.143a80.029 80.029 0 0 1 151.142 0l.2.58l50.42 115.463a16 16 0 0 1-14.72 22.27h-42.424L288.5 307.007l97.661 63.479A47.84 47.84 0 0 1 408 410.732Z"></svg:path>`,
})
export class CilUserFemaleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[cilUserFollowIcon],svg[cil-user-follow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 16A112.127 112.127 0 0 0 96 128v79.681a80.24 80.24 0 0 0 9.768 38.308l27.455 50.333L60.4 343.656A79.72 79.72 0 0 0 24 410.732V496h288v-32H56v-53.268a47.84 47.84 0 0 1 21.841-40.246l97.66-63.479l-41.64-76.341A48.15 48.15 0 0 1 128 207.681V128a80 80 0 0 1 160 0v79.681a48.15 48.15 0 0 1-5.861 22.985L240.5 307.007l71.5 46.476v-38.166l-29.223-19l27.455-50.334A80.2 80.2 0 0 0 320 207.681V128A112.127 112.127 0 0 0 208 16m216 384v-64h-32v64h-64v32h64v64h32v-64h64v-32z"></svg:path>`,
})
export class CilUserFollowIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[cilUserPlusIcon],svg[cil-user-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 16A112.127 112.127 0 0 0 96 128v79.681a80.24 80.24 0 0 0 9.768 38.308l27.455 50.333L60.4 343.656A79.72 79.72 0 0 0 24 410.732V496h288v-32H56v-53.268a47.84 47.84 0 0 1 21.841-40.246l97.66-63.479l-41.64-76.341A48.15 48.15 0 0 1 128 207.681V128a80 80 0 0 1 160 0v79.681a48.15 48.15 0 0 1-5.861 22.985L240.5 307.007l71.5 46.476v-38.166l-29.223-19l27.455-50.334A80.2 80.2 0 0 0 320 207.681V128A112.127 112.127 0 0 0 208 16m216 384v-64h-32v64h-64v32h64v64h32v-64h64v-32z"></svg:path>`,
})
export class CilUserPlusIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[cilUserUnfollowIcon],svg[cil-user-unfollow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 16a112.127 112.127 0 0 0-112 112v79.68a80.24 80.24 0 0 0 9.768 38.308l27.455 50.334L68.4 343.656A79.73 79.73 0 0 0 32 410.732V496h280v-32H64v-53.268a47.84 47.84 0 0 1 21.84-40.246l97.66-63.479l-41.64-76.341A48.15 48.15 0 0 1 136 207.68V128a80 80 0 0 1 160 0v79.68a48.14 48.14 0 0 1-5.861 22.985L248.5 307.007l63.5 41.276v-38.166l-21.223-13.8l27.454-50.334A80.2 80.2 0 0 0 328 207.68V128A112.127 112.127 0 0 0 216 16m267.314 339.314l-22.628-22.628L412 381.372l-48.686-48.686l-22.628 22.628L389.372 404l-48.686 48.686l22.628 22.628L412 426.628l48.686 48.686l22.628-22.628L434.628 404z"></svg:path>`,
})
export class CilUserUnfollowIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[cilUserXIcon],svg[cil-user-x-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 16a112.127 112.127 0 0 0-112 112v79.68a80.24 80.24 0 0 0 9.768 38.308l27.455 50.334L68.4 343.656A79.73 79.73 0 0 0 32 410.732V496h280v-32H64v-53.268a47.84 47.84 0 0 1 21.84-40.246l97.66-63.479l-41.64-76.341A48.15 48.15 0 0 1 136 207.68V128a80 80 0 0 1 160 0v79.68a48.14 48.14 0 0 1-5.861 22.985L248.5 307.007l63.5 41.276v-38.166l-21.223-13.8l27.454-50.334A80.2 80.2 0 0 0 328 207.68V128A112.127 112.127 0 0 0 216 16m267.314 339.314l-22.628-22.628L412 381.372l-48.686-48.686l-22.628 22.628L389.372 404l-48.686 48.686l22.628 22.628L412 426.628l48.686 48.686l22.628-22.628L434.628 404z"></svg:path>`,
})
export class CilUserXIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[cilVectorIcon],svg[cil-vector-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M368 184h47.458c-4.664 69.192-39.8 119.633-95.458 140.869V288H192v36.869C136.344 303.633 101.206 253.192 96.542 184H144V56H16v128h48.471c2.993 50.374 20.242 93.872 50.341 126.537A170.7 170.7 0 0 0 166.7 348.9l-48.9 16.3a57 57 0 0 0-8.608-9.083a56.63 56.63 0 0 0-79.807 6.693A56.635 56.635 0 0 0 72.535 456q2.4 0 4.827-.2a56.61 56.61 0 0 0 51.731-60.634L192 374.2V416h128v-41.8l62.9 20.963a57.4 57.4 0 0 0 .043 8.939A56.64 56.64 0 0 0 439.274 456q2.4 0 4.828-.2a56.63 56.63 0 1 0-47.982-92.988c-.662.782-1.3 1.582-1.91 2.392L345.3 348.9a170.7 170.7 0 0 0 51.891-38.363c30.1-32.665 47.348-76.163 50.341-126.537H496V56H368ZM48 152V88h64v64Zm43.44 263.27a24.629 24.629 0 0 1-37.62-31.8a24.47 24.47 0 0 1 16.752-8.644q1.053-.087 2.1-.088A24.631 24.631 0 0 1 91.44 415.27M288 384h-64v-64h64Zm132.56-.529a24.47 24.47 0 0 1 16.752-8.644q1.053-.087 2.1-.088a24.635 24.635 0 1 1-18.851 8.733ZM400 88h64v64h-64Z"></svg:path>`,
})
export class CilVectorIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[cilVerticalAlignBottomIcon],svg[cil-vertical-align-bottom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M356.117 316.117L333.49 293.49L272 354.98V56h-32v298.98l-61.49-61.49l-22.627 22.627L256 416.236zM16 464h480v32H16z"></svg:path>`,
})
export class CilVerticalAlignBottomIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[cilVerticalAlignBottom1Icon],svg[cil-vertical-align-bottom1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M6.75.75h-6v19.875h6zm-1.5 18.375h-3V2.25h3z" fill="currentColor"></svg:path><svg:path d="M15 7.948H9v12.677h6zm-1.5 11.177h-3V9.448h3z" fill="currentColor"></svg:path><svg:path d="M17.25.75v19.875h6V.75zm4.5 18.375h-3V2.25h3z" fill="currentColor"></svg:path><svg:path d="M.75 21.75h22.5v1.5H.75v-1.5z" fill="currentColor"></svg:path>`,
})
export class CilVerticalAlignBottom1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[cilVerticalAlignCenterIcon],svg[cil-vertical-align-center-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 16v146.177l-53.491-53.49l-22.627 22.626L256 223.431l92.118-92.118l-22.627-22.626L272 162.177V16zM16 240h480v32H16zm147.882 140.687l22.627 22.626L240 349.823V496h32V349.823l53.491 53.49l22.627-22.626L256 288.569z"></svg:path>`,
})
export class CilVerticalAlignCenterIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[cilVerticalAlignCenter1Icon],svg[cil-vertical-align-center1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M17.25 23.25h6v-9h-6zm1.5-7.5h3v6h-3z" fill="currentColor"></svg:path><svg:path d="M9 19.875h6V14.25H9zm1.5-4.125h3v2.625h-3z" fill="currentColor"></svg:path><svg:path d="M.75 23.25h6v-9h-6zm1.5-7.5h3v6h-3z" fill="currentColor"></svg:path><svg:path d="M6.75.75h-6v9h6zm-1.5 7.5h-3v-6h3z" fill="currentColor"></svg:path><svg:path d="M15 4.5H9v5.25h6zm-1.5 3.75h-3V6h3z" fill="currentColor"></svg:path><svg:path d="M17.25.75v9h6v-9zm4.5 7.5h-3v-6h3z" fill="currentColor"></svg:path><svg:path d="M.75 11.25h22.5v1.5H.75v-1.5z" fill="currentColor"></svg:path>`,
})
export class CilVerticalAlignCenter1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[cilVerticalAlignTopIcon],svg[cil-vertical-align-top-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 16h480v32H16zm139.883 179.883l22.627 22.627L240 157.02V456h32V157.02l61.49 61.49l22.627-22.627L256 95.764z"></svg:path>`,
})
export class CilVerticalAlignTopIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[cilVerticalAlignTop1Icon],svg[cil-vertical-align-top1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M17.25 23.25h6V3.75h-6zm1.5-18h3v16.5h-3z" fill="currentColor"></svg:path><svg:path d="M9 16.125h6V3.75H9zM10.5 5.25h3v9.375h-3z" fill="currentColor"></svg:path><svg:path d="M.75 23.25h6V3.75h-6zm1.5-18h3v16.5h-3z" fill="currentColor"></svg:path><svg:path d="M.75.75h22.5v1.5H.75V.75z" fill="currentColor"></svg:path>`,
})
export class CilVerticalAlignTop1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[cilVideoIcon],svg[cil-video-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m461 132l-101 39.277V72H16v368h344V332.723L461 372h35V132Zm3 206.833l-136-52.89V408H48V104h280v114.057l136-52.89Z"></svg:path>`,
})
export class CilVideoIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[cilVideogameIcon],svg[cil-videogame-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 360h480V120H16Zm32-208h416v176H48Z"></svg:path><svg:path fill="currentColor" d="M152 184h-32v40H80v32h40v40h32v-40h40v-32h-40zm184 72h32v32h-32zm64-64h32v32h-32z"></svg:path>`,
})
export class CilVideogameIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[cilViewColumnIcon],svg[cil-view-column-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 64v384h480V64Zm304 32v320H192V96ZM48 96h112v320H48Zm416 320H352V96h112Z"></svg:path>`,
})
export class CilViewColumnIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[cilViewModuleIcon],svg[cil-view-module-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 64v384h480V64Zm448 176H352V96h112Zm-272 0V96h128v144Zm128 32v144H192V272ZM160 96v144H48V96ZM48 272h112v144H48Zm304 144V272h112v144Z"></svg:path>`,
})
export class CilViewModuleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[cilViewQuiltIcon],svg[cil-view-quilt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 64v384h480V64Zm448 176H192V96h272Zm-272 32h120v144H192ZM48 96h112v320H48Zm296 320V272h120v144Z"></svg:path>`,
})
export class CilViewQuiltIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[cilViewStreamIcon],svg[cil-view-stream-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 64v384h480V64Zm448 32v144H48V96ZM48 416V272h416v144Z"></svg:path>`,
})
export class CilViewStreamIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[cilVoiceIcon],svg[cil-voice-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M410.7 286.969c.428-.853.848-1.712 1.252-2.564L456 191.915v-22.891l-3.063-4.209c-.579-.794-58.045-79.741-77.516-105.7c-21.563-28.752-42.328-41.573-67.329-41.573c-19.5 0-39.3 9.269-58.825 27.549A170 170 0 0 0 236 59.063a170 170 0 0 0-13.267-13.973c-19.528-18.28-39.32-27.549-58.825-27.549c-25 0-45.766 12.821-67.329 41.573c-19.471 25.96-76.937 104.907-77.516 105.7L16 169.024v22.891l44.037 92.477q.617 1.3 1.262 2.583a134.9 134.9 0 0 0 50.722 54.836a138.54 138.54 0 0 0 71.9 20.065h104.156a138.54 138.54 0 0 0 71.9-20.065a134.9 134.9 0 0 0 50.723-54.842m-226.777 42.907c-39.666 0-76.572-22.473-94.02-57.247a99 99 0 0 1-.968-1.982L48 184.685v-5.246c12.2-16.749 57.436-78.8 74.179-101.126c19.015-25.354 31.765-28.772 41.729-28.772c23.113 0 47.41 28.439 54.806 39.374L223.468 96h25.064l4.754-7.085c6.854-10.215 31.634-39.374 54.806-39.374c9.964 0 22.714 3.418 41.729 28.773C366.563 100.637 411.8 162.69 424 179.439v5.246l-40.941 85.976c-.314.66-.635 1.317-.959 1.962c-17.451 34.78-54.357 57.253-94.023 57.253Z"></svg:path><svg:path fill="currentColor" d="m304.429 112.851l-10.073 11.394c-.233.265-24.313 26.43-58.356 26.43c-34.158 0-58.166-26.219-58.356-26.43l-10.073-11.394l-83.641 66.688l44.393 89.547l11.457-1.637a680.1 680.1 0 0 1 192.44 0l11.457 1.637l44.393-89.547Zm20.815 121.373a712 712 0 0 0-178.488 0l-22.686-45.763l40.842-32.561c13.575 11.028 38.644 26.778 71.088 26.778s57.513-15.75 71.088-26.778l40.842 32.564Zm17.526 149.198v32a110.96 110.96 0 0 0 107-82.1l-30.92-8.285a78.9 78.9 0 0 1-76.08 58.385"></svg:path><svg:path fill="currentColor" d="M480.679 341.605c-16.325 60.868-71.962 105.817-137.909 105.817v32c80.729 0 148.837-55.024 168.82-129.534Z"></svg:path>`,
})
export class CilVoiceIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[cilVoiceOverRecordIcon],svg[cil-voice-over-record-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M342.322 104.837A100.44 100.44 0 0 1 342.457 231l24.943 20.02a132.37 132.37 0 0 0-.178-166.261ZM432.147 32.4l-24.989 20.15a183.6 183.6 0 0 1 .248 230.594l25.03 20.1a216.05 216.05 0 0 0-.289-270.844"></svg:path><svg:path fill="currentColor" d="m347.6 343.656l-72.822-47.334l27.455-50.334A80.2 80.2 0 0 0 312 207.681V128a112 112 0 0 0-224 0v79.681a80.24 80.24 0 0 0 9.768 38.308l27.455 50.333L52.4 343.656A79.72 79.72 0 0 0 16 410.732V496h368v-85.268a79.72 79.72 0 0 0-36.4-67.076M352 464H48v-53.268a47.84 47.84 0 0 1 21.841-40.246l97.661-63.48l-41.641-76.34A48.15 48.15 0 0 1 120 207.681V128a80 80 0 0 1 160 0v79.681a48.14 48.14 0 0 1-5.861 22.984L232.5 307.007l97.662 63.479A47.84 47.84 0 0 1 352 410.732Z"></svg:path>`,
})
export class CilVoiceOverRecordIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[cilVolumeHighIcon],svg[cil-volume-high-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M145.373 120H16v272h129.373l104 104H288V16h-38.627ZM128 360H48V152h80Zm128 97.373l-96-96V150.627l96-96ZM408 256a88.1 88.1 0 0 0-88-88v32a56 56 0 0 1 0 112v32a88.1 88.1 0 0 0 88-88"></svg:path><svg:path fill="currentColor" d="M320 57.445v32.277C401.307 101.4 464 171.512 464 256s-62.693 154.6-144 166.278v32.277C419.005 442.66 496 358.158 496 256S419.005 69.34 320 57.445"></svg:path>`,
})
export class CilVolumeHighIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[cilVolumeLowIcon],svg[cil-volume-low-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M320 168v32a56 56 0 0 1 0 112v32a88 88 0 0 0 0-176m-174.627-48H16v272h129.373l104 104H288V16h-38.627ZM128 360H48V152h80Zm128 97.373l-96-96V150.627l96-96Z"></svg:path>`,
})
export class CilVolumeLowIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[cilVolumeOffIcon],svg[cil-volume-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m490.51 187.313l-22.628-22.626l-64.284 64.284l-64.285-64.284l-22.627 22.626l64.285 64.285l-64.285 64.285l22.627 22.627l64.285-64.284l64.284 64.284l22.628-22.627l-64.285-64.285zM145.373 120H16v272h129.373l104 104H288V16h-38.627ZM128 360H48V152h80Zm128 97.373l-96-96V150.627l96-96Z"></svg:path>`,
})
export class CilVolumeOffIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[cilWalkIcon],svg[cil-walk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="309.912" cy="82.088" r="34.088" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="m322 143.462l-60.585-20.64l-77.615 28.226A24.07 24.07 0 0 0 168 173.6V232h32v-52.793l48.811-17.749L158.622 440h33.613l50.082-155.811l7.871 2.568L288 356.079V440h32v-85.96a24.1 24.1 0 0 0-2.931-11.493l-37.56-68.861l28.949-88.715l19.27 34.684A24.01 24.01 0 0 0 348.707 232H400v-32h-46.586Z"></svg:path>`,
})
export class CilWalkIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[cilWalletIcon],svg[cil-wallet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M489.972 119.059a23.84 23.84 0 0 0-17-7.059H456V72a24.027 24.027 0 0 0-24-24H86.627A70.63 70.63 0 0 0 16 118.627v274.746A70.63 70.63 0 0 0 86.627 464h385.4a24.047 24.047 0 0 0 24-23.923l.944-303.995a23.84 23.84 0 0 0-6.999-17.023M464.053 432H86.627A38.627 38.627 0 0 1 48 393.373V118.627A38.627 38.627 0 0 1 86.627 80H424v32H88v32h376.947Z"></svg:path><svg:path fill="currentColor" d="M392 264h32v32h-32z"></svg:path>`,
})
export class CilWalletIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[cilWallpaperIcon],svg[cil-wallpaper-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M344 112h40v40h-40zM72 72h152V40H40v184h32z"></svg:path><svg:path fill="currentColor" d="M288 40v32h152v152h32V40zM72 288H40v184h184v-32H72z"></svg:path><svg:path fill="currentColor" d="m280.5 308.873l-91-91l-85.5 85.5v45.254l85.5-85.499L334.372 408h45.255l-76.5-76.5l72.104-72.104L440 324.165V440H288v32h184V312l-96.769-97.857z"></svg:path>`,
})
export class CilWallpaperIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[cilWarningIcon],svg[cil-warning-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 176h32v176h-32zm0 208h32v32h-32z"></svg:path><svg:path fill="currentColor" d="M274.014 16h-36.028L16 445.174V496h480v-50.826ZM464 464H48v-11.041L256 50.826l208 402.133Z"></svg:path>`,
})
export class CilWarningIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[cilWatchIcon],svg[cil-watch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M349.279 16H162.721l-24.772 132.116a159.7 159.7 0 0 0 0 215.768L162.721 496h186.558l24.772-132.116a159.7 159.7 0 0 0 0-215.768Zm-160 32h133.442l13 69.311a159.75 159.75 0 0 0-159.434 0Zm133.442 416H189.279l-13-69.311a159.75 159.75 0 0 0 159.434 0ZM256 384a128 128 0 1 1 128-128a128.145 128.145 0 0 1-128 128"></svg:path>`,
})
export class CilWatchIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[cilWcIcon],svg[cil-wc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M132 139.824a61.912 61.912 0 1 0-61.912-61.912A61.98 61.98 0 0 0 132 139.824M132 48a29.912 29.912 0 1 1-29.912 29.912A29.947 29.947 0 0 1 132 48m44 104H88a48.053 48.053 0 0 0-48 48v152h32v144h120V352h32V200a48.053 48.053 0 0 0-48-48m16 168h-32v144h-56V320H72V200a16.02 16.02 0 0 1 16-16h88a16.02 16.02 0 0 1 16 16Zm178.088-180.176a61.912 61.912 0 1 0-61.912-61.912a61.98 61.98 0 0 0 61.912 61.912m0-91.824a29.912 29.912 0 1 1-29.912 29.912A29.947 29.947 0 0 1 370.088 48m55.671 145.354a61.586 61.586 0 0 0-115.833-1.392L248 357.1V400h64v96h104v-96h64v-50.7ZM448 368h-64v96h-40v-96h-64v-5.1l59.889-159.7a29.585 29.585 0 0 1 55.645.669L448 354.7Z"></svg:path>`,
})
export class CilWcIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[cilWeightlifitngIcon],svg[cil-weightlifitng-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="256" cy="156" r="36" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M400 16v56H112V16H16v144h96v-56h25.278l7.524 90.289l79.2 39.6V336h-79.138l-7.413 133.426H169.5L175.136 368h161.728l5.636 101.426h32.05L367.136 336H288V233.889l79.2-39.6L374.722 104H400v56h96V16ZM80 72v56H48V48h32Zm256.8 101.71l-80.8 40.4l-80.8-40.4l-5.811-69.71h173.222ZM464 128h-32V48h32Z"></svg:path>`,
})
export class CilWeightlifitngIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[cilWheelchairIcon],svg[cil-wheelchair-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="221.912" cy="66.088" r="34.088" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="m460.12 360.478l-47.943 11.985L393 282.971A24.126 24.126 0 0 0 369.533 264h-88.705l-6.462-56H384v-32H270.674l-4.134-35.826a24 24 0 0 0-26.593-21.091l-39.736 4.585L220.1 296h142.97l24.758 115.537l80.057-20.015Z"></svg:path><svg:path fill="currentColor" d="M224 448a120 120 0 0 1-45.248-231.135l-3.779-32.75C115.143 204.558 72 261.334 72 328c0 83.813 68.187 152 152 152a152.06 152.06 0 0 0 130.044-73.378L344 360c-16 48-61.4 88-120 88"></svg:path>`,
})
export class CilWheelchairIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[cilWifiSignal0Icon],svg[cil-wifi-signal-0-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M237.778 480h36.444L504 151.842V124.4l-.215-.15a432.02 432.02 0 0 0-495.57 0L8 124.4v27.438ZM256 78.128a397.87 397.87 0 0 1 216.144 63.419L256 450.232L39.856 141.547A397.87 397.87 0 0 1 256 78.128"></svg:path>`,
})
export class CilWifiSignal0Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[cilWifiSignal1Icon],svg[cil-wifi-signal-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M237.778 480h36.444L504 151.842V124.4l-.215-.15a432.02 432.02 0 0 0-495.57 0L8 124.4v27.438Zm-58.911-139.925a158.22 158.22 0 0 1 154.266 0L256 450.232ZM256 78.128a397.87 397.87 0 0 1 216.144 63.419L351.561 313.758a190.14 190.14 0 0 0-191.122 0L39.856 141.547A397.87 397.87 0 0 1 256 78.128"></svg:path>`,
})
export class CilWifiSignal1Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[cilWifiSignal2Icon],svg[cil-wifi-signal-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M503.785 124.254a432.02 432.02 0 0 0-495.57 0L8 124.4v27.438L86.881 264.5L237.778 480h36.444l150.9-215.5L504 151.842V124.4Zm-313.961 231.47l75.96-117.392a240 240 0 0 1 43.276 5.686l-95.22 146Zm-19.809-28.291l-38.265-54.649a238.2 238.2 0 0 1 94.9-32.873Zm63.606 90.838l107.373-164.639a239.3 239.3 0 0 1 39.256 19.152L256 450.232Zm165.018-171.748a272.03 272.03 0 0 0-285.278 0l-73.5-104.976a400.04 400.04 0 0 1 432.288 0Z"></svg:path>`,
})
export class CilWifiSignal2Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[cilWifiSignal3Icon],svg[cil-wifi-signal-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M503.785 124.254a432.02 432.02 0 0 0-495.57 0L8 124.4v27.438l33 47.126L237.778 480h36.444l196.783-281.036l33-47.122V124.4ZM189.87 355.789l125.621-192.127a317 317 0 0 1 42.184 10.981L213.968 390.2Zm-19.77-28.236l-26.453-37.778l89.523-130.843q11.354-.8 22.83-.8q12.2 0 24.276.918Zm-46.064-65.786l-38.248-54.622a318 318 0 0 1 104.534-42.258Zm109.633 156.574l154.47-231.7a320.5 320.5 0 0 1 38.073 20.509L256 450.232Zm210.91-237.427a351.95 351.95 0 0 0-377.158 0l-27.565-39.367a400.04 400.04 0 0 1 432.288 0Z"></svg:path>`,
})
export class CilWifiSignal3Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[cilWifiSignal4Icon],svg[cil-wifi-signal-4-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M503.785 124.254a432.02 432.02 0 0 0-495.57 0L8 124.4v27.437L237.778 480h36.444L504 151.841V124.4Zm-100.458-18.088L213.968 390.2l-24.076-34.38L362.877 92.583a396 396 0 0 1 40.45 13.583M286.4 79.278a400 400 0 0 1 43.232 5.631l-159.49 242.7l-26.536-37.9ZM123.963 261.664l-22.8-32.563l97.97-146.955a403 403 0 0 1 49.324-3.946Zm30.751-170.579l-73.253 109.88l-41.6-59.418a398.1 398.1 0 0 1 114.853-50.462M256 450.232l-22.331-31.892l199.315-298.972a402 402 0 0 1 39.16 22.179Z"></svg:path>`,
})
export class CilWifiSignal4Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[cilWifiSignalOffIcon],svg[cil-wifi-signal-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M503.785 124.254a431.82 431.82 0 0 0-332.477-69.728L192.9 83.09a403 403 0 0 1 63.1-4.962a397.87 397.87 0 0 1 216.144 63.419L359.092 303l20.278 26.832L504 151.842V124.4ZM82.542 16v21.9l25.874 34.237a431.4 431.4 0 0 0-100.2 52.117L8 124.4v27.438L237.778 480h36.444l68.5-97.829L404.564 464h22.986v-22.658L106.1 16Zm239.9 339.34L256 450.232L39.856 141.547a399 399 0 0 1 88.759-42.683Z"></svg:path>`,
})
export class CilWifiSignalOffIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[cilWindowIcon],svg[cil-window-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M424 440V48H88v392H48v32h416v-32ZM120 80h120v120H120Zm0 152h120v144H120Zm272 208H120v-32h272Zm0-64H272V232h120Zm0-176H272V80h120Z"></svg:path>`,
})
export class CilWindowIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[cilWindowMaximizeIcon],svg[cil-window-maximize-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M472 48H40.335a24.027 24.027 0 0 0-24 24v384a24.027 24.027 0 0 0 24 24H472a24.027 24.027 0 0 0 24-24V72a24.027 24.027 0 0 0-24-24m-8 32v71.981l-415.665-.491V80ZM48.335 448V183.49l415.665.491V448Z"></svg:path>`,
})
export class CilWindowMaximizeIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[cilWindowMinimizeIcon],svg[cil-window-minimize-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M48 448h416v32H48z"></svg:path>`,
})
export class CilWindowMinimizeIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[cilWindowRestoreIcon],svg[cil-window-restore-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M352 153H40.247a24.03 24.03 0 0 0-24 24v281a24.03 24.03 0 0 0 24 24H352a24.03 24.03 0 0 0 24-24V177a24.03 24.03 0 0 0-24-24m-8 32v45.22H48.247V185ZM48.247 450V262.22H344V450Z"></svg:path><svg:path fill="currentColor" d="M472 32H152a24.03 24.03 0 0 0-24 24v65h32V64h304v275.143h-56v32h64a24.03 24.03 0 0 0 24-24V56a24.03 24.03 0 0 0-24-24"></svg:path>`,
})
export class CilWindowRestoreIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[cilWrapTextIcon],svg[cil-wrap-text-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 232h160v32H16zm0 160h392v32H16zM408 72H16v32h392c30.878 0 56 28.71 56 64s-25.122 64-56 64h-63.2v-69.228L210 249l134.8 83.785V264H408c48.523 0 88-43.065 88-96s-39.477-96-88-96m-95.2 203.217L270 248.609l42.8-27.381Z"></svg:path>`,
})
export class CilWrapTextIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[cilXIcon],svg[cil-x-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m427.314 107.313l-22.628-22.626L256 233.373L107.314 84.687l-22.628 22.626L233.373 256L84.686 404.687l22.628 22.626L256 278.627l148.686 148.686l22.628-22.626L278.627 256z"></svg:path>`,
})
export class CilXIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[cilXCircleIcon],svg[cil-x-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m348.071 141.302l-87.763 87.763l-87.763-87.763l-22.628 22.627l87.764 87.763l-87.764 87.764l22.628 22.627l87.763-87.763l87.763 87.763l22.628-22.627l-87.764-87.764l87.764-87.763z"></svg:path><svg:path fill="currentColor" d="M425.706 86.294A240 240 0 0 0 86.294 425.706A240 240 0 0 0 425.706 86.294M256 464c-114.691 0-208-93.309-208-208S141.309 48 256 48s208 93.309 208 208s-93.309 208-208 208"></svg:path>`,
})
export class CilXCircleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[cilYenIcon],svg[cil-yen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m396.641 97.81l-25.282-19.62l-114.946 148.122L148.938 78.587l-25.876 18.826L238.438 256h-85.967v32H240v34.823h-87.529v32H240V432h32v-77.177h87.529v-32H272V288h87.529v-32h-85.65z"></svg:path>`,
})
export class CilYenIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[cilZoomIcon],svg[cil-zoom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m479.6 399.716l-81.084-81.084l-62.368-25.767A175 175 0 0 0 368 192c0-97.047-78.953-176-176-176S16 94.953 16 192s78.953 176 176 176a175.03 175.03 0 0 0 101.619-32.377l25.7 62.2l81.081 81.088a56 56 0 1 0 79.2-79.195M48 192c0-79.4 64.6-144 144-144s144 64.6 144 144s-64.6 144-144 144S48 271.4 48 192m408.971 264.284a24.03 24.03 0 0 1-33.942 0l-76.572-76.572l-23.894-57.835l57.837 23.894l76.573 76.572a24.03 24.03 0 0 1-.002 33.941"></svg:path>`,
})
export class CilZoomIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[cilZoomInIcon],svg[cil-zoom-in-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 96h-32v80H96v32h80v80h32v-80h80v-32h-80z"></svg:path><svg:path fill="currentColor" d="m479.6 400.4l-81.084-81.084l-62.368-25.767A175 175 0 0 0 368 192.687c0-97.047-78.953-176-176-176s-176 78.953-176 176s78.953 176 176 176a175.03 175.03 0 0 0 101.619-32.378l25.7 62.2L400.4 479.6a56 56 0 0 0 79.2-79.2M48 192.687c0-79.4 64.6-144 144-144s144 64.6 144 144s-64.6 144-144 144s-144-64.599-144-144m408.971 264.284a24.03 24.03 0 0 1-33.942 0L346.457 380.4l-23.894-57.835l57.837 23.892l76.573 76.572a24.03 24.03 0 0 1-.002 33.942"></svg:path>`,
})
export class CilZoomInIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[cilZoomOutIcon],svg[cil-zoom-out-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M96.344 175.313h192v32h-192z"></svg:path><svg:path fill="currentColor" d="m479.6 399.716l-81.084-81.084l-62.368-25.767A175 175 0 0 0 368 192c0-97.047-78.953-176-176-176S16 94.953 16 192s78.953 176 176 176a175.03 175.03 0 0 0 101.619-32.377l25.7 62.2l81.081 81.088a56 56 0 1 0 79.2-79.195M48 192c0-79.4 64.6-144 144-144s144 64.6 144 144s-64.6 144-144 144S48 271.4 48 192m408.971 264.284a24.03 24.03 0 0 1-33.942 0l-76.572-76.572l-23.894-57.835l57.837 23.894l76.573 76.572a24.03 24.03 0 0 1-.002 33.941"></svg:path>`,
})
export class CilZoomOutIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[cilAppleIcon],svg[cil-apple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M452.415 213.048c-10.609-27.192-27.511-48.256-48.92-61.078a157.7 157.7 0 0 1-17.583 26.757l.115.063c31.881 18.323 50.423 65.148 45.091 113.871c-8.833 80.721-33.35 136.043-69.036 155.775c-23.2 12.827-52.133 11-86-5.424l-3.308-1.6h-24.389l-3.307 1.6c-33.867 16.426-62.8 18.251-86 5.424c-35.685-19.732-60.2-75.054-69.036-155.775c-5.332-48.723 13.211-95.549 45.091-113.871a66.6 66.6 0 0 1 33.74-8.768c24.143 0 51.966 11.311 82.2 33.656l1.078.8s43.583-5.299 60.849-13.138c52.021-23.617 63.5-61.156 65.536-66.254a121.9 121.9 0 0 0-1.021-93.559l-4.073-10.169l-10.949.11A122.777 122.777 0 0 0 242.039 159.7c-18.9-10.59-37.278-17.343-54.884-20.14c-24.943-3.965-47.811-.1-67.968 11.486c-22.138 12.724-39.581 34.164-50.442 62c-9.874 25.307-13.608 54.817-10.514 83.094c10.142 92.681 39.659 155.027 85.361 180.3a99.9 99.9 0 0 0 49.1 12.543c19.585 0 40.629-5.194 62.975-15.575h9.83c42.394 19.693 80.085 20.718 112.071 3.032c45.7-25.271 75.221-87.617 85.363-180.3c3.092-28.275-.642-57.785-10.516-83.092M328.019 60.826a90.5 90.5 0 0 1 23.693-6.564a90.8 90.8 0 0 1-75.056 115.205a90.84 90.84 0 0 1 51.363-108.641"></svg:path>`,
})
export class CilAppleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[cilAlignLeftIcon],svg[cil-align-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 64h480v32H16zm0 88h328v32H16zm0 88h480v32H16zm0 88h328v32H16zm0 88h480v32H16z"></svg:path>`,
})
export class CilAlignLeftIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[cilAnimalIcon],svg[cil-animal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M382.825 304.576a131.562 131.562 0 0 0-253.65 0l-18.248 66.15A80 80 0 0 0 188.046 472h135.908a80 80 0 0 0 77.119-101.274Zm-20.682 116.5A47.64 47.64 0 0 1 323.954 440H188.046a48 48 0 0 1-46.272-60.765l18.248-66.149a99.563 99.563 0 0 1 191.956 0l18.248 66.149a47.64 47.64 0 0 1-8.083 41.845ZM146.1 230.31c2.784-17.4-.908-36.027-10.4-52.463s-23.78-28.947-40.237-35.236c-17.624-6.731-35.6-5.659-50.634 3.017c-29.887 17.256-37.752 59.785-17.529 94.805c9.489 16.436 23.778 28.95 40.235 35.236a64 64 0 0 0 22.863 4.371a55.13 55.13 0 0 0 27.771-7.389c15.025-8.677 24.945-23.714 27.931-42.341m-31.6-5.058c-1.43 8.929-5.81 15.92-12.333 19.686S87.4 249 78.95 245.775c-9.613-3.671-18.115-11.251-23.941-21.342c-11.2-19.4-8.538-42.8 5.82-51.092a23.5 23.5 0 0 1 11.847-3.058a32 32 0 0 1 11.368 2.217c9.613 3.673 18.115 11.252 23.941 21.343s8.139 21.248 6.515 31.409m35.066-61.235c11.362 9.083 24.337 13.813 37.458 13.812a55 55 0 0 0 11.689-1.261c33.723-7.331 54.17-45.443 45.58-84.958c-4.03-18.546-13.828-34.817-27.588-45.818c-14.735-11.78-32.189-16.239-49.147-12.551c-33.722 7.33-54.169 45.442-45.58 84.957c4.031 18.547 13.829 34.818 27.588 45.819m24.788-99.506a22.3 22.3 0 0 1 4.732-.5c5.948 0 12.066 2.327 17.637 6.781c8.037 6.425 13.826 16.234 16.3 27.621c4.76 21.895-4.906 43.368-21.107 46.89c-7.361 1.6-15.305-.628-22.367-6.275c-8.037-6.426-13.826-16.235-16.3-27.621c-4.761-21.901 4.905-43.374 21.105-46.896m292.817 81.117c-15.028-8.676-33.013-9.748-50.634-3.017c-16.457 6.287-30.746 18.8-40.235 35.236s-13.182 35.067-10.4 52.463c2.982 18.627 12.9 33.664 27.931 42.341a55.1 55.1 0 0 0 27.771 7.389a64 64 0 0 0 22.863-4.371c16.457-6.286 30.746-18.8 40.235-35.236c20.221-35.02 12.356-77.549-17.531-94.805m-10.18 78.805c-5.826 10.091-14.328 17.671-23.941 21.342c-8.446 3.228-16.692 2.931-23.215-.837s-10.9-10.757-12.333-19.686c-1.626-10.161.686-21.314 6.513-31.4s14.328-17.67 23.941-21.343a32 32 0 0 1 11.368-2.221a23.5 23.5 0 0 1 11.847 3.058c14.358 8.285 17.023 31.682 5.82 51.087m-143.704-47.865a55 55 0 0 0 11.689 1.261c13.12 0 26.1-4.729 37.458-13.812c13.759-11 23.557-27.272 27.588-45.818c8.589-39.515-11.858-77.627-45.58-84.957c-16.957-3.686-34.412.77-49.147 12.551c-13.76 11-23.558 27.272-27.588 45.817c-8.59 39.515 11.857 77.627 45.58 84.958m-14.31-78.16c2.474-11.387 8.263-21.2 16.3-27.621c5.572-4.454 11.689-6.781 17.637-6.781a22.3 22.3 0 0 1 4.732.5c16.2 3.522 25.866 25 21.107 46.89c-2.476 11.387-8.265 21.2-16.3 27.622c-7.061 5.646-15 7.874-22.367 6.275c-16.203-3.517-25.869-24.993-21.109-46.885"></svg:path>`,
})
export class CilAnimalIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[cilApplicationsIcon],svg[cil-applications-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M88 32a64 64 0 1 0 64 64a64.07 64.07 0 0 0-64-64m0 96a32 32 0 1 1 32-32a32.036 32.036 0 0 1-32 32m168-96a64 64 0 1 0 64 64a64.07 64.07 0 0 0-64-64m0 96a32 32 0 1 1 32-32a32.036 32.036 0 0 1-32 32m168 32a64 64 0 1 0-64-64a64.07 64.07 0 0 0 64 64m0-96a32 32 0 1 1-32 32a32.036 32.036 0 0 1 32-32M88 192a64 64 0 1 0 64 64a64.07 64.07 0 0 0-64-64m0 96a32 32 0 1 1 32-32a32.036 32.036 0 0 1-32 32m168-96a64 64 0 1 0 64 64a64.07 64.07 0 0 0-64-64m0 96a32 32 0 1 1 32-32a32.036 32.036 0 0 1-32 32m168-96a64 64 0 1 0 64 64a64.07 64.07 0 0 0-64-64m0 96a32 32 0 1 1 32-32a32.036 32.036 0 0 1-32 32M88 352a64 64 0 1 0 64 64a64.07 64.07 0 0 0-64-64m0 96a32 32 0 1 1 32-32a32.036 32.036 0 0 1-32 32m168-96a64 64 0 1 0 64 64a64.07 64.07 0 0 0-64-64m0 96a32 32 0 1 1 32-32a32.036 32.036 0 0 1-32 32m168-96a64 64 0 1 0 64 64a64.07 64.07 0 0 0-64-64m0 96a32 32 0 1 1 32-32a32.036 32.036 0 0 1-32 32"></svg:path>`,
})
export class CilApplicationsIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
