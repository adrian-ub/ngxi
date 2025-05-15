import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riPlayListAddLineIcon],svg[ri-play-list-add-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 18h10v2H2zm0-7h20v2H2zm0-7h20v2H2zm16 14v-3h2v3h3v2h-3v3h-2v-3h-3v-2z"></svg:path>`,
})
export class RiPlayListAddLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riPlayListLineIcon],svg[ri-play-list-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 18h10v2H2zm0-7h14v2H2zm0-7h20v2H2zm17 11.17V9h5v2h-3v7a3 3 0 1 1-2-2.83M18 19a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></svg:path>`,
})
export class RiPlayListLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riPlayMiniLineIcon],svg[ri-play-mini-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 8.482v7.036L15.03 12zM7.752 5.44l10.508 6.13a.5.5 0 0 1 0 .863l-10.508 6.13A.5.5 0 0 1 7 18.13V5.87a.5.5 0 0 1 .752-.431"></svg:path>`,
})
export class RiPlayMiniLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riPlayReverseLargeLineIcon],svg[ri-play-reverse-large-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 18.392V5.608L5.774 12zm2-14.588v16.392a1 1 0 0 1-1.53.848L3.357 12.848a1 1 0 0 1 0-1.696L16.47 2.956a1 1 0 0 1 1.53.848"></svg:path>`,
})
export class RiPlayReverseLargeLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riPlayReverseLineIcon],svg[ri-play-reverse-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.606 12L14 7.737v8.526zm-2.982.416l10.599 7.066a.5.5 0 0 0 .777-.416V4.934a.5.5 0 0 0-.777-.416L4.624 11.584a.5.5 0 0 0 0 .832"></svg:path>`,
})
export class RiPlayReverseLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riPlayReverseMiniLineIcon],svg[ri-play-reverse-mini-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 8.482v7.036L8.97 12zm1.248-3.043L5.74 11.569a.5.5 0 0 0 0 .863l10.508 6.13A.5.5 0 0 0 17 18.13V5.87a.5.5 0 0 0-.752-.431"></svg:path>`,
})
export class RiPlayReverseMiniLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riPlaystationLineIcon],svg[ri-playstation-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.585 17.011c-.43.543-1.483.93-1.483.93l-7.832 2.817V18.68l5.764-2.057c.654-.234.754-.566.223-.74s-1.492-.125-2.147.111l-3.84 1.354v-2.155l.221-.076s1.11-.393 2.67-.566c1.561-.172 3.472.024 4.972.593c1.69.535 1.88 1.323 1.452 1.866m-8.57-3.537V8.162c0-.624-.115-1.198-.7-1.36c-.447-.144-.725.272-.725.895V21l-3.583-1.139V4c1.523.283 3.743.953 4.936 1.355c3.035 1.043 4.064 2.342 4.064 5.267c0 2.851-1.758 3.932-3.992 2.852m-11.583 4.99c-1.736-.49-2.025-1.51-1.234-2.097c.731-.542 1.975-.95 1.975-.95l5.138-1.83v2.086l-3.698 1.325c-.653.234-.753.566-.223.74c.532.175 1.493.125 2.147-.11l1.774-.644v1.865l-.354.06c-1.774.29-3.663.169-5.525-.445"></svg:path>`,
})
export class RiPlaystationLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riPlug2LineIcon],svg[ri-plug-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 18v2h6v2h-6a2 2 0 0 1-2-2v-2H8a4 4 0 0 1-4-4V7a1 1 0 0 1 1-1h2V2h2v4h6V2h2v4h2a1 1 0 0 1 1 1v7a4 4 0 0 1-4 4zm-5-2h8a2 2 0 0 0 2-2v-3H6v3a2 2 0 0 0 2 2m10-8H6v1h12zm-6 6.5a1 1 0 1 1 0-2a1 1 0 0 1 0 2M11 2h2v3h-2z"></svg:path>`,
})
export class RiPlug2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riPlugLineIcon],svg[ri-plug-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 18v2h6v2h-6a2 2 0 0 1-2-2v-2H8a4 4 0 0 1-4-4V7a1 1 0 0 1 1-1h3V2h2v4h4V2h2v4h3a1 1 0 0 1 1 1v7a4 4 0 0 1-4 4zm-5-2h8a2 2 0 0 0 2-2v-3H6v3a2 2 0 0 0 2 2m10-8H6v1h12zm-6 6.5a1 1 0 1 1 0-2a1 1 0 0 1 0 2"></svg:path>`,
})
export class RiPlugLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riPokerClubsLineIcon],svg[ri-poker-clubs-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.236 7.46c.338 1.08.99 2.092 1.627 3.044l.15.222q.23.342.447.673s-.557-.43-.808-.626c-1.125-.88-1.925-1.506-2.938-1.705A3.7 3.7 0 0 0 6 9a4 4 0 0 0 0 8c.676 0 1.353-.183 2.039-.48c.683-.295 1.376-.703 2.09-1.155c-.017.971-.134 1.78-.33 2.521c-.247.93-.618 1.755-1.07 2.668A.997.997 0 0 0 9.617 22h4.764c.743 0 1.22-.78.89-1.446c-.453-.913-.824-1.738-1.07-2.668a10.3 10.3 0 0 1-.33-2.521c.713.452 1.406.86 2.09 1.155c.685.297 1.362.48 2.038.48a4 4 0 0 0 0-8q-.399 0-.752.075c-.995.207-1.789.829-2.9 1.698c-.251.197-.808.626-.808.626l.233-.357l.002-.002v-.001l.355-.544c.674-1.043 1.28-2.04 1.61-3.024c.164-.493.26-.982.26-1.471a4 4 0 0 0-8 0c0 .5.088.987.236 1.46m5.222.26c-.35.682-.808 1.383-1.356 2.223L12 10.1l-.38-.57c-.381-.566-.72-1.07-1.022-1.63C10.188 7.141 10 6.534 10 6a2 2 0 1 1 4 0c0 .414-.147.954-.542 1.72m-2.962 5.68A2 2 0 0 0 12 12.675a2 2 0 0 0 1.504.723A2 2 0 0 0 12 14.66a2 2 0 0 0-1.504-1.261m.69 6.601c.367-.889.657-1.822.814-2.927c.157 1.105.447 2.038.815 2.927zm2.723-6.635c.544-.102.993-.467 1.421-.816q.127-.103.25-.2C17.06 11.19 17.416 11 18 11a2 2 0 1 1 0 4c-.699 0-1.594-.396-3.056-1.324a2 2 0 0 0-1.035-.311M6 11c.585 0 .94.19 2.42 1.348q.124.098.25.201c.428.349.877.714 1.422.816c-.361.006-.72.11-1.036.31C7.594 14.605 6.7 15 6 15a2 2 0 1 1 0-4"></svg:path>`,
})
export class RiPokerClubsLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riPokerDiamondsLineIcon],svg[ri-poker-diamonds-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.036 10.734a2 2 0 0 0 0 2.533l7.19 8.787a1 1 0 0 0 1.548 0l7.19-8.787a2 2 0 0 0 0-2.533l-7.19-8.788a1 1 0 0 0-1.548 0zM12 4.158L18.416 12L12 19.842L5.584 12z"></svg:path>`,
})
export class RiPokerDiamondsLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riPokerHeartsLineIcon],svg[ri-poker-hearts-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 8.81l1.635-2.322A3.5 3.5 0 0 1 20 8.5c0 2.879-1.96 5.621-4.357 7.836A27 27 0 0 1 12 19.146a27 27 0 0 1-3.643-2.81C5.959 14.122 4 11.379 4 8.5a3.5 3.5 0 0 1 6.365-2.012zm-1.444-4.884A5.5 5.5 0 0 0 2 8.5C2 16 12 21.485 12 21.485S22 16 22 8.5a5.5 5.5 0 0 0-10-3.163a5.5 5.5 0 0 0-1.444-1.41"></svg:path>`,
})
export class RiPokerHeartsLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riPokerSpadesLineIcon],svg[ri-poker-spades-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 15.916a2 2 0 0 0-2.8-1.295A3.9 3.9 0 0 1 7.5 15C5.383 15 4 13.482 4 12c0-1.06.515-2.115 1.613-3.29c1.133-1.212 2.655-2.311 4.285-3.486c.693-.5 1.421-1.024 2.102-1.567c.68.543 1.409 1.067 2.102 1.567c1.63 1.175 3.152 2.274 4.285 3.486C19.485 9.885 20 10.94 20 12c0 1.482-1.383 3-3.5 3a3.9 3.9 0 0 1-1.7-.379a2 2 0 0 0-2.8 1.295M12 1c-.871.871-2.08 1.742-3.356 2.662C5.524 5.911 2 8.452 2 12c0 2.761 2.462 5 5.5 5c.927 0 1.8-.208 2.566-.576a9.6 9.6 0 0 1-.536 2.317c-.22.604-.491 1.188-.802 1.813A.997.997 0 0 0 9.618 22h4.764c.743 0 1.22-.78.89-1.446a18 18 0 0 1-.802-1.813a9.6 9.6 0 0 1-.536-2.317A5.9 5.9 0 0 0 16.5 17c3.038 0 5.5-2.239 5.5-5c0-3.548-3.525-6.09-6.644-8.338C14.08 2.742 12.871 1.872 12 1m0 16.074c.158 1.11.451 2.047.815 2.926h-1.63c.364-.879.657-1.816.815-2.926"></svg:path>`,
})
export class RiPokerSpadesLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riPolaroid2LineIcon],svg[ri-polaroid-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 15V5H5v10zM3 3.993C3 3.445 3.445 3 3.993 3h16.014c.548 0 .993.445.993.993v16.014a.994.994 0 0 1-.993.993H3.993A.993.993 0 0 1 3 20.007zM12 12a2 2 0 1 0 0-4a2 2 0 0 0 0 4m0 2a4 4 0 1 1 0-8a4 4 0 0 1 0 8M6 6h2v2H6zm0 11v2h12v-2z"></svg:path>`,
})
export class RiPolaroid2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riPolaroidLineIcon],svg[ri-polaroid-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 6h-2V5H5v14h14v-1h2v2a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1zM6 6h2v3H6zm9 10a4 4 0 1 0 0-8a4 4 0 0 0 0 8m0 2a6 6 0 1 1 0-12a6 6 0 0 1 0 12m0-4a2 2 0 1 1 0-4a2 2 0 0 1 0 4"></svg:path>`,
})
export class RiPolaroidLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riPoliceBadgeLineIcon],svg[ri-police-badge-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.475 4.935c.505-.025.962-.09 1.351-.168l1.732 1.98c-.39.82-.612 1.602-.695 2.377c-.124 1.157.089 2.143.245 2.863l.007.033c.162.744.269 1.234.253 1.809c-.015.541-.147 1.256-.657 2.277c-1.1 2.201-3.695 2.666-5.715 3.675c-.326.164-.662.35-.996.569a10 10 0 0 0-.996-.569c-2.02-1.01-4.614-1.474-5.715-3.675c-.51-1.02-.642-1.736-.657-2.277c-.016-.575.09-1.065.253-1.81l.007-.032c.156-.72.369-1.706.245-2.863a7.3 7.3 0 0 0-.695-2.377l1.732-1.98c.389.078.846.143 1.351.168C8.79 4.998 10.402 4.81 12 3.918c1.598.892 3.21 1.08 4.475 1.017m4.612 6.739c-.323-1.479-.626-2.866.913-5.174l-3.5-4S15 4 12 1.5c-3 2.5-6.5 1-6.5 1L2 6.5c1.539 2.308 1.236 3.695.913 5.174c-.306 1.404-.63 2.89.587 5.326c1.577 3.154 4.708 3.51 6.943 4.745c.6.332 1.134.726 1.557 1.255c.423-.529.958-.923 1.558-1.255C15.792 20.51 18.923 20.154 20.5 17c1.218-2.435.893-3.922.587-5.326m-6.71 1.099l.562 3.272l-2.94-1.545l-2.938 1.545l.561-3.273l-2.377-2.317l3.285-.478L12 7l1.47 2.977l3.285.478z"></svg:path>`,
})
export class RiPoliceBadgeLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riPoliceCarLineIcon],svg[ri-police-car-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 13v5h16v-5zm1.618-2h12.764a1 1 0 0 0 .894-1.447L18 7H6L4.724 9.553A1 1 0 0 0 5.618 11M22 13.5V21a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-1H5v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-7.5l-1.243-.31A1 1 0 0 1 0 12.22v-.72a.5.5 0 0 1 .5-.5H2l2.447-4.894A2 2 0 0 1 6.237 5H8V3h3v2h2V3h3v2h1.764a2 2 0 0 1 1.789 1.106L22 11h1.5a.5.5 0 0 1 .5.5v.72a1 1 0 0 1-.758.97zM5 14q3.476 0 4.686 2.264a.5.5 0 0 1-.441.736H6a1 1 0 0 1-1-1zm14 0v2a1 1 0 0 1-1 1h-3.245a.5.5 0 0 1-.44-.736Q15.524 14 19 14"></svg:path>`,
})
export class RiPoliceCarLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riPresentationLineIcon],svg[ri-presentation-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 4a2 2 0 1 1-4 0a2 2 0 0 1 4 0M5 16v6H3V10a3 3 0 0 1 5.106-2.137l2.374 2.243l2.313-2.313l1.414 1.414l-3.687 3.687L9 11.46V22H7v-6zm1-7a1 1 0 0 0-1 1v4h2v-4a1 1 0 0 0-1-1m13-4h-9V3h10a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1h-3.424l2.823 6h-2.21l-2.824-6H10v-2h9z"></svg:path>`,
})
export class RiPresentationLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riPriceTag2LineIcon],svg[ri-price-tag-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m3.005 7l8.445-5.63a1 1 0 0 1 1.11 0L21.005 7v14a1 1 0 0 1-1 1h-16a1 1 0 0 1-1-1zm2 1.07V20h14V8.07l-7-4.667zm3 7.93h8v2h-8zm0-3h8v2h-8zm4-2a2 2 0 1 1 0-4a2 2 0 0 1 0 4"></svg:path>`,
})
export class RiPriceTag2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riPriceTag3LineIcon],svg[ri-price-tag-3-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10.904 2.1l9.9 1.414l1.414 9.9l-9.192 9.192a1 1 0 0 1-1.415 0l-9.9-9.9a1 1 0 0 1 0-1.413zm.707 2.122L3.833 12l8.485 8.485l7.779-7.778l-1.061-7.425zm2.122 6.363a2 2 0 1 1 2.828-2.828a2 2 0 0 1-2.828 2.829"></svg:path>`,
})
export class RiPriceTag3LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riPriceTagLineIcon],svg[ri-price-tag-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m3.005 7l8.445-5.63a1 1 0 0 1 1.11 0L21.005 7v14a1 1 0 0 1-1 1h-16a1 1 0 0 1-1-1zm2 1.07V20h14V8.07l-7-4.667zm7 2.93a2 2 0 1 1 0-4a2 2 0 0 1 0 4"></svg:path>`,
})
export class RiPriceTagLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riPrinterCloudLineIcon],svg[ri-printer-cloud-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 2a1 1 0 0 1 1 1v4h3a1 1 0 0 1 1 1v5.324a6 6 0 0 0-.61-.713A5.6 5.6 0 0 0 20 11.583V9H4v8h2v-1a1 1 0 0 1 1-1h5.194a5 5 0 0 0-.07.283q-.645.428-1.142 1.074q-.24.312-.42.643H8v3h2.054a4.5 4.5 0 0 0 .817 2H7a1 1 0 0 1-1-1v-2H3a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h3V3a1 1 0 0 1 1-1zm-1 2H8v3h8zm-8 6v2H5v-2zm13 6.5a3.5 3.5 0 1 0-7 0l.003.102a2.751 2.751 0 0 0 .58 5.393l.167.005h5.5l.168-.005a2.75 2.75 0 0 0 .58-5.392zm-4.993-.145a1.5 1.5 0 0 1 2.986 0L19 16.5v1.62q1.044.298 1.444.406A.75.75 0 0 1 20.255 20h-5.51a.75.75 0 0 1-.19-1.474q.357-.096 1.22-.342L16 18.12V16.5z"></svg:path>`,
})
export class RiPrinterCloudLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riPrinterLineIcon],svg[ri-printer-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 2a1 1 0 0 1 1 1v4h3a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-3v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-2H3a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h3V3a1 1 0 0 1 1-1zm-1 15H8v3h8zm4-8H4v8h2v-1a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v1h2zM8 10v2H5v-2zm8-6H8v3h8z"></svg:path>`,
})
export class RiPrinterLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riProductHuntLineIcon],svg[ri-product-hunt-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.001 22c-5.523 0-10-4.477-10-10s4.477-10 10-10s10 4.477 10 10s-4.477 10-10 10m0-2a8 8 0 1 0 0-16a8 8 0 0 0 0 16m1.334-8a1.5 1.5 0 0 0 0-3H10.5v3zm0-5a3.5 3.5 0 1 1 0 7H10.5v3h-2V7z"></svg:path>`,
})
export class RiProductHuntLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riProfileLineIcon],svg[ri-profile-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.008 3c.548 0 .992.445.992.993v16.014a1 1 0 0 1-.992.993H2.992A.993.993 0 0 1 2 20.007V3.993A1 1 0 0 1 2.992 3zM20 5H4v14h16zm-2 10v2H6v-2zm-6-8v6H6V7zm6 4v2h-4v-2zm-8-2H8v2h2zm8-2v2h-4V7z"></svg:path>`,
})
export class RiProfileLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riProgress1LineIcon],svg[ri-progress-1-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 12c0 5.523 4.477 10 10 10s10-4.477 10-10S17.523 2 12 2S2 6.477 2 12m18 0a8 8 0 1 1-16 0a8 8 0 0 1 16 0m-8 0V6a5.98 5.98 0 0 1 4.243 1.757z"></svg:path>`,
})
export class RiProgress1LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riProgress2LineIcon],svg[ri-progress-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 12c0 5.523 4.477 10 10 10s10-4.477 10-10S17.523 2 12 2S2 6.477 2 12m18 0a8 8 0 1 1-16 0a8 8 0 0 1 16 0m-8 0V6a6 6 0 0 1 6 6z"></svg:path>`,
})
export class RiProgress2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riProgress3LineIcon],svg[ri-progress-3-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 12c0 5.523 4.477 10 10 10s10-4.477 10-10S17.523 2 12 2S2 6.477 2 12m18 0a8 8 0 1 1-16 0a8 8 0 0 1 16 0m-2 0a5.98 5.98 0 0 1-1.757 4.243L12 12V6a6 6 0 0 1 6 6"></svg:path>`,
})
export class RiProgress3LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riProgress4LineIcon],svg[ri-progress-4-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 12c0 5.523 4.477 10 10 10s10-4.477 10-10S17.523 2 12 2S2 6.477 2 12m18 0a8 8 0 1 1-16 0a8 8 0 0 1 16 0m-2 0a6 6 0 0 1-6 6V6a6 6 0 0 1 6 6"></svg:path>`,
})
export class RiProgress4LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riProgress5LineIcon],svg[ri-progress-5-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 12c0 5.523 4.477 10 10 10s10-4.477 10-10S17.523 2 12 2S2 6.477 2 12m18 0a8 8 0 1 1-16 0a8 8 0 0 1 16 0m-2 0a6 6 0 0 1-10.243 4.243L12 12V6a6 6 0 0 1 6 6"></svg:path>`,
})
export class RiProgress5LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riProgress6LineIcon],svg[ri-progress-6-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 12c0 5.523 4.477 10 10 10s10-4.477 10-10S17.523 2 12 2S2 6.477 2 12m18 0a8 8 0 1 1-16 0a8 8 0 0 1 16 0m-2 0a6 6 0 0 1-12 0h6V6a6 6 0 0 1 6 6"></svg:path>`,
})
export class RiProgress6LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riProgress7LineIcon],svg[ri-progress-7-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 12c0 5.523 4.477 10 10 10s10-4.477 10-10S17.523 2 12 2S2 6.477 2 12m18 0a8 8 0 1 1-16 0a8 8 0 0 1 16 0m-2 0A6 6 0 1 1 7.757 7.757L12 12V6a6 6 0 0 1 6 6"></svg:path>`,
})
export class RiProgress7LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riProgress8LineIcon],svg[ri-progress-8-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 12c0 5.523 4.477 10 10 10s10-4.477 10-10S17.523 2 12 2S2 6.477 2 12m18 0a8 8 0 1 1-16 0a8 8 0 0 1 16 0m-8 6a6 6 0 1 0 0-12a6 6 0 0 0 0 12"></svg:path>`,
})
export class RiProgress8LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riProhibited2LineIcon],svg[ri-prohibited-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.906 5.68L5.68 16.906A8 8 0 0 1 16.906 5.68M7.094 18.32L18.32 7.094A8 8 0 0 1 7.094 18.32M12 2C6.477 2 2 6.477 2 12s4.478 10 10 10s10-4.477 10-10S17.522 2 12 2"></svg:path>`,
})
export class RiProhibited2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riProhibitedLineIcon],svg[ri-prohibited-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.094 5.68L18.32 16.906A8 8 0 0 0 7.094 5.68m9.812 12.64L5.68 7.094A8 8 0 0 0 16.906 18.32M4.929 4.929A9.97 9.97 0 0 1 12 2c5.523 0 10 4.477 10 10a9.97 9.97 0 0 1-2.929 7.071A9.97 9.97 0 0 1 12 22C6.477 22 2 17.523 2 12a9.97 9.97 0 0 1 2.929-7.071"></svg:path>`,
})
export class RiProhibitedLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riProjector2LineIcon],svg[ri-projector-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 19v2h-2v-2H4v2H2v-2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h10.528A6 6 0 0 1 17 3c1.777 0 3.374.773 4.472 2H22a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1M11.341 7H3v10h18v-3.528A6 6 0 0 1 11.341 7M17 13a4 4 0 1 0 0-8a4 4 0 0 0 0 8M5 13h2v2H5zm3 0h2v2H8z"></svg:path>`,
})
export class RiProjector2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riProjectorLineIcon],svg[ri-projector-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m8.126 9H4v7h16v-7h-1.126a4.002 4.002 0 0 1-7.748 0m0-2a4.002 4.002 0 0 1 7.748 0H20V5H4v5zM15 13a2 2 0 1 0 0-4a2 2 0 0 0 0 4m-9 2h2v2H6z"></svg:path>`,
})
export class RiProjectorLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riPsychotherapyLineIcon],svg[ri-psychotherapy-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 2a8 8 0 0 1 7.934 6.965l2.25 3.539c.148.233.118.58-.225.728L19 14.07V17a2 2 0 0 1-2 2h-1.999L15 22H6v-3.694c0-1.18-.436-2.297-1.245-3.305A8 8 0 0 1 11 2m0 2a6 6 0 0 0-4.684 9.75C7.41 15.114 8 16.667 8 18.306V20h5l.002-3H17v-4.248l1.55-.664l-1.543-2.425l-.057-.442A6 6 0 0 0 11 4m0 3a1 1 0 0 1 1 1v1h1a1 1 0 1 1 0 2h-1v1a1 1 0 1 1-2 0v-1.001L9 11a1 1 0 1 1 0-2l1-.001V8a1 1 0 0 1 1-1"></svg:path>`,
})
export class RiPsychotherapyLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riPulseAiLineIcon],svg[ri-pulse-ai-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19.713 8.128l-.246.566a.506.506 0 0 1-.934 0l-.246-.566a4.36 4.36 0 0 0-2.22-2.25l-.759-.339a.53.53 0 0 1 0-.963l.717-.319a4.37 4.37 0 0 0 2.251-2.326l.253-.611a.506.506 0 0 1 .942 0l.253.61a4.37 4.37 0 0 0 2.25 2.327l.718.32a.53.53 0 0 1 0 .962l-.76.338a4.36 4.36 0 0 0-2.219 2.251M15 21.538l-6-14L6.66 13H1v-2h4.34L9 2.461l6 14L17.34 11H23v2h-4.34z"></svg:path>`,
})
export class RiPulseAiLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riPulseLineIcon],svg[ri-pulse-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m9 7.539l6 14L18.66 13H23v-2h-5.66L15 16.461l-6-14L5.34 11H1v2h5.66z"></svg:path>`,
})
export class RiPulseLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riPushpin2LineIcon],svg[ri-pushpin-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 3v2h-1v6l2 3v2h-6v7h-2v-7H5v-2l2-3V5H6V3zM9 5v6.606L7.404 14h9.192L15 11.606V5z"></svg:path>`,
})
export class RiPushpin2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riPushpinLineIcon],svg[ri-pushpin-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13.827 1.69l8.486 8.485l-1.415 1.414l-.707-.707l-4.242 4.243l-.707 3.536l-1.415 1.414l-4.242-4.243l-4.95 4.95l-1.414-1.414l4.95-4.95l-4.243-4.243l1.414-1.414l3.536-.707l4.242-4.243l-.707-.707zm.707 3.536l-4.67 4.67l-2.822.565l6.5 6.5l.564-2.822l4.671-4.67z"></svg:path>`,
})
export class RiPushpinLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riPuzzle2LineIcon],svg[ri-puzzle-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 5a4 4 0 1 1 8 0h5a1 1 0 0 1 1 1v4.17a1 1 0 0 1-1.333.944a2 2 0 1 0 0 3.773a1 1 0 0 1 1.333.942V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zm4-2a2 2 0 0 0-1.886 2.667A1 1 0 0 1 8.17 7H5v12h14v-2a4 4 0 0 1 0-8V7h-5.17a1 1 0 0 1-.944-1.333Q13 5.355 13 5a2 2 0 0 0-2-2"></svg:path>`,
})
export class RiPuzzle2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riPuzzleLineIcon],svg[ri-puzzle-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 5a4 4 0 1 1 8 0h3a1 1 0 0 1 1 1v3a4 4 0 0 1 0 8v3a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zm4-2a2 2 0 0 0-1.886 2.667A1 1 0 0 1 8.17 7H5v12h12v-3.17a1 1 0 0 1 1.333-.944Q18.646 15 19 15a2 2 0 1 0-.667-3.886A1 1 0 0 1 17 10.17V7h-3.17a1 1 0 0 1-.944-1.333Q13 5.355 13 5a2 2 0 0 0-2-2"></svg:path>`,
})
export class RiPuzzleLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riQqLineIcon],svg[ri-qq-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m17.536 12.514l-.696-1.796c0-.021.01-.375.01-.558C16.85 7.088 15.447 4 12 4s-4.848 3.088-4.848 6.16c0 .183.009.537.01.557l-.696 1.797c-.19.515-.38 1.05-.517 1.51c-.657 2.189-.444 3.095-.282 3.115c.348.043 1.354-1.648 1.354-1.648c0 .98.487 2.258 1.542 3.18c-.394.127-.878.32-1.188.557c-.28.214-.245.431-.194.52c.22.385 3.79.245 4.82.125c1.03.12 4.599.26 4.82-.126c.05-.088.085-.305-.194-.519c-.311-.237-.795-.43-1.19-.556c1.055-.923 1.542-2.202 1.542-3.181c0 0 1.007 1.691 1.355 1.648c.162-.02.378-.928-.283-3.116a27 27 0 0 0-.516-1.509m1.021 8.227c-.373.652-.833.892-1.438 1.057a5 5 0 0 1-.794.138c-.44.045-.986.065-1.613.064a33 33 0 0 1-2.71-.116c-.692.065-1.785.114-2.71.116a16 16 0 0 1-1.614-.064a5 5 0 0 1-.793-.138c-.605-.164-1.065-.405-1.44-1.059a2.27 2.27 0 0 1-.239-1.652c-.592-.132-1.001-.482-1.279-.911a2.4 2.4 0 0 1-.309-.71a4 4 0 0 1-.116-1.106c.013-.785.187-1.762.532-2.912c.14-.466.327-1.008.567-1.655l.554-1.43l-.002-.203C5.153 5.605 7.589 2 12 2c4.413 0 6.848 3.605 6.848 8.16l-.001.203l.553 1.43l.01.026c.225.606.413 1.153.556 1.626c.348 1.15.522 2.128.535 2.916q.012.61-.118 1.108c-.066.246-.161.48-.31.708c-.276.427-.684.776-1.277.91c.13.554.055 1.14-.24 1.654"></svg:path>`,
})
export class RiQqLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riQrCodeLineIcon],svg[ri-qr-code-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 17v-1h-3v-3h3v2h2v2h-1v2h-2v2h-2v-3h2v-1zm5 4h-4v-2h2v-2h2zM3 3h8v8H3zm2 2v4h4V5zm8-2h8v8h-8zm2 2v4h4V5zM3 13h8v8H3zm2 2v4h4v-4zm13-2h3v2h-3zM6 6h2v2H6zm0 10h2v2H6zM16 6h2v2h-2z"></svg:path>`,
})
export class RiQrCodeLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riQrScan2LineIcon],svg[ri-qr-scan-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 3h6v5h-2V5h-4zM9 3v2H5v3H3V3zm6 18v-2h4v-3h2v5zm-6 0H3v-5h2v3h4zM3 11h18v2H3z"></svg:path>`,
})
export class RiQrScan2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riQrScanLineIcon],svg[ri-qr-scan-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 16v5H3v-5h2v3h14v-3zM3 11h18v2H3zm18-3h-2V5H5v3H3V3h18z"></svg:path>`,
})
export class RiQrScanLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riQuestionAnswerLineIcon],svg[ri-question-answer-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.455 15L1 18.5V3a1 1 0 0 1 1-1h15a1 1 0 0 1 1 1v12zm-.692-2H16V4H3v10.385zM8 17h10.237L20 18.385V8h1a1 1 0 0 1 1 1v13.5L17.546 19H9a1 1 0 0 1-1-1z"></svg:path>`,
})
export class RiQuestionAnswerLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riQuestionLineIcon],svg[ri-question-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10m0-2a8 8 0 1 0 0-16a8 8 0 0 0 0 16m-1-5h2v2h-2zm2-1.645V14h-2v-1.5a1 1 0 0 1 1-1a1.5 1.5 0 1 0-1.471-1.794l-1.962-.393A3.501 3.501 0 1 1 13 13.355"></svg:path>`,
})
export class RiQuestionLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riQuestionnaireLineIcon],svg[ri-questionnaire-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.763 17H20V5H4v13.385zm.692 2L2 22.5V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1zM11 14h2v2h-2zM8.567 8.813A3.501 3.501 0 1 1 12 13h-1v-2h1a1.5 1.5 0 1 0-1.471-1.794z"></svg:path>`,
})
export class RiQuestionnaireLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riQuillPenAiLineIcon],svg[ri-quill-pen-ai-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m4.713 7.128l-.246.566a.506.506 0 0 1-.934 0l-.246-.566a4.36 4.36 0 0 0-2.22-2.25l-.759-.339a.53.53 0 0 1 0-.963l.717-.319A4.37 4.37 0 0 0 3.276.931L3.53.32a.506.506 0 0 1 .942 0l.253.61a4.37 4.37 0 0 0 2.25 2.327l.718.32a.53.53 0 0 1 0 .962l-.76.338a4.36 4.36 0 0 0-2.219 2.251m1.621 8.687c.176-.582.373-1.159.605-1.782c2.056-5.527 5.48-8.951 11.074-9.818c-.513 1.143-.998 1.938-1.427 2.367l-1.001 1.002L14.172 9l1.456 1.454c-1.13 2.085-3.363 3.745-5.876 4.059c-1.317.165-2.459.607-3.418 1.303M18 9.997l-1-1l1.003-1.003Q19.502 6.493 21 1.997c-14.689 0-16.911 13.425-17.936 19.616L3 21.997h1.998q.999-5 5.002-5.5c4-.5 7-3.5 8-6.5"></svg:path>`,
})
export class RiQuillPenAiLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riQuillPenLineIcon],svg[ri-quill-pen-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.94 14.033a30 30 0 0 0-.606 1.783c.96-.697 2.101-1.14 3.418-1.304c2.513-.314 4.746-1.973 5.876-4.058l-1.456-1.455l1.413-1.415l1-1.002c.43-.429.915-1.224 1.428-2.367c-5.593.867-9.018 4.291-11.074 9.818M17 8.997l1 1c-1 3-4 6-8 6.5q-4.003.5-5.002 5.5H3c1-6 3-20 18-20q-1.5 4.496-2.997 5.997z"></svg:path>`,
})
export class RiQuillPenLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riRadarLineIcon],svg[ri-radar-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12.507 3.623l-1.024 1.772c-2.91-.879-5.513-.45-6.41 1.105c-1.178 2.04.79 5.652 4.677 7.897c3.888 2.245 8.001 2.142 9.179.103c.897-1.555-.033-4.024-2.25-6.105l1.024-1.772c3.082 2.709 4.462 6.27 2.957 8.877c-1.86 3.222-7.188 3.355-11.91.63C4.03 13.402 1.48 8.721 3.34 5.5c1.505-2.607 5.28-3.192 9.167-1.877m3.377-1.85l1.732 1l-5 8.66l-1.732-1zM6.732 20H17v2H5.018a1 1 0 0 1-1.015-.922a1 1 0 0 1 .131-.578l2.25-3.897l1.732 1z"></svg:path>`,
})
export class RiRadarLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riRadio2LineIcon],svg[ri-radio-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 3V1h2v2h13.008c.548 0 .992.445.992.993v16.014a1 1 0 0 1-.992.993H2.992A.993.993 0 0 1 2 20.007V3.993A1 1 0 0 1 2.992 3zM4 5v14h16V5zm5 10a3 3 0 1 1 0-6a3 3 0 0 1 0 6m5-6h4v2h-4zm0 4h4v2h-4z"></svg:path>`,
})
export class RiRadio2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riRadioButtonLineIcon],svg[ri-radio-button-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10m0-2a8 8 0 1 0 0-16a8 8 0 0 0 0 16m0-3a5 5 0 1 1 0-10a5 5 0 0 1 0 10"></svg:path>`,
})
export class RiRadioButtonLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riRadioLineIcon],svg[ri-radio-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 10V8h-2v2H5V6h14v4zM6 3V1h2v2h13.008c.548 0 .992.445.992.993v16.014a1 1 0 0 1-.992.993H2.992A.993.993 0 0 1 2 20.007V3.993A1 1 0 0 1 2.992 3zM4 5v14h16V5zm4 13a3 3 0 1 1 0-6a3 3 0 0 1 0 6"></svg:path>`,
})
export class RiRadioLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riRainbowLineIcon],svg[ri-rainbow-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 4c6.075 0 11 4.925 11 11v5h-2v-5a9 9 0 0 0-8.735-8.996L12 6a9 9 0 0 0-8.996 8.735L3 15v5H1v-5C1 8.925 5.925 4 12 4m0 4a7 7 0 0 1 7 7v5h-2v-5a5 5 0 0 0-4.783-4.995L12 10a5 5 0 0 0-4.995 4.783L7 15v5H5v-5a7 7 0 0 1 7-7m0 4a3 3 0 0 1 3 3v5h-2v-5a1 1 0 0 0-.883-.993L12 14a1 1 0 0 0-.993.883L11 15v5H9v-5a3 3 0 0 1 3-3"></svg:path>`,
})
export class RiRainbowLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riRainyLineIcon],svg[ri-rainy-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 18v-2h1a4 4 0 1 0-2.157-7.37A6 6 0 1 0 8 15.917v2.022A8.001 8.001 0 0 1 9 2a8 8 0 0 1 6.98 4.087A6 6 0 1 1 17 18zm-5.768.732L12 16.965l1.768 1.767a2.5 2.5 0 1 1-3.536 0"></svg:path>`,
})
export class RiRainyLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riRam2LineIcon],svg[ri-ram-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 5a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1v2a1 1 0 0 0 1 1h7.414l1-1h1.172l1 1H21a1 1 0 0 0 1-1v-2a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1zm18 11v1h-5.586l-1-1zm-9.414 0l-1 1H4v-1zM3 14V7h18v7zm2-5h2v3H5zm6 0H9v3h2zm2 0h2v3h-2zm6 0h-2v3h2z"></svg:path>`,
})
export class RiRam2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riRamLineIcon],svg[ri-ram-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 7h18v10h-2v-2h-2v2h-2v-2h-2v2h-2v-2H9v2H7v-2H5v2H3zM2 5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1zm9 4H5v3h6zm2 0h6v3h-6z"></svg:path>`,
})
export class RiRamLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riReactjsLineIcon],svg[ri-reactjs-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.001 13.5a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3m-.528 2.994q.262.316.528.609q.266-.292.528-.609a25 25 0 0 1-1.056 0m-1.995-.125a21 21 0 0 1-2.285-.367q-.113.525-.17 1.015c-.19 1.583.075 2.545.478 2.777s1.368-.019 2.645-.974q.395-.296.794-.655a21 21 0 0 1-1.462-1.796m7.331-.367a21 21 0 0 1-2.285.367a21 21 0 0 1-1.462 1.796q.4.36.794.655c1.277.955 2.242 1.207 2.645.974c.403-.232.667-1.194.479-2.777a11 11 0 0 0-.17-1.015m1.45-.388c.577 2.639.274 4.74-1.008 5.48s-3.253-.048-5.25-1.867c-1.997 1.819-3.968 2.606-5.25 1.866s-1.585-2.84-1.009-5.48C3.168 14.794 1.501 13.48 1.501 12s1.667-2.793 4.241-3.613c-.576-2.64-.273-4.74 1.009-5.48s3.253.047 5.25 1.866c1.997-1.819 3.968-2.606 5.25-1.866s1.585 2.84 1.009 5.48c2.573.82 4.24 2.133 4.24 3.613s-1.668 2.794-4.241 3.614m-7.32-9.779q-.398-.359-.793-.655C8.869 4.225 7.904 3.973 7.5 4.206c-.403.232-.667 1.194-.479 2.778q.06.49.17 1.015a21 21 0 0 1 2.286-.368q.714-.981 1.462-1.796m3.585 1.796a21 21 0 0 1 2.285.368q.113-.526.17-1.015c.19-1.584-.075-2.546-.478-2.778s-1.368.019-2.645.974q-.395.296-.794.655q.748.815 1.462 1.796m-1.995-.125q-.262-.316-.528-.609q-.265.293-.528.609a25 25 0 0 1 1.056 0m-4.156 7.198a25 25 0 0 1-.528-.914q-.143.385-.263.762q.386.083.79.152m1.932.234a23 23 0 0 0 3.392 0A23 23 0 0 0 15.393 12a23 23 0 0 0-1.696-2.938a23 23 0 0 0-3.392 0A23 23 0 0 0 8.609 12a23 23 0 0 0 1.696 2.938m5.852-4.728q.143-.385.263-.761a18 18 0 0 0-.79-.153a25 25 0 0 1 .527.914M6.131 9.837q-.51.165-.964.36c-1.465.628-2.166 1.338-2.166 1.803s.7 1.175 2.166 1.803q.454.195.964.36c.222-.7.497-1.426.825-2.163a21 21 0 0 1-.825-2.163m1.45-.388q.121.375.264.76a25 25 0 0 1 .528-.913q-.405.069-.791.153m10.29 4.714q.51-.165.964-.36C20.3 13.175 21 12.465 21 12s-.7-1.175-2.166-1.803q-.454-.195-.965-.36c-.22.7-.496 1.426-.824 2.163c.328.737.603 1.463.825 2.163m-1.45.389q-.122-.377-.264-.762a25 25 0 0 1-.528.914q.405-.07.791-.152"></svg:path>`,
})
export class RiReactjsLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riReceiptLineIcon],svg[ri-receipt-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 4L6 2L3 4v15a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-3h-2V4l-3-2l-3 2l-3-2zm10 12H7v3a1 1 0 1 1-2 0V5.07l1-.666l3 2l3-2l3 2l3-2l1 .666zm1 4H8.83c.11-.313.17-.65.17-1v-1h12v1a1 1 0 0 1-1 1"></svg:path>`,
})
export class RiReceiptLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riRecordCircleLineIcon],svg[ri-record-circle-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10m0-2a8 8 0 1 0 0-16a8 8 0 0 0 0 16m0-5a3 3 0 1 1 0-6a3 3 0 0 1 0 6"></svg:path>`,
})
export class RiRecordCircleLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riRecordMailLineIcon],svg[ri-record-mail-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.257 15a5.5 5.5 0 1 1 4.243 2h-13a5.5 5.5 0 1 1 4.243-2zM5.5 15a3.5 3.5 0 1 0 0-7a3.5 3.5 0 0 0 0 7m13 0a3.5 3.5 0 1 0 0-7a3.5 3.5 0 0 0 0 7"></svg:path>`,
})
export class RiRecordMailLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riRectangleLineIcon],svg[ri-rectangle-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 4h18a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1m1 2v12h16V6z"></svg:path>`,
})
export class RiRectangleLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riRecycleLineIcon],svg[ri-recycle-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19.56 12.098l1.532 2.652A3.5 3.5 0 0 1 18.061 20h-2.062v2.5l-5-3.5l5-3.5V18h2.062a1.5 1.5 0 0 0 1.299-2.25l-1.532-2.652zM7.304 9.134l.53 6.08l-2.165-1.25l-1.03 1.786A1.5 1.5 0 0 0 5.937 18h3.062v2H5.937a3.5 3.5 0 0 1-3.032-5.25l1.031-1.787l-2.165-1.249zm6.446-6.165a3.5 3.5 0 0 1 1.28 1.281l1.032 1.786l2.165-1.25l-.531 6.08l-5.531-2.58l2.165-1.25l-1.031-1.786a1.5 1.5 0 0 0-2.598 0L9.168 7.903l-1.732-1L8.968 4.25a3.5 3.5 0 0 1 4.78-1.281"></svg:path>`,
})
export class RiRecycleLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riRedPacketLineIcon],svg[ri-red-packet-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.178 9.766a10 10 0 0 0 4.827-2.622V4.003h-14v3.141a10 10 0 0 0 4.827 2.622a2.5 2.5 0 0 1 4.346 0m.208 2a2.501 2.501 0 0 1-4.762 0a11.9 11.9 0 0 1-4.62-2.015v10.252h14V9.75a11.9 11.9 0 0 1-4.618 2.016M4.005 2.004h16a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1h-16a1 1 0 0 1-1-1v-18a1 1 0 0 1 1-1"></svg:path>`,
})
export class RiRedPacketLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riRedditLineIcon],svg[ri-reddit-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11.053 7.815l.751-3.536a2 2 0 0 1 2.372-1.54l3.196.68a2 2 0 1 1-.415 1.956l-3.197-.68l-.666 3.135c1.785.137 3.558.73 5.164 1.7A3.192 3.192 0 0 1 23 12.203v.021a3.2 3.2 0 0 1-1.207 2.55l-.008.123c0 3.998-4.45 7.03-9.799 7.03c-5.333 0-9.708-3.024-9.705-6.953l-.01-.181a3.193 3.193 0 0 1 3.454-5.35a11.45 11.45 0 0 1 5.329-1.628m9.285 5.526a1.19 1.19 0 0 0 .662-1.075a1.192 1.192 0 0 0-2.016-.806l-.585.56l-.67-.455c-1.615-1.098-3.452-1.725-5.23-1.764h-1.006c-1.875.028-3.652.6-5.237 1.675l-.664.45l-.583-.55a1.192 1.192 0 1 0-1.315 1.952l.633.29l-.053.695a4 4 0 0 0 .003.584c0 2.71 3.356 5.03 7.708 5.03c4.371 0 7.799-2.336 7.802-5.107a3 3 0 0 0 0-.507l-.052-.672zM6.951 13.5a1.5 1.5 0 1 1 3 0a1.5 1.5 0 0 1-3 0m7 0a1.5 1.5 0 1 1 3 0a1.5 1.5 0 0 1-3 0m-1.985 5.103c-1.397 0-2.766-.37-3.881-1.21a.424.424 0 0 1 .597-.597c.945.693 2.123.99 3.269.99s2.33-.275 3.284-.959a.44.44 0 0 1 .732.206a.47.47 0 0 1-.12.423c-.683.797-2.483 1.147-3.88 1.147"></svg:path>`,
})
export class RiRedditLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riRefreshLineIcon],svg[ri-refresh-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.463 4.433A9.96 9.96 0 0 1 12 2c5.523 0 10 4.477 10 10c0 2.136-.67 4.116-1.81 5.74L17 12h3A8 8 0 0 0 6.46 6.228zm13.074 15.134A9.96 9.96 0 0 1 12 22C6.477 22 2 17.523 2 12c0-2.136.67-4.116 1.81-5.74L7 12H4a8 8 0 0 0 13.54 5.772z"></svg:path>`,
})
export class RiRefreshLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riRefund2LineIcon],svg[ri-refund-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.676 4.257c3.928-3.219 9.733-2.995 13.4.672c3.905 3.905 3.905 10.237 0 14.142s-10.237 3.905-14.142 0a9.99 9.99 0 0 1-2.678-9.304l.077-.313l1.934.51a8 8 0 1 0 3.053-4.45l-.22.166l1.017 1.017l-4.596 1.06l1.06-4.596zM13.005 6v2h2.5v2h-5.5a.5.5 0 0 0-.09.992l.09.008h4a2.5 2.5 0 0 1 0 5h-1v2h-2v-2h-2.5v-2h5.5a.5.5 0 0 0 .09-.992l-.09-.008h-4a2.5 2.5 0 1 1 0-5h1V6z"></svg:path>`,
})
export class RiRefund2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riRefundLineIcon],svg[ri-refund-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.005 8V5h-16v3zm0 2h-16v9h16zm-17-7h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m8 11h6v2h-10.5l4.5-4.5z"></svg:path>`,
})
export class RiRefundLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riRegisteredLineIcon],svg[ri-registered-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2m0 2a8 8 0 1 0 0 16a8 8 0 0 0 0-16m.5 3a3.5 3.5 0 0 1 1.82 6.49L16.868 17h-2.472l-2.18-3H10v3H8V7zm0 2H10v3h2.5a1.5 1.5 0 0 0 1.493-1.355L14 10.5A1.5 1.5 0 0 0 12.5 9"></svg:path>`,
})
export class RiRegisteredLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riRemixRunLineIcon],svg[ri-remix-run-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 2h10.5a6 6 0 0 1 3.054 11.166A6 6 0 0 1 20 18v3h-2v-3a4 4 0 0 0-4-4H4v-2h10.5a4 4 0 0 0 0-8H4zm7 19H4v-2h7z"></svg:path>`,
})
export class RiRemixRunLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riRemixiconLineIcon],svg[ri-remixicon-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m6.365 6l8.784 9.663l.72-.283c1.685-.661 2.864-2.156 3.092-3.896q-.23.016-.46.016A6.5 6.5 0 0 1 12.077 6zM14 5a4.5 4.5 0 0 0 6.714 3.918c.186.618.286 1.271.286 1.947c0 2.891-1.822 5.365-4.4 6.377L20 21H3V4h11.111A4.5 4.5 0 0 0 14 5m4.5 2.5a2.5 2.5 0 1 1 0-5a2.5 2.5 0 0 1 0 5M5 7.47V19h10.48z"></svg:path>`,
})
export class RiRemixiconLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riRemoteControl2LineIcon],svg[ri-remote-control-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 2a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1zm-1 2H7v16h10zm-2 11v2h-2v-2zm-4 0v2H9v-2zm2-9v2h2v2h-2.001L13 12h-2l-.001-2H9V8h2V6z"></svg:path>`,
})
export class RiRemoteControl2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riRemoteControlLineIcon],svg[ri-remote-control-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 12a1 1 0 0 1 1 1v9h-2v-8H8v8H6v-9a1 1 0 0 1 1-1zm-5 4v2h-2v-2zm0-10a6 6 0 0 1 5.368 3.316l-1.79.895a4 4 0 0 0-7.156 0l-1.79-.895A6 6 0 0 1 12 6m0-4a10 10 0 0 1 8.947 5.527l-1.79.895A8 8 0 0 0 12 4a8 8 0 0 0-7.157 4.422l-1.79-.895A10 10 0 0 1 12 2"></svg:path>`,
})
export class RiRemoteControlLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riRepeat2LineIcon],svg[ri-repeat-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 20v1.932a.5.5 0 0 1-.82.385l-4.12-3.433A.5.5 0 0 1 3.382 18H18a2 2 0 0 0 2-2V8h2v8a4 4 0 0 1-4 4zm8-16V2.068a.5.5 0 0 1 .82-.385l4.12 3.433a.5.5 0 0 1-.321.884H6a2 2 0 0 0-2 2v8H2V8a4 4 0 0 1 4-4z"></svg:path>`,
})
export class RiRepeat2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riRepeatLineIcon],svg[ri-repeat-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 4h15a1 1 0 0 1 1 1v7h-2V6H6v3L1 5l5-4zm12 16H3a1 1 0 0 1-1-1v-7h2v6h14v-3l5 4l-5 4z"></svg:path>`,
})
export class RiRepeatLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riRepeatOneLineIcon],svg[ri-repeat-one-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 20v1.933a.5.5 0 0 1-.82.384l-4.12-3.433A.5.5 0 0 1 3.382 18H18a2 2 0 0 0 2-2V8h2v8a4 4 0 0 1-4 4zm8-17.932a.5.5 0 0 1 .82-.385l4.12 3.433a.5.5 0 0 1-.321.884H6a2 2 0 0 0-2 2v8H2V8a4 4 0 0 1 4-4h10zM11 8h2v8h-2v-6H9V9z"></svg:path>`,
})
export class RiRepeatOneLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riReplay10LineIcon],svg[ri-replay-10-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12h2a8 8 0 1 0 1.385-4.5H8v2H2v-6h2V6a9.99 9.99 0 0 1 8-4m3.5 11.25a1 1 0 1 1-2 0v-2.5a1 1 0 1 1 2 0zm-1-5a2.5 2.5 0 0 0-2.5 2.5v2.5a2.5 2.5 0 0 0 5 0v-2.5a2.5 2.5 0 0 0-2.5-2.5m-6 7.25v-7H10v7z"></svg:path>`,
})
export class RiReplay10LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riReplay15LineIcon],svg[ri-replay-15-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12h2a8 8 0 1 0 1.385-4.5H8v2H2v-6h2V6a9.99 9.99 0 0 1 8-4M8.5 15.5v-7H10v7zm3.5-7h4.75V10H13.5v1.25h1.375a2.125 2.125 0 0 1 0 4.25H12V14h2.875a.625.625 0 1 0 0-1.25H12z"></svg:path>`,
})
export class RiReplay15LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riReplay30LineIcon],svg[ri-replay-30-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 12c0-5.523-4.477-10-10-10a9.99 9.99 0 0 0-8 4V3.5H2v6h4.75v.5h2.625a.625.625 0 1 1 0 1.25H7.5v1.5h1.875a.625.625 0 1 1 0 1.25H6.75v1.5h2.625a2.125 2.125 0 0 0 1.62-3.5a2.125 2.125 0 0 0-1.62-3.5H8v-1H5.385A8 8 0 1 1 4 12H2c0 5.523 4.477 10 10 10s10-4.477 10-10m-9.5-1.25a2.5 2.5 0 0 1 5 0v2.5a2.5 2.5 0 0 1-5 0zm2.5-1a1 1 0 0 0-1 1v2.5a1 1 0 1 0 2 0v-2.5a1 1 0 0 0-1-1"></svg:path>`,
})
export class RiReplay30LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riReplay5LineIcon],svg[ri-replay-5-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12h2a8 8 0 1 0 1.385-4.5H8v2H2v-6h2V6a9.99 9.99 0 0 1 8-4M9.5 8.5h5V10H11v1.25h1.625a2.125 2.125 0 0 1 0 4.25H9.5V14h3.125a.625.625 0 1 0 0-1.25H9.5z"></svg:path>`,
})
export class RiReplay5LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riReplyAllLineIcon],svg[ri-reply-all-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 4.5V9c5.523 0 10 4.477 10 10q0 .41-.032.81a9 9 0 0 0-7.655-4.805L16 15h-2v4.5L6 12zm-6 0v2.737L2.92 12l5.079 4.761L8 19.5L0 12zm4 4.616L8.924 12L12 14.883V13h4.034l.347.007c1.285.043 2.524.31 3.676.766A7.98 7.98 0 0 0 14 11h-2z"></svg:path>`,
})
export class RiReplyAllLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riReplyLineIcon],svg[ri-reply-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 20L1 12l10-8v5c5.523 0 10 4.477 10 10q0 .41-.032.81a9 9 0 0 0-7.655-4.805L13 15h-2zm-2-7h4.034l.347.007c1.285.043 2.524.31 3.676.766A7.98 7.98 0 0 0 11 11H9V8.161L4.202 12L9 15.839z"></svg:path>`,
})
export class RiReplyLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riReservedLineIcon],svg[ri-reserved-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 15v4h3v2H8v-2h3v-4H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1zm-8-2h14V5H5zm3-5h8v2H8z"></svg:path>`,
})
export class RiReservedLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riResetLeftLineIcon],svg[ri-reset-left-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2v2a8 8 0 1 0 4.5 1.385V8h-2V2h6v2H18a9.99 9.99 0 0 1 4 8"></svg:path>`,
})
export class RiResetLeftLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riResetRightLineIcon],svg[ri-reset-right-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 12c0 5.523 4.477 10 10 10s10-4.477 10-10S17.523 2 12 2v2a8 8 0 1 1-4.5 1.385V8h2V2h-6v2H6a9.99 9.99 0 0 0-4 8"></svg:path>`,
})
export class RiResetRightLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riRestTimeLineIcon],svg[ri-rest-time-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 6v2a6 6 0 1 0 5.996 6.225L17 14h2a8 8 0 1 1-16 0c0-4.335 3.58-8 8-8m10-4v2l-5.327 6H21v2h-8v-2l5.326-6H13V2z"></svg:path>`,
})
export class RiRestTimeLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riRestartLineIcon],svg[ri-restart-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.537 19.567A9.96 9.96 0 0 1 12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10c0 2.136-.67 4.116-1.81 5.74L17 12h3a8 8 0 1 0-2.46 5.772z"></svg:path>`,
})
export class RiRestartLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riRestaurant2LineIcon],svg[ri-restaurant-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14.268 12.147l-.853.853l7.07 7.071l-1.413 1.414L12 14.415l-7.072 7.07l-1.414-1.414l9.339-9.339c-.588-1.457.02-3.555 1.621-5.156c1.953-1.953 4.644-2.428 6.01-1.061c1.368 1.367.893 4.058-1.06 6.01c-1.602 1.602-3.7 2.21-5.157 1.622M4.222 3.807l6.718 6.718l-2.829 2.829l-3.889-3.89a4 4 0 0 1 0-5.656m13.789 5.304c1.257-1.257 1.516-2.726 1.06-3.182s-1.924-.196-3.181 1.06c-1.258 1.258-1.517 2.727-1.061 3.183s1.925.196 3.182-1.06"></svg:path>`,
})
export class RiRestaurant2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riRestaurantLineIcon],svg[ri-restaurant-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 2v20h-2v-7h-4V8a6 6 0 0 1 6-6m-2 2.53C18.17 5 17 6.17 17 8v5h2zM9 13.9V22H7v-8.1A5 5 0 0 1 3 9V3h2v7h2V3h2v7h2V3h2v6a5 5 0 0 1-4 4.9"></svg:path>`,
})
export class RiRestaurantLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riRewindLineIcon],svg[ri-rewind-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 10.667l9.223-6.149a.5.5 0 0 1 .777.416v14.132a.5.5 0 0 1-.777.416L12 13.333v5.733a.5.5 0 0 1-.777.416L.624 12.416a.5.5 0 0 1 0-.832l10.599-7.066a.5.5 0 0 1 .777.416zm-2 5.596V7.737L3.606 12zm10 0V7.737L13.606 12z"></svg:path>`,
})
export class RiRewindLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riRewindMiniLineIcon],svg[ri-rewind-mini-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 9.86L5.968 12L9 14.14zm1.909 7.463a.5.5 0 0 1-.697.12l-7.133-5.035a.5.5 0 0 1 0-.816l7.133-5.036a.5.5 0 0 1 .788.409v10.07a.5.5 0 0 1-.091.288M18 14.14V9.86L14.968 12zm-5.921-1.732a.5.5 0 0 1 0-.816l7.133-5.036a.5.5 0 0 1 .788.409v10.07a.5.5 0 0 1-.788.409z"></svg:path>`,
})
export class RiRewindMiniLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riRewindStartLineIcon],svg[ri-rewind-start-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 4a1 1 0 0 0-1 1v14a1 1 0 1 0 2 0v-5.667l9.223 6.149a.5.5 0 0 0 .777-.416v-5.733l9.223 6.149a.5.5 0 0 0 .777-.416V4.934a.5.5 0 0 0-.777-.416L13 10.666V4.934a.5.5 0 0 0-.777-.416L3 10.667V5a1 1 0 0 0-1-1m9 3.737v8.526L4.606 12zm10 0v8.526L14.606 12z"></svg:path>`,
})
export class RiRewindStartLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riRewindStartMiniLineIcon],svg[ri-rewind-start-mini-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 6a1 1 0 0 0-1 1v10a1 1 0 1 0 2 0V7a1 1 0 0 0-1-1m4.968 6L11 9.86v4.28zm4.244 5.443a.5.5 0 0 0 .788-.408V6.965a.5.5 0 0 0-.788-.409l-7.133 5.035a.5.5 0 0 0 0 .817zM16.968 12L20 9.86v4.28zm-3.01.288a.5.5 0 0 0 .12.12l7.134 5.035a.5.5 0 0 0 .788-.408V6.965a.5.5 0 0 0-.788-.409l-7.133 5.035a.5.5 0 0 0-.12.697"></svg:path>`,
})
export class RiRewindStartMiniLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riRfidLineIcon],svg[ri-rfid-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.364 18.364a9 9 0 0 0 0-12.728l1.414-1.414c4.296 4.296 4.296 11.26 0 15.556zM5.636 5.636a9 9 0 0 0 0 12.728l-1.414 1.414c-4.296-4.295-4.296-11.26 0-15.556zm9.9 9.9a5 5 0 0 0 0-7.072L16.95 7.05a7 7 0 0 1 0 9.9zM8.464 8.464a5 5 0 0 0 0 7.072L7.05 16.95a7 7 0 0 1 0-9.9zM12 14a2 2 0 1 0 0-4a2 2 0 0 0 0 4"></svg:path>`,
})
export class RiRfidLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riRhythmLineIcon],svg[ri-rhythm-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 9h2v12H2zm6-6h2v18H8zm6 9h2v9h-2zm6-6h2v15h-2z"></svg:path>`,
})
export class RiRhythmLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riRidingLineIcon],svg[ri-riding-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.5 21a4.5 4.5 0 1 1 0-9a4.5 4.5 0 0 1 0 9m0-2a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5m13 2a4.5 4.5 0 1 1 0-9a4.5 4.5 0 0 1 0 9m0-2a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5m-7.477-8.695L13 12v6h-2v-5l-2.719-2.266A2 2 0 0 1 8 7.671l2.828-2.828a2 2 0 0 1 2.829 0l1.414 1.414a6.97 6.97 0 0 0 3.917 1.975l-.01 2.015a8.96 8.96 0 0 1-5.321-2.575zM16 5a2 2 0 1 1 0-4a2 2 0 0 1 0 4"></svg:path>`,
})
export class RiRidingLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riRoadMapLineIcon],svg[ri-road-map-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 6.143v12.824l5.065-2.17l6 3L20 17.68V4.857l1.303-.558a.5.5 0 0 1 .697.46V19l-7 3l-6-3l-6.303 2.701a.5.5 0 0 1-.697-.46V7zm12.243 5.1L12 15.485l-4.243-4.242a6 6 0 1 1 8.486 0M12 12.657l2.828-2.829a4 4 0 1 0-5.656 0z"></svg:path>`,
})
export class RiRoadMapLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riRoadsterLineIcon],svg[ri-roadster-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 20H5v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-7.5l-1.243-.31A1 1 0 0 1 0 12.22v-.72a.5.5 0 0 1 .5-.5H2l2.48-5.788A2 2 0 0 1 6.32 4h11.36a2 2 0 0 1 1.838 1.212L22 11h1.5a.5.5 0 0 1 .5.5v.72a1 1 0 0 1-.758.97L22 13.5V21a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1zm1-2v-5H4v5zM5.477 11h13.046a1 1 0 0 0 .928-1.371L18 6H6L4.549 9.629A1 1 0 0 0 5.477 11M5 14q3.476 0 4.686 2.264a.5.5 0 0 1-.441.736H6a1 1 0 0 1-1-1zm14 0v2a1 1 0 0 1-1 1h-3.245a.5.5 0 0 1-.44-.736Q15.524 14 19 14"></svg:path>`,
})
export class RiRoadsterLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riRobot2LineIcon],svg[ri-robot-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.5 2c0 .444-.193.843-.5 1.118V5h5a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3h5V3.118A1.5 1.5 0 1 1 13.5 2M6 7a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1zm-4 3H0v6h2zm20 0h2v6h-2zM9 14.5a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m6 0a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3"></svg:path>`,
})
export class RiRobot2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riRobot3LineIcon],svg[ri-robot-3-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 1v1H7a3 3 0 0 0-3 3v3a5 5 0 0 0 5 5h6a5 5 0 0 0 5-5V5a3 3 0 0 0-3-3h-4V1zM6 5a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v3a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3zm3.5 4a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m5 0a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3M6 22a6 6 0 0 1 12 0h2a8 8 0 1 0-16 0z"></svg:path>`,
})
export class RiRobot3LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riRobotLineIcon],svg[ri-robot-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 4.055A9 9 0 0 1 21 13v9H3v-9a9 9 0 0 1 8-8.945V1h2zM19 20v-7a7 7 0 1 0-14 0v7zm-7-2a5 5 0 1 1 0-10a5 5 0 0 1 0 10m0-2a3 3 0 1 0 0-6a3 3 0 0 0 0 6m0-2a1 1 0 1 1 0-2a1 1 0 0 1 0 2"></svg:path>`,
})
export class RiRobotLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riRocket2LineIcon],svg[ri-rocket-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.502 20.005A6.52 6.52 0 0 1 12 23.507a6.52 6.52 0 0 1-3.502-3.502h2.26c.326.488.747.912 1.242 1.243c.495-.33.916-.755 1.242-1.243zM18 14.81l2 2.268v1.927H4v-1.927l2-2.268V9.005c0-3.483 2.504-6.447 6-7.545c3.496 1.098 6 4.062 6 7.545zm-.73 2.195L16 15.565v-6.56c0-2.318-1.57-4.43-4-5.421c-2.43.99-4 3.103-4 5.42v6.561l-1.27 1.44zm-5.27-6a2 2 0 1 1 0-4a2 2 0 0 1 0 4"></svg:path>`,
})
export class RiRocket2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riRocketLineIcon],svg[ri-rocket-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 13c0-5.088 2.902-9.436 7-11.182C16.097 3.564 19 7.912 19 13q-.002 1.236-.221 2.403l1.94 1.832a.5.5 0 0 1 .096.603l-2.495 4.575a.5.5 0 0 1-.793.114l-2.235-2.234a1 1 0 0 0-.707-.293H9.414a1 1 0 0 0-.707.293l-2.235 2.234a.5.5 0 0 1-.792-.114l-2.496-4.575a.5.5 0 0 1 .096-.603l1.94-1.832Q5.002 14.236 5 13m1.475 6.696l.817-.817a3 3 0 0 1 2.122-.88h5.171a3 3 0 0 1 2.122.88l.817.817l.982-1.8l-1.1-1.04a2 2 0 0 1-.593-1.82A11 11 0 0 0 17 13c0-3.87-1.995-7.3-5-8.96C8.995 5.7 7 9.13 7 13q0 1.038.186 2.036a2 2 0 0 1-.593 1.82l-1.1 1.04zM12 13a2 2 0 1 1 0-4a2 2 0 0 1 0 4"></svg:path>`,
})
export class RiRocketLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riRotateLockLineIcon],svg[ri-rotate-lock-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2c5.523 0 10 4.477 10 10c0 2.136-.67 4.116-1.811 5.741L17 12h3a8 8 0 1 0-2.46 5.772l.998 1.795A9.96 9.96 0 0 1 12 22C6.477 22 2 17.523 2 12S6.477 2 12 2m0 5a3 3 0 0 1 3 3v1h1v5H8v-5h1v-1a3 3 0 0 1 3-3m2 6h-4v1h4zm-2-4a1 1 0 0 0-.993.883L11 10v1h2v-1a1 1 0 0 0-.883-.993z"></svg:path>`,
})
export class RiRotateLockLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riRouteLineIcon],svg[ri-route-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 15V8.5a4.5 4.5 0 0 1 9 0v7a2.5 2.5 0 0 0 5 0V8.83a3.001 3.001 0 1 1 2 0v6.67a4.5 4.5 0 1 1-9 0v-7a2.5 2.5 0 0 0-5 0V15h3l-4 5l-4-5zm15-8a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></svg:path>`,
})
export class RiRouteLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riRouterLineIcon],svg[ri-router-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 14v-3h2v3h5a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1zM2.51 8.837C3.835 4.864 7.584 2 12 2c4.418 0 8.166 2.864 9.49 6.837l-1.898.632a8.004 8.004 0 0 0-15.183 0zm3.797 1.265a6.003 6.003 0 0 1 11.387 0l-1.898.633a4.002 4.002 0 0 0-7.592 0zM7 16v4h10v-4z"></svg:path>`,
})
export class RiRouterLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riRssLineIcon],svg[ri-rss-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 17a4 4 0 0 1 4 4H3zm0-7c6.075 0 11 4.925 11 11h-2a9 9 0 0 0-9-9zm0-7c9.941 0 18 8.059 18 18h-2c0-8.837-7.163-16-16-16z"></svg:path>`,
})
export class RiRssLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riRuler2LineIcon],svg[ri-ruler-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 19h2v-5h-9V5H5v2h2v2H5v2h3v2H5v2h2v2H5v2h2v-2h2v2h2v-3h2v3h2v-2h2zm-5-7h8a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1z"></svg:path>`,
})
export class RiRuler2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riRulerLineIcon],svg[ri-ruler-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m6.343 14.728l-2.828 2.829l3.535 3.535L20.485 7.657L16.95 4.121l-2.121 2.122l1.414 1.414l-1.414 1.414l-1.415-1.414l-2.121 2.121l2.121 2.122L12 13.314l-2.12-2.121l-2.122 2.12l1.415 1.415l-1.415 1.414zM17.657 2l4.95 4.95a1 1 0 0 1 0 1.414l-14.85 14.85a1 1 0 0 1-1.414 0l-4.95-4.95a1 1 0 0 1 0-1.415L16.243 2a1 1 0 0 1 1.414 0"></svg:path>`,
})
export class RiRulerLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riRunLineIcon],svg[ri-run-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.83 8.79L8 9.456V13H6V8.05h.015l5.268-1.918c.244-.093.51-.14.782-.131a2.62 2.62 0 0 1 2.427 1.82q.279.875.51 1.181A5 5 0 0 0 19 11v2a6.99 6.99 0 0 1-5.402-2.547l-.697 3.956L15 16.17V23h-2v-5.898l-2.27-1.904l-.727 4.127l-6.894-1.215l.348-1.97l4.924.868zM13.5 5.5a2 2 0 1 1 0-4a2 2 0 0 1 0 4"></svg:path>`,
})
export class RiRunLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSafariLineIcon],svg[ri-safari-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m17.813 6.503l-4.398 6.911l-6.911 4.398A7.97 7.97 0 0 0 11 19.938V18h2v1.938a7.96 7.96 0 0 0 3.906-1.618l-1.37-1.37l1.414-1.414l1.37 1.37A7.96 7.96 0 0 0 19.939 13h-1.938v-2h1.938a7.97 7.97 0 0 0-2.126-4.497m-.315-.315a7.97 7.97 0 0 0-4.497-2.126V6h-2V4.062A7.96 7.96 0 0 0 7.095 5.68l1.37 1.37l-1.414 1.414l-1.37-1.37A7.96 7.96 0 0 0 4.063 11H6v2H4.063a7.97 7.97 0 0 0 2.126 4.497l4.398-6.911zM12.001 22c-5.523 0-10-4.477-10-10s4.477-10 10-10s10 4.477 10 10s-4.477 10-10 10"></svg:path>`,
})
export class RiSafariLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSafe2LineIcon],svg[ri-safe-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.005 20.333V22h-2v-1.334l-7.418 1.237a.5.5 0 0 1-.582-.493V20h-4v2h-2v-2h-1a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h7V1.59a.5.5 0 0 1 .582-.493L21.17 2.86a1 1 0 0 1 .836.986V6h1v2h-1v7h1v2h-1v2.153a1 1 0 0 1-.836.986zM4.005 5v13h6V5zm8 14.639l8-1.334V4.694l-8-1.333zm4.5-5.64c-.828 0-1.5-1.119-1.5-2.5c0-1.38.672-2.5 1.5-2.5s1.5 1.12 1.5 2.5c0 1.381-.672 2.5-1.5 2.5"></svg:path>`,
})
export class RiSafe2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSafe3LineIcon],svg[ri-safe-3-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1h-1v2h-2v-2H6v2H4v-2H3a1 1 0 0 1-1-1zm2 14h16V5H4zm11.35-9.764a3.76 3.76 0 0 0-3.7 0l-1.332-1.332l-1.414 1.414l1.333 1.333a3.76 3.76 0 0 0 0 3.698l-1.333 1.333l1.414 1.414l1.333-1.333a3.76 3.76 0 0 0 3.698 0l1.333 1.333l1.414-1.414l-1.333-1.333a3.76 3.76 0 0 0 0-3.698l1.333-1.333l-1.414-1.414zm-.613 2.026a1.75 1.75 0 1 1-2.474 2.475a1.75 1.75 0 0 1 2.474-2.475M5 8v7h2V8z"></svg:path>`,
})
export class RiSafe3LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSafeLineIcon],svg[ri-safe-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.005 20h-12v2h-2v-2h-1a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1h-1v2h-2zm-14-2h16V5h-16zm9-4.126V17h-2v-3.126a4.002 4.002 0 0 1 1-7.874a4 4 0 0 1 1 7.874m-1-1.874a2 2 0 1 0 0-4a2 2 0 0 0 0 4"></svg:path>`,
})
export class RiSafeLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSailboatLineIcon],svg[ri-sailboat-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 18h18a.5.5 0 0 1 .4.8l-2.1 2.8a1 1 0 0 1-.8.4h-13a1 1 0 0 1-.8-.4l-2.1-2.8A.5.5 0 0 1 3 18m4.161-4H13V6.702zM15 2.425V15a1 1 0 0 1-1 1H4.04a.5.5 0 0 1-.39-.812L14.11 2.113a.5.5 0 0 1 .89.312"></svg:path>`,
})
export class RiSailboatLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSave2LineIcon],svg[ri-save-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 5v14h14V7.828L16.172 5zM4 3h13l3.707 3.707a1 1 0 0 1 .293.707V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m8 15a3 3 0 1 1 0-6a3 3 0 0 1 0 6M6 6h9v4H6z"></svg:path>`,
})
export class RiSave2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSave3LineIcon],svg[ri-save-3-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 19h1V6.828L17.172 5H16v4H7V5H5v14h1v-7h12zM4 3h14l2.707 2.707a1 1 0 0 1 .293.707V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m4 11v5h8v-5z"></svg:path>`,
})
export class RiSave3LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSaveLineIcon],svg[ri-save-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 19v-6h10v6h2V7.828L16.172 5H5v14zM4 3h13l4 4v13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m5 12v4h6v-4z"></svg:path>`,
})
export class RiSaveLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riScales2LineIcon],svg[ri-scales-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.998 2c0 .513.49 1 1 1h10c.513 0 1-.49 1-1h2a3 3 0 0 1-3 3h-4l.001 2.062A8 8 0 0 1 19.998 15v6a1 1 0 0 1-1 1h-14a1 1 0 0 1-1-1v-6a8 8 0 0 1 7-7.938V5h-4c-1.66 0-3-1.34-3-3zm6 7c-3.238 0-6 2.76-6 6v5h12v-5c0-3.238-2.762-6-6-6m0 2c.742 0 1.437.202 2.032.554l-2.74 2.739a1 1 0 0 0 1.32 1.497l.095-.083l2.74-2.739A4 4 0 1 1 11.998 11"></svg:path>`,
})
export class RiScales2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riScales3LineIcon],svg[ri-scales-3-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12.999 2l-.001 1.278l5 1.668l3.633-1.21l.632 1.896l-3.031 1.011l3.095 8.512A5.98 5.98 0 0 1 17.998 17a5.98 5.98 0 0 1-4.328-1.845l3.094-8.512l-3.766-1.256V19h4v2h-10v-2h4V5.387L7.232 6.643l3.095 8.512A5.98 5.98 0 0 1 6 17a5.98 5.98 0 0 1-4.33-1.845l3.095-8.512l-3.03-1.01l.632-1.898L6 4.945l4.999-1.667V2zm5 7.103l-1.959 5.386a4 4 0 0 0 1.959.511c.7 0 1.37-.18 1.958-.51zm-12 0L4.04 14.489A4 4 0 0 0 5.999 15c.7 0 1.37-.18 1.958-.51z"></svg:path>`,
})
export class RiScales3LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riScalesLineIcon],svg[ri-scales-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.998 2v1h7v2h-7v14h4v2h-10v-2h4V5h-7V3h7V2zm-8 4.343l2.828 2.829a4 4 0 1 1-5.657 0zm14 0l2.828 2.829a4 4 0 1 1-5.657 0zm-14 2.829l-1.414 1.414a2 2 0 1 0 2.828 0zm14 0l-1.414 1.414a2 2 0 1 0 2.828 0z"></svg:path>`,
})
export class RiScalesLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riScan2LineIcon],svg[ri-scan-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.671 4.257L13.414 12L12 13.414L8.554 9.968a4 4 0 1 0 3.696-1.96l-1.804-1.805a6 6 0 1 1-3.337 2.32L5.68 7.094a8 8 0 1 0 3.196-2.461L7.374 3.132A9.96 9.96 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12a9.98 9.98 0 0 1 3.671-7.743"></svg:path>`,
})
export class RiScan2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riScanLineIcon],svg[ri-scan-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.671 4.257L13.414 12L12 13.414l-6.32-6.32a8 8 0 1 0 3.706-2.658L7.85 2.9A10 10 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12a9.98 9.98 0 0 1 3.671-7.743"></svg:path>`,
})
export class RiScanLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSchoolLineIcon],svg[ri-school-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 .586l6 6V9h4v10h1v2H1v-2h1V9h4V6.586zM18 19h2v-8h-2zM6 11H4v8h2zm2-3.586V19h3v-7h2v7h3V7.414l-4-4z"></svg:path>`,
})
export class RiSchoolLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riScissors2LineIcon],svg[ri-scissors-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 13.41l-2.554 2.555a4 4 0 1 1-1.414-1.414l2.554-2.554l-6.021-6.021a2 2 0 0 1 0-2.829L12 10.582l7.435-7.435a2 2 0 0 1 0 2.829l-6.02 6.02l2.553 2.554a4 4 0 1 1-1.414 1.414zm-6 6.587a2 2 0 1 0 0-4a2 2 0 0 0 0 4m12 0a2 2 0 1 0 0-4a2 2 0 0 0 0 4"></svg:path>`,
})
export class RiScissors2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riScissorsCutLineIcon],svg[ri-scissors-cut-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 5.997c0 .732-.197 1.419-.54 2.01L12 10.582l6.728-6.728a2 2 0 0 1 2.828 0l-12.11 12.11a4 4 0 1 1-1.414-1.414l2.554-2.554l-2.554-2.554A4 4 0 1 1 10 5.997m-2 0a2 2 0 1 0-4 0a2 2 0 0 0 4 0m13.556 14.142a2 2 0 0 1-2.828 0l-5.317-5.317l1.415-1.414zM16 10.997h2v2h-2zm4 0h2v2h-2zm-14 0h2v2H6zm-4 0h2v2H2zm4 9a2 2 0 1 0 0-4a2 2 0 0 0 0 4"></svg:path>`,
})
export class RiScissorsCutLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riScissorsLineIcon],svg[ri-scissors-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.446 8.029L12 10.582l6.728-6.727a2 2 0 0 1 2.828 0l-12.11 12.11a4 4 0 1 1-1.414-1.414l2.554-2.554l-2.554-2.554a4 4 0 1 1 1.414-1.414m5.38 5.379l6.73 6.73a2 2 0 0 1-2.828 0l-5.317-5.316zm-7.412 3.175a2 2 0 1 0-2.828 2.828a2 2 0 0 0 2.828-2.829m0-9.172a2 2 0 1 0-2.828-2.828A2 2 0 0 0 7.414 7.41"></svg:path>`,
})
export class RiScissorsLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riScreenshot2LineIcon],svg[ri-screenshot-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 3h2v2H3zm4 0h2v2H7zm4 0h2v2h-2zm4 0h2v2h-2zm4 0h2v2h-2zm0 4h2v2h-2zM3 19h2v2H3zm0-4h2v2H3zm0-4h2v2H3zm0-4h2v2H3zm7.667 4l1.036-1.555A1 1 0 0 1 12.535 9h2.93a1 1 0 0 1 .832.445L17.333 11H20a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1zM9 19h10v-6h-2.737l-1.333-2h-1.86l-1.333 2H9zm5-1a2 2 0 1 1 0-4a2 2 0 0 1 0 4"></svg:path>`,
})
export class RiScreenshot2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riScreenshotLineIcon],svg[ri-screenshot-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11.993 14.407l-1.552 1.552a4 4 0 1 1-1.418-1.41l1.555-1.556l-4.185-4.185l1.415-1.415l4.185 4.185l4.189-4.189l1.414 1.414l-4.19 4.19l1.562 1.56a4 4 0 1 1-1.414 1.414zM7 20a2 2 0 1 0 0-4a2 2 0 0 0 0 4m10 0a2 2 0 1 0 0-4a2 2 0 0 0 0 4m2-7V5H5v8H3V4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v9z"></svg:path>`,
})
export class RiScreenshotLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riScrollToBottomLineIcon],svg[ri-scroll-to-bottom-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.013 4.565C8.753 4.169 9.559 4 11.14 4h1.718c1.582 0 2.387.169 3.128.565q.945.504 1.448 1.448c.396.74.565 1.546.565 3.128v5.718c0 1.582-.169 2.387-.565 3.128a3.45 3.45 0 0 1-1.448 1.448c-.74.396-1.546.565-3.128.565H11.14c-1.582 0-2.387-.169-3.128-.565a3.45 3.45 0 0 1-1.448-1.448C6.169 17.247 6 16.441 6 14.86V9.14c0-1.582.169-2.387.565-3.128a3.45 3.45 0 0 1 1.448-1.448M12.859 2H11.14c-2.014 0-3.094.278-4.072.801A5.45 5.45 0 0 0 4.801 5.07C4.278 6.047 4 7.127 4 9.141v5.718c0 2.014.278 3.094.801 4.071A5.45 5.45 0 0 0 7.07 21.2c.978.522 2.058.801 4.072.801h1.718c2.014 0 3.094-.279 4.071-.801a5.45 5.45 0 0 0 2.269-2.27c.522-.977.801-2.057.801-4.071V9.14c0-2.014-.279-3.094-.801-4.072A5.45 5.45 0 0 0 16.931 2.8c-.978-.522-2.058-.8-4.071-.8M13 6h-2v5h2zm-5.242 7.758L12 18.001l4.242-4.243l-1.414-1.414L12 15.172l-2.829-2.828z"></svg:path>`,
})
export class RiScrollToBottomLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSdCardLineIcon],svg[ri-sd-card-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 7.828V20h12V4H9.828zm-1.707-1.12L9 2h10a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7.414a1 1 0 0 1 .293-.707M15 5h2v4h-2zm-3 0h2v4h-2zM9 6h2v3H9z"></svg:path>`,
})
export class RiSdCardLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSdCardMiniLineIcon],svg[ri-sd-card-mini-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 4v5.793a2.5 2.5 0 0 1-.73 1.765L6 12.833V20h12V4zM7 2h12a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-8.58a1 1 0 0 1 .292-.707l1.562-1.567A.5.5 0 0 0 6 9.793V3a1 1 0 0 1 1-1m8 3h2v4h-2zm-3 0h2v4h-2zM9 5h2v4H9z"></svg:path>`,
})
export class RiSdCardMiniLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSearch2LineIcon],svg[ri-search-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 2c4.968 0 9 4.032 9 9s-4.032 9-9 9s-9-4.032-9-9s4.032-9 9-9m0 16c3.867 0 7-3.133 7-7s-3.133-7-7-7s-7 3.133-7 7s3.133 7 7 7m8.485.071l2.829 2.828l-1.415 1.415l-2.828-2.829z"></svg:path>`,
})
export class RiSearch2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSearchEyeLineIcon],svg[ri-search-eye-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m18.031 16.617l4.283 4.282l-1.415 1.415l-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9s9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617m-2.006-.742A6.98 6.98 0 0 0 18 11c0-3.867-3.133-7-7-7s-7 3.133-7 7s3.133 7 7 7a6.98 6.98 0 0 0 4.875-1.975zm-3.847-8.699a2 2 0 1 0 2.646 2.646a4 4 0 1 1-2.646-2.646"></svg:path>`,
})
export class RiSearchEyeLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSearchLineIcon],svg[ri-search-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m18.031 16.617l4.283 4.282l-1.415 1.415l-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9s9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617m-2.006-.742A6.98 6.98 0 0 0 18 11c0-3.867-3.133-7-7-7s-7 3.133-7 7s3.133 7 7 7a6.98 6.98 0 0 0 4.875-1.975z"></svg:path>`,
})
export class RiSearchLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSecurePaymentLineIcon],svg[ri-secure-payment-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11.005 2l7.298 2.28a1 1 0 0 1 .702.955V7h2a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1l-3.22.001c-.387.51-.857.96-1.4 1.33L11.005 22l-5.38-3.668a6 6 0 0 1-2.62-4.958V5.235a1 1 0 0 1 .702-.954zm0 2.094l-6 1.876v7.404a4 4 0 0 0 1.558 3.169l.189.136l4.253 2.9L14.787 17h-4.782a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h7V5.97zm0 7.906v3h9v-3zm0-2h9V9h-9z"></svg:path>`,
})
export class RiSecurePaymentLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSeedlingLineIcon],svg[ri-seedling-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.998 3a7 7 0 0 1 6.913 5.895A6.48 6.48 0 0 1 17.498 7h4.5v2.5a6.5 6.5 0 0 1-6.5 6.5h-2.5v5h-2v-8h-2a7 7 0 0 1-7-7V3zm14 6h-2.5a4.5 4.5 0 0 0-4.5 4.5v.5h2.5a4.5 4.5 0 0 0 4.5-4.5zm-14-4h-2v1a5 5 0 0 0 5 5h2v-1a5 5 0 0 0-5-5"></svg:path>`,
})
export class RiSeedlingLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSendPlane2LineIcon],svg[ri-send-plane-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.5 1.346a.5.5 0 0 1 .241.061l18.462 10.155a.5.5 0 0 1 0 .876L3.741 22.592A.5.5 0 0 1 3 22.154V1.846a.5.5 0 0 1 .5-.5M5 4.382V11h5v2H5v6.617L18.85 12z"></svg:path>`,
})
export class RiSendPlane2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSendPlaneLineIcon],svg[ri-send-plane-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m21.727 2.957l-5.454 19.086c-.15.529-.475.553-.717.07L11 13L1.923 9.37c-.51-.205-.503-.51.034-.689L21.043 2.32c.529-.176.832.12.684.638m-2.692 2.14L6.812 9.17l5.637 2.255l3.04 6.08z"></svg:path>`,
})
export class RiSendPlaneLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSensorLineIcon],svg[ri-sensor-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 8v11h12V8h-3V2h2v4h5v2h-2v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8H2V6h5V2h2v6zm7-6v6h-2V2z"></svg:path>`,
})
export class RiSensorLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSeoLineIcon],svg[ri-seo-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 3a7 7 0 0 0 0 14h1.07a7 7 0 0 1 0-2H8A5 5 0 0 1 8 5h8a5 5 0 0 1 4.9 6a7 7 0 0 1 1.426 2A7 7 0 0 0 16 3zm8 10a3 3 0 1 0 0 6a3 3 0 0 0 0-6m-5 3a5 5 0 1 1 9.172 2.757l2.535 2.536l-1.414 1.414l-2.536-2.535A5 5 0 0 1 11 16"></svg:path>`,
})
export class RiSeoLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riServerLineIcon],svg[ri-server-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 11h14V5H5zm16-7v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1m-2 9H5v6h14zM7 15h3v2H7zm0-8h3v2H7z"></svg:path>`,
})
export class RiServerLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riServiceBellLineIcon],svg[ri-service-bell-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 3H9v2h2v1.05c-5.053.5-9 4.764-9 9.95v1h20v-1c0-5.185-3.947-9.449-9-9.95V5h2zm-3 5a8 8 0 0 1 7.938 7H4.062A8 8 0 0 1 12 8m11 12v-2H1v2z"></svg:path>`,
})
export class RiServiceBellLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riServiceLineIcon],svg[ri-service-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.161 4.469a6.5 6.5 0 0 1 8.84-.328a6.5 6.5 0 0 1 9.178 9.154l-7.765 7.79a2 2 0 0 1-2.719.102l-.11-.101l-7.764-7.791a6.5 6.5 0 0 1 .34-8.826m1.414 1.414a4.5 4.5 0 0 0-.146 6.21l.146.154L12 19.672l5.303-5.305l-3.535-3.534l-1.06 1.06a3 3 0 0 1-4.244-4.242l2.102-2.103a4.5 4.5 0 0 0-5.837.189zm8.486 2.828a1 1 0 0 1 1.414 0l4.242 4.242l.708-.706a4.5 4.5 0 0 0-6.211-6.51l-.153.146l-3.182 3.182a1 1 0 0 0-.078 1.327l.078.087a1 1 0 0 0 1.327.078l.087-.078z"></svg:path>`,
})
export class RiServiceLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSettings2LineIcon],svg[ri-settings-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m8.686 4l2.607-2.607a1 1 0 0 1 1.414 0L15.314 4H19a1 1 0 0 1 1 1v3.686l2.607 2.607a1 1 0 0 1 0 1.414L20 15.314V19a1 1 0 0 1-1 1h-3.686l-2.607 2.607a1 1 0 0 1-1.414 0L8.686 20H5a1 1 0 0 1-1-1v-3.686l-2.607-2.607a1 1 0 0 1 0-1.414L4 8.686V5a1 1 0 0 1 1-1zM6 6v3.515L3.515 12L6 14.485V18h3.515L12 20.485L14.485 18H18v-3.515L20.485 12L18 9.515V6h-3.515L12 3.515L9.515 6zm6 10a4 4 0 1 1 0-8a4 4 0 0 1 0 8m0-2a2 2 0 1 0 0-4a2 2 0 0 0 0 4"></svg:path>`,
})
export class RiSettings2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSettings3LineIcon],svg[ri-settings-3-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.34 17a10 10 0 0 1-.979-2.326a3 3 0 0 0 .003-5.347a10 10 0 0 1 2.5-4.337a3 3 0 0 0 4.632-2.674a10 10 0 0 1 5.007.003a3 3 0 0 0 4.632 2.671a10.06 10.06 0 0 1 2.503 4.336a3 3 0 0 0-.002 5.347a10 10 0 0 1-2.501 4.337a3 3 0 0 0-4.632 2.674a10 10 0 0 1-5.007-.002a3 3 0 0 0-4.631-2.672A10 10 0 0 1 3.339 17m5.66.196a5 5 0 0 1 2.25 2.77q.75.07 1.499.002a5 5 0 0 1 2.25-2.772a5 5 0 0 1 3.526-.564q.435-.614.748-1.298A5 5 0 0 1 18 12c0-1.26.47-2.437 1.273-3.334a8 8 0 0 0-.75-1.298A5 5 0 0 1 15 6.804a5 5 0 0 1-2.25-2.77q-.75-.071-1.5-.001A5 5 0 0 1 9 6.804a5 5 0 0 1-3.526.564q-.436.614-.747 1.298A5 5 0 0 1 6 12c0 1.26-.471 2.437-1.273 3.334a8 8 0 0 0 .75 1.298A5 5 0 0 1 9 17.196M12 15a3 3 0 1 1 0-6a3 3 0 0 1 0 6m0-2a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></svg:path>`,
})
export class RiSettings3LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSettings4LineIcon],svg[ri-settings-4-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 12c0-.865.11-1.704.316-2.504A3 3 0 0 0 4.99 4.867a10 10 0 0 1 4.335-2.506a3 3 0 0 0 5.348 0a10 10 0 0 1 4.335 2.506a3 3 0 0 0 2.675 4.63c.206.8.316 1.638.316 2.503c0 .864-.11 1.703-.316 2.503a3 3 0 0 0-2.675 4.63a10 10 0 0 1-4.335 2.505a3 3 0 0 0-5.348 0a10 10 0 0 1-4.335-2.505a3 3 0 0 0-2.675-4.63C2.11 13.703 2 12.864 2 12m4.804 3c.63 1.091.81 2.346.564 3.524q.613.436 1.297.75A5 5 0 0 1 12 18c1.26 0 2.438.471 3.335 1.274q.684-.314 1.297-.75A5 5 0 0 1 17.196 15a5 5 0 0 1 2.77-2.25a8 8 0 0 0 0-1.5A5 5 0 0 1 17.196 9a5 5 0 0 1-.564-3.524a8 8 0 0 0-1.297-.75A5 5 0 0 1 12 6a5 5 0 0 1-3.335-1.274a8 8 0 0 0-1.297.75A5 5 0 0 1 6.804 9a5 5 0 0 1-2.77 2.25a8 8 0 0 0 0 1.5A5 5 0 0 1 6.805 15M12 15a3 3 0 1 1 0-6a3 3 0 0 1 0 6m0-2a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></svg:path>`,
})
export class RiSettings4LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSettings5LineIcon],svg[ri-settings-5-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.212 14.06a9.95 9.95 0 0 1 .001-4.12c1.11.131 2.079-.236 2.396-1.001s-.109-1.71-.986-2.402a9.95 9.95 0 0 1 2.913-2.914c.692.878 1.637 1.303 2.402.986s1.133-1.286 1.002-2.396a9.95 9.95 0 0 1 4.12 0c-.131 1.11.236 2.08 1.001 2.396c.765.317 1.71-.108 2.402-.985a9.9 9.9 0 0 1 2.914 2.912c-.878.692-1.303 1.638-.986 2.403s1.286 1.132 2.396 1.001a9.95 9.95 0 0 1 0 4.12c-1.11-.13-2.08.237-2.396 1.002c-.317.764.108 1.71.985 2.402a9.95 9.95 0 0 1-2.912 2.914c-.693-.878-1.638-1.304-2.403-.987s-1.132 1.286-1.001 2.397a9.9 9.9 0 0 1-4.12-.001c.13-1.11-.237-2.079-1.002-2.396s-1.71.109-2.402.986a9.9 9.9 0 0 1-2.914-2.913c.878-.692 1.304-1.637.987-2.402s-1.286-1.133-2.397-1.002M4 12.21c1.1.305 2.007 1.002 2.456 2.086c.45 1.085.3 2.22-.262 3.212q.145.153.298.298c.993-.563 2.127-.712 3.212-.262c1.084.449 1.781 1.356 2.085 2.456q.21.006.42 0c.305-1.1 1.002-2.007 2.087-2.456c1.084-.45 2.219-.3 3.212.262q.152-.145.297-.298c-.562-.993-.711-2.127-.262-3.212c.45-1.084 1.357-1.781 2.456-2.085q.006-.21 0-.421c-1.1-.304-2.007-1.001-2.456-2.086c-.45-1.084-.3-2.22.262-3.212a8 8 0 0 0-.297-.297c-.993.562-2.128.711-3.212.262C13.21 6.007 12.514 5.1 12.21 4a8 8 0 0 0-.42 0c-.305 1.1-1.002 2.008-2.086 2.457c-1.085.45-2.22.3-3.212-.262q-.153.144-.298.297c.563.993.712 2.128.262 3.212S5.1 11.485 4 11.79q-.006.21 0 .42M12 15a3 3 0 1 1 0-6a3 3 0 0 1 0 6m0-2a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></svg:path>`,
})
export class RiSettings5LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSettings6LineIcon],svg[ri-settings-6-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.5 2.474L23 12l-5.5 9.526h-11L1 12l5.5-9.526zm-1.155 2h-8.69L3.309 12l4.346 7.526h8.69L20.691 12zM8.634 8.17l1.732-1l5 8.66l-1.732 1z"></svg:path>`,
})
export class RiSettings6LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSettingsLineIcon],svg[ri-settings-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 1l9.5 5.5v11L12 23l-9.5-5.5v-11zm0 2.311L4.5 7.653v8.694l7.5 4.342l7.5-4.342V7.653zM12 16a4 4 0 1 1 0-8a4 4 0 0 1 0 8m0-2a2 2 0 1 0 0-4a2 2 0 0 0 0 4"></svg:path>`,
})
export class RiSettingsLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riShadowLineIcon],svg[ri-shadow-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 2a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h3v3a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1h-3V3a1 1 0 0 0-1-1zm15 9.56l2 2v2.88l-2-2zm0-2.12V8h2v3.44zM18 17v-.44l2 2V20h-1.44l-2-2H17a1 1 0 0 0 1-1m-3.56 1l2 2h-2.88l-2-2zm-5 0l2 2H8v-2zM4 16V4h12v12z"></svg:path>`,
})
export class RiShadowLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riShakeHandsLineIcon],svg[ri-shake-hands-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.861 2.39a3 3 0 0 1 3.275-.034L19.29 5H21a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1h-1.52a2.65 2.65 0 0 1-1.285 2.449l-5.093 3.056a2 2 0 0 1-2.07-.008a2 2 0 0 1-2.561.073l-5.14-4.039a2 2 0 0 1-.565-2.446A2 2 0 0 1 2 13.51V6a1 1 0 0 1 1-1h4.947zM4.173 13.646l.692-.605a3 3 0 0 1 4.195.24l2.702 2.972a3 3 0 0 1 .396 3.487l5.009-3.005a.66.66 0 0 0 .278-.79l-4.427-6.198a1 1 0 0 0-1.101-.377l-2.486.745a3 3 0 0 1-2.983-.752l-.293-.292A2 2 0 0 1 5.68 7H4v6.51zm9.89-9.602a1 1 0 0 0-1.093.012l-5.4 3.6l.292.293a1 1 0 0 0 .995.25l2.485-.745a3 3 0 0 1 3.303 1.13L18.515 14H20V7h-.709a2 2 0 0 1-1.074-.313zM6.181 14.545l-1.616 1.414l5.14 4.039l.705-1.232a1 1 0 0 0-.129-1.169L7.58 14.625a1 1 0 0 0-1.398-.08"></svg:path>`,
})
export class RiShakeHandsLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riShape2LineIcon],svg[ri-shape-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 16h2v6h-6v-2H8v2H2v-6h2V8H2V2h6v2h8V2h6v6h-2zm-2 0V8h-2V6H8v2H6v8h2v2h8v-2zM4 4v2h2V4zm0 14v2h2v-2zM18 4v2h2V4zm0 14v2h2v-2z"></svg:path>`,
})
export class RiShape2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riShapeLineIcon],svg[ri-shape-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.83 20A3.001 3.001 0 1 1 4 16.17V7.83A3.001 3.001 0 1 1 7.83 4h8.34A3.001 3.001 0 1 1 20 7.83v8.34A3.001 3.001 0 1 1 16.17 20zm0-2h8.34A3 3 0 0 1 18 16.17V7.83A3 3 0 0 1 16.17 6H7.83A3 3 0 0 1 6 7.83v8.34A3 3 0 0 1 7.83 18M5 6a1 1 0 1 0 0-2a1 1 0 0 0 0 2m14 0a1 1 0 1 0 0-2a1 1 0 0 0 0 2m0 14a1 1 0 1 0 0-2a1 1 0 0 0 0 2M5 20a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></svg:path>`,
})
export class RiShapeLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riShapesLineIcon],svg[ri-shapes-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 1L6 11h12zm0 3.887L14.468 9H9.532zM6.75 20a2.75 2.75 0 1 1 0-5.5a2.75 2.75 0 0 1 0 5.5m0 2a4.75 4.75 0 1 0 0-9.5a4.75 4.75 0 0 0 0 9.5M15 15.5v4h4v-4zm-2 6v-8h8v8z"></svg:path>`,
})
export class RiShapesLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riShare2LineIcon],svg[ri-share-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 2.586l6.207 6.207l-1.414 1.414L13 6.414V16h-2V6.414l-3.793 3.793l-1.414-1.414zM3 18v-4h2v4a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-4h2v4a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3"></svg:path>`,
})
export class RiShare2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riShareBoxLineIcon],svg[ri-share-box-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 3v2H5v14h14v-5h2v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm7.586 2H13V3h8v8h-2V6.414l-7 7L10.586 12z"></svg:path>`,
})
export class RiShareBoxLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riShareCircleLineIcon],svg[ri-share-circle-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 2.05v2.012A8.001 8.001 0 0 0 12 20a8 8 0 0 0 7.938-7h2.013c-.502 5.053-4.766 9-9.951 9c-5.523 0-10-4.477-10-10c0-5.185 3.947-9.449 9-9.95m9 3.364l-8 8L10.586 12l8-8H14V2h8v8h-2z"></svg:path>`,
})
export class RiShareCircleLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riShareForward2LineIcon],svg[ri-share-forward-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 19h16v-5h2v6a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-6h2zM16.172 7l-3.95-3.95l1.414-1.414L20 8l-6.364 6.364l-1.414-1.415L16.172 9H5V7z"></svg:path>`,
})
export class RiShareForward2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riShareForwardBoxLineIcon],svg[ri-share-forward-box-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 3v2H4v14h16v-9h2v10a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm9.95 2L16 2.05L17.414.636l5.34 5.34A.6.6 0 0 1 22.33 7H14a2 2 0 0 0-2 2v6h-2V9a4 4 0 0 1 4-4z"></svg:path>`,
})
export class RiShareForwardBoxLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riShareForwardLineIcon],svg[ri-share-forward-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 14h-2a9 9 0 0 0-7.968 4.81A10 10 0 0 1 3 18C3 12.477 7.477 8 13 8V2.5L23.5 11L13 19.5zm-2-2h4v3.308L20.321 11L15 6.692V10h-2a7.98 7.98 0 0 0-6.057 2.774A11 11 0 0 1 11 12"></svg:path>`,
})
export class RiShareForwardLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riShareLineIcon],svg[ri-share-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13.12 17.023l-4.199-2.29a4 4 0 1 1 0-5.465l4.2-2.29a4 4 0 1 1 .958 1.755l-4.2 2.29a4 4 0 0 1 0 1.954l4.2 2.29a4 4 0 1 1-.959 1.755M6 14a2 2 0 1 0 0-4a2 2 0 0 0 0 4m11-6a2 2 0 1 0 0-4a2 2 0 0 0 0 4m0 12a2 2 0 1 0 0-4a2 2 0 0 0 0 4"></svg:path>`,
})
export class RiShareLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riShieldCheckLineIcon],svg[ri-shield-check-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 1l8.217 1.826a1 1 0 0 1 .783.976v9.987a6 6 0 0 1-2.672 4.992L12 23l-6.328-4.219A6 6 0 0 1 3 13.79V3.802a1 1 0 0 1 .783-.976zm0 2.049L5 4.604v9.185a4 4 0 0 0 1.781 3.328L12 20.597l5.219-3.48A4 4 0 0 0 19 13.79V4.604zm4.452 5.173l1.415 1.414L11.503 16L7.26 11.757l1.414-1.414l2.828 2.828z"></svg:path>`,
})
export class RiShieldCheckLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riShieldCrossLineIcon],svg[ri-shield-cross-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.783 2.826L12 1l8.217 1.826a1 1 0 0 1 .783.976v9.987a6 6 0 0 1-2.672 4.992L12 23l-6.328-4.219A6 6 0 0 1 3 13.79V3.802a1 1 0 0 1 .783-.976M5 4.604v9.185a4 4 0 0 0 1.781 3.328L12 20.597l5.219-3.48A4 4 0 0 0 19 13.79V4.604L12 3.05zM11 10V7h2v3h3v2h-3v3h-2v-3H8v-2z"></svg:path>`,
})
export class RiShieldCrossLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riShieldFlashLineIcon],svg[ri-shield-flash-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.783 2.826L12 1l8.217 1.826a1 1 0 0 1 .783.976v9.987a6 6 0 0 1-2.672 4.992L12 23l-6.328-4.219A6 6 0 0 1 3 13.79V3.802a1 1 0 0 1 .783-.976M5 4.604v9.185a4 4 0 0 0 1.781 3.328L12 20.597l5.219-3.48A4 4 0 0 0 19 13.79V4.604L12 3.05zM13 10h3l-5 7v-5H8l5-7z"></svg:path>`,
})
export class RiShieldFlashLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riShieldKeyholeLineIcon],svg[ri-shield-keyhole-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 1l8.217 1.826a1 1 0 0 1 .783.976v9.987a6 6 0 0 1-2.672 4.992L12 23l-6.328-4.219A6 6 0 0 1 3 13.79V3.802a1 1 0 0 1 .783-.976zm0 2.049L5 4.604v9.185a4 4 0 0 0 1.781 3.328L12 20.597l5.219-3.48A4 4 0 0 0 19 13.79V4.604zM12 7a2 2 0 0 1 1.001 3.732L13 15h-2v-4.268A2 2 0 0 1 12 7"></svg:path>`,
})
export class RiShieldKeyholeLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riShieldLineIcon],svg[ri-shield-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.783 2.826L12 1l8.217 1.826a1 1 0 0 1 .783.976v9.987a6 6 0 0 1-2.672 4.992L12 23l-6.328-4.219A6 6 0 0 1 3 13.79V3.802a1 1 0 0 1 .783-.976M5 4.604v9.185a4 4 0 0 0 1.781 3.328L12 20.597l5.219-3.48A4 4 0 0 0 19 13.79V4.604L12 3.05z"></svg:path>`,
})
export class RiShieldLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riShieldStarLineIcon],svg[ri-shield-star-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 4.604v9.185a4 4 0 0 0 1.781 3.328L12 20.597l5.219-3.48A4 4 0 0 0 19 13.79V4.604L12 3.05zM3.783 2.826L12 1l8.217 1.826a1 1 0 0 1 .783.976v9.987a6 6 0 0 1-2.672 4.992L12 23l-6.328-4.219A6 6 0 0 1 3 13.79V3.802a1 1 0 0 1 .783-.976M12 13.5l-2.939 1.545l.561-3.272l-2.377-2.318l3.286-.478L12 6l1.47 2.977l3.285.478l-2.377 2.318l.56 3.272z"></svg:path>`,
})
export class RiShieldStarLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riShieldUserLineIcon],svg[ri-shield-user-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.783 2.826L12 1l8.217 1.826a1 1 0 0 1 .783.976v9.987a6 6 0 0 1-2.672 4.992L12 23l-6.328-4.219A6 6 0 0 1 3 13.79V3.802a1 1 0 0 1 .783-.976M5 4.604v9.185a4 4 0 0 0 1.781 3.328L12 20.597l5.219-3.48A4 4 0 0 0 19 13.79V4.604L12 3.05zM12 11a2.5 2.5 0 1 1 0-5a2.5 2.5 0 0 1 0 5m-4.473 5a4.5 4.5 0 0 1 8.946 0z"></svg:path>`,
})
export class RiShieldUserLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riShining2LineIcon],svg[ri-shining-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16 8l7.5 4l-7.5 4l-4 7.5L8 16L.5 12L8 8l4-7.5zm3.25 4l-4.728-2.522L12 4.75L9.478 9.478L4.75 12l4.728 2.522L12 19.25l2.522-4.728z"></svg:path>`,
})
export class RiShining2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riShiningLineIcon],svg[ri-shining-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 11c5.523 0 10-4.477 10-10h2c0 5.523 4.477 10 10 10v2c-5.523 0-10 4.477-10 10h-2c0-5.523-4.477-10-10-10zm4.803 1A12.04 12.04 0 0 1 12 18.197A12.04 12.04 0 0 1 18.197 12A12.04 12.04 0 0 1 12 5.803A12.04 12.04 0 0 1 5.803 12"></svg:path>`,
})
export class RiShiningLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riShip2LineIcon],svg[ri-ship-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 4h5.446a1 1 0 0 1 .848.47L18.75 10h4.408a.5.5 0 0 1 .439.74L19.637 18H19a6 6 0 0 1-1.535-.198L20.63 12H3.4l1.048 5.824A6 6 0 0 1 3 18h-.545l-1.24-6.821A1 1 0 0 1 2.197 10H3V5a1 1 0 0 1 1-1h1V1h4zm-4 6h11.392l-2.5-4H5zM3 20a5.98 5.98 0 0 0 4-1.528A5.98 5.98 0 0 0 11 20a5.98 5.98 0 0 0 4-1.528A5.98 5.98 0 0 0 19 20h2v2h-2a7.96 7.96 0 0 1-4-1.07A7.96 7.96 0 0 1 11 22a7.96 7.96 0 0 1-4-1.07A7.96 7.96 0 0 1 3 22H1v-2z"></svg:path>`,
})
export class RiShip2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riShipLineIcon],svg[ri-ship-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 10.4V4a1 1 0 0 1 1-1h5V1h4v2h5a1 1 0 0 1 1 1v6.4l1.086.326a1 1 0 0 1 .683 1.2l-1.517 6.068a5 5 0 0 1-1.902-.273l1.25-5.351L12 10l-7.6 2.37l1.25 5.351a5 5 0 0 1-1.902.273l-1.516-6.068a1 1 0 0 1 .682-1.2zm2-.6L12 8l6 1.8V5H6zM4 20a5.98 5.98 0 0 0 4-1.528A5.98 5.98 0 0 0 12 20a5.98 5.98 0 0 0 4-1.528A5.98 5.98 0 0 0 20 20h2v2h-2a7.96 7.96 0 0 1-4-1.07A7.96 7.96 0 0 1 12 22a7.96 7.96 0 0 1-4-1.07A7.96 7.96 0 0 1 4 22H2v-2z"></svg:path>`,
})
export class RiShipLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riShirtLineIcon],svg[ri-shirt-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.998 20h6v-4h-4v-2h4V6h-2v5l-4-1.6zm-2 0V9.4l-4 1.6V6h-2v14zm-4-16V3h10v1h3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-16a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1zm5 4l3.5-3h-7z"></svg:path>`,
})
export class RiShirtLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riShoppingBag2LineIcon],svg[ri-shopping-bag-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.005 22h-16a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1m-1-2V4h-14v16zm-10-14v2a3 3 0 1 0 6 0V6h2v2a5 5 0 0 1-10 0V6z"></svg:path>`,
})
export class RiShoppingBag2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riShoppingBag3LineIcon],svg[ri-shopping-bag-3-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.505 2h11a1 1 0 0 1 .8.4l2.7 3.6v15a1 1 0 0 1-1 1h-16a1 1 0 0 1-1-1V6l2.7-3.6a1 1 0 0 1 .8-.4m12.5 6h-14v12h14zm-.5-2l-1.5-2h-10l-1.5 2zm-9.5 4v2a3 3 0 1 0 6 0v-2h2v2a5 5 0 0 1-10 0v-2z"></svg:path>`,
})
export class RiShoppingBag3LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riShoppingBag4LineIcon],svg[ri-shopping-bag-4-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 6h6a3 3 0 1 0-6 0M7 6a5 5 0 0 1 10 0h3a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1zM5 8v12h14V8zm4 2a3 3 0 1 0 6 0h2a5 5 0 0 1-10 0z"></svg:path>`,
})
export class RiShoppingBag4LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riShoppingBagLineIcon],svg[ri-shopping-bag-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.005 8V6a5 5 0 0 1 10 0v2h3a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-16a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1zm0 2h-2v10h14V10h-2v2h-2v-2h-6v2h-2zm2-2h6V6a3 3 0 0 0-6 0z"></svg:path>`,
})
export class RiShoppingBagLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riShoppingBasket2LineIcon],svg[ri-shopping-basket-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m15.37 3.44l3.212 5.562h3.423v2h-1.167l-.757 9.083a1 1 0 0 1-.996.917H4.925a1 1 0 0 1-.997-.917l-.757-9.083H2.005v-2h3.422L8.639 3.44l1.732 1l-2.634 4.562h8.535L13.639 4.44zm3.46 7.562H5.179l.667 8h12.319zm-5.825 2v4h-2v-4zm-4 0v4h-2v-4zm8 0v4h-2v-4z"></svg:path>`,
})
export class RiShoppingBasket2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riShoppingBasketLineIcon],svg[ri-shopping-basket-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.005 2a6 6 0 0 1 6 6v1h4v2h-1.167l-.757 9.083a1 1 0 0 1-.996.917H4.925a1 1 0 0 1-.997-.917L3.171 11H2.005V9h4V8a6 6 0 0 1 6-6m6.826 9H5.178l.667 8h12.319zm-5.826 2v4h-2v-4zm-4 0v4h-2v-4zm8 0v4h-2v-4zm-5-9A4 4 0 0 0 8.01 7.8l-.005.2v1h8V8a4 4 0 0 0-3.8-3.995z"></svg:path>`,
})
export class RiShoppingBasketLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riShoppingCart2LineIcon],svg[ri-shopping-cart-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.004 6.417L.762 3.174L2.176 1.76l3.243 3.243H20.66a1 1 0 0 1 .958 1.287l-2.4 8a1 1 0 0 1-.958.713H6.004v2h11v2h-12a1 1 0 0 1-1-1zm2 .586v6h11.512l1.8-6zm-.5 16a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3m12 0a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3"></svg:path>`,
})
export class RiShoppingCart2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riShoppingCartLineIcon],svg[ri-shopping-cart-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.005 16V4h-2V2h3a1 1 0 0 1 1 1v12h12.438l2-8H8.005V5h13.72a1 1 0 0 1 .97 1.243l-2.5 10a1 1 0 0 1-.97.757H5.004a1 1 0 0 1-1-1m2 7a2 2 0 1 1 0-4a2 2 0 0 1 0 4m12 0a2 2 0 1 1 0-4a2 2 0 0 1 0 4"></svg:path>`,
})
export class RiShoppingCartLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riShowersLineIcon],svg[ri-showers-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 16.93a8 8 0 1 1 11.458-9.831A5.5 5.5 0 0 1 19 17.793v-2.13a3.5 3.5 0 1 0-4-5.612V10a6 6 0 1 0-10 4.472zM7 16h2v4H7zm8 0h2v4h-2zm-4 3h2v4h-2z"></svg:path>`,
})
export class RiShowersLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riShuffleLineIcon],svg[ri-shuffle-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 17.883V16l5 3l-5 3v-2.09a9 9 0 0 1-6.997-5.365L11 14.54l-.003.006A9 9 0 0 1 2.725 20H2v-2h.725a7 7 0 0 0 6.434-4.243L9.912 12l-.753-1.757A7 7 0 0 0 2.725 6H2V4h.725a9 9 0 0 1 8.272 5.455L11 9.46l.003-.006A9 9 0 0 1 18 4.09V2l5 3l-5 3V6.117a7 7 0 0 0-5.159 4.126L12.088 12l.753 1.757A7 7 0 0 0 18 17.883"></svg:path>`,
})
export class RiShuffleLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riShutDownLineIcon],svg[ri-shut-down-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m6.265 3.807l1.147 1.639a8 8 0 1 0 9.176 0l1.147-1.639A9.99 9.99 0 0 1 22 12c0 5.523-4.477 10-10 10S2 17.523 2 12a9.99 9.99 0 0 1 4.265-8.193M11 12V2h2v10z"></svg:path>`,
})
export class RiShutDownLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSideBarLineIcon],svg[ri-side-bar-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m5 2H4v14h4zm2 0v14h10V5z"></svg:path>`,
})
export class RiSideBarLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSidebarFoldLineIcon],svg[ri-sidebar-fold-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 5h8v14H5zm14 14h-4V5h4zM4 3a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm3 9l4-3.5v7z"></svg:path>`,
})
export class RiSidebarFoldLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSidebarUnfoldLineIcon],svg[ri-sidebar-unfold-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 5h8v14H5zm14 14h-4V5h4zM4 3a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm7 9L7 8.5v7z"></svg:path>`,
})
export class RiSidebarUnfoldLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSignalTowerLineIcon],svg[ri-signal-tower-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m6.116 20.087l1.015-1.739a8 8 0 1 1 9.738 0l1.015 1.739A9.99 9.99 0 0 0 22 12c0-5.523-4.477-10-10-10S2 6.477 2 12a9.99 9.99 0 0 0 4.116 8.087m2.034-3.485a6 6 0 1 1 7.7 0l-1.03-1.766a4 4 0 1 0-5.64 0zM11 13h2v9h-2z"></svg:path>`,
})
export class RiSignalTowerLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSignalWifi1LineIcon],svg[ri-signal-wifi-1-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3c4.285 0 8.22 1.497 11.31 3.996L12 21L.69 6.997A17.93 17.93 0 0 1 12 3m0 12a6 6 0 0 0-2 .34l2 2.477l2-2.477a6 6 0 0 0-2-.34m0-10a15.9 15.9 0 0 0-8.42 2.392l5.109 6.324A8 8 0 0 1 12 13c1.18 0 2.302.256 3.311.716L20.42 7.39A15.9 15.9 0 0 0 12 5"></svg:path>`,
})
export class RiSignalWifi1LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSignalWifi2LineIcon],svg[ri-signal-wifi-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3c4.285 0 8.22 1.497 11.31 3.996L12 21L.69 6.997A17.93 17.93 0 0 1 12 3m0 9c-1.42 0-2.764.33-3.958.915L12 17.817l3.958-4.902A9 9 0 0 0 12 12m0-7a15.9 15.9 0 0 0-8.42 2.392l3.179 3.935A10.95 10.95 0 0 1 12 10c1.897 0 3.683.48 5.241 1.327L20.42 7.39A15.9 15.9 0 0 0 12 5"></svg:path>`,
})
export class RiSignalWifi2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSignalWifi3LineIcon],svg[ri-signal-wifi-3-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3c4.285 0 8.22 1.497 11.31 3.996L12 21L.69 6.997A17.93 17.93 0 0 1 12 3m0 7c-1.897 0-3.683.48-5.24 1.327l5.24 6.49l5.242-6.49A10.95 10.95 0 0 0 12 10m0-5a15.9 15.9 0 0 0-8.42 2.392l1.904 2.357A12.94 12.94 0 0 1 12.001 8c2.374 0 4.6.637 6.516 1.749L20.42 7.39A15.9 15.9 0 0 0 12 5"></svg:path>`,
})
export class RiSignalWifi3LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSignalWifiErrorLineIcon],svg[ri-signal-wifi-error-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3c4.285 0 8.22 1.497 11.31 3.996l-1.256 1.556A15.93 15.93 0 0 0 12 5c-3.09 0-5.974.875-8.42 2.392L12 17.817l6-7.429v3.183L12 21L.69 6.997A17.93 17.93 0 0 1 12 3m10 16v2h-2v-2zm0-9v7h-2v-7z"></svg:path>`,
})
export class RiSignalWifiErrorLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSignalWifiLineIcon],svg[ri-signal-wifi-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3c4.285 0 8.22 1.497 11.31 3.996L12 21L.69 6.997A17.93 17.93 0 0 1 12 3m0 2a15.9 15.9 0 0 0-8.42 2.392L12 17.817L20.42 7.39A15.9 15.9 0 0 0 12 5"></svg:path>`,
})
export class RiSignalWifiLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSignalWifiOffLineIcon],svg[ri-signal-wifi-off-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m2.808 1.393l17.678 17.678l-1.414 1.414l-3.683-3.682L12 21L.69 6.997a18 18 0 0 1 2.951-1.942L1.394 2.808zm.772 5.999L12 17.817l1.967-2.437l-8.835-8.836q-.799.38-1.552.848M12 3c4.285 0 8.22 1.497 11.31 3.996l-5.406 6.693l-1.422-1.422l3.938-4.876A15.9 15.9 0 0 0 12 5q-1.31 0-2.579.207L7.725 3.51c1.37-.333 2.802-.51 4.276-.51"></svg:path>`,
})
export class RiSignalWifiOffLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSignpostLineIcon],svg[ri-signpost-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 5h5.414l4.293 4.293a1 1 0 0 1 0 1.414L17.414 15H12v7h-2v-7H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h6V2h2zm4.586 8l3-3l-3-3H5v6z"></svg:path>`,
})
export class RiSignpostLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSimCard2LineIcon],svg[ri-sim-card-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 4v16h12V7.828L14.172 4zM5 2h10l4.707 4.707a1 1 0 0 1 .293.707V21a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1m8 8v8h-2v-6H8v-2zm-5 3h2v2H8zm6 0h2v2h-2zm0-3h2v2h-2zm-6 6h2v2H8zm6 0h2v2h-2z"></svg:path>`,
})
export class RiSimCard2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSimCardLineIcon],svg[ri-sim-card-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 4v16h12V7.828L14.172 4zM5 2h10l4.707 4.707a1 1 0 0 1 .293.707V21a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1m3 10h8v6H8z"></svg:path>`,
})
export class RiSimCardLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSipLineIcon],svg[ri-sip-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m6.457 18.954l8.564-8.564l-1.414-1.414l-8.564 8.564zm5.735-11.392l-1.414-1.414l1.414-1.415l1.768 1.768l2.829-2.828a1 1 0 0 1 1.414 0l2.121 2.121a1 1 0 0 1 0 1.414l-2.828 2.829l1.768 1.767l-1.415 1.415l-1.414-1.415l-9.192 9.193H3v-4.243z"></svg:path>`,
})
export class RiSipLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSkipBackLineIcon],svg[ri-skip-back-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 4a1 1 0 0 1 1 1v6.333l10.223-6.815a.5.5 0 0 1 .777.416v14.132a.5.5 0 0 1-.777.416L8 12.667V19a1 1 0 1 1-2 0V5a1 1 0 0 1 1-1m10 3.737L10.606 12L17 16.263z"></svg:path>`,
})
export class RiSkipBackLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSkipBackMiniLineIcon],svg[ri-skip-back-mini-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 6a1 1 0 0 1 1 1v10a1 1 0 1 1-2 0V7a1 1 0 0 1 1-1m8 8.14V9.86L11.968 12zm-5.921-1.732a.5.5 0 0 1 0-.816l7.133-5.036a.5.5 0 0 1 .788.409v10.07a.5.5 0 0 1-.788.409z"></svg:path>`,
})
export class RiSkipBackMiniLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSkipDownLineIcon],svg[ri-skip-down-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 10.086L7.207 5.293L5.793 6.707L12 12.914l6.207-6.207l-1.414-1.414zM18 17H6v-2h12z"></svg:path>`,
})
export class RiSkipDownLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSkipForwardLineIcon],svg[ri-skip-forward-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 12.667L5.777 19.482A.5.5 0 0 1 5 19.066V4.934a.5.5 0 0 1 .777-.416L16 11.333V5a1 1 0 1 1 2 0v14a1 1 0 1 1-2 0zm-9-4.93v8.526L13.394 12z"></svg:path>`,
})
export class RiSkipForwardLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSkipForwardMiniLineIcon],svg[ri-skip-forward-mini-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.032 12L9 9.86v4.28zM7.5 17.535a.5.5 0 0 1-.5-.5V6.965a.5.5 0 0 1 .788-.409l7.133 5.036a.5.5 0 0 1 0 .816l-7.133 5.036a.5.5 0 0 1-.288.091M16 7a1 1 0 1 1 2 0v10a1 1 0 1 1-2 0z"></svg:path>`,
})
export class RiSkipForwardMiniLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSkipLeftLineIcon],svg[ri-skip-left-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13.914 12l4.793-4.793l-1.414-1.414L11.086 12l6.207 6.207l1.414-1.414zM7 18V6h2v12z"></svg:path>`,
})
export class RiSkipLeftLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSkipRightLineIcon],svg[ri-skip-right-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10.086 12l-4.793 4.793l1.414 1.414L12.914 12L6.707 5.793L5.293 7.207zM17 6v12h-2V6z"></svg:path>`,
})
export class RiSkipRightLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSkipUpLineIcon],svg[ri-skip-up-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 13.914l4.793 4.793l1.414-1.414L12 11.086l-6.207 6.207l1.414 1.414zM6 7h12v2H6z"></svg:path>`,
})
export class RiSkipUpLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSkull2LineIcon],svg[ri-skull-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2c5.523 0 10 4.477 10 10v3.764a2 2 0 0 1-1.106 1.789L18 19v1a3 3 0 0 1-2.824 2.995L14.95 23q.033-.161.044-.33L15 22.5V22a2 2 0 0 0-1.85-1.994L13 20h-2a2 2 0 0 0-1.995 1.85L9 22v.5q0 .258.05.5H9a3 3 0 0 1-3-3v-1l-2.894-1.447A2 2 0 0 1 2 15.763V12C2 6.477 6.477 2 12 2m0 2a8 8 0 0 0-7.996 7.75L4 12v3.764l4 2v1.591l.075-.084a4 4 0 0 1 2.723-1.266L11 18l2.073.001l.223.01a4 4 0 0 1 2.55 1.177l.154.167v-1.591l4-2V12a8 8 0 0 0-8-8m-4 7a2 2 0 1 1 0 4a2 2 0 0 1 0-4m8 0a2 2 0 1 1 0 4a2 2 0 0 1 0-4"></svg:path>`,
})
export class RiSkull2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSkullLineIcon],svg[ri-skull-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 12a8 8 0 1 0-16 0v4h3a1 1 0 0 1 1 1v3h8v-3a1 1 0 0 1 1-1h3zm-2 6v3a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-3H3a1 1 0 0 1-1-1v-5C2 6.477 6.477 2 12 2s10 4.477 10 10v5a1 1 0 0 1-1 1zM7.5 14a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3m9 0a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3"></svg:path>`,
})
export class RiSkullLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSkypeLineIcon],svg[ri-skype-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.005 18.423a2 2 0 0 1 1.237.207a3.25 3.25 0 0 0 4.389-4.389a2 2 0 0 1-.207-1.237q.077-.495.077-1.004a6.5 6.5 0 0 0-7.504-6.423A2 2 0 0 1 9.76 5.37a3.25 3.25 0 0 0-4.389 4.39a2 2 0 0 1 .207 1.237Q5.5 11.49 5.5 12a6.5 6.5 0 0 0 7.504 6.423M12.001 20.5a8.5 8.5 0 0 1-8.4-9.81a5.25 5.25 0 0 1 7.09-7.09q.642-.1 1.31-.1a8.5 8.5 0 0 1 8.4 9.81a5.25 5.25 0 0 1-7.09 7.09q-.642.1-1.31.1m.053-3.5C9.252 17 8 15.62 8 14.586c0-.532.39-.902.928-.902c1.2 0 .887 1.725 3.125 1.725c1.143 0 1.776-.624 1.776-1.261c0-.384-.188-.808-.943-.995l-2.49-.624c-2.006-.504-2.37-1.592-2.37-2.612C8.027 7.797 10.019 7 11.89 7c1.72 0 3.755.956 3.755 2.228c0 .545-.479.863-1.011.863c-1.023 0-.835-1.418-2.9-1.418c-1.023 0-1.596.462-1.596 1.126s.803.876 1.502 1.035l1.836.409C15.49 11.695 16 12.876 16 13.989C16 15.713 14.675 17 12.015 17z"></svg:path>`,
})
export class RiSkypeLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSlackLineIcon],svg[ri-slack-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.501 3a1.5 1.5 0 0 1 1.5 1.5v5a1.5 1.5 0 0 1-3 0v-5a1.5 1.5 0 0 1 1.5-1.5m-10 10h1.5v1.5a1.5 1.5 0 1 1-1.5-1.5m8.5 5h1.5a1.5 1.5 0 1 1-1.5 1.5zm1.5-5h5a1.5 1.5 0 0 1 0 3h-5a1.5 1.5 0 1 1 0-3m5-5a1.5 1.5 0 0 1 0 3h-1.5V9.5a1.5 1.5 0 0 1 1.5-1.5m-15 0h5a1.5 1.5 0 1 1 0 3h-5a1.5 1.5 0 0 1 0-3m5-5a1.5 1.5 0 0 1 1.5 1.5V6h-1.5a1.5 1.5 0 1 1 0-3m0 10a1.5 1.5 0 0 1 1.5 1.5v5a1.5 1.5 0 0 1-3 0v-5a1.5 1.5 0 0 1 1.5-1.5"></svg:path>`,
})
export class RiSlackLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSliceLineIcon],svg[ri-slice-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m15.69 12.915l1.769 1.767c-6.01 6.01-10.96 6.01-15.203 4.597L17.812 3.722l3.536 3.536zm-2.827 0l5.656-5.657l-.707-.707L6.314 18.048c2.732.108 5.358-.906 8.267-3.415z"></svg:path>`,
})
export class RiSliceLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSlideshow2LineIcon],svg[ri-slideshow-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 17v3h5v2H6v-2h5v-3H4a1 1 0 0 1-1-1V4H2V2h20v2h-1v12a1 1 0 0 1-1 1zm-8-2h14V4H5zm5-9l5 3.5l-5 3.5z"></svg:path>`,
})
export class RiSlideshow2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSlideshow3LineIcon],svg[ri-slideshow-3-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 18v2h4v2H7v-2h4v-2H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1zM4 5v11h16V5zm6 2.5l5 3l-5 3z"></svg:path>`,
})
export class RiSlideshow3LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSlideshow4LineIcon],svg[ri-slideshow-4-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.17 3A3 3 0 0 1 11 1h2c1.306 0 2.418.835 2.83 2H21a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zM4 5v14h16V5h-4.17A3 3 0 0 1 13 7h-2a3 3 0 0 1-2.83-2zm7-2a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2zm-1 6l5 3l-5 3z"></svg:path>`,
})
export class RiSlideshow4LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSlideshowLineIcon],svg[ri-slideshow-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 21v2h-2v-2H3a1 1 0 0 1-1-1V6h20v14a1 1 0 0 1-1 1zm-9-2h16V8H4zm9-9h5v2h-5zm0 4h5v2h-5zm-4-4v3h3a3 3 0 1 1-3-3M2 3h20v2H2z"></svg:path>`,
})
export class RiSlideshowLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSlowDownLineIcon],svg[ri-slow-down-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 13c0 2.21.895 4.21 2.343 5.657L4.93 20.07A9.97 9.97 0 0 1 2 13C2 7.477 6.477 3 12 3s10 4.477 10 10a9.97 9.97 0 0 1-2.929 7.071l-1.414-1.414A8 8 0 1 0 4 13m4.707-4.707l4.5 4.5l-1.414 1.414l-4.5-4.5z"></svg:path>`,
})
export class RiSlowDownLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSmartphoneLineIcon],svg[ri-smartphone-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 4v16h10V4zM6 2h12a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1m6 15a1 1 0 1 1 0 2a1 1 0 0 1 0-2"></svg:path>`,
})
export class RiSmartphoneLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSnapchatLineIcon],svg[ri-snapchat-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m15.383 10.58l.02-.249c.01-.147.021-.304.031-.48q.05-.838.051-1.845c0-.872-.294-1.487-.914-2.064c-.66-.614-1.459-.942-2.59-.942c-1.137 0-1.958.335-2.51.888c-.696.695-.957 1.218-.957 2.1c0 .521.06 1.994.095 2.619a2 2 0 0 1-.468 1.4q.081.15.152.318c.3.771.198 1.543-.152 2.271c-.392.818-.73 1.393-1.41 2.154a8 8 0 0 1-.642.643a2 2 0 0 1 .412.564a6 6 0 0 1 1.585.075c.81.146 1.324.434 2.194 1.061l.016.011l.213.152c.62.44.877.546 1.473.546c.609 0 .91-.121 1.523-.552l.207-.146c.877-.632 1.407-.927 2.231-1.076a6.7 6.7 0 0 1 1.56-.074q.021-.043.048-.09q.151-.27.368-.477a8 8 0 0 1-.616-.617a9.2 9.2 0 0 1-1.447-2.159c-.363-.749-.47-1.54-.137-2.321q.06-.147.132-.276a2 2 0 0 1-.468-1.435m-10.316-.102c.42 0 .601.305 1.22.305a.74.74 0 0 0 .325-.066c-.008-.156-.098-1.986-.098-2.729c0-1.688.719-2.69 1.542-3.514S10.162 3 11.982 3s3.066.653 3.952 1.478s1.551 1.93 1.551 3.528c0 1.555-.099 2.594-.107 2.716a.6.6 0 0 0 .278.065c.63 0 .63-.31 1.33-.31c.686 0 .983.57.983.823c0 .621-.832.967-1.33 1.126c-.369.117-.931.291-1.075.635q-.11.261.092.678c.004.008 1.26 2.883 3.93 3.326c.235.035.392.241.392.483c0 .333-.37.617-.727.782c-.443.2-1.09.37-1.952.505c-.043.078-.134.485-.235.887c-.135.542-.8.366-.99.326A5 5 0 0 0 16.277 20c-.483.087-.913.378-1.396.726c-.713.504-1.465 1.076-2.9 1.076s-2.144-.572-2.857-1.076c-.482-.348-.904-.637-1.395-.726c-.899-.163-1.57.036-1.796.056s-.841.245-.996-.326c-.044-.166-.19-.808-.234-.895c-.857-.135-1.509-.313-1.953-.513c-.365-.165-.726-.443-.726-.778c0-.236.158-.44.392-.483c2.643-.483 3.765-3.004 3.921-3.33q.197-.412.092-.679c-.144-.343-.705-.513-1.074-.635c-.105-.034-1.335-.373-1.335-1.117c0-.24.204-.573.581-.73c.162-.066.359-.092.465-.092"></svg:path>`,
})
export class RiSnapchatLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSnowflakeLineIcon],svg[ri-snowflake-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 3.298l2.445-1.63l1.11 1.664L13 5.035v5.233l4.53-2.618l.198-3.064l1.996.13l-.19 2.932l2.635 1.303l-.886 1.792l-2.753-1.36L14.001 12l4.53 2.616l2.753-1.36l.886 1.792l-2.634 1.303l.19 2.932l-1.997.129l-.197-3.064L13 13.732v5.233l2.555 1.703l-1.11 1.664L12 20.702l-2.446 1.63l-1.109-1.664L11 18.965v-5.233l-4.532 2.616l-.198 3.064l-1.996-.128l.19-2.933l-2.635-1.303l.887-1.793l2.752 1.361L10 12L5.468 9.383l-2.752 1.361l-.887-1.793L4.464 7.65l-.19-2.933l1.997-.129l.197 3.064L11 10.267V5.035L8.445 3.332l1.11-1.664z"></svg:path>`,
})
export class RiSnowflakeLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSnowyLineIcon],svg[ri-snowy-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13 16.268l1.964-1.134l1 1.732L14 18l1.964 1.134l-1 1.732L13 19.732V22h-2v-2.268l-1.964 1.134l-1-1.732L10 18l-1.964-1.134l1-1.732L11 16.268V14h2zM17 18v-2h.5a3.5 3.5 0 1 0-2.5-5.95V10a6 6 0 1 0-8 5.659v2.089a8 8 0 1 1 9.458-10.65A5.5 5.5 0 1 1 17.5 18z"></svg:path>`,
})
export class RiSnowyLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSofaLineIcon],svg[ri-sofa-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 3a6 6 0 0 0-6 6v.351c-1.52.746-2.367 2.565-1.733 4.307l.312.86a7 7 0 0 1 .422 2.391V19.5A1.5 1.5 0 0 0 3.5 21h17a1.5 1.5 0 0 0 1.5-1.5v-2.59a7 7 0 0 1 .421-2.393l.313-.86c.633-1.741-.213-3.56-1.734-4.306V9a6 6 0 0 0-6-6zm10 6.032c-1.694.23-3 1.682-3 3.44V14H8v-1.528a3.47 3.47 0 0 0-3-3.44V9a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4zM16 16v1h2v-4.528a1.472 1.472 0 1 1 2.855.502l-.312.86A9 9 0 0 0 20 16.909V19H4v-2.09a9 9 0 0 0-.542-3.076l-.313-.86A1.471 1.471 0 1 1 6 12.472V17h2v-1z"></svg:path>`,
})
export class RiSofaLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSoundModuleLineIcon],svg[ri-sound-module-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 18v3h-2v-3h-2v-2h6v2zM5 18v3H3v-3H1v-2h6v2zm6-12V3h2v3h2v2H9V6zm0 4h2v11h-2zm-8 4V3h2v11zm16 0V3h2v11z"></svg:path>`,
})
export class RiSoundModuleLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSoundcloudLineIcon],svg[ri-soundcloud-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 10a1 1 0 0 1 1 1v7a1 1 0 1 1-2 0v-7a1 1 0 0 1 1-1m3 1a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0v-6a1 1 0 0 1 1-1m3-4a1 1 0 0 1 1 1v10a1 1 0 1 1-2 0V8a1 1 0 0 1 1-1m5-1a6 6 0 0 1 5.996 5.775l.003.26a3.5 3.5 0 0 1-.307 6.96L20.5 19h-3.501a1 1 0 0 1-.117-1.993L17 17h3.447l.138-.002a1.5 1.5 0 0 0 .267-2.957l-.135-.026l-1.77-.252l.053-1.787l-.004-.176A4 4 0 0 0 15.2 8.005L15 8q-.402 0-.788.077L14 8.126v9.875a1 1 0 0 1-.883.992L13 19a1 1 0 0 1-1-1V6.804A6 6 0 0 1 15 6M1 12a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0v-4a1 1 0 0 1 1-1"></svg:path>`,
})
export class RiSoundcloudLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSpaceShipLineIcon],svg[ri-space-ship-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.88 18.05a35.9 35.9 0 0 1 8.53-16.322a.8.8 0 0 1 1.178 0q.25.27.412.456a35.9 35.9 0 0 1 8.119 15.864a44 44 0 0 1-6.584.875L12.447 23.1a.5.5 0 0 1-.894 0l-2.089-4.177a44 44 0 0 1-6.584-.875m6.697-1.123l1.158.066L12 19.523l1.265-2.53l1.157-.066a42 42 0 0 0 4.227-.455a33.9 33.9 0 0 0-6.65-12.387a33.9 33.9 0 0 0-6.648 12.387a42 42 0 0 0 4.226.455M12 14.995a3 3 0 1 1 0-6a3 3 0 0 1 0 6m0-2a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></svg:path>`,
})
export class RiSpaceShipLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSpam2LineIcon],svg[ri-spam-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m15.936 2.501l5.565 5.565v7.87l-5.565 5.565h-7.87l-5.565-5.565v-7.87l5.565-5.565zm-.828 2H8.894L4.501 8.894v6.214L8.894 19.5h6.214l4.393-4.393V8.894zM11 15.001h2v2h-2zm0-8h2v6h-2z"></svg:path>`,
})
export class RiSpam2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSpam3LineIcon],svg[ri-spam-3-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m15.936 2.501l5.565 5.565v7.87l-5.565 5.565h-7.87l-5.565-5.565v-7.87l5.565-5.565zm-.828 2H8.894L4.501 8.894v6.214L8.894 19.5h6.214l4.393-4.393V8.894zM8 11.001h8v2H8z"></svg:path>`,
})
export class RiSpam3LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSpamLineIcon],svg[ri-spam-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.5 2.5L23 12l-5.5 9.5h-11L1 12l5.5-9.5zm-1.153 2H7.653L3.311 12l4.342 7.5h8.694l4.342-7.5zM11 15h2v2h-2zm0-8h2v6h-2z"></svg:path>`,
})
export class RiSpamLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSparkling2LineIcon],svg[ri-sparkling-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m17 1.208l1.32 2.473L20.792 5L18.32 6.319L17 8.792l-1.318-2.473l-2.473-1.32l2.473-1.318zm-6.333 8.125l5 2.667l-5 2.667l-2.666 5l-2.667-5l-5-2.667l5-2.667l2.667-5zm.75 2.667L9.19 10.812L8.001 8.583l-1.189 2.229L4.584 12l2.228 1.188l1.189 2.229l1.188-2.229zm8.25 4.333l-1.666-3.125l-1.667 3.125L13.209 18l3.125 1.667l1.667 3.125l1.666-3.125L22.792 18z"></svg:path>`,
})
export class RiSparkling2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSparklingLineIcon],svg[ri-sparkling-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 4.438A2.437 2.437 0 0 0 16.438 2h1.125A2.437 2.437 0 0 0 20 4.438v1.125A2.437 2.437 0 0 0 17.563 8h-1.125A2.437 2.437 0 0 0 14 5.563zM1 11a6 6 0 0 0 6-6h2a6 6 0 0 0 6 6v2a6 6 0 0 0-6 6H7a6 6 0 0 0-6-6zm3.876 1A8.04 8.04 0 0 1 8 15.124A8.04 8.04 0 0 1 11.124 12A8.04 8.04 0 0 1 8 8.876A8.04 8.04 0 0 1 4.876 12m12.374 2A3.25 3.25 0 0 1 14 17.25v1.5A3.25 3.25 0 0 1 17.25 22h1.5A3.25 3.25 0 0 1 22 18.75v-1.5A3.25 3.25 0 0 1 18.75 14z"></svg:path>`,
})
export class RiSparklingLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSpeakAiLineIcon],svg[ri-speak-ai-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20.713 7.128l-.246.566a.506.506 0 0 1-.934 0l-.246-.566a4.36 4.36 0 0 0-2.22-2.25l-.759-.339a.53.53 0 0 1 0-.963l.717-.319A4.37 4.37 0 0 0 19.276.931L19.53.32a.506.506 0 0 1 .942 0l.253.61a4.37 4.37 0 0 0 2.25 2.327l.718.32a.53.53 0 0 1 0 .962l-.76.338a4.36 4.36 0 0 0-2.219 2.251M9 2a8 8 0 0 1 7.934 6.965l2.25 3.539c.148.233.118.58-.225.728L17 14.07V17a2 2 0 0 1-2 2h-1.999L13 22H4v-3.694c0-1.18-.436-2.297-1.244-3.305A8 8 0 0 1 9 2m0 2a6 6 0 0 0-4.684 9.75C5.41 15.114 6 16.667 6 18.306V20h5l.002-3H15v-4.248l1.55-.664l-1.543-2.425l-.057-.442A6 6 0 0 0 9 4m10.49 12.993l1.664 1.11A10.95 10.95 0 0 0 23 12q-.001-1.025-.181-2l-1.943.5q.123.733.124 1.5a8.96 8.96 0 0 1-1.51 4.993"></svg:path>`,
})
export class RiSpeakAiLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSpeakLineIcon],svg[ri-speak-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.934 8.965A8.002 8.002 0 0 0 1 10c0 1.892.657 3.631 1.756 5.001C3.564 16.01 4 17.125 4 18.306V22h9l.001-3H15a2 2 0 0 0 2-2v-2.929l1.96-.84c.342-.146.372-.494.224-.727zM3 10a6 6 0 0 1 11.95-.779l.057.442l1.543 2.425l-1.55.664V17h-3.998L11 20H6v-1.694c0-1.639-.591-3.192-1.685-4.556A5.97 5.97 0 0 1 3 10m18.154 8.102l-1.665-1.11A8.96 8.96 0 0 0 21 12a8.96 8.96 0 0 0-1.51-4.993l1.664-1.11A10.95 10.95 0 0 1 23 12c0 2.258-.68 4.356-1.846 6.102"></svg:path>`,
})
export class RiSpeakLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSpeaker2LineIcon],svg[ri-speaker-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 5v14h14V5zM4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m8 13a4 4 0 1 0 0-8a4 4 0 0 0 0 8m0 2a6 6 0 1 1 0-12a6 6 0 0 1 0 12m0-4.5a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3"></svg:path>`,
})
export class RiSpeaker2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSpeaker3LineIcon],svg[ri-speaker-3-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 5v14h14V5zM4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m3 5a1 1 0 1 1 0-2a1 1 0 0 1 0 2m10 0a1 1 0 1 1 0-2a1 1 0 0 1 0 2m0 10a1 1 0 1 1 0-2a1 1 0 0 1 0 2M7 18a1 1 0 1 1 0-2a1 1 0 0 1 0 2m5-3a3 3 0 1 0 0-6a3 3 0 0 0 0 6m0 2a5 5 0 1 1 0-10a5 5 0 0 1 0 10m0-4a1 1 0 1 1 0-2a1 1 0 0 1 0 2"></svg:path>`,
})
export class RiSpeaker3LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSpeakerLineIcon],svg[ri-speaker-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 4v16h14V4zM4 2h16a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1m8 15a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5m0 2a4.5 4.5 0 1 1 0-9a4.5 4.5 0 0 1 0 9m0-10.5a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3"></svg:path>`,
})
export class RiSpeakerLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSpectrumLineIcon],svg[ri-spectrum-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11.389 2.001l1.81.005l.844.014c7.162.165 7.939 1.512 7.957 9.667l-.005 1.512l-.014.844c-.165 7.161-1.512 7.938-9.667 7.957l-1.512-.006l-.888-.015c-6.854-.163-7.828-1.427-7.907-8.78L2 11.691l.006-.89l.014-.865c.165-7.053 1.486-7.897 9.368-7.935M14.12 4.01L10.883 4l-1.322.01c-5.489.082-5.544.82-5.56 7.403l.002 2.175l.01 1.04c.088 4.983.793 5.343 6.399 5.37l3.455-.002l.776-.01c5.108-.091 5.346-.836 5.357-6.877l-.002-2.742l-.012-1.056c-.094-4.796-.785-5.25-5.866-5.303M8.25 7A8.75 8.75 0 0 1 17 15.75v.583a.667.667 0 0 1-.666.667h-3.667a.667.667 0 0 1-.666-.667v-.583A3.75 3.75 0 0 0 8.25 12h-.584A.667.667 0 0 1 7 11.333V7.667C7 7.299 7.299 7 7.667 7z"></svg:path>`,
})
export class RiSpectrumLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSpeedLineIcon],svg[ri-speed-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 13.333l-9.223 6.149A.5.5 0 0 1 2 19.066V4.934a.5.5 0 0 1 .777-.416L12 10.667V4.934a.5.5 0 0 1 .777-.416l10.599 7.066a.5.5 0 0 1 0 .832l-10.599 7.066a.5.5 0 0 1-.777-.416zM10.394 12L4 7.737v8.526zM14 7.737v8.526L20.394 12z"></svg:path>`,
})
export class RiSpeedLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSpeedMiniLineIcon],svg[ri-speed-mini-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.032 12L6 9.86v4.28zm-4.244 5.443A.5.5 0 0 1 4 17.035V6.965a.5.5 0 0 1 .788-.409l7.133 5.035a.5.5 0 0 1 0 .817zM15 14.14L18.032 12L15 9.86zm-2-7.175a.5.5 0 0 1 .788-.409l7.133 5.035a.5.5 0 0 1 0 .817l-7.133 5.035a.5.5 0 0 1-.788-.408z"></svg:path>`,
})
export class RiSpeedMiniLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSpeedUpLineIcon],svg[ri-speed-up-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 13c0 2.21-.895 4.21-2.343 5.657l1.414 1.414A9.97 9.97 0 0 0 22 13c0-5.523-4.477-10-10-10S2 7.477 2 13a9.97 9.97 0 0 0 2.929 7.071l1.414-1.414A8 8 0 1 1 20 13m-4.707-4.707l-4.5 4.5l1.414 1.414l4.5-4.5z"></svg:path>`,
})
export class RiSpeedUpLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSpotifyLineIcon],svg[ri-spotify-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.001 2c5.55 0 10 4.5 10 10s-4.5 10-10 10s-10-4.5-10-10s4.5-10 10-10m0 2c-4.395 0-8 3.605-8 8s3.605 8 8 8s8-3.605 8-8c0-4.414-3.573-8-8-8m3.75 12.65c-2.35-1.45-5.3-1.75-8.8-.95c-.35.1-.65-.15-.75-.45c-.1-.35.15-.65.45-.75c3.8-.85 7.1-.5 9.7 1.1c.35.15.4.55.25.85c-.2.3-.55.4-.85.2m1-2.7c-2.7-1.65-6.8-2.15-9.95-1.15c-.4.1-.85-.1-.95-.5s.1-.85.5-.95c3.65-1.1 8.15-.55 11.25 1.35c.3.15.45.65.2 1s-.7.5-1.05.25M6.3 9.75c-.5.15-1-.15-1.15-.6c-.15-.5.15-1 .6-1.15c3.55-1.05 9.4-.85 13.1 1.35c.45.25.6.85.35 1.3c-.25.35-.85.5-1.3.25C14.7 9 9.35 8.8 6.3 9.75"></svg:path>`,
})
export class RiSpotifyLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSpyLineIcon],svg[ri-spy-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 13a4 4 0 1 1-4 4h-2a4 4 0 1 1-.535-2h3.07A4 4 0 0 1 17 13M7 15a2 2 0 1 0 0 4a2 2 0 0 0 0-4m10 0a2 2 0 1 0 0 4a2 2 0 0 0 0-4M16 3a4 4 0 0 1 4 4v3h2v2H2v-2h2V7a4 4 0 0 1 4-4zm0 2H8c-1.054 0-2 .95-2 2v3h12V7c0-1.054-.95-2-2-2"></svg:path>`,
})
export class RiSpyLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSquareLineIcon],svg[ri-square-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m1 2v14h14V5z"></svg:path>`,
})
export class RiSquareLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riStackLineIcon],svg[ri-stack-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20.083 15.2l1.202.721a.5.5 0 0 1 0 .858l-8.77 5.262a1 1 0 0 1-1.03 0l-8.77-5.262a.5.5 0 0 1 0-.858l1.202-.721L12 20.05zm0-4.7l1.202.721a.5.5 0 0 1 0 .858L12 17.649l-9.285-5.57a.5.5 0 0 1 0-.858l1.202-.721L12 15.35zm-7.569-9.191l8.771 5.262a.5.5 0 0 1 0 .858L12 12.999L2.715 7.43a.5.5 0 0 1 0-.858l8.77-5.262a1 1 0 0 1 1.03 0M12 3.332L5.887 7L12 10.668L18.113 7z"></svg:path>`,
})
export class RiStackLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riStackOverflowLineIcon],svg[ri-stack-overflow-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.001 20.003V15h2v7.003h-16V15h2v5.003zM7.501 18v-2h9v2zm.077-4.38l.347-1.97l8.864 1.563l-.348 1.97zm1.634-5.504l1-1.732l7.794 4.5l-1 1.732zm3.417-4.613l1.532-1.285l5.785 6.894l-1.532 1.286z"></svg:path>`,
})
export class RiStackOverflowLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riStackshareLineIcon],svg[ri-stackshare-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.537 13H7.33a3.001 3.001 0 0 1-5.829-1a3 3 0 0 1 5.83-1h2.206l3.464-6h3.17a3.001 3.001 0 0 1 5.83 1a3 3 0 0 1-5.829 1h-2.017l-2.886 4.999L14.156 17h2.016A3.001 3.001 0 0 1 22 18a3 3 0 0 1-5.829 1H13zm9.464 4a1 1 0 1 0 0 2a1 1 0 0 0 0-2m-14.5-6a1 1 0 1 0 0 2a1 1 0 0 0 0-2m14.5-6a1 1 0 1 0 0 2a1 1 0 0 0 0-2"></svg:path>`,
})
export class RiStackshareLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riStairsLineIcon],svg[ri-stairs-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 3h6v18H3v-6h4v-4h4V7h4zm2 2v4h-4v4H9v4H5v2h14V5z"></svg:path>`,
})
export class RiStairsLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riStarHalfLineIcon],svg[ri-star-half-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 15.968l4.247 2.377l-.948-4.773l3.573-3.305l-4.833-.573l-2.038-4.419zm0 2.292l-7.053 3.948l1.575-7.928L.588 8.792l8.027-.952L12 .5l3.385 7.34l8.027.952l-5.934 5.488l1.575 7.928z"></svg:path>`,
})
export class RiStarHalfLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riStarHalfSLineIcon],svg[ri-star-half-s-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 14.656l2.816 1.72l-.765-3.21l2.506-2.147l-3.29-.264L12 7.708zM12 17l-5.878 3.59l1.598-6.7l-5.23-4.48l6.865-.55L12 2.5l2.645 6.36l6.865.55l-5.23 4.48l1.598 6.7z"></svg:path>`,
})
export class RiStarHalfSLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riStarLineIcon],svg[ri-star-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 18.26l-7.053 3.948l1.575-7.928L.588 8.792l8.027-.952L12 .5l3.385 7.34l8.027.952l-5.934 5.488l1.575 7.928zm0-2.292l4.247 2.377l-.948-4.773l3.573-3.305l-4.833-.573l-2.038-4.419l-2.039 4.42l-4.833.572l3.573 3.305l-.948 4.773z"></svg:path>`,
})
export class RiStarLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riStarOffLineIcon],svg[ri-star-off-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m23.413 8.792l-5.392 4.986l-1.415-1.415l2.266-2.096l-4.833-.573l-2.038-4.419l-.784 1.699L9.71 5.467L12 .5l3.386 7.34zM8.46 9.872l-3.33.395l3.573 3.305l-.948 4.773L12 15.968l4.246 2.377l-.17-.854zm10.163 10.164l.432 2.172l-7.053-3.948l-7.054 3.948l1.575-7.928L.588 8.792l6.07-.72l-5.264-5.264l1.414-1.415l19.8 19.8l-1.415 1.414z"></svg:path>`,
})
export class RiStarOffLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riStarSLineIcon],svg[ri-star-s-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 17l-5.878 3.59l1.598-6.7l-5.23-4.48l6.865-.55L12 2.5l2.645 6.36l6.865.55l-5.23 4.48l1.598 6.7zm0-2.344l2.816 1.72l-.765-3.21l2.506-2.147l-3.29-.264L12 7.708l-1.268 3.047l-3.29.264l2.507 2.147l-.766 3.21z"></svg:path>`,
})
export class RiStarSLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riStarSmileLineIcon],svg[ri-star-smile-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 .5l4.226 6.183l7.186 2.109l-4.575 5.93l.216 7.486L12 19.69l-7.054 2.518l.216-7.486l-4.575-5.93l7.187-2.109zm0 3.544L9.022 8.402L3.957 9.887l3.225 4.179l-.153 5.274l4.97-1.774l4.97 1.774l-.151-5.274l3.224-4.179l-5.065-1.485zM10 12a2 2 0 1 0 4 0h2a4 4 0 0 1-8 0z"></svg:path>`,
})
export class RiStarSmileLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSteamLineIcon],svg[ri-steam-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.001 4a5 5 0 1 1-.892 9.92l-2.651 1.989q.042.29.043.591a4 4 0 1 1-7.966-.524L1.709 14.43l.75-1.854l3.826 1.545a4 4 0 0 1 3.697-1.592l2.04-3.061A5 5 0 0 1 17.002 4m-7.5 10.5c-.464 0-.892.158-1.231.424l1.606.649a1 1 0 0 1-.75 1.854L7.52 16.78a2 2 0 1 0 1.981-2.28m3.364-2.69l-.983 1.476c.284.21.54.458.758.735l1.36-1.02a5 5 0 0 1-1.135-1.191M17 6a3 3 0 1 0 0 6a3 3 0 0 0 0-6m0 1a2 2 0 1 1 0 4a2 2 0 0 1 0-4"></svg:path>`,
})
export class RiSteamLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSteering2LineIcon],svg[ri-steering-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2M8 13l-3.938.001A8.004 8.004 0 0 0 11 19.938V16a3 3 0 0 1-3-3m11.938.001L16 13a3 3 0 0 1-3 3l.001 3.938a8.004 8.004 0 0 0 6.937-6.937M14 12h-4v1a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1zm-2-8a8 8 0 0 0-7.938 7H8a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1h3.938A8 8 0 0 0 12 4"></svg:path>`,
})
export class RiSteering2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSteeringLineIcon],svg[ri-steering-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.8 14.001a10.01 10.01 0 0 1-8.401 7.902v-2.025A8.01 8.01 0 0 0 19.747 14zm-17.548 0a8.01 8.01 0 0 0 6.247 5.859v2.028a10.01 10.01 0 0 1-8.3-7.887zM17.999 11v2h-3a2 2 0 0 0-1.994 1.85l-.006.15v3h-2v-3a2 2 0 0 0-1.85-1.995L8.999 13H6v-2zm-6-9c5.186 0 9.45 3.947 9.951 9h-2.012A8.001 8.001 0 0 0 4.06 11H2.05C2.552 5.947 6.815 2 12 2"></svg:path>`,
})
export class RiSteeringLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riStethoscopeLineIcon],svg[ri-stethoscope-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 3v2H6v4a4 4 0 0 0 8 0V5h-2V3h3a1 1 0 0 1 1 1v5a6 6 0 0 1-5 5.917V16.5a3.5 3.5 0 0 0 6.775 1.238a3 3 0 1 1 2.05.148A5.502 5.502 0 0 1 8.999 16.5v-1.583A6 6 0 0 1 4 9V4a1 1 0 0 1 1-1zm11 11a1 1 0 1 0 0 2a1 1 0 0 0 0-2"></svg:path>`,
})
export class RiStethoscopeLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riStickyNote2LineIcon],svg[ri-sticky-note-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.998 21A.996.996 0 0 1 3 20.007V3.993C3 3.445 3.445 3 3.993 3h16.014c.548 0 .993.447.993.999V16l-5.003 5zM5 19h10.169L19 15.171V5H5z"></svg:path>`,
})
export class RiStickyNote2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riStickyNoteAddLineIcon],svg[ri-sticky-note-add-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 1v3H1v2h3v3h2V6h3V4H6V1zM3 20.007V11h2v8h8v-5c0-.55.45-1 1-1l5-.001V5h-8V3h9.007c.548 0 .993.456.993 1.002V15l-6 5.996L4.002 21A1 1 0 0 1 3 20.007m15.171-5.008L15 15v3.169z"></svg:path>`,
})
export class RiStickyNoteAddLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riStickyNoteLineIcon],svg[ri-sticky-note-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m21 15l-6 5.996L4.002 21A1 1 0 0 1 3 20.007V3.993C3 3.445 3.445 3 3.993 3h16.014c.548 0 .993.456.993 1.002zM19 5H5v14h8v-5a1 1 0 0 1 .883-.993L14 13l5-.001zm-.829 9.999L15 15v3.169z"></svg:path>`,
})
export class RiStickyNoteLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riStockLineIcon],svg[ri-stock-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.005 5.003h3v9h-3v3h-2v-3h-3v-9h3v-3h2zm-3 2v5h4v-5zm13 3h3v9h-3v3h-2v-3h-3v-9h3v-3h2zm-3 2v5h4v-5z"></svg:path>`,
})
export class RiStockLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riStopCircleLineIcon],svg[ri-stop-circle-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10m0-2a8 8 0 1 0 0-16a8 8 0 0 0 0 16M9 9h6v6H9z"></svg:path>`,
})
export class RiStopCircleLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riStopLargeLineIcon],svg[ri-stop-large-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 5h14v14H5zM4 3a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1z"></svg:path>`,
})
export class RiStopLargeLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riStopLineIcon],svg[ri-stop-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 7v10h10V7zM6 5h12a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1"></svg:path>`,
})
export class RiStopLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riStopMiniLineIcon],svg[ri-stop-mini-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 7a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1zm2 1v8h8V8z"></svg:path>`,
})
export class RiStopMiniLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riStore2LineIcon],svg[ri-store-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 13.242V20h1v2H2v-2h1v-6.758A4.5 4.5 0 0 1 1 9.5c0-.827.224-1.624.633-2.303L4.345 2.5a1 1 0 0 1 .866-.5H18.79a1 1 0 0 1 .866.5l2.703 4.682c.418.694.642 1.49.642 2.318c0 1.56-.794 2.935-2 3.742m-2 .73a4.5 4.5 0 0 1-3.75-1.36A4.5 4.5 0 0 1 12 14.001a4.5 4.5 0 0 1-3.25-1.387A4.5 4.5 0 0 1 5 13.973V20h14zM5.789 4L3.356 8.213a2.5 2.5 0 1 0 4.466 2.216c.335-.837 1.52-.837 1.856 0a2.5 2.5 0 0 0 4.644 0c.335-.837 1.52-.837 1.856 0a2.5 2.5 0 1 0 4.457-2.232L18.21 4z"></svg:path>`,
})
export class RiStore2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riStore3LineIcon],svg[ri-store-3-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 13v7a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-7H2v-2l1-5h18l1 5v2zM5 13v6h14v-6zm-.96-2h15.92l-.6-3H4.64zM6 14h8v3H6zM3 3h18v2H3z"></svg:path>`,
})
export class RiStore3LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riStoreLineIcon],svg[ri-store-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 11.646V21a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-9.354A4 4 0 0 1 2 9V3a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v6a4 4 0 0 1-1 2.646m-2 1.228a4.01 4.01 0 0 1-4-1.228A4 4 0 0 1 12 13a4 4 0 0 1-3-1.354a3.99 3.99 0 0 1-4 1.228V20h14zM14 9a1 1 0 1 1 2 0a2 2 0 1 0 4 0V4H4v5a2 2 0 1 0 4 0a1 1 0 0 1 2 0a2 2 0 1 0 4 0"></svg:path>`,
})
export class RiStoreLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSubtractLineIcon],svg[ri-subtract-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 11v2h14v-2z"></svg:path>`,
})
export class RiSubtractLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSubwayLineIcon],svg[ri-subway-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m17.2 20l1.8 1.5v.5H5v-.5L6.8 20H5a2 2 0 0 1-2-2V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v11a2 2 0 0 1-2 2zM13 5v6h6V7a2 2 0 0 0-2-2zm-2 0H7a2 2 0 0 0-2 2v4h6zm8 8H5v5h14zM7.5 17a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3m9 0a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3"></svg:path>`,
})
export class RiSubwayLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSubwayWifiLineIcon],svg[ri-subway-wifi-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 18a2 2 0 0 1-2 2h-1.8l1.8 1.5v.5H5v-.5L6.8 20H5a2 2 0 0 1-2-2V7a4 4 0 0 1 4-4h6v8h8zm-2-5H5v5h14zM7.5 14a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3m9 0a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3M11 5H7a2 2 0 0 0-1.995 1.85L5 7v4h6zm7.5-4a4.5 4.5 0 1 1 0 9a4.5 4.5 0 0 1 0-9m0 5.167c-.491 0-.94.177-1.289.47l-.125.115L18.5 8.167l1.413-1.415a2 2 0 0 0-1.413-.585m0-2.667a4.65 4.65 0 0 0-3.128 1.203l-.173.165l.944.942a3.32 3.32 0 0 1 2.357-.977a3.32 3.32 0 0 1 2.201.83l.156.147l.943-.943A4.65 4.65 0 0 0 18.5 3.5"></svg:path>`,
})
export class RiSubwayWifiLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSuitcase2LineIcon],svg[ri-suitcase-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 23h-2v-1H8v1H6v-1H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h3V3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2h3a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2h-1zm1-16H5v13h14zm-9 2v9H8V9zm6 0v9h-2V9zm-2-5h-4v1h4z"></svg:path>`,
})
export class RiSuitcase2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSuitcase3LineIcon],svg[ri-suitcase-3-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 1a1 1 0 0 1 1 1v5h1V6h2v1h1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-1v1h-2v-1H7v1H5v-1H4a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h1V6h2v1h1V2a1 1 0 0 1 1-1zm4 8H5v10h14zM9 10v8H7v-8zm4 0v8h-2v-8zm4 0v8h-2v-8zm-3-7h-4v4h4z"></svg:path>`,
})
export class RiSuitcase3LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSuitcaseLineIcon],svg[ri-suitcase-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 3a1 1 0 0 1 1 1v2h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5V4a1 1 0 0 1 1-1zm1 5H8v11h8zM4 8v11h2V8zm10-3h-4v1h4zm4 3v11h2V8z"></svg:path>`,
})
export class RiSuitcaseLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSunCloudyLineIcon],svg[ri-sun-cloudy-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.984 5.06a6.5 6.5 0 0 1 11.286 6.436A5.5 5.5 0 0 1 17.5 21H9a8 8 0 1 1 .984-15.941m2.071.544a8.03 8.03 0 0 1 4.403 4.495a5.53 5.53 0 0 1 3.12.307a4.5 4.5 0 0 0-7.522-4.802M17.5 19a3.5 3.5 0 1 0-2.5-5.95V13a6 6 0 1 0-6 6z"></svg:path>`,
})
export class RiSunCloudyLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSunFoggyLineIcon],svg[ri-sun-foggy-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 12h2v2H4v-2h2a6 6 0 1 1 6 6v-2a4 4 0 1 0-4-4m-2 8h9v2H6zm-4-4h8v2H2zm9-15h2v3h-2zM3.515 4.929l1.414-1.414L7.05 5.636L5.636 7.05zM16.95 18.364l1.414-1.414l2.121 2.121l-1.414 1.414zm2.121-14.85l1.414 1.415l-2.121 2.121l-1.414-1.414zM23 11v2h-3v-2z"></svg:path>`,
})
export class RiSunFoggyLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSunLineIcon],svg[ri-sun-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 18a6 6 0 1 1 0-12a6 6 0 0 1 0 12m0-2a4 4 0 1 0 0-8a4 4 0 0 0 0 8M11 1h2v3h-2zm0 19h2v3h-2zM3.515 4.929l1.414-1.414L7.05 5.636L5.636 7.05zM16.95 18.364l1.414-1.414l2.121 2.121l-1.414 1.414zm2.121-14.85l1.414 1.415l-2.121 2.121l-1.414-1.414zM5.636 16.95l1.414 1.414l-2.121 2.121l-1.414-1.414zM23 11v2h-3v-2zM4 11v2H1v-2z"></svg:path>`,
})
export class RiSunLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSupabaseLineIcon],svg[ri-supabase-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 2.598V13.97H3.9c-.67 0-1.07-.784-.643-1.336zm2 5.433V2.333c0-1.811-2.297-2.624-3.418-1.171L1.673 11.41c-1.427 1.85-.125 4.559 2.227 4.559H11v5.698c0 1.811 2.296 2.624 3.418 1.171l7.908-10.249c1.427-1.849.126-4.558-2.227-4.558zm0 2h7.1c.669 0 1.069.784.643 1.336L13 21.402z"></svg:path>`,
})
export class RiSupabaseLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSurgicalMaskLineIcon],svg[ri-surgical-mask-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12.485 3.121l7.758 1.94a1 1 0 0 1 .757.97V7h1c1.1 0 2 .9 2 2v3a3 3 0 0 1-3 3h-.421a6 6 0 0 1-2.896 3.158l-4.789 2.395a2 2 0 0 1-1.788 0l-4.79-2.395A6 6 0 0 1 3.422 15H3a3 3 0 0 1-3-3V9a2 2 0 0 1 2-2h1v-.97a1 1 0 0 1 .757-.97l7.758-1.939a2 2 0 0 1 .97 0M12 5.061l-7 1.75v5.98a4 4 0 0 0 2.211 3.578L12 18.765l4.789-2.395A4 4 0 0 0 19 12.792v-5.98zM3 9H2v3a1 1 0 0 0 1 1zm19 0h-1v4a1 1 0 0 0 1-1z"></svg:path>`,
})
export class RiSurgicalMaskLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSurroundSoundLineIcon],svg[ri-surround-sound-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 5v14h16V5zM3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m4.05 4.121l1.414 1.415A4.98 4.98 0 0 0 7 12.07c0 1.38.56 2.63 1.464 3.536L7.05 17.02A6.98 6.98 0 0 1 5 12.07c0-1.933.784-3.683 2.05-4.95m9.9 0A6.98 6.98 0 0 1 19 12.07a6.98 6.98 0 0 1-2.05 4.95l-1.414-1.414A4.98 4.98 0 0 0 17 12.07c0-1.38-.56-2.63-1.464-3.535zM12 13.071a1 1 0 1 0 0-2a1 1 0 0 0 0 2m0 2a3 3 0 1 1 0-6a3 3 0 0 1 0 6"></svg:path>`,
})
export class RiSurroundSoundLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSurveyLineIcon],svg[ri-survey-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 2v2h3.007c.548 0 .993.445.993.993v16.014a.994.994 0 0 1-.993.993H3.993A.993.993 0 0 1 3 21.007V4.993C3 4.445 3.445 4 3.993 4H7V2zM7 6H5v14h14V6h-2v2H7zm2 10v2H7v-2zm0-3v2H7v-2zm0-3v2H7v-2zm6-6H9v2h6z"></svg:path>`,
})
export class RiSurveyLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSvelteLineIcon],svg[ri-svelte-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.8 3.77a6.25 6.25 0 0 0-8.63-1.913L6.11 5.081a6.25 6.25 0 0 0-1.973 8.532a6.25 6.25 0 0 0 8.693 8.53l5.06-3.224a6.25 6.25 0 0 0 1.974-8.532A6.25 6.25 0 0 0 19.8 3.77m-1.352 5.004A6.26 6.26 0 0 0 15.65 7.5a1 1 0 0 0-1.525-1.003L9.066 9.72a1 1 0 1 0 1.075 1.686l2.109-1.343a4.25 4.25 0 1 1 4.567 7.17l-5.06 3.223a4.25 4.25 0 0 1-6.203-5.23A6.25 6.25 0 0 0 8.35 16.5a1 1 0 0 0 1.525 1.003l5.06-3.224a1 1 0 0 0-1.074-1.687l-2.109 1.344a4.25 4.25 0 0 1-4.567-7.17l5.06-3.223a4.25 4.25 0 0 1 6.203 5.23"></svg:path>`,
})
export class RiSvelteLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSwap2LineIcon],svg[ri-swap-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m17.207 2.293l-1.414 1.414L18.086 6H13v2h5.086l-2.293 2.293l1.414 1.414L21.914 7zM9.5 7a2.5 2.5 0 1 0-5 0a2.5 2.5 0 0 0 5 0m2 0a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0M5.914 18l2.293 2.293l-1.414 1.414L2.086 17l4.707-4.707l1.414 1.414L5.914 16H11v2zM15 19h4v-4h-4zm-2-5a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1z"></svg:path>`,
})
export class RiSwap2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSwap3LineIcon],svg[ri-swap-3-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 5.914L3.707 8.207L2.293 6.793L7 2.086l4.707 4.707l-1.414 1.414L8 5.914V11H6zM17 9.5a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5m0 2a4.5 4.5 0 1 1 0-9a4.5 4.5 0 0 1 0 9m4.707 5.707l-1.414-1.414L18 18.086V13h-2v5.086l-2.293-2.293l-1.414 1.414L17 21.914zM5 19h4v-4H5zm5-6a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1z"></svg:path>`,
})
export class RiSwap3LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSwapBoxLineIcon],svg[ri-swap-box-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.005 5.003v14h16v-14zm-1-2h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-18a1 1 0 0 1-1-1v-16a1 1 0 0 1 1-1m12 4l3.5 3l-3.5 3v-2h-4v-2h4zm-6 10l-3.5-3l3.5-3v2h4v2h-4z"></svg:path>`,
})
export class RiSwapBoxLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSwapLineIcon],svg[ri-swap-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.005 22.003c-5.523 0-10-4.477-10-10s4.477-10 10-10s10 4.477 10 10s-4.477 10-10 10m0-2a8 8 0 1 0 0-16a8 8 0 0 0 0 16m-5-11l3-3.5l3 3.5h-2v4h-2v-4zm10 6l-3 3.5l-3-3.5h2v-4h2v4z"></svg:path>`,
})
export class RiSwapLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSwitchLineIcon],svg[ri-switch-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.001 3v18h-4.4a4.6 4.6 0 0 1-4.6-4.6V7.6a4.6 4.6 0 0 1 4.6-4.6zm-2 2h-2.4a2.6 2.6 0 0 0-2.6 2.6v8.8a2.6 2.6 0 0 0 2.6 2.6h2.4zm-2.5 5a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3m6.5-7h2.4a4.6 4.6 0 0 1 4.6 4.6v8.8a4.6 4.6 0 0 1-4.6 4.6h-2.4zm3 11.7a1.8 1.8 0 1 0 0-3.6a1.8 1.8 0 0 0 0 3.6"></svg:path>`,
})
export class RiSwitchLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSwordLineIcon],svg[ri-sword-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.456 3L21 3.003l.002 3.523l-5.467 5.466l2.828 2.829l1.415-1.414l1.415 1.414l-2.475 2.475l2.828 2.829l-1.414 1.414l-2.829-2.829l-2.474 2.475l-1.415-1.414l1.414-1.415l-2.829-2.828l-2.828 2.828l1.415 1.415l-1.414 1.414l-2.475-2.475l-2.829 2.829l-1.414-1.414l2.829-2.83l-2.475-2.474l1.414-1.414l1.414 1.413l2.827-2.828l-5.46-5.46L2.999 3l3.546.003l5.453 5.454zm-7.58 10.406l-2.828 2.828l.708.707l2.827-2.828zM19 5.001h-.717l-4.87 4.869l.706.707L19 5.698zm-14 0v.7l11.241 11.241l.707-.707L5.715 5.002z"></svg:path>`,
})
export class RiSwordLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSyringeLineIcon],svg[ri-syringe-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m21.678 7.98l-1.414 1.413l-2.122-2.12l-2.121 2.12l3.536 3.536l-1.415 1.414l-.707-.707L11.071 20H5.414l-2.12 2.121l-1.415-1.414L4 18.586v-5.657l6.364-6.364l-.707-.707l1.414-1.414l3.536 3.535l2.121-2.121l-2.121-2.121l1.414-1.415zm-5.657 4.242l-4.243-4.243l-1.414 1.414l2.121 2.122l-1.414 1.414l-2.121-2.121l-1.414 1.414l2.121 2.121l-1.414 1.414l-2.121-2.121l-.122.121V18h4.243z"></svg:path>`,
})
export class RiSyringeLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riTBoxLineIcon],svg[ri-t-box-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 5v14h14V5zM4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m9 7v7h-2v-7H7V8h10v2z"></svg:path>`,
})
export class RiTBoxLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riTShirt2LineIcon],svg[ri-t-shirt-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.998 3a3 3 0 1 0 6 0h6a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-2.001l.001 8a1 1 0 0 1-1 1h-12a1 1 0 0 1-1-1l-.001-8.001L2.998 12a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm11 1.999h-3.417l-.017.041a5 5 0 0 1-4.35 2.955L11.999 8a5 5 0 0 1-4.566-2.96L7.414 5H3.998v5l2.999-.001V19h10.001l-.001-9l3.001-.001z"></svg:path>`,
})
export class RiTShirt2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riTShirtAirLineIcon],svg[ri-t-shirt-air-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.705 17.793c.827.827 1.588 1.207 2.293 1.207c.378 0 .68-.067 1.237-.276l.392-.152c1.05-.421 1.58-.572 2.371-.572c1.214 0 2.379.545 3.486 1.58l.221.213l-1.414 1.414C20.464 20.38 19.703 20 18.998 20c-.378 0-.68.067-1.237.276l-.392.152c-1.05.421-1.58.572-2.371.572c-1.214 0-2.379-.545-3.486-1.58l-.221-.213zM8.998 3a3 3 0 1 0 6 0h6a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-4.002v-2l3.002-.001v-5h-3.417l-.017.041a5 5 0 0 1-4.35 2.955L11.999 8a5 5 0 0 1-4.566-2.96L7.414 5H3.998v5l2.999-.001V19h3.001v2h-4a1 1 0 0 1-1-1l-.001-8.001L2.998 12a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm3.707 10.793c.827.827 1.588 1.207 2.293 1.207c.378 0 .68-.067 1.237-.276l.392-.152c1.05-.421 1.58-.572 2.371-.572c1.214 0 2.379.545 3.486 1.58l.221.213l-1.414 1.414C20.464 16.38 19.703 16 18.998 16c-.378 0-.68.067-1.237.276l-.392.152c-1.05.421-1.58.572-2.371.572c-1.214 0-2.379-.545-3.486-1.58l-.221-.213z"></svg:path>`,
})
export class RiTShirtAirLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riTShirtLineIcon],svg[ri-t-shirt-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14.514 5l2.606-2.607a1 1 0 0 1 1.414 0l4.243 4.243a1 1 0 0 1 0 1.414l-3.778 3.778V21a1 1 0 0 1-1 1h-12a1 1 0 0 1-1-1v-9.17L1.22 8.05a1 1 0 0 1 0-1.414l4.242-4.243a1 1 0 0 1 1.414 0L9.484 5zm.828 2H8.656L6.17 4.515L3.342 7.343L6.999 11v9h10v-9l3.657-3.657l-2.829-2.828z"></svg:path>`,
})
export class RiTShirtLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riTableAltLineIcon],svg[ri-table-alt-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm-1 13H4v3h16zM8 5H4v9h4zm6 0h-4v9h4zm6 0h-4v9h4z"></svg:path>`,
})
export class RiTableAltLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riTableLineIcon],svg[ri-table-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 8h16V5H4zm10 11v-9h-4v9zm2 0h4v-9h-4zm-8 0v-9H4v9zM3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1"></svg:path>`,
})
export class RiTableLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riTabletLineIcon],svg[ri-tablet-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 4v16h12V4zM5 2h14a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1m7 15a1 1 0 1 1 0 2a1 1 0 0 1 0-2"></svg:path>`,
})
export class RiTabletLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riTailwindCssLineIcon],svg[ri-tailwind-css-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.127 6.22C9.177 5.377 10.499 5 12 5c1.409 0 2.485.33 3.358.834c.74.425 1.354 1.007 1.948 1.61c.646.657.996.976 1.437 1.086c.473.118.873.082 1.239-.074c.38-.163.791-.487 1.218-1.056l1.77.843c-.37 1.484-1.047 2.7-2.095 3.538C19.824 12.621 18.503 13 17 13c-1.408 0-2.484-.331-3.357-.834c-.834-.48-1.443-1.098-1.92-1.583c-.663-.672-1.018-1.001-1.465-1.113c-.473-.118-.873-.082-1.239.074c-.38.163-.792.487-1.219 1.056l-1.77-.843c.371-1.484 1.048-2.7 2.096-3.538M12 7c-.828 0-1.495.146-2.033.408c1.32.082 2.181.895 3.057 1.721c.504.476 1.013.956 1.617 1.304c.56.322 1.29.567 2.36.567c.828 0 1.495-.146 2.033-.408c-1.32-.083-2.181-.895-3.056-1.721c-.505-.476-1.013-.956-1.618-1.304C13.801 7.245 13.07 7 12 7m-8.874 5.22C4.177 11.377 5.499 11 7 11c1.409 0 2.485.33 3.358.834c.74.425 1.354 1.007 1.948 1.61c.646.657.996.976 1.437 1.086c.473.118.873.083 1.239-.074c.38-.163.791-.487 1.218-1.056l1.77.842c-.37 1.485-1.047 2.7-2.095 3.539C14.824 18.621 13.503 19 12 19c-1.408 0-2.484-.331-3.357-.834c-.834-.48-1.443-1.098-1.92-1.583c-.663-.672-1.018-1.001-1.465-1.113c-.473-.118-.873-.083-1.239.074c-.38.163-.792.487-1.219 1.056l-1.77-.843c.371-1.484 1.048-2.7 2.096-3.538M7 13c-.828 0-1.495.146-2.033.408c1.32.083 2.181.895 3.057 1.721c.504.476 1.013.956 1.617 1.304c.56.322 1.29.567 2.36.567c.828 0 1.495-.146 2.033-.408c-1.32-.082-2.181-.895-3.056-1.721c-.505-.476-1.014-.956-1.618-1.304C8.801 13.245 8.07 13 7 13"></svg:path>`,
})
export class RiTailwindCssLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riTakeawayLineIcon],svg[ri-takeaway-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 1a1 1 0 0 1 1 1v.999L22 3v6l-2.02-.001l2.767 7.596a4 4 0 1 1-7.62 2.406h-4.253a4.002 4.002 0 0 1-7.8-.229A2 2 0 0 1 2 17V4a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v8a1 1 0 0 0 .883.993L12 13h2a1 1 0 0 0 .993-.883L15 12V3h-3V1zM7 16a2 2 0 1 0 0 4a2 2 0 0 0 0-4m12-.001a2 2 0 1 0 0 4a2 2 0 0 0 0-4m-1.148-7H17V12a3 3 0 0 1-3 3h-2a3 3 0 0 1-2.829-2H4v2.354A4.002 4.002 0 0 1 10.874 17h4.252a4 4 0 0 1 4.57-2.94zM9 8H4v3h5zm11-3h-3v2h3zM9 5H4v1h5z"></svg:path>`,
})
export class RiTakeawayLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riTaobaoLineIcon],svg[ri-taobao-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.173 14H14.5v1.375q.824-.332 1.812-.81l-.082-.238zm.828-.287l.12-.042c.641 1.851 1.034 3.012 1.185 3.5l-1.912.59q-.11-.36-.427-1.293c-6.081 2.884-8.671 2.054-9.008-1.908l1.993-.169c.1 1.165.344 1.621.897 1.752c.393.093.94.063 1.652-.104v-2.04h-3.5v-2h.513l-1.167-1.39q1.563-1.312 2.449-2.863q-.78.202-1.552.435A14 14 0 0 1 7.49 10.29l-1.4-1.428Q8 6.992 9.266 3.868l1.854.75q-.23.567-.48 1.1c3.702-.935 7.275-1.316 9.138-.68c1.223.419 1.919 1.392 2.188 2.585c.17.756.313 2.689.313 5.123c0 2.807-.056 3.77-.34 4.622c-.298.89-.697 1.418-1.408 1.984c-.657.523-1.553.763-2.645.823a12.5 12.5 0 0 1-2.094-.08c-.12-.013-.235-.027-.355-.042l-.242-.033l.264-1.982l.237.032l.319.038c.625.07 1.216.1 1.762.07c.714-.04 1.245-.181 1.508-.39c.426-.34.591-.558.756-1.054c.186-.555.238-1.448.238-3.989c0-2.298-.134-4.101-.265-4.682c-.13-.577-.41-.97-.883-1.132c-1.207-.412-3.801-.194-6.652.416l.615.263q-.195.453-.43.89h5.337v2h-3.5V12h3.5zm-5.5-3.213h-1.208A14 14 0 0 1 9.799 12h2.702zm-10.038-.438L3.54 8.376c1.062.68 2.935 2.428 3.338 3.162c1.239 2.26.198 4.176-3.122 7.997l-1.51-1.311c2.687-3.094 3.5-4.59 2.878-5.725c-.214-.39-1.857-1.923-2.661-2.437M5.14 7.583c-1.048 0-1.882-.762-1.886-1.693c0-.94.838-1.701 1.886-1.701c1.04 0 1.883.758 1.883 1.701c0 .935-.843 1.693-1.883 1.693"></svg:path>`,
})
export class RiTaobaoLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riTapeLineIcon],svg[ri-tape-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.83 13h2.34A3 3 0 1 1 16 15H8a3 3 0 1 1 2.83-2M4 5v14h16V5zM3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m5 10a1 1 0 1 0 0-2a1 1 0 0 0 0 2m8 0a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></svg:path>`,
})
export class RiTapeLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riTaskLineIcon],svg[ri-task-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 4H5v16h14zM3 2.992C3 2.444 3.447 2 3.999 2h16a1 1 0 0 1 1 1L21 20.993A1 1 0 0 1 20.007 22H3.993A1 1 0 0 1 3 21.008zm8.293 10.13l4.243-4.243l1.414 1.414l-5.657 5.657l-3.89-3.89l1.415-1.414z"></svg:path>`,
})
export class RiTaskLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riTaxiLineIcon],svg[ri-taxi-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 11v10a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-1H5v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V11l2.447-4.894A2 2 0 0 1 6.237 5H9V3h6v2h2.764a2 2 0 0 1 1.789 1.106zm-2 2H4v5h16zM4.236 11h15.528l-2-4H6.236zM6.5 17a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3m11 0a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3"></svg:path>`,
})
export class RiTaxiLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riTaxiWifiLineIcon],svg[ri-taxi-wifi-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3v4H6.236l-2.001 4H22v10a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-1H5v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V11l2.447-4.894A2 2 0 0 1 6.237 5H9V3zm8 10H4v5h16zM6.5 14a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3m11 0a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3m1-13a4.5 4.5 0 1 1 0 9a4.5 4.5 0 0 1 0-9m0 5.167c-.491 0-.94.177-1.289.47l-.125.115L18.5 8.167l1.413-1.415a2 2 0 0 0-1.413-.585m0-2.667a4.65 4.65 0 0 0-3.128 1.203l-.173.165l.944.942a3.32 3.32 0 0 1 2.357-.977a3.32 3.32 0 0 1 2.201.83l.156.147l.943-.943A4.65 4.65 0 0 0 18.5 3.5"></svg:path>`,
})
export class RiTaxiWifiLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riTeamLineIcon],svg[ri-team-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 11a5 5 0 0 1 5 5v6h-2v-6a3 3 0 0 0-2.824-2.995L12 13a3 3 0 0 0-2.995 2.824L9 16v6H7v-6a5 5 0 0 1 5-5m-6.5 3q.42.001.81.094a6 6 0 0 0-.301 1.575L6 16v.086a1.5 1.5 0 0 0-.356-.08L5.5 16a1.5 1.5 0 0 0-1.493 1.355L4 17.5V22H2v-4.5A3.5 3.5 0 0 1 5.5 14m13 0a3.5 3.5 0 0 1 3.5 3.5V22h-2v-4.5a1.5 1.5 0 0 0-1.355-1.493L18.5 16q-.264.001-.5.085V16c0-.666-.108-1.306-.308-1.904c.258-.063.53-.096.808-.096m-13-6a2.5 2.5 0 1 1 0 5a2.5 2.5 0 0 1 0-5m13 0a2.5 2.5 0 1 1 0 5a2.5 2.5 0 0 1 0-5m-13 2a.5.5 0 1 0 0 1a.5.5 0 0 0 0-1m13 0a.5.5 0 1 0 0 1a.5.5 0 0 0 0-1M12 2a4 4 0 1 1 0 8a4 4 0 0 1 0-8m0 2a2 2 0 1 0 0 4a2 2 0 0 0 0-4"></svg:path>`,
})
export class RiTeamLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riTelegram2LineIcon],svg[ri-telegram-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.094 7.146c.593-.215.888-.292 1.05-.32q.002.08-.002.122c-.232 2.444-1.251 8.457-1.775 11.255c-.122.655-.216.967-.85.595c-.416-.245-.792-.553-1.196-.817c-1.325-.869-3.221-2.162-3.065-2.084c-1.304-.86-.758-1.386-.03-2.088c.117-.113.24-.231.36-.356c.054-.056.317-.3.687-.645c1.188-1.104 3.484-3.239 3.542-3.486c.01-.04.018-.192-.071-.271c-.09-.08-.223-.053-.318-.031q-.203.046-6.474 4.279q-.918.63-1.664.614l.005.003c-.655-.231-1.308-.43-1.964-.63a66 66 0 0 1-1.3-.405l-.308-.098c4.527-1.972 7.542-3.27 9.053-3.899c2.194-.913 3.496-1.438 4.32-1.738m2.423-1.928a1.8 1.8 0 0 0-.726-.346c-.2-.048-.39-.063-.533-.06c-.477.008-.988.143-1.846.454c-.875.318-2.219.862-4.406 1.771Q9.691 8 2.804 11.001c-.404.161-.773.344-1.065.56c-.27.201-.647.56-.716 1.11c-.052.416.069.8.315 1.103c.214.263.488.423.697.524c.31.15.728.281 1.095.396c.573.18 1.144.363 1.719.539c1.778.544 3.242.992 4.852 2.054c1.181.778 2.34 1.59 3.523 2.366c.432.283.835.608 1.28.87c.488.285 1.106.546 1.86.477c1.138-.105 1.73-1.152 1.97-2.43c.521-2.79 1.557-8.886 1.8-11.432a3.8 3.8 0 0 0-.037-.885a1.66 1.66 0 0 0-.58-1.035"></svg:path>`,
})
export class RiTelegram2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riTelegramLineIcon],svg[ri-telegram-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 12a8 8 0 1 1-16 0a8 8 0 0 1 16 0m-8 10c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10m.358-12.618q-1.458.607-5.831 2.513q-.711.282-.744.552c-.038.304.343.424.862.587l.218.07c.51.166 1.198.36 1.555.368q.486.01 1.084-.4q4.086-2.76 4.218-2.789c.063-.014.149-.032.207.02c.059.052.053.15.047.177c-.038.161-1.534 1.552-2.308 2.271q-.344.324-.683.653c-.474.457-.83.8.02 1.36c.861.568 1.73 1.134 2.57 1.733c.414.296.786.56 1.246.519c.267-.025.543-.276.683-1.026c.332-1.77.983-5.608 1.133-7.19a1.8 1.8 0 0 0-.017-.393a.42.42 0 0 0-.142-.27c-.12-.098-.305-.118-.387-.117c-.376.007-.953.207-3.73 1.362"></svg:path>`,
})
export class RiTelegramLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riTempColdLineIcon],svg[ri-temp-cold-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 5a4 4 0 1 1 8 0v5.255a7 7 0 1 1-8 0zm1.144 6.895a5 5 0 1 0 5.712 0L14 11.298V5a2 2 0 1 0-4 0v6.298zM8 16h8a4 4 0 0 1-8 0"></svg:path>`,
})
export class RiTempColdLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riTempHotLineIcon],svg[ri-temp-hot-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 5a4 4 0 1 1 8 0v5.255a7 7 0 1 1-8 0zm1.144 6.895a5 5 0 1 0 5.712 0L14 11.298V5a2 2 0 1 0-4 0v6.298zm1.856.231V5h2v7.126A4.002 4.002 0 0 1 12 20a4 4 0 0 1-1-7.874M12 18a2 2 0 1 0 0-4a2 2 0 0 0 0 4"></svg:path>`,
})
export class RiTempHotLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riTentLineIcon],svg[ri-tent-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.103 19L12.866 3a1 1 0 0 0-1.732 0L1.896 19H1v2h22v-2zM7.6 19H4.206L12 5.5L19.794 19H16.4L12 11zm4.4-3.85L14.117 19H9.884z"></svg:path>`,
})
export class RiTentLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riTerminalBoxLineIcon],svg[ri-terminal-box-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m1 2v14h16V5zm8 10h6v2h-6zm-3.333-3L5.838 9.172l1.415-1.415L11.495 12l-4.242 4.243l-1.415-1.415z"></svg:path>`,
})
export class RiTerminalBoxLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riTerminalLineIcon],svg[ri-terminal-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11 12l-7.071 7.071l-1.414-1.414L8.172 12L2.515 6.343L3.929 4.93zm0 7h10v2H11z"></svg:path>`,
})
export class RiTerminalLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riTerminalWindowLineIcon],svg[ri-terminal-window-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 9V5H4v4zm0 2H4v8h16zM3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m2 9h3v5H5zm0-6h2v2H5zm4 0h2v2H9z"></svg:path>`,
})
export class RiTerminalWindowLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riTestTubeLineIcon],svg[ri-test-tube-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 2v2h-1v14a4 4 0 0 1-8 0V4H7V2zm-3 8h-4v8a2 2 0 1 0 4 0zm-1 5a1 1 0 1 1 0 2a1 1 0 0 1 0-2m-2-3a1 1 0 1 1 0 2a1 1 0 0 1 0-2m3-8h-4v4h4z"></svg:path>`,
})
export class RiTestTubeLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riThermometerLineIcon],svg[ri-thermometer-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.557 3.444a4 4 0 0 1 0 5.657l-8.2 8.2a4 4 0 0 1-2.387 1.147l-3.38.374l-2.297 2.3a1 1 0 1 1-1.414-1.415l2.298-2.299l.375-3.377A4 4 0 0 1 6.7 11.644l8.2-8.2a4 4 0 0 1 5.658 0m-4.243 1.414l-8.2 8.2a2 2 0 0 0-.574 1.194l-.276 2.484l2.485-.276a2 2 0 0 0 1.193-.574l.422-.422L9.95 14.05l1.414-1.414l1.414 1.414l1.414-1.414l-1.414-1.414l1.415-1.414l1.414 1.414l1.414-1.415l-1.414-1.414L17.02 6.98l1.414 1.414l.707-.707a2 2 0 0 0-2.828-2.828"></svg:path>`,
})
export class RiThermometerLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riThreadsLineIcon],svg[ri-threads-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.184 1.41h-.002C9.09 1.432 6.7 2.473 5.094 4.516c-1.428 1.815-2.16 4.348-2.184 7.49v.002c.025 3.143.756 5.662 2.184 7.477c1.606 2.042 4.009 3.084 7.1 3.105h.002c2.748-.019 4.697-.74 6.303-2.344c2.104-2.103 2.042-4.741 1.347-6.363c-.53-1.234-1.575-2.221-2.976-2.835c-.18-2.985-1.86-4.726-4.62-4.744c-1.63-.01-3.102.72-4.003 2.087l1.655 1.136c.533-.809 1.377-1.199 2.335-1.19c1.387.009 2.3.774 2.555 2.117a11.7 11.7 0 0 0-2.484-.105c-2.64.152-4.368 1.712-4.253 3.875c.12 2.262 2.312 3.495 4.393 3.381c2.492-.137 3.973-1.976 4.324-4.321c.577.373 1.003.85 1.244 1.413c.44 1.025.468 2.716-.915 4.098c-1.217 1.216-2.68 1.746-4.912 1.762c-2.475-.018-4.332-.811-5.537-2.343C5.52 16.774 4.928 14.688 4.906 12c.022-2.688.614-4.775 1.746-6.213c1.205-1.533 3.062-2.325 5.537-2.344c2.493.019 4.384.815 5.636 2.356c.691.85 1.124 1.866 1.413 2.915l1.94-.517c-.363-1.338-.937-2.613-1.815-3.694c-1.653-2.034-4.081-3.071-7.18-3.093m.236 10.968a9.4 9.4 0 0 1 2.432.156c-.14 1.578-.793 2.947-2.512 3.041c-1.112.063-2.237-.434-2.292-1.461c-.04-.764.525-1.63 2.372-1.736"></svg:path>`,
})
export class RiThreadsLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riThumbDownLineIcon],svg[ri-thumb-down-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.4 16H3a2 2 0 0 1-2-2v-2.104a2 2 0 0 1 .15-.762L4.246 3.62A1 1 0 0 1 5.17 3H22a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-3.482a1 1 0 0 0-.817.423l-5.453 7.726a.5.5 0 0 1-.632.159L9.802 22.4a2.5 2.5 0 0 1-1.305-2.853zm7.6-2.588V5H5.84L3 11.896V14h6.4a2 2 0 0 1 1.938 2.493l-.903 3.548a.5.5 0 0 0 .261.571l.661.33l4.71-6.672c.25-.354.57-.644.933-.857M19 13h2V5h-2z"></svg:path>`,
})
export class RiThumbDownLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riThumbUpLineIcon],svg[ri-thumb-up-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.6 8H21a2 2 0 0 1 2 2v2.105c0 .26-.051.52-.15.761l-3.095 7.515a1 1 0 0 1-.925.62H2a1 1 0 0 1-1-1V10a1 1 0 0 1 1-1h3.482a1 1 0 0 0 .817-.424L11.752.851a.5.5 0 0 1 .632-.159l1.814.908a2.5 2.5 0 0 1 1.305 2.852zM7 10.588V19h11.16L21 12.105V10h-6.4a2 2 0 0 1-1.938-2.493l.903-3.548a.5.5 0 0 0-.261-.57l-.661-.331l-4.71 6.672c-.25.354-.57.645-.933.858M5 11H3v8h2z"></svg:path>`,
})
export class RiThumbUpLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riThunderstormsLineIcon],svg[ri-thunderstorms-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 18v-2h.5a3.5 3.5 0 1 0-2.5-5.95V10a6 6 0 1 0-8 5.659v2.089a8 8 0 1 1 9.458-10.65A5.5 5.5 0 1 1 17.5 18zm-4-1.995h3l-5 6.5v-4.5H8l5-6.505z"></svg:path>`,
})
export class RiThunderstormsLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riTicket2LineIcon],svg[ri-ticket-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.005 3a1 1 0 0 1 1 1v5.5a2.5 2.5 0 0 0 0 5V20a1 1 0 0 1-1 1h-18a1 1 0 0 1-1-1v-5.5a2.5 2.5 0 0 0 0-5V4a1 1 0 0 1 1-1zm-1 2h-16v2.968l.156.08a4.5 4.5 0 0 1 2.339 3.74l.005.212a4.5 4.5 0 0 1-2.344 3.95l-.156.08V19h16v-2.97l-.156-.08a4.5 4.5 0 0 1-2.34-3.738L17.506 12a4.5 4.5 0 0 1 2.344-3.951l.156-.081zm-4 4v6h-8V9z"></svg:path>`,
})
export class RiTicket2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riTicketLineIcon],svg[ri-ticket-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.005 3a1 1 0 0 1 1 1v5.5a2.5 2.5 0 0 0 0 5V20a1 1 0 0 1-1 1h-18a1 1 0 0 1-1-1v-5.5a2.5 2.5 0 0 0 0-5V4a1 1 0 0 1 1-1zm-1 2h-16v2.968l.156.08a4.5 4.5 0 0 1 2.339 3.74l.005.212a4.5 4.5 0 0 1-2.344 3.95l-.156.08V19h16v-2.97l-.156-.08a4.5 4.5 0 0 1-2.34-3.738L17.506 12a4.5 4.5 0 0 1 2.344-3.951l.156-.081z"></svg:path>`,
})
export class RiTicketLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riTiktokLineIcon],svg[ri-tiktok-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 2v6.414a6.85 6.85 0 1 0 5.6 6.736v-3.736a8.6 8.6 0 0 0 3.4.686h1V6.5h-1c-1.903 0-3.4-1.537-3.4-3.5V2zm2 2h1.688c.394 2.22 2.08 3.996 4.312 4.41v1.618c-1.038-.152-1.975-.542-2.843-1.123L14.6 7.863v7.287a4.85 4.85 0 1 1-4.6-4.844v1.604a3.25 3.25 0 1 0 3 3.24zM8.5 15.15a1.25 1.25 0 1 1 2.5 0a1.25 1.25 0 0 1-2.5 0"></svg:path>`,
})
export class RiTiktokLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riTimeLineIcon],svg[ri-time-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10m0-2a8 8 0 1 0 0-16a8 8 0 0 0 0 16m1-8h4v2h-6V7h2z"></svg:path>`,
})
export class RiTimeLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riTimeZoneLineIcon],svg[ri-time-zone-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 12c0-2.154.851-4.109 2.235-5.547c.122.111.227.252.306.43c.204.457.204.928.204 1.345c0 .328 0 .64.105.865c.144.308.766.44 1.315.554l.02.005c.19.04.385.08.563.13c.506.14.898.595 1.211.96c.13.151.323.374.42.43c.05-.036.211-.211.29-.498c.062-.22.044-.414-.045-.52c-.56-.66-.529-1.93-.356-2.399c.272-.739 1.122-.684 1.744-.644h.006c.23.015.446.03.608.009c.471-.06.695-.616.835-.964c.045-.111.081-.201.114-.246c.265-.363 1.024-.892 1.577-1.265a8.02 8.02 0 0 1 4.424 4.779a8 8 0 0 1 2.339 1.263C21.272 5.785 17.078 2 12 2C6.477 2 2 6.477 2 12c0 5.078 3.785 9.272 8.687 9.915a8 8 0 0 1-1.263-2.339A8 8 0 0 1 4 12m13 1a4 4 0 1 0 0 8a4 4 0 0 0 0-8m-6 4a6 6 0 1 1 12 0a6 6 0 0 1-12 0m5-3v4h4v-2h-2v-2z"></svg:path>`,
})
export class RiTimeZoneLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riTimer2LineIcon],svg[ri-timer-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12S6.48 2 12 2m0 18c4.42 0 8-3.58 8-8s-3.58-8-8-8s-8 3.58-8 8s3.58 8 8 8m3.536-12.95l1.414 1.414l-4.95 4.95L10.586 12z"></svg:path>`,
})
export class RiTimer2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riTimerFlashLineIcon],svg[ri-timer-flash-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.382 5.968A8.96 8.96 0 0 1 12 4c2.125 0 4.078.736 5.618 1.968l1.453-1.453l1.414 1.414l-1.453 1.453A9 9 0 1 1 3 13c0-2.125.736-4.078 1.968-5.618L3.515 5.93l1.414-1.414zM12 20a7 7 0 1 0 0-14a7 7 0 0 0 0 14m1-8h3l-5 6.5V14H8l5-6.505zM8 1h8v2H8z"></svg:path>`,
})
export class RiTimerFlashLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riTimerLineIcon],svg[ri-timer-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m17.618 5.968l1.453-1.453l1.414 1.414l-1.453 1.453A9 9 0 1 1 12 4c2.125 0 4.078.736 5.618 1.968M12 20a7 7 0 1 0 0-14a7 7 0 0 0 0 14M11 8h2v6h-2zM8 1h8v2H8z"></svg:path>`,
})
export class RiTimerLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riTodoLineIcon],svg[ri-todo-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 2h3a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h3V0h2v2h6V0h2zm0 2v2h-2V4H9v2H7V4H5v16h14V4zM7 8h10v2H7zm0 4h10v2H7z"></svg:path>`,
})
export class RiTodoLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riToggleLineIcon],svg[ri-toggle-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 7a5 5 0 0 0 0 10h8a5 5 0 0 0 0-10zm0-2h8a7 7 0 1 1 0 14H8A7 7 0 1 1 8 5m0 10a3 3 0 1 1 0-6a3 3 0 0 1 0 6"></svg:path>`,
})
export class RiToggleLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riTokenSwapLineIcon],svg[ri-token-swap-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 12.5L6.5 15L9 17.5l2.5-2.5zm6-10a6.5 6.5 0 0 0-6.482 6.018a6.5 6.5 0 1 0 6.964 6.964A6.5 6.5 0 0 0 15 2.5m.323 10.989a6.51 6.51 0 0 0-4.812-4.812a4.5 4.5 0 1 1 4.812 4.812M13.5 15a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0M3 7a4 4 0 0 1 4-4h1.5v2H7a2 2 0 0 0-2 2v1.5H3zm16 10v-1.5h2V17a4 4 0 0 1-4 4h-1.5v-2H17a2 2 0 0 0 2-2"></svg:path>`,
})
export class RiTokenSwapLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riToolsLineIcon],svg[ri-tools-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.33 3.272a3.5 3.5 0 0 1 4.254 4.962l10.709 10.71l-1.414 1.414l-10.71-10.71a3.502 3.502 0 0 1-4.962-4.255L5.444 7.63a1.5 1.5 0 0 0 2.121-2.121zm10.367 1.883l3.182-1.768l1.414 1.415l-1.768 3.182l-1.768.353l-2.12 2.121l-1.415-1.414l2.121-2.121zm-6.718 8.132l1.415 1.414l-5.304 5.303a1 1 0 0 1-1.492-1.327l.078-.087z"></svg:path>`,
})
export class RiToolsLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riToothLineIcon],svg[ri-tooth-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.706 5.89C6.429 5.022 7.507 4.5 9 4.5c.907 0 1.749.267 2.454.727a4.5 4.5 0 0 1 1.74 2.137a1 1 0 1 0 1.862-.728a6.5 6.5 0 0 0-1.224-1.983q.56-.151 1.168-.153c1.493 0 2.57.522 3.294 1.39c.744.893 1.206 2.264 1.206 4.11c0 2.903-.486 5.385-1.23 7.102c-.785 1.812-1.667 2.398-2.27 2.398c-.15 0-.275-.035-.461-.358c-.226-.392-.385-.96-.592-1.72c-.174-.639-.39-1.433-.752-2.062C13.787 14.652 13.1 14 12 14s-1.787.652-2.195 1.36c-.362.63-.578 1.423-.752 2.062c-.207.76-.366 1.328-.592 1.72c-.186.323-.311.358-.461.358c-.603 0-1.485-.586-2.27-2.398c-.744-1.717-1.23-4.2-1.23-7.102c0-1.846.462-3.217 1.206-4.11M12 3.232A6.5 6.5 0 0 0 9 2.5c-2.007 0-3.68.728-4.83 2.11C3.037 5.967 2.5 7.846 2.5 10c0 3.097.514 5.865 1.395 7.898C4.735 19.836 6.103 21.5 8 21.5c1.1 0 1.787-.652 2.195-1.36c.374-.65.593-1.477.77-2.127c.198-.726.354-1.274.574-1.655c.186-.323.311-.358.461-.358s.275.035.461.358c.22.381.376.93.574 1.655c.177.65.396 1.476.77 2.127c.408.708 1.095 1.36 2.195 1.36c1.897 0 3.265-1.664 4.105-3.602c.88-2.033 1.395-4.8 1.395-7.898c0-2.154-.538-4.033-1.67-5.39C18.68 3.228 17.008 2.5 15 2.5c-1.08 0-2.102.264-3 .732"></svg:path>`,
})
export class RiToothLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riTornadoLineIcon],svg[ri-tornado-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 3h20v2H2zm2 4h16v2H4zm4 4h14v2H8zm2 4h8v2h-8zm-2 4h6v2H8z"></svg:path>`,
})
export class RiTornadoLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riTrademarkLineIcon],svg[ri-trademark-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 6v2H6v10H4V8H0V6zm2 0h2.5l3 5.196L20.5 6H23v12h-2V9.133l-3.5 6.063L14 9.135V18h-2z"></svg:path>`,
})
export class RiTrademarkLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riTrafficLightLineIcon],svg[ri-traffic-light-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 4V3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v1h3c0 2.5-2.5 3.5-3 3.5V10h3c0 2.5-2.5 3.5-3 3.5V16h3c0 2.5-2.5 3.5-3 3.5V21a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-1.5c-.5 0-3-1-3-3.5h3v-2.5c-.5 0-3-1-3-3.5h3V7.5c-.5 0-3-1-3-3.5zm5 16a2 2 0 1 0 0-4a2 2 0 0 0 0 4m0-6a2 2 0 1 0 0-4a2 2 0 0 0 0 4m0-6a2 2 0 1 0 0-4a2 2 0 0 0 0 4"></svg:path>`,
})
export class RiTrafficLightLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riTrainLineIcon],svg[ri-train-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m17.2 20l1.8 1.5v.5H5v-.5L6.8 20H5a2 2 0 0 1-2-2V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v11a2 2 0 0 1-2 2zM7 5a2 2 0 0 0-2 2v11h14V7a2 2 0 0 0-2-2zm5 12a2 2 0 1 1 0-4a2 2 0 0 1 0 4M6 7h12v4H6z"></svg:path>`,
})
export class RiTrainLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riTrainWifiLineIcon],svg[ri-train-wifi-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.498 3a6.5 6.5 0 0 0-.479 2H7a2 2 0 0 0-1.995 1.85L5 7v11h14v-6.019a6.5 6.5 0 0 0 2-.48V18a2 2 0 0 1-2 2h-1.8l1.8 1.5v.5H5v-.5L6.8 20H5a2 2 0 0 1-2-2V7a4 4 0 0 1 4-4zM12 13a2 2 0 1 1 0 4a2 2 0 0 1 0-4m.174-6a6.5 6.5 0 0 0 2.862 4.001L6 11V7zM18.5 1a4.5 4.5 0 1 1 0 9a4.5 4.5 0 0 1 0-9m0 5.167c-.491 0-.94.177-1.289.47l-.125.115L18.5 8.167l1.413-1.415a2 2 0 0 0-1.413-.585m0-2.667a4.65 4.65 0 0 0-3.128 1.203l-.173.165l.944.942a3.32 3.32 0 0 1 2.357-.977a3.32 3.32 0 0 1 2.201.83l.156.147l.943-.943A4.65 4.65 0 0 0 18.5 3.5"></svg:path>`,
})
export class RiTrainWifiLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riTravestiLineIcon],svg[ri-travesti-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.951 8.537A7.5 7.5 0 1 1 7.537 9.95L4.662 7.075L2.187 9.55L.772 8.136l6.364-6.364l1.415 1.414l-2.475 2.475zM13.501 20a5.5 5.5 0 1 0 0-11a5.5 5.5 0 0 0 0 11"></svg:path>`,
})
export class RiTravestiLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riTreasureMapLineIcon],svg[ri-treasure-map-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14.935 7.204l-6-3L4 6.319v12.648l5.065-2.17l6 3L20 17.68V5.033zM2 5l7-3l6 3l6.303-2.701a.5.5 0 0 1 .697.46V19l-7 3l-6-3l-6.303 2.701a.5.5 0 0 1-.697-.46zm4 6h2v2H6zm4 0h2v2h-2zm5.998-.063L17.235 9.7l1.061 1.06l-1.237 1.238l1.237 1.238l-1.06 1.06l-1.238-1.237l-1.237 1.237l-1.061-1.06l1.237-1.238l-1.237-1.237L14.76 9.7z"></svg:path>`,
})
export class RiTreasureMapLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riTreeLineIcon],svg[ri-tree-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 7a6 6 0 1 1 11.95.775A6 6 0 0 1 15 19h-2v3h-2v-3H8.5A5.5 5.5 0 0 1 6.191 8.507A6 6 0 0 1 6 7m1.01 3.332A3.502 3.502 0 0 0 8.5 17H15a4 4 0 0 0 1.454-7.728l-.841-.328C15.79 8.304 16 7.672 16 7a4 4 0 1 0-6.4 3.2l-1.2 1.6a6 6 0 0 1-1.39-1.468"></svg:path>`,
})
export class RiTreeLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riTrelloLineIcon],svg[ri-trello-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.001 5v14h14V5zm0-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-14a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m3 4h2a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1m6 0h2a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1"></svg:path>`,
})
export class RiTrelloLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riTriangleLineIcon],svg[ri-triangle-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12.866 3l9.526 16.5a1 1 0 0 1-.866 1.5H2.474a1 1 0 0 1-.866-1.5L11.134 3a1 1 0 0 1 1.732 0m-8.66 16h15.588L12 5.5z"></svg:path>`,
})
export class RiTriangleLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riTriangularFlagLineIcon],svg[ri-triangular-flag-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 5.144V16h12.34zM4 2.932c0-.86 1.015-1.32 1.66-.75l15.99 14.067c.692.61.262 1.751-.66 1.751H6v4H4z"></svg:path>`,
})
export class RiTriangularFlagLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riTrophyLineIcon],svg[ri-trophy-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.005 16.94v2.063h5v2h-12v-2h5V16.94a8 8 0 0 1-7-7.938v-6h16v6a8 8 0 0 1-7 7.938m-7-11.937v4a6 6 0 1 0 12 0v-4zm-5 0h2v4h-2zm20 0h2v4h-2z"></svg:path>`,
})
export class RiTrophyLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riTruckLineIcon],svg[ri-truck-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.965 18a3.5 3.5 0 0 1-6.93 0H1V6a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2h3l3 4.056V18h-2.035a3.501 3.501 0 0 1-6.93 0zM15 7H3v8.05a3.5 3.5 0 0 1 5.663.95h5.674c.168-.353.393-.674.663-.95zm2 6h4v-.285L18.992 10H17zm.5 6a1.5 1.5 0 1 0 0-3.001a1.5 1.5 0 0 0 0 3.001M7 17.5a1.5 1.5 0 1 0-3 0a1.5 1.5 0 0 0 3 0"></svg:path>`,
})
export class RiTruckLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riTumblrLineIcon],svg[ri-tumblr-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.001 8c1.075 0 3.497-.673 3.497-4.5V2h1.5v6h5.003v2h-5.003v2.91c.003 2.48.003 3.686.003 4.09c-.002 2.208 1.615 3.4 4.785 3.4V22h-2.242c-2.402.002-4.546-2.035-4.546-4.546V10H7.001V8z"></svg:path>`,
})
export class RiTumblrLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riTv2LineIcon],svg[ri-tv-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 4c0-.552.455-1 .992-1h18.016c.548 0 .992.445.992 1v14c0 .552-.455 1-.992 1H2.992A.994.994 0 0 1 2 18zm2 1v12h16V5zm1 15h14v2H5z"></svg:path>`,
})
export class RiTv2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riTvLineIcon],svg[ri-tv-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.414 5h5.594c.548 0 .992.445.992 1v14c0 .552-.455 1-.992 1H2.992A.994.994 0 0 1 2 20V6c0-.552.455-1 .992-1h5.594L6.05 2.464L7.464 1.05L11.414 5h1.172l3.95-3.95l1.414 1.414zM4 7v12h16V7z"></svg:path>`,
})
export class RiTvLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riTwitchLineIcon],svg[ri-twitch-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.301 3h16.7v11.7l-4.7 4.7h-3.9l-2.5 2.4h-2.9v-2.4h-4V6.2zm.7 14.4h4v2.4h.095l2.5-2.4h3.877L19 13.872V5H5zm10-9.4h2v4.7h-2zm0 0h2v4.7h-2zm-5 0h2v4.7h-2z"></svg:path>`,
})
export class RiTwitchLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riTwitterLineIcon],svg[ri-twitter-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.35 5.55a2.9 2.9 0 0 0-2.9 2.847l-.028 1.575a.6.6 0 0 1-.68.583l-1.562-.212c-2.053-.28-4.021-1.226-5.91-2.799c-.597 3.31.57 5.603 3.383 7.372L9.4 16.014a.6.6 0 0 1 .035.993L7.843 18.17c.947.059 1.846.017 2.592-.131c4.718-.942 7.855-4.492 7.855-10.348c0-.478-1.013-2.141-2.94-2.141m-4.9 2.81a4.9 4.9 0 0 1 8.385-3.355c.711-.005 1.316.175 2.668-.645c-.334 1.64-.5 2.352-1.213 3.331c0 7.642-4.697 11.358-9.464 12.309c-3.267.652-8.02-.419-9.38-1.841c.693-.054 3.513-.357 5.143-1.55c-1.38-.91-6.868-4.14-3.261-12.823q2.54 2.966 5.15 4.037c1.157.475 1.442.466 1.973.538"></svg:path>`,
})
export class RiTwitterLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riTwitterXLineIcon],svg[ri-twitter-x-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.488 14.651L15.25 21h7l-7.858-10.478L20.93 3h-2.65l-5.117 5.886L8.75 3h-7l7.51 10.015L2.32 21h2.65zM16.25 19L5.75 5h2l10.5 14z"></svg:path>`,
})
export class RiTwitterXLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riTyphoonLineIcon],svg[ri-typhoon-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m17.654 1.7l-2.782 2.533a9.1 9.1 0 0 1 3.49 1.973c3.512 3.2 3.512 8.388 0 11.588q-3.888 3.54-12.016 4.506l2.782-2.533a9.1 9.1 0 0 1-3.49-1.973c-3.512-3.2-3.533-8.369 0-11.588Q9.527 2.666 17.655 1.7M12 6c-3.866 0-7 2.686-7 6s3.134 6 7 6s7-2.686 7-6s-3.134-6-7-6m0 2.3c2.21 0 4 1.657 4 3.7s-1.79 3.7-4 3.7s-4-1.656-4-3.7c0-2.043 1.79-3.7 4-3.7m0 2c-1.138 0-2 .797-2 1.7s.862 1.7 2 1.7s2-.797 2-1.7s-.862-1.7-2-1.7"></svg:path>`,
})
export class RiTyphoonLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riUDiskLineIcon],svg[ri-u-disk-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 12H5v8h14zM5 10V2h14v8h1a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V11a1 1 0 0 1 1-1zm2 0h10V4H7zm2-4h2v2H9zm4 0h2v2h-2z"></svg:path>`,
})
export class RiUDiskLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riUbuntuLineIcon],svg[ri-ubuntu-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m8.668 19.273l1.006-1.742a6 6 0 0 0 8.282-4.781h2.012A8 8 0 0 1 18.929 16a8 8 0 0 1-1.452 1.835a2.5 2.5 0 0 0-1.976.227a2.5 2.5 0 0 0-1.184 1.595a7.98 7.98 0 0 1-5.65-.384m-1.3-.75a7.98 7.98 0 0 1-3.157-4.7C4.696 13.367 5 12.719 5 12c0-.72-.304-1.369-.791-1.825A8 8 0 0 1 5.073 8a8 8 0 0 1 2.295-2.524l1.006 1.742a6 6 0 0 0 0 9.563zm1.3-13.796a8 8 0 0 1 5.648-.387a2.497 2.497 0 0 0 3.161 1.825a8 8 0 0 1 2.49 5.085h-2.013A5.99 5.99 0 0 0 15 6.804a5.99 5.99 0 0 0-5.327-.335zM16 5.072a1.5 1.5 0 1 1 1.5-2.598A1.5 1.5 0 0 1 16 5.072M4.001 12a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0m12 6.928a1.5 1.5 0 1 1 1.5 2.598a1.5 1.5 0 0 1-1.5-2.598"></svg:path>`,
})
export class RiUbuntuLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riUmbrellaLineIcon],svg[ri-umbrella-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.998 2.05c5.053.501 9 4.765 9 9.95v1h-9v6a2 2 0 0 0 4 0v-1h2v1a4 4 0 1 1-8 0v-6h-9v-1c0-5.185 3.947-9.449 9-9.95V2a1 1 0 0 1 2 0zM19.936 11A8.001 8.001 0 0 0 4.06 11z"></svg:path>`,
})
export class RiUmbrellaLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riUninstallLineIcon],svg[ri-uninstall-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 2v2H5l-.001 10h14L19 4h-3V2h4a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1zm10.999 14h-14L5 20h14zM17 17v2h-2v-2zM12 2l4 4h-3v5h-2V6H8z"></svg:path>`,
})
export class RiUninstallLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riUnpinLineIcon],svg[ri-unpin-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20.97 17.172l-1.414 1.414l-3.535-3.535l-.073.074l-.707 3.536l-1.415 1.414l-4.242-4.243l-4.95 4.95l-1.414-1.414l4.95-4.95l-4.243-4.243L5.34 8.761l3.536-.707l.073-.074l-3.536-3.536L6.828 3.03zM10.365 9.394l-.502.502l-2.822.565l6.5 6.5l.564-2.822l.502-.502zm8.411.074l-1.34 1.34l1.414 1.415l1.34-1.34l.707.707l1.415-1.415l-8.486-8.485l-1.414 1.414l.707.707l-1.34 1.34l1.414 1.415l1.34-1.34z"></svg:path>`,
})
export class RiUnpinLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riUnsplashLineIcon],svg[ri-unsplash-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.001 10v4h4v-4h7v11h-18V10zm-2 2h-3v7h14v-7h-3L16 16H8zm8-9v6h-8V3zm-2 2h-4v2h4z"></svg:path>`,
})
export class RiUnsplashLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riUpload2LineIcon],svg[ri-upload-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 19h16v-7h2v8a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-8h2zm9-10v7h-2V9H6l6-6l6 6z"></svg:path>`,
})
export class RiUpload2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riUploadCloud2LineIcon],svg[ri-upload-cloud-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 12.586l4.243 4.242l-1.415 1.415L13 16.415V22h-2v-5.587l-1.828 1.83l-1.415-1.415zM12 2a7 7 0 0 1 6.954 6.194A5.5 5.5 0 0 1 18 18.978v-2.014a3.5 3.5 0 1 0-1.111-6.91a5 5 0 1 0-9.777 0a3.5 3.5 0 0 0-1.292 6.88l.18.03v2.014a5.5 5.5 0 0 1-.954-10.784A7 7 0 0 1 12 2"></svg:path>`,
})
export class RiUploadCloud2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riUploadCloudLineIcon],svg[ri-upload-cloud-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 14.5a6.5 6.5 0 0 1 3.064-5.519a8.001 8.001 0 0 1 15.872 0a6.5 6.5 0 0 1-2.936 12L7 21c-3.356-.274-6-3.078-6-6.5m15.848 4.487a4.5 4.5 0 0 0 2.03-8.309l-.807-.503l-.12-.942a6.001 6.001 0 0 0-11.903 0l-.12.942l-.805.503a4.5 4.5 0 0 0 2.029 8.309l.173.013h9.35zM13 13v4h-2v-4H8l4-5l4 5z"></svg:path>`,
})
export class RiUploadCloudLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riUploadLineIcon],svg[ri-upload-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 19h18v2H3zM13 5.828V17h-2V5.828L4.929 11.9l-1.414-1.414L12 2l8.485 8.485l-1.414 1.415z"></svg:path>`,
})
export class RiUploadLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riUsbLineIcon],svg[ri-usb-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 1l3 5h-2v7.381l3-1.499l-.001-.882H15V7h4v4h-1.001L18 13.118l-5 2.5v1.553A3.001 3.001 0 0 1 12 23a3 3 0 0 1-1.31-5.7L6 14l-.001-2.268a2 2 0 1 1 2.001 0V13l3 2.086V6H9zm0 18a1 1 0 1 0 0 2a1 1 0 0 0 0-2"></svg:path>`,
})
export class RiUsbLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riUser2LineIcon],svg[ri-user-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 22a8 8 0 1 1 16 0zm9-5.917V20h4.659A6.01 6.01 0 0 0 13 16.083M11 20v-3.917A6.01 6.01 0 0 0 6.341 20zm1-7c-3.315 0-6-2.685-6-6s2.685-6 6-6s6 2.685 6 6s-2.685 6-6 6m0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4s-4 1.79-4 4s1.79 4 4 4"></svg:path>`,
})
export class RiUser2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riUser3LineIcon],svg[ri-user-3-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 22h-2v-2a3 3 0 0 0-3-3H9a3 3 0 0 0-3 3v2H4v-2a5 5 0 0 1 5-5h6a5 5 0 0 1 5 5zm-8-9a6 6 0 1 1 0-12a6 6 0 0 1 0 12m0-2a4 4 0 1 0 0-8a4 4 0 0 0 0 8"></svg:path>`,
})
export class RiUser3LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riUser4LineIcon],svg[ri-user-4-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 20h14v2H5zm7-2a8 8 0 1 1 0-16a8 8 0 0 1 0 16m0-2a6 6 0 1 0 0-12a6 6 0 0 0 0 12"></svg:path>`,
})
export class RiUser4LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riUser5LineIcon],svg[ri-user-5-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.39 16.539a8 8 0 1 1 9.221 0l2.083 4.76a.5.5 0 0 1-.459.701H5.765a.5.5 0 0 1-.459-.7zm6.735-.693l1.332-.941a6 6 0 1 0-6.913 0l1.331.941L8.058 20h7.884zM8.119 10.97l1.94-.485a2 2 0 0 0 3.882 0l1.94.485a4.002 4.002 0 0 1-7.762 0"></svg:path>`,
})
export class RiUser5LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riUser6LineIcon],svg[ri-user-6-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 17c3.662 0 6.865 1.575 8.607 3.925l-1.842.871C17.347 20.116 14.847 19 12 19c-2.848 0-5.347 1.116-6.765 2.796l-1.841-.872C5.136 18.574 8.338 17 12 17m0-15a5 5 0 0 1 5 5v3a5 5 0 0 1-4.783 4.995L12 15a5 5 0 0 1-5-5V7a5 5 0 0 1 4.783-4.995zm0 2a3 3 0 0 0-2.995 2.824L9 7v3a3 3 0 0 0 5.995.176L15 10V7a3 3 0 0 0-3-3"></svg:path>`,
})
export class RiUser6LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riUserAddLineIcon],svg[ri-user-add-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 14.252v2.09A6 6 0 0 0 6 22H4a8 8 0 0 1 10-7.749M12 13c-3.315 0-6-2.685-6-6s2.685-6 6-6s6 2.685 6 6s-2.685 6-6 6m0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4s-4 1.79-4 4s1.79 4 4 4m6 6v-3h2v3h3v2h-3v3h-2v-3h-3v-2z"></svg:path>`,
})
export class RiUserAddLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riUserCommunityLineIcon],svg[ri-user-community-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.234 7.73A8 8 0 0 1 12 4a8 8 0 0 1 6.767 3.73l1.69-1.07A10 10 0 0 0 12 2a10 10 0 0 0-8.456 4.66zM12 20a8 8 0 0 1-6.766-3.73l-1.69 1.07A10 10 0 0 0 12 22a10 10 0 0 0 8.457-4.66l-1.69-1.07A8 8 0 0 1 12 20m0-12a1 1 0 1 1 0 2a1 1 0 0 1 0-2m0 4a3 3 0 1 0 0-6a3 3 0 0 0 0 6m0 3a2 2 0 0 0-2 2H8a4 4 0 0 1 8 0h-2a2 2 0 0 0-2-2m-9-4a1 1 0 1 0 0 2a1 1 0 0 0 0-2m-3 1a3 3 0 1 1 6 0a3 3 0 0 1-6 0m20 0a1 1 0 1 1 2 0a1 1 0 0 1-2 0m1-3a3 3 0 1 0 0 6a3 3 0 0 0 0-6"></svg:path>`,
})
export class RiUserCommunityLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riUserFollowLineIcon],svg[ri-user-follow-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 14.252v2.09A6 6 0 0 0 6 22H4a8 8 0 0 1 10-7.749M12 13c-3.315 0-6-2.685-6-6s2.685-6 6-6s6 2.685 6 6s-2.685 6-6 6m0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4s-4 1.79-4 4s1.79 4 4 4m5.793 8.914l3.535-3.535l1.415 1.414l-4.95 4.95l-3.536-3.536l1.415-1.414z"></svg:path>`,
})
export class RiUserFollowLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riUserForbidLineIcon],svg[ri-user-forbid-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 7a4 4 0 1 1 8 0a4 4 0 0 1-8 0m4-6a6 6 0 1 0 0 12a6 6 0 0 0 0-12m3 17a3 3 0 0 1 4.293-2.708l-4 4.001A3 3 0 0 1 15 18m1.707 2.708l4-4.001a3 3 0 0 1-4.001 4.001M18 13a5 5 0 1 0 0 10a5 5 0 0 0 0-10m-6 1q.126 0 .252.004a7 7 0 0 0-.975 2.04A6 6 0 0 0 6 22H4a8 8 0 0 1 8-8"></svg:path>`,
})
export class RiUserForbidLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riUserHeartLineIcon],svg[ri-user-heart-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m17.841 15.659l.176.177l.178-.177a2.25 2.25 0 1 1 3.182 3.182l-3.36 3.359l-3.358-3.359a2.25 2.25 0 1 1 3.182-3.182M12 14v2a6 6 0 0 0-6 6H4a8 8 0 0 1 7.75-7.996zm0-13c3.315 0 6 2.685 6 6a6 6 0 0 1-5.775 5.996L12 13c-3.315 0-6-2.685-6-6a6 6 0 0 1 5.775-5.996zm0 2C9.79 3 8 4.79 8 7s1.79 4 4 4s4-1.79 4-4s-1.79-4-4-4"></svg:path>`,
})
export class RiUserHeartLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riUserLineIcon],svg[ri-user-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 22a8 8 0 1 1 16 0h-2a6 6 0 0 0-12 0zm8-9c-3.315 0-6-2.685-6-6s2.685-6 6-6s6 2.685 6 6s-2.685 6-6 6m0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4s-4 1.79-4 4s1.79 4 4 4"></svg:path>`,
})
export class RiUserLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riUserLocationLineIcon],svg[ri-user-location-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 14v2a6 6 0 0 0-6 6H4a8 8 0 0 1 8-8m0-1c-3.315 0-6-2.685-6-6s2.685-6 6-6s6 2.685 6 6s-2.685 6-6 6m0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4s-4 1.79-4 4s1.79 4 4 4m8.828 10.071L18 24l-2.828-2.929c-1.562-1.618-1.562-4.24 0-5.858a3.904 3.904 0 0 1 5.656 0c1.563 1.618 1.563 4.24 0 5.858m-1.438-1.39c.813-.842.813-2.236 0-3.079a1.904 1.904 0 0 0-2.78 0c-.813.843-.813 2.237 0 3.08L18 21.12z"></svg:path>`,
})
export class RiUserLocationLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riUserMinusLineIcon],svg[ri-user-minus-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 14.252v2.09A6 6 0 0 0 6 22H4a8 8 0 0 1 10-7.749M12 13c-3.315 0-6-2.685-6-6s2.685-6 6-6s6 2.685 6 6s-2.685 6-6 6m0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4s-4 1.79-4 4s1.79 4 4 4m11 7v2h-8v-2z"></svg:path>`,
})
export class RiUserMinusLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riUserReceived2LineIcon],svg[ri-user-received-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 14.252v2.09A6 6 0 0 0 6 22H4a8 8 0 0 1 10-7.749M12 13c-3.315 0-6-2.685-6-6s2.685-6 6-6s6 2.685 6 6s-2.685 6-6 6m0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4s-4 1.79-4 4s1.79 4 4 4m8 6h3v2h-3v3.5L15 18l5-4.5z"></svg:path>`,
})
export class RiUserReceived2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riUserReceivedLineIcon],svg[ri-user-received-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 14.252v2.09A6 6 0 0 0 6 22H4a8 8 0 0 1 10-7.749M12 13c-3.315 0-6-2.685-6-6s2.685-6 6-6s6 2.685 6 6s-2.685 6-6 6m0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4s-4 1.79-4 4s1.79 4 4 4m7.418 6h3.586v2h-3.586l1.829 1.828l-1.414 1.415L15.59 18l4.243-4.243l1.414 1.415z"></svg:path>`,
})
export class RiUserReceivedLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riUserSearchLineIcon],svg[ri-user-search-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 14v2a6 6 0 0 0-6 6H4a8 8 0 0 1 8-8m0-1c-3.315 0-6-2.685-6-6s2.685-6 6-6s6 2.685 6 6s-2.685 6-6 6m0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4s-4 1.79-4 4s1.79 4 4 4m9.446 9.032l1.504 1.503l-1.415 1.415l-1.503-1.504a4 4 0 1 1 1.414-1.414M18 20a2 2 0 1 0 0-4a2 2 0 0 0 0 4"></svg:path>`,
})
export class RiUserSearchLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riUserSettingsLineIcon],svg[ri-user-settings-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 14v2a6 6 0 0 0-6 6H4a8 8 0 0 1 8-8m0-1c-3.315 0-6-2.685-6-6s2.685-6 6-6s6 2.685 6 6s-2.685 6-6 6m0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4s-4 1.79-4 4s1.79 4 4 4m2.595 7.811a3.5 3.5 0 0 1 0-1.622l-.992-.573l1-1.732l.992.573A3.5 3.5 0 0 1 17 14.645V13.5h2v1.145c.532.158 1.012.44 1.405.812l.992-.573l1 1.732l-.991.573a3.5 3.5 0 0 1 0 1.622l.991.573l-1 1.732l-.992-.573a3.5 3.5 0 0 1-1.405.812V22.5h-2v-1.145a3.5 3.5 0 0 1-1.405-.812l-.992.573l-1-1.732zM18 19.5a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3"></svg:path>`,
})
export class RiUserSettingsLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riUserShared2LineIcon],svg[ri-user-shared-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 14.252v2.09A6 6 0 0 0 6 22H4a8 8 0 0 1 10-7.749M12 13c-3.315 0-6-2.685-6-6s2.685-6 6-6s6 2.685 6 6s-2.685 6-6 6m0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4s-4 1.79-4 4s1.79 4 4 4m6 6v-3.5l5 4.5l-5 4.5V19h-3v-2z"></svg:path>`,
})
export class RiUserShared2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riUserSharedLineIcon],svg[ri-user-shared-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 14.252v2.09A6 6 0 0 0 6 22H4a8 8 0 0 1 10-7.749M12 13c-3.315 0-6-2.685-6-6s2.685-6 6-6s6 2.685 6 6s-2.685 6-6 6m0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4s-4 1.79-4 4s1.79 4 4 4m6.586 6l-1.829-1.828l1.415-1.415L22.414 18l-4.242 4.243l-1.415-1.415L18.586 19H15v-2z"></svg:path>`,
})
export class RiUserSharedLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riUserSmileLineIcon],svg[ri-user-smile-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10m0-2a8 8 0 1 0 0-16a8 8 0 0 0 0 16m-5-8h2a3 3 0 1 0 6 0h2a5 5 0 0 1-10 0"></svg:path>`,
})
export class RiUserSmileLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riUserStarLineIcon],svg[ri-user-star-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 14v2a6 6 0 0 0-6 6H4a8 8 0 0 1 8-8m0-1c-3.315 0-6-2.685-6-6s2.685-6 6-6s6 2.685 6 6s-2.685 6-6 6m0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4s-4 1.79-4 4s1.79 4 4 4m6 10.5l-2.939 1.545l.561-3.273l-2.377-2.317l3.286-.477L18 14l1.47 2.977l3.285.478l-2.377 2.318l.56 3.272z"></svg:path>`,
})
export class RiUserStarLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riUserUnfollowLineIcon],svg[ri-user-unfollow-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 14.252v2.09A6 6 0 0 0 6 22H4a8 8 0 0 1 10-7.749M12 13c-3.315 0-6-2.685-6-6s2.685-6 6-6s6 2.685 6 6s-2.685 6-6 6m0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4s-4 1.79-4 4s1.79 4 4 4m7 6.586l2.121-2.121l1.415 1.414L20.414 19l2.121 2.121l-1.414 1.415L19 20.414l-2.121 2.121l-1.415-1.414L17.587 19l-2.121-2.121l1.414-1.415z"></svg:path>`,
})
export class RiUserUnfollowLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riUserVoiceLineIcon],svg[ri-user-voice-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 22a8 8 0 1 1 16 0h-2a6 6 0 0 0-12 0zm8-9c-3.315 0-6-2.685-6-6s2.685-6 6-6s6 2.685 6 6s-2.685 6-6 6m0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4s-4 1.79-4 4s1.79 4 4 4M21.548.784A13.94 13.94 0 0 1 23 7c0 2.233-.523 4.344-1.452 6.217l-1.645-1.197A12 12 0 0 0 21 7a12 12 0 0 0-1.097-5.02zm-3.302 2.4A10 10 0 0 1 19 7a10 10 0 0 1-.754 3.816l-1.677-1.22A8 8 0 0 0 17 7a8 8 0 0 0-.43-2.596z"></svg:path>`,
})
export class RiUserVoiceLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riVercelLineIcon],svg[ri-vercel-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 21.648L12 2.352L1 21.648zm-3.442-2H4.442L12 6.39z"></svg:path>`,
})
export class RiVercelLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riVerifiedBadgeLineIcon],svg[ri-verified-badge-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.007 2.104a3 3 0 0 0-3.595 1.489L5.606 5.17a1 1 0 0 1-.436.436l-1.577.805a3 3 0 0 0-1.49 3.596l.546 1.685a1 1 0 0 1 0 .616l-.545 1.685a3 3 0 0 0 1.49 3.595l1.576.806a1 1 0 0 1 .436.436l.806 1.577a3 3 0 0 0 3.595 1.49l1.685-.546a1 1 0 0 1 .616 0l1.685.545a3 3 0 0 0 3.596-1.49l.805-1.576a1 1 0 0 1 .436-.436l1.577-.806a3 3 0 0 0 1.49-3.595l-.546-1.685a1 1 0 0 1 0-.616l.545-1.685a3 3 0 0 0-1.489-3.596l-1.577-.805a1 1 0 0 1-.436-.436l-.805-1.577a3 3 0 0 0-3.596-1.49l-1.685.546a1 1 0 0 1-.616 0zM8.193 4.503a1 1 0 0 1 1.198-.497l1.685.546a3 3 0 0 0 1.848 0l1.685-.546a1 1 0 0 1 1.199.497l.805 1.577a3 3 0 0 0 1.307 1.307l1.577.805a1 1 0 0 1 .497 1.199l-.546 1.685a3 3 0 0 0 0 1.848l.546 1.685a1 1 0 0 1-.497 1.198l-1.577.806a3 3 0 0 0-1.307 1.307l-.805 1.577a1 1 0 0 1-1.199.496l-1.685-.545a3 3 0 0 0-1.848 0l-1.685.545a1 1 0 0 1-1.198-.496l-.806-1.577a3 3 0 0 0-1.307-1.307l-1.577-.806a1 1 0 0 1-.496-1.198l.545-1.685a3 3 0 0 0 0-1.848l-.545-1.685a1 1 0 0 1 .496-1.199l1.577-.805A3 3 0 0 0 7.387 6.08zM6.76 11.757L11.002 16l7.071-7.071l-1.414-1.414l-5.657 5.657l-2.828-2.829z"></svg:path>`,
})
export class RiVerifiedBadgeLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riVideoAddLineIcon],svg[ri-video-add-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 4a1 1 0 0 1 1 1v4.2l5.213-3.65a.5.5 0 0 1 .787.41v12.08a.5.5 0 0 1-.787.41L17 14.8V19a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1zm-1 2H3v12h12zM8 8h2v3h3v2H9.999L10 16H8l-.001-3H5v-2h3zm13 .841l-4 2.8v.718l4 2.8z"></svg:path>`,
})
export class RiVideoAddLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riVideoAiLineIcon],svg[ri-video-ai-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19.713 8.128l-.246.566a.506.506 0 0 1-.934 0l-.246-.566a4.36 4.36 0 0 0-2.22-2.25l-.759-.339a.53.53 0 0 1 0-.963l.717-.319a4.37 4.37 0 0 0 2.251-2.326l.253-.611a.506.506 0 0 1 .942 0l.253.61a4.37 4.37 0 0 0 2.25 2.327l.718.32a.53.53 0 0 1 0 .962l-.76.338a4.36 4.36 0 0 0-2.219 2.251M3.993 3H13v2H5v14h14v-8h2v9.007a.994.994 0 0 1-.993.993H3.993A.993.993 0 0 1 3 20.007V3.993C3 3.445 3.445 3 3.993 3m6.629 5.415l4.879 3.252a.4.4 0 0 1 0 .666l-4.88 3.252a.4.4 0 0 1-.621-.332V8.747a.4.4 0 0 1 .622-.332"></svg:path>`,
})
export class RiVideoAiLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riVideoChatLineIcon],svg[ri-video-chat-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 10.25L17 8v6l-3-2.25V14H7V8h7zM5.763 17H20V5H4v13.385zm.692 2L2 22.5V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1z"></svg:path>`,
})
export class RiVideoChatLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riVideoDownloadLineIcon],svg[ri-video-download-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 4a1 1 0 0 1 1 1v4.2l5.213-3.65a.5.5 0 0 1 .787.41v12.08a.5.5 0 0 1-.787.41L17 14.8V19a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1zm-1 2H3v12h12zm-5 2v4h3l-4 4l-4-4h3V8zm11 .841l-4 2.8v.718l4 2.8z"></svg:path>`,
})
export class RiVideoDownloadLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riVideoLineIcon],svg[ri-video-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 3.993C3 3.445 3.445 3 3.993 3h16.014c.548 0 .993.445.993.993v16.014a.994.994 0 0 1-.993.993H3.993A.993.993 0 0 1 3 20.007zM5 5v14h14V5zm5.622 3.415l4.879 3.252a.4.4 0 0 1 0 .666l-4.88 3.252a.4.4 0 0 1-.621-.332V8.747a.4.4 0 0 1 .622-.332"></svg:path>`,
})
export class RiVideoLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riVideoOffLineIcon],svg[ri-video-off-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m17 18.414l4.192 4.193l1.415-1.415l-19.8-19.799l-1.414 1.415L2.586 4H2a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1zm-2-2V18H3V6h1.586zm8 1.626a.5.5 0 0 1-.292.454L21 16.786V8.841l-4 2.8v1.145l-2-2V6h-4.786l-2-2H16a1 1 0 0 1 1 1v4.2l5.213-3.65a.5.5 0 0 1 .787.41z"></svg:path>`,
})
export class RiVideoOffLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riVideoOnAiLineIcon],svg[ri-video-on-ai-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m4.713 9.128l-.246.566a.506.506 0 0 1-.934 0l-.246-.566a4.36 4.36 0 0 0-2.22-2.25l-.759-.339a.53.53 0 0 1 0-.963l.717-.319a4.37 4.37 0 0 0 2.251-2.326l.253-.611a.506.506 0 0 1 .942 0l.253.61a4.37 4.37 0 0 0 2.25 2.327l.718.32a.53.53 0 0 1 0 .962l-.76.338a4.36 4.36 0 0 0-2.219 2.251M1 19v-7h2v6h12V6h-5V4h6a1 1 0 0 1 1 1v4.2l5.213-3.65a.5.5 0 0 1 .787.41v12.08a.5.5 0 0 1-.787.41L17 14.8V19a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1m16-6.641l4 2.8V8.84l-4 2.8z"></svg:path>`,
})
export class RiVideoOnAiLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riVideoOnLineIcon],svg[ri-video-on-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m17 9.2l5.213-3.65a.5.5 0 0 1 .787.41v12.08a.5.5 0 0 1-.787.41L17 14.8V19a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1zm0 3.159l4 2.8V8.84l-4 2.8zM3 6v12h12V6z"></svg:path>`,
})
export class RiVideoOnLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riVideoUploadLineIcon],svg[ri-video-upload-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 4a1 1 0 0 1 1 1v4.2l5.213-3.65a.5.5 0 0 1 .787.41v12.08a.5.5 0 0 1-.787.41L17 14.8V19a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1zm-1 2H3v12h12zM9 8l4 4h-3v4H8v-4H5zm12 .841l-4 2.8v.718l4 2.8z"></svg:path>`,
})
export class RiVideoUploadLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riVidicon2LineIcon],svg[ri-vidicon-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 6V4H5V2h10v4h1a1 1 0 0 1 1 1v2.2l5.213-3.65a.5.5 0 0 1 .787.41v12.08a.5.5 0 0 1-.787.41L17 14.8V19a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1zm2 2H3v10h12zm2 4.359l4 2.8V8.84l-4 2.8zM5 10h2v2H5z"></svg:path>`,
})
export class RiVidicon2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riVidiconLineIcon],svg[ri-vidicon-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m17 9.2l5.213-3.65a.5.5 0 0 1 .787.41v12.08a.5.5 0 0 1-.787.41L17 14.8V19a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1zm0 3.159l4 2.8V8.84l-4 2.8zM3 6v12h12V6zm2 2h2v2H5z"></svg:path>`,
})
export class RiVidiconLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riVimeoLineIcon],svg[ri-vimeo-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.994 3.004C20.427 3.004 22 4.516 22 7.5c0 1.72-.998 3.94-1.832 5.235c-2.789 4.333-6.233 8.74-9.643 8.74c-3.706 0-4.67-6.831-5.092-8.432s-.533-2.21-1.17-3.233q-.475.33-1.33.93a.5.5 0 0 1-.693-.117L.926 8.807a.5.5 0 0 1 .027-.62Q5.193 3.278 8 3.278c2.392 0 3.125 2.816 3.324 4.223c.3 2.117.69 4.738 1.245 5.872c.556-.792 2.18-2.888 1.966-3.99c-.094-.487-1.317.183-1.887.078c-.425-.08-.805-.402-.805-1.026c0-1.31 1.851-5.43 6.15-5.43m.007 2c-2.194 0-3.251 1.533-3.653 2.208c1.25.046 1.97.818 2.134 1.803c.388 2.33-1.917 4.92-2.34 5.565c-.396.603-3.061 3.328-4.25-3.36a160 160 0 0 1-.665-4.186c-.17-1.151-.872-1.763-1.229-1.763c-.843 0-1.92.65-3.856 2.515c1.905-.115 2.545 2.276 2.917 3.633c.815 2.984 1.57 8.055 3.62 8.055c1.726 0 4.438-2.645 7.37-7.038c.208-.312 1.965-3.025 1.965-5.037c0-2.395-1.469-2.395-2.013-2.395"></svg:path>`,
})
export class RiVimeoLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riVipCrown2LineIcon],svg[ri-vip-crown-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.497 8.065L4.784 19h14.443l1.286-10.935l-4.01 2.673l-4.498-6.297l-4.498 6.297zM2.806 5.2L7.005 8l4.186-5.861a1 1 0 0 1 1.628 0l4.186 5.86l4.2-2.799a1 1 0 0 1 1.547.949L21.11 20.116a1 1 0 0 1-.993.884H3.894a1 1 0 0 1-.993-.884L1.258 6.15a1 1 0 0 1 1.548-.95m9.2 9.8a2 2 0 1 1-.001-4a2 2 0 0 1 0 4"></svg:path>`,
})
export class RiVipCrown2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riVipCrownLineIcon],svg[ri-vip-crown-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.005 19h20v2h-20zm0-14l5 3.5l5-6.5l5 6.5l5-3.5v12h-20zm2 3.841V15h16V8.841l-3.42 2.394l-4.58-5.955l-4.58 5.955z"></svg:path>`,
})
export class RiVipCrownLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riVipDiamondLineIcon],svg[ri-vip-diamond-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.878 3.003h14.254a1 1 0 0 1 .809.412l3.822 5.256a.5.5 0 0 1-.037.633l-11.354 12.3a.5.5 0 0 1-.706.029L.283 9.304a.5.5 0 0 1-.037-.633l3.823-5.256a1 1 0 0 1 .809-.412m.509 2l-2.8 3.849l9.418 10.202l9.417-10.202l-2.8-3.85z"></svg:path>`,
})
export class RiVipDiamondLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riVipLineIcon],svg[ri-vip-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.005 19h20v2h-20zm9-11h2v8h-2zM7.97 8l-1.86 5.113L4.247 8H2.123l2.986 7.964h2L10.095 8zm9.035 6v2h-2V8h4a3 3 0 0 1 0 6zm0-4v2h2a1 1 0 1 0 0-2zm-15-7h20v2h-20z"></svg:path>`,
})
export class RiVipLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riVirusLineIcon],svg[ri-virus-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13.716 1.947l3.735 1.434l-.717 1.867l-.934-.359l-.746 1.945a6 6 0 0 1 1.945 1.846l1.902-.847l-.406-.914l1.827-.813l1.627 3.654l-1.827.813l-.407-.913l-1.902.847a6 6 0 0 1 .07 2.68l1.944.746l.358-.933l1.867.716l-1.433 3.735l-1.867-.717l.357-.933l-1.944-.747A6 6 0 0 1 15.32 17l.848 1.903l.914-.407l.813 1.827l-3.654 1.627l-.813-1.827l.913-.407l-.847-1.902a6 6 0 0 1-2.68.07l-.747 1.944l.934.358l-.717 1.867L6.55 20.62l.717-1.867l.932.358l.748-1.944A6 6 0 0 1 7 15.319l-1.903.848l.407.914l-1.827.813L2.05 14.24l1.827-.813l.406.914l1.903-.848a6 6 0 0 1-.07-2.68l-1.945-.746l-.358.933l-1.867-.716L3.38 6.549l1.867.717l-.36.933l1.946.747A6 6 0 0 1 8.68 7l-.848-1.903l-.913.407l-.814-1.827L9.76 2.051l.813 1.827l-.914.407l.848 1.902a6 6 0 0 1 2.68-.07l.745-1.945L13 3.815zM12 8a4 4 0 1 0 0 8a4 4 0 0 0 0-8m-.5 4.866a1 1 0 1 1-1 1.732a1 1 0 0 1 1-1.732M14 11a1 1 0 1 1 0 2a1 1 0 0 1 0-2m-2.134-1.232a1 1 0 1 1-1.732 1a1 1 0 0 1 1.732-1"></svg:path>`,
})
export class RiVirusLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riVisaLineIcon],svg[ri-visa-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m22.222 15.768l-.225-1.125h-2.514l-.4 1.117l-2.015.004q1.943-4.669 2.884-6.917c.164-.392.455-.592.884-.589q.492.004 1.606.001L24 15.765zm-2.174-2.666h1.621l-.605-2.82zM7.062 8.257l2.026.002l-3.132 7.51l-2.051-.002a951 951 0 0 1-1.528-5.956c-.1-.396-.298-.673-.679-.804Q1.187 8.832 0 8.466v-.207h3.237c.56 0 .887.271.992.827q.159.836.8 4.254zm4.81.002l-1.601 7.509l-1.929-.003L9.94 8.257zm3.91-.139c.577 0 1.304.18 1.722.346l-.338 1.556c-.378-.152-1-.357-1.523-.35c-.76.013-1.23.332-1.23.638c0 .498.816.749 1.656 1.293c.958.62 1.085 1.177 1.073 1.783c-.013 1.255-1.073 2.494-3.309 2.494c-1.02-.015-1.388-.1-2.22-.396l.352-1.624c.847.354 1.206.467 1.93.467c.663 0 1.232-.268 1.237-.735c.004-.332-.2-.497-.944-.907s-1.788-.979-1.774-2.122c.017-1.462 1.402-2.443 3.368-2.443"></svg:path>`,
})
export class RiVisaLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riVkLineIcon],svg[ri-vk-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.827 5.828c-.344.349-.57.839-.696 1.77c-.129.965-.13 2.243-.13 4.082v.64c0 1.836.001 3.113.13 4.077c.125.932.352 1.425.697 1.777c.35.343.84.57 1.77.695c.965.129 2.243.131 4.082.131h.64c1.836 0 3.113-.002 4.078-.131c.931-.125 1.424-.352 1.776-.697c.343-.349.57-.839.695-1.77c.13-.965.131-2.243.131-4.082v-.64c0-1.836-.002-3.113-.13-4.077c-.126-.932-.353-1.425-.698-1.777c-.349-.343-.839-.57-1.77-.695C15.437 5.002 14.159 5 12.32 5h-.64c-1.836 0-3.113.002-4.077.131c-.932.125-1.424.352-1.776.697M11.68 3h.64c1.445 0 2.912-.043 4.347.149c1.156.155 2.135.486 2.917 1.26l.008.009c.773.784 1.105 1.763 1.26 2.92c.191 1.433.148 2.899.148 4.342v.64c0 1.444.044 2.911-.149 4.347c-.154 1.156-.486 2.135-1.26 2.917l-.009.008c-.783.773-1.762 1.104-2.92 1.26c-1.433.191-2.899.148-4.342.148h-.64c-1.444 0-2.911.043-4.346-.149c-1.157-.155-2.136-.486-2.917-1.26l-.009-.009c-.772-.784-1.104-1.763-1.259-2.92C2.957 15.23 3 13.764 3 12.32v-.64c0-1.444-.043-2.911.15-4.347c.154-1.156.486-2.135 1.26-2.917l.008-.008c.784-.773 1.763-1.104 2.92-1.26C8.772 2.958 10.238 3 11.68 3M6.036 8.478c.096 4.68 2.436 7.488 6.54 7.488h.24V13.29c1.506.15 2.646 1.254 3.102 2.676h2.13a5.92 5.92 0 0 0-3.078-3.756a5.72 5.72 0 0 0 2.628-3.738h-1.932c-.42 1.488-1.668 2.838-2.85 2.964V8.478h-1.938v5.184c-1.2-.3-2.712-1.752-2.778-5.184z"></svg:path>`,
})
export class RiVkLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riVoiceAiLineIcon],svg[ri-voice-ai-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20.713 7.128l-.246.566a.506.506 0 0 1-.934 0l-.246-.566a4.36 4.36 0 0 0-2.22-2.25l-.759-.339a.53.53 0 0 1 0-.963l.717-.319A4.37 4.37 0 0 0 19.276.931L19.53.32a.506.506 0 0 1 .942 0l.253.61a4.37 4.37 0 0 0 2.25 2.327l.718.32a.53.53 0 0 1 0 .962l-.76.338a4.36 4.36 0 0 0-2.219 2.251M8.5 6h-2v12h2zM4 10H2v4h2zm9-8h-2v20h2zm4.5 6h-2v10h2zm4.5 2h-2v4h2z"></svg:path>`,
})
export class RiVoiceAiLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riVoiceRecognitionLineIcon],svg[ri-voice-recognition-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.998 15v4h4v2h-6v-6zm16 0v6h-6v-2h4v-4zm-8-9v12h-2V6zm-4 3v6h-2V9zm8 0v6h-2V9zm-8-6v2h-4v4h-2V3zm12 0v6h-2V5h-4V3z"></svg:path>`,
})
export class RiVoiceRecognitionLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riVoiceprintLineIcon],svg[ri-voiceprint-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 7h2v10H5zm-4 3h2v4H1zm8-8h2v18H9zm4 2h2v18h-2zm4 3h2v10h-2zm4 3h2v4h-2z"></svg:path>`,
})
export class RiVoiceprintLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riVolumeDownLineIcon],svg[ri-volume-down-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 7.22L9.603 10H6v4h3.603L13 16.78zM8.889 16H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h3.889l5.294-4.332a.5.5 0 0 1 .817.387v15.89a.5.5 0 0 1-.817.387zm9.974.591l-1.422-1.422A4 4 0 0 0 19 12c0-1.43-.75-2.685-1.88-3.392l1.439-1.439A5.99 5.99 0 0 1 21 12c0 1.842-.83 3.49-2.137 4.591"></svg:path>`,
})
export class RiVolumeDownLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riVolumeMuteLineIcon],svg[ri-volume-mute-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 7.22L6.603 10H3v4h3.603L10 16.78zM5.889 16H2a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h3.889l5.294-4.332a.5.5 0 0 1 .817.387v15.89a.5.5 0 0 1-.817.387zm14.525-4l3.536 3.536l-1.415 1.414L19 13.414l-3.536 3.536l-1.414-1.414L17.586 12L14.05 8.465l1.414-1.415L19 10.586l3.535-3.536l1.415 1.415z"></svg:path>`,
})
export class RiVolumeMuteLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riVolumeOffVibrateLineIcon],svg[ri-volume-off-vibrate-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19.39 3.161l1.413 1.414l-2.475 2.475l2.475 2.475L18.328 12l2.475 2.476l-2.475 2.475l2.475 2.475l-1.414 1.414l-3.889-3.89l2.475-2.474L15.5 12l2.475-2.475L15.5 7.05zM13 19.945a.5.5 0 0 1-.817.387L6.89 15.999L3 16a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1l2.584-.002l-3.776-3.776l1.414-1.414L13 12.586zM7.584 9.998L4 10v4l3.603-.001L11 16.779v-3.365zm5.303-6.26a.5.5 0 0 1 .113.317v5.702l-2-2V7.22l-.296.241l-1.421-1.42l2.9-2.373a.5.5 0 0 1 .704.07"></svg:path>`,
})
export class RiVolumeOffVibrateLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riVolumeUpLineIcon],svg[ri-volume-up-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.603 10L10 7.22v9.56L6.603 14H3v-4zM2 16h3.889l5.294 4.332a.5.5 0 0 0 .817-.387V4.055a.5.5 0 0 0-.817-.387L5.89 8H2a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1m21-4c0 3.292-1.446 6.246-3.738 8.262l-1.418-1.418A8.98 8.98 0 0 0 21 12a8.98 8.98 0 0 0-3.155-6.844l1.417-1.418A10.97 10.97 0 0 1 23 12m-5 0a5.99 5.99 0 0 0-2.287-4.713l-1.429 1.429A4 4 0 0 1 16 12c0 1.36-.679 2.561-1.716 3.284l1.43 1.43A5.99 5.99 0 0 0 18 12"></svg:path>`,
})
export class RiVolumeUpLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riVolumeVibrateLineIcon],svg[ri-volume-vibrate-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19.39 3.161l1.413 1.414l-2.475 2.475l2.475 2.475L18.328 12l2.475 2.476l-2.475 2.475l2.475 2.475l-1.414 1.414l-3.889-3.89l2.475-2.474L15.5 12l2.475-2.475L15.5 7.05zm-6.503.577a.5.5 0 0 1 .113.317v15.89a.5.5 0 0 1-.817.387L6.89 15.999L3 16a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h3.889l5.294-4.332a.5.5 0 0 1 .704.07M11 7.22L7.603 9.999H4V14l3.603-.001L11 16.779z"></svg:path>`,
})
export class RiVolumeVibrateLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riVuejsLineIcon],svg[ri-vuejs-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.317 3L12 18l8.684-15H23L12 22L1 3zm4.342 0L12 10.5L16.343 3h2.316L12 14.5L5.343 3z"></svg:path>`,
})
export class RiVuejsLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riWalkLineIcon],svg[ri-walk-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m7.617 8.712l3.205-2.328A2 2 0 0 1 12.065 6a2.62 2.62 0 0 1 2.427 1.82q.279.875.51 1.181A5 5 0 0 0 19 11v2a6.99 6.99 0 0 1-5.401-2.547l-.698 3.956l2.061 1.729l2.223 6.108l-1.88.684l-2.039-5.604l-3.39-2.845a2 2 0 0 1-.714-1.904l.509-2.885l-.677.492l-2.127 2.928l-1.618-1.176L7.6 8.7zM13.5 5.5a2 2 0 1 1 0-4a2 2 0 0 1 0 4m-2.97 13.181l-3.214 3.83l-1.532-1.285l2.975-3.546l.746-2.18l1.791 1.5z"></svg:path>`,
})
export class RiWalkLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riWallet2LineIcon],svg[ri-wallet-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.005 7V5h-16v14h16v-2h-8a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1zm-17-4h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m10 6v6h7V9zm2 2h3v2h-3z"></svg:path>`,
})
export class RiWallet2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riWallet3LineIcon],svg[ri-wallet-3-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.005 7h1v10h-1v3a1 1 0 0 1-1 1h-18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1zm-2 10h-6a5 5 0 0 1 0-10h6V5h-16v14h16zm1-2V9h-7a3 3 0 1 0 0 6zm-7-4h3v2h-3z"></svg:path>`,
})
export class RiWallet3LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riWalletLineIcon],svg[ri-wallet-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.005 7h3a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h15zm-14 2v10h16V9zm0-4v2h12V5zm11 8h3v2h-3z"></svg:path>`,
})
export class RiWalletLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riWaterFlashLineIcon],svg[ri-water-flash-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12.005 3.103l-4.95 4.95a7 7 0 1 0 9.9 0zm0-2.828l6.364 6.364A9 9 0 1 1 5.64 19.367a9 9 0 0 1 0-12.728zm1 10.728h2.5l-4.5 6.5v-4.5h-2.5l4.5-6.5z"></svg:path>`,
})
export class RiWaterFlashLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riWaterPercentLineIcon],svg[ri-water-percent-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.05 8.047L12 3.097l4.95 4.95a7 7 0 1 1-9.9 0m11.314-1.414L12 .269L5.636 6.633a9 9 0 1 0 12.728 0m-2.121 3.538l-1.414-1.414l-7.072 7.071l1.415 1.415zM8.11 11.232a1.5 1.5 0 1 0 2.121-2.121a1.5 1.5 0 0 0-2.121 2.121m7.778 5.657a1.5 1.5 0 1 1-2.121-2.121a1.5 1.5 0 0 1 2.121 2.12"></svg:path>`,
})
export class RiWaterPercentLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riWebcamLineIcon],svg[ri-webcam-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 21v-1.07A7 7 0 0 1 5 13V8a7 7 0 0 1 14 0v5a7 7 0 0 1-6 6.93V21h4v2H7v-2zm1-18a5 5 0 0 0-5 5v5a5 5 0 0 0 10 0V8a5 5 0 0 0-5-5m0 6a1 1 0 1 0 0-2a1 1 0 0 0 0 2m0 2a3 3 0 1 1 0-6a3 3 0 0 1 0 6"></svg:path>`,
})
export class RiWebcamLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riWebhookLineIcon],svg[ri-webhook-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.869 14.14c-.213.351-.319.638-.149 1.085c.47 1.236-.193 2.439-1.439 2.766c-1.175.308-2.32-.465-2.554-1.723c-.207-1.114.658-2.206 1.886-2.38c.067-.01.134-.014.22-.02q.07-.003.16-.01l1.869-3.132c-1.175-1.169-1.874-2.534-1.72-4.227c.11-1.196.58-2.23 1.44-3.077a4.89 4.89 0 0 1 6.098-.64c1.862 1.196 2.715 3.527 1.988 5.521l-1.707-.463c.229-1.109.06-2.105-.688-2.958c-.494-.563-1.128-.858-1.85-.967c-1.445-.218-2.864.71-3.285 2.129c-.478 1.61.246 2.925 2.222 3.916c-.829 1.394-1.651 2.792-2.491 4.18m4.915-5.867l1.806 3.186c3.041-.94 5.334.743 6.156 2.545c.994 2.177.315 4.755-1.637 6.098c-2.002 1.379-4.535 1.143-6.31-.628l1.393-1.165c1.752 1.136 3.285 1.082 4.423-.262a3.05 3.05 0 0 0-.05-3.979c-1.151-1.295-2.695-1.335-4.56-.091c-.775-1.373-1.562-2.736-2.311-4.119c-.253-.466-.532-.736-1.102-.835c-.95-.165-1.565-.981-1.602-1.897a2.08 2.08 0 0 1 1.33-2.041a2.075 2.075 0 0 1 2.35.64c.454.574.598 1.22.36 1.927a7 7 0 0 1-.159.407zm-2.232 8.622h3.66q.077.102.146.2c.097.138.19.268.297.384a2.07 2.07 0 0 0 2.913.1a2.074 2.074 0 0 0 .086-2.969c-.794-.814-2.151-.892-2.889-.03c-.447.524-.906.586-1.5.577c-1.524-.024-3.047-.008-4.57-.008c.1 2.142-.71 3.476-2.317 3.793c-1.572.31-3.02-.492-3.53-1.956c-.58-1.663.137-2.994 2.206-4.05l-.469-1.7c-2.255.492-3.948 2.68-3.773 5.142c.155 2.173 1.908 4.104 4.052 4.45a4.88 4.88 0 0 0 3.273-.584c1.306-.74 2.064-1.906 2.415-3.349"></svg:path>`,
})
export class RiWebhookLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riWechat2LineIcon],svg[ri-wechat-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.667 11.511a1.276 1.276 0 0 1-1.285-1.285c0-.718.568-1.286 1.285-1.286c.718 0 1.285.568 1.285 1.286c0 .717-.567 1.285-1.285 1.285m6.667 0a1.276 1.276 0 0 1-1.285-1.285c0-.718.568-1.286 1.285-1.286s1.285.568 1.285 1.286c0 .717-.568 1.285-1.285 1.285m-8.511 7.704l.715-.436a4 4 0 0 1 2.706-.536q.317.05.52.076q.61.081 1.237.081c4.42 0 7.9-3.022 7.9-6.6S16.42 5.2 12 5.2c-4.421 0-7.9 3.022-7.9 6.6c0 1.365.5 2.673 1.431 3.78q.073.088.215.236a4 4 0 0 1 1.1 3.102zm-.63 2.727a1 1 0 0 1-1.527-.93l.189-2.26a2 2 0 0 0-.55-1.551a7 7 0 0 1-.303-.333C2.806 15.447 2.1 13.695 2.1 11.8c0-4.75 4.432-8.6 9.9-8.6c5.467 0 9.9 3.85 9.9 8.6s-4.433 8.6-9.9 8.6q-.765-.001-1.5-.098q-.229-.03-.568-.084a2 2 0 0 0-1.353.268z"></svg:path>`,
})
export class RiWechat2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riWechatChannelsLineIcon],svg[ri-wechat-channels-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.66 18.964a2 2 0 0 1-.155-.21c-.238-.353-.515-.905-.805-1.627c-.575-1.432-1.138-3.372-1.536-5.326c-.4-1.965-.616-3.869-.537-5.244c.04-.7.153-1.161.283-1.416A.7.7 0 0 1 4.002 5c.292 0 .74.162 1.356.651c.6.476 1.25 1.174 1.927 2.032c1.236 1.565 2.464 3.532 3.552 5.326c-.18.315-.37.66-.565 1.014l-.278.502A38 38 0 0 1 8.67 16.77c-.465.715-.918 1.312-1.344 1.72c-.3.289-.52.42-.665.474M12 11.076c-.962-1.562-2.042-3.236-3.145-4.632c-.721-.914-1.481-1.747-2.254-2.36C5.846 3.486 4.959 3 4.001 3c-.923 0-1.537.57-1.874 1.234c-.315.62-.45 1.408-.496 2.209c-.094 1.625.16 3.721.573 5.756c.416 2.046 1.01 4.106 1.64 5.674c.313.778.65 1.476 1 1.997c.175.26.378.514.614.713c.225.192.582.417 1.042.417c.895 0 1.648-.526 2.211-1.067c.589-.565 1.14-1.31 1.636-2.073c.5-.77.973-1.603 1.396-2.364l.249-.45l.024.045l.21.393c.41.76.867 1.595 1.358 2.367c.486.766 1.035 1.518 1.639 2.088C15.812 20.495 16.58 21 17.5 21c.46 0 .817-.226 1.043-.417c.235-.2.439-.453.613-.712c.35-.522.688-1.22 1-1.998c.63-1.568 1.224-3.628 1.64-5.674c.414-2.034.668-4.131.574-5.756c-.046-.8-.18-1.589-.496-2.209C21.536 3.57 20.924 3 20 3c-.958 0-1.846.485-2.6 1.084c-.773.613-1.533 1.446-2.255 2.36c-1.102 1.396-2.183 3.07-3.145 4.632m1.162 1.935c1.089-1.795 2.317-3.763 3.553-5.328c.677-.857 1.327-1.556 1.927-2.032c.617-.49 1.064-.65 1.356-.651l.02.022a.7.7 0 0 1 .073.119c.13.255.242.717.282 1.416c.08 1.375-.137 3.279-.537 5.244c-.397 1.954-.96 3.894-1.536 5.326c-.29.722-.566 1.274-.804 1.628q-.099.144-.164.218c-.173-.052-.417-.186-.736-.488c-.426-.403-.871-.994-1.324-1.706a36 36 0 0 1-1.283-2.242q-.102-.188-.2-.374c-.216-.401-.426-.795-.627-1.152"></svg:path>`,
})
export class RiWechatChannelsLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riWechatLineIcon],svg[ri-wechat-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.001 14.676v-.062c0-2.509 2.017-4.618 4.753-5.233C14.39 7.079 11.96 5.2 8.9 5.2C5.58 5.2 3 7.413 3 9.98c0 .969.36 1.9 1.04 2.698q.048.058.152.165a3.57 3.57 0 0 1 1.002 2.238a3.6 3.6 0 0 1 2.363-.442q.25.039.405.06A7.3 7.3 0 0 0 10 14.676m.457 1.951a9.2 9.2 0 0 1-2.753.055a19 19 0 0 1-.454-.067a1.6 1.6 0 0 0-1.08.212l-1.904 1.147a.8.8 0 0 1-.49.118a.79.79 0 0 1-.729-.851l.15-1.781a1.57 1.57 0 0 0-.439-1.223a6 6 0 0 1-.241-.262C1.563 12.855 1 11.473 1 9.979C1 6.235 4.537 3.2 8.9 3.2c4.06 0 7.403 2.627 7.85 6.008c3.371.153 6.05 2.515 6.05 5.406c0 1.193-.456 2.296-1.229 3.19q-.076.09-.195.21a1.24 1.24 0 0 0-.356.976l.121 1.423a.635.635 0 0 1-.59.68a.66.66 0 0 1-.396-.094l-1.544-.917a1.32 1.32 0 0 0-.874-.169q-.22.034-.368.053q-.475.061-.969.062c-2.694 0-4.998-1.408-5.943-3.401m6.977 1.31a3.3 3.3 0 0 1 1.675.174a3.25 3.25 0 0 1 .842-1.502q.076-.077.106-.112c.489-.565.743-1.213.743-1.883c0-1.805-1.903-3.414-4.4-3.414S12 12.81 12 14.614s1.903 3.414 4.4 3.414a6 6 0 0 0 .714-.046q.121-.015.32-.046"></svg:path>`,
})
export class RiWechatLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riWechatPayLineIcon],svg[ri-wechat-pay-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19.146 8.993l-9.799 5.608l-.07.045a.65.65 0 0 1-.3.07a.66.66 0 0 1-.58-.345l-.046-.092l-1.831-3.95c-.023-.046-.023-.092-.023-.138c0-.184.139-.321.324-.321q.105 0 .209.069l2.155 1.515c.162.092.347.161.556.161a.9.9 0 0 0 .348-.069l8.274-3.649C16.935 6.273 14.635 5.2 12.001 5.2c-4.421 0-7.9 3.022-7.9 6.6c0 1.365.5 2.673 1.431 3.78q.073.088.215.236a4 4 0 0 1 1.1 3.102l-.024.297l.715-.436a4 4 0 0 1 2.706-.536q.317.05.52.076q.61.081 1.237.081c4.42 0 7.9-3.022 7.9-6.6c0-.996-.27-1.95-.755-2.807M6.193 21.943a1 1 0 0 1-1.527-.932l.189-2.259a2 2 0 0 0-.55-1.551a7 7 0 0 1-.303-.333C2.806 15.447 2.1 13.695 2.1 11.8c0-4.75 4.432-8.6 9.9-8.6c5.467 0 9.9 3.85 9.9 8.6s-4.433 8.6-9.9 8.6q-.765-.001-1.5-.098q-.229-.03-.568-.084a2 2 0 0 0-1.353.268z"></svg:path>`,
})
export class RiWechatPayLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riWeiboLineIcon],svg[ri-weibo-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.195 14.197c0 3.362-4.53 6.424-9.926 6.424c-4.95 0-9.268-2.432-9.268-6.087c0-1.947 1.18-4.087 3.24-6.088C7.072 5.7 10.47 4.413 12.098 5.998c.498.482.723 1.122.719 1.858c1.975-.576 3.65-.404 4.483.752c.449.623.532 1.38.326 2.207c1.511.61 2.568 1.77 2.568 3.382m-4.44-2.07c-.386-.41-.4-.92-.198-1.41c.208-.508.213-.812.12-.94c-.264-.368-1.533-.363-3.194.311a2 2 0 0 1-.509.14c-.344.046-.671.001-.983-.265c-.419-.359-.473-.855-.322-1.316c.214-.67.18-1.076.037-1.215c-.186-.18-.777-.191-1.659.143C7.978 7.98 6.75 8.799 5.633 9.88c-1.707 1.659-2.632 3.337-2.632 4.653c0 2.242 3.276 4.087 7.268 4.087c4.42 0 7.926-2.37 7.926-4.424c0-.738-.637-1.338-1.673-1.652c-.394-.113-.536-.171-.767-.417m7.054-1.617a1 1 0 1 1-1.936-.502a4 4 0 0 0-4.693-4.924a1 1 0 0 1-.407-1.958a6 6 0 0 1 7.036 7.384"></svg:path>`,
})
export class RiWeiboLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riWeightLineIcon],svg[ri-weight-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 6a2 2 0 1 1-4 0a2 2 0 0 1 4 0m1.465 2a4 4 0 1 0-6.93 0H5.066a1 1 0 0 0-.986.832l-1.88 11A1 1 0 0 0 3.186 21h17.629a1 1 0 0 0 .986-1.169l-1.88-11A1 1 0 0 0 18.934 8zM12 10h6.091l1.538 9H4.372l1.539-9z"></svg:path>`,
})
export class RiWeightLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riWhatsappLineIcon],svg[ri-whatsapp-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m7.254 18.494l.724.423A7.95 7.95 0 0 0 12.001 20a8 8 0 1 0-8-8a7.95 7.95 0 0 0 1.084 4.024l.422.724l-.653 2.401zM2.005 22l1.352-4.968A9.95 9.95 0 0 1 2.001 12c0-5.523 4.477-10 10-10s10 4.477 10 10s-4.477 10-10 10a9.95 9.95 0 0 1-5.03-1.355zM8.392 7.308q.202-.014.403-.004q.081.006.162.016c.159.018.334.115.393.249q.447 1.015.868 2.04c.062.152.025.347-.093.537c-.06.097-.154.233-.263.372c-.113.145-.356.411-.356.411s-.099.118-.061.265c.014.056.06.137.102.205l.059.095c.256.427.6.86 1.02 1.268c.12.116.237.235.363.346c.468.413.998.75 1.57 1l.005.002c.085.037.128.057.252.11q.093.039.191.066q.036.01.073.011a.35.35 0 0 0 .295-.142c.723-.876.79-.933.795-.933v.002a.48.48 0 0 1 .378-.127q.092.004.177.04c.531.243 1.4.622 1.4.622l.582.261c.098.047.187.158.19.265c.004.067.01.175-.013.373c-.032.259-.11.57-.188.733a1.2 1.2 0 0 1-.21.302a2.4 2.4 0 0 1-.33.288q-.124.092-.125.09a5 5 0 0 1-.383.22a2 2 0 0 1-.833.23c-.185.01-.37.024-.556.014c-.008 0-.568-.087-.568-.087a9.45 9.45 0 0 1-3.84-2.046c-.226-.199-.436-.413-.65-.626c-.888-.885-1.561-1.84-1.97-2.742a3.5 3.5 0 0 1-.33-1.413a2.73 2.73 0 0 1 .565-1.68c.073-.094.142-.192.261-.305c.126-.12.207-.184.294-.228a1 1 0 0 1 .371-.1"></svg:path>`,
})
export class RiWhatsappLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riWheelchairLineIcon],svg[ri-wheelchair-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.998 10.341v2.194A4 4 0 1 0 13.463 18h2.193a6 6 0 1 1-7.658-7.66m4 6.659a3 3 0 0 1-3-3v-4c0-1.044.534-1.964 1.343-2.501a3 3 0 1 1 3.314.003A2.99 2.99 0 0 1 14.998 10v4.999l1.434.001a2 2 0 0 1 1.626.836l.089.135l2.709 4.514l-1.715 1.03L16.43 17l-1.433-.001zm0-8a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h.999l.001-5a1 1 0 0 0-1-1m0-5a1 1 0 1 0 0 2a1 1 0 0 0 0-2"></svg:path>`,
})
export class RiWheelchairLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riWifiLineIcon],svg[ri-wifi-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M.69 6.997A17.93 17.93 0 0 1 12 3c4.285 0 8.22 1.497 11.31 3.997l-1.256 1.556A15.93 15.93 0 0 0 12 5C8.19 5 4.694 6.33 1.946 8.553zm3.141 3.89A12.95 12.95 0 0 1 12 8a12.95 12.95 0 0 1 8.169 2.886l-1.257 1.556A10.95 10.95 0 0 0 12 10c-2.618 0-5.023.915-6.912 2.442zm3.142 3.89A7.97 7.97 0 0 1 12 13c1.904 0 3.653.665 5.027 1.776l-1.257 1.556A5.98 5.98 0 0 0 12 15c-1.428 0-2.74.499-3.77 1.332zm3.142 3.89A3 3 0 0 1 12 18c.714 0 1.37.25 1.885.666L12 21z"></svg:path>`,
})
export class RiWifiLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riWifiOffLineIcon],svg[ri-wifi-off-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 18c.714 0 1.37.25 1.886.666L12 21l-1.886-2.334A3 3 0 0 1 12 18M2.808 1.393l17.677 17.678l-1.414 1.414l-5.18-5.18a6 6 0 0 0-1.89-.305c-1.43 0-2.74.499-3.771 1.332l-1.256-1.556a7.96 7.96 0 0 1 4.622-1.766L9 10.414a11 11 0 0 0-3.912 2.029L3.83 10.887A13 13 0 0 1 7.416 8.83L5.132 6.545a16 16 0 0 0-3.185 2.007L.689 6.997a18 18 0 0 1 2.952-1.942L1.393 2.808zM14.5 10.285l-2.283-2.283L12 8c3.095 0 5.937 1.081 8.17 2.887l-1.258 1.556a10.96 10.96 0 0 0-4.412-2.158M12 3c4.285 0 8.22 1.497 11.31 3.997l-1.257 1.555A15.93 15.93 0 0 0 12 5q-1.319 0-2.58.207L7.726 3.51A18 18 0 0 1 12 3"></svg:path>`,
})
export class RiWifiOffLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riWindow2LineIcon],svg[ri-window-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm-1 8H4v8h16zm0-6H4v4h16zm-1 1v2h-4V6z"></svg:path>`,
})
export class RiWindow2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riWindowLineIcon],svg[ri-window-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm-1 8H4v8h16zm0-6H4v4h16zm-9 1v2H9V6zM7 6v2H5V6z"></svg:path>`,
})
export class RiWindowLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riWindowsLineIcon],svg[ri-windows-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.001 2.5v19l-18-2v-15zm-2 10.499l-7 .001v5.487l7 .779zm-14 4.71l5 .556V13l-5-.001zm14-6.71V4.735l-7 .777V11zm-9-5.265l-5 .556V11l5 .001z"></svg:path>`,
})
export class RiWindowsLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riWindyLineIcon],svg[ri-windy-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.5 17H4v-2h6.5a3.5 3.5 0 1 1-3.278 4.73l1.873-.703A1.5 1.5 0 1 0 10.5 17M5 11h13.5a3.5 3.5 0 1 1-3.278 4.73l1.873-.703A1.5 1.5 0 1 0 18.5 13H5a3 3 0 1 1 0-6h8.5a1.5 1.5 0 1 0-1.405-2.027l-1.873-.702A3.501 3.501 0 0 1 17 5.5A3.5 3.5 0 0 1 13.5 9H5a1 1 0 0 0 0 2"></svg:path>`,
})
export class RiWindyLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riWirelessChargingLineIcon],svg[ri-wireless-charging-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m3.929 4.929l1.414 1.414A7.98 7.98 0 0 0 3 12c0 2.21.895 4.21 2.343 5.657L3.93 19.07A9.97 9.97 0 0 1 1 12.001a9.97 9.97 0 0 1 2.929-7.072m16.142 0A9.97 9.97 0 0 1 23 12a9.97 9.97 0 0 1-2.929 7.071l-1.414-1.414A7.98 7.98 0 0 0 21 12a7.98 7.98 0 0 0-2.342-5.656zM13 5v6h3l-5 8v-6H8zM6.757 7.757l1.415 1.415A4 4 0 0 0 7 12c0 1.105.448 2.105 1.172 2.829l-1.415 1.414A5.98 5.98 0 0 1 5 12c0-1.657.672-3.157 1.757-4.243m10.487.001A5.98 5.98 0 0 1 19 12a5.98 5.98 0 0 1-1.757 4.243l-1.415-1.414A4 4 0 0 0 17 12a4 4 0 0 0-1.17-2.827z"></svg:path>`,
})
export class RiWirelessChargingLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riWomenLineIcon],svg[ri-women-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 15.934A7.501 7.501 0 0 1 12 1a7.5 7.5 0 0 1 1 14.934V18h5v2h-5v4h-2v-4H6v-2h5zM12 14a5.5 5.5 0 1 0 0-11a5.5 5.5 0 0 0 0 11"></svg:path>`,
})
export class RiWomenLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riWordpressLineIcon],svg[ri-wordpress-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10m-7.394 7.566l-2.155-5.985l-2.181 6.232a8.03 8.03 0 0 0 4.336-.247m2.468-1.38A7.98 7.98 0 0 0 20 12a8 8 0 0 0-.545-2.908c-.25 1.454-.692 3.35-.976 4.315zm-.201-12.531A7.97 7.97 0 0 0 12 4a7.99 7.99 0 0 0-6.245 3h1.39v2h-.75l2.755 7.958l2.227-6.362L10.802 9H8.645V7h5v2h-.717l2.621 7.282l1.012-3.44c.523-1.832.092-2.631-.339-3.429c-.289-.534-.577-1.068-.577-1.913a2 2 0 0 1 1.228-1.845M4.425 9.42A8 8 0 0 0 4 12a8 8 0 0 0 3.64 6.708z"></svg:path>`,
})
export class RiWordpressLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riXboxLineIcon],svg[ri-xbox-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.798 15.485c1.124-2.52 3.2-5.44 4.487-6.962c-1.248-1.246-2.162-1.931-2.818-2.3A7.98 7.98 0 0 0 4.001 12c0 1.25.286 2.432.797 3.485m4.051-10.84c1.6.406 3.152 1.314 3.152 1.314v-.005s1.552-.904 3.151-1.31A8 8 0 0 0 12.001 4c-1.12 0-2.185.23-3.152.645m8.686 1.578c-.655.37-1.568 1.055-2.816 2.3c1.287 1.523 3.362 4.441 4.486 6.961A8 8 0 0 0 20 12c0-2.27-.946-4.32-2.466-5.777m.408 11.134c-1.403-2.237-4.09-4.945-5.942-6.344c-1.85 1.4-4.539 4.108-5.941 6.345A7.98 7.98 0 0 0 12 20a7.98 7.98 0 0 0 5.942-2.643M12.001 22c-5.523 0-10-4.477-10-10s4.477-10 10-10s10 4.477 10 10s-4.477 10-10 10"></svg:path>`,
})
export class RiXboxLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riXingLineIcon],svg[ri-xing-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.444 3.5L13.81 14.99L17.857 22h-2.31l-4.045-7.009H11.5L18.134 3.5zM8.31 7l2.422 4.196l-.002.001L7.67 16.5H5.36l3.061-5.305L6.002 7z"></svg:path>`,
})
export class RiXingLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riXrpLineIcon],svg[ri-xrp-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.778 4h-2.837l-4.49 4.371a3.52 3.52 0 0 1-2.451.99a3.52 3.52 0 0 1-2.452-.99L5.062 4h-2.84L8.13 9.754c2.14 2.083 5.607 2.083 7.745 0zM2.223 20H5.05l4.508-4.385a3.5 3.5 0 0 1 2.443-.985c.914 0 1.792.354 2.443.985L18.952 20h2.826l-5.92-5.761c-2.132-2.073-5.585-2.073-7.715 0z"></svg:path>`,
})
export class RiXrpLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riXtzLineIcon],svg[ri-xtz-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 6V2H7v4H4.5v2H7v5a4 4 0 0 0 6.667 2.981l-1.334-1.49A2 2 0 0 1 9 13V8h6.625L11.5 11.975V13.5h1c3.067 0 5 2.18 5 4c0 1.883-1.627 3.5-3.75 3.5c-1.823 0-3.293-1.202-3.66-2.733l-1.945.466C8.74 21.21 11.051 23 13.75 23c3.124 0 5.75-2.412 5.75-5.5c0-2.565-2.034-4.932-4.914-5.722L19 7.525V6z"></svg:path>`,
})
export class RiXtzLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riYoutubeLineIcon],svg[ri-youtube-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.607 6.995c-.076-.298-.292-.523-.539-.592C18.63 6.28 16.501 6 12.001 6s-6.628.28-7.069.403c-.244.068-.46.293-.537.592c-.109.424-.394 2.2-.394 5.005s.285 4.58.394 5.006c.076.297.292.522.538.59C5.373 17.72 7.5 18 12 18s6.629-.28 7.069-.403c.244-.068.46-.293.537-.592c.11-.424.394-2.205.394-5.005s-.285-4.58-.394-5.005m1.937-.497C22 8.28 22 12 22 12s0 3.72-.457 5.502c-.254.985-.997 1.76-1.938 2.022C17.897 20 12 20 12 20s-5.893 0-7.605-.476c-.945-.266-1.687-1.04-1.938-2.022C2 15.72 2 12 2 12s0-3.72.457-5.502c.254-.985.997-1.76 1.938-2.022C6.108 4 12.001 4 12.001 4s5.896 0 7.605.476c.944.266 1.687 1.04 1.938 2.022M10.001 15.5v-7l6 3.5z"></svg:path>`,
})
export class RiYoutubeLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riYuqueLineIcon],svg[ri-yuque-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.505 3.043a.92.92 0 0 1 .795-.46c1.547 0 3.09.05 4.637.154c2.51.171 3.7 1.59 4.18 2.43c.596.092 1.388.088 1.571.807c.14.552-.217.833-.554 1.148c-.483.45-1.133 1.176-.954 1.888c.055.222.159.437.316.765l.002.003c.318.667.684 1.51.742 3.115c.156 4.34-3.596 6.897-7.252 7.08c-2.41 1.815-6.345 3.025-12.557 1.957a1.33 1.33 0 0 1-.945-.709a1.25 1.25 0 0 1-.12-.735c.039-.275.165-.511.33-.7c3.228-3.675 6.635-7.246 9.654-11.098c.526-.67.96-1.28 1.15-1.648c.309-.919-.009-1.444-.625-2.463c-.282-.467-.69-.978-.37-1.534m1.989 5.843c.874.005 1.85.249 2.885.875c2.124 1.288 2.334 3.996 1.625 6.157a7.6 7.6 0 0 1-.836 1.727c1.936-.797 3.319-2.484 3.24-4.686c-.047-1.28-.317-1.871-.564-2.389l-.03-.06c-.132-.277-.31-.647-.412-1.054c-.271-1.08.175-2.04.614-2.678a.92.92 0 0 1-.387-.493v-.001a2.6 2.6 0 0 0-.58-.817c-.407-.393-1.094-.823-2.236-.901a65 65 0 0 0-2.89-.13c.452.878.758 1.94.289 3.267c-.151.426-.46.82-.718 1.183m-.832 1.945c-.719.202-1.214.63-1.378.815c-2.717 3.057-5.881 6.689-7.576 8.627c5.45.747 8.601-.49 10.378-1.922c1.295-1.043 1.925-2.24 2.176-3.004c.434-1.323.537-3.187-.834-4.018c-1.153-.699-2.088-.69-2.766-.498"></svg:path>`,
})
export class RiYuqueLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riZcoolLineIcon],svg[ri-zcool-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.262 8.26C5.838 8.803 4 11.208 4 13.936a5.903 5.903 0 0 0 11.703 1.097a2 2 0 0 1 1.129-1.447a8 8 0 0 0 1.284-.744c-.863-.603-1.186-1.862-.47-2.834a9.8 9.8 0 0 0 1.391-2.651c-1.084.51-2.3.936-3.668 1.265c-1.261.303-2.392-.638-2.466-1.814c-1.18.572-2.67 1.01-4.642 1.452m10.995 2.934c1.166 0 1.916-.424 2.744-.587c-.325 1.448-1.501 3.49-4.331 4.795A7.903 7.903 0 0 1 2 13.936C2 10.29 4.467 7.06 7.824 6.309C11.746 5.43 13.529 4.742 14.902 2q1.033 2 0 4.677q4.224-1.005 6.774-3.548c0 4.802-1.822 7.186-2.419 8.065m-5.84 3.932c.584.146.584.832.584 1.02v1.021c0 .562-.342.773-.844.773H7.743c-.475-.086-.734-.345-.734-.777v-.95c0-.475.216-.82.431-1.08l3.153-3.369H7.527c-.302 0-.518-.216-.518-.604c-.044-.735.086-1.9.647-2.16c.087 0 .087.13.087.173c-.087.173 0 .302.216.302h3.887c.863 0 1.381 0 1.684-.086c.13-.043.216 0 .173.13c-.087.302-.044.647-.044.95c0 .993 0 1.382-.777 2.159l-2.678 2.937l2.85-.002c.316 0 .364-.146.364-.437"></svg:path>`,
})
export class RiZcoolLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riZhihuLineIcon],svg[ri-zhihu-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12.345 17.963l-1.688 1.074l-2.132-3.35c-.44 1.402-1.171 2.665-2.138 3.825c-.402.483-.82.918-1.301 1.376c-.155.146-.775.716-.878.82l-1.414-1.415c.139-.139.787-.735.914-.856c.43-.408.796-.79 1.143-1.205C6.117 16.712 6.88 15.02 6.988 13H3v-2h4V7h-.868c-.689 1.266-1.558 2.222-2.618 2.858L2.486 8.143c1.396-.838 2.426-2.603 3.039-5.36l1.952.434q-.21.95-.489 1.783h4.513v2H9v4h2.5v2H9.186zm3.838-.07L17.3 17h1.702V7h-4v10h.736zM13.001 5h8v14h-3l-2.5 2l-1-2H13z"></svg:path>`,
})
export class RiZhihuLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riZoomInLineIcon],svg[ri-zoom-in-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m18.031 16.617l4.283 4.282l-1.415 1.415l-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9s9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617m-2.006-.742A6.98 6.98 0 0 0 18 11c0-3.867-3.133-7-7-7s-7 3.133-7 7s3.133 7 7 7a6.98 6.98 0 0 0 4.875-1.975zM10 10V7h2v3h3v2h-3v3h-2v-3H7v-2z"></svg:path>`,
})
export class RiZoomInLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riZoomOutLineIcon],svg[ri-zoom-out-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m18.031 16.617l4.283 4.282l-1.415 1.415l-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9s9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617m-2.006-.742A6.98 6.98 0 0 0 18 11c0-3.867-3.133-7-7-7s-7 3.133-7 7s3.133 7 7 7a6.98 6.98 0 0 0 4.875-1.975zM7 10h8v2H7z"></svg:path>`,
})
export class RiZoomOutLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riZzzLineIcon],svg[ri-zzz-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 11v2l-5.327 6H11v2H3v-2l5.326-6H3v-2zm10-8v2l-5.327 6H21v2h-8v-2l5.326-6H13V3z"></svg:path>`,
})
export class RiZzzLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riAccessibilityLineIcon],svg[ri-accessibility-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 12a8 8 0 1 1 16 0a8 8 0 0 1-16 0m8-10C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10S17.523 2 12 2m0 6.5a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m0 1c-1.557 0-3.178-.357-4.629-.929L6.63 10.43c1.076.429 2.228.718 3.37.901c0 .87.086 1.764-.316 2.567l-1.578 3.156l1.79.894l1.552-3.105a.618.618 0 0 1 1.106 0l1.552 3.105l1.79-.894l-1.578-3.156C13.915 13.094 14 12.2 14 11.33a16.5 16.5 0 0 0 3.359-.897c.025-.01-.73-1.862-.733-1.86c-1.453.566-3.067.927-4.626.927"></svg:path>`,
})
export class RiAccessibilityLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
