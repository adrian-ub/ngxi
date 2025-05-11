import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uilSnapchatAltIcon],svg[uil-snapchat-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.951 15.614a4.72 4.72 0 0 1-2.981-2.173a1 1 0 1 0-1.657 1.121a7.7 7.7 0 0 0 2.403 2.335q-.202.037-.442.075a1.37 1.37 0 0 0-1.076 1.207a6 6 0 0 0-2.014-.004a4.64 4.64 0 0 0-1.958.956a3.5 3.5 0 0 1-2.104.87h-.26a3.5 3.5 0 0 1-2.106-.872a4.6 4.6 0 0 0-1.929-.95a6.4 6.4 0 0 0-2.04.005a1.37 1.37 0 0 0-1.062-1.21a13 13 0 0 1-.435-.075A6.9 6.9 0 0 0 6.085 15.4a7 7 0 0 0 .635-.868a1 1 0 0 0-1.696-1.06a5 5 0 0 1-.448.616a4.25 4.25 0 0 1-2.553 1.528a1.224 1.224 0 0 0-1.032 1.236a1.3 1.3 0 0 0 .115.533c.316.716 1.156 1.168 2.785 1.474l.03.13c.03.118.058.239.093.348a1.29 1.29 0 0 0 1.278.945a2.6 2.6 0 0 0 .603-.087a4.7 4.7 0 0 1 1.588-.046a3 3 0 0 1 1.123.618a5.4 5.4 0 0 0 3.255 1.235h.261a5.45 5.45 0 0 0 3.274-1.248a2.9 2.9 0 0 1 1.131-.61a3.5 3.5 0 0 1 .624-.052a4.3 4.3 0 0 1 .955.106a4 4 0 0 0 .616.064a1.256 1.256 0 0 0 1.245-.923q.055-.183.094-.355l.032-.124c1.624-.305 2.467-.754 2.767-1.44a1.2 1.2 0 0 0 .127-.48a1.244 1.244 0 0 0-1.036-1.326m-18.15-4.466a1.005 1.005 0 0 0 1.057-.484a3.1 3.1 0 0 0 1.275.338a1.8 1.8 0 0 0 1.265-.499a1 1 0 0 0 .317-.79l-.036-.602a9.9 9.9 0 0 1 .156-3.561a4.26 4.26 0 0 1 3.966-2.544l.388-.004a4.26 4.26 0 0 1 3.96 2.547a9.9 9.9 0 0 1 .156 3.564l-.01.163l-.027.444a1.03 1.03 0 0 0 .312.778a1.8 1.8 0 0 0 1.254.503a3.3 3.3 0 0 0 1.241-.365a1 1 0 0 0 .916.598h.018a1 1 0 0 0 .982-1.017a1.64 1.64 0 0 0-1.185-1.451a1.9 1.9 0 0 0-1.477.01a9.5 9.5 0 0 0-.354-4.042a6.24 6.24 0 0 0-5.796-3.732l-.393.004a6.22 6.22 0 0 0-5.777 3.73a9.6 9.6 0 0 0-.352 4.094l-.111-.052a1.91 1.91 0 0 0-2.537 1.199a1 1 0 0 0 .793 1.171"></svg:path>`,
})
export class UilSnapchatAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uilSnapchatGhostIcon],svg[uil-snapchat-ghost-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.798 16.987c-2.867-.472-4.151-3.401-4.204-3.526l-.006-.011a1.07 1.07 0 0 1-.102-.898c.192-.454.83-.656 1.251-.79c.106-.033.205-.065.283-.096c.763-.3.918-.613.914-.822a.66.66 0 0 0-.5-.543l-.007-.002a1 1 0 0 0-.356-.069a.8.8 0 0 0-.313.063a2.5 2.5 0 0 1-.955.266a.82.82 0 0 1-.53-.178l.032-.53l.004-.065a10.1 10.1 0 0 0-.24-4.035a5.25 5.25 0 0 0-4.874-3.14l-.402.005a5.24 5.24 0 0 0-4.864 3.137a10.1 10.1 0 0 0-.242 4.031q.02.299.036.598a.85.85 0 0 1-.584.178a2.45 2.45 0 0 1-1.014-.268a.6.6 0 0 0-.245-.049a.83.83 0 0 0-.81.533c-.082.43.532.743.906.89c.08.032.178.063.283.096c.422.134 1.06.336 1.252.79a1.07 1.07 0 0 1-.102.898l-.006.011a7 7 0 0 1-1.069 1.663A5.22 5.22 0 0 1 2.2 16.987a.24.24 0 0 0-.2.25a.4.4 0 0 0 .03.13c.177.411 1.059.75 2.553.981c.14.022.198.25.28.622c.032.15.066.305.113.465a.293.293 0 0 0 .32.228a2.5 2.5 0 0 0 .424-.06a5.5 5.5 0 0 1 1.12-.127a5 5 0 0 1 .809.068a3.9 3.9 0 0 1 1.535.784a4.44 4.44 0 0 0 2.69 1.06q.05 0 .1-.004c.04.002.095.004.151.004a4.45 4.45 0 0 0 2.692-1.06a3.9 3.9 0 0 1 1.533-.784a5 5 0 0 1 .808-.068a5.6 5.6 0 0 1 1.12.119a2.4 2.4 0 0 0 .425.053h.024a.28.28 0 0 0 .295-.22a7 7 0 0 0 .114-.462c.081-.371.14-.598.28-.62c1.494-.23 2.377-.57 2.551-.978a.4.4 0 0 0 .032-.13a.24.24 0 0 0-.2-.25"></svg:path>`,
})
export class UilSnapchatGhostIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uilSnapchatSquareIcon],svg[uil-snapchat-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.973 6.68a6 6 0 0 0-.098-1.073a4.4 4.4 0 0 0-.406-1.246a4.3 4.3 0 0 0-.832-1.11a4.1 4.1 0 0 0-1.816-1.036a7.4 7.4 0 0 0-1.92-.205L16.898 2H7.099v.01a11 11 0 0 0-1.101.05a5.2 5.2 0 0 0-1.176.264A4.26 4.26 0 0 0 2.219 5.17a7.3 7.3 0 0 0-.205 1.905l-.006 9.838a9.5 9.5 0 0 0 .09 1.333a4.6 4.6 0 0 0 .41 1.345a4.3 4.3 0 0 0 1.201 1.454a3.9 3.9 0 0 0 1.203.651a6.5 6.5 0 0 0 1.976.29c.42.003.839.014 1.258.012c3.047-.013 6.094.022 9.14-.019a7 7 0 0 0 1.2-.127a4.06 4.06 0 0 0 2.007-.977a4.16 4.16 0 0 0 1.326-2.212a8 8 0 0 0 .173-1.75v-.117c0-.046-.017-9.984-.019-10.115m-2.676 9.25c-.128.3-.774.548-1.868.717c-.102.016-.146.182-.205.454q-.035.166-.083.337a.204.204 0 0 1-.216.162h-.018a2 2 0 0 1-.31-.04a4 4 0 0 0-.821-.086a3.6 3.6 0 0 0-.592.05a2.8 2.8 0 0 0-1.123.574a3.26 3.26 0 0 1-1.97.776l-.112-.003l-.073.003a3.25 3.25 0 0 1-1.97-.776a2.84 2.84 0 0 0-1.123-.574a3.6 3.6 0 0 0-.592-.05a4 4 0 0 0-.82.093a2 2 0 0 1-.311.044a.214.214 0 0 1-.234-.167q-.05-.175-.083-.34c-.06-.273-.103-.44-.205-.456c-1.094-.168-1.74-.417-1.869-.718a.3.3 0 0 1-.023-.095a.176.176 0 0 1 .147-.183a3.82 3.82 0 0 0 2.296-1.365A5.2 5.2 0 0 0 7.9 13.07l.004-.008a.8.8 0 0 0 .075-.658c-.14-.332-.607-.48-.916-.578a3 3 0 0 1-.207-.07c-.274-.108-.724-.337-.664-.652a.61.61 0 0 1 .593-.39a.4.4 0 0 1 .18.036a1.8 1.8 0 0 0 .742.196a.62.62 0 0 0 .428-.131q-.012-.219-.027-.438a7.4 7.4 0 0 1 .177-2.951a3.84 3.84 0 0 1 3.562-2.298l.295-.002a3.84 3.84 0 0 1 3.568 2.298a7.4 7.4 0 0 1 .176 2.955l-.003.047l-.023.389a.6.6 0 0 0 .388.13a1.9 1.9 0 0 0 .7-.195a.55.55 0 0 1 .228-.046a.7.7 0 0 1 .261.05l.004.002a.485.485 0 0 1 .367.398c.003.153-.11.381-.669.602c-.057.022-.13.046-.207.07c-.31.098-.776.246-.916.578a.78.78 0 0 0 .074.657l.004.009a4.52 4.52 0 0 0 3.079 2.582a.176.176 0 0 1 .146.183a.3.3 0 0 1-.023.096"></svg:path>`,
})
export class UilSnapchatSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uilSnowFlakeIcon],svg[uil-snow-flake-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 11h-1.59l1.3-1.29a1 1 0 0 0-1.42-1.42L16.59 11h-2.18l2.3-2.29a1 1 0 1 0-1.42-1.42L13 9.59V7.41l2.71-2.7a1 1 0 1 0-1.42-1.42L13 4.59V3a1 1 0 0 0-2 0v1.59l-1.29-1.3a1 1 0 0 0-1.42 1.42L11 7.41v2.18l-2.29-2.3a1 1 0 1 0-1.42 1.42L9.59 11H7.41l-2.7-2.71a1 1 0 0 0-1.42 1.42L4.59 11H3a1 1 0 0 0 0 2h1.59l-1.3 1.29a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0L7.41 13h2.18l-2.3 2.29a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0l2.29-2.3v2.18l-2.71 2.7a1 1 0 0 0 1.42 1.42l1.29-1.3V21a1 1 0 0 0 2 0v-1.59l1.29 1.3a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42L13 16.59v-2.18l2.29 2.3a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42L14.41 13h2.18l2.7 2.71a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42L19.41 13H21a1 1 0 0 0 0-2"></svg:path>`,
})
export class UilSnowFlakeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uilSnowflakeIcon],svg[uil-snowflake-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m21.16 16.13l-2-1.15l.89-.24a1 1 0 1 0-.52-1.93l-2.82.76L14 12l2.71-1.57l2.82.76h.26a1 1 0 0 0 .26-2L19.16 9l2-1.15a1 1 0 0 0-1-1.74L18 7.37l.3-1.11a1 1 0 1 0-1.93-.52l-.82 3L13 10.27V7.14l2.07-2.07a1 1 0 0 0 0-1.41a1 1 0 0 0-1.42 0l-.65.65V2a1 1 0 0 0-2 0v2.47l-.81-.81a1 1 0 0 0-1.42 0a1 1 0 0 0 0 1.41L11 7.3v3L8.43 8.78l-.82-3a1 1 0 1 0-1.93.52L6 7.37L3.84 6.13a1 1 0 0 0-1 1.74l2 1.13l-.84.26a1 1 0 0 0 .26 2h.26l2.82-.76L10 12l-2.71 1.57l-2.82-.76A1 1 0 1 0 4 14.74l.89.24l-2 1.15a1 1 0 0 0 1 1.74L6 16.63l-.3 1.11A1 1 0 0 0 6.39 19a1.2 1.2 0 0 0 .26 0a1 1 0 0 0 1-.74l.82-3L11 13.73v3.13l-2.07 2.07a1 1 0 0 0 0 1.41a1 1 0 0 0 .71.3a1 1 0 0 0 .71-.3l.65-.65V22a1 1 0 0 0 2 0v-2.47l.81.81a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.41L13 16.7v-3l2.57 1.49l.82 3a1 1 0 0 0 1 .74a1.2 1.2 0 0 0 .26 0a1 1 0 0 0 .71-1.23L18 16.63l2.14 1.24a1 1 0 1 0 1-1.74Z"></svg:path>`,
})
export class UilSnowflakeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uilSnowflakeAltIcon],svg[uil-snowflake-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.93 17.66a1 1 0 1 0 1.41 0a1 1 0 0 0-1.41 0M19.07 6.34a1 1 0 1 0-1.41 0a1 1 0 0 0 1.41 0m-12.73 0a1 1 0 1 0-1.41 0a1 1 0 0 0 1.41 0m11.32 11.32a1 1 0 1 0 1.41 0a1 1 0 0 0-1.41 0M21 11h-1.59l1.3-1.29a1 1 0 0 0-1.42-1.42L16.59 11h-2.18l2.3-2.29a1 1 0 1 0-1.42-1.42L13 9.59V7.41l2.71-2.7a1 1 0 1 0-1.42-1.42L13 4.59V3a1 1 0 0 0-2 0v1.59l-1.29-1.3a1 1 0 0 0-1.42 1.42L11 7.41v2.18l-2.29-2.3a1 1 0 1 0-1.42 1.42L9.59 11H7.41l-2.7-2.71a1 1 0 0 0-1.42 1.42L4.59 11H3a1 1 0 0 0 0 2h1.59l-1.3 1.29a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0L7.41 13h2.18l-2.3 2.29a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0l2.29-2.3v2.18l-2.71 2.7a1 1 0 0 0 1.42 1.42l1.29-1.3V21a1 1 0 0 0 2 0v-1.59l1.29 1.3a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42L13 16.59v-2.18l2.29 2.3a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42L14.41 13h2.18l2.7 2.71a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42L19.41 13H21a1 1 0 0 0 0-2"></svg:path>`,
})
export class UilSnowflakeAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uilSocialDistancingIcon],svg[uil-social-distancing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.5 17H5.914l.293-.293a1 1 0 0 0-1.414-1.414l-2 2a1.004 1.004 0 0 0 0 1.414l2 2a1 1 0 0 0 1.414-1.414L5.914 19H8.5a1 1 0 0 0 0-2m12.707.293l-2-2a1 1 0 0 0-1.414 1.414l.293.293H15.5a1 1 0 0 0 0 2h2.586l-.293.293a1 1 0 1 0 1.414 1.414l2-2a1.004 1.004 0 0 0 0-1.414m-.567-7.521A3.47 3.47 0 0 0 21.5 7.5a3.5 3.5 0 0 0-7 0a3.47 3.47 0 0 0 .86 2.272A4.99 4.99 0 0 0 13 14a1 1 0 0 0 2 0a3 3 0 0 1 6 0a1 1 0 0 0 2 0a4.99 4.99 0 0 0-2.36-4.228M18 9a1.5 1.5 0 1 1 1.5-1.5A1.5 1.5 0 0 1 18 9m-9.36.772A3.47 3.47 0 0 0 9.5 7.5a3.5 3.5 0 0 0-7 0a3.47 3.47 0 0 0 .86 2.272A4.99 4.99 0 0 0 1 14a1 1 0 0 0 2 0a3 3 0 0 1 6 0a1 1 0 0 0 2 0a4.99 4.99 0 0 0-2.36-4.228M6 9a1.5 1.5 0 1 1 1.5-1.5A1.5 1.5 0 0 1 6 9"></svg:path>`,
})
export class UilSocialDistancingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uilSolidIcon],svg[uil-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.4 7.1c-.1-.1-.2-.1-.4-.1c-.3 0-.5 0-.8-.1c-1.7-.4-2.9-1.7-3-3.4v-.4c0-.3-.2-.5-.5-.5h-3.1c-.3 0-.5.2-.5.5v12.5c0 1.2-1 2.1-2.1 2.1c-.7 0-1.3-.3-1.7-.8c-.7-.9-.5-2.3.4-3c.4-.3.8-.3 1.6-.3c.1 0 .3 0 .4-.1s.2-.2.2-.4V9.8c0-.2-.2-.5-.4-.5c-1.6-.2-3.2.2-4.4 1.2c-1.1 1-1.9 2.4-2.1 4.1c-.3 1.9.4 3.9 1.7 5.2c1.2 1.3 2.9 1.9 4.5 1.9s3.2-.6 4.4-1.8s1.9-2.8 1.9-4.5V9.9c1.2.6 2.5 1 3.8 1c.3 0 .5-.2.5-.5v-3c-.2-.1-.3-.2-.4-.3"></svg:path>`,
})
export class UilSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uilSortIcon],svg[uil-sort-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.29 14.29L12 18.59l-4.29-4.3a1 1 0 0 0-1.42 1.42l5 5a1 1 0 0 0 1.42 0l5-5a1 1 0 0 0-1.42-1.42M7.71 9.71L12 5.41l4.29 4.3a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42l-5-5a1 1 0 0 0-1.42 0l-5 5a1 1 0 0 0 1.42 1.42"></svg:path>`,
})
export class UilSortIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uilSortAmountDownIcon],svg[uil-sort-amount-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m6.29 14.29l-.29.3V7a1 1 0 0 0-2 0v7.59l-.29-.3a1 1 0 0 0-1.42 1.42l2 2a1 1 0 0 0 .33.21a.94.94 0 0 0 .76 0a1 1 0 0 0 .33-.21l2-2a1 1 0 0 0-1.42-1.42M11 8h10a1 1 0 0 0 0-2H11a1 1 0 0 0 0 2m10 3H11a1 1 0 0 0 0 2h10a1 1 0 0 0 0-2m0 5H11a1 1 0 0 0 0 2h10a1 1 0 0 0 0-2"></svg:path>`,
})
export class UilSortAmountDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uilSortAmountUpIcon],svg[uil-sort-amount-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.71 6.29a1 1 0 0 0-.33-.21a1 1 0 0 0-.76 0a1 1 0 0 0-.33.21l-2 2a1 1 0 0 0 1.42 1.42l.29-.3V17a1 1 0 0 0 2 0V9.41l.29.3a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42ZM11 8h10a1 1 0 0 0 0-2H11a1 1 0 0 0 0 2m10 8H11a1 1 0 0 0 0 2h10a1 1 0 0 0 0-2m0-5H11a1 1 0 0 0 0 2h10a1 1 0 0 0 0-2"></svg:path>`,
})
export class UilSortAmountUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uilSortingIcon],svg[uil-sorting-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.29 10.21a1 1 0 0 0 1.42 0l3-3a1 1 0 1 0-1.42-1.42L12 8.09l-2.29-2.3a1 1 0 0 0-1.42 1.42Zm1.42 4.58a1 1 0 0 0-1.42 0l-3 3a1 1 0 0 0 1.42 1.42l2.29-2.3l2.29 2.3a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42Z"></svg:path>`,
})
export class UilSortingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uilSpaceKeyIcon],svg[uil-space-key-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 9a1 1 0 0 0-1 1v3H4v-3a1 1 0 0 0-2 0v4a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1"></svg:path>`,
})
export class UilSpaceKeyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uilSpadeIcon],svg[uil-spade-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.06 12.28a5.7 5.7 0 0 0-1.67-4L14 2.81a2.83 2.83 0 0 0-4 0L4.61 8.23a5.7 5.7 0 0 0-1.67 4A5.7 5.7 0 0 0 8.66 18a6.9 6.9 0 0 1-1.23 2.37A1 1 0 0 0 8.24 22h7.52a1 1 0 0 0 .78-1.63A6.8 6.8 0 0 1 15.31 18a5.69 5.69 0 0 0 5.75-5.71ZM18 14.91a3.78 3.78 0 0 1-3.66.95a1 1 0 0 0-.17 0h-.2a1.4 1.4 0 0 0-.22.06h-.15a.7.7 0 0 0-.13.11a.8.8 0 0 0-.17.14a.6.6 0 0 1-.06.11a3 3 0 0 0-.12.23a1 1 0 0 0 0 .18v.18a8.8 8.8 0 0 0 .82 3.13h-3.88a8.6 8.6 0 0 0 .88-3v-.19a1 1 0 0 0 0-.18a1 1 0 0 0-.13-.24a.5.5 0 0 0-.06-.1a.5.5 0 0 0-.16-.14a1 1 0 0 0-.13-.11h-.14a1 1 0 0 0-.23-.07H9.9a1 1 0 0 0-.18 0A3.81 3.81 0 0 1 6 14.91a3.75 3.75 0 0 1-1.09-2.63A3.7 3.7 0 0 1 6 9.65l5.4-5.42a.81.81 0 0 1 1.13 0L18 9.65a3.7 3.7 0 0 1 1.09 2.63A3.78 3.78 0 0 1 18 14.91"></svg:path>`,
})
export class UilSpadeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uilSpermsIcon],svg[uil-sperms-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.06 20.1a2 2 0 0 1-.65-.48a2.47 2.47 0 0 1-.67-1.14a4.2 4.2 0 0 0-1.31-2.06a3.57 3.57 0 0 0-1-3.28a3.28 3.28 0 0 0-4.59-.35a3.29 3.29 0 0 0 .35 4.6a3.87 3.87 0 0 0 2.21 1.12h.36a2.85 2.85 0 0 0 1.53-.44a2.05 2.05 0 0 1 .51.93A4.46 4.46 0 0 0 9 21a4.3 4.3 0 0 0 1.2.88a1 1 0 0 0 .44.1a1 1 0 0 0 .44-1.9Zm-4.74-3.77a.86.86 0 0 1-.7.19A1.8 1.8 0 0 1 4.56 16c-.57-.56-.73-1.39-.36-1.77a.82.82 0 0 1 .56-.2a1.8 1.8 0 0 1 1.24.53a1.8 1.8 0 0 1 .55 1.06a.86.86 0 0 1-.23.71m15-6.12a2.2 2.2 0 0 1-.91-.59a2.47 2.47 0 0 1-.67-1.14a4.2 4.2 0 0 0-1.31-2.06a3.57 3.57 0 0 0-1.05-3.28a3.28 3.28 0 0 0-4.59-.35a3.29 3.29 0 0 0 .35 4.6a3.87 3.87 0 0 0 2.26 1.12h.36a2.85 2.85 0 0 0 1.53-.44a2.05 2.05 0 0 1 .51.93a4.54 4.54 0 0 0 1.2 2a4.36 4.36 0 0 0 1.7 1.08a1.3 1.3 0 0 0 .32.05a1 1 0 0 0 .95-.68a1 1 0 0 0-.65-1.24m-5-3.88a.86.86 0 0 1-.7.19A1.8 1.8 0 0 1 14.56 6c-.57-.56-.73-1.39-.36-1.77a.82.82 0 0 1 .56-.2a1.8 1.8 0 0 1 1.24.53a1.8 1.8 0 0 1 .55 1.06a.86.86 0 0 1-.23.71m5.39 14.12a4.45 4.45 0 0 0-3.23-3.23a3.2 3.2 0 0 1-1.39-.82a2.93 2.93 0 0 1-.8-1.38A4.65 4.65 0 0 0 13 11.77a2.9 2.9 0 0 1-1.38-.8a3 3 0 0 1-.81-1.39a4.7 4.7 0 0 0-1-1.86a3.9 3.9 0 0 0 .19-1.5a4.75 4.75 0 0 0-1.4-2.8A4.78 4.78 0 0 0 5.78 2A3.43 3.43 0 0 0 3 3a3.43 3.43 0 0 0-1 2.78a4.75 4.75 0 0 0 1.4 2.8A4.78 4.78 0 0 0 6.22 10h.43a3.4 3.4 0 0 0 2-.6a2.6 2.6 0 0 1 .31.71a5.12 5.12 0 0 0 3.6 3.59a2.61 2.61 0 0 1 1.83 1.84a5.11 5.11 0 0 0 3.6 3.6a2.57 2.57 0 0 1 1.8 1.86a3 3 0 0 0 .16.46a1 1 0 0 0 .88.54a1.2 1.2 0 0 0 .44-.1a1 1 0 0 0 .48-1.33s-.03-.1-.04-.12M7.64 7.64c-.64.63-1.92.41-2.81-.47A2.78 2.78 0 0 1 4 5.56a1.47 1.47 0 0 1 .35-1.2a1.4 1.4 0 0 1 1-.36a2.7 2.7 0 0 1 1.83.83A2.78 2.78 0 0 1 8 6.44a1.47 1.47 0 0 1-.36 1.2"></svg:path>`,
})
export class UilSpermsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uilSpinIcon],svg[uil-spin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 3a7 7 0 0 0 0 14a5 5 0 0 0 0-10a3 3 0 0 0 0 6a1 1 0 0 0 0-2a1 1 0 0 1 0-2a3 3 0 0 1 0 6a5 5 0 0 1 0-10a7 7 0 0 1 0 14a9 9 0 0 1-9-9a1 1 0 0 0-2 0a11 11 0 0 0 11 11a9 9 0 0 0 0-18"></svg:path>`,
})
export class UilSpinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uilSpinnerIcon],svg[uil-spinner-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.1 16c-.3-.5-.9-.6-1.4-.4c-.5.3-.6.9-.4 1.4c.3.5.9.6 1.4.4c.5-.3.6-.9.4-1.4m-.4-9.4c-.5-.2-1.1-.1-1.4.4c-.2.5-.1 1.1.4 1.4c.5.2 1.1.1 1.4-.4c.2-.5.1-1.1-.4-1.4m15.6 1.8c.5-.3.6-.9.4-1.4c-.3-.5-.9-.6-1.4-.4c-.5.3-.6.9-.4 1.4c.3.5.9.6 1.4.4M4 12c0-.6-.4-1-1-1s-1 .4-1 1s.4 1 1 1s1-.4 1-1m3.2 6.8c-.5.1-.9.7-.7 1.2c.1.5.7.9 1.2.7c.5-.1.9-.7.7-1.2c-.1-.5-.6-.8-1.2-.7M21 11c-.6 0-1 .4-1 1s.4 1 1 1s1-.4 1-1s-.4-1-1-1m-.7 4.6c-.5-.3-1.1-.1-1.4.4s-.1 1.1.4 1.4s1.1.1 1.4-.4c.2-.5.1-1.1-.4-1.4M17 3.3c-.5-.3-1.1-.1-1.4.4s-.1 1.1.4 1.4s1.1.1 1.4-.4c.2-.5.1-1.1-.4-1.4m-.2 15.5c-.5-.1-1.1.2-1.2.7s.2 1.1.7 1.2s1.1-.2 1.2-.7s-.2-1-.7-1.2M12 20c-.6 0-1 .4-1 1s.4 1 1 1s1-.4 1-1s-.4-1-1-1m0-18c-.6 0-1 .4-1 1s.4 1 1 1s1-.4 1-1s-.4-1-1-1"></svg:path>`,
})
export class UilSpinnerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uilSpinnerAltIcon],svg[uil-spinner-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.804 15a1 1 0 0 0-1.366-.366l-1.732 1a1 1 0 0 0 1 1.732l1.732-1A1 1 0 0 0 6.804 15M3.706 8.366l1.732 1a1 1 0 1 0 1-1.732l-1.732-1a1 1 0 0 0-1 1.732M6 12a1 1 0 0 0-1-1H3a1 1 0 0 0 0 2h2a1 1 0 0 0 1-1m11.196-3a1 1 0 0 0 1.366.366l1.732-1a1 1 0 1 0-1-1.732l-1.732 1A1 1 0 0 0 17.196 9M15 6.804a1 1 0 0 0 1.366-.366l1-1.732a1 1 0 1 0-1.732-1l-1 1.732A1 1 0 0 0 15 6.804m5.294 8.83l-1.732-1a1 1 0 1 0-1 1.732l1.732 1a1 1 0 0 0 1-1.732m-3.928 1.928a1 1 0 1 0-1.732 1l1 1.732a1 1 0 1 0 1.732-1ZM21 11h-2a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2m-9 7a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-2a1 1 0 0 0-1-1m-3-.804a1 1 0 0 0-1.366.366l-1 1.732a1 1 0 0 0 1.732 1l1-1.732A1 1 0 0 0 9 17.196M12 2a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0V3a1 1 0 0 0-1-1"></svg:path>`,
})
export class UilSpinnerAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uilSquareIcon],svg[uil-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 2H3a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1m-1 18H4V4h16Z"></svg:path>`,
})
export class UilSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uilSquareFullIcon],svg[uil-square-full-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 2H3a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1m-1 18H4V4h16Z"></svg:path>`,
})
export class UilSquareFullIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uilSquareShapeIcon],svg[uil-square-shape-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 2H7a5 5 0 0 0-5 5v10a5 5 0 0 0 5 5h10a5 5 0 0 0 5-5V7a5 5 0 0 0-5-5m3 15a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3Z"></svg:path>`,
})
export class UilSquareShapeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uilSquintIcon],svg[uil-squint-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 14H9a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2m-5.92-1.79l1.5-1.5a1 1 0 0 0 0-1.42l-1.5-1.5a1 1 0 0 0-1.42 1.42l.8.79l-.8.79a1 1 0 0 0 0 1.42a1 1 0 0 0 .71.29a1 1 0 0 0 .71-.29M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2m0 18a8 8 0 1 1 8-8a8 8 0 0 1-8 8m4.58-12.21a1 1 0 0 0-1.42 0l-1.5 1.5a1 1 0 0 0 0 1.42l1.5 1.5a1 1 0 0 0 .71.29a1 1 0 0 0 .71-.29a1 1 0 0 0 0-1.42l-.79-.79l.79-.79a1 1 0 0 0 0-1.42"></svg:path>`,
})
export class UilSquintIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uilStarIcon],svg[uil-star-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 9.67a1 1 0 0 0-.86-.67l-5.69-.83L12.9 3a1 1 0 0 0-1.8 0L8.55 8.16L2.86 9a1 1 0 0 0-.81.68a1 1 0 0 0 .25 1l4.13 4l-1 5.68a1 1 0 0 0 .4 1a1 1 0 0 0 1.05.07L12 18.76l5.1 2.68a.93.93 0 0 0 .46.12a1 1 0 0 0 .59-.19a1 1 0 0 0 .4-1l-1-5.68l4.13-4A1 1 0 0 0 22 9.67m-6.15 4a1 1 0 0 0-.29.89l.72 4.19l-3.76-2a1 1 0 0 0-.94 0l-3.76 2l.72-4.19a1 1 0 0 0-.29-.89l-3-3l4.21-.61a1 1 0 0 0 .76-.55L12 5.7l1.88 3.82a1 1 0 0 0 .76.55l4.21.61Z"></svg:path>`,
})
export class UilStarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uilStarHalfAltIcon],svg[uil-star-half-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 9.67a1 1 0 0 0-.86-.67l-5.69-.83L12.9 3a1 1 0 0 0-1.8 0L8.55 8.16L2.86 9a1 1 0 0 0-.81.68a1 1 0 0 0 .25 1l4.13 4l-1 5.68a1 1 0 0 0 1.47 1.08l5.1-2.67l5.1 2.67a.93.93 0 0 0 .46.12a1 1 0 0 0 .59-.19a1 1 0 0 0 .4-1l-1-5.68l4.13-4A1 1 0 0 0 22 9.67M11 17l-3.23 1.7l.72-4.2a1 1 0 0 0-.29-.88l-3-3l4.21-.61a1 1 0 0 0 .76-.55L11 7.73Zm4.8-3.38a1 1 0 0 0-.29.88l.72 4.2L13 17V7.73l.88 1.79a1 1 0 0 0 .76.55l4.21.61Z"></svg:path>`,
})
export class UilStarHalfAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uilStatisticsIcon],svg[uil-statistics-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.92 6.62a1 1 0 0 0-.54-.54A1 1 0 0 0 21 6h-5a1 1 0 0 0 0 2h2.59L13 13.59l-3.29-3.3a1 1 0 0 0-1.42 0l-6 6a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0L9 12.41l3.29 3.3a1 1 0 0 0 1.42 0L20 9.41V12a1 1 0 0 0 2 0V7a1 1 0 0 0-.08-.38"></svg:path>`,
})
export class UilStatisticsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uilStepBackwardIcon],svg[uil-step-backward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.28 3.43a3.23 3.23 0 0 0-3.29 0L8 8.84V6a3 3 0 0 0-6 0v12a3 3 0 0 0 6 0v-2.84l9 5.37a3.3 3.3 0 0 0 1.68.47a3.24 3.24 0 0 0 1.61-.43a3.38 3.38 0 0 0 1.72-3V6.42a3.38 3.38 0 0 0-1.73-2.99M6 18a1 1 0 0 1-2 0V6a1 1 0 0 1 2 0Zm14-.42a1.4 1.4 0 0 1-.71 1.25a1.23 1.23 0 0 1-1.28 0l-9.33-5.6a1.45 1.45 0 0 1 0-2.46L18 5.19a1.23 1.23 0 0 1 .67-.19a1.3 1.3 0 0 1 .62.17A1.4 1.4 0 0 1 20 6.42Z"></svg:path>`,
})
export class UilStepBackwardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uilStepBackwardAltIcon],svg[uil-step-backward-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 3a3 3 0 0 0-3 3v12a3 3 0 0 0 6 0V6a3 3 0 0 0-3-3m1 15a1 1 0 0 1-2 0V6a1 1 0 0 1 2 0ZM12.63 5.63a2.6 2.6 0 0 0-2.64 0l-6.67 4a2.75 2.75 0 0 0 0 4.7l6.67 4a2.57 2.57 0 0 0 2.64 0A2.74 2.74 0 0 0 14 16V8a2.74 2.74 0 0 0-1.37-2.37M12 16a.72.72 0 0 1-.36.64a.61.61 0 0 1-.63 0l-6.66-4a.76.76 0 0 1 0-1.28l6.66-4a.63.63 0 0 1 .32-.09a.64.64 0 0 1 .31.08A.72.72 0 0 1 12 8Z"></svg:path>`,
})
export class UilStepBackwardAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uilStepBackwardCircleIcon],svg[uil-step-backward-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.5 7.38a2 2 0 0 0-2 0l-4 2.31V8a1 1 0 0 0-2 0v8a1 1 0 0 0 2 0v-1.69l4 2.31a2 2 0 0 0 2 0a2 2 0 0 0 1-1.73V9.11a2 2 0 0 0-1-1.73m-1 7.51L9.5 12l5-2.89ZM12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2m0 18a8 8 0 1 1 8-8a8 8 0 0 1-8 8"></svg:path>`,
})
export class UilStepBackwardCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uilStepForwardIcon],svg[uil-step-forward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.71 7.29a1 1 0 1 0-1.42 1.42l3.3 3.29l-3.3 3.29a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0l4-4a1 1 0 0 0 0-1.42ZM16 7a1 1 0 0 0-1 1v8a1 1 0 0 0 2 0V8a1 1 0 0 0-1-1"></svg:path>`,
})
export class UilStepForwardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uilStethoscopeIcon],svg[uil-stethoscope-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 8a2.993 2.993 0 0 0-1 5.816V15.5a4.5 4.5 0 0 1-9 0v-.59A6.004 6.004 0 0 0 14 9V3a1 1 0 0 0-1-1h-2a1 1 0 0 0 0 2h1v5a4 4 0 0 1-8 0V4h1a1 1 0 0 0 0-2H3a1 1 0 0 0-1 1v6a6.004 6.004 0 0 0 5 5.91v.59a6.5 6.5 0 0 0 13 0v-1.684A2.993 2.993 0 0 0 19 8m0 4a1 1 0 1 1 1-1a1 1 0 0 1-1 1"></svg:path>`,
})
export class UilStethoscopeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uilStethoscopeAltIcon],svg[uil-stethoscope-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 8a2.993 2.993 0 0 0-1 5.816V15.5a4.5 4.5 0 0 1-9 0v-1.02l3.124-2.498A4.98 4.98 0 0 0 14 8.078V3a1 1 0 0 0-1-1h-2a1 1 0 0 0 0 2h1v4.078a2.99 2.99 0 0 1-1.125 2.342L8 12.72l-2.874-2.3A2.99 2.99 0 0 1 4 8.078V4h1a1 1 0 0 0 0-2H3a1 1 0 0 0-1 1v5.078a4.97 4.97 0 0 0 1.876 3.904L7 14.48v1.02a6.5 6.5 0 0 0 13 0v-1.684A2.993 2.993 0 0 0 19 8m0 4a1 1 0 1 1 1-1a1 1 0 0 1-1 1"></svg:path>`,
})
export class UilStethoscopeAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uilStopCircleIcon],svg[uil-stop-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 8H9a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1m-1 6h-4v-4h4ZM12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2m0 18a8 8 0 1 1 8-8a8 8 0 0 1-8 8"></svg:path>`,
})
export class UilStopCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uilStopwatchIcon],svg[uil-stopwatch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m18.3 8.59l.91-.9a1 1 0 0 0-1.42-1.42l-.9.91a8 8 0 0 0-9.79 0l-.91-.92a1 1 0 0 0-1.42 1.43l.92.91A7.92 7.92 0 0 0 4 13.5a8 8 0 1 0 14.3-4.91M12 19.5a6 6 0 1 1 6-6a6 6 0 0 1-6 6m-2-15h4a1 1 0 0 0 0-2h-4a1 1 0 0 0 0 2m3 6a1 1 0 0 0-2 0v1.89a1.5 1.5 0 1 0 2 0Z"></svg:path>`,
})
export class UilStopwatchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uilStopwatchSlashIcon],svg[uil-stopwatch-slash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.6 5.63a1 1 0 0 0 .36 2a6 6 0 0 1 1-.09a6 6 0 0 1 6 6a6 6 0 0 1-.09 1a1 1 0 0 0 .8 1.16h.18a1 1 0 0 0 1-.82A7.5 7.5 0 0 0 20 13.5a8 8 0 0 0-1.7-4.91l.91-.9a1 1 0 0 0-1.42-1.42l-.9.91A8 8 0 0 0 12 5.5a7.5 7.5 0 0 0-1.4.13M10 4.5h4a1 1 0 0 0 0-2h-4a1 1 0 0 0 0 2m3.49 9.08v-.16l1.34-1.33a1 1 0 1 0-1.42-1.42L12.08 12h-.16L5.71 5.79a1 1 0 0 0-1.42 1.42l.48.48l.91.91A8 8 0 0 0 16.9 19.82l1.39 1.39a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42ZM12 19.5A6 6 0 0 1 7.11 10l3.4 3.39v.08A1.5 1.5 0 0 0 12 15h.08l3.39 3.4A6 6 0 0 1 12 19.5"></svg:path>`,
})
export class UilStopwatchSlashIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uilStoreIcon],svg[uil-store-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 7.82a1 1 0 0 0 0-.19l-2-5A1 1 0 0 0 19 2H5a1 1 0 0 0-.93.63l-2 5a1 1 0 0 0 0 .19A.6.6 0 0 0 2 8a4 4 0 0 0 2 3.4V21a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-9.56A4 4 0 0 0 22 8a.6.6 0 0 0 0-.18M13 20h-2v-4h2Zm5 0h-3v-5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v5H6v-8a4 4 0 0 0 3-1.38a4 4 0 0 0 6 0A4 4 0 0 0 18 12Zm0-10a2 2 0 0 1-2-2a1 1 0 0 0-2 0a2 2 0 0 1-4 0a1 1 0 0 0-2 0a2 2 0 0 1-4 .15L5.68 4h12.64L20 8.15A2 2 0 0 1 18 10"></svg:path>`,
})
export class UilStoreIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uilStoreAltIcon],svg[uil-store-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 2H2a1 1 0 0 0-1 1v4a3 3 0 0 0 2 2.82V21a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V9.82A3 3 0 0 0 23 7V3a1 1 0 0 0-1-1m-7 2h2v3a1 1 0 0 1-2 0Zm-4 0h2v3a1 1 0 0 1-2 0ZM7 4h2v3a1 1 0 0 1-2 0ZM4 8a1 1 0 0 1-1-1V4h2v3a1 1 0 0 1-1 1m10 12h-4v-4a2 2 0 0 1 4 0Zm5 0h-3v-4a4 4 0 0 0-8 0v4H5V9.82a3.2 3.2 0 0 0 1-.6a3 3 0 0 0 4 0a3 3 0 0 0 4 0a3 3 0 0 0 4 0a3.2 3.2 0 0 0 1 .6Zm2-13a1 1 0 0 1-2 0V4h2Z"></svg:path>`,
})
export class UilStoreAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uilStoreSlashIcon],svg[uil-store-slash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.7 4h9.623l1.661 4.154A1.995 1.995 0 0 1 16 8a1 1 0 0 0-2 0a1.8 1.8 0 0 1-.134.709a1 1 0 0 0 .543 1.305a1 1 0 0 0 .174.035A3.99 3.99 0 0 0 18 12v1.3a1 1 0 0 0 2 0v-1.856a3.99 3.99 0 0 0 1.996-3.405l.003-.028L22 8a1 1 0 0 0-.035-.171a1 1 0 0 0-.036-.2l-2-5A1 1 0 0 0 19 2H8.7a1 1 0 1 0 0 2m14.007 17.293l-2.933-2.933a1 1 0 0 0-.154-.154l-9.95-9.95a1 1 0 0 0-.206-.206L5.182 3.768a1 1 0 0 0-.128-.128L2.707 1.293a1 1 0 0 0-1.414 1.414l1.964 1.964l-1.178 2.94l-.007.017a1 1 0 0 0-.035.189A1 1 0 0 0 2 8l.001.012l.003.024A3.99 3.99 0 0 0 4 11.444V21a1 1 0 0 0 1 1h14a.99.99 0 0 0 .93-.656l1.363 1.363a1 1 0 0 0 1.414-1.414M4.016 8.153l.778-1.945L7.67 9.084A1.97 1.97 0 0 1 6 10a1.996 1.996 0 0 1-1.984-1.846ZM9 15v5H6v-8a3.96 3.96 0 0 0 3.102-1.484L12.586 14H10a1 1 0 0 0-1 1m4 5h-2v-4h2Zm5 0h-3v-3.586l3 3Z"></svg:path>`,
})
export class UilStoreSlashIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uilStreeringIcon],svg[uil-streering-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 12a1 1 0 1 0 1 1a1 1 0 0 0-1-1m9.71-2.36a10 10 0 0 0-19.4 0a9.75 9.75 0 0 0 0 4.72a10 10 0 0 0 7.3 7.34a9.7 9.7 0 0 0 4.7 0a10 10 0 0 0 7.31-7.31a9.75 9.75 0 0 0 0-4.72ZM12 4a8 8 0 0 1 7.41 5H4.59A8 8 0 0 1 12 4m-8 8a8 8 0 0 1 .07-1H6v2H4.07A8 8 0 0 1 4 12m5 7.41A8 8 0 0 1 4.59 15H7a2 2 0 0 1 2 2Zm4 .52a8 8 0 0 1-1 .07a8 8 0 0 1-1-.07V18h2Zm.14-3.93h-2.28A4 4 0 0 0 8 13.14V11h8v2.14A4 4 0 0 0 13.14 16M15 19.41V17a2 2 0 0 1 2-2h2.41A8 8 0 0 1 15 19.41M19.93 13H18v-2h1.93a8 8 0 0 1 .07 1a8 8 0 0 1-.07 1"></svg:path>`,
})
export class UilStreeringIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uilStretcherIcon],svg[uil-stretcher-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 4.5h3a1 1 0 0 0 0-2h-3a1 1 0 0 0 0 2m3 2H3a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h1.55l5.11 2.56l-2.58 1.29A3 3 0 0 0 5 15.5a3 3 0 1 0 3 3a2 2 0 0 0 0-.36l3.94-2l4.06 2.1a2 2 0 0 0 0 .26a3 3 0 1 0 3-3a3 3 0 0 0-2.15.92l-2.72-1.36l5.11-2.56H21a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1m-16 13a1 1 0 1 1 1-1a1 1 0 0 1-1 1m14-2a1 1 0 1 1-1 1a1 1 0 0 1 1-1m-7.1-3.56L9 12.5h5.75ZM20 10.5H4v-2h16Z"></svg:path>`,
})
export class UilStretcherIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uilStrollerIcon],svg[uil-stroller-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 16a3 3 0 1 0 3 3a3 3 0 0 0-3-3m0 4a1 1 0 1 1 1-1a1 1 0 0 1-1 1M9 16a3 3 0 1 0 3 3a3 3 0 0 0-3-3m0 4a1 1 0 1 1 1-1a1 1 0 0 1-1 1M22 8.5A6.51 6.51 0 0 0 15.5 2H15a1 1 0 0 0-1 1v5H7.52L6.27 4.65A1 1 0 0 0 5.33 4H3a1 1 0 0 0 0 2h1.64l1.25 3.37l.51 1.37v.09A6.44 6.44 0 0 0 12.5 15h3A6.49 6.49 0 0 0 22 8.5m-3.32 3.18A4.47 4.47 0 0 1 15.5 13h-3a4.47 4.47 0 0 1-4.16-2.8a.14.14 0 0 1 0-.06L8.26 10h11.48a4.3 4.3 0 0 1-1.06 1.68M16 8V4a4.49 4.49 0 0 1 4 4Z"></svg:path>`,
})
export class UilStrollerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uilSubjectIcon],svg[uil-subject-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 16H3a1 1 0 0 0 0 2h10a1 1 0 0 0 0-2M3 8h18a1 1 0 0 0 0-2H3a1 1 0 0 0 0 2m18 3H3a1 1 0 0 0 0 2h18a1 1 0 0 0 0-2"></svg:path>`,
})
export class UilSubjectIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uilSubwayIcon],svg[uil-subway-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 17a1 1 0 0 0 1-1a1.4 1.4 0 0 0 0-.2a.6.6 0 0 0-.06-.18a.8.8 0 0 0-.09-.18l-.12-.15a1.2 1.2 0 0 0-.33-.21a1 1 0 0 0-.76 0a1.2 1.2 0 0 0-.33.21l-.12.15a.8.8 0 0 0-.09.18a.6.6 0 0 0-.06.18a1.4 1.4 0 0 0 0 .2a1 1 0 0 0 1 1Zm2-15H6a3 3 0 0 0-3 3v12a3 3 0 0 0 1.2 2.39l-.91.9a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0L6.41 20h11.18l1.7 1.71a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42l-.91-.9A3 3 0 0 0 21 17V5a3 3 0 0 0-3-3M5 8h6v4H5Zm14 9a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-3h14Zm0-5h-6V8h6Zm0-6H5V5a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1ZM8 17a1 1 0 0 0 1-1a1.4 1.4 0 0 0 0-.2a.6.6 0 0 0-.06-.18a.8.8 0 0 0-.09-.18l-.12-.15a1.2 1.2 0 0 0-.33-.21a1 1 0 0 0-.76 0a1.2 1.2 0 0 0-.33.21l-.12.15a.8.8 0 0 0-.09.18a.6.6 0 0 0-.1.18a1.4 1.4 0 0 0 0 .2a1 1 0 0 0 .29.7A1 1 0 0 0 8 17"></svg:path>`,
})
export class UilSubwayIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uilSubwayAltIcon],svg[uil-subway-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 17h1a1 1 0 0 0 0-2h-1a1 1 0 0 0 0 2m6 0V9a3 3 0 0 0-3-3h-5V4h4a1 1 0 0 0 0-2H7a1 1 0 0 0 0 2h4v2H6a3 3 0 0 0-3 3v8a3 3 0 0 0 1.2 2.39l-.91.9a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0L6.41 20h11.18l1.7 1.71a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42l-.91-.9A3 3 0 0 0 21 17M5 9a1 1 0 0 1 1-1h5v4H5Zm14 8a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-3h14Zm0-5h-6V8h5a1 1 0 0 1 1 1ZM8 17h1a1 1 0 0 0 0-2H8a1 1 0 0 0 0 2"></svg:path>`,
})
export class UilSubwayAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uilSuitcaseIcon],svg[uil-suitcase-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 6.5h-3v-1a3 3 0 0 0-3-3h-2a3 3 0 0 0-3 3v1H5a3 3 0 0 0-3 3v9a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-9a3 3 0 0 0-3-3m-9-1a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v1h-4Zm10 13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-5.05h3v1.05a1 1 0 0 0 2 0v-1.05h6v1.05a1 1 0 0 0 2 0v-1.05h3Zm0-7H4v-2a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1Z"></svg:path>`,
})
export class UilSuitcaseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uilSuitcaseAltIcon],svg[uil-suitcase-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 6h-3V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v1H5a3 3 0 0 0-3 3v9a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3m-9-1h4v1h-4Zm10 13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-5h4v1a1 1 0 0 0 2 0v-1h4v1a1 1 0 0 0 2 0v-1h4Zm0-7H4V9a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1Z"></svg:path>`,
})
export class UilSuitcaseAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uilSunIcon],svg[uil-sun-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m5.64 17l-.71.71a1 1 0 0 0 0 1.41a1 1 0 0 0 1.41 0l.71-.71A1 1 0 0 0 5.64 17M5 12a1 1 0 0 0-1-1H3a1 1 0 0 0 0 2h1a1 1 0 0 0 1-1m7-7a1 1 0 0 0 1-1V3a1 1 0 0 0-2 0v1a1 1 0 0 0 1 1M5.64 7.05a1 1 0 0 0 .7.29a1 1 0 0 0 .71-.29a1 1 0 0 0 0-1.41l-.71-.71a1 1 0 0 0-1.41 1.41Zm12 .29a1 1 0 0 0 .7-.29l.71-.71a1 1 0 1 0-1.41-1.41l-.64.71a1 1 0 0 0 0 1.41a1 1 0 0 0 .66.29ZM21 11h-1a1 1 0 0 0 0 2h1a1 1 0 0 0 0-2m-9 8a1 1 0 0 0-1 1v1a1 1 0 0 0 2 0v-1a1 1 0 0 0-1-1m6.36-2A1 1 0 0 0 17 18.36l.71.71a1 1 0 0 0 1.41 0a1 1 0 0 0 0-1.41ZM12 6.5a5.5 5.5 0 1 0 5.5 5.5A5.51 5.51 0 0 0 12 6.5m0 9a3.5 3.5 0 1 1 3.5-3.5a3.5 3.5 0 0 1-3.5 3.5"></svg:path>`,
})
export class UilSunIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uilSunsetIcon],svg[uil-sunset-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.66 8.34a1 1 0 0 0 .7-.29l.71-.71a1 1 0 1 0-1.41-1.41l-.66.71a1 1 0 0 0 0 1.41a1 1 0 0 0 .66.29M12 6a1 1 0 0 0 1-1V4a1 1 0 0 0-2 0v1a1 1 0 0 0 1 1m-8 6H3a1 1 0 0 0 0 2h1a1 1 0 0 0 0-2m1.64-3.95a1 1 0 0 0 .7.29a1 1 0 0 0 .71-.29a1 1 0 0 0 0-1.41l-.71-.71a1 1 0 0 0-1.41 1.41ZM21 12h-1a1 1 0 0 0 0 2h1a1 1 0 0 0 0-2m-10 7H8a1 1 0 0 0 0 2h3a1 1 0 0 0 0-2m7-4h-.88a5.4 5.4 0 0 0 .38-2a5.5 5.5 0 0 0-11 0a5.4 5.4 0 0 0 .38 2H6a1 1 0 0 0 0 2h12a1 1 0 0 0 0-2m-3.15 0h-5.7a3.44 3.44 0 0 1-.65-2a3.5 3.5 0 0 1 7 0a3.44 3.44 0 0 1-.65 2M16 19h-1a1 1 0 0 0 0 2h1a1 1 0 0 0 0-2"></svg:path>`,
})
export class UilSunsetIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uilSurpriseIcon],svg[uil-surprise-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2m0 18a8 8 0 1 1 8-8a8 8 0 0 1-8 8M10 9a1 1 0 1 0-1 1a1 1 0 0 0 1-1m5-1a1 1 0 1 0 1 1a1 1 0 0 0-1-1m-3 3a3.39 3.39 0 0 0-3.25 3.5A3.39 3.39 0 0 0 12 18a3.39 3.39 0 0 0 3.25-3.5A3.39 3.39 0 0 0 12 11m0 5a1.39 1.39 0 0 1-1.25-1.5A1.39 1.39 0 0 1 12 13a1.39 1.39 0 0 1 1.25 1.5A1.39 1.39 0 0 1 12 16"></svg:path>`,
})
export class UilSurpriseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uilSwatchbookIcon],svg[uil-swatchbook-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 16a1 1 0 1 0 1 1a1 1 0 0 0-1-1m12.06-4l1.23-1.23a3 3 0 0 0 0-4.24l-2.83-2.82a3 3 0 0 0-4.24 0L12 4.94A3 3 0 0 0 9 2H5a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-4a3 3 0 0 0-2.94-3M10 19a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1Zm2-11.24l2.64-2.64a1 1 0 0 1 1.41 0L18.88 8a1 1 0 0 1 0 1.41L16 12.29l-4 3.95ZM20 19a1 1 0 0 1-1 1h-7.18a3.1 3.1 0 0 0 .17-.92L17.07 14H19a1 1 0 0 1 1 1Z"></svg:path>`,
})
export class UilSwatchbookIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uilSwiggyIcon],svg[uil-swiggy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.878 5.928a.297.297 0 0 1 .314.335l.003.276c.001.593-.002 1.185.002 1.777c.004.434.08.517.5.57a15 15 0 0 0 3.148-.046a5 5 0 0 0 1.573-.374a.507.507 0 0 0 .344-.603a6.83 6.83 0 0 0-5.343-5.71a6.6 6.6 0 0 0-3.648.242a6.7 6.7 0 0 0-2.694 1.752A6.27 6.27 0 0 0 5.23 8.432a11.2 11.2 0 0 0 1.526 5.517a1.34 1.34 0 0 0 1.33.748c.653-.016 1.307-.004 1.96-.004v-.003h2.084c.25 0 .447.06.445.372c-.005.726 0 1.45-.003 2.176c-.002.22-.064.432-.326.434c-.264.002-.327-.209-.33-.43c-.005-.347 0-.694 0-1.041c0-.451-.073-.557-.523-.64a7.7 7.7 0 0 0-2.348-.02a2.6 2.6 0 0 0-.8.196c-.212.1-.296.245-.193.467c.107.231.206.467.333.688a44 44 0 0 0 3.426 4.956c.154.199.273.203.431.01c.349-.426.715-.839 1.06-1.268a34 34 0 0 0 3.577-5.26a14.2 14.2 0 0 0 1.494-3.871a1.203 1.203 0 0 0-1.012-1.635a7 7 0 0 0-1.67-.162c-.909-.006-1.818-.003-2.727-.002c-.245 0-.427-.07-.427-.358q-.002-1.516.002-3.033c0-.216.104-.349.339-.34"></svg:path>`,
})
export class UilSwiggyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uilSwimmerIcon],svg[uil-swimmer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 9.28a2 2 0 1 0-2-2a2 2 0 0 0 2 2M2.71 13.92a3 3 0 0 1 .57.25a4.06 4.06 0 0 0 4.1 0a2.62 2.62 0 0 1 2.56 0l.21.1a4.14 4.14 0 0 0 3.87-.13a2.62 2.62 0 0 1 2.56 0a4.25 4.25 0 0 0 2.08.56a4 4 0 0 0 2-.56a3 3 0 0 1 .57-.25a1 1 0 1 0-.52-1.89a4.8 4.8 0 0 0-1 .44a2.1 2.1 0 0 1-2.1 0a4.62 4.62 0 0 0-4.54 0a3 3 0 0 1-.29.12L14.34 11a1 1 0 0 0 .09-.15a1 1 0 0 0 .12-.16a1.3 1.3 0 0 0 0-.19a1 1 0 0 0 0-.19a1 1 0 0 0 0-.18a1 1 0 0 0 0-.19a2 2 0 0 0-.1-.17a.7.7 0 0 0-.1-.16l-3.07-3.33a1.1 1.1 0 0 0-.28-.22a.8.8 0 0 0-.21 0a.5.5 0 0 0-.17 0A.9.9 0 0 0 10.2 6L6.66 7.32a1 1 0 0 0-.6 1.28a1 1 0 0 0 1.28.6l2.93-1.07l2 2.12l-1.9 1.9a4.62 4.62 0 0 0-3.94.28a2.1 2.1 0 0 1-2.1 0a4.8 4.8 0 0 0-1-.44a1 1 0 1 0-.58 1.91Zm18 3.09a4.8 4.8 0 0 0-1 .44a2.1 2.1 0 0 1-2.1 0a4.62 4.62 0 0 0-4.54 0a2.11 2.11 0 0 1-2.12 0a4.62 4.62 0 0 0-4.54 0a2.1 2.1 0 0 1-2.1 0a4.8 4.8 0 0 0-1-.44a1 1 0 1 0-.58 1.91a3 3 0 0 1 .57.25a4.06 4.06 0 0 0 4.1 0a2.62 2.62 0 0 1 2.56 0a4.15 4.15 0 0 0 4.12 0a2.62 2.62 0 0 1 2.56 0a4.25 4.25 0 0 0 2.08.56a4 4 0 0 0 2-.56a3 3 0 0 1 .57-.25a1 1 0 1 0-.58-1.92Z"></svg:path>`,
})
export class UilSwimmerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uilSyncIcon],svg[uil-sync-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.91 15.51h-4.53a1 1 0 0 0 0 2h2.4A8 8 0 0 1 4 12a1 1 0 0 0-2 0a10 10 0 0 0 16.88 7.23V21a1 1 0 0 0 2 0v-4.5a1 1 0 0 0-.97-.99M12 2a10 10 0 0 0-6.88 2.77V3a1 1 0 0 0-2 0v4.5a1 1 0 0 0 1 1h4.5a1 1 0 0 0 0-2h-2.4A8 8 0 0 1 20 12a1 1 0 0 0 2 0A10 10 0 0 0 12 2"></svg:path>`,
})
export class UilSyncIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uilSyncExclamationIcon],svg[uil-sync-exclamation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.29 15.71A1 1 0 0 0 13 15a1.05 1.05 0 0 0-.29-.71a1 1 0 0 0-1.09-.21a1 1 0 0 0-.33.21A1.05 1.05 0 0 0 11 15a1 1 0 0 0 .29.71m8.62-.2h-4.53a1 1 0 0 0 0 2h2.4A8 8 0 0 1 4 12a1 1 0 0 0-2 0a10 10 0 0 0 16.88 7.23V21a1 1 0 0 0 2 0v-4.5a1 1 0 0 0-.97-.99M12 2a10 10 0 0 0-6.88 2.77V3a1 1 0 0 0-2 0v4.5a1 1 0 0 0 1 1h4.5a1 1 0 0 0 0-2h-2.4A8 8 0 0 1 20 12a1 1 0 0 0 2 0A10 10 0 0 0 12 2m0 11a1 1 0 0 0 1-1V9a1 1 0 0 0-2 0v3a1 1 0 0 0 1 1"></svg:path>`,
})
export class UilSyncExclamationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uilSyncSlashIcon],svg[uil-sync-slash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.88 15.5h-4.5a1 1 0 0 0 0 2h2.4A8 8 0 0 1 12 20a8.1 8.1 0 0 1-3.12-.63l-1.49 1.49A9.8 9.8 0 0 0 12 22a10 10 0 0 0 6.88-2.77V21a1 1 0 0 0 2 0v-4.5a1 1 0 0 0-1-1m-1.57-8.4l1.43-1.43l2-2a1 1 0 1 0-1.42-1.42l-2 2A9.9 9.9 0 0 0 12 2a10 10 0 0 0-6.88 2.77V3a1 1 0 0 0-2 0v4.5a1 1 0 0 0 1 1h4.5a1 1 0 0 0 0-2h-2.4a7.93 7.93 0 0 1 10.67-.81l-11.2 11.2A7.93 7.93 0 0 1 4 12a1 1 0 0 0-2 0a9.9 9.9 0 0 0 2.27 6.32l-2 2a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0l2-2l1.43-1.43Zm1.06 1.78A8.1 8.1 0 0 1 20 12a1 1 0 0 0 2 0a9.8 9.8 0 0 0-1.14-4.61Z"></svg:path>`,
})
export class UilSyncSlashIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uilSyringeIcon],svg[uil-syringe-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.71 2.29a1 1 0 0 0-1.42 0l-2.12 2.12l-.71-.7a1 1 0 0 0-1.41 0l-1.41 1.41l-.71-.71a1 1 0 0 0-1.42 0l-7.77 7.78l-.74-.7a1 1 0 0 0-1.38 1.41l3.53 3.54l-1.73 1.74l-.71-.72a1 1 0 0 0-1.42 1.42l2.83 2.83a1 1 0 0 0 .71.29a1 1 0 0 0 .71-.29a1 1 0 0 0 0-1.42l-.71-.7l1.74-1.74l3.53 3.53a1 1 0 0 0 .71.3a1 1 0 0 0 .7-1.71l-.7-.71l7.78-7.77a1 1 0 0 0 0-1.42l-.71-.71L20.29 8a1 1 0 0 0 0-1.41l-.7-.71l2.12-2.12a1 1 0 0 0 0-1.47M7.57 15l-1.42-1.39l1.41-1.42L9 13.61Zm2.82 2.83L9 16.44L10.39 15l1.42 1.42ZM13.22 15L9 10.78l4.24-4.24l.71.7l3.53 3.54Zm4.24-7l-1.41-1.46l.71-.71l.7.7l.7.7Z"></svg:path>`,
})
export class UilSyringeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uilTableIcon],svg[uil-table-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 2H3a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1M8 20H4v-4h4Zm0-6H4v-4h4Zm0-6H4V4h4Zm6 12h-4v-4h4Zm0-6h-4v-4h4Zm0-6h-4V4h4Zm6 12h-4v-4h4Zm0-6h-4v-4h4Zm0-6h-4V4h4Z"></svg:path>`,
})
export class UilTableIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uilTableTennisIcon],svg[uil-table-tennis-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20.71 16.1l-1.64-1.64a.94.94 0 0 1-.22-1.07a5.8 5.8 0 0 0 .54-2.39a.4.4 0 0 0 0-.1a5.74 5.74 0 0 0-1.06-3.34a14.2 14.2 0 0 0-5.17-4.42a7 7 0 0 0-8 1.31l-.67.67a7 7 0 0 0-1.31 8.05l.1.17a3 3 0 0 0-.84 2.06A3 3 0 0 0 7 17.94c.18.14.34.29.52.42a5.6 5.6 0 0 0 1.22.64h.09c.18.07.37.13.57.19h.15a5 5 0 0 0 .95.15h.62c.21 0 .41 0 .62-.06h.17a5.5 5.5 0 0 0 1.42-.45a1 1 0 0 1 1.07.21l1.46 1.46a3.4 3.4 0 0 0 2.39 1a2.85 2.85 0 0 0 2-.85l.38-.38a3 3 0 0 0 .08-4.17m-15.3.32a1 1 0 1 1 1-1a1 1 0 0 1-1 1m3.1.14l-.26-.2a3 3 0 0 0 .16-.94a3 3 0 0 0-3-3h-.38l-.09-.16a5 5 0 0 1 .93-5.75l.67-.67A5 5 0 0 1 12.28 5a12 12 0 0 1 4.26 3.57Zm10.78 2.37l-.37.38c-.42.42-1.07.34-1.61-.2l-1.46-1.45a3 3 0 0 0-3.34-.61a3.4 3.4 0 0 1-1 .31a3 3 0 0 1-.58.05h-.44l6.87-6.87a3.8 3.8 0 0 1-.34 2a3 3 0 0 0 .61 3.34l1.64 1.65a1 1 0 0 1 .02 1.4"></svg:path>`,
})
export class UilTableTennisIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uilTabletIcon],svg[uil-tablet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 2H7a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3m1 17a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1Zm-5.29-2.71a1 1 0 0 0-.91-.29l-.18.06a.8.8 0 0 0-.18.09l-.15.12a1 1 0 0 0-.21.33a1 1 0 0 0 .21 1.09a1.5 1.5 0 0 0 .33.22a1 1 0 0 0 1.09-.22A1 1 0 0 0 13 17a.84.84 0 0 0-.08-.38a1.2 1.2 0 0 0-.21-.33"></svg:path>`,
})
export class UilTabletIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uilTabletsIcon],svg[uil-tablets-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.54 3.46a5 5 0 1 0 0 7.08a5 5 0 0 0 0-7.08m-5.66 1.42A3 3 0 0 1 17 4a3 3 0 0 1 1.28.3l-4 4a3 3 0 0 1 .6-3.42m4.24 4.24a3 3 0 0 1-3.4.58l4-4a3 3 0 0 1-.6 3.42M8 10a5.93 5.93 0 0 0-4.21 1.73A6 6 0 0 0 8 22a6 6 0 0 0 4.14-1.66l.12-.08a1 1 0 0 1 .07-.11A6 6 0 0 0 8 10m-2.83 8.83A4 4 0 0 1 4.56 14L10 19.44a4 4 0 0 1-4.83-.61m6.27-.83L6 12.56A4 4 0 0 1 8 12a4 4 0 0 1 3.44 6"></svg:path>`,
})
export class UilTabletsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uilTachometerFastIcon],svg[uil-tachometer-fast-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m15.29 10.29l-2.78 2.78A2 2 0 0 0 12 13a2 2 0 0 0-2 2a2 2 0 0 0 .07.51l-.78.78a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0l.78-.78A2 2 0 0 0 12 17a2 2 0 0 0 2-2a2 2 0 0 0-.07-.51l2.78-2.78a1 1 0 0 0-1.42-1.42M12 4A10 10 0 0 0 2 14a9.9 9.9 0 0 0 1.69 5.56a1 1 0 0 0 1.66-1.12a8 8 0 1 1 13.3 0a1 1 0 0 0 .27 1.39a1 1 0 0 0 .56.17a1 1 0 0 0 .83-.44A9.9 9.9 0 0 0 22 14A10 10 0 0 0 12 4"></svg:path>`,
})
export class UilTachometerFastIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uilTachometerFastAltIcon],svg[uil-tachometer-fast-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 5a10 10 0 0 0-8.66 15a1 1 0 0 0 1.74-1A7.9 7.9 0 0 1 4 15a8 8 0 1 1 14.93 4a1 1 0 0 0 .37 1.37a1 1 0 0 0 1.36-.37A10 10 0 0 0 12 5m2.84 5.76l-1.55 1.54A2.9 2.9 0 0 0 12 12a3 3 0 1 0 3 3a2.9 2.9 0 0 0-.3-1.28l1.55-1.54a1 1 0 0 0 0-1.42a1 1 0 0 0-1.41 0M12 16a1 1 0 0 1 0-2a1 1 0 0 1 .7.28a1 1 0 0 1 .3.72a1 1 0 0 1-1 1"></svg:path>`,
})
export class UilTachometerFastAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uilTagIcon],svg[uil-tag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m21.12 10.71l-8.41-8.42A1 1 0 0 0 12 2H3a1 1 0 0 0-1 1v9a1 1 0 0 0 .29.71l8.42 8.41a3 3 0 0 0 4.24 0L21.12 15a3 3 0 0 0 0-4.24Zm-1.41 2.82l-6.18 6.17a1 1 0 0 1-1.41 0L4 11.59V4h7.59l8.12 8.12a1 1 0 0 1 .29.71a1 1 0 0 1-.29.7"></svg:path>`,
})
export class UilTagIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uilTagAltIcon],svg[uil-tag-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.5 6A1.5 1.5 0 1 0 9 7.5A1.5 1.5 0 0 0 7.5 6m13.62 4.71l-8.41-8.42A1 1 0 0 0 12 2H3a1 1 0 0 0-1 1v9a1 1 0 0 0 .29.71l8.42 8.41a3 3 0 0 0 4.24 0L21.12 15a3 3 0 0 0 0-4.24Zm-1.41 2.82l-6.18 6.17a1 1 0 0 1-1.41 0L4 11.59V4h7.59l8.12 8.12a1 1 0 0 1 .29.71a1 1 0 0 1-.29.7"></svg:path>`,
})
export class UilTagAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uilTapeIcon],svg[uil-tape-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.5 7a4 4 0 1 0 4 4a4 4 0 0 0-4-4m0 6a2 2 0 1 1 2-2a2 2 0 0 1-2 2m1-10h-2a7 7 0 0 0-7 7v3h-1a1 1 0 0 0 0 2h1v2h-4a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-1h12a7 7 0 0 0 7-7v-2a7 7 0 0 0-7-7m5 9a5 5 0 0 1-5 5h-7v-7a5 5 0 0 1 5-5h2a5 5 0 0 1 5 5Z"></svg:path>`,
})
export class UilTapeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uilTaxiIcon],svg[uil-taxi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.38 14.58a1 1 0 0 0-.58-.06a.6.6 0 0 0-.18.06a.8.8 0 0 0-.18.09l-.15.12a1.05 1.05 0 0 0-.29.71a1 1 0 0 0 .29.71a1.2 1.2 0 0 0 .33.22a1 1 0 0 0 1.09-.22a1.2 1.2 0 0 0 .21-.33a.84.84 0 0 0 .08-.38a1.05 1.05 0 0 0-.29-.71a.9.9 0 0 0-.33-.21m2.62-3.9V7.5a3 3 0 0 0-3-3h-.78l-.77-2.32a1 1 0 0 0-.95-.68h-5a1 1 0 0 0-.95.68L7.78 4.5H7a3 3 0 0 0-3 3v3.18a3 3 0 0 0-2 2.82v6a1 1 0 0 0 1 1h1v1a1 1 0 0 0 2 0v-1h12v1a1 1 0 0 0 2 0v-1h1a1 1 0 0 0 1-1v-6a3 3 0 0 0-2-2.82M10.22 3.5h3.56l.33 1H9.89ZM6 7.5a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v3H6Zm14 11H4v-5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1ZM6.62 14.58a1 1 0 0 0-.33.21a1.05 1.05 0 0 0-.29.71a1 1 0 0 0 1.38.93a1.2 1.2 0 0 0 .33-.22A1 1 0 0 0 8 15.5a1.05 1.05 0 0 0-.29-.71a1 1 0 0 0-1.09-.21M13 14.5h-2a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2"></svg:path>`,
})
export class UilTaxiIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uilTearIcon],svg[uil-tear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.56 2.17a1 1 0 0 0-1.12 0c-.3.2-7.19 5-7.19 12.08a7.75 7.75 0 0 0 15.5 0c0-7.2-6.9-11.89-7.19-12.08M12 20a5.76 5.76 0 0 1-5.75-5.75c0-5 4.21-8.77 5.75-10c1.55 1.21 5.75 5 5.75 10A5.76 5.76 0 0 1 12 20"></svg:path>`,
})
export class UilTearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uilTelegramIcon],svg[uil-telegram-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.994 2a10 10 0 1 0 10 10a10 10 0 0 0-10-10m3.18 15.152a.705.705 0 0 1-1.002.352l-2.715-2.11l-1.742 1.608a.3.3 0 0 1-.285.039l.334-2.989l.01.009l.007-.059s4.885-4.448 5.084-4.637c.202-.189.135-.23.135-.23c.012-.23-.361 0-.361 0l-6.473 4.164l-2.695-.918s-.414-.148-.453-.475c-.041-.324.466-.5.466-.5l10.717-4.258s.881-.392.881.258Z"></svg:path>`,
})
export class UilTelegramIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uilTelegramAltIcon],svg[uil-telegram-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.265 2.428a2.05 2.05 0 0 0-2.078-.324L2.266 9.339a2.043 2.043 0 0 0 .104 3.818l3.625 1.261l2.02 6.682a1 1 0 0 0 .119.252c.008.012.019.02.027.033a1 1 0 0 0 .211.215l.07.05a1 1 0 0 0 .31.136l.013.001l.006.003a1 1 0 0 0 .203.02l.018-.003a1 1 0 0 0 .301-.052q.033-.014.064-.03a1 1 0 0 0 .205-.114l.152-.129l2.702-2.983l4.03 3.122a2.02 2.02 0 0 0 1.241.427a2.054 2.054 0 0 0 2.008-1.633l3.263-16.017a2.03 2.03 0 0 0-.693-1.97M9.37 14.736a1 1 0 0 0-.272.506l-.31 1.504l-.784-2.593l4.065-2.117Zm8.302 5.304l-4.763-3.69a1 1 0 0 0-1.353.12l-.866.955l.306-1.487l7.083-7.083a1 1 0 0 0-1.169-1.593L6.745 12.554L3.02 11.191L20.999 4Z"></svg:path>`,
})
export class UilTelegramAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uilTelescopeIcon],svg[uil-telescope-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m21.9 7.59l-1-3.87a3 3 0 0 0-3.71-2.12l-1.93.52a1 1 0 0 0-.71 1.23l.26 1L4.19 7.16a1 1 0 0 0-.71 1.22l.26 1l-1 .26a1 1 0 0 0 .25 2a1 1 0 0 0 .26 0l1-.27l.26 1a1 1 0 0 0 .46.6a1 1 0 0 0 .5.14a.8.8 0 0 0 .26 0L9 12.08v.42a2.9 2.9 0 0 0 .3 1.28l-5 5a1 1 0 0 0 1.41 1.42l5-5l.28.11v6.19a1 1 0 0 0 2 0v-6.18a3 3 0 0 0 .29-.12l5 5a1 1 0 1 0 1.41-1.42l-5-5A3.1 3.1 0 0 0 15 12.5v-2l1.35-.36l.25 1a1 1 0 0 0 1 .74h.26l1.93-.52a3 3 0 0 0 2.11-3.77M13 12.5a1 1 0 0 1-.28.69a1 1 0 0 1-.69.28a1 1 0 0 1-.7-.29a1 1 0 0 1-.29-.7v-1L13 11Zm-6.81-1.74l-.52-1.93l9.66-2.59l.26 1l.26 1Zm13.68-1.9a1 1 0 0 1-.61.47l-1 .26l-.78-2.9L17 4.76l-.26-1l1-.26a1 1 0 0 1 1.23.71l1 3.87a1 1 0 0 1-.1.78"></svg:path>`,
})
export class UilTelescopeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uilTemperatureIcon],svg[uil-temperature-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 15.28V5.5a1 1 0 0 0-2 0v9.78A2 2 0 0 0 10 17a2 2 0 0 0 4 0a2 2 0 0 0-1-1.72M16.5 13V5.5a4.5 4.5 0 0 0-9 0V13a6 6 0 0 0 3.21 9.83A7 7 0 0 0 12 23a6 6 0 0 0 4.5-10m-2 7.07a4 4 0 0 1-6.42-2.2a4 4 0 0 1 1.1-3.76a1 1 0 0 0 .3-.71V5.5a2.5 2.5 0 0 1 5 0v7.94a1 1 0 0 0 .3.71a4 4 0 0 1-.28 6Z"></svg:path>`,
})
export class UilTemperatureIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uilTemperatureEmptyIcon],svg[uil-temperature-empty-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 15a2 2 0 1 0 2 2a2 2 0 0 0-2-2m4.5-2V5.5a4.5 4.5 0 0 0-9 0V13a6 6 0 0 0 3.21 9.83A7 7 0 0 0 12 23a6 6 0 0 0 4.5-10m-2 7.07a4 4 0 0 1-5.32-6a1 1 0 0 0 .3-.71V5.5a2.5 2.5 0 0 1 5 0v7.94a1 1 0 0 0 .3.71a4 4 0 0 1-.28 6Z"></svg:path>`,
})
export class UilTemperatureEmptyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uilTemperatureHalfIcon],svg[uil-temperature-half-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 15.28V10.5a1 1 0 0 0-2 0v4.78A2 2 0 0 0 10 17a2 2 0 0 0 4 0a2 2 0 0 0-1-1.72M16.5 13V5.5a4.5 4.5 0 0 0-9 0V13a6 6 0 0 0 3.21 9.83A7 7 0 0 0 12 23a6 6 0 0 0 4.5-10m-2 7.07a4 4 0 0 1-5.32-6a1 1 0 0 0 .3-.71V5.5a2.5 2.5 0 0 1 5 0v7.94a1 1 0 0 0 .3.71a4 4 0 0 1-.28 6Z"></svg:path>`,
})
export class UilTemperatureHalfIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uilTemperatureMinusIcon],svg[uil-temperature-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 5.5a4.5 4.5 0 0 0-9 0V13a6 6 0 0 0 3.21 9.83a7 7 0 0 0 1.28.17A6 6 0 0 0 14 13Zm-2 14.61a4 4 0 0 1-5.32-6a1 1 0 0 0 .3-.71V5.5a2.5 2.5 0 0 1 5 0v7.94a1 1 0 0 0 .3.71a4 4 0 0 1-.28 6Zm-1.5-4.83V5.5a1 1 0 0 0-2 0v9.78a2 2 0 0 0-1 1.72a2 2 0 0 0 4 0a2 2 0 0 0-1-1.72m9-12.78h-3a1 1 0 0 0 0 2h3a1 1 0 0 0 0-2"></svg:path>`,
})
export class UilTemperatureMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uilTemperaturePlusIcon],svg[uil-temperature-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.5 15.28V5.5a1 1 0 0 0-2 0v9.78a2 2 0 0 0-1 1.72a2 2 0 0 0 4 0a2 2 0 0 0-1-1.72m9-12.78H19V2a1 1 0 0 0-2 0v.5h-.5a1 1 0 0 0 0 2h.5V5a1 1 0 0 0 2 0v-.5h.5a1 1 0 0 0 0-2m-5.5 3a4.5 4.5 0 0 0-9 0V13a6 6 0 0 0 3.21 9.83a7 7 0 0 0 1.28.17A6 6 0 0 0 14 13Zm-2 14.61a4 4 0 0 1-6.42-2.2a4 4 0 0 1 1.1-3.76a1 1 0 0 0 .3-.71V5.5a2.5 2.5 0 0 1 5 0v7.94a1 1 0 0 0 .3.71a4 4 0 0 1-.28 6Z"></svg:path>`,
})
export class UilTemperaturePlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uilTemperatureQuarterIcon],svg[uil-temperature-quarter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.5 13V5.5a4.5 4.5 0 0 0-9 0V13a6 6 0 0 0 3.21 9.83A7 7 0 0 0 12 23a6 6 0 0 0 4.5-10m-2 7.07a4 4 0 0 1-5.32-6a1 1 0 0 0 .3-.71V5.5a2.5 2.5 0 0 1 5 0v7.94a1 1 0 0 0 .3.71a4 4 0 0 1-.28 6ZM13 15.28V12.5a1 1 0 0 0-2 0v2.78A2 2 0 0 0 10 17a2 2 0 0 0 4 0a2 2 0 0 0-1-1.72"></svg:path>`,
})
export class UilTemperatureQuarterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uilTemperatureThreeQuarterIcon],svg[uil-temperature-three-quarter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 15.28V8.5a1 1 0 0 0-2 0v6.78A2 2 0 0 0 10 17a2 2 0 0 0 4 0a2 2 0 0 0-1-1.72M16.5 13V5.5a4.5 4.5 0 0 0-9 0V13a6 6 0 0 0 3.21 9.83A7 7 0 0 0 12 23a6 6 0 0 0 4.5-10m-2 7.07a4 4 0 0 1-5.32-6a1 1 0 0 0 .3-.71V5.5a2.5 2.5 0 0 1 5 0v7.94a1 1 0 0 0 .3.71a4 4 0 0 1-.28 6Z"></svg:path>`,
})
export class UilTemperatureThreeQuarterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uilTennisBallIcon],svg[uil-tennis-ball-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2a10 10 0 0 0-7.35 16.76l.09.1a10 10 0 0 0 14.52 0l.09-.1A10 10 0 0 0 12 2M5.61 16.79a7.93 7.93 0 0 1 0-9.58a6 6 0 0 1 0 9.58M12 20a7.9 7.9 0 0 1-5-1.77A8 8 0 0 0 7 5.77a7.95 7.95 0 0 1 10 0a8 8 0 0 0 0 12.46A7.9 7.9 0 0 1 12 20m6.39-3.21a6 6 0 0 1 0-9.58a7.93 7.93 0 0 1 0 9.58"></svg:path>`,
})
export class UilTennisBallIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uilTextIcon],svg[uil-text-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 6H7a1 1 0 0 0 0 2h4v9a1 1 0 0 0 2 0V8h4a1 1 0 0 0 0-2"></svg:path>`,
})
export class UilTextIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uilTextFieldsIcon],svg[uil-text-fields-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 6a1 1 0 0 0-1-1H3a1 1 0 0 0 0 2h5v11a1 1 0 0 0 2 0V7h5a1 1 0 0 0 1-1m5 5h-6a1 1 0 0 0 0 2h2v5a1 1 0 0 0 2 0v-5h2a1 1 0 0 0 0-2"></svg:path>`,
})
export class UilTextFieldsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uilTextSizeIcon],svg[uil-text-size-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 11H3a1 1 0 0 0 0 2h2v5a1 1 0 0 0 2 0v-5h2a1 1 0 0 0 0-2m12-6H9a1 1 0 0 0 0 2h5v11a1 1 0 0 0 2 0V7h5a1 1 0 0 0 0-2"></svg:path>`,
})
export class UilTextSizeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uilTextStrikeThroughIcon],svg[uil-text-strike-through-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 13H9a1 1 0 0 0 0 2h2v2a1 1 0 0 0 2 0v-2h2a1 1 0 0 0 0-2m2-7H7a1 1 0 0 0 0 2h4v2a1 1 0 0 0 2 0V8h4a1 1 0 0 0 0-2"></svg:path>`,
})
export class UilTextStrikeThroughIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uilThIcon],svg[uil-th-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 2H3a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1M11 20H4v-7h7Zm0-9H4V4h7Zm9 9h-7v-7h7Zm0-9h-7V4h7Z"></svg:path>`,
})
export class UilThIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uilThLargeIcon],svg[uil-th-large-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1m-9 16H5v-6h6Zm0-8H5V5h6Zm8 8h-6v-6h6Zm0-8h-6V5h6Z"></svg:path>`,
})
export class UilThLargeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uilThSlashIcon],svg[uil-th-slash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m22.71 21.29l-1-1l-6-6l-6-6l-6-6l-1-1a1 1 0 0 0-1.42 1.42l.71.7V21a1 1 0 0 0 1 1h17.59l.7.71a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42M4 5.41L6.59 8H4ZM8 20H4v-4h4Zm0-6H4v-4h4Zm2-2.59L12.59 14H10ZM14 20h-4v-4h4Zm2 0v-2.59L18.59 20ZM8.67 4H14v5a1 1 0 0 0 1 1h5v5.33a1 1 0 1 0 2 0V3a1 1 0 0 0-1-1H8.67a1 1 0 0 0 0 2M16 4h4v4h-4Z"></svg:path>`,
})
export class UilThSlashIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uilThermometerIcon],svg[uil-thermometer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16.29 6.29l-7 7a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0l7-7a1 1 0 1 0-1.42-1.42m4.25-2.83a5 5 0 0 0-7.08 0l-8.17 8.23a1 1 0 0 0-.29.7v5.19l-2.71 2.71a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0L6.42 19h5.19a1 1 0 0 0 .7-.29l8.23-8.17a5 5 0 0 0 0-7.08m-1.42 5.66L11.2 17H7v-4.2l7.88-7.92a3 3 0 0 1 4.24 4.24"></svg:path>`,
})
export class UilThermometerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uilThumbsDownIcon],svg[uil-thumbs-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 2H6.27a3 3 0 0 0-2.95 2.46l-1.27 7A3 3 0 0 0 5 15h4.56L9 16.43A4.13 4.13 0 0 0 12.89 22a1 1 0 0 0 .91-.59L16.65 15H19a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3m-4 11.79l-2.72 6.12a2.13 2.13 0 0 1-1.38-2.78l.53-1.43A2 2 0 0 0 9.56 13H5a1 1 0 0 1-.77-.36a1 1 0 0 1-.23-.82l1.27-7a1 1 0 0 1 1-.82H15ZM20 12a1 1 0 0 1-1 1h-2V4h2a1 1 0 0 1 1 1Z"></svg:path>`,
})
export class UilThumbsDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uilThumbsUpIcon],svg[uil-thumbs-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.3 10.08A3 3 0 0 0 19 9h-4.56L15 7.57A4.13 4.13 0 0 0 11.11 2a1 1 0 0 0-.91.59L7.35 9H5a3 3 0 0 0-3 3v7a3 3 0 0 0 3 3h12.73a3 3 0 0 0 2.95-2.46l1.27-7a3 3 0 0 0-.65-2.46M7 20H5a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1h2Zm13-7.82l-1.27 7a1 1 0 0 1-1 .82H9v-9.79l2.72-6.12a2.11 2.11 0 0 1 1.38 2.78l-.53 1.43a2 2 0 0 0 1.87 2.7H19a1 1 0 0 1 .77.36a1 1 0 0 1 .23.82"></svg:path>`,
})
export class UilThumbsUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uilThunderstormIcon],svg[uil-thunderstorm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.5 15h-2.27l1.45-2.5a1 1 0 1 0-1.74-1l-2.31 4a1 1 0 0 0 0 1a1 1 0 0 0 .87.5h2.27l-1.45 2.5a1 1 0 0 0 1.74 1l2.31-4a1 1 0 0 0 0-1a1 1 0 0 0-.87-.5m4.92-7.79a7 7 0 0 0-13.36 1.9A4 4 0 0 0 6 17a1 1 0 0 0 0-2a2 2 0 0 1 0-4a1 1 0 0 0 1-1a5 5 0 0 1 9.73-1.61a1 1 0 0 0 .78.66A3 3 0 0 1 17 15a1 1 0 0 0 0 2a5 5 0 0 0 1.42-9.79"></svg:path>`,
})
export class UilThunderstormIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uilThunderstormMoonIcon],svg[uil-thunderstorm-moon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.58 16.5h-1.26l.86-1.5a1 1 0 1 0-1.73-1l-1.73 3a1 1 0 0 0 .86 1.5h1.27L9 20a1 1 0 0 0 1.74 1l1.73-3a1 1 0 0 0 0-1a1 1 0 0 0-.89-.5M21.7 7.57a1 1 0 0 0-.93-.26a3.2 3.2 0 0 1-.66.08a3 3 0 0 1-3-3a3 3 0 0 1 .08-.65A1 1 0 0 0 16 2.53a4.93 4.93 0 0 0-3.83 4.21a6.2 6.2 0 0 0-1.67-.24a6 6 0 0 0-5.94 5.13a3.49 3.49 0 0 0-.34 6.62a1 1 0 1 0 .72-1.86a1.5 1.5 0 0 1 .56-2.89a1 1 0 0 0 1-1a4 4 0 0 1 4-4a3.9 3.9 0 0 1 2.18.66a4 4 0 0 1 1.57 2a1 1 0 0 0 .78.67a2.33 2.33 0 0 1 .25 4.53a1 1 0 0 0 .27 2a.8.8 0 0 0 .27 0A4.33 4.33 0 0 0 19 14.17a4.2 4.2 0 0 0-.49-2A4.94 4.94 0 0 0 22 8.5a1 1 0 0 0-.3-.93m-4.59 2.82a2.6 2.6 0 0 1-.42 0A4.6 4.6 0 0 0 16 10a6 6 0 0 0-1.82-2.28v-.37a3 3 0 0 1 1.05-2.28a5 5 0 0 0 4.23 4.23a3 3 0 0 1-2.35 1.09"></svg:path>`,
})
export class UilThunderstormMoonIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uilThunderstormSunIcon],svg[uil-thunderstorm-sun-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.58 16.5h-1.26l.86-1.5a1 1 0 1 0-1.73-1l-1.73 3a1 1 0 0 0 .86 1.5h1.27L9 20a1 1 0 0 0 1.74 1l1.73-3a1 1 0 0 0 0-1a1 1 0 0 0-.89-.5m9.42-9h-.8a4.3 4.3 0 0 0-.52-1.27l.56-.56a1 1 0 0 0-1.41-1.41l-.56.56A4.3 4.3 0 0 0 17 4.3v-.8a1 1 0 0 0-2 0v.8a4.3 4.3 0 0 0-1.27.52l-.56-.56a1 1 0 0 0-1.41 1.41l.56.57c-.09.15-.16.32-.24.48a6 6 0 0 0-1.58-.22a6 6 0 0 0-5.94 5.13a3.49 3.49 0 0 0-.34 6.62a1 1 0 1 0 .72-1.86a1.5 1.5 0 0 1 .56-2.89a1 1 0 0 0 1-1a4 4 0 0 1 7.78-1.29a1 1 0 0 0 .78.67a2.33 2.33 0 0 1 .25 4.53a1 1 0 0 0 .27 2a.8.8 0 0 0 .27 0a4.3 4.3 0 0 0 2.85-5.72l.13.13a1 1 0 0 0 .7.29a1 1 0 0 0 .71-.29a1 1 0 0 0 0-1.41l-.56-.56a4.3 4.3 0 0 0 .52-1.35h.8a1 1 0 0 0 0-2m-3.34 2.65a2.3 2.3 0 0 1-.6.41A4.2 4.2 0 0 0 16 10a6.1 6.1 0 0 0-2.09-2.49a2.4 2.4 0 0 1 .46-.7a2.43 2.43 0 0 1 3.3 0a2.37 2.37 0 0 1 0 3.3Z"></svg:path>`,
})
export class UilThunderstormSunIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uilTicketIcon],svg[uil-ticket-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 10a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-2a1 1 0 0 0-1-1m12 1a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1a1 1 0 0 1 0 2a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1a1 1 0 0 1 0-2m-1-1.82a3 3 0 0 0 0 5.64V17H10a1 1 0 0 0-2 0H4v-2.18a3 3 0 0 0 0-5.64V7h4a1 1 0 0 0 2 0h10Z"></svg:path>`,
})
export class UilTicketIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uilTimesIcon],svg[uil-times-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13.41 12l4.3-4.29a1 1 0 1 0-1.42-1.42L12 10.59l-4.29-4.3a1 1 0 0 0-1.42 1.42l4.3 4.29l-4.3 4.29a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0l4.29-4.3l4.29 4.3a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42Z"></svg:path>`,
})
export class UilTimesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uilTimesCircleIcon],svg[uil-times-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.71 8.29a1 1 0 0 0-1.42 0L12 10.59l-2.29-2.3a1 1 0 0 0-1.42 1.42l2.3 2.29l-2.3 2.29a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0l2.29-2.3l2.29 2.3a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42L13.41 12l2.3-2.29a1 1 0 0 0 0-1.42m3.36-3.36A10 10 0 1 0 4.93 19.07A10 10 0 1 0 19.07 4.93m-1.41 12.73A8 8 0 1 1 20 12a7.95 7.95 0 0 1-2.34 5.66"></svg:path>`,
})
export class UilTimesCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uilTimesSquareIcon],svg[uil-times-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.71 8.29a1 1 0 0 0-1.42 0L12 10.59l-2.29-2.3a1 1 0 0 0-1.42 1.42l2.3 2.29l-2.3 2.29a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0l2.29-2.3l2.29 2.3a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42L13.41 12l2.3-2.29a1 1 0 0 0 0-1.42M19 2H5a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3m1 17a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1Z"></svg:path>`,
})
export class UilTimesSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uilToggleOffIcon],svg[uil-toggle-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 8.5a3.5 3.5 0 1 0 3.5 3.5A3.5 3.5 0 0 0 8 8.5m0 5A1.5 1.5 0 1 1 9.5 12A1.5 1.5 0 0 1 8 13.5M16 5H8a7 7 0 0 0 0 14h8a7 7 0 0 0 0-14m0 12H8A5 5 0 0 1 8 7h8a5 5 0 0 1 0 10"></svg:path>`,
})
export class UilToggleOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uilToggleOnIcon],svg[uil-toggle-on-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 8.5a3.5 3.5 0 1 0 3.5 3.5A3.5 3.5 0 0 0 16 8.5m0 5a1.5 1.5 0 1 1 1.5-1.5a1.5 1.5 0 0 1-1.5 1.5M16 5H8a7 7 0 0 0 0 14h8a7 7 0 0 0 0-14m0 12H8A5 5 0 0 1 8 7h8a5 5 0 0 1 0 10"></svg:path>`,
})
export class UilToggleOnIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uilToiletPaperIcon],svg[uil-toilet-paper-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.26 20.357a7.52 7.52 0 0 1-1.76-4.905v-7.46c0-3.308-2.243-6-5-6h-9c-2.757 0-5 2.692-5 6s2.243 6 5 6h3v1.46a9.53 9.53 0 0 0 2.24 6.206a1 1 0 0 0 .76.35h9a1 1 0 0 0 .76-1.651M6.5 11.993c-1.654 0-3-1.795-3-4s1.346-4 3-4s3 1.794 3 4s-1.346 4-3 4m6.479 8.014a7.58 7.58 0 0 1-1.479-4.555v-7c0-.028-.014-.052-.016-.08c.007-.126.016-.251.016-.38a6.68 6.68 0 0 0-1.284-4H15.5c1.654 0 3 1.795 3 4v7.46a9.7 9.7 0 0 0 1.118 4.555ZM6.5 6.743a1.146 1.146 0 0 0-1 1.25a1.146 1.146 0 0 0 1 1.25a1.146 1.146 0 0 0 1-1.25a1.146 1.146 0 0 0-1-1.25"></svg:path>`,
})
export class UilToiletPaperIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uilTopArrowFromTopIcon],svg[uil-top-arrow-from-top-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 20H5a1 1 0 0 0 0 2h14a1 1 0 0 0 0-2M8.71 7.71L11 5.41V17a1 1 0 0 0 2 0V5.41l2.29 2.3a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42l-4-4a1 1 0 0 0-.33-.21a1 1 0 0 0-.76 0a1 1 0 0 0-.33.21l-4 4a1 1 0 1 0 1.42 1.42"></svg:path>`,
})
export class UilTopArrowFromTopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uilTopArrowToTopIcon],svg[uil-top-arrow-to-top-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.71 6.29a1 1 0 0 0-.33-.21a1 1 0 0 0-.76 0a1 1 0 0 0-.33.21l-4 4a1 1 0 1 0 1.42 1.42L11 9.41V21a1 1 0 0 0 2 0V9.41l2.29 2.3a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42ZM19 2H5a1 1 0 0 0 0 2h14a1 1 0 0 0 0-2"></svg:path>`,
})
export class UilTopArrowToTopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uilTornadoIcon],svg[uil-tornado-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 21H8a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2m1-4H6a1 1 0 0 0 0 2h5a1 1 0 0 0 0-2m7-15a1 1 0 0 0-1-1H3a1 1 0 0 0 0 2h14a1 1 0 0 0 1-1m3 3H6a1 1 0 0 0 0 2h15a1 1 0 0 0 0-2m-2 4h-9a1 1 0 0 0 0 2h9a1 1 0 0 0 0-2m-5 4H8a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2"></svg:path>`,
})
export class UilTornadoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uilTrademarkIcon],svg[uil-trademark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.5 7h-6a1 1 0 0 0 0 2h2v7a1 1 0 0 0 2 0V9h2a1 1 0 0 0 0-2m11.92.62a1 1 0 0 0-.54-.54a1 1 0 0 0-.76 0a1 1 0 0 0-.33.21L17 10.09l-2.79-2.8a1 1 0 0 0-.33-.21a1 1 0 0 0-.76 0a1 1 0 0 0-.54.54a1 1 0 0 0-.08.38v8a1 1 0 0 0 2 0v-5.59l1.79 1.8a1 1 0 0 0 1.42 0l1.79-1.8V16a1 1 0 0 0 2 0V8a1 1 0 0 0-.08-.38"></svg:path>`,
})
export class UilTrademarkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uilTrademarkCircleIcon],svg[uil-trademark-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 9H7a1 1 0 0 0 0 2h.5v3a1 1 0 0 0 2 0v-3h.5a1 1 0 0 0 0-2m7.38.08a1 1 0 0 0-1.09.21L15 10.59l-1.29-1.3a1 1 0 0 0-1.09-.21A1 1 0 0 0 12 10v4a1 1 0 0 0 2 0v-1.59l.29.3a1 1 0 0 0 1.42 0l.29-.3V14a1 1 0 0 0 2 0v-4a1 1 0 0 0-.62-.92M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2m0 18a8 8 0 1 1 8-8a8 8 0 0 1-8 8"></svg:path>`,
})
export class UilTrademarkCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uilTrafficBarrierIcon],svg[uil-traffic-barrier-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 5h-1V4a1 1 0 0 0-2 0v1H6V4a1 1 0 0 0-2 0v1H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h1v7a1 1 0 0 0 2 0v-7h12v7a1 1 0 0 0 2 0v-7h1a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1M4 9.52V7h2.52ZM5.34 11l4-4h3.33l-4 4Zm6.15 0l4-4h3.18l-4 4ZM20 11h-2.51L20 8.49Z"></svg:path>`,
})
export class UilTrafficBarrierIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uilTrafficLightIcon],svg[uil-traffic-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 5.5A1.5 1.5 0 1 0 13.5 7A1.5 1.5 0 0 0 12 5.5m10 3h-.54a6 6 0 0 0 1.54-4a1 1 0 0 0-1-1h-4.18a3 3 0 0 0-2.82-2H9a3 3 0 0 0-2.82 2H2a1 1 0 0 0-1 1a6 6 0 0 0 1.54 4H2a1 1 0 0 0-1 1a6 6 0 0 0 1.54 4H2a1 1 0 0 0-1 1a6 6 0 0 0 5.16 5.93A3 3 0 0 0 9 22.5h6a3 3 0 0 0 2.84-2.07A6 6 0 0 0 23 14.5a1 1 0 0 0-1-1h-.54a6 6 0 0 0 1.54-4a1 1 0 0 0-1-1M6 18.37a4 4 0 0 1-2.87-2.87H6Zm0-5a4 4 0 0 1-2.87-2.87H6Zm0-5a4.1 4.1 0 0 1-1.83-1a4.1 4.1 0 0 1-1-1.83H6ZM16 19.5a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-15a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1Zm3.83-2.17a4.1 4.1 0 0 1-1.83 1V15.5h2.87a4.1 4.1 0 0 1-1.04 1.83m0-5a4.1 4.1 0 0 1-1.83 1V10.5h2.87a4.1 4.1 0 0 1-1.04 1.83m0-5a4.1 4.1 0 0 1-1.83 1V5.5h2.87a4.1 4.1 0 0 1-1.04 1.83M12 15.5a1.5 1.5 0 1 0 1.5 1.5a1.5 1.5 0 0 0-1.5-1.5m0-5a1.5 1.5 0 1 0 1.5 1.5a1.5 1.5 0 0 0-1.5-1.5"></svg:path>`,
})
export class UilTrafficLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uilTransactionIcon],svg[uil-transaction-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 2H10a3 3 0 0 0-3 3v7a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3m1 10a1 1 0 0 1-1 1H10a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1Zm-3.5-4a1.5 1.5 0 0 0-1 .39a1.5 1.5 0 1 0 0 2.22a1.5 1.5 0 1 0 1-2.61M16 17a1 1 0 0 0-1 1v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-4h1a1 1 0 0 0 0-2H3v-1a1 1 0 0 1 1-1a1 1 0 0 0 0-2a3 3 0 0 0-3 3v7a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-1a1 1 0 0 0-1-1M6 18h1a1 1 0 0 0 0-2H6a1 1 0 0 0 0 2"></svg:path>`,
})
export class UilTransactionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uilTrashIcon],svg[uil-trash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 6h-4V5a3 3 0 0 0-3-3h-2a3 3 0 0 0-3 3v1H4a1 1 0 0 0 0 2h1v11a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8h1a1 1 0 0 0 0-2M10 5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v1h-4Zm7 14a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V8h10Z"></svg:path>`,
})
export class UilTrashIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uilTrashAltIcon],svg[uil-trash-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 18a1 1 0 0 0 1-1v-6a1 1 0 0 0-2 0v6a1 1 0 0 0 1 1M20 6h-4V5a3 3 0 0 0-3-3h-2a3 3 0 0 0-3 3v1H4a1 1 0 0 0 0 2h1v11a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8h1a1 1 0 0 0 0-2M10 5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v1h-4Zm7 14a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V8h10Zm-3-1a1 1 0 0 0 1-1v-6a1 1 0 0 0-2 0v6a1 1 0 0 0 1 1"></svg:path>`,
})
export class UilTrashAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uilTreesIcon],svg[uil-trees-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.5 5a4.86 4.86 0 0 0-2.5.69A6 6 0 0 0 2.5 8v4a6 6 0 0 0 5 5.91V21a1 1 0 0 0 2 0v-3.09a6.1 6.1 0 0 0 2.78-1.26a5 5 0 0 0 3.22 2.25V21a1 1 0 0 0 2 0v-2.1a5 5 0 0 0 4-4.9v-4a5 5 0 0 0-5-5m-5 5v4a5 5 0 0 0 .06.57a4 4 0 0 1-2.06 1.3V13a1 1 0 0 0-2 0v2.86a4 4 0 0 1-3-3.86V8a4 4 0 0 1 6.83-2.84a3.94 3.94 0 0 1 1.06 2A5 5 0 0 0 11.5 10m8 4a3 3 0 0 1-2 2.82V13a1 1 0 0 0-2 0v3.82a3 3 0 0 1-2-2.82v-4a3 3 0 0 1 6 0Z"></svg:path>`,
})
export class UilTreesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uilTriangleIcon],svg[uil-triangle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m21.87 19.29l-9-15.58a1 1 0 0 0-1.74 0l-9 15.58a1 1 0 0 0 0 1a1 1 0 0 0 .87.5h18a1 1 0 0 0 .87-.5a1 1 0 0 0 0-1m-17.14-.5L12 6.21l7.27 12.58Z"></svg:path>`,
})
export class UilTriangleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uilTrophyIcon],svg[uil-trophy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 4h-3V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v1H3a1 1 0 0 0-1 1v3a4 4 0 0 0 4 4h1.54A6 6 0 0 0 11 13.91V16h-1a3 3 0 0 0-3 3v2a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-2a3 3 0 0 0-3-3h-1v-2.09A6 6 0 0 0 16.46 12H18a4 4 0 0 0 4-4V5a1 1 0 0 0-1-1M6 10a2 2 0 0 1-2-2V6h2v2a6 6 0 0 0 .35 2Zm8 8a1 1 0 0 1 1 1v1H9v-1a1 1 0 0 1 1-1Zm2-10a4 4 0 0 1-8 0V4h8Zm4 0a2 2 0 0 1-2 2h-.35A6 6 0 0 0 18 8V6h2Z"></svg:path>`,
})
export class UilTrophyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uilTrowelIcon],svg[uil-trowel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.12 2.88a3.08 3.08 0 0 0-4.24 0l-2.42 2.41a3 3 0 0 0-.57 3.41l-2.15 2.15l-2-2a3 3 0 0 0-5 1.17l-2.66 8a3 3 0 0 0 .72 3.07A3 3 0 0 0 5 22a2.9 2.9 0 0 0 1-.16l8-2.66a3 3 0 0 0 1.17-5l-2-2l2.15-2.15a3 3 0 0 0 3.41-.57l2.41-2.42a3 3 0 0 0-.02-4.16M13.7 15.63a1 1 0 0 1-.4 1.65L5.32 20a1 1 0 0 1-1-.25a1 1 0 0 1-.25-1l2.67-8a1 1 0 0 1 .7-.75a1 1 0 0 1 .23 0a1 1 0 0 1 .7.29l2 2l-.87.86a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0l.86-.87Zm6-9.92l-2.41 2.41a1 1 0 0 1-1.7-.71a1 1 0 0 1 .29-.7l2.41-2.42a1 1 0 0 1 1.42 0a1 1 0 0 1 0 1.42Z"></svg:path>`,
})
export class UilTrowelIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uilTruckIcon],svg[uil-truck-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 12.5v5a1 1 0 0 0 1 1h1a3 3 0 0 0 6 0h6a3 3 0 0 0 6 0h1a1 1 0 0 0 1-1v-12a3 3 0 0 0-3-3h-9a3 3 0 0 0-3 3v2H6a3 3 0 0 0-2.4 1.2l-2.4 3.2a.6.6 0 0 0-.07.14l-.06.11a1 1 0 0 0-.07.35m16 6a1 1 0 1 1 1 1a1 1 0 0 1-1-1m-7-13a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v11h-.78a3 3 0 0 0-4.44 0H10Zm-2 6H4l1.2-1.6a1 1 0 0 1 .8-.4h2Zm-3 7a1 1 0 1 1 1 1a1 1 0 0 1-1-1m-2-5h5v2.78a3 3 0 0 0-4.22.22H3Z"></svg:path>`,
})
export class UilTruckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uilTruckLoadingIcon],svg[uil-truck-loading-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 16h-2.18a3 3 0 0 0 .18-1v-5a3 3 0 0 0-3-3h-6a3 3 0 0 0-3 3v5a3 3 0 0 0 .18 1H7a1 1 0 0 1-1-1V5a3 3 0 0 0-3-3H2a1 1 0 0 0 0 2h1a1 1 0 0 1 1 1v10a3 3 0 0 0 2.22 2.88a3 3 0 1 0 5.6.12h3.36a3 3 0 1 0 5.64 0H22a1 1 0 0 0 0-2M9 20a1 1 0 1 1 1-1a1 1 0 0 1-1 1m2-4a1 1 0 0 1-1-1v-5a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1Zm7 4a1 1 0 1 1 1-1a1 1 0 0 1-1 1"></svg:path>`,
})
export class UilTruckLoadingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uilTumblrIcon],svg[uil-tumblr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.79 18a4.7 4.7 0 0 1-1.62.35a1.75 1.75 0 0 1-1.92-2v-6.23h4v-3h-4V2h-2.92a.15.15 0 0 0-.14.15a6.11 6.11 0 0 1-3.94 5.39v2.58h2v6.54c0 2.23 1.65 5.41 6 5.34c1.47 0 3.11-.64 3.47-1.17Z"></svg:path>`,
})
export class UilTumblrIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uilTumblrAltIcon],svg[uil-tumblr-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m17.434 20.508l-.962-2.853a1 1 0 0 0-1.38-.583a3.8 3.8 0 0 1-1.208.249a.94.94 0 0 1-.66-.165a1.2 1.2 0 0 1-.239-.808V12h3.017a1 1 0 0 0 1-1V7.095a1 1 0 0 0-1-1H13V2a1 1 0 0 0-1-1H9.07a1.15 1.15 0 0 0-1.137 1.04a5.09 5.09 0 0 1-3.28 4.558a1 1 0 0 0-.662.94v3.585a1 1 0 0 0 1 1h1.025v4.535a6.4 6.4 0 0 0 1.886 4.478A6.9 6.9 0 0 0 12.877 23h.163c1.546-.026 3.618-.648 4.273-1.608a1 1 0 0 0 .12-.883m-4.427.49a4.87 4.87 0 0 1-3.702-1.288a4.37 4.37 0 0 1-1.29-3.052v-5.535a1 1 0 0 0-1-1H5.992V8.206A6.95 6.95 0 0 0 9.81 3H11v4.095a1 1 0 0 0 1 1h3.002V10h-3.017a1 1 0 0 0-1 1v5.365a3.08 3.08 0 0 0 .857 2.235a2.77 2.77 0 0 0 2.096.72a6 6 0 0 0 .947-.113l.425 1.26a5.9 5.9 0 0 1-2.303.531"></svg:path>`,
})
export class UilTumblrAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uilTumblrSquareIcon],svg[uil-tumblr-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2v20h20V2Zm11.57 15.85a3.4 3.4 0 0 1-3.75-3.33v-4.08H8.56V8.83A3.83 3.83 0 0 0 11 5.47a.09.09 0 0 1 .09-.09h1.82v3.17h2.5v1.89h-2.49v3.89a1.11 1.11 0 0 0 1.2 1.23a3 3 0 0 0 1-.22l.6 1.78a3.34 3.34 0 0 1-2.15.73"></svg:path>`,
})
export class UilTumblrSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uilTvRetroIcon],svg[uil-tv-retro-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 6h-3.59l2.3-2.29a1 1 0 1 0-1.42-1.42L12 5.54l-1.17-2a1 1 0 1 0-1.74 1L10 6H6a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3v1a1 1 0 0 0 2 0v-1h8v1a1 1 0 0 0 2 0v-1a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3m1 11a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1Z"></svg:path>`,
})
export class UilTvRetroIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uilTvRetroSlashIcon],svg[uil-tv-retro-slash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.62 7.92A1 1 0 0 0 12 8h6a1 1 0 0 1 1 1v5.34a1 1 0 1 0 2 0V9a3 3 0 0 0-3-3h-3.59l2.3-2.29a1 1 0 1 0-1.42-1.42l-4 4a1 1 0 0 0-.21.33a1 1 0 0 0 0 .76a1 1 0 0 0 .54.54m10.09 12.37l-18-18a1 1 0 0 0-1.42 1.42l2.54 2.53A3 3 0 0 0 3 9v8a3 3 0 0 0 3 3v1a1 1 0 0 0 2 0v-1h8v1a1 1 0 0 0 2 0v-1a3 3 0 0 0 .53-.06l1.76 1.77a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42M6 18a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h.59l10 10Z"></svg:path>`,
})
export class UilTvRetroSlashIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uilTwitterIcon],svg[uil-twitter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 5.8a8.5 8.5 0 0 1-2.36.64a4.13 4.13 0 0 0 1.81-2.27a8.2 8.2 0 0 1-2.61 1a4.1 4.1 0 0 0-7 3.74a11.64 11.64 0 0 1-8.45-4.29a4.16 4.16 0 0 0-.55 2.07a4.09 4.09 0 0 0 1.82 3.41a4.05 4.05 0 0 1-1.86-.51v.05a4.1 4.1 0 0 0 3.3 4a4 4 0 0 1-1.1.17a5 5 0 0 1-.77-.07a4.11 4.11 0 0 0 3.83 2.84A8.22 8.22 0 0 1 3 18.34a8 8 0 0 1-1-.06a11.57 11.57 0 0 0 6.29 1.85A11.59 11.59 0 0 0 20 8.45v-.53a8.4 8.4 0 0 0 2-2.12"></svg:path>`,
})
export class UilTwitterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uilTwitterAltIcon],svg[uil-twitter-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.991 3.95a1 1 0 0 0-1.51-.86a7.5 7.5 0 0 1-1.874.794a5.15 5.15 0 0 0-3.374-1.242a5.23 5.23 0 0 0-5.223 5.063a11.03 11.03 0 0 1-6.814-3.924a1.01 1.01 0 0 0-.857-.365a1 1 0 0 0-.785.5a5.28 5.28 0 0 0-.242 4.769l-.002.001a1.04 1.04 0 0 0-.496.89a3 3 0 0 0 .027.439a5.2 5.2 0 0 0 1.568 3.312a1 1 0 0 0-.066.77a5.2 5.2 0 0 0 2.362 2.922a7.5 7.5 0 0 1-3.59.448A1 1 0 0 0 1.45 19.3a12.94 12.94 0 0 0 7.01 2.061a12.79 12.79 0 0 0 12.465-9.363a12.8 12.8 0 0 0 .535-3.646l-.001-.2a5.77 5.77 0 0 0 1.532-4.202m-3.306 3.212a1 1 0 0 0-.234.702c.01.165.009.331.009.488a10.8 10.8 0 0 1-.454 3.08a10.685 10.685 0 0 1-10.546 7.93a11 11 0 0 1-2.55-.301a9.5 9.5 0 0 0 2.942-1.564a1 1 0 0 0-.602-1.786a3.2 3.2 0 0 1-2.214-.935q.224-.042.445-.105a1 1 0 0 0-.08-1.943a3.2 3.2 0 0 1-2.25-1.726a5 5 0 0 0 .545.046a1.02 1.02 0 0 0 .984-.696a1 1 0 0 0-.4-1.137a3.2 3.2 0 0 1-1.425-2.673q0-.1.006-.198a13 13 0 0 0 8.21 3.48a1.02 1.02 0 0 0 .817-.36a1 1 0 0 0 .206-.867a3.2 3.2 0 0 1-.087-.729a3.23 3.23 0 0 1 3.226-3.226a3.18 3.18 0 0 1 2.345 1.02a.99.99 0 0 0 .921.298a9 9 0 0 0 1.212-.322a6.7 6.7 0 0 1-1.026 1.524"></svg:path>`,
})
export class UilTwitterAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uilUmbrellaIcon],svg[uil-umbrella-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 11.24a.2.2 0 0 1 0-.08v-.19c0-.23-.06-.46-.1-.69a1 1 0 0 1 0-.16c-.05-.25-.12-.49-.19-.73a8.91 8.91 0 0 0-5.86-5.87h-.08c-.22-.07-.45-.13-.68-.18h-.18a5 5 0 0 0-.55-.08h-.24V3a1 1 0 0 0-2 0v.06a9 9 0 0 0-1 .18a5 5 0 0 0-.62.16h-.13c-.25.08-.48.17-.72.26a8.93 8.93 0 0 0-5.23 5.62a.3.3 0 0 0 0 .08a6 6 0 0 0-.19.72v.16q-.08.36-.12.75s0 .07 0 .11v.9a1 1 0 0 0 1 1h7v6a1 1 0 0 1-2 0a1 1 0 0 0-2 0a3 3 0 0 0 6 0v-6h7a1 1 0 0 0 1-1c-.11-.26-.11-.51-.11-.76M8 11H5.08v-.11c0-.04 0-.28.08-.41s0-.13 0-.19s.08-.32.13-.48v-.08A7 7 0 0 1 9.1 5.64A16.1 16.1 0 0 0 8 11m2 0c.19-3.91 1.44-6 2-6s1.79 2.09 2 6Zm6 0a16.1 16.1 0 0 0-1.1-5.36a7 7 0 0 1 3.73 4.12a5 5 0 0 1 .15.53a1 1 0 0 0 0 .15c0 .14.06.29.08.43s0 .07 0 .11Z"></svg:path>`,
})
export class UilUmbrellaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uilUnamusedIcon],svg[uil-unamused-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14.66 13.56l-4.19 1.5A1 1 0 0 0 10.8 17a1 1 0 0 0 .34-.06l4.2-1.5a1 1 0 1 0-.68-1.88m-4-3a1 1 0 0 0 0-1.41a3.08 3.08 0 0 0-4.24 0a1 1 0 1 0 1.41 1.41a1 1 0 0 1 1.42 0a1 1 0 0 0 1.41 0m7-1.41a3.08 3.08 0 0 0-4.24 0a1 1 0 0 0 1.41 1.41a1 1 0 0 1 1.42 0a1 1 0 0 0 1.41 0a1 1 0 0 0-.04-1.43ZM12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2m0 18a8 8 0 1 1 8-8a8 8 0 0 1-8 8"></svg:path>`,
})
export class UilUnamusedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uilUnderlineIcon],svg[uil-underline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 15.5a5 5 0 0 0 5-5v-5a1 1 0 0 0-2 0v5a3 3 0 0 1-6 0v-5a1 1 0 0 0-2 0v5a5 5 0 0 0 5 5m5 2H7a1 1 0 0 0 0 2h10a1 1 0 0 0 0-2"></svg:path>`,
})
export class UilUnderlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uilUniversityIcon],svg[uil-university-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 10a1 1 0 0 0 1-1V6a1 1 0 0 0-.684-.948l-9-3a1 1 0 0 0-.632 0l-9 3A1 1 0 0 0 2 6v3a1 1 0 0 0 1 1h1v7.184A2.995 2.995 0 0 0 2 20v2a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-2a2.995 2.995 0 0 0-2-2.816V10Zm-1 11H4v-1a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1ZM6 17v-7h2v7Zm4 0v-7h4v7Zm6 0v-7h2v7ZM4 8V6.72l8-2.666l8 2.667V8Z"></svg:path>`,
})
export class UilUniversityIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uilUnlockIcon],svg[uil-unlock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 9H9V7a3 3 0 0 1 5.12-2.13a3.1 3.1 0 0 1 .78 1.38a1 1 0 1 0 1.94-.5a5.1 5.1 0 0 0-1.31-2.29A5 5 0 0 0 7 7v2a3 3 0 0 0-3 3v7a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-7a3 3 0 0 0-3-3m1 10a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1Z"></svg:path>`,
})
export class UilUnlockIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uilUnlockAltIcon],svg[uil-unlock-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 13a1 1 0 0 0-1 1v3a1 1 0 0 0 2 0v-3a1 1 0 0 0-1-1m5-4H9V7a3 3 0 0 1 5.12-2.13a3.1 3.1 0 0 1 .78 1.38a1 1 0 1 0 1.94-.5a5.1 5.1 0 0 0-1.31-2.29A5 5 0 0 0 7 7v2a3 3 0 0 0-3 3v7a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-7a3 3 0 0 0-3-3m1 10a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1Z"></svg:path>`,
})
export class UilUnlockAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uilUploadIcon],svg[uil-upload-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.71 7.71L11 5.41V15a1 1 0 0 0 2 0V5.41l2.29 2.3a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42l-4-4a1 1 0 0 0-.33-.21a1 1 0 0 0-.76 0a1 1 0 0 0-.33.21l-4 4a1 1 0 1 0 1.42 1.42M21 12a1 1 0 0 0-1 1v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-6a1 1 0 0 0-2 0v6a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-6a1 1 0 0 0-1-1"></svg:path>`,
})
export class UilUploadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uilUploadAltIcon],svg[uil-upload-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.71 6.71L11 5.41V17a1 1 0 0 0 2 0V5.41l1.29 1.3a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42l-3-3a1 1 0 0 0-1.42 0l-3 3a1 1 0 0 0 1.42 1.42M18 9h-2a1 1 0 0 0 0 2h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1h2a1 1 0 0 0 0-2H6a3 3 0 0 0-3 3v7a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-7a3 3 0 0 0-3-3"></svg:path>`,
})
export class UilUploadAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uilUsdCircleIcon],svg[uil-usd-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 9h4a1 1 0 0 0 0-2h-2V6a1 1 0 0 0-2 0v1a3 3 0 0 0 0 6h2a1 1 0 0 1 0 2H9a1 1 0 0 0 0 2h2v1a1 1 0 0 0 2 0v-1a3 3 0 0 0 0-6h-2a1 1 0 0 1 0-2m1-8a11 11 0 1 0 11 11A11 11 0 0 0 12 1m0 20a9 9 0 1 1 9-9a9 9 0 0 1-9 9"></svg:path>`,
})
export class UilUsdCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uilUsdSquareIcon],svg[uil-usd-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 9h4a1 1 0 0 0 0-2h-2V6a1 1 0 0 0-2 0v1a3 3 0 0 0 0 6h2a1 1 0 0 1 0 2H9a1 1 0 0 0 0 2h2v1a1 1 0 0 0 2 0v-1a3 3 0 0 0 0-6h-2a1 1 0 0 1 0-2m8-7H5a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3m1 17a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1Z"></svg:path>`,
})
export class UilUsdSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uilUserIcon],svg[uil-user-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.71 12.71a6 6 0 1 0-7.42 0a10 10 0 0 0-6.22 8.18a1 1 0 0 0 2 .22a8 8 0 0 1 15.9 0a1 1 0 0 0 1 .89h.11a1 1 0 0 0 .88-1.1a10 10 0 0 0-6.25-8.19M12 12a4 4 0 1 1 4-4a4 4 0 0 1-4 4"></svg:path>`,
})
export class UilUserIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uilUserArrowsIcon],svg[uil-user-arrows-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.64 15.772a3.47 3.47 0 0 0 .86-2.272a3.5 3.5 0 0 0-7 0a3.47 3.47 0 0 0 .86 2.272A4.99 4.99 0 0 0 13 20a1 1 0 0 0 2 0a3 3 0 0 1 6 0a1 1 0 0 0 2 0a4.99 4.99 0 0 0-2.36-4.228M18 15a1.5 1.5 0 1 1 1.5-1.5A1.5 1.5 0 0 1 18 15M6.793 7.707l2 2a1 1 0 0 0 1.414-1.414L9.914 8h4.172l-.293.293a1 1 0 1 0 1.414 1.414l2-2a1.004 1.004 0 0 0 0-1.414l-2-2a1 1 0 0 0-1.414 1.414l.293.293H9.914l.293-.293a1 1 0 0 0-1.414-1.414l-2 2a1.004 1.004 0 0 0 0 1.414m1.847 8.065A3.47 3.47 0 0 0 9.5 13.5a3.5 3.5 0 0 0-7 0a3.47 3.47 0 0 0 .86 2.272A4.99 4.99 0 0 0 1 20a1 1 0 0 0 2 0a3 3 0 0 1 6 0a1 1 0 0 0 2 0a4.99 4.99 0 0 0-2.36-4.228M6 15a1.5 1.5 0 1 1 1.5-1.5A1.5 1.5 0 0 1 6 15"></svg:path>`,
})
export class UilUserArrowsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uilUserCheckIcon],svg[uil-user-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.3 12.22A4.92 4.92 0 0 0 15 8.5a5 5 0 0 0-10 0a4.92 4.92 0 0 0 1.7 3.72A8 8 0 0 0 2 19.5a1 1 0 0 0 2 0a6 6 0 0 1 12 0a1 1 0 0 0 2 0a8 8 0 0 0-4.7-7.28M10 11.5a3 3 0 1 1 3-3a3 3 0 0 1-3 3m11.71-2.37a1 1 0 0 0-1.42 0l-2 2l-.62-.63a1 1 0 0 0-1.42 0a1 1 0 0 0 0 1.41l1.34 1.34a1 1 0 0 0 1.41 0l2.67-2.67a1 1 0 0 0 .04-1.45"></svg:path>`,
})
export class UilUserCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uilUserCircleIcon],svg[uil-user-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2a10 10 0 0 0-7.35 16.76a10 10 0 0 0 14.7 0A10 10 0 0 0 12 2m0 18a8 8 0 0 1-5.55-2.25a6 6 0 0 1 11.1 0A8 8 0 0 1 12 20m-2-10a2 2 0 1 1 2 2a2 2 0 0 1-2-2m8.91 6A8 8 0 0 0 15 12.62a4 4 0 1 0-6 0A8 8 0 0 0 5.09 16A7.9 7.9 0 0 1 4 12a8 8 0 0 1 16 0a7.9 7.9 0 0 1-1.09 4"></svg:path>`,
})
export class UilUserCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uilUserExclamationIcon],svg[uil-user-exclamation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.55 12.22a4.92 4.92 0 0 0 1.7-3.72a5 5 0 0 0-10 0A4.92 4.92 0 0 0 8 12.22a8 8 0 0 0-4.7 7.28a1 1 0 0 0 2 0a6 6 0 0 1 12 0a1 1 0 0 0 2 0a8 8 0 0 0-4.75-7.28m-3.3-.72a3 3 0 1 1 3-3a3 3 0 0 1-3 3m8.5-5a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-2a1 1 0 0 0-1-1M19 11.79a1.05 1.05 0 0 0-.29.71a1 1 0 0 0 .29.71a1.2 1.2 0 0 0 .33.21a.94.94 0 0 0 .76 0a.9.9 0 0 0 .54-.54a.84.84 0 0 0 .08-.38a1 1 0 0 0-1.71-.71"></svg:path>`,
})
export class UilUserExclamationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uilUserLocationIcon],svg[uil-user-location-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.49 10.86a3.09 3.09 0 1 0-5 0a4.7 4.7 0 0 0-1.12 1A1 1 0 1 0 10 13.12a2.62 2.62 0 0 1 2.05-1a2.62 2.62 0 0 1 2.05 1a1 1 0 0 0 .78.37a1 1 0 0 0 .78-1.62a4.7 4.7 0 0 0-1.17-1.01M12 10.13A1.09 1.09 0 1 1 13.09 9A1.09 1.09 0 0 1 12 10.13m8.46-.5A8.5 8.5 0 0 0 7.3 3.36a8.56 8.56 0 0 0-3.76 6.27A8.46 8.46 0 0 0 6 16.46l5.3 5.31a1 1 0 0 0 1.42 0L18 16.46a8.46 8.46 0 0 0 2.46-6.83m-3.86 5.42l-4.6 4.6l-4.6-4.6a6.49 6.49 0 0 1-1.87-5.22A6.57 6.57 0 0 1 8.42 5a6.47 6.47 0 0 1 7.16 0a6.57 6.57 0 0 1 2.89 4.81a6.49 6.49 0 0 1-1.87 5.24"></svg:path>`,
})
export class UilUserLocationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uilUserMdIcon],svg[uil-user-md-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m15.899 13.229l-.005-.002c-.063-.027-.124-.058-.188-.083A5.99 5.99 0 0 0 18 8.434a5 5 0 0 0-.045-.63a1 1 0 0 0 .038-.122l.281-2.397a3.006 3.006 0 0 0-2.442-3.302l-.79-.143a16.9 16.9 0 0 0-6.083 0l-.791.143a3.006 3.006 0 0 0-2.442 3.302l.28 2.397a1 1 0 0 0 .039.122a5 5 0 0 0-.045.63a5.99 5.99 0 0 0 2.294 4.71c-.064.025-.125.056-.188.083l-.005.002a9.95 9.95 0 0 0-6.035 8.097a1 1 0 0 0 1.988.217a7.95 7.95 0 0 1 4.216-6.185l3.023 3.023a1 1 0 0 0 1.414 0l3.023-3.023a7.95 7.95 0 0 1 4.216 6.185a1 1 0 0 0 .992.892a1 1 0 0 0 .11-.006a1 1 0 0 0 .886-1.103a9.95 9.95 0 0 0-6.036-8.097ZM7.712 5.051a1 1 0 0 1 .814-1.1l.79-.143a14.9 14.9 0 0 1 5.368 0l.79.143a1 1 0 0 1 .814 1.1l-.178 1.514H7.89ZM12 16.261l-1.65-1.651a7.85 7.85 0 0 1 3.3 0Zm0-3.826a4.005 4.005 0 0 1-3.998-3.87h7.996A4.005 4.005 0 0 1 12 12.435"></svg:path>`,
})
export class UilUserMdIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uilUserMinusIcon],svg[uil-user-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 10.5h-4a1 1 0 0 0 0 2h4a1 1 0 0 0 0-2m-7.7 1.72A4.92 4.92 0 0 0 15 8.5a5 5 0 0 0-10 0a4.92 4.92 0 0 0 1.7 3.72A8 8 0 0 0 2 19.5a1 1 0 0 0 2 0a6 6 0 0 1 12 0a1 1 0 0 0 2 0a8 8 0 0 0-4.7-7.28M10 11.5a3 3 0 1 1 3-3a3 3 0 0 1-3 3"></svg:path>`,
})
export class UilUserMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uilUserNurseIcon],svg[uil-user-nurse-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.174 12.916q-.026-.013-.053-.024c-.138-.062-.274-.127-.415-.183a6 6 0 1 0-7.412 0c-.14.056-.277.121-.415.183l-.054.024a9.95 9.95 0 0 0-5.76 7.976a1 1 0 1 0 1.99.216A7.95 7.95 0 0 1 8.04 15.05l3.252 3.251a1 1 0 0 0 1.414 0l3.252-3.251a7.95 7.95 0 0 1 3.987 6.058a1 1 0 0 0 .992.892a1 1 0 0 0 .11-.006a1 1 0 0 0 .886-1.102a9.95 9.95 0 0 0-5.76-7.976ZM8.041 7.594a3.977 3.977 0 0 1 7.918 0ZM12 16.18l-1.937-1.937a7.8 7.8 0 0 1 3.874 0ZM12 12a4 4 0 0 1-3.664-2.406h7.328A4 4 0 0 1 12 12"></svg:path>`,
})
export class UilUserNurseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uilUserPlusIcon],svg[uil-user-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 10.5h-1v-1a1 1 0 0 0-2 0v1h-1a1 1 0 0 0 0 2h1v1a1 1 0 0 0 2 0v-1h1a1 1 0 0 0 0-2m-7.7 1.72A4.92 4.92 0 0 0 15 8.5a5 5 0 0 0-10 0a4.92 4.92 0 0 0 1.7 3.72A8 8 0 0 0 2 19.5a1 1 0 0 0 2 0a6 6 0 0 1 12 0a1 1 0 0 0 2 0a8 8 0 0 0-4.7-7.28M10 11.5a3 3 0 1 1 3-3a3 3 0 0 1-3 3"></svg:path>`,
})
export class UilUserPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uilUserSquareIcon],svg[uil-user-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.81 12.28a3.73 3.73 0 0 0 1-2.5a3.78 3.78 0 0 0-7.56 0a3.73 3.73 0 0 0 1 2.5A5.94 5.94 0 0 0 6 16.89a1 1 0 0 0 2 .22a4 4 0 0 1 7.94 0A1 1 0 0 0 17 18h.11a1 1 0 0 0 .88-1.1a5.94 5.94 0 0 0-3.18-4.62M12 11.56a1.78 1.78 0 1 1 1.78-1.78A1.78 1.78 0 0 1 12 11.56M19 2H5a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3m1 17a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1Z"></svg:path>`,
})
export class UilUserSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uilUserTimesIcon],svg[uil-user-times-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.3 12.22A4.92 4.92 0 0 0 15 8.5a5 5 0 0 0-10 0a4.92 4.92 0 0 0 1.7 3.72A8 8 0 0 0 2 19.5a1 1 0 0 0 2 0a6 6 0 0 1 12 0a1 1 0 0 0 2 0a8 8 0 0 0-4.7-7.28M10 11.5a3 3 0 1 1 3-3a3 3 0 0 1-3 3m10.91.5l.8-.79a1 1 0 0 0-1.42-1.42l-.79.8l-.79-.8a1 1 0 0 0-1.42 1.42l.8.79l-.8.79a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0l.79-.8l.79.8a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42Z"></svg:path>`,
})
export class UilUserTimesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uilUsersAltIcon],svg[uil-users-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.3 12.22A4.92 4.92 0 0 0 14 8.5a5 5 0 0 0-10 0a4.92 4.92 0 0 0 1.7 3.72A8 8 0 0 0 1 19.5a1 1 0 0 0 2 0a6 6 0 0 1 12 0a1 1 0 0 0 2 0a8 8 0 0 0-4.7-7.28M9 11.5a3 3 0 1 1 3-3a3 3 0 0 1-3 3m9.74.32A5 5 0 0 0 15 3.5a1 1 0 0 0 0 2a3 3 0 0 1 3 3a3 3 0 0 1-1.5 2.59a1 1 0 0 0-.5.84a1 1 0 0 0 .45.86l.39.26l.13.07a7 7 0 0 1 4 6.38a1 1 0 0 0 2 0a9 9 0 0 0-4.23-7.68"></svg:path>`,
})
export class UilUsersAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uilUtensilsIcon],svg[uil-utensils-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 2a1 1 0 0 0-1 1v5.46l-1 .67V3a1 1 0 0 0-2 0v6.13l-1-.67V3a1 1 0 0 0-2 0v6a1 1 0 0 0 .45.83L15 11.54V21a1 1 0 0 0 2 0v-9.46l2.55-1.71A1 1 0 0 0 20 9V3a1 1 0 0 0-1-1M9 2a5 5 0 0 0-5 5v6a1 1 0 0 0 1 1h3v7a1 1 0 0 0 2 0V3a1 1 0 0 0-1-1M8 12H6V7a3 3 0 0 1 2-2.83Z"></svg:path>`,
})
export class UilUtensilsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uilUtensilsAltIcon],svg[uil-utensils-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.53 14.13a1 1 0 0 0-1.42 0a1 1 0 0 0 0 1.41l6.18 6.18a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.41Zm1.23-2.49a3 3 0 0 0 2.12-.88l2.83-2.83a1 1 0 0 0 0-1.41a1 1 0 0 0-1.42 0l-2.83 2.83a1 1 0 0 1-1.41 0l3.54-3.54a1 1 0 0 0 0-1.41a1 1 0 0 0-1.42 0l-3.53 3.53a1 1 0 0 1 0-1.41l2.82-2.83a1 1 0 1 0-1.41-1.41l-2.83 2.83a3 3 0 0 0 0 4.24L12 10.59l-1.56-1.54a4.16 4.16 0 0 0-.74-5C8.26 2.61 4.53 1 2.77 2.79S2.6 8.27 4 9.72A4.36 4.36 0 0 0 6.94 11h.14A3.9 3.9 0 0 0 9 10.46L10.57 12l-8.28 8.28a1 1 0 1 0 1.42 1.41l9-9l1.92-1.92a3 3 0 0 0 2.13.87m-8.33-3.2A1.93 1.93 0 0 1 7 9a2.26 2.26 0 0 1-1.54-.7C4.38 7.22 3.62 4.77 4.19 4.2a1 1 0 0 1 .66-.2a5.87 5.87 0 0 1 3.44 1.47a2.12 2.12 0 0 1 .14 2.97"></svg:path>`,
})
export class UilUtensilsAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uilVectorSquareIcon],svg[uil-vector-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 16.18V7.82A3 3 0 1 0 16.18 4H7.82A3 3 0 1 0 4 7.82v8.36A3 3 0 1 0 7.82 20h8.36A3 3 0 1 0 20 16.18M19 4a1 1 0 1 1-1 1a1 1 0 0 1 1-1M5 4a1 1 0 1 1-1 1a1 1 0 0 1 1-1m0 16a1 1 0 1 1 1-1a1 1 0 0 1-1 1m11.18-2H7.82A3 3 0 0 0 6 16.18V7.82A3 3 0 0 0 7.82 6h8.36A3 3 0 0 0 18 7.82v8.36A3 3 0 0 0 16.18 18M19 20a1 1 0 1 1 1-1a1 1 0 0 1-1 1"></svg:path>`,
})
export class UilVectorSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uilVectorSquareAltIcon],svg[uil-vector-square-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 7H8a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1m-1 8H9V9h6Zm6 3.28V5.72A2 2 0 1 0 18.28 3H5.72A2 2 0 1 0 3 5.72v12.56A2 2 0 1 0 5.72 21h12.56A2 2 0 1 0 21 18.28m-2 0a1.9 1.9 0 0 0-.72.72H5.72a1.9 1.9 0 0 0-.72-.72V5.72A1.9 1.9 0 0 0 5.72 5h12.56a1.9 1.9 0 0 0 .72.72Z"></svg:path>`,
})
export class UilVectorSquareAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uilVenusIcon],svg[uil-venus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 9a7 7 0 1 0-8 6.92V18h-1a1 1 0 0 0 0 2h1v1a1 1 0 0 0 2 0v-1h1a1 1 0 0 0 0-2h-1v-2.08A7 7 0 0 0 19 9m-7 5a5 5 0 1 1 5-5a5 5 0 0 1-5 5"></svg:path>`,
})
export class UilVenusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uilVerticalAlignBottomIcon],svg[uil-vertical-align-bottom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 20h-3V9a1 1 0 0 0-1-1h-3V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v17H3a1 1 0 0 0 0 2h18a1 1 0 0 0 0-2m-9 0H8V4h4Zm4 0h-2V10h2Z"></svg:path>`,
})
export class UilVerticalAlignBottomIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uilVerticalAlignCenterIcon],svg[uil-vertical-align-center-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 11h-3V6a1 1 0 0 0-1-1h-3V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v8H3a1 1 0 0 0 0 2h3v8a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-2h3a1 1 0 0 0 1-1v-5h3a1 1 0 0 0 0-2m-9 9H8V4h4Zm4-3h-2V7h2Z"></svg:path>`,
})
export class UilVerticalAlignCenterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uilVerticalAlignTopIcon],svg[uil-vertical-align-top-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 2H3a1 1 0 0 0 0 2h3v17a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-5h3a1 1 0 0 0 1-1V4h3a1 1 0 0 0 0-2m-9 18H8V4h4Zm4-6h-2V4h2Z"></svg:path>`,
})
export class UilVerticalAlignTopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uilVerticalDistributeBottomIcon],svg[uil-vertical-distribute-bottom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 18h-1v-5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v5H3a1 1 0 0 0 0 2h18a1 1 0 0 0 0-2m-3 0H6v-4h12ZM3 10h18a1 1 0 0 0 0-2h-2V5a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v3H3a1 1 0 0 0 0 2m4-4h10v2H7Z"></svg:path>`,
})
export class UilVerticalDistributeBottomIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uilVerticalDistributionCenterIcon],svg[uil-vertical-distribution-center-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 15h-1v-2a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v2H3a1 1 0 0 0 0 2h1v2a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-2h1a1 1 0 0 0 0-2m-3 3H6v-4h12ZM3 8h2v1a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V8h2a1 1 0 0 0 0-2h-2V5a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v1H3a1 1 0 0 0 0 2m4-2h10v2H7Z"></svg:path>`,
})
export class UilVerticalDistributionCenterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uilVerticalDistributionTopIcon],svg[uil-vertical-distribution-top-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 6h1v5a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V6h1a1 1 0 0 0 0-2H3a1 1 0 0 0 0 2m3 0h12v4H6Zm15 8H3a1 1 0 0 0 0 2h2v3a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-3h2a1 1 0 0 0 0-2m-4 4H7v-2h10Z"></svg:path>`,
})
export class UilVerticalDistributionTopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uilVideoIcon],svg[uil-video-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.53 7.15a1 1 0 0 0-1 0L17 8.89A3 3 0 0 0 14 6H5a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h9a3 3 0 0 0 3-2.89l3.56 1.78A1 1 0 0 0 21 17a1 1 0 0 0 .53-.15A1 1 0 0 0 22 16V8a1 1 0 0 0-.47-.85M15 15a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1Zm5-.62l-3-1.5v-1.76l3-1.5Z"></svg:path>`,
})
export class UilVideoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uilVideoQuestionIcon],svg[uil-video-question-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.21 17.29a1.047 1.047 0 0 0-1.42 0a1 1 0 0 0-.21.33a.94.94 0 0 0 0 .76a1.2 1.2 0 0 0 .21.33A1 1 0 0 0 10.5 18a1 1 0 0 0-.08-.38a1.2 1.2 0 0 0-.21-.33M9.5 9a3.01 3.01 0 0 0-2.598 1.5a1 1 0 1 0 1.73 1A1 1 0 1 1 9.5 13a1 1 0 0 0-1 1v1a1 1 0 0 0 2 0v-.184A2.993 2.993 0 0 0 9.5 9m12.025-2.85a1 1 0 0 0-.972-.045l-3.564 1.782A3 3 0 0 0 14 5H5a3.003 3.003 0 0 0-3 3v6a3.003 3.003 0 0 0 3 3h1a1 1 0 0 0 0-2H5a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-.5a1 1 0 0 0 0 2h.5a3 3 0 0 0 2.989-2.888l3.564 1.782A1 1 0 0 0 22 15V7a1 1 0 0 0-.475-.85M20 13.381l-3-1.5v-1.764l3-1.5Z"></svg:path>`,
})
export class UilVideoQuestionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uilVideoSlashIcon],svg[uil-video-slash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m7.71 6.29l-4-4a1 1 0 0 0-1.42 1.42L4.62 6A3 3 0 0 0 2 9v6a3 3 0 0 0 3 3h9a3 3 0 0 0 1.9-.69l4.39 4.4a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42ZM14 16H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h1.59l7.87 7.88A1 1 0 0 1 14 16m7.53-8.85a1 1 0 0 0-1 0L17 8.89A3 3 0 0 0 14 6h-1.34a1 1 0 0 0 0 2H14a1 1 0 0 1 1 1v1.5a2 2 0 0 0 0 .19a.7.7 0 0 0 .05.2s.05.06.07.1a1 1 0 0 0 .15.21s.1.06.15.1l.17.11a1 1 0 0 0 .23 0a.7.7 0 0 0 .14 0a2 2 0 0 0 .19 0a.7.7 0 0 0 .2-.05L20 9.62v5.72a1 1 0 1 0 2 0V8a1 1 0 0 0-.47-.85"></svg:path>`,
})
export class UilVideoSlashIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uilVirusSlashIcon],svg[uil-virus-slash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.17 5.236a8 8 0 0 1 .83-.158v1.27a1 1 0 1 0 2 0V5.071a6.95 6.95 0 0 1 3.95 1.98v.001l.001.001a7 7 0 0 1 1.97 3.949H18a1 1 0 0 0 0 2h.922a8 8 0 0 1-.16.827a1 1 0 0 0 .718 1.217a1 1 0 0 0 .25.032a1 1 0 0 0 .968-.75a10 10 0 0 0 .236-1.326H22a1 1 0 0 0 0-2h-1.06a8.93 8.93 0 0 0-1.912-4.614l.75-.75a1 1 0 0 0-1.414-1.414l-.753.753A8.9 8.9 0 0 0 13 3.067V1.999a1 1 0 1 0-2 0v1.066a9.5 9.5 0 0 0-1.33.236a1 1 0 0 0 .5 1.936ZM14 9.002a1 1 0 1 0 1-1a1 1 0 0 0-1 1m4.377 7.963l-.007-.011l-.012-.008L2.707 1.295a1 1 0 0 0-1.414 1.414l3.679 3.679a8.93 8.93 0 0 0-1.913 4.614H2a1 1 0 0 0 0 2h1.06a8.95 8.95 0 0 0 1.911 4.615l-.75.75a1 1 0 1 0 1.415 1.413l.75-.75A8.95 8.95 0 0 0 11 20.94v1.063a1 1 0 0 0 2 0V20.94a8.95 8.95 0 0 0 4.614-1.909l3.679 3.679a1 1 0 0 0 1.414-1.414ZM13 18.92v-1.917a1 1 0 0 0-2 0v1.917a7 7 0 0 1-3.945-1.96l-.005-.007l-.007-.005a7 7 0 0 1-1.963-3.945H6a1 1 0 0 0 0-2h-.921a6.94 6.94 0 0 1 1.32-3.187L8.253 9.67a1.5 1.5 0 0 0 2.08 2.08l5.853 5.853A6.96 6.96 0 0 1 13 18.919Zm-4-4.917a1 1 0 1 0 1 1a1 1 0 0 0-1-1"></svg:path>`,
})
export class UilVirusSlashIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uilVisualStudioIcon],svg[uil-visual-studio-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.85 2L9.09 9.77l-4.9-3.86L2.05 7v10l2.15 1.09l4.93-3.85L16.87 22L22 19.93V4ZM4.37 14.3V9.65l2.44 2.43Zm12.33 1.29L12.05 12l4.65-3.59Z"></svg:path>`,
})
export class UilVisualStudioIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uilVkIcon],svg[uil-vk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.073 2H8.938C3.332 2 2 3.333 2 8.927v6.136C2 20.667 3.323 22 8.927 22h6.136C20.667 22 22 20.677 22 15.073V8.938C22 3.332 20.677 2 15.073 2m3.073 14.27h-1.459c-.552 0-.718-.447-1.708-1.437c-.864-.833-1.229-.937-1.448-.937c-.302 0-.385.083-.385.5v1.312c0 .355-.115.563-1.042.563a5.7 5.7 0 0 1-4.448-2.667a11.6 11.6 0 0 1-2.302-4.833c0-.219.083-.417.5-.417h1.459c.375 0 .51.167.656.552c.708 2.084 1.916 3.896 2.406 3.896c.188 0 .27-.083.27-.552v-2.146c-.062-.979-.582-1.062-.582-1.416a.36.36 0 0 1 .374-.334h2.292c.313 0 .417.156.417.531v2.896c0 .313.135.417.229.417c.188 0 .333-.104.677-.448a12 12 0 0 0 1.792-2.98a.63.63 0 0 1 .635-.416h1.459c.437 0 .53.219.437.531a18.2 18.2 0 0 1-1.958 3.365c-.157.24-.22.365 0 .646c.145.219.656.646 1 1.052a6.5 6.5 0 0 1 1.229 1.708c.125.406-.084.615-.5.615"></svg:path>`,
})
export class UilVkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uilVkAltIcon],svg[uil-vk-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.744 13.53a5.5 5.5 0 0 0-.978-.837a7.87 7.87 0 0 0 2.859-4.471a1 1 0 1 0-1.95-.444a5.86 5.86 0 0 1-3.02 3.903V8.002a1 1 0 0 0-.044-.216a1 1 0 0 0-.035-.171a1 1 0 0 0-.167-.25c-.018-.02-.027-.048-.046-.068a1 1 0 0 0-.246-.167c-.026-.014-.045-.037-.072-.048a1 1 0 0 0-.236-.049a1 1 0 0 0-.152-.031L11.003 7H11a.995.995 0 0 0-.35 1.929v4.89a11.3 11.3 0 0 1-3.01-5.984a1 1 0 1 0-1.972.334a13.33 13.33 0 0 0 5.4 8.644a1 1 0 0 0 .128.064a1 1 0 0 0 .108.054a1 1 0 0 0 .35.071a1 1 0 0 0 .424-.102c.01-.005.021-.002.031-.007a1 1 0 0 0 .24-.176c.015-.014.024-.03.038-.045a1 1 0 0 0 .16-.237a1 1 0 0 0 .037-.087a1 1 0 0 0 .07-.346v-2.126a3.55 3.55 0 0 1 1.616 1.005l1.647 1.797a1 1 0 1 0 1.474-1.352ZM15.073 1H8.938C2.78 1 1 2.778 1 8.927v6.136C1 21.22 2.778 23 8.927 23h6.136C21.22 23 23 21.222 23 15.073V8.938C23 2.78 21.222 1 15.073 1M21 15.073c0 5.04-.888 5.927-5.937 5.927H8.927C3.887 21 3 20.112 3 15.063V8.927C3 3.887 3.888 3 8.938 3h6.135C20.113 3 21 3.888 21 8.938Z"></svg:path>`,
})
export class UilVkAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uilVoicemailIcon],svg[uil-voicemail-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 8a4 4 0 0 0-4 4a3.9 3.9 0 0 0 .56 2H9.44a3.9 3.9 0 0 0 .56-2a4 4 0 1 0-4 4h12a4 4 0 0 0 0-8M6 14a2 2 0 1 1 2-2a2 2 0 0 1-2 2m12 0a2 2 0 1 1 2-2a2 2 0 0 1-2 2"></svg:path>`,
})
export class UilVoicemailIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uilVoicemailRectangleIcon],svg[uil-voicemail-rectangle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 4H4a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h16a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3m1 13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1Zm-5-8a3 3 0 0 0-2.82 4h-2.36A3 3 0 1 0 8 15h8a3 3 0 0 0 0-6m-8 4a1 1 0 1 1 1-1a1 1 0 0 1-1 1m8 0a1 1 0 1 1 1-1a1 1 0 0 1-1 1"></svg:path>`,
})
export class UilVoicemailRectangleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uilVolleyballIcon],svg[uil-volleyball-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.59 6.9a1 1 0 0 0-.07-.1A10 10 0 0 0 7.6 3h-.07a10 10 0 0 0-1 17.19l.33.2l.1.07A9.93 9.93 0 0 0 12 22h.21a10 10 0 0 0 8.38-15.1M19 8.06a7.6 7.6 0 0 1 .65 1.46a10 10 0 0 0-3-.49a.8.8 0 0 0-.31 0a9.8 9.8 0 0 0-3.58.73a7.9 7.9 0 0 1-1.84-1.6a8.16 8.16 0 0 1 8.08-.1M12 4a7.86 7.86 0 0 1 4 1.07A8 8 0 0 0 15 5a10 10 0 0 0-5.2 1.47a8 8 0 0 1-.64-1.94A7.9 7.9 0 0 1 12 4M6 6.71a8.3 8.3 0 0 1 1.33-1.19A9.9 9.9 0 0 0 12 11.61a7.9 7.9 0 0 1-.77 2.88A8 8 0 0 1 6 7zM4 12a8.1 8.1 0 0 1 .36-2.37a10 10 0 0 0 5.7 6.56a7.84 7.84 0 0 1-2.93 2.14A8 8 0 0 1 4 12m7.86 8a7.8 7.8 0 0 1-2.61-.49a9.94 9.94 0 0 0 3.23-3.22A10 10 0 0 0 14 11.41a7.7 7.7 0 0 1 1.78-.36A8 8 0 0 1 11.86 20m4.22-1.12A9.94 9.94 0 0 0 18 13a10.7 10.7 0 0 0-.18-1.88a8.3 8.3 0 0 1 2.17.7V12a8 8 0 0 1-3.91 6.87Z"></svg:path>`,
})
export class UilVolleyballIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uilVolumeIcon],svg[uil-volume-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.43 4.1a1 1 0 0 0-1 .12L6.65 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h3.65l4.73 3.78A1 1 0 0 0 12 20a.9.9 0 0 0 .43-.1A1 1 0 0 0 13 19V5a1 1 0 0 0-.57-.9M11 16.92l-3.38-2.7A1 1 0 0 0 7 14H4v-4h3a1 1 0 0 0 .62-.22L11 7.08Zm8.66-10.58a1 1 0 0 0-1.42 1.42a6 6 0 0 1-.38 8.84a1 1 0 0 0 .64 1.76a1 1 0 0 0 .64-.23a8 8 0 0 0 .52-11.79m-2.83 2.83a1 1 0 1 0-1.42 1.42A2 2 0 0 1 16 12a2 2 0 0 1-.71 1.53a1 1 0 0 0-.13 1.41a1 1 0 0 0 1.41.12A4 4 0 0 0 18 12a4.06 4.06 0 0 0-1.17-2.83"></svg:path>`,
})
export class UilVolumeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uilVolumeDownIcon],svg[uil-volume-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.83 9.17a1 1 0 1 0-1.42 1.42A2 2 0 0 1 18 12a2 2 0 0 1-.71 1.53a1 1 0 0 0-.13 1.41a1 1 0 0 0 1.41.12A4 4 0 0 0 20 12a4.06 4.06 0 0 0-1.17-2.83m-4.4-5.07a1 1 0 0 0-1 .12L8.65 8H5a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h3.65l4.73 3.78A1 1 0 0 0 14 20a.9.9 0 0 0 .43-.1A1 1 0 0 0 15 19V5a1 1 0 0 0-.57-.9M13 16.92l-3.38-2.7A1 1 0 0 0 9 14H6v-4h3a1 1 0 0 0 .62-.22L13 7.08Z"></svg:path>`,
})
export class UilVolumeDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uilVolumeMuteIcon],svg[uil-volume-mute-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.43 4.1a1 1 0 0 0-1 .12L6.65 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h3.65l4.73 3.78A1 1 0 0 0 12 20a.9.9 0 0 0 .43-.1A1 1 0 0 0 13 19V5a1 1 0 0 0-.57-.9M11 16.92l-3.38-2.7A1 1 0 0 0 7 14H4v-4h3a1 1 0 0 0 .62-.22L11 7.08ZM19.91 12l1.8-1.79a1 1 0 0 0-1.42-1.42l-1.79 1.8l-1.79-1.8a1 1 0 0 0-1.42 1.42l1.8 1.79l-1.8 1.79a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0l1.79-1.8l1.79 1.8a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42Z"></svg:path>`,
})
export class UilVolumeMuteIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uilVolumeOffIcon],svg[uil-volume-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.93 4.1a1 1 0 0 0-1 .12L11.15 8H7.5a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h3.65l4.73 3.78a1 1 0 0 0 .62.22a.9.9 0 0 0 .43-.1a1 1 0 0 0 .57-.9V5a1 1 0 0 0-.57-.9M15.5 16.92l-3.38-2.7a1 1 0 0 0-.62-.22h-3v-4h3a1 1 0 0 0 .62-.22l3.38-2.7Z"></svg:path>`,
})
export class UilVolumeOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uilVolumeUpIcon],svg[uil-volume-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.43 4.1a1 1 0 0 0-1 .12L6.65 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h3.65l4.73 3.78A1 1 0 0 0 12 20a.9.9 0 0 0 .43-.1A1 1 0 0 0 13 19V5a1 1 0 0 0-.57-.9M11 16.92l-3.38-2.7A1 1 0 0 0 7 14H4v-4h3a1 1 0 0 0 .62-.22L11 7.08Zm4.14-12.83a1 1 0 1 0-.28 2a6 6 0 0 1 0 11.86a1 1 0 0 0 .14 2h.14a8 8 0 0 0 0-15.82Zm-.46 9.78a1 1 0 0 0 .32 2a1.1 1.1 0 0 0 .32-.05a4 4 0 0 0 0-7.54a1 1 0 0 0-.64 1.9a2 2 0 0 1 0 3.74Z"></svg:path>`,
})
export class UilVolumeUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uilVuejsIcon],svg[uil-vuejs-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.03 2.443h-3.643L12.013 6.4L9.63 2.444l-2.646-.001H.831L12.03 21.558L23.168 2.443Zm-6.005 15.15L4.322 4.443h2.824l4.885 8.406l4.847-8.407h2.81Z"></svg:path>`,
})
export class UilVuejsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uilVuejsAltIcon],svg[uil-vuejs-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.867 3.374a1 1 0 0 0-.866-.502l-4.97-.004h-3.652a1 1 0 0 0-.817.425l-.559.796l-.564-.798a1 1 0 0 0-.816-.423H6.968l-4.973.026A1 1 0 0 0 1.137 4.4l10.02 17.106a1 1 0 0 0 .863.494a1 1 0 0 0 .864-.496l9.98-17.128a1 1 0 0 0 .003-1.002M10.105 4.868l1.085 1.533a1 1 0 0 0 .816.423h.001a1 1 0 0 0 .817-.425L13.9 4.87l1.363-.002l-3.244 5.454l-3.275-5.454Zm1.912 14.15L3.74 4.885l2.67-.015l4.754 7.918a1 1 0 0 0 .857.485h.006a1 1 0 0 0 .857-.489l4.708-7.916l2.67.003Z"></svg:path>`,
})
export class UilVuejsAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uilWallIcon],svg[uil-wall-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 9a1 1 0 0 0 0-2h-1V5h1a1 1 0 0 0 0-2H3a1 1 0 0 0 0 2h3v2H3a1 1 0 0 0 0 2h1v2H3a1 1 0 0 0 0 2h3v2H3a1 1 0 0 0 0 2h1v2H3a1 1 0 0 0 0 2h18a1 1 0 0 0 0-2h-3v-2h3a1 1 0 0 0 0-2h-1v-2h1a1 1 0 0 0 0-2h-3V9ZM8 5h4v2H8Zm8 4v2h-4V9ZM6 9h4v2H6Zm6 4v2H8v-2Zm-2 6H6v-2h4Zm6 0h-4v-2h4Zm2-4h-4v-2h4Zm-4-8V5h4v2Z"></svg:path>`,
})
export class UilWallIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uilWalletIcon],svg[uil-wallet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 7h-1V6a3 3 0 0 0-3-3H5a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-8a3 3 0 0 0-3-3M5 5h10a1 1 0 0 1 1 1v1H5a1 1 0 0 1 0-2m15 10h-1a1 1 0 0 1 0-2h1Zm0-4h-1a3 3 0 0 0 0 6h1v1a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8.83A3 3 0 0 0 5 9h14a1 1 0 0 1 1 1Z"></svg:path>`,
})
export class UilWalletIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uilWatchIcon],svg[uil-watch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 6.78V3a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v3.78A3 3 0 0 0 6 9v6a3 3 0 0 0 1 2.22V21a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-3.78A3 3 0 0 0 18 15V9a3 3 0 0 0-1-2.22M9 4h6v2H9Zm6 16H9v-2h6Zm1-5a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1Z"></svg:path>`,
})
export class UilWatchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uilWatchAltIcon],svg[uil-watch-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m17 8.61l-1-5.77A1 1 0 0 0 15 2H9a1 1 0 0 0-1 .84L7 8.61a6 6 0 0 0 0 6.78l1 5.77A1 1 0 0 0 9 22h6a1 1 0 0 0 1-.84l1-5.77a6 6 0 0 0 0-6.78M9.85 4h4.3l.44 2.59a6 6 0 0 0-5.18 0Zm4.3 16h-4.3l-.44-2.59a6 6 0 0 0 5.18 0ZM12 16a4 4 0 1 1 4-4a4 4 0 0 1-4 4"></svg:path>`,
})
export class UilWatchAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uilWaterIcon],svg[uil-water-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.72 7.65a2.6 2.6 0 0 1 .56.24a4 4 0 0 0 4.1 0a2.6 2.6 0 0 1 2.56 0a4.15 4.15 0 0 0 4.12 0a2.6 2.6 0 0 1 2.56 0a4.25 4.25 0 0 0 2.08.56a3.9 3.9 0 0 0 2-.56a2.6 2.6 0 0 1 .56-.24a1 1 0 0 0-.56-1.92a4.5 4.5 0 0 0-1 .45a2.08 2.08 0 0 1-2.1 0a4.64 4.64 0 0 0-4.54 0a2.11 2.11 0 0 1-2.12 0a4.64 4.64 0 0 0-4.54 0a2.08 2.08 0 0 1-2.1 0a4.5 4.5 0 0 0-1-.45a1 1 0 1 0-.56 1.92Zm18 8.08a4.5 4.5 0 0 0-1 .45a2.08 2.08 0 0 1-2.1 0a4.64 4.64 0 0 0-4.54 0a2.11 2.11 0 0 1-2.12 0a4.64 4.64 0 0 0-4.54 0a2.08 2.08 0 0 1-2.1 0a4.5 4.5 0 0 0-1-.45a1 1 0 1 0-.56 1.92a2.6 2.6 0 0 1 .56.24a4 4 0 0 0 4.1 0a2.6 2.6 0 0 1 2.56 0a4.15 4.15 0 0 0 4.12 0a2.6 2.6 0 0 1 2.56 0a4.25 4.25 0 0 0 2.08.56a3.9 3.9 0 0 0 2-.56a2.6 2.6 0 0 1 .56-.24a1 1 0 0 0-.56-1.92Zm0-5a4.5 4.5 0 0 0-1 .45a2.08 2.08 0 0 1-2.1 0a4.64 4.64 0 0 0-4.54 0a2.11 2.11 0 0 1-2.12 0a4.64 4.64 0 0 0-4.54 0a2.08 2.08 0 0 1-2.1 0a4.5 4.5 0 0 0-1-.45a1 1 0 0 0-1.32.68a1 1 0 0 0 .68 1.24a2.6 2.6 0 0 1 .56.24a4 4 0 0 0 4.1 0a2.6 2.6 0 0 1 2.56 0a4.15 4.15 0 0 0 4.12 0a2.6 2.6 0 0 1 2.56 0a4.25 4.25 0 0 0 2.08.56a3.9 3.9 0 0 0 2-.56a2.6 2.6 0 0 1 .56-.24a1 1 0 0 0-.56-1.92Z"></svg:path>`,
})
export class UilWaterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uilWaterDropSlashIcon],svg[uil-water-drop-slash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m21.71 20.29l-18-18a1 1 0 0 0-1.42 1.42l4 4a12.46 12.46 0 0 0-2 6.57A7.76 7.76 0 0 0 12 22a7.64 7.64 0 0 0 5.87-2.71l2.42 2.42a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42M12 20a5.76 5.76 0 0 1-5.75-5.75a10.3 10.3 0 0 1 1.47-5.11l8.74 8.73A5.67 5.67 0 0 1 12 20M10.85 5.24c.45-.42.85-.75 1.15-1c1.43 1.12 5.13 4.43 5.68 8.88a1 1 0 0 0 1 .88h.12a1 1 0 0 0 .87-1.11c-.78-6.43-6.85-10.55-7.1-10.72a1 1 0 0 0-1.12 0a19 19 0 0 0-1.96 1.61a1 1 0 0 0 1.36 1.46"></svg:path>`,
})
export class UilWaterDropSlashIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uilWaterGlassIcon],svg[uil-water-glass-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.08 7a1 1 0 0 0-1.08.92l-.35 4.55a2.67 2.67 0 0 1-1.2-.77a1 1 0 0 0-1.5 0a2.65 2.65 0 0 1-3.9 0a1 1 0 0 0-1.5 0a2.7 2.7 0 0 1-1.2.77L7 7.92A1 1 0 0 0 5.92 7A1 1 0 0 0 5 8.08l.86 11.15a3 3 0 0 0 3 2.77h6.3a3 3 0 0 0 3-2.77L19 8.08A1 1 0 0 0 18.08 7m-1.94 12.08a1 1 0 0 1-1 .92H8.85a1 1 0 0 1-1-.92L7.5 14.5a4.8 4.8 0 0 0 1.8-.79a4.66 4.66 0 0 0 5.4 0a4.8 4.8 0 0 0 1.8.79ZM12 10a3.26 3.26 0 0 0 3.25-3.25c0-2.75-2.58-4.51-2.69-4.58a1 1 0 0 0-1.12 0c-.11.08-2.69 1.83-2.69 4.58A3.26 3.26 0 0 0 12 10m0-5.7a3.6 3.6 0 0 1 1.25 2.45a1.25 1.25 0 0 1-2.5 0A3.66 3.66 0 0 1 12 4.3"></svg:path>`,
})
export class UilWaterGlassIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uilWebGridIcon],svg[uil-web-grid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 2H3a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1m-7 18H4v-7h10Zm0-9H4V4h10Zm6 9h-4V4h4Z"></svg:path>`,
})
export class UilWebGridIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uilWebGridAltIcon],svg[uil-web-grid-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 2H3a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1M11 20H4V10h7Zm9 0h-7V10h7Zm0-12H4V4h16Z"></svg:path>`,
})
export class UilWebGridAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uilWebSectionIcon],svg[uil-web-section-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 2H3a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1m-7 18H4V4h10Zm6 0h-4V4h4Z"></svg:path>`,
})
export class UilWebSectionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uilWebSectionAltIcon],svg[uil-web-section-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 2H3a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1M8 20H4V4h4Zm12 0H10V4h10Z"></svg:path>`,
})
export class UilWebSectionAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uilWebcamIcon],svg[uil-webcam-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 13a3 3 0 1 0-3-3a3 3 0 0 0 3 3m0-4a1 1 0 1 1-1 1a1 1 0 0 1 1-1m9.59 9.16A10 10 0 0 0 19 13.89a8 8 0 1 0-14 0a9.9 9.9 0 0 0-2.6 4.27a3 3 0 0 0 .47 2.63A3 3 0 0 0 5.3 22h13.4a3 3 0 0 0 2.42-1.21a3 3 0 0 0 .47-2.63M12 4a6 6 0 1 1-6 6a6 6 0 0 1 6-6m7.52 15.59a1 1 0 0 1-.82.41H5.3a1 1 0 0 1-.82-.41a1 1 0 0 1-.15-.87a7.85 7.85 0 0 1 1.88-3.22a8 8 0 0 0 11.58 0a7.85 7.85 0 0 1 1.88 3.22a1 1 0 0 1-.15.87"></svg:path>`,
})
export class UilWebcamIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uilWeightIcon],svg[uil-weight-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 4h-1.45A3.1 3.1 0 0 0 17 3a3 3 0 0 0-2.25-1H9.27A3 3 0 0 0 7 3a3.1 3.1 0 0 0-.57 1H5a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3m-10.48.34A1 1 0 0 1 9.27 4h5.46a1 1 0 0 1 .75.34a1 1 0 0 1 .25.78l-.5 4a1 1 0 0 1-1 .88h-1.64l1.14-2.4a1 1 0 0 0-1.8-.86L10.37 10h-.6a1 1 0 0 1-1-.88l-.5-4a1 1 0 0 1 .25-.78M20 19a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h1.37l.42 3.37a3 3 0 0 0 3 2.63h4.46a3 3 0 0 0 3-2.63L17.63 6H19a1 1 0 0 1 1 1Zm-6-3h-4a1 1 0 0 0 0 2h4a1 1 0 0 0 0-2"></svg:path>`,
})
export class UilWeightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uilWhatsappIcon],svg[uil-whatsapp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.6 14c-.2-.1-1.5-.7-1.7-.8s-.4-.1-.6.1s-.6.8-.8 1c-.1.2-.3.2-.5.1c-.7-.3-1.4-.7-2-1.2c-.5-.5-1-1.1-1.4-1.7c-.1-.2 0-.4.1-.5s.2-.3.4-.4c.1-.1.2-.3.2-.4c.1-.1.1-.3 0-.4S9.7 8.5 9.5 8c-.1-.7-.3-.7-.5-.7h-.5c-.2 0-.5.2-.6.3Q7 8.5 7 9.7c.1.9.4 1.8 1 2.6c1.1 1.6 2.5 2.9 4.2 3.7c.5.2.9.4 1.4.5c.5.2 1 .2 1.6.1c.7-.1 1.3-.6 1.7-1.2c.2-.4.2-.8.1-1.2zm2.5-9.1C15.2 1 8.9 1 5 4.9c-3.2 3.2-3.8 8.1-1.6 12L2 22l5.3-1.4c1.5.8 3.1 1.2 4.7 1.2c5.5 0 9.9-4.4 9.9-9.9c.1-2.6-1-5.1-2.8-7m-2.7 14c-1.3.8-2.8 1.3-4.4 1.3c-1.5 0-2.9-.4-4.2-1.1l-.3-.2l-3.1.8l.8-3l-.2-.3c-2.4-4-1.2-9 2.7-11.5S16.6 3.7 19 7.5c2.4 3.9 1.3 9-2.6 11.4"></svg:path>`,
})
export class UilWhatsappIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uilWhatsappAltIcon],svg[uil-whatsapp-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 6.55a13 13 0 0 0-.1-1.29a4.3 4.3 0 0 0-.37-1.08a3.7 3.7 0 0 0-.71-1a3.9 3.9 0 0 0-1-.71a4.3 4.3 0 0 0-1.08-.36A10 10 0 0 0 17.46 2H6.55a13 13 0 0 0-1.29.1a4.3 4.3 0 0 0-1.08.37a3.7 3.7 0 0 0-1 .71a3.9 3.9 0 0 0-.71 1a4.3 4.3 0 0 0-.36 1.08A10 10 0 0 0 2 6.54v10.91a13 13 0 0 0 .1 1.29a4.3 4.3 0 0 0 .37 1.08a3.7 3.7 0 0 0 .71 1a3.9 3.9 0 0 0 1 .71a4.3 4.3 0 0 0 1.08.36a10 10 0 0 0 1.28.11h10.91a13 13 0 0 0 1.29-.1a4.3 4.3 0 0 0 1.08-.37a3.7 3.7 0 0 0 1-.71a3.9 3.9 0 0 0 .71-1a4.3 4.3 0 0 0 .36-1.08a10 10 0 0 0 .11-1.28zM12.23 19a7.1 7.1 0 0 1-3.43-.9l-3.8 1l1-3.72a7.1 7.1 0 0 1-1-3.58a7.18 7.18 0 1 1 7.23 7.2m0-13.13A6 6 0 0 0 7.18 15l.14.23l-.6 2.19L9 16.8l.22.13a6 6 0 0 0 3 .83a6 6 0 0 0 6-6a6 6 0 0 0-6-6Zm3.5 8.52a1.82 1.82 0 0 1-1.21.85a2.3 2.3 0 0 1-1.12-.07a9 9 0 0 1-1-.38a8 8 0 0 1-3.06-2.7a3.5 3.5 0 0 1-.73-1.85a2 2 0 0 1 .63-1.5a.65.65 0 0 1 .48-.22H10c.11 0 .26 0 .4.31s.51 1.24.56 1.33a.34.34 0 0 1 0 .31a1.1 1.1 0 0 1-.18.3c-.09.11-.19.24-.27.32s-.18.18-.08.36a5.6 5.6 0 0 0 1 1.24a5 5 0 0 0 1.44.89c.18.09.29.08.39 0s.45-.52.57-.7s.24-.15.4-.09s1.05.49 1.23.58s.29.13.34.21a1.56 1.56 0 0 1-.07.78Z"></svg:path>`,
})
export class UilWhatsappAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uilWheelBarrowIcon],svg[uil-wheel-barrow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 2h-2.3l-.16.07l-.17.11a.8.8 0 0 0-.13.13a1 1 0 0 0-.1.16a.7.7 0 0 0-.08.18v.09L17.38 6h-1.14l-3.12-3.11a3.06 3.06 0 0 0-4.24 0L5.76 6H3a1 1 0 0 0-.87.5a1 1 0 0 0 0 1l4 7l-.77 1.5A2 2 0 0 0 5 16a3 3 0 1 0 3 3a3 3 0 0 0-.85-2.08l1-2l1.38-.14l3.94 5.91A2.93 2.93 0 0 0 16 22a3.2 3.2 0 0 0 1.13-.21a3 3 0 0 0 1.87-3.3L18 13l1.79-9H21a1 1 0 0 0 0-2M5 20a1 1 0 1 1 1-1a1 1 0 0 1-1 1m5.3-15.71a1 1 0 0 1 1.4 0L13.41 6H8.59Zm-2.75 8.65L4.72 8H17l-.82 4.08Zm8.81 7a1 1 0 0 1-1.2-.38l-3.34-5l4.37-.43l.81 4.69a1 1 0 0 1-.64 1.11Z"></svg:path>`,
})
export class UilWheelBarrowIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uilWheelchairIcon],svg[uil-wheelchair-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 6.5a2 2 0 1 0-2-2a2 2 0 0 0 2 2m7.5 14h-1v-5a1 1 0 0 0-1-1h-5v-2h5a1 1 0 0 0 0-2h-5v-2a1 1 0 0 0-2 0v7a1 1 0 0 0 1 1h5v5a1 1 0 0 0 1 1h2a1 1 0 0 0 0-2m-6.8-1.6a4 4 0 0 1-7.2-2.4a4 4 0 0 1 2.4-3.66A1 1 0 1 0 7.1 11a6 6 0 1 0 7.2 9.1a1 1 0 0 0-1.6-1.2"></svg:path>`,
})
export class UilWheelchairIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uilWheelchairAltIcon],svg[uil-wheelchair-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 16.18V16a3 3 0 0 0-2-2.82V7h1a1 1 0 0 0 0-2H7a3 3 0 0 0-3-3H3a1 1 0 0 0 0 2h1a1 1 0 0 1 1 1v7.42A5 5 0 1 0 12 17a4.9 4.9 0 0 0-.42-2H17a1 1 0 0 1 1 1v.18a3 3 0 1 0 2 0M7 20a3 3 0 1 1 3-3a3 3 0 0 1-3 3m9-7h-6a4.93 4.93 0 0 0-3-1v-1h9Zm0-4H7V7h9Zm3 11a1 1 0 1 1 1-1a1 1 0 0 1-1 1M7 16a1 1 0 1 0 1 1a1 1 0 0 0-1-1"></svg:path>`,
})
export class UilWheelchairAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uilWifiIcon],svg[uil-wifi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 15a3 3 0 1 0 3 3a3 3 0 0 0-3-3m0 4a1 1 0 1 1 1-1a1 1 0 0 1-1 1m0-8a7.06 7.06 0 0 0-4.95 2.05a1 1 0 0 0 0 1.41a1 1 0 0 0 1.41 0a5 5 0 0 1 7.08 0a1 1 0 0 0 .7.3a1 1 0 0 0 .76-1.71A7.06 7.06 0 0 0 12 11m0-4a11.08 11.08 0 0 0-7.78 3.22a1 1 0 0 0 1.42 1.42a9 9 0 0 1 12.72 0a1 1 0 0 0 .71.29a1 1 0 0 0 .71-.29a1 1 0 0 0 0-1.42A11.08 11.08 0 0 0 12 7m10.61.39a15 15 0 0 0-21.22 0a1 1 0 0 0 1.42 1.42a13 13 0 0 1 18.38 0a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42"></svg:path>`,
})
export class UilWifiIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uilWifiRouterIcon],svg[uil-wifi-router-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.9 17a1 1 0 1 0 1 1a1 1 0 0 0-1-1m-3 0a1 1 0 1 0 1 1a1 1 0 0 0-1-1m6 0a1 1 0 1 0 1 1a1 1 0 0 0-1-1M15 8.5a1 1 0 0 1 1.73 0a1 1 0 0 0 1.36.37a1 1 0 0 0 .41-1.37a3 3 0 0 0-5.2 0a1 1 0 0 0 1.7 1m7-3a7 7 0 0 0-12.12 0a1 1 0 0 0 .37 1.37a1 1 0 0 0 .45.13a1 1 0 0 0 .87-.5a5 5 0 0 1 8.66 0a1 1 0 0 0 1.37.37A1 1 0 0 0 22 5.5M17.9 14h-1v-3a1 1 0 1 0-2 0v3h-10a3 3 0 0 0-3 3v2a3 3 0 0 0 3 3h13a3 3 0 0 0 3-3v-2a3 3 0 0 0-3-3m1 5a1 1 0 0 1-1 1h-13a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h13a1 1 0 0 1 1 1Z"></svg:path>`,
})
export class UilWifiRouterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uilWifiSlashIcon],svg[uil-wifi-slash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.92 5.51L3.71 2.29a1 1 0 0 0-1.42 1.42L4.56 6A15.2 15.2 0 0 0 1.4 8.39a1 1 0 0 0 0 1.41a1 1 0 0 0 .71.3a1 1 0 0 0 .7-.29a13 13 0 0 1 3.24-2.35L7.54 9a10.8 10.8 0 0 0-3.32 2.27a1 1 0 1 0 1.42 1.4a8.8 8.8 0 0 1 3.45-2.12l1.62 1.61a7.07 7.07 0 0 0-3.66 1.94a1 1 0 1 0 1.42 1.4A5 5 0 0 1 12 14a4 4 0 0 1 .63.05l7.66 7.66a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42ZM12 16a3 3 0 1 0 3 3a3 3 0 0 0-3-3m0 4a1 1 0 1 1 1-1a1 1 0 0 1-1 1M22.61 8.39A15 15 0 0 0 10.29 4.1a1 1 0 1 0 .22 2A13.07 13.07 0 0 1 21.2 9.81a1 1 0 0 0 1.41-1.42m-4.25 4.24a1 1 0 0 0 1.42-1.4a10.75 10.75 0 0 0-4.84-2.82a1 1 0 1 0-.52 1.92a8.94 8.94 0 0 1 3.94 2.3"></svg:path>`,
})
export class UilWifiSlashIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uilWindIcon],svg[uil-wind-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.5 9a1 1 0 1 0-1-1a1 1 0 0 0 1 1m4 0h7a3 3 0 0 0 0-6a3.06 3.06 0 0 0-1.5.4a1 1 0 0 0-.37 1.37a1 1 0 0 0 1.37.36a1.1 1.1 0 0 1 .5-.13a1 1 0 0 1 0 2h-7a1 1 0 0 0 0 2m-4 4h7a1 1 0 0 0 0-2h-7a1 1 0 0 0 0 2m17-4a1 1 0 1 0-1-1a1 1 0 0 0 1 1m-2 2h-4a1 1 0 0 0 0 2h4a1 1 0 0 1 0 2a1 1 0 0 0 0 2a3 3 0 0 0 0-6m-6 4h-4a1 1 0 0 0 0 2h4a1 1 0 0 1 0 2a1.1 1.1 0 0 1-.5-.13a1 1 0 1 0-1 1.73a3.06 3.06 0 0 0 1.5.4a3 3 0 0 0 0-6m-8 0h-1a1 1 0 0 0 0 2h1a1 1 0 0 0 0-2"></svg:path>`,
})
export class UilWindIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uilWindMoonIcon],svg[uil-wind-moon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 19H7a1 1 0 0 0 0 2h5a1.013 1.013 0 0 1 1 1a1 1 0 0 0 2 0a3.003 3.003 0 0 0-3-3m2-10a1 1 0 1 0-1-1a1 1 0 0 0 1 1m4 0h2a3.003 3.003 0 0 0 3-3a1 1 0 0 0-2 0a1.013 1.013 0 0 1-1 1h-2a1 1 0 0 0 0 2m2 6h-2.161a8 8 0 0 0 1.146-2.95a1 1 0 0 0-1.305-1.117a6 6 0 0 1-1.92.317A6.06 6.06 0 0 1 9.7 5.2a7 7 0 0 1 .098-1.049A1 1 0 0 0 8.49 3.053A8.032 8.032 0 0 0 4.266 15H3a1 1 0 0 0 0 2h5a1 1 0 0 0 0-2H6.83a6.028 6.028 0 0 1 .882-9.36a8.065 8.065 0 0 0 8.048 7.61a8 8 0 0 0 .789-.04A6 6 0 0 1 15.277 15H12a1 1 0 0 0 0 2h8a1 1 0 0 1 0 2a1 1 0 0 0 0 2a3 3 0 0 0 0-6M2.62 19.08a1.2 1.2 0 0 0-.33.21A1.03 1.03 0 0 0 2 20a.99.99 0 0 0 1.38.92a1.2 1.2 0 0 0 .33-.21A1 1 0 0 0 4 20a1.05 1.05 0 0 0-.29-.71a1 1 0 0 0-1.09-.21"></svg:path>`,
})
export class UilWindMoonIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uilWindSunIcon],svg[uil-wind-sun-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 4.5a1 1 0 0 0 1-1v-1a1 1 0 0 0-2 0v1a1 1 0 0 0 1 1m-7 7a1 1 0 0 0-1-1H2a1 1 0 0 0 0 2h1a1 1 0 0 0 1-1m.636 4.95l-.707.707a1 1 0 1 0 1.414 1.414l.707-.707a1 1 0 1 0-1.414-1.414m0-9.9A1 1 0 0 0 6.05 5.136l-.707-.707a1 1 0 0 0-1.414 1.414Zm12.021.293a1 1 0 0 0 .707-.293l.707-.707a1 1 0 1 0-1.414-1.414l-.707.707a1 1 0 0 0 .707 1.707M13 12a1 1 0 0 0 1 1h5a3.003 3.003 0 0 0 3-3a1 1 0 0 0-2 0a1.013 1.013 0 0 1-1 1h-5a1 1 0 0 0-1 1m7 3h-5a1 1 0 0 0 0 2h5a1 1 0 0 1 0 2a1 1 0 0 0 0 2a3 3 0 0 0 0-6M9 19a1 1 0 1 0 1 1a1 1 0 0 0-1-1m6 0h-2a1 1 0 0 0 0 2h2a1.013 1.013 0 0 1 1 1a1 1 0 0 0 2 0a3.003 3.003 0 0 0-3-3m-4-4a3.5 3.5 0 0 1 0-7a3.4 3.4 0 0 1 2.188.774a1 1 0 1 0 1.265-1.548A5.4 5.4 0 0 0 11 6a5.5 5.5 0 0 0 0 11a1 1 0 0 0 0-2"></svg:path>`,
})
export class UilWindSunIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uilWindowIcon],svg[uil-window-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 5a1 1 0 1 0 1 1a1 1 0 0 0-1-1M6 5a1 1 0 1 0 1 1a1 1 0 0 0-1-1m8 0a1 1 0 1 0 1 1a1 1 0 0 0-1-1m6-4H4a3 3 0 0 0-3 3v16a3 3 0 0 0 3 3h16a3 3 0 0 0 3-3V4a3 3 0 0 0-3-3m1 19a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-9h18Zm0-11H3V4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1Z"></svg:path>`,
})
export class UilWindowIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uilWindowGridIcon],svg[uil-window-grid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 2H3a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1M8 20H4V4h4Zm12 0H10v-7h10Zm0-9H10V4h10Z"></svg:path>`,
})
export class UilWindowGridIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uilWindowMaximizeIcon],svg[uil-window-maximize-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 2H3a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1m-1 18H4V10h16Zm0-12H4V4h16Z"></svg:path>`,
})
export class UilWindowMaximizeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uilWindowRestoreIcon],svg[uil-window-restore-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 2H9a3 3 0 0 0-3 3v1H5a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-1h1a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3m-3 17a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-7h12Zm0-9H4V9a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1Zm4 5a1 1 0 0 1-1 1h-1V9a3 3 0 0 0-.18-1H20Zm0-9H8V5a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1Z"></svg:path>`,
})
export class UilWindowRestoreIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uilWindowSectionIcon],svg[uil-window-section-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 2H3a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1M8 20H4V10h4Zm6 0h-4V10h4Zm6 0h-4V10h4Zm0-12H4V4h16Z"></svg:path>`,
})
export class UilWindowSectionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uilWindowsIcon],svg[uil-windows-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 2L11.2 3.6v8l10.8-.1zM10.2 12.5L2 12.4v6.8l8.1 1.1zM2 4.8v6.8h8.1V3.7zm9.1 7.7v7.9L22 22v-9.4z"></svg:path>`,
})
export class UilWindowsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uilWindsockIcon],svg[uil-windsock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.08 5L10 4.33l-3-.25V3a1 1 0 0 0-2 0v18a1 1 0 0 0 2 0v-7.08l3-.25l8.08-.67a1 1 0 0 0 .92-1V6a1 1 0 0 0-.92-1M9 11.75l-2 .16V6.09l2 .16Zm4-.34l-2 .17V6.42l2 .17Zm4-.33l-2 .17v-4.5l2 .17Z"></svg:path>`,
})
export class UilWindsockIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uilWindyIcon],svg[uil-windy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 15a1.73 1.73 0 0 1-.86-.23a3.11 3.11 0 0 0-3.27 0a1.73 1.73 0 0 1-1.73 0a3.11 3.11 0 0 0-3.27 0A1.74 1.74 0 0 1 7 15a1 1 0 0 0 0 2a3.7 3.7 0 0 0 1.9-.52a1.13 1.13 0 0 1 1.2 0a3.75 3.75 0 0 0 3.8 0a1.13 1.13 0 0 1 1.2 0A3.7 3.7 0 0 0 17 17a1 1 0 0 0 0-2m0 4a1.73 1.73 0 0 1-.86-.23a3.11 3.11 0 0 0-3.27 0a1.73 1.73 0 0 1-1.73 0a3.11 3.11 0 0 0-3.27 0A1.74 1.74 0 0 1 7 19a1 1 0 0 0 0 2a3.7 3.7 0 0 0 1.9-.52a1.13 1.13 0 0 1 1.2 0a3.75 3.75 0 0 0 3.8 0a1.13 1.13 0 0 1 1.2 0A3.7 3.7 0 0 0 17 21a1 1 0 0 0 0-2m1.42-11.79a7 7 0 0 0-13.36 1.9A4 4 0 0 0 2 13a4 4 0 0 0 1.34 3a1 1 0 0 0 .66.25a1 1 0 0 0 .75-.35a1 1 0 0 0-.09-1.41A1.93 1.93 0 0 1 4 13a2 2 0 0 1 2-2a1 1 0 0 0 1-1a5 5 0 0 1 9.73-1.61a1 1 0 0 0 .78.66A3 3 0 0 1 20 12a2.93 2.93 0 0 1-.74 2a1 1 0 1 0 1.48 1.33A4.9 4.9 0 0 0 22 12a5 5 0 0 0-3.58-4.79"></svg:path>`,
})
export class UilWindyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uilWordpressIcon],svg[uil-wordpress-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.667 12a8.33 8.33 0 0 0 4.697 7.5L4.388 8.607A8.3 8.3 0 0 0 3.667 12m8.48.729l-2.501 7.265a8.34 8.34 0 0 0 5.121-.133a1 1 0 0 1-.06-.115zm5.479-1.15a4.4 4.4 0 0 0-.687-2.298a3.9 3.9 0 0 1-.819-1.954a1.443 1.443 0 0 1 1.4-1.48q.055.002.107.008a8.33 8.33 0 0 0-12.59 1.568c.196.006.38.01.537.01c.871 0 2.22-.106 2.22-.106a.345.345 0 0 1 .054.687s-.452.052-.954.079l3.035 9.026l1.824-5.47l-1.299-3.556c-.449-.027-.874-.08-.874-.08a.345.345 0 0 1 .053-.686s1.376.106 2.195.106c.871 0 2.221-.106 2.221-.106a.344.344 0 0 1 .053.687s-.452.052-.953.079l3.011 8.958l.86-2.725c.336-.88.54-1.806.606-2.746m1.743-2.72a7.9 7.9 0 0 1-.634 2.985l-2.545 7.359a8.334 8.334 0 0 0 3.123-11.2q.056.426.056.856M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10S17.523 2 12 2m3.659 18.662a9.39 9.39 0 0 1-8.914-.867a9.43 9.43 0 0 1-3.407-4.136a9.39 9.39 0 0 1 .867-8.914a9.43 9.43 0 0 1 4.136-3.406a9.39 9.39 0 0 1 8.914.866a9.43 9.43 0 0 1 3.407 4.136a9.39 9.39 0 0 1-.867 8.914a9.43 9.43 0 0 1-4.136 3.407"></svg:path>`,
})
export class UilWordpressIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uilWordpressSimpleIcon],svg[uil-wordpress-simple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2a10 10 0 1 0 10 10A10.01 10.01 0 0 0 12 2M3.01 12a9 9 0 0 1 .778-3.66l4.289 11.751A8.99 8.99 0 0 1 3.009 12M12 20.99a9 9 0 0 1-2.54-.366l2.698-7.839l2.763 7.572a1 1 0 0 0 .065.123a9 9 0 0 1-2.986.51m1.239-13.207c.541-.028 1.03-.085 1.03-.085a.372.372 0 0 0-.058-.741s-1.457.114-2.397.114c-.883 0-2.368-.114-2.368-.114a.372.372 0 0 0-.057.741s.459.057.943.085l1.401 3.838l-1.968 5.901l-3.274-9.739c.542-.028 1.03-.085 1.03-.085a.372.372 0 0 0-.058-.741s-1.456.114-2.396.114c-.169 0-.368-.004-.579-.01A8.988 8.988 0 0 1 18.071 5.37q-.057-.006-.116-.008a1.557 1.557 0 0 0-1.51 1.596a4.2 4.2 0 0 0 .883 2.109a4.74 4.74 0 0 1 .741 2.48a11 11 0 0 1-.684 2.906l-.897 2.996ZM16.52 19.77l2.746-7.94a8.5 8.5 0 0 0 .684-3.22a7 7 0 0 0-.06-.925a8.99 8.99 0 0 1-3.37 12.085"></svg:path>`,
})
export class UilWordpressSimpleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uilWrapTextIcon],svg[uil-wrap-text-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 7h18a1 1 0 0 0 0-2H3a1 1 0 0 0 0 2m6 8H3a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2m9.5-5H3a1 1 0 0 0 0 2h15.5a1.5 1.5 0 0 1 0 3h-3.09l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0-.21.33a1 1 0 0 0 0 .76a1 1 0 0 0 .21.33l2 2a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42l-.3-.29h3.09a3.5 3.5 0 0 0 0-7"></svg:path>`,
})
export class UilWrapTextIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uilWrenchIcon],svg[uil-wrench-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m21.71 15.58l-4.52-4.51a7 7 0 0 0 .14-1.4A7.67 7.67 0 0 0 6.42 2.72a1 1 0 0 0-.57.74a1 1 0 0 0 .28.88l4.35 4.34l-1.8 1.8l-4.34-4.35a1 1 0 0 0-.88-.27a1 1 0 0 0-.74.56a7.67 7.67 0 0 0 7 10.91a7 7 0 0 0 1.4-.14l4.51 4.52a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42l-4.9-4.9a1 1 0 0 0-.95-.26a6 6 0 0 1-1.48.2A5.67 5.67 0 0 1 4 9.67a6 6 0 0 1 .08-1L8 12.6a1 1 0 0 0 1.42 0l3.18-3.21a1 1 0 0 0 0-1.39L8.71 4.08a6 6 0 0 1 1-.08a5.67 5.67 0 0 1 5.66 5.67a6 6 0 0 1-.2 1.48a1 1 0 0 0 .26.95l4.9 4.9a1 1 0 0 0 1.42-1.42Z"></svg:path>`,
})
export class UilWrenchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uilXIcon],svg[uil-x-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 19a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3a1 1 0 0 0 0-2a5 5 0 0 0-5 5v8a5 5 0 0 0 5 5a1 1 0 0 0 0-2m7.71-3.29a1 1 0 0 0 0-1.42L13.41 12l2.3-2.29a1 1 0 0 0-1.42-1.42L12 10.59l-2.29-2.3a1 1 0 0 0-1.42 1.42l2.3 2.29l-2.3 2.29a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0l2.29-2.3l2.29 2.3a1 1 0 0 0 1.42 0M16 3a1 1 0 0 0 0 2a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3a1 1 0 0 0 0 2a5 5 0 0 0 5-5V8a5 5 0 0 0-5-5"></svg:path>`,
})
export class UilXIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uilXAddIcon],svg[uil-x-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.71 7.29a1 1 0 0 0-1.42 0L11 9.59l-2.29-2.3a1 1 0 1 0-1.42 1.42L9.59 11l-2.3 2.29a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0l2.29-2.3l2.29 2.3a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42L12.41 11l2.3-2.29a1 1 0 0 0 0-1.42M7 18a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3a1 1 0 0 0 0-2a5 5 0 0 0-5 5v8a5 5 0 0 0 5 5a1 1 0 0 0 0-2M18 7v6a1 1 0 0 0 2 0V7a5 5 0 0 0-5-5a1 1 0 0 0 0 2a3 3 0 0 1 3 3m3 11h-1v-1a1 1 0 0 0-2 0v1h-1a1 1 0 0 0 0 2h1v1a1 1 0 0 0 2 0v-1h1a1 1 0 0 0 0-2"></svg:path>`,
})
export class UilXAddIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uilYenIcon],svg[uil-yen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.55 2.17a1 1 0 0 0-1.38.28L12 10.2L6.83 2.45a1 1 0 0 0-1.66 1.1l5 7.45H7a1 1 0 0 0 0 2h4v2H7a1 1 0 0 0 0 2h4v4a1 1 0 0 0 2 0v-4h4a1 1 0 0 0 0-2h-4v-2h4a1 1 0 0 0 0-2h-3.13l5-7.45a1 1 0 0 0-.32-1.38"></svg:path>`,
})
export class UilYenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uilYenCircleIcon],svg[uil-yen-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 1a11 11 0 1 0 11 11A11 11 0 0 0 12 1m0 20a9 9 0 1 1 9-9a9 9 0 0 1-9 9m2.83-14.55L12 10.7L9.17 6.45a1 1 0 0 0-1.39-.28a1 1 0 0 0-.28 1.38l2.11 3.17H9a1 1 0 0 0 0 2h2l.05.08v.92H9a1 1 0 0 0 0 2h2V18a1 1 0 0 0 2 0v-2.28h2a1 1 0 0 0 0-2h-2v-.92l.05-.08H15a1 1 0 0 0 0-2h-.61l2.11-3.17a1 1 0 0 0-.28-1.38a1 1 0 0 0-1.39.28"></svg:path>`,
})
export class UilYenCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uilYinYangIcon],svg[uil-yin-yang-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 15.5a1 1 0 1 0 1 1a1 1 0 0 0-1-1M12 2a6 6 0 0 0-.562.029A9.993 9.993 0 0 0 12 22a6 6 0 0 0 .562-.028A9.993 9.993 0 0 0 12 2m0 18A7.989 7.989 0 0 1 6.71 6.015A5.484 5.484 0 0 0 12 13a3.5 3.5 0 0 1 0 7m5.29-2.015A5.484 5.484 0 0 0 12 11a3.5 3.5 0 0 1 0-7a7.989 7.989 0 0 1 5.29 13.985M12 6.5a1 1 0 1 0 1 1a1 1 0 0 0-1-1"></svg:path>`,
})
export class UilYinYangIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uilYoutubeIcon],svg[uil-youtube-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 9.71a8.5 8.5 0 0 0-.91-4.13a2.92 2.92 0 0 0-1.72-1A78 78 0 0 0 12 4.27a79 79 0 0 0-8.34.3a2.87 2.87 0 0 0-1.46.74c-.9.83-1 2.25-1.1 3.45a48 48 0 0 0 0 6.48a9.6 9.6 0 0 0 .3 2a3.14 3.14 0 0 0 .71 1.36a2.86 2.86 0 0 0 1.49.78a45 45 0 0 0 6.5.33c3.5.05 6.57 0 10.2-.28a2.9 2.9 0 0 0 1.53-.78a2.5 2.5 0 0 0 .61-1a10.6 10.6 0 0 0 .52-3.4c.04-.56.04-3.94.04-4.54M9.74 14.85V8.66l5.92 3.11c-1.66.92-3.85 1.96-5.92 3.08"></svg:path>`,
})
export class UilYoutubeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uilYoutubeAltIcon],svg[uil-youtube-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M14.89 10.48l-3-1.74a1.73 1.73 0 0 0-1.76 0a1.71 1.71 0 0 0-.87 1.52v3.48a1.71 1.71 0 0 0 .87 1.52a1.73 1.73 0 0 0 1.76 0l3-1.74a1.76 1.76 0 0 0 0-3zm-3.65 2.84v-2.64L13.52 12zM19 4H5a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3zm1 13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1z" fill="currentColor"></svg:path>`,
})
export class UilYoutubeAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uil3PlusIcon],svg[uil-3-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 5h1v1a1 1 0 0 0 2 0V5h1a1 1 0 0 0 0-2h-1V2a1 1 0 0 0-2 0v1h-1a1 1 0 0 0 0 2m-2.5 4a3 3 0 0 0-3-3h-1a3 3 0 0 0-3 3a1 1 0 0 0 2 0a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H12a1 1 0 0 0 0 2h.5a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1a1 1 0 0 0-2 0a3 3 0 0 0 3 3h1a3 3 0 0 0 3-3v-1a3 3 0 0 0-.78-2a3 3 0 0 0 .78-2Zm6.1 0a1 1 0 0 0-.78 1.18a9 9 0 1 1-7-7a1 1 0 1 0 .4-2A10.8 10.8 0 0 0 12 1a11 11 0 1 0 11 11a10.8 10.8 0 0 0-.22-2.2A1 1 0 0 0 21.6 9"></svg:path>`,
})
export class Uil3PlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uil21PlusIcon],svg[uil-21-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 18a1 1 0 0 0 1-1V7a1 1 0 0 0-2 0v10a1 1 0 0 0 1 1m1-13h1v1a1 1 0 0 0 2 0V5h1a1 1 0 0 0 0-2h-1V2a1 1 0 0 0-2 0v1h-1a1 1 0 0 0 0 2m3.6 4a1 1 0 0 0-.78 1.18a9 9 0 1 1-7-7a1 1 0 1 0 .4-2A10.8 10.8 0 0 0 12 1a11 11 0 1 0 11 11a10.8 10.8 0 0 0-.22-2.2A1 1 0 0 0 21.6 9M10 13h1a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3h-1a3 3 0 0 0-3 3a1 1 0 0 0 2 0a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-1a3 3 0 0 0-3 3v3a1 1 0 0 0 1 1h5a1 1 0 0 0 0-2H9v-2a1 1 0 0 1 1-1"></svg:path>`,
})
export class Uil21PlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
